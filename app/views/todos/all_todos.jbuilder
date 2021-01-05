json.pending do
  json.array! @pending, partial: 'todo', as: :todo
end

json.completed do
  json.array! @completed, partial: 'todo', as: :todo
end

