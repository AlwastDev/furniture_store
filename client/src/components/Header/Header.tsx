'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CartIcon, HeartIcon, MailIcon, PersonIcon, PhoneIcon, SearchIcon } from '@public/index';
import { CurrencyEnum, LanguageEnum } from '@static/enums';
import { Select } from '@UI/index';
import { RootState } from '@store/store';
import { getKeysFromEnum } from '@static/helpers';
import { setCurrency, setLanguage } from '@store/reducers/reducerMethods';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';
import { lato } from '@static/fonts';

const Header = () => {
  const dispatch = useAppDispatch();
  const { language } = useAppSelector((state: RootState) => state.languages);
  const { currency } = useAppSelector((state: RootState) => state.currencies);

  return (
    <header className="flex flex-col text-base font-semibold text-white">
      <div className="flex justify-center bg-purple">
        <div className="flex h-11 w-[75rem] items-center justify-between">
          <div className="flex gap-12">
            <div className="flex items-center gap-2.5">
              <Image width={16} height={16} src={MailIcon} alt="mailIcon" />
              <span>mhhasanul@gmail.com</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Image width={16} height={16} src={PhoneIcon} alt="phoneIcon" />
              <span>(12345)67890</span>
            </div>
          </div>
          <div className="flex gap-4">
            <Select
              items={getKeysFromEnum(LanguageEnum)}
              value={language}
              setValue={(newLanguage) => dispatch(setLanguage(newLanguage))}
            />
            <Select
              items={getKeysFromEnum(CurrencyEnum)}
              value={currency}
              setValue={(newCurrency) => dispatch(setCurrency(newCurrency))}
            />
            <button className="flex items-center gap-1">
              <span>Login</span>
              <Image width={16} height={16} src={PersonIcon} alt="personIcon" />
            </button>
            <button className="flex items-center gap-1">
              <span>Wishlist</span>
              <Image width={16} height={16} src={HeartIcon} alt="heartIcon" />
            </button>
            <button className="flex items-center">
              <Image width={18} height={18} src={CartIcon} alt="cartIcon" />
            </button>
          </div>
        </div>
      </div>
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
    </header>
  );
};

export default Header;
