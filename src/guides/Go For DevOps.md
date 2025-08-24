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

A channel enables communication between two goroutines: one goroutine inserts data while another goroutine extracts it. The channel can be:

- _Buffered_: if it can hold a certain amount of data before blocking the goroutine that produces it;
- _Unbuffered_: if the two goroutines need to have a _rendezvous_ to communicate the data.

Channels are created with the `make()` function:

```go
ch := make(chan string, 1) // Buffered with one element
ch := make(chan string) // Unbuffered
```

Data is sent and received from a channel using the `<-` operator:

```go
ch <- variable // Send data to the channel
variable := <-ch // Receive data from the channel
```

Data can be extracted from a channel in a `for` loop:

```go
for val := range ch {
	fmt.Println(val)
}
```

A channel, when no longer needed, must be closed with the `close(ch)` function. This operation must be done from the writer side.

To listen from more than one channel, you can use the `select` statement:

```go
select {
case s := <-inCh1:
	go fmt.Println("received(inCh1): ", v)
case s := <-inCh2:
	go fmt.Println("received(inCh2): ", v)
default:
	fmt.Println("No data in channels")
}
```

The most common use of channels is to send signals to goroutines.

#### Mutex

It is a primitive used to block access to a resource to only one goroutine. If you try to gain access when the mutex is already locked, the goroutine will be blocked until the mutex is released.

The functions of a `sync.Mutex` are:

- `.Lock()`: to lock the mutex;
- `.Unlock()`: to unlock the mutex.

The `sync.RWMutex` allows you to provide a read lock and a write lock. The functions are:

- `.RLock()`: to lock the mutex for reading;
- `.Lock()`: to lock the mutex for writing. This function will wait until all read locks are released;
- `.RUnlock()` and `.Unlock()`: to unlock the mutex;

Generally `sync.Mutex` is faster.

## `Context` type

It's a package that is used when:

- You want to cancel a set of functions after a certain event occurs;
- You want to pass information through a series of function calls.

The `Context` object is created either in `main()` or when an RPC or HTTP request needs to be executed. It is created with:

```go
import "context"

func main() {
    ctx := context.Background() // Create a new context
}
```

### Timeout signal

The `contect` object is often used to send a timeout signal to a goroutine. Given a function `GatherData()` that is to be terminated after 5 seconds have passed, write:

```go
ctx, cancel := context.WithTimeout(context.Background(), 5 * time.Second)
data, err := GatherData(ctx, args)
cancel()
if err != null {
	return err
}
```

The code:

1. With `context.WithTimeout()` creates a new context that will be canceled after 5 seconds;
2. Calls the `GatherData()` function, passing the context as an argument;
3. If the context still exists after the function has finished, because it took less than 5 seconds, then `cancel()` deletes the context.

Each context must derive from another context; in the example, it derives from `context.Background()`. Deleting a context, either directly or automatically after a period of time, results in the deletion of all children of that context.

The `GatherData()` function must honor the context. The implementation of the function could be:

```go
func GatherData(ctx context.Context, args Args) ([]file, error) {
	if ctx.Err() != nil {
		return nil, err
	}
	localCtx, localCancel := context.WithTimeout(ctx, 2 * time.Second)
	local, err := getFilesLocl(localCtx, args.local)
	localCancel()
	if err != nil {
		return nil, err
	}

	remoteCtx, remoteCancel := context.WithTimeout(ctx, 3 * time.Second)
	remote, err := getFilesRemote(remoteCtx, args.remote)
	remoteCancel()
	if err != nil {
		return nil, err
	}
	return append(local, remote), nil
}
```

`Context` also supports a `.Done()` method to check whether a deletion has been requested within a `select`:

```go
select {
case <-ctx.Done():
	return ctx.Err()
case data := <-ch:
	return data, nil
}
```

### Pass values

The best uses for `Context` to pass data are:

- Security information about the user making the call: in this case, the system is informed about who the user is, probably with an OpenID Connect (OIDC);
- Telemetry information: allows the service to record information related to execution times, database latency, etc.

The values passed to `Context` are in key/value form:

```go
type key int
const claimsKey key = 0
func NewContext(ctx context.Context, claims Claims) context.Context {
	return context.WithValue(ctx, claimsKey, claims)
}

func ClaimsFromContext(ctx context.Context) (Claims, bool) {
	claims, ok := ctx.Value(userIPKey).(Claims)
	return claims, ok
}
```

The code:

- Defines a private type `key`;
- Defines the constant `claimsKey` of type `key`;
- `NewContext()` attaches a `Claim` to the `Context`;
- `ClaimsFromContext()` provides a function that extracts `Claims` from the `Context` (if present, otherwise it returns `nil`).

## Testing

In Go, test files are contained in a file with the suffix `_test.go`. These files have the same package, and usually, for each `.go` file, the respective `_test.go` is written.

