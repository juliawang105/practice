class CreatePhysicians < ActiveRecord::Migration[5.2]
  def change
    create_table :physicians do |t|
      t.string :f_name, null: false 
      t.string :l_name, null: false 
      t.string :email, null: false 
      t.timestamps
    end
  end
end
