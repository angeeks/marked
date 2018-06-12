import { Component } from '@angular/core';
import { AppData } from './app.data';
import { Gtag } from '@angeeks/gtag';

const sample = `# title
\`\`\`
<ngk-md> Demo </ngk-md>
\`\`\`

## Subtitle
[a nice link](https://angeeks.github.io)
_italic_ **bold** -striked- text
`;

@Component({
  selector: 'ngk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngk';
  desc = '';
  md = sample;
  constructor(
    private gtag: Gtag,
    private data: AppData) {
    gtag.event('page_view', { loaded: true, project: '@angeeks/gtag' });
    data.repo.subscribe(({ name, description: desc }: any) => {
      this.title = name;
      this.desc = desc;
    });
  }

  update(e) {
    this.md = e.target.value;
  }
}
