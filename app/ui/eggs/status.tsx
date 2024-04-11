import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function PriceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-md',
        {
          'bg-gray-100 text-gray-500': status === 'expired',
          'bg-green-500 text-white': status === 'active',
          'bg-orange-500 text-white': status === 'coming',
        },
      )}
    >
      {status === 'coming' ? (
        <>
          Coming
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === 'active' ? (
        <>
          Active
          <CheckIcon className="ml-1 w-6 text-white" />
        </>
      ) : null}
    </span>
  );
}
