# Description

Like `require()` but installs modules if not found in `./node_modules` (runs`npm -i [mod] --save')`

This is mainly useful for the Node REPL.

# Usage

```shell
> var instreq=require('instreq')
...

> instreq('better-log').install();
...

> console.log({hi:'there'});
... (prints output in color etc. now)

```

```
