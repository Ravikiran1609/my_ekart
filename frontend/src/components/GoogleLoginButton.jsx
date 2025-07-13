import { GoogleLogin, googleLogout } from '@react-oauth/google';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

const GoogleLoginButton = ({ onSuccess }) => {
  const handleSuccess = async (credentialResponse) => {
    try {
      const { credential } = credentialResponse;
      const decoded = jwt_decode(credential);

      const res = await axios.post('/api/google-login', { token: credential });
      onSuccess(res.data.user); // send user back to parent

    } catch (err) {
      console.error('Google Login Error:', err.message);
    }
  };

  return (
    <div className="my-4">
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={() => console.error('Login Failed')}
      />
    </div>
  );
};

export default GoogleLoginButton;

