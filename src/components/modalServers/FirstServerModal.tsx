export const FirstServerModal = () => {
    return (
        <div className='flex flex-col'>
            <div
                className='w-[531px] font-semibold bg-deep-blue top-0 left-1/2 transform -translate-x-1/2 absolute flex items-center justify-center  pt-[30px] pb-[30px] text-medium text-white leading-[1]'>
                Server 1
            </div>
            <div className='absolute bg-deep-blue h-[65px] w-[60px] mt-[80px]'></div>
            <div className='absolute bg-deep-blue h-[65px] w-[60px] mt-[80px] ml-[470px]'></div>
            <img className='absolute w-[527px] h-[475px] mt-[93px] ml-[1px]' src='/images/FirstServerFrame.png' alt=''/>
        </div>
    );
};