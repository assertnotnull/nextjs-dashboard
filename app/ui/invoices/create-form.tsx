'use client';
import { createInvoice, State } from '@/app/lib/actions';
import { CustomerField } from '@/app/lib/definitions';
import { Button } from '@/app/ui/button';
import Link from 'next/link';
import { useActionState } from 'react';
import ReusableInvoiceForm from './invoice-form';

export default function Form({ customers }: { customers: CustomerField[] }) {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(createInvoice, initialState);
  return (
    <ReusableInvoiceForm formAction={formAction} state={state} invoice={{}} customers={customers}>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/invoices"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Invoice</Button>
      </div>
    </ReusableInvoiceForm>
  );
}
