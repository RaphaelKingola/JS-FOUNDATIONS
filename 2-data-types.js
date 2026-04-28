/
Data type- is a classification that tells a program what kind of value is being stored and what operations can be performed on it.

Computers need to know whether a value is:
* a number
* text
* true/false
* a collection of items
* an object with properties

Data types help programming languages organize memory, validate operations, and prevent errors.

-----------Importance of Data Types -----------

* Storing values correctly
* Performing correct operations
* Reducing bugs
* Improving code readability
* Managing memory efficiently

Without data types, programs would not know how to treat values.


-----------Main Common Data Types----------------

A. Number
Used for numeric values.
Examples:
10 - Whole number
3.14 - Decimal number
-7 - Integers

Use cases in a program include:

* age
* price
* score
* calculations


B. String (Text);Used for words, letters, symbols, sentences.

Examples:
`text
"Hello"
"Mary Jane"
"123"

Use cases:
* names
* messages
* emails
* addresses

----

C. Boolean;Stores only:true or false values.
- Boolean values are used for conditions and decision-making in programs.

Use cases:

* isLoggedIn
* hasPaid
* isAdmin

Used in decision making.

---

## D. Null / Empty Value

Represents intentional absence of value.

Examples:

```text
null
none
nil
```

(Depends on language)

Use case:

* no user selected
* no result found

---

## E. Array / List / Collection

Stores multiple values in order.

Example:

```text
["pen", "book", "phone"]
```

Use cases:

* shopping cart items
* students list
* tasks

---

## F. Object / Dictionary / Map

Stores data as key-value pairs.

Example:

```text
name = Raff
age = 22
```

Use cases:

* user profile
* product details
* settings

---

## 3. JavaScript Examples

```javascript id="7gxnjj"
let age = 25;                  // Number
let name = "Raff";            // String
let isLoggedIn = true;        // Boolean
let emptyValue = null;        // Null
let items = ["Book", "Pen"]; // Array

let user = {
  name: "Raff",
  age: 25
};                            // Object
```

---

## 4. Real-World Analogy

Think of a school office:

* **Number** = student marks
* **String** = student name
* **Boolean** = passed / failed
* **Array** = class list
* **Object** = full student record
* **Null** = no student assigned yet

Each kind of information needs the right format.

---

## 5. Big-Picture Use Case in Real Software

### Banking App

* balance → Number
* accountName → String
* isVerified → Boolean

### E-commerce Website

* cartItems → Array
* product → Object
* discountCode → String

### Social Media App

* username → String
* followers → Number
* onlineStatus → Boolean

---

## 6. Common Pitfalls

### Mixing Number and String

```javascript id="lqfd4u"
"5" + 2
```

Result:

```text
"52"
```

Because `"5"` is text, not number.

---

### Assuming Empty String = Null

```javascript id="jksj5o"
""
```

Empty text is not the same as `null`.

---

### Wrong Type Causes Errors

Trying math on text can fail or behave unexpectedly.

---

## 7. Quick Summary Table

| Data Type | Meaning                 | Example         |
| --------- | ----------------------- | --------------- |
| Number    | Numeric values          | `10`, `3.5`     |
| String    | Text                    | `"Hello"`       |
| Boolean   | True/False              | `true`          |
| Null      | No value                | `null`          |
| Array     | Multiple ordered values | `[1,2,3]`       |
| Object    | Key-value data          | `{name:"Raff"}` |

---

## 8. Final Summary

A **data type** defines what kind of data a variable stores and how it can be used.

They are essential because real software handles many kinds of information—numbers, names, decisions, lists, and structured records.

Think of data types like different containers:

* Bottle for water
* Box for shoes
* Folder for papers

Each item belongs in the right container.
