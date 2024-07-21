import Button from '@/components/common/Button';
import { useGoogleLogin } from '@react-oauth/google';
import { FaGoogle } from 'react-icons/fa';

const GoogleOauth = () => {
  const login = useGoogleLogin({
    onSuccess: (response) => console.log(response),
    onError: () => {},
  });

  return (
    <Button
    classes={
        'bg-transparent text-green-600 border-2 border hover:border-green-500 hover:transition-[border] mb-6'
      }
      classesLogo="text-green-600 text-2xl"
      text="Entrar com o Google"
      action={() => login()}
      hasLogo={true}
      icon={FaGoogle}
    />
  );
};

export default GoogleOauth;
