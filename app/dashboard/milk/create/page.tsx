import Form from '@/app/ui/milk/create-form';
import Breadcrumbs from '@/app/ui/milk/breadcrumbs';

 
export default async function Page() {

 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />

    </main>
  );
}