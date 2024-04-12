import { fetchCardData } from '@/app/lib/data';
import Image from 'next/image';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { Suspense } from 'react';
import { CardsSkeleton } from '../skeletons';

export interface IHash {
  [store: string] : string;
} 

const store_image: IHash  = {
  "Walmart": "/stores/walmart-logo-474.png",
  "Costco": "/stores/Costco.png",
  "IGA": "/stores/iga.png",
  "Pharmaprix": "/stores/pharmaprix.png",
  "Metro": "/stores/metro.png",
  "Super C": "/stores/super c.png",
  "Provigo": "/Stores/provigo.png",
  "Maxi": "/stores/maxi.png",
}

export default async function CardWrapper() {
  const deals = await fetchCardData();
  const deals1 = deals.filter((d) => deals.indexOf(d) % 2 === 0)
  const deals2 = deals.filter((d) => deals.indexOf(d) % 2 != 0)

  return (
    <div className="mt-4 grid grid-cols-2 gap-6"> 
      <Suspense fallback={<CardsSkeleton />}>
      <div>
      {deals1?.map((deal) => (
        <div key={deal.id} className=''>
        <Card
          title={deal.name} 
          value={deal.price} 
          image_url={deal.image_url}
          unit={deal.unit}
          expire_date={formatDateToLocal(deal.expire_date)}
          store={deal.store}
        />
        </div>
      ))}
      </div>
      <div>
      {deals2?.map((deal) => (
        <div key={deal.id} className=''>
        <Card
          title={deal.name} 
          value={deal.price} 
          image_url={deal.image_url}
          unit={deal.unit}
          expire_date={formatDateToLocal(deal.expire_date)}
          store={deal.store}
        />
        </div>
      ))}
      </div>
    </Suspense>
  </div>
);
}



export function Card({
  title,
  value,
  image_url,
  unit,
  expire_date,
  store,
}: {
  title: string;
  value: number;
  image_url: string;
  unit: string;
  expire_date: string;
  store: string
}) {

  return (
    <div className="rounded-xl bg-gray-50 px-2 shadow-sm py-6">
      <div className="relative overflow-visible bg-white-50 shadow-md rounded-md flex gap-2 ">
        <Image alt="" className="absolute -left-6 -top-6 w-auto h-14 rounded-lg" 
            src={store_image[store]}
            width={0}
            height={0}
            sizes="100vw"
          />
        <div className="flex-col w-auto p-1">
          <Image
            src={image_url}
            width={0}
            height={0}
            sizes="100vw"
            className="self-center	 w-40 h-auto"
            alt="test"
          />
          <p className="p-0 text-md font-medium">{title}</p>
          <p className="px-2 text-rose-900 text-right font-bold text-3xl">
            {formatCurrency(value) + "/" + unit}
          </p>
          <p className='text-gray-500 text-bottom text-sm'>Ends {expire_date}</p>
        </div>
      </div>
    </div>
  );
}
