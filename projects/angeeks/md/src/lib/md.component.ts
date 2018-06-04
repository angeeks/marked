import { HostBinding, Input, Component, OnChanges } from '@angular/core';
import { MdService } from './md.service';

@Component({
  selector: 'ngk-md,ngk-markdown',
  template: ``
})
export class MdComponent implements OnChanges {
  @Input() src;
  @HostBinding('innerHTML') html = '';
  constructor(private md: MdService) { }

  ngOnChanges(e) {
    if (e.src) {
      this.html = this.md.parse(this.src);
    }
  }
}
