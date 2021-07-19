FactoryBot.define do
  factory :products do
    [
      {
        name 'テスト商品1',
        description 'これはテスト商品1です',
        price 1300,
        stock 15,
        category_id 1,
        display_flag 1
      },
      {
        name 'テスト商品2',
        description 'これはテスト商品2です',
        price 1300,
        stock 15,
        category_id 2,
        display_flag 1
      },
      {
        name 'テスト商品3',
        description 'これはテスト商品3です',
        price 1300,
        stock 15,
        category_id 3,
        display_flag 1
      }
    ]
  end
end