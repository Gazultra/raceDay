let raceNumber = Math.floor(Math.random() * 1000);

// let registerRunner = "Yes"
// if ("yes") {
//   console.log("thanks")
// }else {
//   console.log("Please Register")
// }

const registeredEarly = false;

let age = 18;

const racer = "Able to Race"
 if (age > 18 && registeredEarly){
   console.log(racer)}
 else {
   console.log("Please Register")
 }

let raceTime = "9:30am"
if (age > 18 && registeredEarly){
  console.log(`Your race number is ${raceNumber}. Race begins at 9.30am`)
} else if (age > 18 && registeredEarly === false ){
  console.log(`Your race number is ${raceNumber}. Race begins at 11.00am`)
}else if (age < 18){
  console.log(`Your race number is ${raceNumber}. Your race begins at 12.30pm`)
} else (age === 18)
  console.log(`Please go and see the registration desk to sign on.`)


