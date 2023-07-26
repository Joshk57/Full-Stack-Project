class Changelistingsagain < ActiveRecord::Migration[7.0]
  def change
    add_column :listings, :wifi, :boolean
    add_column :listings, :kitchen, :boolean
    add_column :listings, :tv, :boolean
    add_column :listings, :pets_allowed, :boolean
    add_column :listings, :free_parking, :boolean
    add_column :listings, :air_conditioning, :boolean
    add_column :listings, :pool, :boolean
  end
end

