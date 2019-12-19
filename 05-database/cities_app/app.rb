require 'active_record'
require 'pry'


options = {
  adapter: 'postgresql',
  database: 'cities_app'
}

ActiveRecord::Base.establish_connection(options)

# naming convention
# class name maps to table name
# singular maps to plural
class City < ActiveRecord::Base
end

binding.pry

# require "pry"
# require 'pg'

# objective - list out all cities in the terminal 

# 1 - connect to db

# class City
#   def initialize(name,population)
#     @name = name
#     @population = population
#   end

#   def self.all

#   end

#   # getter methods
#   def name
#     @name
#   end

#   def population
#     @population
#   end

#   def save
#     # connect to db
#     conn = PG.connect(dbname: 'cities_app')
#     conn.exec("INSERT INTO cities (name, population) VALUES ('#{@name}', #{@population});")
#     conn.close
#   end
# end

#     # make the sql statement 
#     # exec
#     # close db connection

# c1 = City.new("melbourne", 4443000)


# # { id: 1, name: 'melbourne', population: 4443000}

# # [] = all_cities()

# # conn = PG.connect(dbname: 'cities_app')
# # results = conn.exec("SELECT * FROM cities;")
# # # results is like an array of hashes

# # results.each do |city|
# #   puts "#{city["name"]}, #{city["population"]} "
# # end

binding.pry