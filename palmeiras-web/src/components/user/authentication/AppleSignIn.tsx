import AppleLogin from 'react-apple-login';
import { SiApple } from 'react-icons/si';
import Button from '@/components/common/Button';

const Apple = () => {
  return (
    <AppleLogin
      clientId="your-client-id" 
      redirectURI="https://google.com.br"
      usePopup={true}
      render={({ onClick }) => (
        <Button
          classes="bg-transparent text-green-600 border-2 border hover:border-green-500 hover:transition-[border]"
          classesLogo="text-green-600 text-2xl"
          text="Entrar com a Apple"
          action={onClick}
          hasLogo={true}
          icon={SiApple}
        />
      )}
    />
  );
};

export default Apple;
