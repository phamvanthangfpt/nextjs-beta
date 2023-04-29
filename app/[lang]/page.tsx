import { getDictionary } from '@/get-dictionary';
import { ParamsPageI } from '@/src/types/common';

export default async function Home({ params: { lang } }: ParamsPageI) {
  const dictionary = await getDictionary(lang);
  const t = dictionary['home'];
  return (
    <main>
      <div>{t.welcome}</div>
    </main>
  );
}
