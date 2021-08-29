export !== exports

export
```js
export const action = () => 

importing: // file extension has to be .mjs, or in package.json module type = module

import fs from 'fs';

console.log(fs)
```

exports
```js
const action = () => {
  console.log("action");
}

module.exports = {action};

importing:
  
const { action } = require('./common')
```