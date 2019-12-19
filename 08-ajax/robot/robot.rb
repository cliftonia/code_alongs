require 'pry'

class Robot
  #metaprogramming - double edge - powerful and easily can be abused 
  attr_reader :name, :size, :created_at 
  # attr_writer :size
  # this will allow you to read and write 
  attr_accessor :size

  def initialize
    @name = generate_name
    @size = 5
    @created_at = Time.now 
  end

  # setter/writter 
  def set_size(new_size)
    @size = new_size
  end 

  #syntactic sugar - size setter
  # def size=(new_size)
  #   @size = new_size
  # end 

  def generate_name 
    "#{prefix}#{suffix}"
  end 

  def prefix
    ("AA".."ZZ").to_a.sample
  end 

  def suffix 
    ('000'..'999').to_a.sample
  end 

  def reset

  end 

end

binding.pry 