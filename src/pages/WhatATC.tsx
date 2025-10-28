import { Modal } from '../components/modal/Modal.tsx';
import { useState } from 'react';
import { WhatATCModal } from '../components/modalWhatATC/WhatATCModal.tsx';

export const WhatATC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='p-8'>
      <p className='mt-[107px] font-bold leading-[100%] text-[128px] text-center'>
        АТС НОВОГО ПОКОЛЕНИЯ — ЭТО:
      </p>
      <div className='mt-[27px] flex justify-center'>
        <div className='w-[1020px] m-[100px]'>
          <img
            className='size-[182px] m-auto'
            src='/images/CheckCircleOutlined.png'
            alt=''
          />
          <p className='text-extra text-deep-blue mt-[30px] text-center'>
            Стабильность, которой можно
            <br />
            доверять
          </p>
          <p className='text-5xl mt-[30px] leading-[120%]'>
            Создайте единую среду корпоративных<br></br>
            коммуникаций, рассчитанную на<br></br>
            высокие абонентские нагрузки и<br></br>
            распределённую инфраструктуру. Наша<br></br>
            АТС нового поколения обеспечит<br></br>
            предсказуемую производительность в<br></br>
            долгосрочной перспективе.
          </p>
        </div>

        <div className='w-[1020px] m-[100px]  mb-0'>
          <img
            className='size-[182px] m-auto'
            src='/images/CheckCircleOutlined.png'
            alt=''
          />
          <p className='text-extra text-deep-blue mt-[30px] text-center'>
            Омниканальная связь для<br></br>
            предприятий любого<br></br>
            масштаба
          </p>
          <p className='text-5xl mt-[30px] leading-[120%]'>
            Собирайте воедино голосовую связь,<br></br>
            чаты и видеоконференции, чтобы<br></br>
            сократить затраты на коммуникации и<br></br>
            повысить эффективность<br></br>
            межфилиального взаимодействия. Это<br></br>
            особенно актуально для холдингов с<br></br>
            широкой географией присутствия, где<br></br>
            требуется безупречная слаженность<br></br>
            между офисами, производственными<br></br>
            площадками или удаленными<br></br>
            подразделениями.
          </p>
        </div>

        <div className='w-[1020px] m-[100px]  mb-0'>
          <img
            className='size-[182px] m-auto'
            src='/images/CheckCircleOutlined.png'
            alt=''
          />
          <p className='text-extra text-deep-blue mt-[30px] text-center'>
            Гибкость в одном<br></br>
            решении
          </p>
          <p className='text-5xl mt-[30px] leading-[120%]'>
            Разнообразные модули в составе АТС<br></br>
            нового поколения покрывают весь<br></br>
            спектр задач: от телефонизации<br></br>
            офисов до оснащения оперативной<br></br>
            диспетчерской связью<br></br>
            производственные площадки.
          </p>
        </div>
      </div>

      <div
        onClick={() => setIsModalOpen(true)}
        className='mr-[150px] border-2 border-black rounded-[60px] w-[1050px] h-[240px] float-right flex justify-between items-center p-[45px]'
      >
        <p className='text-extra font-medium justify-center'>
          Как это поможет<br></br>вашему бизнесу?
        </p>
        <img
          className='h-full w-[68px] pt-[15px] pb-[15px] mr-[80px]'
          src='/images/round_right.png'
          alt=''
        />
      </div>

      {/* Модальное окно */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        width='w-[2530px]'
        height='h-[1424px]'
      >
        <WhatATCModal />
      </Modal>
    </div>
  );
};
