class ChangeListings3 < ActiveRecord::Migration[7.0]
  def change
    remove_column :listings, :title
  end
end
