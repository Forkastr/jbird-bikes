// Site fonts. Loaded once here so the root layout (shared Header/Footer) and the page modules use the same instances.
import { Barlow_Condensed, DM_Sans } from 'next/font/google';

export const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-barlow',
});
export const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-dm-sans' });
