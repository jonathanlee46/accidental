class CreateAppointments < ActiveRecord::Migration
  def change
    create_table :appointments do |t|
      t.string :user_id
      t.string :procedure
      t.string :date
      t.string :time_start
      t.string :time_end
      t.string :doctor_name

      t.timestamps
    end
  end
end
