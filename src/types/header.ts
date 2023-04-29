import { Locale } from '@/i18n-config';

export interface DictionaryHeaderPropsI {
  welcome: string;
}
export interface HeaderPropsI {
  t: DictionaryHeaderPropsI;
  lang?: Locale;
}
