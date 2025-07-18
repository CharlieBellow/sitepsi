import ButtonLogout from "@/app/(private)/scvd/components/ButtonLogout";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import  Image  from "next/image";

export default async function ListPostsPage() {
  const session = await getServerSession();

  if (!session) redirect("/");

  return (
    <div className='bg-ciano-3/10 rounded-lg shadow-xl w-1/2 items-center justify-center p-4 flex flex-col gap-4'>
      <p>{session?.user?.name}</p>
      {session.user?.image && (

      <Image src={session?.user?.image} alt="foto" width={100} height={100} />
      )}
      <ButtonLogout />
      <Table className=''>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className='text-right'>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className='font-medium'>INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className='text-right'>$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
