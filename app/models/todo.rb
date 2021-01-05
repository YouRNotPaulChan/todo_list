class Todo < ApplicationRecord
  enum complete: %w[uncompleted completed]
end

