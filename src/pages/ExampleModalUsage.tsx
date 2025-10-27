import { useState } from 'react';
import { Modal } from '../components/modal/Modal';

export const ExampleModalUsage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Открыть модалку</button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        width='w-[1400px]' 
        height='h-[900px]' 
      >
        {/* Здесь ваш контент */}
        <h2 className='text-[64px] font-bold mb-[40px]'>Заголовок модалки</h2>
        <p className='text-[32px]'>
          Здесь может быть любой контент: текст, изображения, формы и т.д.
        </p>
        <div className='mt-[60px]'>
          <button
            onClick={() => setIsModalOpen(false)}
            className='bg-orange-main px-[60px] py-[30px] rounded-[120px] text-white text-[48px]'
          >
            Закрыть
          </button>
        </div>
      </Modal>
    </div>
  );
};
