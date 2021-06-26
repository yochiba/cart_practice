# frozen_string_literal: true

Account.create([
  {
    "firstname": "user1",
    "lastname": "test1",
    "email": "test1@test.com",
    "phone": "08088881111",
    "password": "testUser1",
    "password_confirmation": "testUser1"
  },
  {
    "firstname": "user2",
    "lastname": "test2",
    "email": "test2@test.com",
    "phone": "08088882222",
    "password": "testUser2",
    "password_confirmation": "testUser2"
  },
])

Category.create([
  {
    name: 'カテゴリー1',
    serial_prefix: 'AAA',
    description: 'カテゴリーAの説明文',
    created_at: '2021-06-20 00:00:00',
    updated_at: '2021-06-20 00:00:00',
  },
  {
    name: 'カテゴリー2',
    serial_prefix: 'BAA',
    description: 'カテゴリーBの説明文',
    created_at: '2021-06-20 00:00:00',
    updated_at: '2021-06-20 00:00:00',
  },
  {
    name: 'カテゴリー3',
    serial_prefix: 'CAA',
    description: 'カテゴリーCの説明文',
    created_at: '2021-06-20 00:00:00',
    updated_at: '2021-06-20 00:00:00',
  },
  {
    name: 'カテゴリー4',
    serial_prefix: 'DAA',
    description: 'カテゴリーDの説明文',
    created_at: '2021-06-20 00:00:00',
    updated_at: '2021-06-20 00:00:00',
  },
])

Product.create([
  {
    name: '商品1',
    price: 200,
    serial_number: 'AAA-000001',
    stock: 10,
    created_at: '2021-06-20 00:00:00',
    updated_at: '2021-06-20 00:00:00',
    category_id: 1,
    display_flag: 1,
  },
  {
    name: '商品2',
    price: 1200,
    serial_number: 'BAA-000001',
    stock: 10,
    created_at: '2021-06-20 00:00:00',
    updated_at: '2021-06-20 00:00:00',
    category_id: 2,
    display_flag: 1,
  },
  {
    name: '商品3',
    price: 300,
    serial_number: 'CAA-000001',
    stock: 10,
    created_at: '2021-06-20 00:00:00',
    updated_at: '2021-06-20 00:00:00',
    category_id: 3,
    display_flag: 1,
  },
  {
    name: '商品4',
    price: 800,
    serial_number: 'DAA-000001',
    stock: 15,
    created_at: '2021-06-20 00:00:00',
    updated_at: '2021-06-20 00:00:00',
    category_id: 4,
    display_flag: 1,
  },
  {
    name: '商品5',
    price: 100,
    serial_number: 'BAA-000002',
    stock: 100,
    created_at: '2021-06-20 00:00:00',
    updated_at: '2021-06-20 00:00:00',
    category_id: 2,
    display_flag: 1,
  },
  {
    name: '商品6',
    price: 1900,
    serial_number: 'BAA-000003',
    stock: 100,
    created_at: '2021-06-20 00:00:00',
    updated_at: '2021-06-20 00:00:00',
    category_id: 2,
    display_flag: 1,
  },
])
