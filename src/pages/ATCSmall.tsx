import {Link} from "react-router-dom";

export const ATCSmall = () => {
    return (
        <div className='pl-[200px] pt-[143px] pb-[244px] inline-flex flex-row '>
            <div className='bg-deep-blue h-[1600px] rounded-[60px]'>
                <p className='text-large leading-[100%] text-white text-center mt-[46px] mb-[57px]'>
                    Телефонизация на примере<br/>административного здания
                </p>
                <img className='w-[1472px]' src='/images/ATCSmall.png' alt=''/>
            </div>
            <div className='flex flex-col gap-[7px] items-start z-100 ml-[123px]'>
                <p className='text-extraBig font-bold leading-[100%]'>
                    АТС малой ёмкости
                </p>
                <p className='text-extra leading-[100%]'>До 1 000 абонентов</p>

                <div className='flex items-start justify-between mt-[105px]'>
                    <img className='w-[134px]' src='/images/GreenCheck.png' alt=''/>
                    <p className='text-[40px] font-semibold ml-[60px]'>
                        Для небольших предприятий,<br />
                        удалённых площадок и объектов<br />
                        критической информационной <br />
                        инфраструктуры
                    </p>
                </div>

                <div className='flex items-start justify-between mt-[50px]'>
                    <img className='w-[134px]' src='/images/GreenCheck.png' alt=''/>
                    <div>
                        <p className='text-[40px] font-semibold ml-[60px]'>
                            Области применения:
                        </p>
                        <p className='text-[40px] ml-[60px]'>
                            <span className='ml-[10px] mr-[10px]'>·</span> Административные и<br/>
                            <span className='ml-[42px]'></span>корпоративные комплексы<br />
                            <span className='ml-[10px] mr-[10px]'>·</span> Промышленные предприятия<br />
                            <span className='ml-[10px] mr-[10px]'>·</span> Транспортные узлы (ЖД-станции,<br/>
                            <span className='ml-[42px]'></span>аэропорты, морские порты)
                        </p>
                    </div>
                </div>

                <div className='flex items-center justify-between mt-[50px]'>
                    <img className='w-[134px]' src='/images/GreenCheck.png' alt=''/>
                    <p className='text-[40px] font-semibold ml-[60px]'>
                        20+ сервисов в одном решении
                    </p>
                </div>

                <Link to='/SmallATCConnection'
                    className='mt-[170px] mr-[150px] border-2 border-black rounded-[60px] w-[1050px] h-[240px] float-right flex justify-between p-[45px] items-center'>
                    <p className='text-extra font-medium justify-center'>Схема подключения</p>
                    <img className='h-[114px] w-[70px] pt-[15px] pb-[15px] mr-[10px]' src='/images/RoundRight.png'
                         alt=''/>
                </Link>
                <Link to='/ModelsSmallATC'
                    className='mr-[150px] border-2 border-black rounded-[60px] w-[1050px] h-[240px] float-right flex justify-between p-[45px] items-center mt-[28px]'>
                    <p className='text-extra font-medium justify-center'>Варианты подключения<br></br>аналоговых
                        абонентов</p>
                    <img className='h-[114px] w-[70px] pt-[15px] pb-[15px] mr-[10px]' src='/images/RoundRight.png'
                         alt=''/>
                </Link>
            </div>
            <img className='w-[730px] h-[1514px]' src='/images/Server.png' alt=''/>
        </div>
    );
};
