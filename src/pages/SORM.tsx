import { useState } from 'react';
import {
  KonverterSorm,
  PassivnyiSorm1,
  SormIms,
  XsmMux,
  XsmMux7068,
  XsmMux86,
  YakorDmrIsbd,
  YakorDmrTf,
  YakorIsbd,
  YakorTf,
  YakorTtrIsbd,
  YakorTtrTf,
} from '../components/modalCopm';
import { Modal } from '../components/modal/Modal';
import { Advantages } from '../ui/advantages/Advantages';

export const SORM = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const modalComponents: Record<string, React.ComponentType> = {
    modal1: XsmMux7068,
    modal2: PassivnyiSorm1,
    modal3: SormIms,
    modal4: XsmMux86,
    modal5: YakorIsbd,
    modal6: YakorTtrIsbd,
    modal7: XsmMux,
    modal8: KonverterSorm,
    modal9: YakorTf,
    modal10: YakorDmrTf,
    modal11: YakorDmrIsbd,
    modal12: YakorTtrTf,
  };

  const ActiveModalComponent = activeModal
    ? modalComponents[activeModal]
    : null;

  return (
    <div className='px-[200px] py-[143px] flex gap-[240px]  relative'>
      <div className='flex flex-col gap-[143px]'>
        <div>
          <p className='text-[128px] font-bold'>
            Технические средства <br /> оперативно-розыскных
            <br /> мероприятий
          </p>
        </div>
        <div>
          <img src='/images/Copm1.png' alt='' />
          <img
            className='absolute top-[689px] left-[1081px]'
            src='/images/NEOS.svg'
            alt=''
          />
        </div>
      </div>
      <div className='flex flex-col gap-[35px] '>
        <div className='w-[1495px] bg-light-gray flex flex-col gap-[35px] rounded-[60px]'>
          <div className='flex justify-center items-center bg-dark-gray py-5 rounded-[60px] text-large text-center'>
            Приказ Госкомсвязи <br /> № 268 от 19.11.2012
          </div>
          <div className='px-[60px] py-[30px] flex-wrap  flex gap-[27px]'>
            <Advantages
              border={true}
              text='XSM.MUX.70/268'
              showIcon={false}
              textClassName='text-medium'
              py={true}
              onClick={() => {
                setActiveModal('modal1');
              }}
            />
            <Advantages
              border={true}
              text='Пассивный СОРМ-1'
              showIcon={false}
              textClassName='text-medium'
              py={true}
              onClick={() => {
                setActiveModal('modal2');
              }}
            />
            <Advantages
              border={true}
              text='XSM.MUX'
              showIcon={false}
              textClassName='text-medium'
              py={true}
              onClick={() => {
                setActiveModal('modal7');
              }}
            />
            <Advantages
              border={true}
              text='Конвертер СОРМ'
              showIcon={false}
              textClassName='text-medium'
              py={true}
              onClick={() => {
                setActiveModal('modal8');
              }}
            />
            <Advantages
              border={true}
              text='СОРМ IMS для фиксированной связи'
              showIcon={false}
              textClassName='text-medium'
              py={true}
              onClick={() => {
                setActiveModal('modal3');
              }}
            />
          </div>
        </div>
        <div className='w-[1495px] bg-light-gray flex flex-col gap-[35px] rounded-[60px]'>
          <div className='flex justify-center items-center bg-dark-gray py-5 rounded-[60px] text-large text-center'>
            Приказ Госкомсвязи № 86 от 26.02.2018
          </div>
          <div className='px-[60px] py-[30px] flex-wrap  flex gap-[27px]'>
            <Advantages
              border={true}
              text='ЯКОРЬ-ТФ'
              showIcon={false}
              textClassName='text-medium'
              py={true}
              onClick={() => {
                setActiveModal('modal9');
              }}
            />
            <Advantages
              border={true}
              text='XSM.MUX.86'
              showIcon={false}
              textClassName='text-medium'
              py={true}
              onClick={() => {
                setActiveModal('modal4');
              }}
            />
            <Advantages
              border={true}
              text='ЯКОРЬ-DMR-ТФ'
              showIcon={false}
              textClassName='text-medium'
              py={true}
              onClick={() => {
                setActiveModal('modal10');
              }}
            />
            <Advantages
              border={true}
              text='ЯКОРЬ-TTR-ТФ'
              showIcon={false}
              textClassName='text-medium'
              py={true}
              onClick={() => {
                setActiveModal('modal8');
              }}
            />
          </div>
        </div>
        <div className='w-[1495px] bg-light-gray flex flex-col gap-[35px] rounded-[60px]'>
          <div className='flex justify-center items-center bg-dark-gray py-5 rounded-[60px] text-large text-center'>
            Приказ Госкомсвязи <br /> №268 от 19.11.2012
          </div>
          <div className='px-[60px] py-[30px] flex-wrap  flex gap-[27px]'>
            <Advantages
              border={true}
              text='XSM.MUX.70/268'
              showIcon={false}
              textClassName='text-medium'
              py={true}
              onClick={() => {
                setActiveModal('modal1');
              }}
            />
            <Advantages
              border={true}
              text='Пассивный СОРМ-1'
              showIcon={false}
              textClassName='text-medium'
              py={true}
              onClick={() => {
                setActiveModal('modal2');
              }}
            />
            <Advantages
              border={true}
              text='XSM.MUX'
              showIcon={false}
              textClassName='text-medium'
              py={true}
              onClick={() => {
                setActiveModal('modal7');
              }}
            />
          </div>
        </div>
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
    </div>
  );
};
