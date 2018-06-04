import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppData {
  constructor() {}
  get repo() {
    return of({
      name: 'test',
      description: 'test'
    });
  }
}
