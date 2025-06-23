import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { FormWrapper, Input, Button, Title } from '../styles/Form';
import { SocialLogin } from '../components/SocialLogin';

function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/auth/login', {
        email,
        password,
      });

      
      const { user, token } = response.data;
      login(user, token);

      if (user.role === 'admin') {
        navigate('/users');
      } else {
        navigate('/profile');
      }
    } catch (error) {
      alert('Falha no login. Verifique seu email e senha.');
    }
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <Title>Login</Title>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Entrar</Button>
      </form>

      <div style={{ marginTop: '1rem', textAlign: 'center' }}>
        <p>ou entre com</p>
        <SocialLogin />
      </div>
    </FormWrapper>
  );
}

export default LoginPage;
