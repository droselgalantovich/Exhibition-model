export const IPATCCometa = () => {
    return (
        <div>
            <div className='w-[1319px] bg-deep-blue top-0 left-1/2 transform -translate-x-1/2 absolute flex items-center justify-center pt-[30px] pb-[43px] text-extra text-white leading-[1] rounded-b-[60px]'>
                IP-АТС Cometa MS
            </div>

            <div className='mt-[205px] flex items-start justify-between'>
                <div>
                    <p className='text-extraBig font-bold w-[750px] text-center'>
                        Cometa MS
                    </p>
                    <p className='text-large mt-[34px] text-center'>
                        АТС на 500-1000 SIP, 48 аналоговых абонентов
                    </p>
                </div>

                <div className='h-[302px] w-[3px] bg-black'/>

                <div>
                    <p className='text-extraBig font-bold w-[750px] text-center'>
                        Cometa L/MS
                    </p>
                    <p className='text-large mt-[34px] text-center'>
                        Малая АТС на 50 SIP, 8 аналоговых абонентов
                    </p>
                </div>

                <div className='h-[302px] w-[3px] bg-black'/>

                <div>
                    <p className='text-extraBig w-[750px] text-center font-bold'>
                        Cometa MG
                    </p>
                    <p className='text-large mt-[34px] text-center'>
                        Шлюз 48 аналоговых абонентов
                    </p>
                </div>
            </div>

            <div className='mt-[150px] flex flex-col justify-center items-center'>
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