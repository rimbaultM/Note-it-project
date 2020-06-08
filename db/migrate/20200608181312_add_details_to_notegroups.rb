class AddDetailsToNotegroups < ActiveRecord::Migration[6.0]
  def change
        add_column :notegroups, :color, :string, default: "thème1"
  end
end
