import { getDictionary } from '@/get-dictionary';
import { MyCV } from '@/src/components/views';
import { ParamsPageI } from '@/src/types/common';

export default async function MyCVPage({ params: { lang } }: ParamsPageI) {
  const dictionary = await getDictionary(lang);
  const t = dictionary['home'];
  return (
    <main><MyCV /></main>
  );
}
