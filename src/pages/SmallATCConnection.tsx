export const SmallATCConnection = () => {
    return (
        <div className='w-[3592px] h-[1595px] flex flex-row justify-start m-auto mt-[146px]'>
            <img src='/images/ConnectingBackground.png' className='w-[3592px] h-[1595px] rounded-[60px]' alt=''/>
            <div className='absolute mt-[50px] ml-[35px]'>
                <p className='text-extraBig font-bold leading-[100%] w-[936px] ml-[70px]'>
                    Центральный узел связи
                </p>
                <img className='w-[851px] h-[1093px] mt-[150px]' src='/images/ConnectingServer.png' alt=''/>
            </div>
            <img src='/images/ConnectingScheme.png' alt='' className='w-[2600px] absolute ml-[936px] mt-[50px]'/>
        </div>
    );
};