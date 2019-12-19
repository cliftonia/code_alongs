

def add(num1, num2)
  return num1 + num2
end


#  testing in general especially unit testing
# its just an assertion 

# test suite - specification for how the add method works

def test(msg, actual, expected )
  if actual == expected
    puts "pass - #{msg}"
  else  
    puts "fail - #{msg}"
  end 
end 

# test case 1
test "strings", add("a", "b"), "ab"
# test case 3
test "positive numbers", add(1,2), 3

# if add('a','b') == 'ab'
#   puts "test strings works"
# else 
#   puts "test strings fail"
# end 

# # test case 2 
# if add(2,2) == 4
#   puts "test 2 positive number works"
# else 
#   puts "testing 2 positive number fail"
# end 

# # test case 3
# if add(0,0) == 0
#   puts "testing zero works"
# else  
#   puts "testing zero fail"
# end 