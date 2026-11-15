// Pure rules shared by the game, solver, generator and tests. No browser dependencies.
export const DIRS=[[-1,0,1,4,'N'],[0,1,2,8,'E'],[1,0,4,1,'S'],[0,-1,8,2,'W']];
export const mod=(a,n)=>((a%n)+n)%n;
export function validate(l){
 if(!l||l.n!==4||!Array.isArray(l.tiles)||l.tiles.length!==16||l.tiles.some(x=>!Number.isInteger(x)||x<0||x>15))throw Error('A map needs exactly sixteen track masks (0 to 15).');
 for(const k of ['start','exit'])if(!Number.isInteger(l[k])||l[k]<0||l[k]>15||!l.tiles[l[k]])throw Error('Start and depot must be on track.');
 if(l.start===l.exit)throw Error('Start and depot must be different.');
 if(!Array.isArray(l.stamps)||l.stamps.length<1||l.stamps.length>3||new Set(l.stamps).size!==l.stamps.length||l.stamps.some(i=>!Number.isInteger(i)||i<0||i>15||!l.tiles[i]||i===l.start||i===l.exit))throw Error('Use one to three distinct mail stops, away from start and depot.');
 if(l.locked&&(!Array.isArray(l.locked)||l.locked.some(r=>!Number.isInteger(r)||r<0||r>3)))throw Error('Locked rows must be 0 to 3.');
 if(l.offsets&&(!Array.isArray(l.offsets)||l.offsets.length!==4||l.offsets.some(x=>!Number.isInteger(x)||x<0||x>3)))throw Error('Offsets must be four numbers from 0 to 3.');
 return l;
}
export function tileAt(l,s,p){const r=p>>2,c=p%4;return r*4+mod(c-s.o[r],4)}
export function initial(l){validate(l);const o=[...(l.offsets||[0,0,0,0])];const p=(l.start>>2)*4+mod(l.start%4+o[l.start>>2],4);return {o,p,m:0}}
export const copy=s=>({o:[...s.o],p:s.p,m:s.m});
export function collect(l,s){const i=l.stamps.indexOf(tileAt(l,s,s.p));if(i>=0)s.m|=1<<i;return s}
export function won(l,s){return s.m===(1<<l.stamps.length)-1&&tileAt(l,s,s.p)===l.exit}
export function step(l,s,a){
 const t=copy(s);
 if(a[0]==='s'){
  const r=a[1],d=a[2];if(!Number.isInteger(r)||r<0||r>3||![1,-1].includes(d)||(l.locked||[]).includes(r))return null;
  t.o[r]=mod(t.o[r]+d,4);if((t.p>>2)===r)t.p=r*4+mod(t.p%4+d,4);
 }else if(a[0]==='m'){
  const d=DIRS[a[1]];if(!d)return null;const r=(s.p>>2)+d[0],c=s.p%4+d[1];if(r<0||r>3||c<0||c>3)return null;
  const p=r*4+c;if(!(l.tiles[tileAt(l,s,s.p)]&d[2])||!(l.tiles[tileAt(l,s,p)]&d[3]))return null;t.p=p;
 }else return null;
 return collect(l,t);
}
export function key(l,s){return ((((s.o[0]*4+s.o[1])*4+s.o[2])*4+s.o[3])*16+s.p)*(1<<l.stamps.length)+s.m}
export const actions=l=>[...DIRS.map((_,i)=>['m',i]),...[0,1,2,3].filter(r=>!(l.locked||[]).includes(r)).flatMap(r=>[['s',r,-1],['s',r,1]])];
export function solve(l,start=initial(l),limit=100000){
 const size=4096*(1<<l.stamps.length),prev=new Int32Array(size).fill(-1),used=new Int16Array(size),q=[start],as=actions(l),root=key(l,start);prev[root]=root;let end=null,head=0;
 while(head<q.length&&head<limit){const s=q[head++],k=key(l,s);if(won(l,s)){end=k;break}
  for(let i=0;i<as.length;i++){const t=step(l,s,as[i]);if(!t)continue;const tk=key(l,t);if(prev[tk]!==-1)continue;prev[tk]=k;used[tk]=i;q.push(t)}
 }
 if(end===null)return {path:null,visited:head,limited:head>=limit};
 const path=[];while(end!==root){path.push(as[used[end]]);end=prev[end]}return {path:path.reverse(),visited:head,limited:false};
}
export function describe(a){return a[0]==='m'?`Walk ${['north','east','south','west'][a[1]]}`:`Shift district ${a[1]+1} ${a[2]<0?'left':'right'}`}
