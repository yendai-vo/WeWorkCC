class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.string :suit
      t.string :card_type
      t.belongs_to :deck, foreign_key: true
      t.timestamps
    end
  end
end
