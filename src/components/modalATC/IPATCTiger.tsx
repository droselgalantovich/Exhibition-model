export const IPATCTiger = () => {
    return (
        <div>
            <div className='w-[1319px] bg-deep-blue top-0 left-1/2 transform -translate-x-1/2 absolute flex items-center justify-center pt-[30px] pb-[43px] text-extra text-white leading-[1] rounded-b-[60px]'>
                IP-АТС Tiger
            </div>

            <div className='mt-[181px] flex items-start justify-between m-[50px]'>
                <div className='w-[600px] h-[340px] flex items-center justify-center border-2 border-deep-blue rounded-[60px]'>
                    <p className='text-large text-center'>
                        Полноценная IP-АТС<br />на 500-1000 SIP
                    </p>
                </div>

                <div className='w-[600px] h-[340px] flex items-center justify-center border-2 border-deep-blue rounded-[60px]'>
                    <p className='text-large text-center'>
                        Поддержка E1<br />(до 8 шт.)
                    </p>
                </div>

                <div className='w-[600px] h-[340px] flex items-center justify-center border-2 border-deep-blue rounded-[60px]'>
                    <p className='text-large text-center'>
                        Без аналоговых<br/>интерфейсов
                    </p>
                </div>
            </div>

            <div className='mt-[137px] flex flex-col justify-center items-center'>
                <p className='text-extraBig text-center font-bold'>
                    Когда использовать?
                </p>
                <p className='text-medium mt-[34px]'>
                    <span className='ml-[10px] mr-[10px]'>·</span> Малая АТС в составе крупной системы<br/>
                    <span className='ml-[10px] mr-[10px]'>·</span> Присоединение по FXO (8-16 портов)<br />
                    <span className='ml-[10px] mr-[10px]'>·</span> Подключение аналоговых телефонов на удаленных объектах<br/>
                    <span className='ml-[10px] mr-[10px]'>·</span> Присоединение по E1 (до 4 шт.)<br/>
                    <span className='ml-[10px] mr-[10px]'>·</span> Узел локальной отказоустойчивости<br/>
                </p>
            </div>
        </div>
    );
};