Each function within these files begins with the prefix `Test` and has a single argument `t *testing.T`:

```go
func TestFuncName(t *testing.T) {
}
```

The value `t` is passed by the `go test` command and provides methods for running tests, including:

- `t.Error()`
- `t.Errorf()`
- `t.Fatalf()`
- `t.Log()`
- `t.Logf()`

Tests are considered passed if they do not end with a `panic`/`Error`/`Errorf`/`Fatal`/`Fatalf`. If an `Error`/`Errorf` is called, the tests continue even if one or more have failed. With `Fatal`/`Fatalf`, however, the tests end immediately. `Log`/`Logf` are used to display information.

An example of a test file is:

```go
package greetings

import "testing"

func TestGreet(t *testing.Testing) {
	name := "Bob"
	want := "Hello Bob"
	got, err := Greet(name)
	if got != want || err != nil {
		f.Fatalf("TestGreet(%s: got %q/%v, want %q/nil", name, got, err, want))
	}
}
```

### _Table Driven Tests_ (TDT)

This is a practice where you test not only whether the function works correctly, but also the various types of failures it may encounter. The previous test becomes:

```go
func TestGree(t *testing.T) {
	tests := []struct{
		desc string
		name string
		want string
		expectErr bool
	} {
		{
			desc: "Error: name is an empty string",
			expectErr: true
		},
		{
			desc: "Success"
			name: "John"
			want: "Hello John"
		},
	}
	for _, test := range tests {
		got, err := Greet(test.name)
		switch {
		case err == nil && test.expectErr:
			t.Errorf("TestGreet(%s): got err == nil, want err != nil", test.desc)
			continue
		case err != nil && !test.expectErr:
			t.Errorf("TestGreet(%s): got err == %s, want err == nil", test.desc, err)
			continue
		case err != nil:
			continue
		}
		if got != test.want {
			t.Errorf("TestGreet(%s): got result %q, want %q", test.desc, got, test.want)
		}
	}
}
```

To test the components of a REST application, you do not contact the service directly but use _fakes_ with interfaces.

Assuming that the client executes:

```go
type Fetch struct {
	// Internals
}

func (f *Fetch) Record(name string) (Record, error) {
	// Code to interact with the server
}
```

The test with fakes is performed as follows. Modify the `Greeter` code with:

```go
type recorder interface {
	Record(name string) (Record, error)
}

func Greeter(name string, fetch recorder) (string, error) {}
```

And then the fakes are added:

```go
type fakeRecorder struct {
	data Record
	err bool
}
func (f fakeRecorder) Record(name string) (Record, error) {
	if f.err {
		return "", errors.New("error")
	}
	return f.data, nil
}
```

The testing function becomes:

```go

func TestGreeter(t *testing.T) {
	tests := []struct {
		desc      string
		name      string
		recorder  recorder
		want      string
		expectErr bool
	}{
		{
			desc:      "Error: recorder had some server error",
			name:      "John",
			recorder:  fakeRecorder{err: true},
			expectErr: true,
		},
		{
			desc: "Error: server returned wrong name",
			name: "John",
			recorder: fakeRecorder{
				rec: Record{Name: "Bob", Age: 20},
			},
			expectErr: true,
		},
		{
			desc: "Success",
			name: "John",
			recorder: fakeRecorder{
				rec: Record{Name: "John", Age: 20},
			},
			want: "Greetings John",
		},
	}

	for _, test := range tests {
		got, err := Greeter(test.name, test.recorder)
		switch {
		case err == nil && test.expectErr:
			t.Errorf("TestGreet(%s): got err == nil, want err != nil", test.desc)
			continue
		case err != nil && !test.expectErr:
			t.Errorf("TestGreet(%s): got err == %s, want err == nil", test.desc, err)
			continue
		case err != nil:
			continue
		}
		if got != test.want {
			t.Errorf("TestGreet(%s): got result %q, want %q", test.desc, got, test.want)
		}
	}
}
```

In this way, `Greeter` takes a `recorder` interface as an argument:

- When we call `Greeter` in the program, we will pass the actual client;
- When we call `Greeter` in the tests, we simulate the client with `fakeRecorder`.

### Packages for testing

