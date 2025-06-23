import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const firebaseConfig = {
  apiKey: "AIzaSyANe_OIAnJ7WQ5TA8lgR7ZvNRk_2NU4D44",
  authDomain: "logindesafio-770bb.firebaseapp.com",
  projectId: "logindesafio-770bb",
  storageBucket: "logindesafio-770bb.firebasestorage.app",
  messagingSenderId: "257141342427",
  appId: "1:257141342427:web:1c59576809fdc363feccfe"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const SocialLogin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      
      const result = await signInWithPopup(auth, provider);
      const googleToken = await result.user.getIdToken();

      
      const response = await axios.post('http://localhost:3000/auth/google', {
        token: googleToken,
      });

      const { user, token } = response.data;
      login(user, token);

      
      user.role === 'admin' ? navigate('/users') : navigate('/profile');
    } catch (error) {
      console.error(error);
      alert('Falha no login com Google.');
    }
  };

  return (
    <button onClick={handleGoogleLogin} style={{ padding: '0.8rem', backgroundColor: '#db4437', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
      Entrar com Google
    </button>
  );
};
