require 'fileutils' # standard library
require 'pry'

hackers = [
  'Bob Hawke',
  'Paul Keating',
  'Malcolm Turnbull'
]

# FileUtils.mkdir("testing")
# FileUtils.touch("testing/README.MD")
# FileUtils.cd('..')

hackers.each do |hacker|
 dir_name = hacker.downcase.sub(" ","_")
 FileUtils.mkdir(dir_name)
 FileUtils.cd(dir_name) do 
  FileUtils.touch("README.MD")
 end
end


# hackers.each do |hacker|
#   puts hacker
# end

# hackers
# |
# |--bob_hawke
# |  |--README.md
# |

# loop through hackers - yes
# string manipulation - lowercase & replace space with _
# work with file system?

# require a standard library that works with the filesytem








binding.pry