import {solve,initial,step,won} from '../src/engine.mjs';
import {writeFileSync} from 'node:fs';
let seed=143126;const rand=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296};const pick=a=>a[Math.floor(rand()*a.length)];
const names=['The first dispatch','The shifting street','Borrowed tracks','Across the water','Return to sender','The harbor wakes','Two addresses','Countercurrent','A locked district','The long way home','Passing places','The tide table','Three last letters','The still quarter','All roads change','The midnight exchange','Before the sunrise','An atlas of arrivals'];
const notes=['One letter. One depot. Follow the connected ink lines, then shift a whole district when the route runs out.','The brass arrows move every tile in a district. If you are on it, you ride with it.','A shift changes the north-south connections. Find the seam where two tracks can meet.','The canals have no bridges until you move the streets into place.','The depot travels with its district too. A familiar place can be somewhere new.','The last boat sounds its horn. The first district is ready for its dawn delivery.','Two addresses, any order. Keep both letters safe before you return.','Sometimes the best way forward is to ride a district in the other direction.','One district is fixed for repair. Its neighbors can still come to meet it.','There is no clock. Study the seams. The harbor can wait.','A dead end is only a dead end in the current arrangement.','The city keeps its own tide table: four shifts bring a district home.','Three letters remain. Every envelope is a stop, not a destination.','The sleeping quarter will not move tonight. Bring the route to it.','Carry the route with you. The atlas is a machine, not a picture.','Shift the city around the courier, or carry the courier through the city.','The sky is lightening. One more careful dispatch.','Every letter has a home. Bring the atlas to its final arrangement.'];
const levels=[];
// A clear authored teaching board. The first shift aligns a vertical connection.
levels.push({id:1,name:names[0],note:notes[0],n:4,tiles:[6,10,12,0,5,0,5,0,3,10,9,0,0,0,0,0],start:0,exit:10,stamps:[8],locked:[],offsets:[0,1,0,0]});
for(let i=1;i<18;i++){
 let best=null;
 for(let tries=0;tries<500;tries++){
  const tiles=Array.from({length:16},()=>pick([3,5,6,9,10,12,7,11,13,14,0]));
  const viable=tiles.map((v,k)=>v?k:-1).filter(k=>k>=0);if(viable.length<8)continue;
  const start=pick(viable),exit=pick(viable.filter(k=>k!==start));let stops=viable.filter(k=>k!==start&&k!==exit);const stamps=[];
  for(let z=0;z<(i<6?1:i<12?2:3);z++){const s=pick(stops);stamps.push(s);stops=stops.filter(k=>k!==s)}
  const l={id:i+1,name:names[i],note:notes[i],n:4,tiles,start,exit,stamps,locked:[8,13,16].includes(i)?[pick([0,1,2,3])]:[],offsets:[0,0,0,0]};
  const result=solve(l);if(!result.path)continue;
  const shifts=result.path.filter(a=>a[0]==='s').length,walks=result.path.length-shifts;
  const target=6+Math.floor(i*.7);
  if(shifts>=(i<6?1:3)&&walks>=4&&result.path.length>=target&&result.path.length<=target+7){best=l;break}
 }
 if(!best)throw Error('No map '+i);levels.push(best);
}
for(const l of levels){const r=solve(l);l.par=r.path.length;l.solution=r.path;let s=initial(l);for(const a of r.path)s=step(l,s,a);if(!won(l,s))throw Error('Bad witness');console.log(l.id,l.name,'par',l.par,'visited',r.visited)}
writeFileSync(new URL('../src/levels.mjs',import.meta.url),'// Campaign generated from a fixed seed; every shortest route verified by BFS.\nexport const LEVELS='+JSON.stringify(levels,null,2)+';\n');
