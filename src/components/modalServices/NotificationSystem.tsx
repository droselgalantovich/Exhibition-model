export const NotificationSystem = () => {
  return (
    <div>
      <div className=' flex gap-[91px] absolute top-0 left-0'>
        <div className='text-extra text-white font-medium w-[1319px] h-[151px] flex items-center justify-center bg-deep-blue  rounded-br-[60px]'>
          Система оповещения
        </div>
        <div className='text-extraBig font-bold text-deep-blue'>SN2</div>
      </div>
      <div className='mt-[136px] text-large leading-[120%]'>
        Массово рассылайте важные сообщения (по звонкам, SMS, e-mail) по
        расписанию, вручную <br />
        или автоматическим триггером. Благодаря этому сервису можно быстро
        реагировать <br /> на экстренные ситуации или уведомлять о важных
        событиях все филиалы холдинга.
      </div>
      <div className='mt-[37px] flex items-center justify-center'>
        <img src='/images/threeCol3.png' alt='' />
      </div>
    </div>
  );
};
