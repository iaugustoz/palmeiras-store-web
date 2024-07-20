import Button from '@/components/common/Button';
import { useGoogleLogin } from '@react-oauth/google';

const GoogleOauth = () => {
  const login = useGoogleLogin({
    onSuccess: (response) => console.log(response),
    onError: () => {},
  });

  return (
    <Button
      color={''}
      colorLogo=""
      text="Entrar com o Google"
      action={() => login()}
      hasLogo={true}
    />
  );
};

export default GoogleOauth;
