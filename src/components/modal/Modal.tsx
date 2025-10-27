import type { FC, ReactNode, MouseEvent } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  width?: string;
  height?: string;
}

export const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  width = 'w-[2530px]',
  height = 'h-[1424px]',
}) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    // Закрывать только при клике на backdrop, не на содержимое
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className='fixed inset-0 z-100
       flex items-center justify-center bg-black/50'
      onClick={handleBackdropClick}
    >
      <div
        style={{ borderRadius: '60px' }}
        className={`relative bg-[#003575] border-[2px] border-deep-blue ${width} ${height} overflow-hidden`}
        onClick={e => e.stopPropagation()}
      >
        {/* Кнопка закрытия */}
        <button
          onClick={onClose}
          className='absolute top-[52px] right-[60px] cursor-pointer w-[48px] h-[48px] flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors z-20'
          aria-label='Закрыть'
        >
          <img src='/images/BurgerClose.png' />
        </button>

        {/* Белый фон внутри (не перехватывает клики) */}
        <div className='absolute inset-0 bg-white rounded-[58px] m-[2px] pointer-events-none' />

        {/* Контент */}
        <div className='relative z-10 w-full h-full p-[100px] bg-transparent'>
          {children}
        </div>
      </div>
    </div>
  );
};
