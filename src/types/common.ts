import { Locale } from '@/i18n-config';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

export interface LayoutPropsI {
  children: ReactNode;
}

export type NextPageWithLayout = NextPage & {
  Layout?: (page: LayoutPropsI) => ReactElement;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export type MetadataProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export interface ParamsPageI {
  params: { lang: Locale };
}
