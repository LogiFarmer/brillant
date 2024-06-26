import CardWrapper from '@/app/ui/dashboard/cards';
import { fetchCardData } from '@/app/lib/data';
import { Suspense } from 'react';
import { 
  CardsSkeleton,
} from '@/app/ui/skeletons';
import Search from '@/app/ui/search';
import { PostNewDeal } from '@/app/ui/eggs/buttons';

export default async function Page() {
//grid-cols-2 
  const {
  } = await fetchCardData();
  return (
    <div>
      <div className="text-center text-blue-300 mb-2 text-xl">
        Hot Deals of the week
      </div>
      <div className="mt-2 flex items-center justify-between gap-2">
        <Search placeholder="Search ..." />
        <PostNewDeal />
      </div>
      <CardWrapper />
    </div>
  );
}