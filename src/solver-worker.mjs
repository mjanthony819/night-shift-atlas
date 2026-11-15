import {solve} from './engine.mjs';
self.onmessage=e=>{const {id,level,state}=e.data;self.postMessage({id,result:solve(level,state)})};
