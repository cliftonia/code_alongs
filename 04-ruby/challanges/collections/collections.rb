require 'pry'

### Arrays

# Starting with the following array...

# ```rb
planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]
# ```

# Access the second value in `planeteers`.

# ```rb
p planeteers[1]
# ```

p planeteers.first
p planeteers.last
p planeteers.size
p planeteers.length

# Add "Heart" to the end of `planeteers`.

# ```rb
planeteers.push('Heart')
planeteers << 'Heart' #shuffle
# ```

# Combine `planeteers` with `
rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]
# ` and save the result in a variable called `heroes`.

# ```rb
heroes = planeteers.concat(rangers) # one way JS way as well
heroes = planeteers + rangers # another way
p heroes
# ```

# Alphabetize the contents of `heroes` using a method. [The Ruby documentation might help](http://ruby-doc.org/core-2.2.0/Array.html).

# ```rb
# sorted = rangers.sort # Ascending sort
# sorted = rangers.sort { |a, b| a <=> b } # Same thing!
# sorted

p heroes.sort
# ```

# Randomize the contents of `heroes` using a method. [The Ruby documentation might help](http://ruby-doc.org/core-2.2.0/Array.html).

# ```rb
p heroes.shuffle
# ```

# #### Bonus

# Select a random element from `heroes` using a method. [The Ruby documentation might help](http://ruby-doc.org/core-2.2.0/Array.html).

# ```rb
p heroes.sample
# ```

# Select all elements in `heroes` that begin with "B" using a method. [The Ruby documentation might help](http://ruby-doc.org/core-2.2.0/Array.html).

# ```rb
# heroes.find {|item| item.include?("B")} #only finds the first 
heroes.select {|hero| hero.start_with?("B")} #find all of them and put therm into an array

heroes_start_with_b = []

heroes.each do |hero|
  if hero.start_with?("B")
  heroes_start_with_b.push(hero)
  end
end

# ```

# ### Hashes

# Initialize a hash called `ninja_turtle` with the properties `name`, `weapon` and `radical`. It should have values of "Michelangelo", "Nunchuks" and `true` respectively.


# ```rb
ninja_turtle = 
{
  "name" => "Michelangelo",
  "weapon" => "Nunchuks",
  "radical" => true
}
# ```

# Add a key `age` to `ninja_turtle`. Set it to whatever numerical value you'd like.

# ```rb
ninja_turtle['age'] = 12
# ```

# Remove the `radical` key-value pair from `ninja_turtle`.

# ```rb
ninja_turtle.delete('radical')
# ```

# Add a key `pizza_toppings` to `ninja_turtle`. Set it to an array of strings (e.g., `["cheese", "pepperoni", "peppers"]`).

# ```rb
ninja_turtle['pizza_toppings'] = ["cheese", "pepperoni", "peppers"]
# ```

# Access the first element of `pizza_toppings`.

# ```rb
ninja_turtle['pizza_toppings'][0]
# ```

# Produce an array containing all of `ninja_turtle`'s keys using a method. [The Ruby documentation might help](http://ruby-doc.org/core-1.9.3/Hash.html).

# ```rb
turtles = []
ninja_turtle.each do |key,value|
  turtles.push(key)
end

# or

ninja_turtle.each_key {|key| turtles.push(key)} 
# ```

# #### Bonus

# Print out each key-value pair in the following format - "KEY's is equal to VALUE" -- using a method. [The Ruby documentation might help](http://ruby-doc.org/core-1.9.3/Hash.html).

# ```rb
ninja_turtle.each do |key,value|
  p "#{key} is equal to #{value}"
end
# ```



binding.pry