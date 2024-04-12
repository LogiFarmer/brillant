import { fetchCardData } from '@/app/lib/data';
import Image from 'next/image';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';

export default async function CardWrapper() {
  const deals = await fetchCardData();

  return (
    <div>
      {deals?.map((deal) => (
        <Card
          key={deal.id} 
          title={deal.name} 
          value={deal.price} 
          image_url={deal.image_url}
          unit={deal.unit}
          expire_date={formatDateToLocal(deal.expire_date)}
        />
      ))}
    </div>
);
}

export function Card({
  title,
  value,
  image_url,
  unit,
  expire_date,
}: {
  title: string;
  value: number;
  image_url: string;
  unit: string;
  expire_date: string
}) {

  return (
    <div className="rounded-xl overflow-visible bg-gray-50 p-2 shadow-sm max-w-min min-w-max">
      <div className="relative bg-white-50 shadow-md rounded-md flex gap-2 max-w-min min-w-max">
        <Image alt="" className="absolute -left-6 -top-6 w-20 h-20 rounded-full shadow-lg" 
            src="/stores/walmart-logo-474.png"
            width={0}
            height={0}
            sizes="100vw"
          />
        <div className="flex flex-col p-1">
          <Image
            src={image_url}
            width={0}
            height={0}
            sizes="100vw"
            className="w-40 h-auto"
            alt="test"
          />
          <p className="whitespace-nowrap flex p-0 text-md font-medium">{title}</p>
          <p className="px-2 text-rose-900 text-right font-bold text-3xl">
            {formatCurrency(value) + "/" + unit}
          </p>
          <p className='text-gray-500 text-sm'>Ends {expire_date}</p>
        </div>
      </div>
    </div>
  );
}
