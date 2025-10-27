import { ButtonLink } from '../ui/button/Button';

export default function Home() {
  return (
    <div
      className='relative top-[-4px]'
      style={{
        backgroundImage: "url('/images/BigDiagramInMain.png')",

        width: '3840px',
        height: '1918px',
      }}
    >
      <ButtonLink
        imgAlt='clickMe'
        imgSrc='/images/ClickMe.png'
        path='/services'
        className='absolute top-[1024px] left-[1427px]'
      >
        ПОЛУЧИТЬ СЕРВИСЫ
      </ButtonLink>
      <div className='text-[96px] text-white font-bold w-[1375px] text-center absolute left-[1233px]'>
        АТС НОВОГО ПОКОЛЕНИЯ
        <br />{' '}
        <p className='font-semiBold text-[64px]'>
          БОЛЬШЕ, ЧЕМ УНИФИЦИРОВАННЫЕ КОММУНИКАЦИИ
        </p>
      </div>
      <div className='w-[446px] leading-[1.2] absolute left-[899px] top-[524px] text-white font-semibold text-[32px] text-center'>
        Бесперебойная работа вашей системы связи
      </div>
      <div className='w-[400px] leading-[1.2] absolute left-[923px] top-[1092px] text-white font-semibold text-[32px] text-center'>
        Единая среда коммуникации для вас и ваших сотрудников
      </div>
      <div className='w-[380px] leading-[1.2] absolute left-[2564px] top-[348px] text-white font-semibold text-[32px] text-center'>
        Экономия ресурсов за счет ускорения принятия решений
      </div>
      <div className='w-[600px] leading-[1.2] absolute left-[2660px] top-[1080px] text-white font-semibold text-[32px] text-center'>
        Комплексные меры защиты информации за счет размещения в контуре
        предприятия
      </div>
      <div className='w-[430px] leading-[1.2] absolute left-[2300px] top-[1368px] text-white font-semibold text-[32px] text-center'>
        Масштабирование сети с гарантией отсутствия сложных изменений <br />в
        инфраструктуре
      </div>
    </div>
  );
}
