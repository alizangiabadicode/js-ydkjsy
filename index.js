'use strict';

const simpleIteractor = {
  items: [1, 2, 3],
  [Symbol.iterator]: function () {
    return this;
  },
  idx: 0,
  next: function () {
    const arrLength = this.items.length;
    if (this.idx < arrLength) {
      return {
        done: false,
        value: this.items[this.idx],
      };
    } else {
      const res = {
        done: true,
        value: this.items[this.idx],
      };
      this.idx = 0;
      return res;
    }
  },
};
console.log('hello');
for (var i of simpleIteractor) {
  console.log(i, i);
}

// var arr = [1,2,3]

// arr.name = 'dummy'

// console.log(Object.keys(arr).reduce((acc, item) => acc + item))

// for (var i in arr) console.log(i, typeof i)
