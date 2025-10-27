import { Link, useLocation } from 'react-router-dom';

interface LinkNavProps {
  path: string;
  children: string;
  imgSrc?: string;
  imgAlt?: string;
  imgClassName?: string;
}

export const LinkNav = ({
  path,
  children,
  imgSrc,
  imgAlt,
  imgClassName,
}: LinkNavProps) => {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <Link
      className={`px-10 py-5 text-[32px] border border-0.5 rounded-[60px] flex items-center gap-3 transition-colors group ${
        isActive
          ? 'bg-white text-deep-blue'
          : 'text-white hover:bg-white hover:text-deep-blue'
      }`}
      to={path}
    >
      {imgSrc && (
        <img
          src={imgSrc}
          alt={imgAlt || ''}
          className={`${imgClassName || 'w-8 h-8'} transition-all ${
            isActive
              ? 'filter brightness-0 saturate-100'
              : 'filter brightness-0 saturate-100 invert group-hover:brightness-0 group-hover:saturate-100 group-hover:invert-0'
          }`}
        />
      )}
      {children}
    </Link>
  );
};
