import "@/app/ui/global.css"
import { inter } from '@/app/ui/fonts'
import Logo from "../ui/dashboard/logo";
import NavLinks from "../ui/dashboard/nav-links";
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
    <head />
      <body className={`${inter.className} antialised`}>
        <div className="flex-row h-auto overflow-auto px-2 py-2">
          <Logo />
        </div>
        <div className="flex-row overflow-auto px-2 py-2">
          <NavLinks />
        </div>
        <div className="p-2">{children}</div>
    </body>
  </html>

  );
}