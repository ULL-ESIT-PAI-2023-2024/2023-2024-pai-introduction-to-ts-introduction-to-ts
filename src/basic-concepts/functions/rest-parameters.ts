

function concatenateStrings(separator: string,
                            ...strings: string[]): string {
  return strings.join(separator);
}

let result: string = concatenateStrings(', ', 'apple', 'orange', 'banana');
console.log(result);