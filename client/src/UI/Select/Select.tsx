'use client';
import React, { FC, useState } from 'react';
import Image from 'next/image';
import { ArrowIcon } from '@public/index';
import { SelectProps } from './types';

const Select: FC<SelectProps> = ({ items, value, setValue }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex cursor-pointer gap-1" onClick={toggleMenu}>
      <div className="inline-block">
        <span>{value}</span>
        {isOpen && (
          <div className="absolute mt-2 rounded bg-gray p-2.5 text-black">
            {items.map((item) => (
              <button key={`${item}_language`} className="block w-full text-left" onClick={() => setValue(item)}>
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
      <Image
        width={16}
        height={16}
        className={`${isOpen ? 'rotate-180' : 'rotate-0'} h-auto w-full`}
        src={ArrowIcon}
        alt="arrowIcon"
      />
    </div>
  );
};

export default Select;
