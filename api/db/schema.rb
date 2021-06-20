# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_06_13_142842) do

  create_table "categories", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name", null: false, comment: "カテゴリー名"
    t.string "serial_prefix", null: false, comment: "シリアル番号 接頭辞"
    t.text "description", comment: "カテゴリー説明"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "products", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name", null: false, comment: "商品名"
    t.integer "price", default: 0, null: false, comment: "商品価格"
    t.string "serial_number", null: false, comment: "シリアルナンバー"
    t.integer "stock", default: 0, null: false, comment: "商品在庫"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "category_id", comment: "カテゴリーID"
    t.boolean "display_flag", default: false, null: false, comment: "公開・非公開フラグ 0:非公開 1:公開"
    t.index ["category_id"], name: "index_products_on_category_id"
  end

end
