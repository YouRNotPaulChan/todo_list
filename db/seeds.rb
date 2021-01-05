# frozen_string_literal: true
5.times do |index|
  Todo.create!({ title: "Todo #{ index + 1 }", complete: 0 })
end

puts "5 uncompleted todos created"

5.times do |index|
  Todo.create!({ title: "Todo #{ index + 1 }", complete: 1 })
end

puts "5 completed todos created"

