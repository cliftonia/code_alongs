require 'sinatra'
require 'pry'

# http request 
# get - http method
# /pizza - url
# this is the starting point for the web app

get '/' do
  'welcome to dominos'
end

get '/hello' do
  "<p>hi #{ params['username'] }</p>"
end

get '/pizza' do
  erb(:bob) #template

end

get '/beer' do 
  erb(:beer)
end 