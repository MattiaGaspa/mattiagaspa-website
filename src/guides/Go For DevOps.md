---
title: Go For DevOps
description: "These notes are based of the book <a href='https://amzn.eu/d/33i3fXc' target='_blank' rel='noopener'><i>Go for DevOps</i></a> by John Doak and Davide Justice."
language: Go
published: true
---

# Go Basis

## Packets

### Declaration

All files in a directory must belong to the same package.
The declaration always appears at the beginning of the file with `package` and can only be preceded by comments.

The name of the package should also be the name of the directory in which it is located.

### Importing

There are two types of imports depending on the package:

- If the package is from the [standard library](https://golang.org/pkg/), it can be imported with its name. E.g. `"fmt"`, `"encoding/json"`, etc.;
- If the package is not in the stdlib then it needs to be imported with his link. E.g. `"github.com/johnsiilver/golib/lru"`, `"github.com/kylelemons/godebug/pretty"`.

Packages are imported with the keyword `import`.

If two packages have the same name, you can specify a new name:

```go
import (
	"github.com/devopsfogo/mypackage"
	jpackage "github.com/johnsilver/mypackage"
)
```

If a package is imported but never used, Go will not compile. If you need to use a _side effect import_, i.e., you only need to load the package for something to happen (without using it), you must place an `_`:

```go
import (
	"fmt"
	_ "sync"
)
```

## Variable type

Go is a statically typed language, meaning that once a type has been assigned to a variable, it cannot be changed.

The most common types of variables in Go are:

- `int`: an integer, stored in 64 or 32 bits depending on the architecture;
- `bool`: a boolean;
- `string`: a series of character in UTF-8 format;
- `float64`: a floating point number in 64 bits;
- `slice`: an adjustable list of elements;
- `map`: a dictionary;
- `struct`: a collection of attributes (variables);
- `interface`: an interface that contains methods that are well-defined;
- `pointers`: pointers contain memory address to other variables;
- `channels`: a buffered or non-buffered _pipe_ that can be used to send data asynchronously.

With the keyword `type`, you can create custom types based on existing ones.

The variable `_` is used to discard values.

## Loops in Go

Go only has one type of loop: `for`. It is also possible to implement other types of cycles:

- `while`:
  ```go
  var i int
  for i < 10 {
    i++
  }
  ```
- `loop`:
  ```go
  for {
    // Do something
  }
  ```

You can exit a loop with `break`. You can skip to the next iteration of the loop, if there is one, with `continue`.

The curly bracket must always be on the same line as the keyword.

## Conditionals in Go

There are two types of conditionals in Go:

- `if/else` blocks;
- `switch` blocks.

### `if/else` blocks

The syntax for the `if` block is:

```go
if expression {
    // Do something
}
```

You can also initialize a variable within the scope of the `if` statement even before the expression is evaluated:

```go
if err := someFunction(); err != nil {
	fmt.Fprintf(os.Stderr, "%v\n", err)
}
```

To execute something when the condition specified by the `if` expression is not met, use the `else` block:

```go
if condition {
	function1()
} else {
	function2()
}
```

For cleaner code, it is preferable not to use the `else` block.

To have more cases, you can also use the `else if` block:

```go
if x > 0 {
	fmt.Println("x is greater than 0")
} else if x < 0 {
	fmt.Println("x is less than 0")
} else {
	fmt.Println("x is 0")
}
```

Note that the closing curly brackets of the previous block and the opening curly brackets of the next block must be on the same line.

### `switch` blocks

The syntax is:

```go
switch value {
case match:
	// Do something
case match, match {
	// Do something
}
default:
	// Do something
}
```

If the `value` is equal to one of the `matches`, then the corresponding block is executed; otherwise, the default block is executed. The default block is optional.

Like `if`, `switch` can also have initialization:

```go
switch x := someFunc(); x {
case 3:
	fmt.Println("x is 3")
}
```

You can also remove the match so that the `case` behaves just like an `if`:

```go
switch {
case x > 0:
	fmt.Println("x is greater than 0")
case x < 0:
	fmt.Println("x is less than 0")
default:
	fmt.Println("x must be 0")
}
```

## Functions

The syntax in go is:

```go
func functionName(varName varType, ...) (return value, ...) {
	// Do something
}
```

In Go it's possible for functions to return more than one value:

```go
func divide(num, div int) (res, rem int) {
	res = num / div
	rem = num % div
	return res, rem
}
```

Note that `=` is used, not `:=`, because the variables `res` and `rem` are automatically created at the beginning of the function.

Another feature of functions in Go is that they support a variable number of arguments:

```go
func sum(numbers ...int) (sum int) {
	for _, i := range numbers {
		sum += i
	}
	return sum
}
```

This way, instead of having to create the array containing all the arguments, as is done in other languages, Go takes care of creating the array for us. The function can then be used as follows:

```go
sum(1, 2, 3, 4, 5) // 13
```

You can also have other arguments besides variable arguments, but variable arguments must be last.

### Anonymous functions

These are unnamed functions that are used only once in the program:

```go
func main() {
	result := func(word1, word2 string) string {
		return word1 + " " + word2
	}("Hello", "world")
	fmt.Println(result) // "Hello world"
}
```

## Define public and private

The visibility of a variable/function/etc. in Go is:

- Public: when types and functions can be used outside the package. To declare something as public, simply capitalize its first letter;
- Private: when types and functions can only be used by `.go` files within the same package. To declare something as private, simply lowercase its first letter.

There is also another visibility, _[internally exported](https://golang.org/doc/go1.4#internalpackages)_, which is not covered, however.

## Arrays and slice

### Array

An array is a fixed-length sequence of elements of the same type. The declaration of an array of five integers is:

```go
var arr [5]int
x := [5]int{}
```

Elements are accessed with the `[]` operator, as in C: `x[0]` is the first element and `x[4]` will be the last.

Unlike slices, passing an array as an argument to a function is equivalent to passing a copy (not a pointer).

### Slice

A slice is created from an array, but its length is not fixed. When the slice needs more space, it creates a new array and copies the elements from the old array to the new one.

The declaration of a slice is:

```go
var x = []int
x := []int{}
```

You can get the length of a slice with the `len()` function.

You can access the elements of a slice with the `[]` operator, just like an array. You can add elements to the slice with:

```go
x = append(x, 1) // Add 1 at the end of the slice
```

It is also possible to create a slice from an existing array or slice:

```go
x := []int{1, 2, 3, 4, 5}
y := x[1:3] // y is a slice containing elements 2 and 3 of x
```

Changing the values of the element `y[0]` will also change the value of `x[1]`. This is because slices are references to the original array.
The same goes when appending new elements.

Slices, unlike arrays, are passed by reference when passed as argument to functions:

```go
func doAppend(s1 []int) {
	s1 = appen(s1, 100)
	fmt.Println("inside: ", s1) // "inside: [1 2 3 100]"
}

func main() {
	x := []int{1, 2, 3}
	doAppend(x)
	fmt.Println("outside: ", x) // "outside: [1 2 3]"
}
```

To iterate over the slice:

```go
for index, val := range someSlice {
	fmt.Printf("slice entry %d: %s\n", index, val)
}
```

If the index is not needed, you can use `_` to discard it. If instead the value is not needed, you can write:

```go
for index := range someSlice {
	// ...
}
```

## Maps

You can declare a map with the `make()` function:

```go
var counters = make(map[string]int, 10)
```

With this instruction you will create a map of 10 elements, that maps a `string` to an `int`. Another way to declare a map is:

```go
models := map[string]string {
	"prius": "toyota",
	"chevelle": "chevy",
}
```

The values associated with the key are obtained using the same syntax as for arrays, specifying the key of the element you want to obtain between square brackets. If that key does not exist, the value zero for that data type is returned.

If, on the other hand, a value is assigned to a non-existent key, the size of the map increases.

All values within a map are extracted in the same way as slices:

```go
for key, val := range models {
	fmt.Printf("key: %q, value: %q\n", key, val)
}
```

## Pointers

In Go, you can obtain the memory address of a variable using the `&` operator. A variable's memory address can be stored in a pointer of the same type as the variable.

```go
var x int
var intPtr *int
intPtr = &x
```

To access the value pointed to by `intPtr`, use the dereference operator `*`. The line `fmt.Println(*intPtr)` will print the contents of `x`.

## Struct

It is a collection of variables. You can declare a struct in two ways: the first one (and less used) is:

```go
var record = struct {
	Name string
	Age int
} {
	Name: "john Doe"
	Age: 30
}
```

The second one uses the keyword `type` to create a new type based on the struct:

```go
type Record struct {
	Name string
	Age int
}

func main() {
	david := Record{Name: "David Justice", Age: 28}
	sarah := Record{Name: "Sarah Murphy", Age: 28}
	fmt.Printf("%+v\n", david)
	fmt.Printf("%+v\n", sarah)
}
```

You can access the fields of a struct with the `.` operator, as in `record.Name` or `record.Age`.

You can also create methods for structs. The syntax is:

```go
func (r Record) String() string {
    return fmt.Sprintf("Name: %s, Age: %d", r.Name, r.Age)
}
```

It should be noted that a struct is not a _reference type_: changing the value of a struct within a function will not change the value of the struct outside the function. To do this, a pointer is required. To create a function that increments age:

```go
func (r *Record) IncrAge() {
	r.Age++
}
```

It is good practice to have all methods of the struct accept either only pointers or only non-pointers.

_Constructors_ are special functions that initialize the struct. Go does not provide anything special, so you need to use a _constructor pattern_.

Often constructors are called `New<TypeName>()`, where `<TypeName>` is the name of the struct, or `New()` if there aren't other types within the package.

```go
func NewRecord(name string, age int) (*Record, error) {
	if name == "" {
		return nil, fmt.Errorf("name cannot be empty")
	}
	if age <= 0 {
		return nil, fmt.Errorf("age cannot be <= 0")
	}
	return &Record{Name: name, Age: age}, nil
}
```

## Interfaces

An interface is a collection of methods that a type must implement to be considered as implementing that interface. An interface is declared with the `type` keyword, followed by the name of the interface and the methods it contains:

```go
type Stringer interface {
    String() string
}
```

All types that implement the `Stringer` interface (defined in the `fmt` library) must have and implement the `String()` method. In the previous example, since `Record` implemented the `String()` function, it can be saved in a variable of type `Stringer`.

It should be noted that when a type is saved in an interface, it is no longer possible to access its members or functions that do not belong to the interface.

A blank interface is an interface that has no methods. It is an interface that can contain any variable. It is used by the fmt.Println() and fmt.Printf() methods to print objects:

```go
func Println(a ...interface{}) (n int, err error)
func Printf(format string, a ...interface{}) (n int, err error)
```

It is therefore an excellent method for passing values but not for using them.

### Type assertion

We talk about _type assertion_ when it is possible to change an `interface{}` value into a value that we can use. There are two methods:

- `if`: where `i.(string)` checks that `i` is a string. If `ok == true`, then `v` will be a string;
  ```go
  if v, ok := i.(string); ok {
      fmt.Println(v)
  }
  ```
- `switch`:
  ```go
  switch v := i.(type) {
  case int:
      fmt.Printf("%d", i)
  case string:
      fmt.Printf("%s", i)
  case float:
      fmt.Printf("%v", i)
  case Person, *Person:
      fmt.Printf("%v", i)
  default:
      fmt.Printf("%T", i) // %T print as is the type of i
  }
  ```

# Go Essentials

## Error handling

Go, unlike other programming languages, handles errors with the `error` interface:

```go
type error interface {
    Error() string
}
```

The most common way to create a new type of error is:

```go
err := errors.New("this is an error")
err := fmt.Errorf("user %s had an error: %s", user, msg)
```

You can also save errors in variables, so that you can check them later:

```go
var ErrNetwork := errors.New("network error")

for { // Keep trying
	err := someFunc("data")
	if err == nil {
		break // Success
	}
	if errors.Is(err, ErrNetwork) {
		log.Println("recoverable network error")
		time.Sleep(1 * time.Second)
		continue
	}
	log.Println("unrecovetabe error")
	break
}
```

When you receive an error from a lower-level package, you can wrap it so that an upper-level package can handle it without losing information. The wrapping is done with the `fmt.Errorf()` function:

```go
func restCall(data) error {
    if err := someFunc(data); err != nil {
        return fmt.Errorf("restCall(%s) had an error: %w", data, err)
    }
    return nil
}
```

The handling is done with the `As()` function:

```go
for {
    if err := restCall(data); err != nil {
        var netErr ErrNetwork
        if errors.As(err, &netErr) {
            log.Println("network error: ", err)
            time.Sleep(1 * time.Second)
            continue
        }
    log.Println("unrecoverable: ", err)
    }
}
```

The `As()` function will check if the received error is of the type `ErrNetwork` and, if so, will save it in the variable netErr. This snippet will work no matter how many times the error is wrapped.

## Constants

A constant is a value that cannot be changed during the execution of the program. It is declared with the syntax:

```go
const name = value
```

Constants can also be declared:

- Without a type: when writing `const var = 10`, we can use the constant `var` with every type that is numeric;
- With a type: when writing `const var int64 = 10`, we can use the constant `var` only with variables of type `int64`.

### Enumerations

It is possible to generate an enumeration with the keyword `iota`:

```go
const (
	a = iota // 0
	b = iota // 1
	c = iota // 2
)

const (
	a = iota * 2 // 0
	b            // 2
	c            // 4
)
```

To display the numbered type, you could associate a string, but that would not be efficient. Therefore, Go's _[code generation](https://blog.golang.org/generate)_ concept is used.

## `defer`, `panic` and `recover`

The keyword `defer` is used when you want to execute a function immediately after exiting the current scope. It is common to use it for debugging, freeing mutex, etc.:

```go
func printStuff() (value string) {
	defer fmt.Println("exiting")
	defer func() {
		value = "we returned this"
	}()
	fmt.Println("I am printing stuff")
	return ""
}

func main() {
	v := printStuff()
	fmt.Println(v)
}
```

The output will be:

```
I am printing stuff
exiting
we returned this
```

The `panic` keyword is used to immediately terminate the program execution. It must be used only within the `main()` function.

The keyword `recover` is rarely used, it is needed to recover the program from a `panic`:

```go
func someFunc() {
	defer func() {
		if r := recover(); r != nil {
			log.Printf("called recover, panic was: %q", r)
		}
	}()
	panic("oh no!!!")
}
```

## Goroutines

Go has implemented a _runtime scheduler_ that maps all goroutines to operating system threads and decides when to switch routines to optimize execution.

Given a function `func()`, you can run it concurrently by adding the keyword `go` before the function name.

### Synchronization

When dealing with concurrent functions, it is important to note that a variable can be read by many at the same time, but written by only one. Go has a [_race detector_](https://golang.org/doc/articles/race_detector) to detect when a variable is read and written simultaneously.

The most commonly used methods for synchronization in Go are:

- The `channel` type: to exchange data between goroutines;
- `Mutex` and `RwMutex`: from the `sync` package, to lock a variable so that only one goroutine can access it at a time;
- `WaitGroup`: from the `sync` package, to wait for a group of goroutines to finish before continuing.

#### `WaitGroup`

A `WaitGroup` is a counter that only has positive values indicating the number of tasks that have not yet been completed. The methods are:

- `.Add(int)`: to add a number of tasks to the counter;
- `.Done()`: to decrement the counter by one;
- `.Wait()`: to wait for the counter to reach zero.

An example of usage is:

```go
func main() {
	wg := sync.WaitGroup()
	for i := 0; i < 10; i++ {
		wg.Add(1)
		go func(n int) {
			defer wg.Done()
			fmt.Println(n)
		}(i)
	}
	wg.Wait()
	fmt.Println("All work done")
}
```

It is important that the counter is not incremented with `.Add(int)` within the concurrent function. If the counter is passed to a function, remember that a reference must be passed, otherwise the function will operate on a copy of the counter.

#### Channels

WIP

#### Mutex
