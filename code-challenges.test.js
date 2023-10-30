// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining items.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("shuffle", () => {
    it("takes in an array, removes the first item from the array, and shuffles the remaining items", () => {
      expect(shuffle(["purple", "blue", "green", "yellow", "pink"])).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
      expect(shuffle(["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"])).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
    })
  })


const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]


const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]



// b) Create the function that makes the test pass.

const shuffle = (arr) => {
    if (arr.length > 0) {
      const firstItem = arr.shift()
      
      for (let i = arr.length - 1; i > 0; i--) {
        const shuff = Math.floor(Math.random() * (i + 1)) 
        [arr[i], arr[shuff]] = [arr[shuff], arr[i]]
      }
      
      arr.unshift(firstItem)
    }
    
    return arr
  }
  

// Pseudo code:
// Define a function to shuffle an array 
// Remove the first item from the array firstItem = array.shift(
// Iterate over the remaining items and shuffle them with for loop 
// Generate a random index within the range [0, i]
// Swap the current item with the randomly selected item
// Add the first item back to the shuffled array// array.unshift(firstItem)
// Return the shuffled array


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

describe("calculateTally", () => {
    it("calculates the end tally for different vote counts", () => {
      expect(calculateTally({ upVotes: 13, downVotes: 2 })).toEqual(11)
      expect(calculateTally({ upVotes: 2, downVotes: 33 })).toEqual(-31)
    })
  })

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// b) Create the function that makes the test pass.

function calculateTally(votes) {
    const { upVotes, downVotes } = votes
    const tally = upVotes - downVotes
    return tally
  }
// Pseudo code:
// Define a function to calculate the end tally function - calculateTally
// Extract the number of up votes and down votes from the input object - upVotes = votes.upVotes
// Calculate the tally by subtracting down votes from up votes tally = upVotes - downVotes
// Return the calculated tally return tally