A very useful package for testing is [`pretty`](https://pkg.go.dev/github.com/kylelemons/godebug/pretty):

```go
if diff := pretty.Compare(want, got); diff != "" {
	t.Errorf("TestSomeFunc(%s): -want/+got:\n%s", diff)
}
```

Another set of packages is provided by [`testify`](https://github.com/stretchr/testify), which includes the `assert` and `mock` packages.

## Generics

They were introduced with Go 1.18 and allow multiple types to be represented with a `type` _parameter_.

Type parameters are added in square brackets after the function name:

```go
func sortInts[I int8 |int16 |int32 |int64](slice []I) { }
```

This function accepts a slice as a parameter, which can be given by `int8`, `int16`, `int32`, or `int64`.

To reduce the amount of code to be written, it can also be implemented as:

```go
type SignedInt interface {
	int8 |int16 |int32 |int64
}
func sortInts[I SignedInt](slice []I) { }
```

It is not possible to implement functions with types created by us. In order to say that our function also accepts types based on integers, we must use `~`:

```go
type SignedInt interface {
	~int8 |~int16 |~int32 |~int64
}
```

### Constraints

Note that our `sortInts` function requires that the `>` operator works between the two generics. We could therefore use the [_constraints_](https://pkg.go.dev/golang.org/x/exp/constraints) package. The constraint on the sorted values is defined as:

```go
type Ordered interface {
	~int | ~int8 | ~int16 | ~int32 | ~int64 |
	~uint | ~uint8 | ~uint16 | ~uint32 | ~uint64 |
	~uintptr |
	~float32 | ~float64 |
	~string
}
```

And it would be used as:

```go
func sortSlice[O constraints.Ordered](slice []O) {
```

The constraints that are built into Go are:

- `comparable`: which contains all types that support the operators `==` or `!=`;
- `any`: which is an alias for `interface{}` and can contain any type.

It should be noted that constraints can behave like an interface that requires values as well as methods. For example:

```go
type StringPrinter interface {
	~string // ~ is used because string would not have the Print method
	Print()
}
```

To use Go's `sort.Sort()` function, the user-defined type must implement the `sort.Interface` interface. Whereas previously it was necessary to manually implement the interface methods (`Len()`, `Less()`, and `Swap()`) for each type, now with generics you can write:

```go
type sortableSlice[T any] struct {
	slice []T
	less func(T, T) bool // function that implements the operator<
}

func (s sortableSlice[T]) Len() int {
	return len(s.slice)
}

func (s sortableSlice[T]) Swap(i, j int) {
	s.slice[i], s.slice[j] = s.slice[j], s.slice[i]
}

func (s sortableSlice[T]) Less(i, j int) bool {
	return s.less(s.slice[i], s.slice[j])
}
```

# Set up the environment

## Creating the working directory

Once the working directory has been created, run the command:

```bash
go mod init example.com/hello
```

A `go.mod` file will be created:

```go
module example.com/hello
go 1.17
```

Where:

- The first line is the name of the module;
- The second line is the minimum version of Go required to run the module.

When adding dependencies to our project that are not present in the standard library, we must also add them to the `go.mod` file. To do this, we use the command:

```bash
go mod tidy
```

Write the file `hello.go`:

```go
package main

import "fmt"

func main() {
	fmt.Println("Hello world")
}
```

You execute the program with:

```bash
go run hello.go
```

You compile the program, and then execute, with:

```bash
go build hello.go
./hello
```

# Filesystem interactions

Go provides a file-based I/O system. The package that provides the primitives for working with files, disks, and the internet is the `io` package.

The data flow is managed with a stream of bytes. The interfaces for basic operations are:

```go
type Reader interface { // Read from an I/O stream
	Read(p []byte) (n int, err error)
}
type Writer interface { // Write from an I/O stream
	Write(p []byte) (n int , err error)
}
type Seeker interface { // Position in the I/O stream
	Seek(offset int64, whence int) (int64, error)
}
type Closer interface { // Close the I/O stream
	Close() error
}
```

## Read and write files

Read the contents of the file with:

```go
data, err := os.ReadFile("path/to/file")
```

Internally the `ReadFile()` function:

1. Read the position of the files and verify that it has access to it;
2. An internal call to `os.Open()` is made to open the file, and an `io.Reader` is returned;
3. A call to the function `io.ReadAll()` is made to reade all data from the file.

The type of `data` is `[]byte`, to convert it to a string simply use `string(data)`.

Writing is performed using the `os.WriteFile()` function:

```go
if err := os.WriteFile("path/to/file", data, 0644); err != nil {
	return err
}
```

The type of `data` must be `[]byte`, so if `data` is a string, you must first write `[]byte(data)`.

### Remote files

If a file is saved in an HTTP server the code is:

```go
client := &http.Client{} // Client creation
// Generation of the request
req, err := http.NewRequest("GET", "http://myserver.mydomain/myfile", nil)
if err != nil {
	return err
}
req = req.WithContext(ctx) // A context is associated

resp, err := client.Do(req) // The request is sent
cancel()
if err != nil {
	return err
}
data, err := io.ReadAll(resp.Body) // The content of the file is in resp.Body
```

To save the content with `os.OpenFile()` the code is:

```go
flags := os.O_CREATE|os.O_WRONLY|os.O_TRUNC
f, err := os.OpenFile("path/to/file", flags, 0644)
if err != nil {
	return err
}
defer f.Close()

if err := io.Copy(f, resp.Body); err != nil {
	return err
}
```

If you want to set [flags](https://pkg.go.dev/os#pkg-constants) other than those used by `WriteFile`, you must do so. The flags used specify:

- `O_CREATE`: if the file does not exist, it will be created;
- `O_WRONLY`: in order to write to the file;
- `O_TRUNC`: if the file exists, it is truncated instead of appending the content that is about to be written.

## Streaming the file content

When dealing with very large files, it is preferable to read them in chunks rather than loading them all into memory.

To read a stream of user records, saved in the format `<user>:<id>`, the code is:

```go
type User struct {
	Name string
	ID int
}

func getUser(s string) (User, error) {
	sp := strings.Split(s, ":") // Split the string
	if len(sp) != 2 { // Assert that there are two elements (name and ID)
		return User{}, fmt.Errorf("record(%s) was not in the correct format", s)
	}
	id, err := strconv.Atoi(sp[i]) // Convert the ID to an integer
	if err != nil {
		return User{}, fmt.Errorf("record(%s) had non-numeric ID", s)
	}
	return User{Name: strings.TrimSpace(sp[0]), ID: id}, nil // Return an User object
}

func decodeUsers(ctx context.Context, r io.Reader) chan User {
	ch := make(chan User, 1)
	go func() {
		defer close(ch) // Close the channel when done
		scanner := bufio.NewScanner(r) // Create a scanner to read the stream
		for scanner.Scan() { // If there is a line to read, read it
			if cts.Err() != nil { // Error check
				ch <- User{err: ctx.Err()}
				return
			}
			// Get an User object by passing scanner.Text() to getUser()
			u, err := getUser(scanner.Text())
			if err != nil {
				u.err = err
				ch <- u
				return
			}
			ch <- u // Send the User object to the channel
		}
	}()
	return ch
}
```

Writing to a stream is simpler:

```go
func writeUser(ctx context.Context, w io.Writer, u User) error {
	if ctx.Err() != nil {
		return ctx.Err()
	}
	if _, err := w.Write([]byte(user.String())); err != nil {
		return err
	}
	return nil
}
```

## File path

Since Go must be executable on multiple operating systems, and since each operating system has its own way of marking file paths, a single method must be used to determine the location of the file.

You can obtain the current working directory with:

```go
wd, err := os.Getwd()
```

You can add elements to the path with the `Join()` function from the `path/filepath` package:

```go
newPath := filepath.Join(wd, "directory", "file.txt")
```

Other functions in the `path/filepath` package are:

- `Base()`: to return the last element of the path;
- `Ext()`: to return the file extension, if any;
- `Split()`: to separate the directory from the file;
- `Abs()`: returns the absolute path. If it is not an absolute path, it returns the working directory;
- `Rel()`: returns the path relative to a base.

## OS-independent access to the file system

Starting with Go 1.16, the `io/fs` and `embed` packages are available.

### `io.fs`

Through the `FS` interface implemented by the filesystem:

```go
type FS interface {
	Open(name string) (File, error)
}
```

It is possible to access a file:

```go
type File interface {
	Stat() (FileInfo, error)
	Read([]byte) (int, error)
	Close() error
}
```

It is not possible to write to the file, only to read it.

### `embed`

This package allows you to integrate files directly into the binary. There are three ways to include files:

- As bytes;
- As a string;
- As `embed.FS` (that implements the `FS` interface).

The first two methods are implemented as follows:

```go
import _ "embed"

//go:embed hello.txt
var s string
//go:embed world.txt
var b []byte
```

The line `//go:embed hello.txt` is a Go directive telling the compiler to take the file named `hello.txt` and put it into the variable `s`.

The `embed.FS` method is used when you want to include multiple files in the binary:

```go
//go:embed image/*
//go:embed index.html
var content embed.FS
```

To print all `*.jpg` files in the `image` directory, you can write:

```go
err := fs.WalkDire(
	content,
	".",
	func(path string, d fs.DirEntry, err error) error {
		if err != nil {
			return err
		}
		if !d.IsDir() && filepath.Ext(path) == ".jpg" {
			fmt.Println("jpeg file: ", path)
		}
	}
)
```

# Common data formats

## CSV

CSV stands for _Comma Separated Values_ and is one of the most common file formats for saving data. Data in a CSV file can be accessed using the `strings` or `bytes` package or the `encoding/csv` package.

### `strings`

The most important features of this package are:

- `Split()`: to separate data by specifying a separator;
- `Join()`: to join data;
- `bytes.Buffer` and `strings.Builder`: to implement the interfaces of the `io` package.

Working with strings is convenient, but sometimes converting from `[]bytes` to `string` can be slow. In this case, it is better to use the `bytes` and `bufio` packages.

If the file is small, conversion from `.csv` to `[]record` can be done with:

```go
type record []string
func (r record) validate() error {
	if len(r) != 2 {
		return errors.New("data format is incorrect")
	}
	return nil
}
func (r record) first() string {
	return r[0]
}
func (r record) last() string {
	return r[1]
}

func readRecs() ([]record, error) {
	b, err := os.ReadFile("data.csv")
	if err != nil {
		return nil, err
	}
	content := string(b)
	lines := strings.Split(content, "\n")
	var records []record
	for i, line := range lines {
		if strings.Trimspace(line) == "" {
			continue
		}
		var rec record = strings.Split(line, ",")
		if err := rec.validate(); err != nil {
			return nil, fmt.Errorf("entry at line %d was invalid: %w", i, err)
		}
		records = append(records, rec)
	}
	return records, nil
}
```

If, on the other hand, the file is large, it is better to convert it line by line:

```go
func readRecs() ([]record, error) {
	file, err := os.Open("data.csv")
	if err != nil {
		return nul, err
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	var records []record
	lineNum := 0
	for scanner.Scan() {
		line := scanner.Text()
		if strings.TrimSpace(line) == "" {
			continue
		}
		var rec record = strings.Split(line, ",")
		if err := rec.validate(); err != nil {
			return nul, fmt.Errorf("entry at line %d was invalid: %w", lineNum, err)
		}
		records = append(records, rec)
		lineNum++
	}
	return records, nil
}
```

Writing is done with:

```go
func writeRecs(recs []record) error {
	file, err := os.OpenFile("data-sorted.csv", os.O_CREATE|os.O_TRUNC|os.OWRONLY, 0644)
	if err != nil {
		return err
	}

	defer file.Close()

	sort.Slice(
		recs,
		func(i, j int) bool {
			return recs[i].last() < recs[j].last()
		},
	)

	for _, rec := range recs {
		_, err := file.Write(rec.csv())
		if err != nil {
			return err
		}
	}
	return nil
}
```

### `encoding/csv`

It is preferable to use this package when the file complies with the RFC 4180 standard.

#### Reading

Reading is performed using the `Reader` type provided by the package:

```go
func readRecs() ([]record, error) {
	file, err := os.Open("data.csv")
	if err != nil {
		return nil, err
	}
	defer file.Close()

	reader := csv.NewReader(file) // Pass the file to the constructor
	reader.FieldPerRecord = 2 // Every record must have two fields
	reader.TrimLeadingSpace = true // Remove leading spaces

	var recs []record
	for {
		data, err := reader.Read()
		if err != nil {
			if err == io.EOF { // End Of File
				break
			}
			return nil, err
		}
		rec := record(data)
		recs := append(recs, rec)
	}
	return recs, nil
}
```

#### Writing

Writing is performed using the `Writer` type provided by the package:

```go
w := csv.NewWriter(file) // Pass the file to the constructor
defer w.Flush() // Flush the buffer to the file at the end

for _, rec := range recs {
	if err := w.Write(rec); err != nil { // Write the record
		return err
	}
}
return nil
```

## Excel `excelize`

Microsoft Excel is the best available database. To create and add data to an Excel spreadsheet with `excelise`, the code is:

```go
func main() {
	const sheet = "Sheet1"
	xlsx := excelise.NewFile() // Create a new Excel file

	// First row
	xlsx.SetCellValue(sheet, "A1", "Server Name")
	xlsx.SetCellValue(sheet, "B1", "Generation")
	xlsx.SetCellValue(sheet, "C1", "Acquisition Date")
	xlsx.SetCellValue(sheet, "D1", "CPU Vendor")

	// Second row
	xlsx.SetCellValue(sheet, "A2", "svlaa01")
	xlsx.SetCellValue(sheet, "B2", 12)
	xlsx.SetCellValue(sheet, "C2", mustParse("10/27/2021"))
	xlsx.SetCellValue(sheet, "D2", "Intel")

	// Third row
	xlsx.SetCellValue(sheet, "A3", "svlac14")
	xlsx.SetCellValue(sheet, "B3", 13)
	xlsx.SetCellValue(sheet, "C3", mustParse("12/13/2021"))
	xlsx.SetCellValue(sheet, "D3", "AMD")

	if err := xlsx.SaveAs("./Book1.xlsx"); err != nil {
		panic(err)
	}
}
```

## Encoding formats

The most common are **JSON** (_JavaScript Object Notation_) and **YAML** (_Yet another Markup Language_).

Go implements a feature called _tags_. You can add a tag, a string, to a field of a struct so that Go can inspect the extra metadata of the field before performing an operation. Tags are key/value pairs:

```go
type Record struct {
	Last string `json:"last name"`
}
```

In the example, there is a tag with the key `json` and the value `last_name`. You can use the `reflect` package to read these tags.

Tags are widely used to allow packages to change their behavior based on the tag. In the example, the JSON encoder will use last_name instead of Last when writing the JSON.

### JSON

The `encoding/json` package is used. Since JSON is schema-less, Go allows JSON to be decoded into `[string]interface{}`:

```go
b, err := os.ReadFile("data.json") // Read data from file
if err != nil {
	return "", err
}

data := map[string]interface{}{} // Map to hold the JSON
if err := json.Unmarshal(b, &data); err != nil { // Unmarshal the JSON
	return "", err
}

v, ok := data["user"] // Search for key `user`
if !ok {
	return "", errors.New("json does not contain key `user`")
}
switch user := v.(type) {
case string:
	return user, nil // Return the associated value if string
}
return "", fmt.Errorf("key `user` is not a string, was %T", v)
```

The opposite operation is performed with:

```go
if err := json.Marshal(data), err != nil {
	return err
}
```

Mapping a `struct` to JSON data is done with:

```go
type Record struct {
	Name string `json:"user_name"` // Name is saved as user_name
	User string `json:"user"` // User is saved as user
	ID int
	Age int `json:"-"` // Age is not saved
}

func main() {
	rec := Record{
		Name: "John Doe",
		User: "jdoe",
		ID: 23,
	}

	b, err := json.Marshal(rec)
	if err != nil {
		panic(err)
	}
	fmt.Printf("%s\n", b)
}
```

The opposite operation is performed with:

```go
rec := Record{}

if err := rec.Unmarshal(b, &rec); err != nil {
	return err
}
```

When dealing with a series of JSON messages, management is done with `json.Decoder`:

```go
const jsonStream = `
	{"Name": "Ed", "Text": "Knock knock."}
	{"Name": "Sam", "Text": "Who's there?"}
`

type Message struct {
	Name, Text string
}

reader := strings.NewReader(jsonStream) // Build a reader for the stream
dec := json.NewDecoder(reader) // Pass the reader to the decoder
msgs := make(chan Message, 1)
errs := make(chan error, 1)

go func() {
	defer close(msgs)
	defer close(errs)
	for {
		var m Message
		if err := dec.Decode(&m); err == io.EOF { // Decode a message
			break // Termina quando EOF // Exit when EOF
		} else if err != nil {
			errs <- err // Propagate the error trough the channel
			return
		}
		msgs <- m // Send the message to the channel
	}
}()
// Print the messages
for m := range msgs {
	fmt.Printf("%+v\n", m)
}
// Print any error
if err := <- errs; err != nil {
	fmt.Println("stream error: ", err)
}
```

Internally, `json.Decoder()` calls `json.Unmarshal()`, which is a less efficient method. When you want structs directly, `json.Unmarshal()` is preferable.

If the messages are enclosed in square brackets `[]`, and commas are used as separators, you can use the `dec.Token()` function to remove them:

```go
const jsonStream = `[
	{"Name": "Ed", "Text": "Knock knock."},
	{"Name": "Sam", "Text": "Who's there?"}
]`

dec := json.Decoder(reader)

_, err := dec.Token() // Read [
if err != nil {
	return fmt.Errorf(`outer [ is missing`)
}

for dec.More() {
	var m Message
	err := dec.Decode(&m) // Decode and save in m
	if err != nil {
		return err
	}
	fmt.Printf("%+v\n", m)
}

_, err := dec.Token() // Read ]
if err != nil {
	return fmt.Errorf(`final ] is missing`)
}
```

Writing, on the other hand, is done by writing messages to a `Writer`:

```go
func encodeMessage(in chan Message, output io.Writer) chan error {
	errs := make(chan error, 1)
	go func() {
		defer close(errs)
		enc := json.NewEncoder(output) // Bind the encoder to the output writer
		for msg := range in { // Read messages from the channel
			if err := enc.Encode(msg); err != nil { // Encode the message
				errs <- err
				return
			}
		}
	}()
	return errs
}
```

Other third-party libraries for managing JSON are:

- [gojay](https://github.com/francoispqt/gojay)
- [go-json](https://github.com/goccy/go-json)
- [json-iterator](https://pkg.go.dev/github.com/json-iterator/go)
- [fastjson](https://pkg.go.dev/github.com/valyala/fastjson)

### YAML

Go does not natively support YAML, but there are libraries such as [`go-yaml`](https://github.com/go-yaml/yaml).

As with `json`, `go-yaml` also has `Marshal` and `Unmarshal` functions:

```go
data := map[string]interface{}{}

if err := yaml.Unmarshal(yamlContent, &data); err != nil { // Unmarshal the YAML to a map
	return "", err
}

v, ok := data["user"]
if !ok {
	return "", errors.New("`user` key not found")
}
```

```go
if err := yaml.Marshal(data); err != nil { // Marshal the map to YAML. This discards the result
	return err
}
```

The serialization and deserialization of a `struct` is done with:

```go
type Config struct {
	Jobs []Job
}

type Job struct {
	Name string
	Interval time.Duration
	Cmd string
}

func main() {
	c := Config {
		Jobs: []Job{
			{
				Name: "Clear tmp",
				Interval: 24 * time.Hour,
				Cmd: "rm -rf " + os.TempDir(),
			},
		},
	}

	b, err := yaml.Marshal(c)
	if err != nil {
		panic(err)
	}
	fmt.Printf("%s\n", b)
}
```

```go
data := []byte(`
jobs:
  - name: Clear tmp
	interval: 24h0m0s
	whatever: is not in the Job type
	cmd: rm -rf /tmp
`)

c := Config{}
// The field `whatever` is ignored because it is not in the Job type
if err := yaml.Unmarshal(data, &c); err != nil {
	panic(err)
}
for _, job := range c.Jobs {
	fmt.Println("Name: ", job.Name)
	fmt.Println("Interval: ", job.Interval)
}
```

To cause the function to fail, since the field `whatever` does not belong to `Job`, you can use `UnmarshalStrict()`.

# Interact with remote data structures

We will analyze how to interact with _Structured Query Language_ (**SQL**), _REpresentational State Transfer_ (**REST**), and _Google Remote Procedure Call_ (**gRPC**).

## Database SQL

The package for interacting with SQL databases is in the standard library and is called `database/sql`. This package provides an interface and is therefore another package, called a _driver_, that allows the user to work with multiple databases. The SQL database that will be used is [Postgres](https://www.postgresql.org/).

### Connection

As mentioned earlier, you must use a driver to access Postgres: `github.com/jackc/pgx`.

The connection to the standard library is made with an anonymous import of `_ “github.com/jackc/pgx/v4/stdlib”`:

```go
dbURL := "postgres://username:password@localhost:5432/database_name"
conn, err := sql.Open("pgx", dbURL) // Initialize the connection
if err != nil {
	return fmt.Errorf("connect to db error: %s\n", err)
}
defer conn.Close()

ctx, cancel := context.WithTimeout( // Generate a context with timeout
	context.Background(),
	2 * time.Second()
)

if err := conn.PingContext(ctx); err != nil { // Ping the server
	return err
}
cancel()
```

To use the types provided by the `pgx` package, you need to import `“github.com/jackc/pgx/v4/pgxpool”`:

```go
conn, err := pgxpool.Connect(ctx, dbURL) // More efficient connection
if err != nil {
	return fmt.Errorf("connect to db error: %s\n", err)
}
defer conn.Close(ctx)
```

### Query

With the standard library, the code is:

```go
type UserRec struct { // Data saved in the database
	User string
	DisplayName string
	ID int
}

func GetUser(ctx context.Context, conn *sql.DB, id int) (UserRec, error) {
	const query = `SELECT "User", "DisplayName" FROM users WHERE "ID" = $1`
	u := UserRec{ID: id}
	err := conn.QueryRowContext(ctx, query, id).Scan(&u)
	return u, err
}
```

You can improve efficiency by creating an object that contains the database and the instruction to be executed:

```go
type Storage struct {
	conn *sql.DB // Connection to the database
	getUserStmt *sql.Stmt // Prepared statement
	// Every prepared statement will have its own *sql.Stmt field
	// usersBetweenStmt *sql.Stmt
}

func NewStorage(ctx context.Context, conn *sql.DB) *Storage {
	return &Storage{
		getUserStmt: conn.PrepareContext( // Prepare the statement
			ctx,
			`SELECT "User","DisplayName" FROM users WHERE "ID"=$1`,
			// `SELECT "User","DisplayName" FROM users WHERE "ID" >= $1 AND "ID" <= $2`
		)
	}
}

func (s *Storage) GetUser(ctx context.Context, id int) (UserRec, error) {
	u := UserRec{ID: id}
	err := s.getUserStmt.QueryRow(id).Scan(&u) // Use the prepared statement
	return u, err
}
```

Note that this feature does not depend on the driver used, so it can also be used with other types of servers.

If, on the other hand, you want to use the methods provided by `pgx`, the code becomes:

```go
err = conn.QueryRow(ctx, query).Scan(&u)
return u, err
```

If the query returns more than one result, for example: `SELECT * FROM users`, to see all the results you must use:

```go
func (s *Storage) UsersBetween(ctx context.Context, start, end int) ([]UserRec, error) {
	recs := []UserRec{}
	rows, err := s.usersBetweenStmt.QueryContext(ctx, start, end)
	defer rows.Close()

	for rows.Next() {
		rec := UserRec{}
		if err := rows.Scan(&rec); err != nil {
			return nil, err
		}
		recs = append(recs, rec)
	}
	return recs, nil
}
```

Since SQL allows columns to take on a null value, while Go initializes everything to zero, the `database/sql` package provides:

- `sql.NullBool`;
- `sql.NullByte`;
- `sql.NullFloat64`;
- `sql.NullInt16`;
- `sql.NullInt32`;
- `sql.NullInt64`;
- `sql.NullString`;
- `sql.NullTime`.

For example, if you save the result of a query in a string and this string can take on a null value, then it is better for the variable to be an `sql.NullString`.

### Write

The operations that can be performed are:

- Update an existing entry;
- Add a new entry.

There is no command “update the entry if it exists, otherwise insert it.”

The function to call to perform an update or insertion is always `ExecContext()`, and only the SQL syntax changes:

```go
func (s *Storage) AddUser(ctx context.Context, u UserRec) error {
	_, err := s.addUserStmt.ExecContext(
		ctx,
		u.User,
		u.DisplayName,
		u.ID,
	)
	return err
}

func (s *Storage) UpdateDisplayName(ctx context.Context, id int, name string) error {
	_, err := s.updateDisplayName.ExecContext(
		ctx,
		u.User,
		name,
		id,
	)
	return err
}
```

If, on the other hand, you want to use the functions provided by the Postgres package, the implementation is different, as you cannot prepare the instructions to be executed:

```go
func (s *Storage) AddUser(ctx context.Context, u UserRec) error {
	const stmt = `INSERT INTO users (User, DisplayName, ID) VALUES ($1, $2, $3)`
	_, err := s.conn.Exec(
		ctx,
		stmt,
		u.User,
		u.DisplayName,
		u.ID,
	)
	return err
}
```

### Transactions

They are sequences of SQL operations that are executed atomically. A transaction is executed with:

```go
func (s *Storage) AddOrUpdateUser(ctx context.Context, u UserRec) (err error) {
	const (
		getStmt = `SELECT "ID" FROM users WHERE "User" = $1`
		insertStmt = `INSERT INTO users (User,DisplayName,ID) VALUES ($1, $2, $3)`
		updateStmt = `UPDATE "users" SET "User" = $1, "DisplayName" = $2 WHERE "ID" = 3`
	)

	// Begin the transaction
	tx, err := s.conn.BeginTx(ctx, &sql.TxOptions{Isolation: sql.LevelSerializable})
	if err != nil {
		return err
	}
	defer func() { // Defer is used to commit or rollback the transaction
		if err != nil { // If there was an error
			tx.Rollback() // Rollback
			return
		}
		err := tx.Commit() // Otherwise commit
	}()

	_, err := tx.QueryRowContext(ctx, getStmt, u.User) // Search for the user by name
	if err != nil {
		if err == sql.ErrNoRows { // If no rows were returned
			// Insert a new row with user, displayName, and ID
			_, err = tx.ExecContext(ctx, insertStmt, u.User, u.DisplayName, u.ID)
			if err != nil {
				return err
			}
		}
		return err
	}

	// If the user already exists, update it
	_, err := tx.ExecContext(ctx, updateStmt, u.User, u.DisplayName, u.ID)
	return err
}
```

A `defer` is a very effective way to handle the `Commit()` or `Rollback()` of the transition.

The isolation level is used to improve database performance and reliability. More resources on isolation levels [here](<https://en.wikipedia.org/wiki/Isolation_(database_systems)#Isolation_levels>).

### Postgres' types

Take a Postgres database with two columns:

- An `ID` of type `int`;
- A `Data` column of type `jsonb`.

`jsonb` is not available in the standard `sql` library, so you will need to use the specific Postgres driver:

```go
func (s *Storage) AddOrUpdateUser(ctx context.Context, u UserRec) (err error) {
	const (
		getStmt = `SELECT "ID" FROM "users" WHERE "ID" = $1`
		updateStmt = `UPDATE "users" SET "Data" = $1 WHERE "ID" = $2`
		addStmt = `INSERT INTO "users" (ID,Data) VALUES ($1, $2)`
	)
	tx, err := conn.BeginTx(
		ctx,
		pgx.TxOptions{
			IsoLevel: pgx.Serializable,
			AccessMode: pgx.ReadWrite,
			DeferableMode: pgx.NotDeferrable
		},
	)
	defer func() {
		if err != nil {
			tx.Rollback()
			return
		}
		err = tx.Commit()
	}()

	// Check if the user with u.ID exists
	_, err := tx.QueryRow(ctx, getUserStmt, u.ID)
	if err != nil {
		if err != sql.ErrNoRows { // If there are no rows
			// Insert the new user
			_, err := tx.ExecContext(ctx, insertStmt, u.Id, u)
			if err != nil {
				return err
			}
		}
		return err
	}
	// Update the user
	_, err := tx.Exec(ctx, updateStmt, u.ID, u)
	return err
}
```

`pgx` is designed to convert our `UserRec` object into JSON.

Other specific types of Postgres are listed [here](https://www.postgresql.org/docs/9.5/datatype.html).

# ORMs

WIP
