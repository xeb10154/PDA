
class Card
  attr_reader :suit, :value, :name

def initialize(suit, value, name = "#{value} of #{suit}")
  @suit = suit
  @value = value
  @name = name
end

end
