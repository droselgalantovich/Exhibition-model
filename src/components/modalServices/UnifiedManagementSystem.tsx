export const UnifiedManagementSystem = () => {
  return (
    <div className=' flex flex-col items-center justify-center'>
      <div className=' flex gap-[91px] absolute top-0 left-0'>
        <div className='text-extra text-white font-medium pt-[30px] pl-[174px] pb-[43px] pr-[175px] bg-deep-blue  rounded-br-[60px]'>
          Единая система управления
        </div>
        <div className='text-extraBig font-bold text-deep-blue'>Globus</div>
      </div>
      <div className='mt-[156px] text-extra font-medium'>
        Управляйте всеми модулями АТС нового поколения через единую <br />
        систему управления.
      </div>
      <div className='mt-[87px]'>
        <img src='/images/monPanel.png' alt='' />
      </div>
    </div>
  );
};
