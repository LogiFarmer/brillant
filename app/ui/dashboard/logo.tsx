import Link from "next/link";
import AcmeLogo from "../acme-logo";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"

export default function Logo() {
  return (
    <div className="rounded-md bg-blue-600">
      <div className="grid grid-flow-row-dense grid-cols-3">
          <div className="col-span-2 px-2 py-2">
              <Link href="/">
                    <AcmeLogo />
              </Link>
          </div>
          <div className="justify-self-end rounded px-2 py-2">
              <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="user" />
                  <AvatarFallback>CN</AvatarFallback>
              </Avatar>
          </div>
      </div>
  </div>
  )
}

