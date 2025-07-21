// Task 2

let someString: string = 'String' 
let someNumber: number = 32
let someBoolean: boolean = false
let someNull: null = null
let someUndefined: undefined = undefined
let someArray: any[] = ['string', 4, undefined]


console.log(someString, someNumber, someBoolean, someNull, someUndefined, someArray)

someArray = [2323, 2, "Hello TS!"]
someString = "Welcome to the club, buddy!"

console.log(someArray, someString)

let someNumberArray: number[] = [1, 2, 3]

someNumberArray.push(1)
someNumberArray.slice(0, 1)
someNumberArray.length
someNumberArray.sort((a, b) => a - b)