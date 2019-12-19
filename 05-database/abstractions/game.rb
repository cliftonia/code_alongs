# template for making objects
# factory for making fishes
# we are writing a god object
# this object just has the ability to make objects 

# ruby in caps means its a constant (it does not change)
# syntax new class needs to capital & camelcase
# new custom type 


  
  class Fish
  
    def initialize(new_name)
      # scope - local - 
      # increase the scope 
      # instance variable
      @name = new_name
      @health = 10
    end

    f1 = Fish.new("nemo")
    f2 = Fish.new("dory")

    fishes = []
    fishes.push(f1)
    fishes.push(f2)


    # instance methods feature of the future fish that I am going to make 
    def sleep
      @health = @health + 1
    end 
  
    def shark_bite
      @health = @health - 9
    end 
  
  end 
  
  class Shark 
    
    def initialize(name, health)
      @name = name 
      @health = health
    end
  
    def get_health
      return @health
    end
  end 
  
  class Counter
  
    def initialize
      @count = 1
    end
  
    def increment
      @count = @count + 1
    end
  
  end

end

methods - Object.methods

# f1 = Fish.new("nemo")
# f2 = Fish.new("dory")

# s1 = Shark.new('sharky',100)

require 'pry'
binding.pry