import { Component } from '@angular/core';

@Component({
  selector: 'ngk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngk';
  md = `# title
\`\`\`
<ngk-md> Demo </ngk-md>
\`\`\`

## Subtitle
[a nice link](https://angeeks.github.io)
_italic_ **bold** -striked- text
  `;
  constructor() {}

  update(e) {
    this.md = e.target.value;
  }
}
