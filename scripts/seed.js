const { db } = require('@vercel/postgres');
const {
  users,
  eggprices,
  deals,
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedEggPrices(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "egg prices" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS eggprices (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    store VARCHAR(255) NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    active_date DATE NOT NULL,
    expire_date DATE NOT NULL,
    amount INT NOT NULL,
    price INT NOT NULL,
    unit_price INT NOT NULL,
    status VARCHAR(255) NOT NULL
  );
`;

    console.log(`Created "egg prices" table`);

    // Insert data into the "egg prices" table
    const insertedEggPrices = await Promise.all(
      eggprices.map(
        (eggprice) => client.sql`
        INSERT INTO eggprices (name, store, image_url, status, active_date, expire_date, amount, price, unit_price)
        VALUES (${eggprice.name}, ${eggprice.store}, ${eggprice.image_url}, 
                ${eggprice.status}, ${eggprice.active_date}, ${eggprice.expire_date}, ${eggprice.amount},
                ${eggprice.price}, ${eggprice.unit_price})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedEggPrices.length} egg prices`);

    return {
      createTable,
      eggprices: insertedEggPrices,
    };
  } catch (error) {
    console.error('Error seeding egg prices:', error);
    throw error;
  }
}

async function seedDeals(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "egg prices" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS deals (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    store VARCHAR(255) NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    active_date DATE NOT NULL,
    expire_date DATE NOT NULL,
    amount INT NOT NULL,
    price INT NOT NULL,
    unit VARCHAR(255) NOT NULL,
    unit_price INT NOT NULL,
    status VARCHAR(255) NOT NULL
  );
`;

    console.log(`Created "deals" table`);

    // Insert data into the "deals" table
    const insertedDeals = await Promise.all(
      deals.map(
        (deal) => client.sql`
        INSERT INTO deals (name, store, image_url, status, active_date, expire_date, amount, price, unit, unit_price)
        VALUES (${deal.name}, ${deal.store}, ${deal.image_url}, 
                ${deal.status}, ${deal.active_date}, ${deal.expire_date}, ${deal.amount},
                ${deal.price}, ${deal.unit}, ${deal.unit_price})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedDeals.length} deals`);

    return {
      createTable,
      eggprices: insertedDeals,
    };
  } catch (error) {
    console.error('Error seeding deals:', error);
    throw error;
  }
}

async function dropAllTables(client) {
  try {
    await client.sql`
      DROP TABLE IF EXISTS eggprices;
      DROP TABLE IF EXISTS deals;
      DROP TABLE IF EXISTS users;
    `;

    console.log(`Drop All tables`);


    return;
  } catch (error) {
    console.error('Error drop tables', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await dropAllTables(client);

  await seedUsers(client);
  await seedEggPrices(client);
  await seedDeals(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
