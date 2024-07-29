type InputProps = {
  type: string;
  placeholder: string;
};

const Input: React.FC<InputProps> = ({ type, placeholder }) => {
  return (
    <>
      <input
        className="pl-4 pr-12 py-4 rounded-xl bg-green-100 dark:bg-white focus:outline-green-600 w-full"
        type={type}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
