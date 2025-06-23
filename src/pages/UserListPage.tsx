import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  isActive: boolean;
  createdAt: string;
}

function UserListPage() {
  const { token } = useAuth();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/users', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUsers(res.data))
      .catch(() => alert('Erro ao carregar usuários'));
  }, [token]);

  return (
    <div>
      <h2>Usuários</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.name} | {u.email} | {u.role} | {u.isActive ? 'Ativo' : 'Inativo'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserListPage;

