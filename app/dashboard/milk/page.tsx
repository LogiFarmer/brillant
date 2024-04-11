import { fetchFilteredEggPrices } from '@/app/lib/data';
import Search from '@/app/ui/search';
import { PostNewDeal } from '@/app/ui/eggs/buttons';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import Table from '@/app/ui/eggs/table';
import { SlidersHorizontal } from 'lucide-react';
import Link from 'next/link';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const eggprices = await fetchFilteredEggPrices(query, currentPage);

  return (
    <div className="w-full">
      <div className="mt-2 flex items-center justify-between gap-2">
        <Link
          href=""
          className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          <SlidersHorizontal />
        </Link>

        <Search placeholder="Search ..." />
        <PostNewDeal />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table eggprices={JSON.stringify(eggprices)} query={query} currentPage={currentPage}/>
      </Suspense>
    </div>
  );
}