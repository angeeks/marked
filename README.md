# Marked

[![Build Status](https://travis-ci.org/angeeks/marked.svg?branch=master)](https://travis-ci.org/angeeks/marked)
[![npm version](https://badge.fury.io/js/%40angeeks%2Ftesting.svg)](https://www.npmjs.com/package/@angeeks/marked)

Another `marked.js` wrapper with Angular

# Usage

```diff
// app.module.ts
+import { MarkedModule } from '@angeeks/marked';

@NgModule({
  imports: [
+   MarkedModule
  ]
})
export class AppModule {}
```

```diff
<!-- app.component.html -->
<ngk-marked [src]='src'></ngk-marked>
```
