class Changelistingstableagain44 < ActiveRecord::Migration[7.0]
  def change
    remove_column :listings, :address, :string
    remove_column :listings, :image, :string

    add_column :listings, :country, :string
  end
end
