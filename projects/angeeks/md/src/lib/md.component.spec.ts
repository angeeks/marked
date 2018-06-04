import { ComponentSuite as Component } from '@angeeks/testing';
import { MdComponent as Tag } from './md.component';

Component.suite<Tag>(Tag, (spec) => {
  spec.init();
});
