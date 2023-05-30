const content = 'OK'
import {TreeStore} from "./services/TreeStore";
import { FLAT_ARRAY_FAKE } from './fakeData/FakeData'

const ts = new TreeStore(FLAT_ARRAY_FAKE);
console.log({ ts });

document.getElementById('root').innerHTML = content
