const name = 'Arvind Sharma'
const age = 25

// console.log("hii! My name is "+ name + ". I am " + age + " year old.")
// console.log(`Hi! My name is ${name}. I am ${age} year old`)

// we can print both the value according to this pattern.

// now we can assign a string like below
const gameName = new String('Free Fire') // here also we defined it as an object.

//  in this pattern we can print each letter of the string and each letter has their address.

// console.log(gameName[0])
// console.log(gameName[2])
// console.log(gameName[5])
// console.log(gameName[8])
// console.log(gameName[13])


// console.log(gameName.__proto__) // it defined that it is an object

// we can access all the prototype of this string using these function.

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.toLowerCase())
// console.log(gameName.charAt(3))

// ..................now we check the substring

const newString = gameName.substring(0,6)
console.log(newString)