import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SearchIcon } from '@public/index';
import { lato } from '@static/fonts';

const Navigation = () => {
  return (
    <div className="my-5 flex justify-center text-darkBlue">
      <div className="flex h-9 w-[75rem] items-center justify-between">
        <h2 className="text-4xl font-bold">Nekto</h2>
        <nav className={lato.className}>
          <ul className="flex gap-9 font-normal">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href={'/pages'}>Pages</Link>
            </li>
            <li>
              <Link href={'/products'}>Products</Link>
            </li>
            <li>
              <Link href={'/blog'}>Blog</Link>
            </li>
            <li>
              <Link href={'/shop'}>Shop</Link>
            </li>
            <li>
              <Link href={'/contact'}>Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="flex h-full w-[20rem] font-normal">
          <label hidden htmlFor="searchInput">
            Search
          </label>
          <input
            id="searchInput"
            className={`${lato.className} h-full w-full appearance-none border-2 border-r-0 
              border-solid border-gray px-1 font-normal`}
            type="search"
          />
          <button className="flex h-[2.5rem] w-[4.5rem] items-center justify-center bg-pink">
            <Image width={21} height={21} src={SearchIcon} alt="searchIcon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
