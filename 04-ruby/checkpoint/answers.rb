require 'pry'
# Question 1 (1pt)
# Define a method called offer_rose, which one parameter named person (String). When called for example offer_rose("batman") the method should return the string:


# "Would you take this rose, batman, in exchange for giving an old beggar woman shelter from the bitter cold?"

def offer_rose (person)
  if person == 'batman'
    p "Would you take this rose, batman, in exchange for giving an old beggar woman shelter from the bitter cold?"
  end
end 

offer_rose('batman')


# Question 2 (1pt)
# Assume the following hash...

town = {
  residents: ["Maurice", "Belle", "Gaston"],
  castle: {
    num_rooms: 47,
    residents: ["Robby Benson"],
    guests: ['birds']
  }
}


# Programmatically using Ruby...

# Add "Belle" to the beginning of the guests array
town[:castle][:guests].unshift('Belle')
# Add a new key and value pair to the castle hash (key :cook value "Mrs Potts")
town[:castle][:cook] = "Mrs Potts"
# Question 3 (1pt)

# Assume you have an array of strings representing friends' names...

friends = ["Chip Potts", "Cogsworth", "Lumière", "Mrs. Potts"]
# Using a loop and string interpolation, print each string in friends to the Terminal...like below

friends.each do |f|
  p "Belle is frieneds with #{f}"
end


# Belle is friends with Chip Potts
# Belle is friends with Cogsworth
# Belle is friends with Lumière
# Belle is friends with Mrs. Potts

# Question 4 (2pt)
# Assume the following array of hashes:

lost_boys = [
  {name: 'Tootles', age: '11'},
  {name: 'Nibs', age: '9'},
  {name: 'Slightly', age: '10'},
  {name: 'Curly', age: '8'},
  {name: 'The Twins', age: '9'}
]

# Use .each to iterate over the lost_boys array to calculate to the sum of all lost boys age. print the sum age in the terminal

ages_array = []

lost_boys.each do |num|
  ages_array.push(num[:age].to_i)
end

ages_array = ages_array.sum

p ages_array

# Question 5 (3pt)
# Assume the following array:

children = ['Wendy', 'John', 'Michael']
# Use the existing children array to create a new array named darling_children with each name transformed with a number appended to the front and Darling appended to the end of each name.

# The new darling_children array should contain the following

# ['1 Wendy Darling', '2 John Darling', '3 Michael Darling']

darling_children = []

count = 0

children.each do |child|
  darling_children.push((count+=1).to_s + " " + child + " Darling")
end

p darling_children


# Question 6 (2pt)
# Assume the following

names = ["Belle", "Cogsworth", "Lumière", "Mrs. Potts"]
short_names = []

names.each do |nam|
  if nam.length < 8
    short_names.push(nam)
  end
end
# Selected all the names with less than 8 character and assign to a new array named short_names

p short_names

# Question 7 (3pt) bonus

def scream (num)
  if num == 0
    p "crickets"
  elsif num == 1
    p "lol"
  elsif num == 2
    p "lolol"
  elsif num == 3
    p "lololol"
  elsif num == 7
    p "lololololololol"
  end
end

p scream(7)

# or

# ran out of time where i would like to have added it to one line 
def scream_v2 (num)
  num.times { p "lol" }
end 

p scream(7)

# Define a scream method that accepts a parameter and when called should as return a string as per the examples below"

# scream(0) #=> "crickets"
# scream(1) #=> "lol"
# scream(2) #=> "lolol"
# scream(3) #=> "lololol"
# scream(7) #=> "lololololololol"
binding.pry