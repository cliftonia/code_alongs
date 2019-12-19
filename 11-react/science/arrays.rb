require 'benchmark'

def make_arr_by_typing_manually
  ['a','b','c','d','e','f','g']
end 

def make_arr_by_splitting_string
  return "a b c d e f g".split(" ")
end 

def make_arr_by_splitting_regex
  return "a b c d e f g".split(/\s/)
end 

n = 500_000

Benchmark.bm do |benchmark|
  
  benchmark.report("manually") do
    n.times do
    make_arr_by_typing_manually
    end 
  end
  
  benchmark.report("splitting") do 
    n.times do
    make_arr_by_splitting_string
    end 
  end 

  benchmark.report("regex") do 
    n.times do
    make_arr_by_splitting_regex
    end 
  end 

end 

map = [
  [1,1,1],
  [1,'x',1]
  [1,1,1]
]

# 3 * 3 = 9 ops
# 4 * 4 = 16 ops
# 5 * 5 = 25 ops 

# time complexity - constant??? no 
# linear?? 
# O(n^2) quadratic 

# sample size 

# find the treasure - x
rows.each do 
  columns.each do 
    # is x found 
  end 
end 