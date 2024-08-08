import React from 'react';
import Button from '../common/Button';

const sizes: string[] = ['S', 'M', 'L', 'XL', '2XL'];

const SelectSize: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-y-4 mt-4">
        <h2 className="font-medium">Tamanho:</h2>
        <div className="flex flex-wrap gap-1">
          {sizes.map((s: string) => (
            <Button
              classes="border rounded-xl py-2 px-4 text-sm focus:border-green-500 focus:bg-green-100"
              text={s}
              key={s}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SelectSize;
