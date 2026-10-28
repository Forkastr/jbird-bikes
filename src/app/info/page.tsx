import type { Metadata } from 'next';
import ApplyPage, { metadata as applyMetadata } from '../apply/page';

export const metadata: Metadata = {
  ...applyMetadata,
  alternates: { canonical: '/info' },
};

export default ApplyPage;
