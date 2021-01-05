class CreateTodos < ActiveRecord::Migration[6.0]
  def change
    create_table :todos do |t|
      t.string :title
      t.integer :complete, default: 0
      t.string :remark
      t.integer :user_id

      t.timestamps
    end
  end
end

