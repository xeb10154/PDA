### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

# file extension .rb not necessary. Path directory not specified.
require_relative('card.rb')
class CardGame


  def checkforAce(card)
    if card.value = 1 # assignment operator used instead of a comparator
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2) # typo error, def instead of dif. Comma is also needed to separate args.
  if card1.value > card2.value
    return card.name # should be card1.name
  else # elsif statement to take into account card of equal value
    card2 # should be card2.name
  end
end
end # extra dangling end keyword

def self.cards_total(cards)
  total # No value or datatype set for variable total
  for card in cards
    total += card.value
    return "You have a total of" + total # Should be interpolated with a space. Return should be outside for loop
  end
end

# end keyword required for this class

```
