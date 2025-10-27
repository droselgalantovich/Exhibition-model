import { useState } from 'react';
import { Modal } from '../components/modal/Modal';

export const ATCLarge = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='pl-[200px] pt-[143px] pb-[244px] inline-flex flex-col '>
      <div className='absolute z-50 left-[892px]'>
        <img src='/images/mapTheCity.png' alt='' />
      </div>
      <div className='flex flex-col gap-[7px] items-start z-100'>
        <p className='text-extraBig font-bold leading-[100%]'>
          АТС большой ёмкости
        </p>
        <p className='text-extra leading-[100%]'>От 10 000 абонентов</p>
      </div>
      <div className='mt-[105px] z-100'>
        <div className='flex gap-[61px] items-start'>
          <img src='/images/IconOK.png' alt='Icon OK' />
          <p className='text-[40px] font-normal'>
            Единая платформа для компаний <br /> регионального уровня
          </p>
        </div>
        <div className='flex gap-[61px] items-start'>
          <img src='/images/IconOK.png' alt='Icon OK' />
          <p className='text-[40px] font-normal'>
            Объединяет VoIP-телефонию, видеоконференц- <br /> связь,
            унифицированные коммуникации <br /> и интегрируется с ГГС, ЛСО,
            радиосвязью <br />и другими системами
          </p>
        </div>
      </div>
      <div
        className='z-100 rounded-[60px] flex items-center justify-start gap-10 border-[2px] border-black mt-[644px] pr-[112px] pl-[61px] py-[42px] '
        onClick={() => setIsModalOpen(true)}
      >
        <p className='w-[1054px] leading-[100%] text-extra font-medium'>
          Организация АТС большой <br /> ёмкости{' '}
        </p>

        <img src='/images/IconBtn.png' alt='' />
      </div>

      {/* Модальное окно */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        width='w-[2839px]'
        height='h-[1904px]'
      >
        <div>
          <img src='/images/HighwayDiagram.png' alt='highway diagram' />
        </div>
      </Modal>
    </div>
  );
};
