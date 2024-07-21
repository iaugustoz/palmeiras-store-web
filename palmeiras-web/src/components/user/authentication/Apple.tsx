import Button from '@/components/common/Button';
import { SiApple } from 'react-icons/si';

const Apple = () => {
  return (
    <Button
      classes={
        'bg-transparent text-green-600 border-2 border hover:border-green-500 hover:transition-[border'
      }
      classesLogo="text-green-600 text-2xl"
      text="Entrar com a Apple"
      action={() => {}}
      hasLogo={true}
      icon={SiApple}
    />
  );
};

export default Apple;
