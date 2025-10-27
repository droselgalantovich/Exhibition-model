export const AuthenticationAuthorization = () => {
  return (
    <div>
      <div className=' flex items-center gap-[91px] absolute top-0 left-0'>
        <div className='leading-[120%] text-extra text-center text-white font-medium w-[1319px] h-[151px] flex items-center justify-center bg-deep-blue rounded-br-[60px] '>
          Аутентификация и авторизиция
        </div>
        <div className='text-extraBig font-bold text-deep-blue'>PASS</div>
      </div>
      <div className='mt-[136px] text-large  leading-[120%]'>
        <div className='flex flex-col gap-0 leading-[120%]'>
          <div className='flex items-center pl-6 gap-6'>
            <span>•</span>{' '}
            <p>
              Единая точка входа для всех модулей, система аутентификации и
              авторизации
            </p>
          </div>
          <div className='flex items-center pl-6 gap-6'>
            <span>•</span> <p>Удобное управление правами пользователей</p>
          </div>

          <div className='  flex items-center pl-6 gap-6'>
            <span>•</span> <p>Повышенная безопасность</p>
          </div>
        </div>
      </div>
      <div className='flex mt-[55px] items-center justify-center'>
        <img src='/images/sixCol2.png' alt='' />
      </div>
    </div>
  );
};
