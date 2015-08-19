# Description

`npm i --save instreq`

Like `require()` but installs modules if not found in `./node_modules` (runs`npm i  [mod] --save')`

This is mainly useful for the Node REPL.

# Usage

```
> instreq=require('instreq')
...

> instreq('better-log').install();
...

> console.log({hi:'there'});
... (prints output in color etc. now)

```

