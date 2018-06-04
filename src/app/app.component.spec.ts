import { HttpClientModule } from '@angular/common/http';
import { ComponentSuite as Component } from '@angeeks/testing';
import { AppComponent as Tag } from './app.component';
import { AppData } from './app.data';
import { AppData as MockAppData } from './testing/app.data';

Component.suite<Tag>(Tag, (spec) => {
  spec.init({
    providers: [
      { provide: AppData, useClass: MockAppData }
    ]
  });
  spec.expectProperty('title', 'test');
});
