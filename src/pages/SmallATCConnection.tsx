import {SmallModal} from "../components/modal/SmallModal.tsx";
import {FirstServerModal} from "../components/modalServers/FirstServerModal.tsx";
import {SecondServerModal} from "../components/modalServers/SecondServerModal.tsx";
import {ThirdServerModal} from "../components/modalServers/ThirdServerModal.tsx";
import {useState} from "react";

export const SmallATCConnection = () => {
    const [isModalFirstServerOpen, setIsModalFirstServerOpen] = useState(false);
    const [isModalSecondServerOpen, setIsModalSecondServerOpen] = useState(false);
    const [isModalThirdServerOpen, setIsModalThirdServerOpen] = useState(false);

    return (
        <div className='w-[3592px] h-[1595px] flex flex-row justify-start m-auto mt-[146px]'>
            <img src='/images/ConnectingBackground.png' className='w-[3592px] h-[1595px] rounded-[60px]' alt=''/>
            <div className='absolute mt-[50px] ml-[111px]'>
                <p className='text-extraBig font-bold leading-[100%] w-[936px]'>
                    Центральный узел связи
                </p>
                <div className='absolute mt-[500px] ml-[-80px]'>
                    <div onClick={() => setIsModalFirstServerOpen(true)} className='flex'>
                        <div
                            className='w-[368px] h-[120px] bg-white rounded-[60px] border-2 border-black flex justify-center items-center'>
                            <p className='text-large'>Server 1</p>
                        </div>
                        <img className='w-[194px] h-[203px] mt-[55px]' src='/images/FirstServerVector.png' alt=''/>
                    </div>

                    <div onClick={() => setIsModalSecondServerOpen(true)} className='flex mt-[-120px]'>
                        <div
                            className='w-[368px] h-[120px] bg-white rounded-[60px] border-2 border-black flex justify-center items-center'>
                            <p className='text-large'>Server 2</p>
                        </div>
                        <img className='w-[139px] h-[173px] mt-[55px]' src='/images/SecondServerVector.png' alt=''/>
                    </div>

                    <div onClick={() => setIsModalThirdServerOpen(true)} className='flex mt-[-90px]'>
                        <div
                            className='w-[368px] h-[120px] bg-white rounded-[60px] border-2 border-black flex justify-center items-center'>
                            <p className='text-large'>Server 3</p>
                        </div>
                        <img className='w-[114px] h-[140px] mt-[55px]' src='/images/ThirdServerVector.png' alt=''/>
                    </div>
                </div>
                <div>
                    <img className='w-[776px] h-[1093px] mt-[150px]' src='/images/ModuleServer.png' alt=''/>
                </div>

            </div>
            <img src='/images/ConnectingScheme.png' alt='' className='w-[2600px] absolute ml-[936px] mt-[50px]'/>

            <SmallModal
                isOpen={isModalFirstServerOpen}
                onClose={() => setIsModalFirstServerOpen(false)}
                width='w-[531px]'
            >
                <FirstServerModal/>
            </SmallModal>

            <SmallModal
                isOpen={isModalSecondServerOpen}
                onClose={() => setIsModalSecondServerOpen(false)}
                width='w-[531px]'
            >
                <SecondServerModal/>
            </SmallModal>

            <SmallModal
                isOpen={isModalThirdServerOpen}
                onClose={() => setIsModalThirdServerOpen(false)}
                width='w-[531px]'
            >
                <ThirdServerModal/>
            </SmallModal>

        </div>
    );
};