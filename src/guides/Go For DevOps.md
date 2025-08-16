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

- If the package is from the [standard library](https://golang.org/pkg/), it can be imported with its name. E.g. `"fmt"`, `"encoding/json"`, etc;
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

WIP

### Array

### Slice

## Maps

## Pointers

## Struct

## Interfaces

## Type assertion
