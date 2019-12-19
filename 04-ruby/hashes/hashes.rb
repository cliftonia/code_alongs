require 'pry'


movie = {
  'title' => 'sharknado',
  'year' => 2000,
  'stars' => ['shark', 'tornados'],
  5 => 'five'
}

movie.each do |key, value|
  puts "key is #{key} & value is #{value}"
  # p value
end 

# db = {
#   'clifton' => 1,
#   'chris' => 1,
#   'nerko' => 5
# }

# db[3] = ['pam']
# db[3].push('alexis')

list = [1,2,3]

# wanting run a piece of code on each item// Ruby Blocks
list.each do |num| 
  puts 'Hi'
  puts num
  puts 'bye'
end

list.each { |num| puts num + 1 } # use this to have it all on one line 

db = {
  1 => ['clifton', 'chris'],
  5 => ['nerko']
}

binding.pry