import {useState} from "react";
import {Modal} from "../components/modal/Modal.tsx";
import {MAccessMAK} from "../components/modalATC/MAccessMAK.tsx";
import {IPATCCometa} from "../components/modalATC/IPATCCometa.tsx";
import {ImSwitch5SSW5} from "../components/modalATC/ImSwitch5SSW5.tsx";

export const ModelsSmallATC = () => {
    const [isModalMAccessMAKOpen, setIsModalMAccessMAKOpen] = useState(false);
    const [isModalIPATCCometaOpen, setIsModalIPATCCometaOpen] = useState(false);
    const [isModalImSwitch5SSW5Open, setIsModalImSwitch5SSW5Open] = useState(false);

    return (
        <div className='mt-[200px]'>
            <p className='text-extraBig font-bold absolute text-right ml-[200px]'>
                Варианты<br/>подключения<br/>аналоговых абонентов
            </p>
            <div className='flex bg-[url("/images/ModuleBack.png")] w-[2856px] h-[1496px] m-auto'>
                <img className='ml-[120px] w-[709px] h-[998px] mt-[450px]' src='/images/ModuleServer.png' alt=''/>
                <div>
                    <div onClick={() => setIsModalMAccessMAKOpen(true)}
                         className='flex border-2 border-black rounded-[60px] w-[1662px] h-[120px] ml-[196px] mt-[57px] items-center'>
                        <p className='text-extra border-2 border-black rounded-[60px] w-[120px] h-[120px] text-center leading-[120px]'>
                            1
                        </p>
                        <p className='text-large ml-[30px]'>
                            imSwitch 5 — программный коммутатор 5 класса ПРОТЕЙ
                        </p>
                    </div>

                    <div onClick={() => setIsModalIPATCCometaOpen(true)}
                         className='flex border-2 border-black rounded-[60px] w-[1800px] h-[120px] ml-[196px] mt-[40px] items-center'>
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

                    <div onClick={() => setIsModalImSwitch5SSW5Open(true)}
                         className='flex border-2 border-black rounded-[60px] w-[1349px] h-[120px] ml-[196px] mt-[40px] items-center'>
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

                    <Modal
                        isOpen={isModalMAccessMAKOpen}
                        onClose={() => setIsModalMAccessMAKOpen(false)}
                        width='w-[2530px]'
                        height='h-[1424px]'
                    >
                        <MAccessMAK/>
                    </Modal>

                    <Modal
                        isOpen={isModalIPATCCometaOpen}
                        onClose={() => setIsModalIPATCCometaOpen(false)}
                        width='w-[2530px]'
                        height='h-[1424px]'
                    >
                        <IPATCCometa/>
                    </Modal>

                    <Modal
                        isOpen={isModalImSwitch5SSW5Open}
                        onClose={() => setIsModalImSwitch5SSW5Open(false)}
                        width='w-[2530px]'
                        height='h-[1424px]'
                    >
                        <ImSwitch5SSW5/>
                    </Modal>
                </div>
            </div>
        </div>
    );
};