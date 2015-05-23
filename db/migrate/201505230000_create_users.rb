class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string  :name
      t.string  :password_hash
      t.string  :email
      t.string  :phone
      t.integer :is_doctor

      t.timestamps
    end
  end
end
