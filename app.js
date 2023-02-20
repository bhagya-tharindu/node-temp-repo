const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newitems = _.flattenDepth(items);
console.log(newitems);
