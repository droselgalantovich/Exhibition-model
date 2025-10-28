export const ATCSmall = () => {
    return (
        <div className='pl-[200px] pt-[143px] pb-[244px] inline-flex flex-row '>
            <div className='bg-deep-blue h-[1600px] rounded-[60px]'>
                <p className='text-large leading-[100%] text-white text-center mt-[46px] mb-[57px]'>
                    Телефонизация на примере<br />административного здания
                </p>
                <img className='w-[1472px]' src='/images/ATCSmall.png' alt=''/>
            </div>
            <div className='flex flex-col gap-[7px] items-start z-100 ml-[123px]'>
                <p className='text-extraBig font-bold leading-[100%]'>
                    АТС малой ёмкости
                </p>
                <p className='text-extra leading-[100%]'>До 1 000 абонентов</p>

            </div>
        </div>
    );
};
