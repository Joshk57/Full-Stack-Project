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

ActiveRecord::Schema[7.0].define(version: 2023_07_28_194451) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum"
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "amenities", force: :cascade do |t|
    t.string "name"
  end

  create_table "listing_amenities", force: :cascade do |t|
    t.bigint "listing_id"
    t.bigint "amenity_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["amenity_id", "listing_id"], name: "index_listing_amenities_on_amenity_id_and_listing_id", unique: true
    t.index ["amenity_id"], name: "index_listing_amenities_on_amenity_id"
    t.index ["listing_id"], name: "index_listing_amenities_on_listing_id"
  end

  create_table "listings", force: :cascade do |t|
    t.bigint "host_id", null: false
    t.string "name", null: false
    t.text "description", null: false
    t.string "city", null: false
    t.string "state", null: false
    t.integer "num_bedrooms", null: false
    t.integer "num_bathrooms", null: false
    t.float "price", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "address", null: false
    t.integer "max_guests", default: 1, null: false
    t.integer "num_beds", default: 1, null: false
    t.string "image"
    t.boolean "wifi", default: false, null: false
    t.boolean "kitchen", default: false, null: false
    t.boolean "tv", default: false, null: false
    t.boolean "pets_allowed", default: false, null: false
    t.boolean "free_parking", default: false, null: false
    t.boolean "air_conditioning", default: false, null: false
    t.boolean "pool", default: false, null: false
    t.index ["city"], name: "index_listings_on_city"
    t.index ["host_id"], name: "index_listings_on_host_id"
    t.index ["state"], name: "index_listings_on_state"
  end

  create_table "reservations", force: :cascade do |t|
    t.bigint "listing_id", null: false
    t.bigint "reserver_id", null: false
    t.datetime "start_date", null: false
    t.datetime "end_date", null: false
    t.integer "num_guests", null: false
    t.float "total_price", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["listing_id"], name: "index_reservations_on_listing_id"
    t.index ["reserver_id"], name: "index_reservations_on_reserver_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "listings", "users", column: "host_id"
  add_foreign_key "reservations", "listings"
  add_foreign_key "reservations", "users", column: "reserver_id"
end
