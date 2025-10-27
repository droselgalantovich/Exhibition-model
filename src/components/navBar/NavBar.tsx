import { Link, useNavigate } from 'react-router-dom';
import { LinkNav } from '../../ui/link/LinkNav';

export const NavBar = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Возврат на один роут назад
  };

  return (
    <nav className='bg-deep-blue flex flex-row px-50 pt-16.25 pb-20.5'>
      <div className='flex items-center gap-[74px] mr-29'>
        <button onClick={handleBackClick}>
          <img src='/images/Back.png' alt='Button Back' className='w-22 h-22' />
        </button>
        <Link to={'/'}>
          <img
            src='/images/Home.png'
            alt='Button Home'
            className='w-26.5 h-25'
          />
        </Link>
      </div>
      <div className='flex items-center gap-12.5'>
        <LinkNav path='/ATCsmall'>АТС малой ёмкости</LinkNav>
        <LinkNav path='/ATCmedium'>АТС средней ёмкости</LinkNav>
        <LinkNav path='/ATClarge'>АТС большой ёмкости</LinkNav>
        <LinkNav path='/VIP'>VIP-АТС</LinkNav>
        <LinkNav path='/SORM'>СОРМ</LinkNav>
        <LinkNav
          imgSrc='/images/QuestionCircleOutlined.png'
          imgAlt='about'
          path='/WhatATC'
        >
          Что такое АТС нового поколения?
        </LinkNav>
        <img src='/images/ProteiLogo.png' alt='Protei Logo' />
      </div>
    </nav>
  );
};
