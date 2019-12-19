require 'pry'

account_balance = 0

# pre check
while account_balance > 0
  puts("till the end of time")
end 

puts "it is nothing"


numbers = [3,4,5,6,7]
counter = 0


while counter < 5
  # puts(counter)
  binding.pry # debugger
  puts(numbers[counter])
  counter = counter + 1
end



# ruby block

3.times do
  puts('beetlejuice')
end

numbers.each do |num|
  puts num 
end