"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Basic Types
var id = 5;
var company = 'Corey Noble';
var isPublished = true;
var x = 'Hello';
x = true;
var ids = [1, 2, 3, 4, 5];
var names = ['Maynard', 'Kyle', 'Corey', 'Kaitlin', 'Dante'];
var arr = ['abc', 123, true, null];
/* Tuple
 * A fixed length array. The values within adhere to strict ordering of types.
 */
var person = [1, 'Corey', true];
// Tuple Array
var employee = [
    [1, 'Corey'],
    [2, 'Kaitlin'],
    [3, 'Maynard']
];
// Union (Can be multiple defined types)
var pid;
pid = '22';
pid = 22;
/* Enum (Set of Named Constants)
 * Assigns index values to each constant when used, 0 based.
 */
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right"; // = 3
})(Direction1 || (Direction1 = {}));
/* Can set a value to start at a different index. All following values will
   increment higher than the previous value in the list if not explicitly set. */
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 1] = "Up";
    Direction2[Direction2["Down"] = 2] = "Down";
    Direction2[Direction2["Left"] = 3] = "Left";
    Direction2[Direction2["Right"] = 4] = "Right"; // = 4
})(Direction2 || (Direction2 = {}));
// Can explicitly set enum constants to any type of value.
var Direction3;
(function (Direction3) {
    Direction3["Up"] = "Up";
    Direction3["Down"] = "Down";
    Direction3["Left"] = "Left";
    Direction3["Right"] = "Right";
})(Direction3 || (Direction3 = {}));
// Explicitly setting the object types.
var userA = {
    id: 1,
    name: 'John'
};
// Using a custom 'User' type which previously defined the inner object types.
var userB = {
    id: 1,
    name: 'John'
};
// Type Assertion
var cid = 1;
var customerIdA = cid;
var customerIdB = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
var user1 = {
    id: 1,
    name: 'John'
};
var add = function (x, y) { return x + y; };
var subtract = function (x, y) { return x - y; };
var Person = /** @class */ (function () {
    // Runs on object instanciation
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        return this.name + " is now registered";
    };
    return Person;
}());
var corey = new Person(1, 'Corey');
var kaitlin = new Person(2, 'Kaitlin');
// Subclasses
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.position = position;
        return _this;
    }
    return Employee;
}(Person));
var emp = new Employee(3, 'Maynard', 'Developer');
// Generics
function getArray(items) {
    return new Array().concat(items);
}
var numArray = getArray([1, 2, 3, 4]);
var stringArray = getArray(['a', 'b', 'c', 'd']);
