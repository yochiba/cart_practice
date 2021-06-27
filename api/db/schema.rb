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

ActiveRecord::Schema.define(version: 2021_06_23_152201) do

  create_table "accounts", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "provider", default: "email", null: false
    t.string "uid", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.boolean "allow_password_change", default: false
    t.datetime "remember_created_at"
    t.string "firstname", null: false, comment: "名"
    t.string "lastname", null: false, comment: "姓"
    t.string "email", null: false, comment: "メールアドレス"
    t.string "phone", null: false
    t.text "tokens"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_accounts_on_email", unique: true
    t.index ["reset_password_token"], name: "index_accounts_on_reset_password_token", unique: true
    t.index ["uid", "provider"], name: "index_accounts_on_uid_and_provider", unique: true
  end

  create_table "categories", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name", null: false, comment: "カテゴリー名"
    t.string "serial_prefix", null: false, comment: "シリアル番号 接頭辞"
    t.text "description", comment: "カテゴリー説明"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "products", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name", null: false, comment: "商品名"
    t.text "description", comment: "商品説明"
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
