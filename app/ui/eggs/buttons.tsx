import Link from 'next/link';
import { MessageCircleWarning, SquarePen } from 'lucide-react';

export function PostNewDeal() {
  return (
    <Link
      href="/dashboard/invoices/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <SquarePen />
    </Link>
  );
}

export function ReportPrice({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/invoices/${id}/edit`}
      className="rounded-md p-2 bg-gray-100 hover:bg-gray-300"
    >
      <MessageCircleWarning />
    </Link>
  );
}

