# ngk-markdown aka ngk-md

[![Build Status](https://travis-ci.org/angeeks/marked.svg?branch=master)](https://travis-ci.org/angeeks/marked)
[![npm version](https://badge.fury.io/js/%40angeeks%2Ftesting.svg)](https://www.npmjs.com/package/@angeeks/md)

Another markdown wrapper component for Angular, build with simplicity and clarity in mind.
Note that by default, it use `marked.js` as the parser (that's why this project called), see [below](#replace-parser) to use your own parser.

# Installation

```
npm i -P @angeeks/md
```

# Usage

```diff
// app.module.ts
+import { MdModule } from '@angeeks/md';

@NgModule({
  imports: [
+   MdModule
  ]
})
export class AppModule {}
```

```diff
<!-- app.component.html -->
<ngk-md [src]='src'></ngk-md>
<!-- or if you type fast -->
<ngk-markdown [src]='src'></ngk-markdown>
```

# Replace parser

```diff
// app.module.ts
+import { mdParser, Parser } from '@angeeks/md';

+export function yourMarkdownParser(): Parser {
+  return { parse };
+}

@NgModule({
  imports: [
    MdModule
  ],
  providers: [
+   { provide: mdParser, useFactory: yourMarkdownParser }
  ]
}
})
export class AppModule {}
```
