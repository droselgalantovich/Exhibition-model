import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Advantages } from '../ui/advantages/Advantages';
import { Popup } from '../components/popup/Popup';
import { ButtonLink } from '../ui/button/Button';
import { Modal } from '../components/modal/Modal';
import {
  AutomaticEquipmentSetup,
  UnifiedManagementSystem,
  AssetManagement,
  WebConsole,
  VideoConference,
  CorporateMessenger,
  AudioConference,
  IpPbxCore,
  OperationalCommunicationConsole,
  NotificationSystem,
  VoiceMail,
  FaxToEmail,
  SystemIntegration,
  CallLogs,
  CallRecording,
  ContactCenter,
  MultiLevelIvr,
  SessionBorderController,
  LocalResilienceNode,
  AuthenticationAuthorization,
} from '../components/modalServices';

export const Services = () => {
  const navigate = useNavigate();
  const [activePopup, setActivePopup] = useState<number | null>(null);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const modalComponents: Record<string, React.ComponentType> = {
    modal1: UnifiedManagementSystem,
    modal2: AutomaticEquipmentSetup,
    modal3: AssetManagement,
    modal4: WebConsole,
    modal5: VideoConference,
    modal6: CorporateMessenger,
    modal7: AudioConference,
    modal8: IpPbxCore,
    modal9: OperationalCommunicationConsole,
    modal10: NotificationSystem,
    modal11: VoiceMail,
    modal12: FaxToEmail,
    modal13: SystemIntegration,
    modal14: CallLogs,
    modal15: CallRecording,
    modal16: ContactCenter,
    modal17: MultiLevelIvr,
    modal18: SessionBorderController,
    modal19: LocalResilienceNode,
    modal20: AuthenticationAuthorization,
  };

  const ActiveModalComponent = activeModal
    ? modalComponents[activeModal]
    : null;

  const popupContent = {
    1: {
      position: { top: '1380px', left: '1630px' },
      content: (
        <>
          <p className='text-black text-[32px] font-semibold mb-4'>
            Приватность. Контроль. Готовность к росту.
          </p>
          <div className='space-y-2 text-[32px]'>
            <p className='flex items-start text-center'>
              ✅ Организация VIP-АТС
            </p>
            <p className='flex items-start'>
              ✅ Защита личных номеров и приватность <br /> переговоров
            </p>
            <p className='flex items-start'>
              ✅ Поддержка гибкой схемы работы — в офисе, <br /> на выезде, в
              командировке
            </p>
            <p className='flex items-start'>
              ✅ Масштабируемая платформа, готовая к росту <br /> компании
            </p>
            <p className='flex items-start'>
              ✅ Один вендор, одно окно ответственности
            </p>
          </div>
        </>
      ),
    },
    2: {
      position: { top: '1590px', left: '1700px' },
      content: (
        <>
          <p className='text-black text-[32px] font-semibold mb-4'>
            Комплексный подход к защите информации.
          </p>
          <div className='space-y-2 text-[32px]'>
            <p className='flex items-start'>
              ✅ Настраиваемый доступ к записям событий: <br /> по ролям, по
              номерам, по сценариям
            </p>
            <p className='flex items-start'>
              ✅ Расширенная транскрибация разговоров — <br /> быстрое выявление
              утечек, нарушений, сговоров
            </p>
            <p className='flex items-start'>
              ✅ Журналы всех событий И/С с фильтрами и отчетами
            </p>
          </div>
        </>
      ),
    },
    3: {
      title: 'PopUp Служб эксплуатации',
      position: { top: '1415px', left: '1700px' },
      content: (
        <>
          <p className='text-black text-[32px] font-semibold mb-4'>
            Надёжно, предсказуемо, без лишней головной <br /> боли.
          </p>
          <div className='space-y-2 text-[32px]'>
            <p className='flex items-start'>
              ✅ Резервируемая архитектура — связь не <br /> прервётся ни при
              каких обстоятельствах
            </p>
            <p className='flex items-start'>
              ✅ Централизованное администрирование: единый <br /> интерфейс.
              Документация, техподдержка
            </p>
            <p className='flex items-start'>
              ✅ Мониторинг состояния всех элементов КСС — <br /> от серверов до
              терминалов
            </p>
            <p className='flex items-start'>
              ✅ Удалённая автоматическая настройка <br /> оборудования
            </p>
            <p className='flex items-start'>
              ✅ Обучение, техподдержка 24/7, консультации <br /> и обслуживание
            </p>
          </div>
        </>
      ),
    },
    4: {
      position: { top: '1440px', left: '2375px' },
      content: (
        <>
          <p className='text-black text-[32px] font-semibold mb-4'>
            Связь, которая не подводит. Даже в критической <br /> ситуации.
          </p>
          <div className='space-y-2 text-[32px]'>
            <p className='flex items-start'>
              ✅ Профессиональные пульты оперативной связи <br /> для любых
              режимов работы
            </p>
            <p className='flex items-start'>
              ✅ Сценарное голосовое/телефонное оповещение <br /> по любым
              каналам
            </p>
            <p className='flex items-start'>
              ✅ Приоритетная маршрутизация, высокая <br /> отказоустойчивость
            </p>
          </div>
        </>
      ),
    },
    5: {
      position: { top: '1550px', left: '2510px' },
      content: (
        <>
          <p className='text-black text-[32px] font-semibold mb-4'>
            Удобная, понятная, единая связь для всей команды.
          </p>
          <div className='space-y-2 text-[32px]'>
            <p className='flex items-start'>
              ✅ Интуитивный мессенджер, внутренняя телефония, <br />
              видеосвязь
            </p>
            <p className='flex items-start'>
              ✅ Оперативная связь с коллегами, руководителями <br /> и другими
              подразделениями
            </p>
            <p className='flex items-start'>
              ✅ Работает в офисе, цеху, на выезде, производстве <br /> и даже
              при удаленке
            </p>
          </div>
        </>
      ),
    },
  };

  return (
    <>
      <div
        className='relative top-[-4px]'
        style={{
          backgroundImage: "url('/images/BigDiagramInMain2.png')",

          width: '3840px',
          height: '1918px',
        }}
      >
        <div className='grid grid-cols-3 gap-x-10 gap-y-[260px] pt-12 pl-[117px]'>
          <div className='flex flex-col items-start gap-5'>
            <p className='text-white text-[48px] leading-[1.2]'>
              УПРАВЛЯЕМ <br /> ПРОСТО
            </p>

            <Advantages
              text='Единая система управления'
              onClick={() => setActiveModal('modal1')}
            />
            <Advantages
              text={`Автоматическая настройка\nабонентского оборудования`}
              onClick={() => setActiveModal('modal2')}
            />
            <Advantages
              text={`Учёт и управление материальными \n активами`}
              onClick={() => setActiveModal('modal3')}
            />

            <Advantages
              text='Веб-консоль управления'
              onClick={() => setActiveModal('modal4')}
            />
          </div>
          <div className='flex flex-col items-start gap-5'>
            <p className='text-white text-[48px] leading-[1.2]'>
              ЭФФЕКТИВНО <br /> И КОМФОРТНО <br />
              РАБОТАЕМ
            </p>
            <Advantages
              text='Видеоконференцсвязь'
              onClick={() => setActiveModal('modal5')}
            />
            <Advantages
              text='Корпоративный мессенджер'
              onClick={() => setActiveModal('modal6')}
            />
            <Advantages
              text='Аудиоконференции'
              onClick={() => setActiveModal('modal7')}
            />
            <Advantages
              text='Ядро IP-АТС'
              onClick={() => setActiveModal('modal8')}
            />
          </div>
          <div className='flex flex-col items-start gap-5'>
            <p className='text-white text-[48px] leading-[1.2]'>
              ОПЕРАТИВНО
              <br /> ОПОВЕЩАЕМ
            </p>
            <Advantages
              text='Пульт оперативной связи'
              onClick={() => setActiveModal('modal9')}
            />
            <Advantages
              text='Система оповещения'
              onClick={() => setActiveModal('modal10')}
            />
            <Advantages
              text='Голосовая почта'
              onClick={() => setActiveModal('modal11')}
            />
            <Advantages
              text='Fax2Email'
              onClick={() => setActiveModal('modal12')}
            />
          </div>
          <div className='flex flex-col items-start gap-5'>
            <p className='text-white text-[48px] leading-[1.2]'>
              ИНТЕГРИРУЕМСЯ
              <br /> И АНАЛИЗИРУЕМ
            </p>
            <Advantages
              text={`Интеграция с информационными\n системами`}
              onClick={() => setActiveModal('modal13')}
            />
            <Advantages
              text='Журналы вызовов'
              onClick={() => setActiveModal('modal14')}
            />
            <Advantages
              text='Запись разговоров'
              onClick={() => setActiveModal('modal15')}
            />
          </div>
          <div className='flex flex-col items-start gap-5'>
            <p className='text-white text-[48px] leading-[1.2]'>
              УПРАВЛЯЕМ <br />
              ВЫЗОВАМИ
            </p>
            <Advantages
              showIcon={false}
              text='Контакт-центр'
              onClick={() => setActiveModal('modal16')}
            />
            <Advantages
              showIcon={false}
              text='Многоуровневая система IVR'
              onClick={() => setActiveModal('modal17')}
            />
          </div>
          <div className='flex flex-col items-start gap-5'>
            <p className='text-white text-[48px] leading-[1.2]'>
              ОБЕСПЕЧИВАЕМ <br />
              НАДЕЖНОСТЬ <br />И БЕЗОПАСНОСТЬ
            </p>
            <Advantages
              text={`Пограничный контроллер \nсессий`}
              onClick={() => setActiveModal('modal18')}
            />
            <Advantages
              text={`Узел локальной \nотказоустойчивости`}
              onClick={() => setActiveModal('modal19')}
            />
            <Advantages
              text={`Аутентификация\n и авторизация`}
              onClick={() => setActiveModal('modal20')}
            />
            <Advantages text='СОРМ' onClick={() => navigate('/SORM')} />
          </div>
        </div>
        <div
          className='absolute w-[450px] p-6  rounded-full top-[1625px] left-[1200px] cursor-pointer'
          onClick={() => setActivePopup(activePopup === 1 ? null : 1)}
        ></div>
        <div
          className='absolute w-[470px] p-6   rounded-full top-[1700px] left-[1200px] cursor-pointer'
          onClick={() => setActivePopup(activePopup === 2 ? null : 2)}
        ></div>
        <div
          className='absolute w-[470px] p-6  rounded-full top-[1770px] left-[1200px] cursor-pointer'
          onClick={() => setActivePopup(activePopup === 3 ? null : 3)}
        ></div>
        <div
          className='absolute w-[600px] p-6  rounded-full top-[1625px] left-[1780px] cursor-pointer'
          onClick={() => setActivePopup(activePopup === 4 ? null : 4)}
        ></div>
        <div
          className='absolute w-[700px] p-6  rounded-full top-[1700px] left-[1780px] cursor-pointer'
          onClick={() => setActivePopup(activePopup === 5 ? null : 5)}
        ></div>

        <ButtonLink
          fontSize='text-[48px]'
          imgAlt='clickMe'
          imgSrc='/images/ClickMe.png'
          path='/ATCpreview'
          className='absolute right-[200px] bottom-[109px]'
        >
          Посмотреть АТС в действии
        </ButtonLink>
      </div>

      {/* Единое модальное окно */}
      {activeModal && ActiveModalComponent && (
        <Modal
          width='w-[2530px]'
          height='h-[1424px]'
          isOpen={true}
          onClose={() => setActiveModal(null)}
        >
          <ActiveModalComponent />
        </Modal>
      )}

      {/* Popups */}
      {activePopup &&
        popupContent[activePopup as keyof typeof popupContent] && (
          <Popup
            isOpen={true}
            position={
              popupContent[activePopup as keyof typeof popupContent].position
            }
          >
            {popupContent[activePopup as keyof typeof popupContent].content}
          </Popup>
        )}
    </>
  );
};
