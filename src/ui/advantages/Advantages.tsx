interface AdvantagesProps {
  text: string | string[];
  icon?: string;
  showIcon?: boolean;
  textClassName?: string;
  border?: boolean;
  onClick?: () => void;
  py?: boolean;
}

export const Advantages = ({
  text,
  icon = '/images/InfoCircleOutlined.png',
  showIcon = true,
  textClassName = 'text-2xl font-medium text-white',
  onClick,
  border = false,
  py = false,
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
      } px-[30px] ${py ? 'py-[30px]' : 'py-[15px]'}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {showIcon && icon && (
        <img src={icon} alt='' className='h-8 w-8' aria-hidden='true' />
      )}
      <span className={textClassName}>{renderText()}</span>
    </div>
  );
};
