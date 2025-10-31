import type {FC, ReactNode, MouseEvent} from 'react';

interface SmallModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    width?: string;
}

export const SmallModal: FC<SmallModalProps> = ({
                                          isOpen,
                                          onClose,
                                          children,
                                          width = 'w-[531px]',
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
                style={{borderRadius: '60px'}}
                className={`relative bg-[#003575] border-[2px] border-deep-blue ${width} h-[572px] overflow-hidden`}
                onClick={e => e.stopPropagation()}
            >
                {/* Кнопка закрытия */}
                <button
                    onClick={onClose}
                    className='absolute top-[27px] right-[65px] cursor-pointer w-[38px] h-[38px] flex items-center justify-center text-white hover:text-gray-700 transition-colors z-20'
                    aria-label='Закрыть'
                >
                    <img src='/images/CloseBurgerSmall.png' alt=''/>
                </button>

                {/* Белый фон внутри (не перехватывает клики) */}
                <div className='absolute inset-0 bg-white rounded-[58px] m-[2px] pointer-events-none'/>

                {/* Контент */}
                <div className='relative z-10 w-full h-full bg-transparent'>
                    {children}
                </div>
            </div>
        </div>
    );
};
