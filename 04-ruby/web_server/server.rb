# backend
# doesnt run on the browser
# serves files
# serves requests
# host
# listens and repsonses

# server - client 
require 'pry'

def pam(req)
  if req == "pizza"
    return "🍕"
  elsif req == "soft serve"
    return "🍦"
  else
    return "no we don't have that"
  end
end

loop do 
  print 'can i take your order?: '
  request = gets.chomp

  response = pam(request)
  puts response
end





binding.pry 