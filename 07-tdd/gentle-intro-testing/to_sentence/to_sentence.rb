# def to_sentence(words)
#   words.join(" and")
# end

# def to_sentence(words)
#   if words.length < 3
#   words.join(" and ")
#   elsif words.length > 3
#   words "#{words.first}, #{words[1]} and #{words.last}"   
#   end
# end

#               dependency 
def to_sentence(words)
  if words.length > 2
    last = words.pop
    # return words.join(", ") + " and " + last.to_s
    return "#{words.join(", ")} and #{last}"
  else  
    words.join(" and ")
  end 
end 