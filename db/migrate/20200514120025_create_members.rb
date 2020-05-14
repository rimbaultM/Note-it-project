class CreateMembers < ActiveRecord::Migration[6.0]
  def change
    create_table :members do |t|
      t.string :title

      t.timestamps
    end

    add_reference :members, :user, foreign_key: true
    add_reference :members, :notegroup, foreign_key: true
    add_column :members, :status, :string, default: "waiting"
  end
end
