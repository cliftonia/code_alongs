class Monkey

  def initialize(name, species)
    @name = name
    @species = species
    @foods_eaten = []

  end

  def add_food(food)
    @foods_eaten.push(food)
  end

  def intro
    puts "Hi my name is #{@name}. I am a #{@species}. I had a #{@foods_eaten.join(" and ")} for brunch"
  end 


end 
