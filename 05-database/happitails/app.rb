require 'pry'
require_relative 'animal.rb'
require_relative 'client.rb'

a1 = Animal.new("Naples","Cat", 3, "Male")
a2 = Animal.new("Rex","Dog", 1, "Male")
a3 = Animal.new("Pepper","Dog", 2, "Female")

c1 = Client.new("Steve")

shelter = []
clients = []

shelter.push(a1)
shelter.push(a2)
shelter.push(a3)

clients.push(c1)

# hard code !!!!!!!!!!!! to speed up develepment 

# $shelter makes this global

puts "welcome to happitails"
puts "1 - list all animals"
puts "2 - list all clients"
puts "3 - Add an animal"
puts "4 - Adopt an animal"

choice = gets.chomp 

if choice == "1"
  shelter.each do |animal|
    puts "#{animal.species} name #{animal.name} "
  end 
elsif choice == "2"
  clients.each do |client|
    puts client.client_name
  end
elsif choice == "3"
  print "Name: "
  name_input = gets.chomp
  print "Species: "
  species_input = gets.chomp
  print "Age: "
  age_input = gets.chomp
  print "Sex: "
  sex_input = gets.chomp
  shelter.push(Animal.new(name_input,species_input,age_input,sex_input))
elsif choice == "4"
  print "What is your Name: "
  c_name = gets.chomp
  clients.push(Client.new(c_name))
  puts "#{c_name} Select the animal you want by number"
  shelter.each.with_index do |animal,index|
    puts "#{index}: #{animal.species} name #{animal.name} "
  end
  # c_animal_index = gets.chomp
  # shelter.each.with_index do |animal,index|
  #   if c_animal_index == index
  # end
  clients[1].client_animal.push("df")
end



binding.pry
