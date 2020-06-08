class CreateNotegroups < ActiveRecord::Migration[6.0]
  def change
    create_table :notegroups do |t|
      t.string :title
      t.timestamps
    end

    add_reference :notegroups, :user, foreign_key: true
    add_column :notegroups, :color, :string, default: "bleu"
  end
end
