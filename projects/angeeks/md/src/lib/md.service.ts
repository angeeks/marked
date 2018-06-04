import { Inject, Injectable } from '@angular/core';
import { mdParser, Parser } from './md.parser';

@Injectable({
  providedIn: 'root'
})
export class MdService {
  constructor(@Inject(mdParser) private md: Parser) {}

  parse(src) {
    return this.md.parse(src);
  }
}
