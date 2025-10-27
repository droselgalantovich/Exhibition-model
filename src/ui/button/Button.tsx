import { Link } from 'react-router-dom';

interface ButtonLinkProps {
  path: string;
  children: string;
  imgSrc?: string;
  imgAlt?: string;
  imgClassName?: string;
  fontSize?: string;
  paddingX?: string;
  paddingY?: string;
  className?: string;
}

export const ButtonLink = ({
  path,
  children,
  imgSrc,
  imgAlt,
  imgClassName,
  fontSize = 'text-[64px]',
  paddingX = 'px-[60px]',
  paddingY = 'py-[30px]',
  className = '',
}: ButtonLinkProps) => {
  return (
    <Link
      className={`bg-orange-main ${paddingX} ${paddingY} rounded-[120px] font-medium text-white ${fontSize} inline-flex items-center gap-2.5 transition-all hover:opacity-90 shadow-main ${className}`}
      to={path}
    >
      {children}
      {imgSrc && (
        <img
          src={imgSrc}
          alt={imgAlt || ''}
          className={`${imgClassName || ''} transition-all`}
        />
      )}
    </Link>
  );
};
