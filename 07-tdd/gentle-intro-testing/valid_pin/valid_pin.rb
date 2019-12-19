# guard conditions - early return 

def valid_pin?(pin)
  return false if pin.to_i.to_s != pin #not a number
  return false if pin.length != 4 # not 4 digit 
  return false if pin.chars.uniq.length == 1 # all number the same
  return true 
end 

