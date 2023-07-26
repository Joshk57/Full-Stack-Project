class Changelistingsagain3 < ActiveRecord::Migration[7.0]
  def change
    remove_column :listings, :wifi
    remove_column :listings, :kitchen
    remove_column :listings, :tv
    remove_column :listings, :pets_allowed
    remove_column :listings, :free_parking
    remove_column :listings, :air_conditioning
    remove_column :listings, :pool

    add_column :listings, :wifi, :boolean, default: false, null: false
    add_column :listings, :kitchen, :boolean, default: false, null: false
    add_column :listings, :tv, :boolean, default: false, null: false
    add_column :listings, :pets_allowed, :boolean, default: false, null: false
    add_column :listings, :free_parking, :boolean, default: false, null: false
    add_column :listings, :air_conditioning, :boolean, default: false, null: false
    add_column :listings, :pool, :boolean, default: false, null: false
  end
end
