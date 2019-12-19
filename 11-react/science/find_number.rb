secret = rand(10000)

p "guess between 1 - 10000"
guess = gets.chomp.to_i

while guess != secret
  if secret > guess
    puts "guess higher"
  else 
    puts 'guess lower'
  end 
  guess = gets.chomp.to_i
end 

puts "congrats its lunch time "

