# Description

Like `require()` but installs modules if not found in `./node_modules` (runs`npm i  [mod] --save')`

This is mainly useful for the Node REPL.

# Usage

```
$ npm init
$ npm i instreq
$ node

> require('instreq')
> moment=instreq('moment')
> moment().format()

```

