import { InjectionToken } from '@angular/core';
import { parse } from 'marked';

export interface Parser {
  parse: (input: string) => string;
}

export function parserFactory() {
  return { parse };
}

export const mdParser = new InjectionToken<any>('md-parser', {
  providedIn: 'root',
  factory: parserFactory
});
