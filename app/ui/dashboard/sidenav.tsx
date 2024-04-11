import Link from 'next/link';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-2 py-4">
      <div className="flex grow justify-between space-x-2 flex-row space-y-2">
      </div>
    </div>
  );
}

// import PowerIcon from "@heroicons/react/20/solid/PowerIcon";
// import { signOut } from "@/auth";

// {/* <form  action={async () => {
// 'use server';
// await signOut();
// }}>
// <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
// <PowerIcon className="w-6" />
// <div className="hidden md:block">Sign Out</div>
// </button>
// </form> */}
