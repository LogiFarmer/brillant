'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { Egg, Milk, Beef, Home } from 'lucide-react';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', 
    href: '/dashboard', 
    icon: Home 
  },
  { name: 'Eggs', 
    href: '/dashboard/eggs', 
    icon: Egg
  },
  { name: 'Milk', 
    href: '/dashboard/milk', 
    icon: Milk
  },
  
  { name: 'Beef', 
    href: '/dashboard/beef', 
    icon: Beef
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <div className="flex grow justify-between space-x-1 flex-row">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex grow items-center rounded-lg gap-1 bg-gray-50 font-medium hover:bg-sky-100 hover:text-blue-600 justify-center p-2 px-2',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon />{link.name}
          </Link>
        );
      })}
    </div>
  );
}
