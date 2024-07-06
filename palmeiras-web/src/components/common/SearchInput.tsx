import { Search } from 'lucide-react';

interface SearchInputProps {
  className?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ className }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search className="h-5 w-5 text-gray-500" />
      </div>
      <input
        type="text"
        placeholder="Pesquisar"
        className="pl-10 pr-4 py-2 w-full rounded-lg bg-[#edeff2] focus:outline-green-600"
      />
    </div>
  );
};

export default SearchInput;
