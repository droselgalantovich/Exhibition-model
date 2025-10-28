export const ModelsSmallATC = () => {
    return (
        <div className='mt-[200px]'>
            <p className='text-extraBig font-bold absolute text-right ml-[200px]'>
                Варианты<br />подключения<br />аналоговых абонентов
            </p>
            <div className='flex bg-[url("/images/ModuleBack.png")] w-[2856px] h-[1496px] m-auto'>
                <img className='ml-[120px] w-[709px] h-[998px] mt-[450px]' src='/images/ModuleServer.png' alt=''/>
                <div >
                    <div className='flex border-2 border-black rounded-[60px] w-[1662px] h-[120px] ml-[196px] mt-[57px] items-center'>
                        <p className='text-extra border-2 border-black rounded-[60px] w-[120px] h-[120px] text-center leading-[120px]'>
                            1
                        </p>
                        <p className='text-large ml-[30px]'>
                            imSwitch 5 — программный коммутатор 5 класса ПРОТЕЙ
                        </p>
                    </div>

                    <div className='flex border-2 border-black rounded-[60px] w-[1800px] h-[120px] ml-[196px] mt-[40px] items-center'>
                        <p className='text-extra border-2 border-black rounded-[60px] w-[120px] h-[120px] text-center leading-[120px]'>
                            2
                        </p>
                        <p className='text-large ml-[30px]'>
                            Модульный абонентский шлюз «mAccessMAK» (Кассета CS720)
                        </p>
                    </div>

                    <div className='flex ml-[196px] mt-[40px]'>
                        <img className='w-[940px] h-[565px]' src='/images/ModuleMAKfront.png' alt=''/>
                        <img className='w-[792px] h-[566px] ml-[44px]' src='/images/ModuleMAKfrontA.png' alt=''/>
                    </div>

                    <div className='flex border-2 border-black rounded-[60px] w-[1349px] h-[120px] ml-[196px] mt-[40px] items-center'>
                        <p className='text-extra border-2 border-black rounded-[60px] w-[120px] h-[120px] text-center leading-[120px]'>
                            3
                        </p>
                        <p className='text-large ml-[30px]'>
                            Абонентский шлюз «Комета MS» (Cometa MS)
                        </p>
                    </div>

                    <div className='flex ml-[196px] mt-[40px] items-center'>
                        <img className='w-[820px] h-[87px]' src='/images/IP_ATCback.png' alt=''/>
                        <img className='w-[876px] h-[233px] ml-[61px]' src='/images/IP_ATCfront.png' alt=''/>
                    </div>
                </div>
            </div>
        </div>
    );
};