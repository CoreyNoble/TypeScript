// Basic Types
let id: number = 5
let company: string = 'Corey Noble'
let isPublished: boolean = true

let x: any = 'Hello'
x = true

let ids: number[] = [1, 2, 3, 4, 5]
let names: string[] = ['Maynard', 'Kyle', 'Corey', 'Kaitlin', 'Dante']
let arr: any[] = ['abc', 123, true, null]



/* Tuple
 * A fixed length array. The values within adhere to strict ordering of types.
 */
let person: [number, string, boolean] = [1, 'Corey', true]

// Tuple Array
let employee: [number, string][] = [ 
  [1, 'Corey'],
  [2, 'Kaitlin'],
  [3, 'Maynard']
]



// Union (Can be multiple defined types)
let pid: string | number

pid = '22'
pid = 22



/* Enum (Set of Named Constants)
 * Assigns index values to each constant when used, 0 based.
 */
enum Direction1 {
  Up,   // = 0
  Down, // = 1
  Left, // = 2
  Right // = 3
}

/* Can set a value to start at a different index. All following values will 
   increment higher than the previous value in the list if not explicitly set. */
enum Direction2 {
  Up = 1, // = 1
  Down,   // = 2
  Left,   // = 3
  Right   // = 4
}

// Can explicitly set enum constants to any type of value.
enum Direction3 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}



// Objects
// Creating a custom 'User' type
type User = {
  id: number,
  name: string
}

// Explicitly setting the object types.
const userA: {
  id: number,
  name: string
} = {
  id: 1,
  name: 'John'
}

// Using a custom 'User' type which previously defined the inner object types.
const userB: User = {
  id: 1,
  name: 'John'
}



// Type Assertion
let cid: any = 1
let customerIdA = <number>cid
let customerIdB = cid as number



// Functions
function addNum(x: number, y: number): number {
  return x + y
}

function log(message: string | number): void {
  console.log(message)
}



// Interfaces
interface UserInterface {
  readonly id: number // Cannot override readonly properties.
  name: string
  age?: number // Optional param, prefixed with ? before :.
}

const user1: UserInterface = {
  id: 1,
  name: 'John'
}

interface MathFunc {
  (x: number, y:number): number
}

const add: MathFunc = (x: number, y:number): number => x + y
const subtract: MathFunc = (x: number, y:number): number => x - y



// Classes (Used to create objects, and inherit properties from other classes)
interface PersonInterface {
  // Access Modifiers (public (default), private, protected)
  id: number
  name: string
  register(): string
}

class Person implements PersonInterface {
    id: number
    name: string

  // Runs on object instanciation
  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  register() {
    return `${this.name} is now registered`
  }
}

const corey = new Person(1, 'Corey')
const kaitlin = new Person(2, 'Kaitlin')



// Subclasses
class Employee extends Person {
  position: string
  
  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

const emp = new Employee(3, 'Maynard', 'Developer')



// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let stringArray = getArray<string>(['a', 'b', 'c', 'd'])