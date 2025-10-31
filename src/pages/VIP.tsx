import { useState } from 'react';
import { Modal } from '../components/modal/Modal';
import { SchemaConnection } from '../components/modalVipAtc/SchemaConnection';
import { Advantages } from '../ui/advantages/Advantages';
import { Popup } from '../components/popup/Popup';

export const VIP = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [activePopup, setActivePopup] = useState<number | null>(null);

  const modalComponents: Record<string, React.ComponentType> = {
    modal1: SchemaConnection,
  };

  const ActiveModalComponent = activeModal
    ? modalComponents[activeModal]
    : null;

    const popupContent = {
        1: {
            position: {top: '80px', left: '1830px'},
            content: (
                <div className='flex flex-col gap-6 max-w-[1031px]'>
                    <p className='text-bigmedium font-semibold'>
                        Каждому VIP-пользователю настраивается индивидуальная логика
                        обработки входящих и исходящих звонков, которая учитывает стиль
                        работы, помощников и особенности взаимодействия.
                    </p>
                    <div className='space-y-2 text-[32px]'>
                        <p className='flex items-start text-start'>
                            ✅ Управляемая идентификация при исходящих <br />
                            вызовах на внутренние и внешние номера
                        </p>
                        <p className='flex items-start'>
                            ✅ Автоматический дозвон при недоступности
                        </p>
                        <p className='flex items-start'>✅ Вызовы между VIP-абонентами</p>
                        <p className='flex items-start'>
                            ✅ Интеграция с шеф-секретарскими группами <br />
                            (ШСГ)
                        </p>
                        <p className='flex items-start'>
                            ✅ Поддержка нескольких рабочих мест
                        </p>
                    </div>
                </div>
            )
        },
        2: {
            position: {top: '320px', left: '1830px'},
            content: (
                <div className='flex flex-col gap-6 max-w-[1031px] '>
                    <p className='text-bigmedium font-semibold'>
                        Позволяет выстроить гибкую модель обработки вызовов между
                        руководителем, его секретарями и ассистентами.
                    </p>
                    <div className='space-y-2 text-[32px]'>
                        <p className='flex items-start text-start'>
                            ✅ Входящий звонок обрабатывается <br />
                            не напрямую, а через помощников
                        </p>
                        <p className='flex items-start'>
                            ✅ Автоматический дозвон при недоступности
                        </p>
                        <p className='flex items-start'>
                            ✅ Eсли кто-то из секретарей недоступен —<br /> вызов принимает
                            другой
                        </p>
                        <p className='flex items-start'>
                            ✅ Настраивается логика переадресации, <br />
                            очередности, приоритета
                        </p>
                    </div>
                </div>
            )
        },
        3: {
            position: {top: '560px', left: '1830px'},
            content: (
                <div className='flex flex-col gap-6 max-w-[1031px] '>
                    <p className='text-bigmedium font-semibold'>
                        Коммуникации VIP защищены на каждом <br />
                        уровне:
                    </p>
                    <div className='space-y-2 text-[32px]'>
                        <p className='flex items-start text-start'>
                            ✅ Выделенный сегмент сети для VIP-АТС
                        </p>
                        <p className='flex items-start'>
                            ✅ Взаимодействие с корпоративной сетью <br />
                            через SBC
                        </p>
                        <p className='flex items-start'>
                            ✅ Полное шифрование сигнального и <br /> голосового трафика
                        </p>
                        <p className='flex items-start'>✅ Запрет на запись звонков</p>
                    </div>
                </div>
            )
        },
        4: {
            position: {top: '680px', left: '1830px'},
            content: (
                <div className='flex flex-col gap-6 max-w-[1031px] '>
                    <p className='text-bigmedium font-semibold'>
                        Исключает утечку чувствительной <br /> информации в процессе вызова:
                    </p>
                    <div className='space-y-2 text-[32px]'>
                        <p className='flex items-start text-start'>
                            ✅ Не отображаются ФИО и номера VIP- <br /> абонента
                        </p>
                        <p className='flex items-start'>
                            ✅ При переадресации скрыт внутренний <br /> и мобильный номер
                        </p>
                        <p className='flex items-start'>
                            ✅ Даже при передаче вызова на сотовый — <br /> вызывающий абонент
                            не узнаёт конечный <br />
                            номер
                        </p>
                    </div>
                </div>
            )
        }
    }

  return (
    <div className='px-[200px] pt-[163px] pb-[50px]  flex justify-between items-center '>
      <div className='absolute top-[413px]'>
        {' '}
        <img src='./images/bodyImageVipAtc.png' alt='' />
      </div>
      <div>
        <div className='flex flex-col gap-[50px]'>
          <img
            className='absolute top-[522px] left-[145px]'
            src='./images/vVip1.svg'
            alt=''
          />
          <img
            className='absolute top-[680px] left-[145px]'
            src='/images/vVip2.svg'
            alt=''
          />
          <img
            className='absolute top-[822px] left-[145px]'
            src='/images/vVip3.svg'
            alt=''
          />
          <img
            className='absolute top-[968px] left-[145px]'
            src='/images/vVip4.svg'
            alt=''
          />

          <div className='flex gap-[60px] justify-center items-center py-[30px] px-[80px] border-[2px] rounded-[60px] w-fit'>
            <img src='./images/crown.svg' alt='' />
            <p className='text-veryBig font-bold'>VIP-АТС</p>
          </div>
          <div className='flex ml-[70px] flex-col gap-[30px]'>
            <div
              className='z-100 cursor-pointer'
              onClick={() => {
                  setActivePopup(activePopup === 1 ? null : 1)
              }}
            >
              <Advantages
                text='Персональные сценарии обработки вызовов'
                border={true}
                showIcon={false}
                showIcon2={true}
                textClassName='text-black text-large cursor-pointer'
                padding='py-[30px] px-[50px]'
                wFitContent='w-[1520px]'
              />
            </div>

            <div
              className='z-100 cursor-pointer'
              onClick={() => {
                  setActivePopup(activePopup === 2 ? null : 2)
              }}
            >
              <Advantages
                text='Организация шеф-секретарской группы'
                border={true}
                showIcon={false}
                showIcon2={true}
                textClassName='text-black text-large cursor-pointer'
                padding='py-[30px] px-[50px]'
                wFitContent='w-[1520px]'
              />
            </div>

            <div
              className='z-100 cursor-pointer'
              onClick={() => {
                  setActivePopup(activePopup === 3 ? null : 3)
              }}
            >
              {' '}
              <Advantages
                text='Приватность телефонных переговоров'
                border={true}
                showIcon={false}
                showIcon2={true}
                textClassName='text-black text-large cursor-pointer'
                padding='py-[30px] px-[50px]'
                wFitContent='w-[1520px]'
              />
            </div>
            <div
              className='z-100 cursor-pointer'
              onClick={() => {
                  setActivePopup(activePopup === 4 ? null : 4)
              }}
            >
              <Advantages
                text='Скрытие персональных данных'
                border={true}
                showIcon={false}
                showIcon2={true}
                textClassName='text-black text-large cursor-pointer'
                padding='py-[30px] px-[50px]'
                wFitContent='w-[1520px]'
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          className='absolute top-[1673px] left-[285px]'
          src='/images/callstation1.png'
          alt=''
        />
        <img
          className='absolute top-[1616px] left-[1088px]'
          src='/images/callstation2.png'
          alt=''
        />
        <img
          className='absolute top-[426px] left-[1911px]'
          src='/images/workroom.png'
          alt=''
        />
      </div>

      <div className='absolute bg-[#f9fbf9] top-[1468px] left-[546px] flex items-center justify-center w-[137px] h-[137px] border-[2px] border-deep-blue rounded-[127px]'>
        <p className='text-extraBig font-bold text-deep-blue'>1</p>
      </div>
      <div className='absolute bg-white top-[1468px] left-[1291px] flex items-center justify-center w-[137px] h-[137px] border-[2px] border-deep-blue rounded-[127px]'>
        <p className='text-extraBig font-bold text-deep-blue'>2</p>
      </div>

      <div
        onClick={() => setActiveModal('modal1')}
        className='absolute top-[1171px] left-[2018px] z-100 rounded-[60px] flex items-center justify-start gap-10 border-[2px] border-black mt-[644px] pr-[112px] pl-[61px] py-[42px] '
      >
        <p className='w-[1054px] leading-[100%] text-extra font-medium'>
          Схема организации VIP-АТС
        </p>

        <img src='/images/IconBtn.png' alt='' />
      </div>
      <div className='flex gap-[328px] absolute top-[1993px] left-[348px]'>
        <p className='text-large text-deep-blue'>ОНИКС С15-1-0-1Л-Н</p>
        <p className='text-large text-deep-blue'>ОНИКС А-21Т-В</p>
      </div>

      {activeModal && ActiveModalComponent && (
        <Modal
          width='w-[2530px]'
          height='h-[1424px]'
          isOpen={true}
          onClose={() => setActiveModal(null)}
        >
          <ActiveModalComponent />
        </Modal>
      )}

        {/* Popups */}
        {activePopup &&
            popupContent[activePopup as keyof typeof popupContent] && (
                <Popup
                    isOpen={true}
                    position={
                        popupContent[activePopup as keyof typeof popupContent].position
                    }
                >
                    {popupContent[activePopup as keyof typeof popupContent].content}
                </Popup>
            )}
    </div>
  );
};
