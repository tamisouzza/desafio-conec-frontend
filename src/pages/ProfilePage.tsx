import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';

function UserProfilePage() {
  const { user, token, login } = useAuth();
  const [name, setName] = useState(user?.name || '');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess('');

    try {
      
      
      await axios.put(
        `http://localhost:3000/users/${user?.id}`,
        {
          name,
          ...(password ? { password } : {}),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      
      login({ ...user!, name }, token!);

      setSuccess('Perfil atualizado com sucesso!');
      setPassword('');
    } catch (error) {
      alert('Erro ao atualizar perfil');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '1rem' }}>
      <h2>Meu Perfil</h2>
      <form onSubmit={handleUpdate}>
        <label>
          Nome:
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label>
          Nova senha:
          <input
            type="password"
            placeholder="Deixe em branco para manter"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button type="submit" style={{ marginTop: '1rem' }}>
          Atualizar
        </button>
      </form>

      {success && <p style={{ color: 'green' }}>{success}</p>}

      <p><strong>Email:</strong> {user?.email}</p>
      <p><strong>Criado em:</strong> {new Date(user?.createdAt || '').toLocaleDateString()}</p>
    </div>
  );
}

export default UserProfilePage;


