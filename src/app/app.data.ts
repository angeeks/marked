import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const repoApi = 'https://api.github.com/repos/angeeks/marked';

@Injectable({
  providedIn: 'root'
})
export class AppData {
  constructor(private http: HttpClient) {}
  get repo() {
    return this.http.get(repoApi);
  }
}
