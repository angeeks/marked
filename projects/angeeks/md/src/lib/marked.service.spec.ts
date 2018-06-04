import { ProviderSuite as Provider } from '@angeeks/testing';
import { MdService as Subject } from './md.service';

Provider.suite<Subject>(Subject, (spec) => {
  spec.init();
});
