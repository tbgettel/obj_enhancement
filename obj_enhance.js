/** TYLER GETTEL
 * OBJECT ENHANCEMENT
 */

//refactor this into es2015

//  function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

function createInstructor(firstName, lastName){
    return {
        firstName,
        lastName
    }
}

//refactor this into es2015

// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"

let favoriteNumber = 42;

let instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
}

//refactor this into es2015

// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
//   }

  let instructor = {
      firstName: "Colt",
      sayHi(){
          return "Hi!";
      },
      sayBye(){
          return this.firstName + " says bye!";
      }
  }

  //generate animal function

  let generateAnimal = (species, verb, noise) => {
      return {
          species,
          [verb](){
              return noise;
          }
      }
  }