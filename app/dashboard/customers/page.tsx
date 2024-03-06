import CustomersTable from '@/app/ui/customers/table';
import { Suspense } from 'react';

export default async function CustomersPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {

  const query = searchParams?.query || '';
    return (
      <Suspense fallback={<p>Loading...</p>}>
        <CustomersTable query={query}/>
      </Suspense>
    )
}