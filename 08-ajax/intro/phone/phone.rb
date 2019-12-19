

class Phone
  def initialize(input)
      @input = input
  end

  def number
    # stripped = @input.gsub(/[^0-9]/, "")
    stripped = @input.gsub(/\D/, "")
    if stripped[0] == "1" && stripped.length == 11
      stripped.slice!(0)
    end
    stripped.length == 10 ? stripped : "0000000000"
  end

  def area_code
      @input[0..2]
  end

  def to_s
    "(#{@input[0..2]}) #{@input[3..5]}-#{@input[6..9]}"
  end 

end

