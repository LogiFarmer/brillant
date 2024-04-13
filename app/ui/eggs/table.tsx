'use client'
import Image from 'next/image';
import { ReportPrice } from '@/app/ui/eggs/buttons';
import PriceStatus from '@/app/ui/eggs/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import * as React from "react"
import { EggPricesTable } from '@/app/lib/definitions'
import { IHash } from '../dashboard/cards';

const store_image: IHash  = {
  "Walmart": "/stores/walmart-logo-474.png",
  "Costco": "/stores/walmart-logo-474.png",
  "IGA": "/stores/walmart-logo-474.png",
  "Pharmaprix": "/stores/pharmaprix.png",
  "Metro": "/stores/walmart-logo-474.png",
  "Super C": "/stores/walmart-logo-474.png",
  "Provigo": "/Stores/walmart-logo-474.png",
  "Maxi": "/stores/walmart-logo-474.png",
}

export default function PriceTable({
    eggprices,
    query,
    currentPage
  }: 
  {
      eggprices: string;
      query: string,
      currentPage: number;
  }) {
  const data: EggPricesTable[] = JSON.parse(eggprices)
  
  return (
    <div className="mt-6 flow-root">
    <div className="inline-block min-w-full align-middle">
      <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
            {data?.map((eggprice) => (
              <div key={eggprice.id} className="mb-2 w-full rounded-md bg-white p-4">
                <div className="flex items-center justify-between border-b pb-0">
                  <div>
                    <div className="relative mb-2 flex overflow-visible items-center gap-4">
                    <Image 
                      alt="" 
                      className="absolute -left-6 -top-6 w-auto h-10 rounded-lg" 
                      src={store_image[eggprice.store]}
                      width={0}
                      height={0}
                      sizes="100vw"
                      />
                      <Image
                        src={eggprice.image_url}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-auto h-20 pl-16"
                        alt={`${eggprice.name}'s profile picture`}
                      />
                    </div>
                    <p>{eggprice.name}</p>
                    <p className="text-sm text-gray-500">{eggprice.store}</p>
                  </div>
                  <div className="flex flex-col gap-0">
                      <div className="text-5xl font-bold text-end">{formatCurrency(eggprice.price)}</div>
                      <div className="text-md text-end text-gray-500">{eggprice.amount + " units/box"} </div>
                      <div className="text-lg font-bold text-end text-gray-600">{formatCurrency(eggprice.unit_price) + "/unit"} </div>
                      <div className="text-lg font-bold text-end text-red-500">Lowest Price!!!</div>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-1">
                  <div className='text-sm text-gray-500 gap-2'>
                    <PriceStatus status={eggprice.status} />
                    {" " + formatDateToLocal(eggprice.active_date) + " to " + formatDateToLocal(eggprice.expire_date) }
                  </div>
                  <div className="flex justify-end gap-2">
                    <ReportPrice id={eggprice.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
          </div>

    // <div className="w-full">
    //   <div className="flex items-center py-4">
    //     <Input
    //       placeholder="Filter name..."
    //       value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
    //       onChange={(event) =>
    //         table.getColumn("name")?.setFilterValue(event.target.value)
    //       }
    //       className="max-w-sm"
    //     />
    //     <DropdownMenu>
    //       <DropdownMenuTrigger asChild>
    //         <Button variant="outline" className="ml-auto">
    //           Columns <ChevronDown className="ml-2 h-4 w-4" />
    //         </Button>
    //       </DropdownMenuTrigger>
    //       <DropdownMenuContent align="end">
    //         {table
    //           .getAllColumns()
    //           .filter((column) => column.getCanHide())
    //           .map((column) => {
    //             return (
    //               <DropdownMenuCheckboxItem
    //                 key={column.id}
    //                 className="capitalize"
    //                 checked={column.getIsVisible()}
    //                 onCheckedChange={(value) =>
    //                   column.toggleVisibility(!!value)
    //                 }
    //               >
    //                 {column.id}
    //               </DropdownMenuCheckboxItem>
    //             )
    //           })}
    //       </DropdownMenuContent>
    //     </DropdownMenu>
    //   </div>
    //   <div className="rounded-md border">
    //     <Table className='hidden min-w-full text-gray-900 md:table'>
    //       <TableHeader>
    //         {table.getHeaderGroups().map((headerGroup) => (
    //           <TableRow key={headerGroup.id}>
    //             {headerGroup.headers.map((header) => {
    //               return (
    //                 <TableHead key={header.id} className="rounded-lg text-left text-sm font-normal">
    //                   {header.isPlaceholder
    //                     ? null
    //                     : flexRender(
    //                         header.column.columnDef.header,
    //                         header.getContext()
    //                       )}
    //                 </TableHead>
    //               )
    //             })}
    //           </TableRow>
    //         ))}
    //       </TableHeader>
    //       <TableBody>
    //         {table.getRowModel().rows?.length ? (
    //           table.getRowModel().rows.map((row) => (
    //             <TableRow
    //               key={row.id}
    //               data-state={row.getIsSelected() && "selected"}
    //             >
    //               {row.getVisibleCells().map((cell) => (
    //                 <TableCell key={cell.id}>
    //                   {flexRender(
    //                     cell.column.columnDef.cell,
    //                     cell.getContext()
    //                   )}
    //                 </TableCell>
    //               ))}
    //             </TableRow>
    //           ))
    //         ) : (
    //           <TableRow>
    //             <TableCell
    //               colSpan={columns.length}
    //               className="h-24 text-center"
    //             >
    //               No results.
    //             </TableCell>
    //           </TableRow>
    //         )}
    //       </TableBody>
    //     </Table>
    //   </div>
    //   <div className="flex items-center justify-end space-x-2 py-4">
    //     <div className="flex-1 text-sm text-muted-foreground">
    //       {table.getFilteredSelectedRowModel().rows.length} of{" "}
    //       {table.getFilteredRowModel().rows.length} row(s) selected.
    //     </div>
    //     <div className="space-x-2">
    //       <Button
    //         variant="outline"
    //         size="sm"
    //         onClick={() => table.previousPage()}
    //         disabled={!table.getCanPreviousPage()}
    //       >
    //         Previous
    //       </Button>
    //       <Button
    //         variant="outline"
    //         size="sm"
    //         onClick={() => table.nextPage()}
    //         disabled={!table.getCanNextPage()}
    //       >
    //         Next
    //       </Button>
    //     </div>
    //   </div>
    // </div>
  )
}