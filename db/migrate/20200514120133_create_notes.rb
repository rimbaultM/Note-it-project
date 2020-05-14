class CreateNotes < ActiveRecord::Migration[6.0]
  def change
    create_table :notes do |t|
      t.string :title
      t.text :content
      t.date :date
      t.boolean :done, default: false

      t.timestamps
    end
    add_reference :notes, :notegroup, foreign_key: true
    add_reference :notes, :user, foreign_key: true
  end

end
