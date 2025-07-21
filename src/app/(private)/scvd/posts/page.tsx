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

import { EditPostDialog } from "@/app/(private)/scvd/posts/components/EditPost";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import { getNeonData } from "../../../../../Utils/api";

export default async function ListPostsPage() {
  const session = await getServerSession();

  const posts = await getNeonData();

  if (!session) redirect("/scvd");

  return (
    <div className='bg-ciano-3/10 rounded-lg shadow-xl w-1/2 items-center justify-center p-4 flex flex-col gap-4'>
      <p>{session?.user?.name}</p>
      {session.user?.image && (
        <Image src={session?.user?.image} alt='foto' width={100} height={100} />
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
          {posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell className='font-medium'>{post.title}</TableCell>
              <TableCell className='font-medium'>{post.description}</TableCell>
              <TableCell className='font-medium'>{post.views}</TableCell>
              <EditPostDialog
                id={post.id}
                title={post.title}
                description={post.description}
                views={post.views}
              />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
