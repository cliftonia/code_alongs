require './monkey'
# or
# require_relative "monkey.rb"

require "pry"

m1 = Monkey.new('carl','Spider Monkey')
m1.add_food("Cheese")
m1.add_food("banna")
m1.add_food("cake")

binding.pry