import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

const repoApi = 'https://api.github.com/repos/angeeks/marked';
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
  constructor(private http: HttpClient) {
    http.get(repoApi).subscribe(({ name, description: desc }: any) => {
      this.title = name;
      this.desc = desc;
    });
  }

  update(e) {
    this.md = e.target.value;
  }
}
