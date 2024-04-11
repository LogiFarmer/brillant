import { sql } from '@vercel/postgres';
import {
  EggPricesTable,
  User,
  Deal,
  Store,
  Price,
  Product,
} from './definitions';
import { formatCurrency } from './utils';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchCardData() {
  noStore();
  try {
    const data = await sql<Deal>`SELECT * FROM deals`;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

export async function fetchFilteredEggPrices(
  query: string,
  currentPage: number,
) {
  noStore();

  try {
    const invoices = await sql<EggPricesTable>`
    SELECT
      eggprices.id,
      eggprices.name,
      eggprices.store,
      eggprices.image_url,
      eggprices.active_date,
      eggprices.expire_date,
      eggprices.amount,
      eggprices.price,
      eggprices.unit_price,
      eggprices.status
    FROM eggprices
    ORDER BY eggprices.unit_price ASC
    `;

    return invoices.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoices.');
  }
}
