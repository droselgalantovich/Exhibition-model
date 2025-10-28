interface AdvantagesProps {
  text: string | string[];
  icon?: string;
  icon2?: string;
  showIcon?: boolean;
  showIcon2?: boolean;
  textClassName?: string;
  border?: boolean;
  onClick?: () => void;
  py?: boolean;
  padding?: string;
  wFitContent?: string;
}

export const Advantages = ({
  text,
  icon = '/images/InfoCircleOutlined.png',
  icon2 = '/images/InfoCircleOutlinedBlack.png',
  showIcon = true,
  showIcon2 = false,
  textClassName = 'text-2xl font-medium text-white',
  onClick,
  border = false,
  py = false,
  padding = '',
  wFitContent = '',
}: AdvantagesProps) => {
  const renderText = () => {
    if (Array.isArray(text)) {
      return text.map((line, index) => (
        <span key={index}>
          {line}
          {index < text.length - 1 && <br />}
        </span>
      ));
    }

    if (text.includes('\n')) {
      return text.split('\n').map((line, index, array) => (
        <span key={index}>
          {line}
          {index < array.length - 1 && <br />}
        </span>
      ));
    }

    return text;
  };

  return (
    <div
      className={`inline-flex items-center justify-center gap-5 rounded-full border-2 ${
        border ? 'border-deep-blue' : 'border-orange-main'
      } px-[30px] ${py ? 'py-[30px]' : 'py-[15px]'} ${padding} ${wFitContent}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {showIcon && icon && (
        <img src={icon} alt='' className='h-8 w-8' aria-hidden='true' />
      )}

      <span className={textClassName}>{renderText()}</span>
      {showIcon2 && icon2 && (
        <img src={icon2} alt='' className='h-14 w-14 cursor-pointer' />
      )}
    </div>
  );
};
