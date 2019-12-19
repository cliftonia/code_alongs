# primitives
# data types
# flow control - control flow
# repl
# syntax
# operators 
# abstractions 

# quit = 'n'
require 'pry'

# loop do

#   puts "continue? y/n"
#   user_input = gets.chomp

#   binding.pry

#   if user_input == 'n'
#     break
#   end

# end

numbers = [3,4,5,6,7,8,9,10]
new_arr = []

numbers.each do |num|
  # if num % 2 == 0
  if num.even?
    new_arr.push num
  end
end

# p() show more details for programmers
# print() no newline
# puts() add newline

p new_arr

binding.pry