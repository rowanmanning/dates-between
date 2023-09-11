
# Dates Between

Get all of the dates between two given dates, with [generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*).

```js
const startDate = new Date('2016-01-01');
const endDate = new Date('2017-01-01');

for (const date of datesBetween(startDate, endDate)) {
    console.log(date);
}
```


## Table of Contents

  * [Requirements](#requirements)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [License](#license)


## Requirements

This library requires the following to run:

  * [Node.js](https://nodejs.org/) 18+


## Usage

Install with [npm](https://www.npmjs.com/):

```sh
npm install dates-between
```

Load the library into your code with a `require` call:

```js
const datesBetween = require('dates-between');
```

The `datesBetween` function accepts two arguments, a start date and an end date. Both of these must be `Date` objects:

```js
datesBetween(new Date('2016-01-01'), new Date('2016-02-01'));
```

This returns an [iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#Iterables) which can be iterated over in a `for..of` construct. The yielded dates include both the start and end date that were passed in.

```js
for (const date of datesBetween(startDate, endDate)) {
    console.log(date);
}
```

Because `datesBetween` returns an iterable, you can also create a `Set` or `Array` from it:

```js
const dates = new Set(datesBetween(startDate, endDate));
```

```js
const dates = Array.from(datesBetween(startDate, endDate));
```

Usage examples can be found in the [`example` directory](example) of this repository.


## Contributing

[The contributing guide is available here](docs/contributing.md). All contributors must follow [this library's code of conduct](docs/code_of_conduct.md).


## License

Licensed under the [MIT](LICENSE) license.<br/>
Copyright &copy; 2016, Rowan Manning
