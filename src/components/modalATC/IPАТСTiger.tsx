export const IPATCTiger = () => {
    return (
        <div>
            <div className='w-[1319px] bg-deep-blue top-0 left-1/2 transform -translate-x-1/2 absolute flex items-center justify-center px-[383px] pt-[30px] pb-[43px] text-extra text-white leading-[1] rounded-b-[60px]'>
                mAccessMAK/MS
            </div>
            <div className='mt-[155px] text-large'>
                <b className='font-semibold'>Используется как модульный абонентский шлюз:</b><br/>
                mAccessMAK/MS (в состав Кассеты CS720 входит  SoftSwitch5) → полноценная АТС<br/>
                mAccessMAK/MG (Кассета CS720 без предустановленного SoftSwitch5) → шлюз для<br/>
                аналоговых абонентов
            </div>
            <div className='mt-[57px] flex items-start justify-between'>
                <div>
                    <p className='text-large font-semibold'>
                        mAccessMAK/MS (АТС, SoftSwitch5):
                    </p>
                    <p className='text-medium mt-[20px]'>
                        <span className='ml-[10px] mr-[10px]'>·</span> До 1000 SIP, до 768 аналоговых абонентов<br/>
                        <span className='ml-[10px] mr-[10px]'>·</span> E1-потоки (до 12 шт.), резервирование потоков<br />
                        <span className='ml-[10px] mr-[10px]'>·</span> Подключение АДАСЭ-терминалов (до 15 линий)<br/>
                        <span className='ml-[10px] mr-[10px]'>·</span> FXO-платы для аналоговых линий оператора (30 линий/плата)<br/>
                        <span className='ml-[10px] mr-[10px]'>·</span> Резервируемые процессорные модули (HA-кластер, Active-<br/>
                        <span className='ml-[38px]'></span>Standby)
                    </p>

                    <p className='text-large font-semibold mt-[57px]'>
                        Когда использовать?
                    </p>
                    <p className='text-medium mt-[20px]'>
                        <span className='ml-[10px] mr-[10px]'>·</span> Узел локальной отказоустойчивости<br/>
                        <span className='ml-[10px] mr-[10px]'>·</span> Подключение аналоговых телефонов (до 768 на одну кассету)<br/>
                        <span className='ml-[10px] mr-[10px]'>·</span> Присоединение к оператору связи или другим системам <br/>
                        <span className='ml-[38px]'></span>связи по E1/FXO
                    </p>
                </div>

                <div className='h-[605px] w-[3px] bg-black'/>

                <div>
                    <p className='text-large font-semibold'>
                        mAccessMAK/MG (шлюз, без<br/>предустановленного<br/>SoftSwitch5)
                    </p>
                    <p className='text-medium mt-[20px] w-[1016px] mr-[50px]'>
                        <span className='ml-[10px] mr-[10px]'>·</span> Для увеличения количества аналоговых телефонов<br/>
                        <span className='ml-[38px]'></span>(768+ абонентов)
                        <span className='ml-[10px] mr-[10px]'>·</span> Подключение АДАСЭ-терминалов<br />
                        <span className='ml-[10px] mr-[10px]'>·</span> Масштабируемость (2 кассеты – 1536, 3 – 2304, 4 – 3072<br/>
                        <span className='ml-[38px]'></span>абонента)
                    </p>

                    <p className='text-large font-semibold mt-[37px]'>
                        Когда использовать?
                    </p>
                    <p className='text-medium mt-[20px]'>
                        <span className='ml-[10px] mr-[10px]'>·</span> Много аналоговых телефонов<br/>
                        <span className='ml-[10px] mr-[10px]'>·</span> Без необходимости локальной выживаемости
                    </p>
                </div>
            </div>
        </div>
    );
};