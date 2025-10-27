import type { FC, ReactNode } from 'react';

interface PopupProps {
  isOpen: boolean;
  children: ReactNode;
  position: {
    top: string;
    left: string;
  };
}

export const Popup: FC<PopupProps> = ({ isOpen, children, position }) => {
  if (!isOpen) return null;

  return (
    <div
      className='absolute z-50'
      style={{ top: position.top, left: position.left }}
    >
      {/* Хвостик */}
      <img
        src='/images/Vector 59.svg'
        alt=''
        className='absolute bottom-0 -left-[33px] w-[33px] h-[82.5px]'
      />

      {/* Основной блок */}
      <div
        className='bg-white p-[60px] relative'
        style={{
          borderRadius: '60px 60px 60px 0',
        }}
      >
        <div className='text-gray-800'>{children}</div>
      </div>
    </div>
  );
};
