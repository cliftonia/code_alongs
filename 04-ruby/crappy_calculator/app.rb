require 'sinatra'
require 'sinatra/reloader' # ecosystem

#http://localhost:4567

# DSL - domain specific language - sinatra - framework
# route - functions
get '/about' do
  'its a crappy calculator'
end

# another route
get '/add' do

  # last line is the respond you are sedning
  # back to the client 
  # sinatra provides params
  
  first = params['num1'] 
  second = params['num2'] # params is special - hash
  
  total = params['num1'].to_i + params['num2'].to_i

  total.to_s #response - last expression
end



# get '/clifton' do
#   first_name = params['firstname']
#   last_name = params['lastname']

#   full_name = params['firstname'] + " " + params['lastname']

#   erb(:clifton)
# end

# query strings