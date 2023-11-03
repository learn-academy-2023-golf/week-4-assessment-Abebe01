system('clear')
# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

def even_odd(num)
    if num % 2 == 0
         'num is even'
        else 
            'num is odd'
    end
end

reposts1 = 7
# Expected output: '7 is odd'
p even_odd(reposts1)

reposts2 = 42
# Expected output: '42 is even'
p even_odd(reposts2)
reposts3 = 221
# Expected output: '221 is odd'
p even_odd(reposts3)

# Pseudo code:
# create a method called 'even_odd'
# Will definetley contain an if/else statement 
#use num as the placeholder where the var will go later 
#use the modulo to apply the "even/odd logic"
#if nots not even it must be odd << my logic for not creating an elsif for odds
# outcome is "num is even" or "num is odd"


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

def no_vowels(string)
    string.delete('aeiou') 
end

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
p no_vowels(beatles_album1)
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
p no_vowels(beatles_album2)
beatles_album3 = 'Abbey Road'
p no_vowels(beatles_album3)
# Expected output: 'bby Rd'


# Pseudo code:
# Create a method called no values that takes in a string as a place holder
# use string.delete and plug in the vowels as string 
#use p to log the method with the desired var
#output is the var without vowels

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

# def reverse_string(string)
#    reverse == string.downcase.reverse
# end
#       p reverse_string(palindrome_test_case1)

def origin_string(string)
    origin = ""
    string.each_char do |char|
      if char != ' '
        origin << char.downcase
      end
    end
    origin
  end
  
  def palin(string)
    origin_string = origin_string(string)
    if origin_string == origin_string.reverse
      "#{string} is a palindrome"
    else
      "#{string} is not a palindrome"
    end
  end
    
palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
# p palin(palindrome_test_case1)

     p palin(palindrome_test_case1)


palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'

p palin(palindrome_test_case2)

palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

p palin(palindrome_test_case3)

# Pseudo code:
# Creat a method that supplys an empty string 
# use 'each_char do' and char to checl the original string and determine if the character is a space or not ' '
# ^ If it is not, have a lowercase version of the character returned. 
#
# create a method that uses the previous method along with a conditional statement to pass the sting through, change the characters and reverse it
#  then compare the strings
# return the desired value (is a palindrome/is not a palindrome) with the original string 