import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import axios from 'axios';

function UserProfilePage() {
  const { user, token, login } = useAuth();
  const [name, setName] = useState(user?.name || '');
  const [password, setPassword] = useState('');

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.patch(
        `http://localhost:3000/users/${user?.id}`,
        { name, password: password || undefined },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      login(res.data, token!);
      alert('Perfil atualizado!');
    } catch {
      alert('Erro ao atualizar perfil');
    }
  };

  return (
    <div>
      <h2>Meu Perfil</h2>
      <form onSubmit={handleUpdate}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <input placeholder="Nova senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Atualizar</button>
      </form>
      <p>Email: {user?.email}</p>
      <p>Data de Criação: {new Date(user?.createdAt || '').toLocaleDateString()}</p>
    </div>
  );
}

export default UserProfilePage;
