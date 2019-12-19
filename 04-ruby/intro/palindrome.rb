
def hello firstname, lastname
  return "hello #{firstname}, #{lastname}"
end

greeting = hello("Clifton","Baggerman")

p greeting.upcase

# word = "a nut for a jar of tuna"



# input.delete!("\n")

# p(input) #programmers print - arrays - objects
# internal structure that programmers care about

# puts is really for end users

# print "type in a word: "
# input = gets.chomp

def palindrom?(input)
  if input == input.reverse()
    return true
  else
    return false
  end 
end

p palindrom?("racecar")
p palindrom?("blah")