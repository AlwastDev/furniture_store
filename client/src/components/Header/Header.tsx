'use client';
import React from 'react';
import Image from 'next/image';
import { CartIcon, HeartIcon, MailIcon, PersonIcon, PhoneIcon } from '@public/index';
import { CurrencyEnum, LanguageEnum } from '@static/enums';
import { Select } from '@UI/index';
import { RootState } from '@store/store';
import { getKeysFromEnum } from '@static/helpers';
import { setCurrency, setLanguage } from '@store/reducers/reducerMethods';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';

const Header = () => {
  const dispatch = useAppDispatch();
  const { language } = useAppSelector((state: RootState) => state.languages);
  const { currency } = useAppSelector((state: RootState) => state.currencies);

  return (
    <header className="flex h-11 justify-center bg-purple font-semibold text-white">
      <div className="flex w-[75rem] items-center justify-between">
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
    </header>
  );
};

export default Header;
