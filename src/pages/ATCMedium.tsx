import {Link} from "react-router-dom";
import {useState} from "react";
import {Modal} from "../components/modal/Modal.tsx";
import {CommunicationDistributionCenter} from "../components/modalATC/CommunicationDistributionCenter.tsx";

export const ATCMedium = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className='pl-[200px] pt-[143px] pb-[244px] inline-flex flex-row '>
            <Link to='/CentralNodeMediumATC' className='absolute w-[150px] h-[150px] mt-[550px] ml-[1150px]'/>
            <Link to='/CentralNodeMediumATC' className='absolute w-[150px] h-[150px] mt-[650px] ml-[120px]' />
            <Link to='/CentralNodeMediumATC' className='absolute w-[150px] h-[150px] mt-[1250px] ml-[50px]'/>
            <Link to='/CentralNodeMediumATC' className='absolute w-[150px] h-[150px] mt-[1200px] ml-[1060px]'/>
            <Link to='/CentralNodeMediumATC' className='absolute w-[150px] h-[150px] mt-[900px] ml-[950px]'/>
            <Link to='/ObjectNodeMediumATC' className='absolute w-[300px] h-[300px] mt-[460px] ml-[500px]'/>

            <div className='bg-deep-blue h-[1600px] rounded-[60px]'>
                <p className='text-large leading-[100%] text-white text-center mt-[46px] mb-[57px]'>
                    Телефонизация на примере<br />промышленных холдингов
                </p>
                <img className='w-[1472px]' src='/images/ATCMedium.png' alt=''/>
            </div>
            <div className='flex flex-col gap-[7px] items-start z-100 ml-[123px]'>
                <p className='text-extraBig font-bold leading-[100%]'>
                    АТС средней ёмкости
                </p>
                <p className='text-extra leading-[100%]'>До 10 000 абонентов</p>

                <div className='flex items-start justify-between mt-[105px]'>
                    <img className='w-[134px]' src='/images/GreenCheck.png' alt=''/>
                    <p className='text-[40px] font-semibold ml-[60px]'>
                        Для крупных предприятий с территориально<br />
                        распределённой структурой или удалёнными<br />
                        производственными площадками и филиалами
                    </p>
                </div>

                <div className='flex items-start justify-between mt-[50px]'>
                    <img className='w-[134px]' src='/images/GreenCheck.png' alt=''/>
                    <div>
                        <p className='text-[40px] font-semibold ml-[60px]'>
                            Области применения:
                        </p>
                        <p className='text-[40px] ml-[60px]'>
                            <span className='ml-[10px] mr-[10px]'>·</span> Промышленные холдинги<br/>
                            <span className='ml-[10px] mr-[10px]'>·</span> Энергетические компании и генерирующие объекты<br/>
                            <span className='ml-[10px] mr-[10px]'>·</span> Транспортно-логистические комплексы<br />
                            <span className='ml-[10px] mr-[10px]'>·</span> Объединённые корпоративные сети<br/>
                            <span className='ml-[42px]'></span>с удалёнными офисами
                        </p>
                    </div>
                </div>

                <div className='flex items-center justify-between mt-[50px]'>
                    <img className='w-[134px]' src='/images/GreenCheck.png' alt=''/>
                    <p className='text-[40px] font-semibold ml-[60px]'>
                        20+ сервисов в одном решении
                    </p>
                </div>

                <Link to='/CentralNodeMediumATC'
                      className='mt-[220px] mr-[150px] border-2 border-black rounded-[60px] w-[1050px] h-[240px] float-right flex justify-between p-[45px] items-center'>
                    <p className='text-extra font-medium justify-center'>Центральный<br />узел связи</p>
                    <img className='h-[114px] w-[70px] pt-[15px] pb-[15px] mr-[10px]' src='/images/RoundRight.png'
                         alt=''/>
                </Link>
                <div onClick={() => setIsModalOpen(true)}
                      className='mr-[150px] border-2 border-black rounded-[60px] w-[1050px] h-[240px] float-right flex justify-between p-[45px] items-center mt-[28px]'>
                    <p className='text-extra font-medium justify-center'>Распределенный<br></br>узел связи</p>
                    <img className='h-[114px] w-[70px] pt-[15px] pb-[15px] mr-[10px]' src='/images/RoundRight.png'
                         alt=''/>
                </div>

            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                width='w-[2530px]'
                height='h-[1424px]'
            >
                <CommunicationDistributionCenter/>
            </Modal>
        </div>
    );
};
