'use client';
import { HeaderPropsI } from '@/src/types/header';
import styles from './Header.module.scss';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { EGNORE_HEADER_PATH } from '@/src/contants';

const Header = (props: HeaderPropsI) => {
  const router = useRouter();
  const pathName = usePathname();
  const { lang, t } = props;
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };
   if (EGNORE_HEADER_PATH.some((v: string) => pathName?.includes(v))) {
     return null;
   }
  return (
    <header className={styles.headerRoot}>
      <Link href={redirectedPathName(lang === 'en' ? 'ja' : 'en')}>Translate</Link>
      <br />
      <Link href={`/${lang}/about`}>Link to About</Link>
    </header>
  );
};
export default Header;
