"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[789],{388:(e,t,i)=>{i.r(t),i.d(t,{default:()=>S})
var r=i(389),s=i(806),n=i.n(s),o=i(123),a=i(735),l=i(241),c=i(730),d=Object.defineProperty;((e,t)=>{for(var i in t)d(e,i,{get:t[i],enumerable:!0})})({},{c:()=>g,f:()=>u,g:()=>f,i:()=>m,m:()=>p,n:()=>y,p:()=>_})
var h=new WeakMap
function u(e,t,i,r){return f(e.prototype,t,i,r)}function f(e,t,i,r){let s={configurable:!0,enumerable:!0,writable:!0,initializer:null}
r&&(s.initializer=r)
for(let n of i)s=n(e,t,s)||s
void 0===s.initializer?Object.defineProperty(e,t,s):function(e,t,i){let r=h.get(e)
r||(r=new Map,h.set(e,r)),r.set(t,i)}(e,t,s)}function p({prototype:e},t,i){return y(e,t,i)}function y(e,t,i){let r={...Object.getOwnPropertyDescriptor(e,t)}
for(let s of i)r=s(e,t,r)||r
void 0!==r.initializer&&(r.value=r.initializer?r.initializer.call(e):void 0,r.initializer=void 0),Object.defineProperty(e,t,r)}function m(e,t){let i=function(e,t){let i=e.prototype
for(;i;){let e=h.get(i)?.get(t)
if(e)return e
i=i.prototype}}(e.constructor,t)
i&&Object.defineProperty(e,t,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(e):void 0})}function g(e,t){return t.reduce(((e,t)=>t(e)||e),e)}function _(e,t){for(let[i,r,s]of t)"field"===i?b(e,r,s):y(e,r,s)
return e}function b(e,t,i){let r={configurable:!0,enumerable:!0,writable:!0,initializer:()=>Object.getOwnPropertyDescriptor(e,t)?.value}
for(let s of i)r=s(e,t,r)||r
r.initializer&&(r.value=r.initializer.call(e),delete r.initializer),Object.defineProperty(e,t,r)}const v=new WeakMap
function w(){const e={},t=[],i=(0,c.o)(this),r=this.store.schema.fields(i),s={name:"Attributes",properties:["id"],expand:!0},n=s.properties,o=[s]
for(const a of r.values())switch(a.kind){case"attribute":n.push(a.name)
break
case"belongsTo":case"hasMany":{let i=e[a.kind]
void 0===i&&(i=e[a.kind]=[],o.push({name:a.kind,properties:i,expand:!0})),i.push(a.name),t.push(a.name)
break}}return o.push({name:"Flags",properties:["isLoaded","hasDirtyAttributes","isSaving","isDeleted","isError","isNew","isValid"],expand:!1}),{propertyInfo:{includeOtherProperties:!0,groups:o,expensiveProperties:t}}}var R=new WeakMap
class k extends(n()){constructor(...e){var t,i
super(...e),t=R,i=void m(this,"store"),function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(this,t),t.set(this,i)}getFilters(){return[{name:"isNew",desc:"New"},{name:"isModified",desc:"Modified"},{name:"isClean",desc:"Clean"}]}_nameToClass(e){return this.store.modelFor(e)}watchModelTypes(e,t){const{store:i}=this,r=function(e){let t=v.get(e)
return void 0===t&&(t=new Map,v.set(e,t)),t}(i),s=i.notifications.subscribe("resource",((s,o)=>{"added"===o&&this.watchTypeIfUnseen(i,r,s.type,e,t,n)})),n=[()=>{i.notifications.unsubscribe(s)}]
Object.keys(i.identifierCache._cache.resourcesByType).forEach((e=>{r.set(e,!1)})),r.forEach(((s,o)=>{this.watchTypeIfUnseen(i,r,o,e,t,n)}))
const o=()=>{n.forEach((e=>e())),r.forEach(((e,t)=>{r.set(t,!1)})),this.releaseMethods.removeObject(o)}
return this.releaseMethods.pushObject(o),o}watchTypeIfUnseen(e,t,i,r,s,n){if(!0!==t.get(i)){const o=e.modelFor(i)
o.prototype._debugInfo=w
const a=this.wrapModelType(o,i)
n.push(this.observeModelType(i,s)),r([a]),t.set(i,!0)}}columnNameToDesc(e){return(0,l.ZH)((0,l.z9)(e).replace(/_/g," ").trim())}columnsForType(e){const t=[{name:"id",desc:"Id"}]
let i=0
return e.attributes.forEach(((e,r)=>{if(i++>this.attributeLimit)return!1
const s=this.columnNameToDesc(r)
t.push({name:r,desc:s})})),t}getRecords(e,t){if(arguments.length<2){const i=e._debugContainerKey
if(i){const e=i.match(/model:(.*)/)
null!==e&&(t=e[1])}}return this.store.peekAll(t)}getRecordColumnValues(e){let t=0
const i={id:e.id}
return e.eachAttribute((r=>{if(t++>this.attributeLimit)return!1
i[r]=e[r]})),i}getRecordKeywords(e){const t=[e.id]
return e.eachAttribute((i=>{t.push(e[i])})),(0,r.A)(t)}getRecordFilterValues(e){return{isNew:e.isNew,isModified:e.hasDirtyAttributes&&!e.isNew,isClean:!e.hasDirtyAttributes}}getRecordColor(e){let t="black"
return e.isNew?t="green":e.hasDirtyAttributes&&(t="blue"),t}observeRecord(e,t){const i=[],r=["id","isNew","hasDirtyAttributes"]
return e.eachAttribute((e=>r.push(e))),r.forEach((r=>{const s=()=>{t(this.wrapRecord(e))};(0,o.addObserver)(e,r,s),i.push((function(){(0,o.removeObserver)(e,r,s)}))})),function(){i.forEach((e=>e()))}}}f(k.prototype,"store",[(0,a.inject)("store")])
const S=k},151:(e,t,i)=>{i.r(t),i.d(t,{graphFor:()=>H,isBelongsTo:()=>d,peekGraph:()=>V})
var r=i(603),s=i(274),n=i(375)
function o(e){return e._store}function a(e,t,i){return(e[t]=e[t]||Object.create(null))[i]}function l(e,t,i,r){(e[t]=e[t]||Object.create(null))[i]=r}function c(e){if(!e.id)return!0
const t=(0,s.oX)(e)
return Boolean(t?.isNew(e))}function d(e){return"belongsTo"===e.definition.kind}function h(e){return e.definition.isImplicit}function u(e){return"hasMany"===e.definition.kind}function f(e,t){if(d(e))e.remoteState&&t(e.remoteState),e.localState&&e.localState!==e.remoteState&&t(e.localState)
else if(u(e)){for(let i=0;i<e.remoteState.length;i++){const r=e.remoteState[i]
t(r)}e.additions?.forEach(t)}else e.localMembers.forEach(t),e.remoteMembers.forEach((i=>{e.localMembers.has(i)||t(i)}))}function p(e,t,i,r){if(d(t))t.remoteState===i&&(t.remoteState=null),t.localState===i&&(t.localState=null,y(e,t.identifier,t.definition.key))
else if(u(t)){t.remoteMembers.delete(i),t.additions?.delete(i)
const r=t.removals?.delete(i),s=t.remoteState.indexOf(i)
if(-1!==s&&t.remoteState.splice(s,1),!r){const r=t.localState?.indexOf(i);-1!==r&&void 0!==r&&(t.localState.splice(r,1),y(e,t.identifier,t.definition.key))}}else t.remoteMembers.delete(i),t.localMembers.delete(i)}function y(e,t,i){t!==e._removing&&e.store.notifyChange(t,"relationships",i)}function m(e){return"belongsTo"===e.kind||"hasMany"===e.kind}const g=null,_="",b=Date.now()
function v(e,t){return`implicit-${e}:${t}${b}`}function w(e,t){e.inverseKind=t.kind,e.inverseKey=t.key,e.inverseType=t.type,e.inverseIsAsync=t.isAsync,e.inverseIsCollection=t.isCollection,e.inverseIsPolymorphic=t.isPolymorphic,e.inverseIsImplicit=t.isImplicit
const i=!1!==e.resetOnRemoteUpdate&&!1!==t.resetOnRemoteUpdate
e.resetOnRemoteUpdate=i,t.resetOnRemoteUpdate=i}function R(e){var t
m(e)||(e={kind:"resource"===(t=e).kind?"belongsTo":"hasMany",name:t.name,type:t.type,options:Object.assign({},{async:!1,inverse:null,resetOnRemoteUpdate:!1},t.options)})
const i={},r=e.options
return i.kind=e.kind,i.key=e.name,i.type=e.type,i.isAsync=r.async,i.isImplicit=!1,i.isCollection="hasMany"===e.kind,i.isPolymorphic=r&&!!r.polymorphic,i.inverseKey=r&&r.inverse||_,i.inverseType=_,i.inverseIsAsync=g,i.inverseIsImplicit=r&&null===r.inverse||g,i.inverseIsCollection=g,i.resetOnRemoteUpdate=!!m(e)&&!1!==e.options?.resetOnRemoteUpdate,i}function k(e,t,i){i?function(e,t,i){const s=t.value,n=e.get(t.record,t.field)
i&&e._addToTransaction(n),n.state.hasReceivedData=!0
const{definition:o}=n,{type:a}=n.definition,l=E(s,n,(r=>{a!==r.type&&e.registerPolymorphicType(a,r.type),n.additions?.has(r)?n.additions.delete(r):n.isDirty=!0,S(e,r,o.inverseKey,t.record,i)}),(r=>{n.removals?.has(r)?n.removals.delete(r):n.isDirty=!0,A(e,r,o.inverseKey,t.record,i)}))
if(n.remoteMembers=l.finalSet,n.remoteState=l.finalState,l.changed&&(n.isDirty=!0),n._diff=l,"hasMany"===n.definition.kind&&!1!==n.definition.resetOnRemoteUpdate){const s={removals:[],additions:[],triggered:!1}
n.removals&&(n.isDirty=!0,n.removals.forEach((r=>{s.triggered=!0,s.removals.push(r),S(e,r,o.inverseKey,t.record,i)})),n.removals=null),n.additions&&(n.additions.forEach((r=>{c(r)||(s.triggered=!0,s.additions.push(r),n.isDirty=!0,n.additions.delete(r),A(e,r,o.inverseKey,t.record,i))})),0===n.additions.size&&(n.additions=null)),s.triggered&&(0,r.deprecate)(`EmberData is changing the default semantics of updates to the remote state of relationships.\n\nThe following local state was cleared from the <${n.identifier.type}>.${n.definition.key} hasMany relationship but will not be once this deprecation is resolved by opting into the new behavior:\n\n\tAdded: [${s.additions.map((e=>e.lid)).join(", ")}]\n\tRemoved: [${s.removals.map((e=>e.lid)).join(", ")}]`,!1,{id:"ember-data:deprecate-relationship-remote-update-clearing-local-state",for:"ember-data",since:{enabled:"5.3",available:"5.3"},until:"6.0",url:"https://deprecations.emberjs.com/v5.x#ember-data-deprecate-relationship-remote-update-clearing-local-state"})}n.isDirty&&M(e,n)}(e,t,i):function(e,t,i){const r=t.value,s=e.get(t.record,t.field),n=0===s.remoteState.length&&null===s.localState&&!1===s.state.hasReceivedData
s.state.hasReceivedData=!0
const{additions:o,removals:a}=s,{inverseKey:l,type:c}=s.definition,{record:d}=t,h=s.isDirty
s.isDirty=!1
const u=r=>{const n=a?.has(r)
!n&&o?.has(r)||(c!==r.type&&e.registerPolymorphicType(c,r.type),s.isDirty=!0,S(e,r,l,t.record,i),n&&a.delete(r))},f=t=>{const r=o?.has(t)
!r&&a?.has(t)||(s.isDirty=!0,A(e,t,l,d,i),r&&o.delete(t))},p=E(r,s,u,f)
s.isDirty||p.changed,o&&o.size>0&&o.forEach((e=>{p.add.has(e)||f(e)})),a&&a.size>0&&a.forEach((e=>{p.del.has(e)||u(e)})),s.additions=p.add,s.removals=p.del,s.localState=p.finalState,s.isDirty=h,(n||!h)&&y(e,t.record,t.field)}(e,t,i)}function S(e,t,i,r,s){const n=e.get(t,i),{type:o}=n.definition
o!==r.type&&e.registerPolymorphicType(o,r.type),d(n)?(n.state.hasReceivedData=!0,n.state.isEmpty=!1,s&&(e._addToTransaction(n),null!==n.remoteState&&A(e,n.remoteState,n.definition.inverseKey,t,s),n.remoteState=r),n.localState!==r&&(!s&&n.localState&&A(e,n.localState,n.definition.inverseKey,t,s),n.localState=r,y(e,t,i))):u(n)?s?n.remoteMembers.has(r)||(e._addToTransaction(n),n.remoteState.push(r),n.remoteMembers.add(r),n.additions?.has(r)?n.additions.delete(r):(n.isDirty=!0,n.state.hasReceivedData=!0,M(e,n))):T(e,0,n,r,null)&&y(e,t,i):s?n.remoteMembers.has(r)||(n.remoteMembers.add(r),n.localMembers.add(r)):n.localMembers.has(r)||n.localMembers.add(r)}function A(e,t,i,r,s){const n=e.get(t,i)
d(n)?(n.state.isEmpty=!0,s&&(e._addToTransaction(n),n.remoteState=null),n.localState===r&&(n.localState=null,y(e,t,i))):u(n)?s?(e._addToTransaction(n),function(e,t){const{remoteMembers:i,additions:r,removals:s,remoteState:n}=e
if(!i.has(t))return!1
i.delete(t)
let o=n.indexOf(t)
return n.splice(o,1),s?.has(t)?(s.delete(t),!1):(e.localState&&(o=e.localState.indexOf(t),e.localState.splice(o,1)),!0)}(n,r)&&y(e,t,i)):O(n,r)&&y(e,t,i):s?(n.remoteMembers.delete(r),n.localMembers.delete(r)):r&&n.localMembers.has(r)&&n.localMembers.delete(r)}function M(e,t){e._scheduleLocalSync(t)}function C(e,t,i=!1){const s=e.get(t.record,t.field)
i&&e._addToTransaction(s)
const{definition:n,state:o}=s,a=i?"remoteState":"localState",l=s[a]
if(t.value!==l)if(l&&A(e,l,n.inverseKey,t.record,i),s[a]=t.value,o.hasReceivedData=!0,o.isEmpty=null===t.value,o.isStale=!1,o.hasFailedLoadAttempt=!1,t.value&&(n.type!==t.value.type&&e.registerPolymorphicType(n.type,t.value.type),S(e,t.value,n.inverseKey,t.record,i)),i){const{localState:t,remoteState:i}=s
if(t&&c(t)&&!i)return
t!==i&&t===l?(s.localState=i,y(e,s.identifier,s.definition.key)):t!==i&&t!==l&&!1!==s.definition.resetOnRemoteUpdate&&(s.localState=i,(0,r.deprecate)(`EmberData is changing the default semantics of updates to the remote state of relationships.\n\nThe following local state was cleared from the <${s.identifier.type}>.${s.definition.key} belongsTo relationship but will not be once this deprecation is resolved:\n\n\t${t?"Added: "+t.lid+"\n\t":""}${l?"Removed: "+l.lid:""}`,!1,{id:"ember-data:deprecate-relationship-remote-update-clearing-local-state",for:"ember-data",since:{enabled:"5.3",available:"5.3"},until:"6.0",url:"https://deprecations.emberjs.com/v5.x#ember-data-deprecate-relationship-remote-update-clearing-local-state"}),y(e,s.identifier,s.definition.key))}else y(e,s.identifier,s.definition.key)
else if(o.hasReceivedData=!0,i){const{localState:o}=s
if(o&&c(o)&&!l)return
l&&o===l?function(e,t,i,r,s){const n=e.get(t,i)
u(n)&&s&&n.remoteMembers.has(r)&&y(e,t,i)}(e,l,n.inverseKey,t.record,i):o!==t.value&&!1!==s.definition.resetOnRemoteUpdate&&(s.localState=l,(0,r.deprecate)(`EmberData is changing the default semantics of updates to the remote state of relationships.\n\nThe following local state was cleared from the <${s.identifier.type}>.${s.definition.key} belongsTo relationship but will not be once this deprecation is resolved:\n\n\t${o?"Added: "+o.lid+"\n\t":""}${l?"Removed: "+l.lid:""}`,!1,{id:"ember-data:deprecate-relationship-remote-update-clearing-local-state",for:"ember-data",since:{enabled:"5.3",available:"5.3"},until:"6.0",url:"https://deprecations.emberjs.com/v5.x#ember-data-deprecate-relationship-remote-update-clearing-local-state"}),y(e,s.identifier,s.definition.key))}}function E(e,t,i,r){const s=new Set(e),{remoteState:n,remoteMembers:o}=t
if(e.length!==s.size){const{diff:t,duplicates:a}=function(e,t,i,r,s,n){const o=e.length,a=i.length,l=Math.max(o,a)
let c=t.size!==r.size
const d=new Set,h=new Set,u=new Map,f=new Set,p=[]
for(let y=0,m=0;y<l;y++){let l,g=!1
if(y<o)if(l=e[y],f.has(l)){let e=u.get(l)
void 0===e&&(e=[],u.set(l,e)),e.push(y)}else p[m]=l,f.add(l),g=!0,r.has(l)||(c=!0,d.add(l),s(l))
if(y<a){const e=i[y]
l!==i[m]&&(c=!0),t.has(e)||(c=!0,h.add(e),n(e))}else g&&m<a&&l!==i[m]&&(c=!0)
g&&m++}return{diff:{add:d,del:h,finalState:p,finalSet:f,changed:c},duplicates:u}}(e,s,n,o,i,r)
return t}return function(e,t,i,r,s,n){const o=e.length,a=i.length,l=Math.max(o,a),c=o===a
let d=t.size!==r.size
const h=new Set,u=new Set
for(let f=0;f<l;f++){let l
if(f<o&&(l=e[f],r.has(l)||(d=!0,h.add(l),s(l))),f<a){const e=i[f]
c&&l!==e&&(d=!0),t.has(e)||(d=!0,u.add(e),n(e))}}return{add:h,del:u,finalState:e,finalSet:t,changed:d}}(e,s,n,o,i,r)}function T(e,t,i,r,s){const{remoteMembers:n,removals:o}=i
let a=i.additions
if((n.has(r)||a?.has(r))&&!o?.has(r))return!1
if(o?.has(r))o.delete(r)
else{a||(a=i.additions=new Set),i.state.hasReceivedData=!0,a.add(r)
const{type:t}=i.definition
t!==r.type&&e.registerPolymorphicType(r.type,t)}return i.localState&&(null!==s?i.localState.splice(s,0,r):i.localState.push(r)),!0}function O(e,t){const{remoteMembers:i,additions:r}=e
let s=e.removals
if(!i.has(t)&&!r?.has(t)||s?.has(t))return!1
if(r?.has(t)?r.delete(t):(s||(s=e.removals=new Set),s.add(t)),e.localState){const i=e.localState.indexOf(t)
e.localState.splice(i,1)}return!0}function q(e,t,i,r){d(r)?C(e,{op:"replaceRelatedRecord",record:t,field:i,value:r.remoteState},!1):k(e,{op:"replaceRelatedRecords",record:t,field:i,value:r.remoteState.slice()},!1)}function D(e){const t={}
return e.state.hasReceivedData&&(t.data=function(e){if(!e.isDirty)return e.localState
const t=e.remoteState.slice()
return e.removals?.forEach((e=>{const i=t.indexOf(e)
t.splice(i,1)})),e.additions?.forEach((e=>{t.push(e)})),e.localState=t,e.isDirty=!1,t}(e)),e.links&&(t.links=e.links),e.meta&&(t.meta=e.meta),t}function j(e,t,i,r,s,n){T(e,0,t,r,s??null)&&S(e,r,t.definition.inverseKey,i,n)}function P(e,t,i,r,s){O(t,r)&&A(e,r,t.definition.inverseKey,i,s)}function N(e){switch(typeof e){case"object":return e
case"string":return{href:e}}}function F(e,t){for(let i=0;i<e.length;i++)e[i]=t.upgradeIdentifier(e[i])
return e}const I=(0,n.L1)("Graphs",new Map)
class ${constructor(e){this._definitionCache=Object.create(null),this._metaCache=Object.create(null),this._potentialPolymorphicTypes=Object.create(null),this.identifiers=new Map,this.store=e,this.isDestroyed=!1,this._willSyncRemote=!1,this._willSyncLocal=!1,this._pushedUpdates={belongsTo:void 0,hasMany:void 0,deletions:[]},this._updatedRelationships=new Set,this._transaction=null,this._removing=null,this.silenceNotifications=!1}has(e,t){const i=this.identifiers.get(e)
return!!i&&void 0!==i[t]}getDefinition(e,t){let i=this._metaCache[e.type],r=i?.[t]
if(!r){const s=function(e,t,i,r=!1){const s=e._definitionCache,n=e.store,c=e._potentialPolymorphicTypes,{type:d}=t
let h=a(s,d,i)
if(void 0!==h)return h
const u=n.schema.fields(t).get(i)
if(!u){if(c[d]){const e=Object.keys(c[d])
for(let t=0;t<e.length;t++){const r=a(s,e[t],i)
if(r)return l(s,d,i,r),r.rhs_modelNames.push(d),r}}return s[d][i]=null,null}const f=R(u)
let p,y
const m=f.type
if(null===f.inverseKey?p=null:(y=function(e,t,i){const r=e.schema.fields(t).get(i)
return r?r.options.inverse:null}(o(n),t,i),p=!y&&f.isPolymorphic&&f.inverseKey?{kind:"belongsTo",key:f.inverseKey,type:d,isAsync:!1,isImplicit:!1,isCollection:!1,isPolymorphic:!1}:y?R(n.schema.fields({type:m}).get(y)):null),!p){y=v(d,i),p={kind:"implicit",key:y,type:d,isAsync:!1,isImplicit:!0,isCollection:!0,isPolymorphic:!1},w(f,p),w(p,f)
const e={lhs_key:`${d}:${i}`,lhs_modelNames:[d],lhs_baseModelName:d,lhs_relationshipName:i,lhs_definition:f,lhs_isPolymorphic:f.isPolymorphic,rhs_key:p.key,rhs_modelNames:[m],rhs_baseModelName:m,rhs_relationshipName:p.key,rhs_definition:p,rhs_isPolymorphic:!1,hasInverse:!1,isSelfReferential:d===m,isReflexive:!1}
return l(s,m,y,e),l(s,d,i,e),e}const g=p.type
if(h=a(s,g,i)||a(s,m,y),h)return(h.lhs_baseModelName===g?h.lhs_modelNames:h.rhs_modelNames).push(d),l(s,d,i,h),h
w(f,p),w(p,f)
const _=[d]
d!==g&&_.push(g)
const b=g===m,k={lhs_key:`${g}:${i}`,lhs_modelNames:_,lhs_baseModelName:g,lhs_relationshipName:i,lhs_definition:f,lhs_isPolymorphic:f.isPolymorphic,rhs_key:`${m}:${y}`,rhs_modelNames:[m],rhs_baseModelName:m,rhs_relationshipName:y,rhs_definition:p,rhs_isPolymorphic:p.isPolymorphic,hasInverse:!0,isSelfReferential:b,isReflexive:b&&i===y}
return l(s,g,i,k),l(s,d,i,k),l(s,m,y,k),k}(this,e,t)
r=function(e,t,i){const r=e.isSelfReferential
return 1==(i===e.lhs_relationshipName)&&(!0===r||t===e.lhs_baseModelName||e.rhs_isPolymorphic&&e.lhs_modelNames.includes(t))}(s,e.type,t)?s.lhs_definition:s.rhs_definition,i=this._metaCache[e.type]=i||{},i[t]=r}return r}get(e,t){let i=this.identifiers.get(e)
i||(i=Object.create(null),this.identifiers.set(e,i))
let r=i[t]
if(!r){const s=this.getDefinition(e,t)
r="belongsTo"===s.kind?i[t]=function(e,t){return{definition:e,identifier:t,state:{hasReceivedData:!1,isEmpty:!0,isStale:!1,hasFailedLoadAttempt:!1,shouldForceReload:!1,hasDematerializedInverse:!1},transactionRef:0,localState:null,remoteState:null,meta:null,links:null}}(s,e):"hasMany"===s.kind?i[t]=function(e,t){return{definition:e,identifier:t,state:{hasReceivedData:!1,isEmpty:!0,isStale:!1,hasFailedLoadAttempt:!1,shouldForceReload:!1,hasDematerializedInverse:!1},remoteMembers:new Set,remoteState:[],additions:null,removals:null,meta:null,links:null,localState:null,isDirty:!0,transactionRef:0,_diff:void 0}}(s,e):i[t]=function(e,t){return{definition:e,identifier:t,localMembers:new Set,remoteMembers:new Set}}(s,e)}return r}getData(e,t){const i=this.get(e,t)
return d(i)?function(e){let t
const i={}
return e.localState&&(t=e.localState),null===e.localState&&e.state.hasReceivedData&&(t=null),e.links&&(i.links=e.links),void 0!==t&&(i.data=t),e.meta&&(i.meta=e.meta),i}(i):D(i)}registerPolymorphicType(e,t){const i=this._potentialPolymorphicTypes
let r=i[e]
r||(r=i[e]=Object.create(null)),r[t]=!0
let s=i[t]
s||(s=i[t]=Object.create(null)),s[e]=!0}isReleasable(e){const t=this.identifiers.get(e)
if(!t)return!0
const i=Object.keys(t)
for(let r=0;r<i.length;r++){const s=t[i[r]]
if(void 0!==s&&s.definition.inverseIsAsync&&!c(e))return!1}return!0}unload(e,t){const i=this.identifiers.get(e)
i&&Object.keys(i).forEach((e=>{const r=i[e]
r&&(function(e,t,i){if(h(t))return void(e.isReleasable(t.identifier)&&L(e,t))
const{identifier:r}=t,{inverseKey:s}=t.definition
t.definition.inverseIsImplicit||f(t,(t=>function(e,t,i,r,s){if(!e.has(t,i))return
const n=e.get(t,i)
d(n)&&n.localState&&r!==n.localState||function(e,t,i,r){if(d(t)){const i=t.localState
!t.definition.isAsync||i&&c(i)?(t.localState===i&&null!==i&&(t.localState=null),t.remoteState===i&&null!==i&&(t.remoteState=null,t.state.hasReceivedData=!0,t.state.isEmpty=!0,t.localState&&!c(t.localState)&&(t.localState=null))):t.state.hasDematerializedInverse=!0,r||y(e,t.identifier,t.definition.key)}else!t.definition.isAsync||i&&c(i)?p(e,t,i):t.state.hasDematerializedInverse=!0,r||y(e,t.identifier,t.definition.key)}(e,n,r,s)}(e,t,s,r,i))),t.definition.inverseIsImplicit||t.definition.inverseIsAsync||(t.state.isStale=!0,x(t),t.definition.isAsync||i||y(e,t.identifier,t.definition.key))}(this,r,t),h(r)&&(i[e]=void 0))}))}_isDirty(e,t){const i=this.identifiers.get(e)
if(!i)return!1
const r=i[t]
if(!r)return!1
if(d(r))return r.localState!==r.remoteState
if(u(r)){const e=null!==r.additions&&r.additions.size>0,t=null!==r.removals&&r.removals.size>0
return e||t||B(r)}return!1}getChanged(e){const t=this.identifiers.get(e),i=new Map
if(!t)return i
const r=Object.keys(t)
for(let s=0;s<r.length;s++){const e=r[s],n=t[e]
if(n)if(d(n))n.localState!==n.remoteState&&i.set(e,{kind:"resource",remoteState:n.remoteState,localState:n.localState})
else if(u(n)){const t=null!==n.additions&&n.additions.size>0,r=null!==n.removals&&n.removals.size>0,s=B(n);(t||r||s)&&i.set(e,{kind:"collection",additions:new Set(n.additions),removals:new Set(n.removals),remoteState:n.remoteState,localState:D(n).data||[],reordered:s})}}return i}hasChanged(e){const t=this.identifiers.get(e)
if(!t)return!1
const i=Object.keys(t)
for(let r=0;r<i.length;r++)if(this._isDirty(e,i[r]))return!0
return!1}rollback(e){const t=this.identifiers.get(e),i=[]
if(!t)return i
const r=Object.keys(t)
for(let s=0;s<r.length;s++){const n=r[s],o=t[n]
o&&this._isDirty(e,n)&&(q(this,e,n,o),i.push(n))}return i}remove(e){this._removing=e,this.unload(e),this.identifiers.delete(e),this._removing=null}push(e){if("deleteRecord"===e.op)this._pushedUpdates.deletions.push(e)
else{const t=this.getDefinition(e.record,e.field)
!function(e,t,i){const r=e[t.kind]=e[t.kind]||new Map
let s=r.get(t.inverseType)
s||(s=new Map,r.set(t.inverseType,s))
let n=s.get(i.field)
n||(n=[],s.set(i.field,n)),n.push(i)}(this._pushedUpdates,t,e)}this._willSyncRemote||(this._willSyncRemote=!0,o(this.store)._schedule("coalesce",(()=>this._flushRemoteQueue())))}update(e,t=!1){switch(e.op){case"mergeIdentifiers":{const t=this.identifiers.get(e.record)
t&&function(e,t,i){Object.keys(i).forEach((r=>{const s=i[r]
s&&function(e,t,i){i.identifier=t.value,f(i,(r=>{const s=e.get(r,i.definition.inverseKey)
!function(e,t,i){d(t)?function(e,t,i){t.remoteState===i.record&&(t.remoteState=i.value),t.localState===i.record&&(t.localState=i.value,y(e,t.identifier,t.definition.key))}(e,t,i):u(t)?function(e,t,i){if(t.remoteMembers.has(i.record)){t.remoteMembers.delete(i.record),t.remoteMembers.add(i.value)
const e=t.remoteState.indexOf(i.record)
t.remoteState.splice(e,1,i.value),t.isDirty=!0}t.additions?.has(i.record)&&(t.additions.delete(i.record),t.additions.add(i.value),t.isDirty=!0),t.removals?.has(i.record)&&(t.removals.delete(i.record),t.removals.add(i.value),t.isDirty=!0),t.isDirty&&y(e,t.identifier,t.definition.key)}(e,t,i):function(e,t,i){t.remoteMembers.has(i.record)&&(t.remoteMembers.delete(i.record),t.remoteMembers.add(i.value)),t.localMembers.has(i.record)&&(t.localMembers.delete(i.record),t.localMembers.add(i.value))}(0,t,i)}(e,s,t)}))}(e,t,s)}))}(this,e,t)
break}case"updateRelationship":(function(e,t){const i=e.get(t.record,t.field),{definition:s,state:n,identifier:o}=i,{isCollection:a}=s,l=t.value
let c=!1,d=!1
if(l.meta&&(i.meta=l.meta),void 0!==l.data)if(c=!0,a){null===l.data&&(l.data=[])
const i=e.store.identifierCache
e.update({op:"replaceRelatedRecords",record:o,field:t.field,value:F(l.data,i)},!0)}else e.update({op:"replaceRelatedRecord",record:o,field:t.field,value:l.data?e.store.identifierCache.upgradeIdentifier(l.data):null},!0)
else!1!==s.isAsync||n.hasReceivedData||(c=!0,a?e.update({op:"replaceRelatedRecords",record:o,field:t.field,value:[]},!0):e.update({op:"replaceRelatedRecord",record:o,field:t.field,value:null},!0))
if(l.links){const e=i.links
if(i.links=l.links,l.links.related){const t=N(l.links.related),i=e&&e.related?N(e.related):null,a=i?i.href:null
t&&t.href&&t.href!==a&&((0,r.warn)(`You pushed a record of type '${o.type}' with a relationship '${s.key}' configured as 'async: false'. You've included a link but no primary data, this may be an error in your payload. EmberData will treat this relationship as known-to-be-empty.`,s.isAsync||n.hasReceivedData,{id:"ds.store.push-link-for-sync-relationship"}),d=!0)}}if(i.state.hasFailedLoadAttempt=!1,c){const e=null===l.data||Array.isArray(l.data)&&0===l.data.length
i.state.hasReceivedData=!0,i.state.isStale=!1,i.state.hasDematerializedInverse=!1,i.state.isEmpty=e}else d&&(a||!i.state.hasReceivedData||(h=i.transactionRef,u=e._transaction,0===h||null===u||h<u)?(i.state.isStale=!0,y(e,i.identifier,i.definition.key)):i.state.isStale=!1)
var h,u})(this,e)
break
case"deleteRecord":{const t=e.record,i=this.identifiers.get(t)
i&&(Object.keys(i).forEach((e=>{const t=i[e]
t&&(i[e]=void 0,L(this,t))})),this.identifiers.delete(t))
break}case"replaceRelatedRecord":C(this,e,t)
break
case"addToRelatedRecords":(function(e,t,i){const{record:r,value:s,index:n}=t,o=e.get(r,t.field)
if(Array.isArray(s))for(let a=0;a<s.length;a++)j(e,o,r,s[a],void 0!==n?n+a:n,i)
else j(e,o,r,s,n,i)
y(e,o.identifier,o.definition.key)})(this,e,t)
break
case"removeFromRelatedRecords":(function(e,t,i){const{record:r,value:s}=t,n=e.get(r,t.field)
if(Array.isArray(s))for(let o=0;o<s.length;o++)P(e,n,r,s[o],i)
else P(e,n,r,s,i)
y(e,n.identifier,n.definition.key)})(this,e,t)
break
case"replaceRelatedRecords":k(this,e,t)}}_scheduleLocalSync(e){this._updatedRelationships.add(e),this._willSyncLocal||(this._willSyncLocal=!0,o(this.store)._schedule("sync",(()=>this._flushLocalQueue())))}_flushRemoteQueue(){if(!this._willSyncRemote)return
let e=(0,n.Yj)("transactionRef")??0
this._transaction=++e,(0,n.dV)("transactionRef",e),this._willSyncRemote=!1
const t=this._pushedUpdates,{deletions:i,hasMany:r,belongsTo:s}=t
t.deletions=[],t.hasMany=void 0,t.belongsTo=void 0
for(let n=0;n<i.length;n++)this.update(i[n],!0)
r&&z(this,r),s&&z(this,s),this._transaction=null}_addToTransaction(e){e.transactionRef=this._transaction}_flushLocalQueue(){if(!this._willSyncLocal)return
if(this.silenceNotifications)return this.silenceNotifications=!1,void(this._updatedRelationships=new Set)
this._willSyncLocal=!1
const e=this._updatedRelationships
this._updatedRelationships=new Set,e.forEach((e=>y(this,e.identifier,e.definition.key)))}destroy(){I.delete(this.store),this.identifiers.clear(),this.store=null,this.isDestroyed=!0}}function z(e,t){t.forEach((t=>{t.forEach((t=>{!function(e,t){for(let i=0;i<t.length;i++)e.update(t[i],!0)}(e,t)}))}))}function x(e){d(e)?(e.localState=null,e.remoteState=null,e.state.hasReceivedData=!1,e.state.isEmpty=!0):(e.remoteMembers.clear(),e.remoteState=[],e.additions=null,e.removals=null,e.localState=null)}function L(e,t){const{identifier:i}=t,{inverseKey:r}=t.definition
f(t,(t=>{e.has(t,r)&&p(e,e.get(t,r),i)})),d(t)?(t.definition.isAsync||x(t),t.localState=null):u(t)?t.definition.isAsync||(x(t),y(e,t.identifier,t.definition.key)):(t.remoteMembers.clear(),t.localMembers.clear())}function B(e){if(e.isDirty)return!1
const{remoteState:t,localState:i,additions:r,removals:s}=e
for(let n=0,o=0;n<t.length;n++){const e=t[n],a=i[o]
if(e!==a){if(s&&s.has(e))continue
if(r&&r.has(a)){o++,n--
continue}return!0}o++}return!1}function U(e){return void 0!==e._instanceCache?e._instanceCache._storeWrapper:e}function V(e){return I.get(U(e))}function H(e){const t=U(e)
let i=I.get(t)
return i||(i=new $(t),I.set(t,i),o(t)._graph=i),i}},910:(e,t,i)=>{i.d(t,{F:()=>p,S:()=>f,a:()=>c,b:()=>l,c:()=>u,i:()=>d,n:()=>h,u:()=>_})
var r=i(274),s=i(603),n=i(82),o=i(375),a=i(193)
class l{constructor(e,t,i={}){this.__store=e,this._snapshots=null,this.modelName=t,this.adapterOptions=i.adapterOptions,this.include=i.include}get _recordArray(){return this.__store.peekAll(this.modelName)}get length(){return this._recordArray.length}snapshots(){if(null!==this._snapshots)return this._snapshots
this.__store
const{_fetchManager:e}=this.__store
return this._snapshots=this._recordArray[r.u2].map((t=>e.createSnapshot(t))),this._snapshots}}function c(e){}function d(e,t){return Array.isArray(e)?e.map(t):t(e,0)}function h(e,t,i,r,s,n){return e?e.normalizeResponse(t,i,r,s,n):r}class u{constructor(e,t,i){this._store=i,this.__attributes=null,this._belongsToRelationships=Object.create(null),this._belongsToIds=Object.create(null),this._hasManyRelationships=Object.create(null),this._hasManyIds=Object.create(null)
const r=!!i._instanceCache.peek(t)
if(this.modelName=t.type,this.identifier=t,r&&this._attributes,this.id=t.id,this.adapterOptions=e.adapterOptions,this.include=e.include,this.modelName=t.type,r){const e=this._store.cache
this._changedAttributes=e.changedAttrs(t)}}get record(){return this._store.peekRecord(this.identifier)}get _attributes(){if(null!==this.__attributes)return this.__attributes
const e=this.__attributes=Object.create(null),{identifier:t}=this,i=this._store.schema.fields(t),r=this._store.cache
return i.forEach(((i,s)=>{"attribute"===i.kind&&(e[s]=r.getAttr(t,s))})),e}get isNew(){const e=this._store.cache
return e?.isNew(this.identifier)||!1}attr(e){if(e in this._attributes)return this._attributes[e]}attributes(){return{...this._attributes}}changedAttributes(){const e=Object.create(null)
if(!this._changedAttributes)return e
const t=Object.keys(this._changedAttributes)
for(let i=0,r=t.length;i<r;i++){const r=t[i]
e[r]=this._changedAttributes[r].slice()}return e}belongsTo(e,t){const r=!(!t||!t.id)
let s
const n=this._store
if(!0===r&&e in this._belongsToIds)return this._belongsToIds[e]
if(!1===r&&e in this._belongsToRelationships)return this._belongsToRelationships[e]
n.schema.fields({type:this.modelName}).get(e)
const o=(0,a.A)(i(151)).graphFor,{identifier:l}=this,c=o(this._store).getData(l,e),d=c&&c.data,h=d?n.identifierCache.getOrCreateRecordIdentifier(d):null
if(c&&void 0!==c.data){const e=n.cache
s=h&&!e.isDeleted(h)?r?h.id:n._fetchManager.createSnapshot(h):null}return r?this._belongsToIds[e]=s:this._belongsToRelationships[e]=s,s}hasMany(e,t){const r=!(!t||!t.ids)
let s
const n=this._hasManyIds[e],o=this._hasManyRelationships[e]
if(!0===r&&e in this._hasManyIds)return n
if(!1===r&&e in this._hasManyRelationships)return o
const l=this._store,c=(l.schema.fields({type:this.modelName}).get(e),(0,a.A)(i(151)).graphFor),{identifier:d}=this,h=c(this._store).getData(d,e)
return h.data&&(s=[],h.data.forEach((e=>{const t=l.identifierCache.getOrCreateRecordIdentifier(e)
l.cache.isDeleted(t)||(r?s.push(t.id):s.push(l._fetchManager.createSnapshot(t)))}))),r?this._hasManyIds[e]=s:this._hasManyRelationships[e]=s,s}eachAttribute(e,t){this._store.schema.fields(this.identifier).forEach(((i,r)=>{"attribute"===i.kind&&e.call(t,r,i)}))}eachRelationship(e,t){this._store.schema.fields(this.identifier).forEach(((i,r)=>{"belongsTo"!==i.kind&&"hasMany"!==i.kind||e.call(t,r,i)}))}serialize(e){return this._store,this._store.serializerFor(this.modelName).serialize(this,e)}}const f=(0,o.L1)("SaveOp",Symbol("SaveOp"))
class p{constructor(e){this._store=e,this._pendingFetch=new Map,this.requestCache=e.getRequestStateService(),this.isDestroyed=!1}createSnapshot(e,t={}){return new u(t,e,this._store)}scheduleSave(e,t){const i=(0,n.ud)(),r={data:[{op:"saveRecord",recordIdentifier:e,options:t}]},s={snapshot:this.createSnapshot(e,t),resolver:i,identifier:e,options:t,queryRequest:r},o=this.requestCache._enqueue(i.promise,s.queryRequest)
return function(e,t){const{snapshot:i,resolver:r,identifier:s,options:n}=t,o=e.adapterFor(s.type),a=n[f],l=i.modelName,c=e.modelFor(l)
let d=Promise.resolve().then((()=>o[a](e,c,i)))
const u=e.serializerFor(l)
d=d.then((t=>{if(t)return h(u,e,c,t,i.id,a)})),r.resolve(d)}(this._store,s),o}scheduleFetch(e,t,r){const s={data:[{op:"findRecord",recordIdentifier:e,options:t}]},o=this.getPendingFetch(e,t)
if(o)return o
const l=e.type,c=(0,n.ud)(),d={identifier:e,resolver:c,options:t,queryRequest:s},h=c.promise,u=this._store,f=!u._instanceCache.recordIsLoaded(e)
let p=this.requestCache._enqueue(h,d.queryRequest).then((i=>{i.data&&!Array.isArray(i.data)&&(i.data.lid=e.lid)
const r=u._push(i,t.reload)
return r&&!Array.isArray(r)?r:e}),(t=>{const r=u.cache
if(!r||r.isEmpty(e)||f){let t=!0
if(!r){const r=(0,(0,a.A)(i(151)).graphFor)(u)
t=r.isReleasable(e),t||r.unload(e,!0)}(r||t)&&(u._enableAsyncFlush=!0,u._instanceCache.unloadRecord(e),u._enableAsyncFlush=null)}throw t}))
0===this._pendingFetch.size&&new Promise((e=>setTimeout(e,0))).then((()=>{this.flushAllPendingFetches()}))
const y=this._pendingFetch
let m=y.get(l)
m||(m=new Map,y.set(l,m))
let g=m.get(e)
return g||(g=[],m.set(e,g)),g.push(d),d.promise=p,p}getPendingFetch(e,t){const i=this._pendingFetch.get(e.type)?.get(e)
if(i){const e=i.find((e=>function(e={},t={}){return i=e.adapterOptions,r=t.adapterOptions,(!i||i===r||0===Object.keys(i).length)&&function(e,t){if(!e?.length)return!0
if(!t?.length)return!1
const i=(Array.isArray(e)?e:e.split(",")).sort(),r=(Array.isArray(t)?t:t.split(",")).sort()
if(i.join(",")===r.join(","))return!0
for(let s=0;s<i.length;s++)if(!r.includes(i[s]))return!1
return!0}(e.include,t.include)
var i,r}(t,e.options)))
if(e)return e.promise}}flushAllPendingFetches(){if(this.isDestroyed)return
const e=this._store
this._pendingFetch.forEach(((t,i)=>function(e,t,i){const r=e.adapterFor(i)
if(r.findMany&&r.coalesceFindRequests){const s=[]
t.forEach(((e,i)=>{e.length>1||(t.delete(i),s.push(e[0]))}))
const n=s.length
if(n>1){const t=new Array(n),o=new Map
for(let i=0;i<n;i++){const r=s[i]
t[i]=e._fetchManager.createSnapshot(r.identifier,r.options),o.set(t[i],r)}let a
a=r.groupRecordsForFindMany?r.groupRecordsForFindMany(e,t):[t]
for(let s=0,n=a.length;s<n;s++)g(e,o,a[s],r,i)}else 1===n&&m(e,r,s[0])}t.forEach((t=>{t.forEach((t=>{m(e,r,t)}))}))}(e,t,i))),this._pendingFetch.clear()}fetchDataIfNeededForIdentifier(e,t={},i){const r=function(e,t){const i=e.cache
if(!i)return!0
const r=i.isNew(t),s=i.isDeleted(t),n=i.isEmpty(t)
return(!r||s)&&n}(this._store._instanceCache,e),s=function(e,t){const i=e.store.getRequestStateService()
return!e.recordIsLoaded(t)&&i.getPendingRequestsForRecord(t).some((e=>"query"===e.type))}(this._store._instanceCache,e)
let n
return r?(t.reload=!0,n=this.scheduleFetch(e,t,i)):n=s?this.getPendingFetch(e,t):Promise.resolve(e),n}destroy(){this.isDestroyed=!0}}function y(e,t,i){for(let r=0,s=t.length;r<s;r++){const s=t[r],n=e.get(s)
n&&n.resolver.reject(i||new Error(`Expected: '<${s.modelName}:${s.id}>' to be present in the adapter provided payload, but it was not found.`))}}function m(e,t,i){const n=i.identifier,o=n.type,a=e._fetchManager.createSnapshot(n,i.options),l=e.modelFor(n.type),c=n.id
let d=Promise.resolve().then((()=>t.findRecord(e,l,n.id,a)))
d=d.then((t=>{const i=h(e.serializerFor(o),e,l,t,c,"findRecord")
return(0,s.warn)(`You requested a record of type '${o}' with id '${c}' but the adapter returned a payload with primary data having an id of '${i.data.id}'. Use 'store.findRecord()' when the requested id is the same as the one returned by the adapter. In other cases use 'store.queryRecord()' instead.`,(0,r.pG)(i.data.id)===(0,r.pG)(c),{id:"ds.store.findRecord.id-mismatch"}),i})),i.resolver.resolve(d)}function g(e,t,i,r,n){i.length>1?function(e,t,i,r){const s=e.modelFor(i)
return Promise.resolve().then((()=>{const i=r.map((e=>e.id))
return t.findMany(e,s,i,r)})).then((t=>h(e.serializerFor(i),e,s,t,null,"findMany")))}(e,r,n,i).then((r=>{!function(e,t,i,r){const n=new Map
for(let s=0;s<i.length;s++){const e=i[s].id
let t=n.get(e)
t||(t=[],n.set(e,t)),t.push(i[s])}const o=Array.isArray(r.included)?r.included:[],a=r.data
for(let s=0,c=a.length;s<c;s++){const e=a[s],i=n.get(e.id)
n.delete(e.id),i?i.forEach((i=>{t.get(i).resolver.resolve({data:e})})):o.push(e)}if(o.length>0&&e._push({data:null,included:o},!0),0===n.size)return
const l=[]
n.forEach((e=>{l.push(...e)})),(0,s.warn)('Ember Data expected to find records with the following ids in the adapter response from findMany but they were missing: [ "'+[...n.values()].map((e=>e[0].id)).join('", "')+'" ]',{id:"ds.store.missing-records-from-adapter"}),y(t,l)}(e,t,i,r)})).catch((e=>{y(t,i,e)})):1===i.length&&m(e,r,t.get(i[0]))}function _(e){}},491:(e,t,i)=>{i.r(t),i.d(t,{FetchManager:()=>r.F,SaveOp:()=>r.S,Snapshot:()=>r.c,SnapshotRecordArray:()=>r.b,upgradeStore:()=>r.u})
var r=i(910)},678:(e,t,i)=>{i.r(t),i(603),i(262)},262:(e,t,i)=>{i.d(t,{f:()=>y,h:()=>g,j:()=>m})
const r={plurals:[[/$/,"s"],[/s$/i,"s"],[/^(ax|test)is$/i,"$1es"],[/(octop|vir)us$/i,"$1i"],[/(octop|vir)i$/i,"$1i"],[/(alias|status|bonus)$/i,"$1es"],[/(bu)s$/i,"$1ses"],[/(buffal|tomat)o$/i,"$1oes"],[/([ti])um$/i,"$1a"],[/([ti])a$/i,"$1a"],[/sis$/i,"ses"],[/(?:([^f])fe|([lr])f)$/i,"$1$2ves"],[/(hive)$/i,"$1s"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/(x|ch|ss|sh)$/i,"$1es"],[/(matr|vert|ind)(?:ix|ex)$/i,"$1ices"],[/^(m|l)ouse$/i,"$1ice"],[/^(m|l)ice$/i,"$1ice"],[/^(ox)$/i,"$1en"],[/^(oxen)$/i,"$1"],[/(quiz)$/i,"$1zes"]],singular:[[/s$/i,""],[/(ss)$/i,"$1"],[/(n)ews$/i,"$1ews"],[/([ti])a$/i,"$1um"],[/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)(sis|ses)$/i,"$1sis"],[/(^analy)(sis|ses)$/i,"$1sis"],[/([^f])ves$/i,"$1fe"],[/(hive)s$/i,"$1"],[/(tive)s$/i,"$1"],[/([lr])ves$/i,"$1f"],[/([^aeiouy]|qu)ies$/i,"$1y"],[/(s)eries$/i,"$1eries"],[/(m)ovies$/i,"$1ovie"],[/(x|ch|ss|sh)es$/i,"$1"],[/^(m|l)ice$/i,"$1ouse"],[/(bus)(es)?$/i,"$1"],[/(o)es$/i,"$1"],[/(shoe)s$/i,"$1"],[/(cris|test)(is|es)$/i,"$1is"],[/^(a)x[ie]s$/i,"$1xis"],[/(octop|vir)(us|i)$/i,"$1us"],[/(alias|status|bonus)(es)?$/i,"$1"],[/^(ox)en/i,"$1"],[/(vert|ind)ices$/i,"$1ex"],[/(matr)ices$/i,"$1ix"],[/(quiz)zes$/i,"$1"],[/(database)s$/i,"$1"]],irregularPairs:[["person","people"],["man","men"],["child","children"],["sex","sexes"],["move","moves"],["cow","kine"],["zombie","zombies"]],uncountable:["equipment","information","rice","money","species","series","fish","sheep","jeans","police"]}
class s{constructor(e,t){this.size=t||1e4,this.state=new Map,this.doWork=e}get(e){const t=this.state.get(e)
if(t)return this.state.delete(e),this.state.set(e,t),t
const i=this.doWork(e)
return this.set(e,i),i}set(e,t){if(this.state.size===this.size)for(const[i]of this.state){this.state.delete(i)
break}this.state.set(e,t)}clear(){this.state.clear()}}const n=/[ _]/g,o=/([a-z\d])([A-Z])/g,a=new s((e=>e.replace(o,"$1_$2").toLowerCase().replace(n,"-"))),l=/(\-|\_|\.|\s)+(.)?/g,c=/(^|\/)([A-Z])/g,d=(new s((e=>e.replace(l,((e,t,i)=>i?i.toUpperCase():"")).replace(c,(e=>e.toLowerCase())))),/([a-z\d])([A-Z]+)/g),h=/\-|\s+/g,u=new s((e=>e.replace(d,"$1_$2").replace(h,"_").toLowerCase())),f=/(^|\/)([a-z\u00C0-\u024F])/g,p=new s((e=>e.replace(f,(e=>e.toUpperCase()))))
function y(e){return a.get(e)}function m(e){return u.get(e)}function g(e){return p.get(e)}const _=/^\s*$/,b=/([\w/-]+[_/\s-])([a-z\d]+$)/,v=/([\w/\s-]+)([A-Z][a-z\d]*$)/,w=/[A-Z][a-z\d]*$/,R=(new s((e=>function(e){return C(e,A,S)}(e))),new s((e=>function(e){return C(e,M,k)}(e))),new Set(r.uncountable)),k=new Map,S=new Map,A=new Map(r.singular.reverse()),M=new Map(r.plurals.reverse())
function C(e,t,i){if(!e||_.test(e))return e
const r=e.toLowerCase()
if(R.has(r))return e
const s=b.exec(e)||v.exec(e),n=s?s[2].toLowerCase():null
if(n&&R.has(n))return e
const o=w.test(e)
for(let[a,l]of i)if(r.match(a+"$"))return o&&n&&i.has(n)&&(l=g(l),a=g(a)),e.replace(new RegExp(a,"i"),l)
for(const[a,l]of t)if(a.test(e))return e.replace(a,l)
return e}r.irregularPairs.forEach((e=>{k.set(e[0].toLowerCase(),e[1]),k.set(e[1].toLowerCase(),e[1]),S.set(e[1].toLowerCase(),e[0]),S.set(e[0].toLowerCase(),e[0])}))},241:(e,t,i)=>{i.d(t,{ZH:()=>r.h,_k:()=>r.f,z9:()=>r.j})
var r=i(262)},464:(e,t,i)=>{i.d(t,{I:()=>p,b:()=>b,c:()=>h,e:()=>_,f:()=>R,g:()=>u,s:()=>f,u:()=>v})
var r=i(375),s=i(648)
function n(e,t){return e.get(o(e,t))}function o(e,t,i){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:i
throw new TypeError("Private element is not present on this object")}function a(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e
var i=e[Symbol.toPrimitive]
if(void 0!==i){var r=i.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const l=(0,r.vs)("PromiseCache",new WeakMap),c=(0,r.vs)("RequestMap",new Map)
function d(e,t){c.set(e,t)}function h(e){c.delete(e)}function u(e){return c.get(e)}function f(e,t){l.set(e,t)}const p=(0,r.L1)("IS_CACHE_HANDLER",Symbol("IS_CACHE_HANDLER"))
function y(e){return e&&!0===e[s.k0]}function m(e,t,i){return y(t)?t:i?{[s.k0]:!0,request:e.request,response:e.getResponse(),error:t}:{[s.k0]:!0,request:e.request,response:e.getResponse(),content:t}}function g(e){return new DOMException(e||"The user aborted a request.","AbortError")}function _(e,t,i,r){const n=new k(t,r,0===i),o=(a=e[i],0===i&&Boolean(a[p]))
var a
const l=new A(n,o)
let c
try{c=e[i].request(l,(function(t){return n.nextCalled++,_(e,t,i+1,r)})),o&&l._finalize(),c&&o&&(c instanceof Promise||(d(n.requestId,{isError:!1,result:m(n,c,!1)}),c=Promise.resolve(c)))}catch(e){o&&d(n.requestId,{isError:!0,result:m(n,e,!0)}),c=Promise.reject(e)}const h=function(e){const t=b()
let i,{promise:r}=t
return r=r.finally((()=>{e.resolveStream(),i&&i.forEach((e=>e()))})),r.onFinalize=e=>{i=i||[],i.push(e)},r[s.J6]=!0,r.getStream=()=>e.getStream(),r.abort=t=>{e.abort(g(t))},r.id=e.requestId,r.lid=e.god.identifier,t.promise=r,t}(n)
return u=c,Boolean(u&&u instanceof Promise&&!0===u[s.J6])?function(e,t,i){return e.setStream(t.getStream()),t.then((t=>{const r={[s.k0]:!0,request:e.request,response:t.response,content:t.content}
i.resolve(r)}),(t=>{if(y(t)&&e.setStream(e.god.stream),!(t&&t instanceof Error))try{throw new Error(t||"Request Rejected with an Unknown Error")}catch(e){t&&"object"==typeof t&&(Object.assign(e,t),e.message=t.message||"Request Rejected with an Unknown Error"),t=e}t[s.k0]=!0,t.request=e.request,t.response=e.getResponse(),t.error=t.error||t.message,i.reject(t)})),i.promise}(n,c,h):function(e,t,i){return t.then((t=>{if(e.controller.signal.aborted)return void i.reject(g(e.controller.signal.reason))
y(t)&&(e.setStream(e.god.stream),t=t.content)
const r={[s.k0]:!0,request:e.request,response:e.getResponse(),content:t}
i.resolve(r)}),(t=>{if(y(t)&&e.setStream(e.god.stream),!(t&&t instanceof Error))try{throw new Error(t||"Request Rejected with an Unknown Error")}catch(e){t&&"object"==typeof t&&(Object.assign(e,t),e.message=t.message||"Request Rejected with an Unknown Error"),t=e}t[s.k0]=!0,t.request=e.request,t.response=e.getResponse(),t.error=t.error||t.message,i.reject(t)})),i.promise}(n,c,h)
var u}function b(){let e,t
const i=new Promise(((i,r)=>{e=i,t=r}))
return{resolve:e,reject:t,promise:i}}function v(e,t){return e[s.J6]=!0,e.getStream=t.getStream,e.abort=t.abort,e.onFinalize=t.onFinalize,e.id=t.id,e.lid=t.lid,e}function w(e){return e.clone=()=>new Headers(e),e.toJSON=()=>Array.from(e),e}function R(e){const{headers:t,ok:i,redirected:r,status:s,statusText:n,type:o,url:a}=e
return w(t),{headers:t,ok:i,redirected:r,status:s,statusText:n,type:o,url:a}}class k{constructor(e,t,i=!1){a(this,"hasSetStream",!1),a(this,"hasSetResponse",!1),a(this,"hasSubscribers",!1),a(this,"stream",b()),a(this,"response",null),a(this,"nextCalled",0),this.isRoot=i,this.requestId=t.id,this.controller=e.controller||t.controller,this.stream.promise.sizeHint=0,e.controller&&(e.controller!==t.controller&&t.controller.signal.addEventListener("abort",(()=>{this.controller.abort(t.controller.signal.reason)})),delete e.controller)
let r=Object.assign({signal:this.controller.signal},e)
e.headers&&w(e.headers),this.enhancedRequest=r,this.request=e,this.god=t,this.stream.promise=this.stream.promise.then((e=>(this.god.stream===e&&this.hasSubscribers&&(this.god.stream=null),e)))}get hasRequestedStream(){return this.god.hasRequestedStream}getResponse(){return this.hasSetResponse?this.response:1===this.nextCalled?this.god.response:null}getStream(){if(this.isRoot&&(this.god.hasRequestedStream=!0),!this.hasSetResponse){const e=this.god.response?.headers?.get("content-length")
this.stream.promise.sizeHint=e?parseInt(e,10):0}return this.hasSubscribers=!0,this.stream.promise}abort(e){this.controller.abort(e)}setStream(e){this.hasSetStream||(this.hasSetStream=!0,e instanceof Promise||(this.god.stream=e),this.stream.resolve(e))}resolveStream(){this.setStream(1===this.nextCalled?this.god.stream:null)}setResponse(e){if(!this.hasSetResponse)if(this.hasSetResponse=!0,e instanceof Response){let t=R(e)
this.response=t,this.god.response=t
const i=e.headers?.get("content-length")
this.stream.promise.sizeHint=i?parseInt(i,10):0}else this.response=e,this.god.response=e}}var S=new WeakMap
class A{constructor(e,t){var i,r;(function(e,t,i){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,void 0)})(this,S),this.id=e.requestId,r=e,(i=S).set(o(i,this),r),this.request=e.enhancedRequest,this._isCacheHandler=t,this._finalized=!1}setStream(e){n(S,this).setStream(e)}setResponse(e){n(S,this).setResponse(e)}setIdentifier(e){n(S,this).god.identifier=e}get hasRequestedStream(){return n(S,this).hasRequestedStream}_finalize(){this._finalized=!0}}new Map([["records","array"],["data","json"],["body",{type:"string",klass:["Blob","ArrayBuffer","TypedArray","DataView","FormData","URLSearchParams","ReadableStream"]}],["disableTestWaiter","boolean"],["options","object"],["cacheOptions","object"],["op","string"],["store","object"],["url","string"],["cache",["default","force-cache","no-cache","no-store","only-if-cached","reload"]],["credentials",["include","omit","same-origin"]],["destination",["","object","audio","audioworklet","document","embed","font","frame","iframe","image","manifest","paintworklet","report","script","sharedworker","style","track","video","worker","xslt"]],["headers","headers"],["integrity","string"],["keepalive","boolean"],["method",["GET","PUT","PATCH","DELETE","POST","OPTIONS"]],["mode",["same-origin","cors","navigate","no-cors"]],["redirect",["error","follow","manual"]],["referrer","string"],["signal","AbortSignal"],["controller","AbortController"],["referrerPolicy",["","same-origin","no-referrer","no-referrer-when-downgrade","origin","origin-when-cross-origin","strict-origin","strict-origin-when-cross-origin","unsafe-url"]]]),(0,r.L1)("IS_FROZEN",Symbol("FROZEN")),(0,r.L1)("IS_COLLECTION",Symbol.for("Collection")),new Set([])},82:(e,t,i)=>{i.d(t,{Ay:()=>a,ud:()=>s.b})
var r=i(375),s=i(464)
function n(e,t){return e.get(function(e,t,i){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:i
throw new TypeError("Private element is not present on this object")}(e,t))}var o=new WeakMap
class a{constructor(e){var t,i
i=[],function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(this,t=o),t.set(this,i),Object.assign(this,e),this._pending=new Map,this._deduped=new Map}useCache(e){return e[s.I]=!0,n(o,this).unshift(e),this}use(e){return n(o,this).push(...e),this}request(e){const t=n(o,this),i=e.controller||new AbortController
e.controller&&delete e.controller
const a=(0,r.dN)("REQ_ID")??0;(0,r.ml)("REQ_ID",a+1)
const l={controller:i,response:null,stream:null,hasRequestedStream:!1,id:a,identifier:null},c=(0,s.e)(t,e,0,l),d=(0,s.g)(a),h=(0,s.u)(c.then((e=>((0,s.s)(h,{isError:!1,result:e}),(0,s.c)(a),e)),(e=>{throw(0,s.s)(h,{isError:!0,result:e}),(0,s.c)(a),e})),c)
return d&&(0,s.s)(h,d),h}static create(e){return new this(e)}}},113:(e,t,i)=>{i.r(t),i.d(t,{BooleanTransform:()=>l,DateTransform:()=>c,NumberTransform:()=>h,StringTransform:()=>u,default:()=>a})
var r=i(471),s=i.n(r),n=i(788)
function o(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e
var i=e[Symbol.toPrimitive]
if(void 0!==i){var r=i.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const a=s()
class l{deserialize(e,t){return null==e&&!0===t?.allowNull?null:"boolean"==typeof e?e:"string"==typeof e?/^(true|t|1)$/i.test(e):"number"==typeof e&&1===e}serialize(e,t){return null==e&&!0===t?.allowNull?null:Boolean(e)}static create(){return new this}}class c{constructor(){o(this,n.k5,"date")}deserialize(e,t){if("string"==typeof e){let t=e.indexOf("+")
return-1!==t&&e.length-5===t?(t+=3,new Date(e.slice(0,t)+":"+e.slice(t))):new Date(e)}return"number"==typeof e?new Date(e):null==e?e:null}serialize(e,t){return e instanceof Date&&!isNaN(e)?e.toISOString():null}static create(){return new this}}function d(e){return e==e&&e!==1/0&&e!==-1/0}class h{constructor(){o(this,n.k5,"number")}deserialize(e,t){if(""===e||null==e)return null
{const t=Number(e)
return d(t)?t:null}}serialize(e,t){if(""===e||null==e)return null
{const t=Number(e)
return d(t)?t:null}}static create(){return new this}}class u{constructor(){o(this,n.k5,"string")}deserialize(e,t){return e||""===e?String(e):null}serialize(e,t){return e||""===e?String(e):null}static create(){return new this}}},274:(e,t,i)=>{i.d(t,{J4:()=>r.n,RX:()=>r.l,TP:()=>r.o,To:()=>r.A,Wz:()=>r.t,XK:()=>r.M,di:()=>r.u,fV:()=>r.s,i:()=>r.q,o:()=>r.r,oX:()=>r.p,oz:()=>r.I,pG:()=>r.g,u2:()=>r.k,xm:()=>r.i})
var r=i(582)},582:(e,t,i)=>{i.d(t,{A:()=>be,C:()=>it,I:()=>Me,M:()=>we,S:()=>Ue,g:()=>p,i:()=>k,k:()=>ve,l:()=>qe,n:()=>Se,o:()=>W,p:()=>B,q:()=>K,r:()=>H,s:()=>G,t:()=>x,u:()=>m})
var r=i(603),s=i(648),n=i(375)
Symbol("record-originated-on-client"),Symbol("identifier-bucket"),Symbol("warpDriveStaleCache")
const o=Symbol("warpDriveCache")
var a=i(241),l=i(146),c=i(223),d=i(738)
function h(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function u(e,t,i){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:i
throw new TypeError("Private element is not present on this object")}function f(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e
var i=e[Symbol.toPrimitive]
if(void 0!==i){var r=i.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function p(e){{let t
return t=null==e||""===e?null:String(e),(0,r.deprecate)(`The resource id '<${typeof e}> ${String(e)} ' is not normalized. Update your application code to use '${JSON.stringify(t)}' instead.`,t===e,{id:"ember-data:deprecate-non-strict-id",until:"6.0",for:"ember-data",since:{available:"5.3",enabled:"5.3"}}),t}}function y(e){let t=null
return"string"==typeof e?t=e.length>0?e:null:"number"!=typeof e||isNaN(e)||(t=String(e)),t}function m(e){{const t=(0,a._k)(e)
return(0,r.deprecate)(`The resource type '${e}' is not normalized. Update your application code to use '${t}' instead of '${e}'.`,t===e,{id:"ember-data:deprecate-non-strict-types",until:"6.0",for:"ember-data",since:{available:"5.3",enabled:"5.3"}}),t}}function g(e){return Boolean(e&&"object"==typeof e)}function _(e,t){return Boolean(g(e)&&t in e&&"string"==typeof e[t]&&e[t].length)}function b(e){return _(e,"lid")}function v(e){return _(e,"id")||Boolean(g(e)&&"id"in e&&"number"==typeof e.id)}const w=(0,n.L1)("IDENTIFIERS",new Set),R=(0,n.L1)("DOCUMENTS",new Set)
function k(e){return void 0!==e[o]||w.has(e)}function S(e){return R.has(e)}const A="undefined"!=typeof FastBoot?FastBoot.require("crypto"):globalThis.crypto,M=new Map
let C=0
function E(e,t,i){"record"===i&&!e.id&&v(t)&&function(e,t,i){let r=e.get(t.type)
r||(r=new Map,e.set(t.type,r)),r.set(i,t.lid)}(M,e,t.id)}function T(e,t){const i=v(e)?p(e.id):null
return{type:function(e){return _(e,"type")}(e)?m(e.type):t?t.type:null,id:i}}function O(e,t){if("record"===t){if(b(e))return e.lid
if(v(e)){const t=m(e.type),i=M.get(t)?.get(e.id)
return i||`@lid:${t}-${e.id}`}return A.randomUUID()}if("document"===t)return e.url?e.method&&"GET"!==e.method.toUpperCase()?null:e.url:null}function q(...e){}function D(e,t,i){return e}class j{constructor(){this._generate=(0,n.Yj)("configuredGenerationMethod")||O,this._update=(0,n.Yj)("configuredUpdateMethod")||E,this._forget=(0,n.Yj)("configuredForgetMethod")||q,this._reset=(0,n.Yj)("configuredResetMethod")||q,this._merge=D,this._keyInfoForResource=(0,n.Yj)("configuredKeyInfoMethod")||T,this._id=C++,this._cache={resources:new Map,resourcesByType:Object.create(null),documents:new Map,polymorphicLidBackMap:new Map}}__configureMerge(e){this._merge=e||D}upgradeIdentifier(e){return this._getRecordIdentifier(e,2)}_getRecordIdentifier(e,t){if(k(e))return e
const i=this._generate(e,"record")
let r=N(this._cache,i)
if(null!==r)return r
if(0!==t){if(2===t)e.lid=i,e[o]=this._id,r=P(e)
else{const t=this._keyInfoForResource(e,null)
t.lid=i,t[o]=this._id,r=P(t)}return F(this._cache,r),r}}peekRecordIdentifier(e){return this._getRecordIdentifier(e,0)}getOrCreateDocumentIdentifier(e){let t=e.cacheOptions?.key
if(t||(t=this._generate(e,"document")),!t)return null
let i=this._cache.documents.get(t)
return void 0===i&&(i={lid:t},R.add(i),this._cache.documents.set(t,i)),i}getOrCreateRecordIdentifier(e){return this._getRecordIdentifier(e,1)}createIdentifierForNewRecord(e){const t=this._generate(e,"record"),i=P({id:e.id||null,type:e.type,lid:t,[o]:this._id})
return F(this._cache,i),i}updateRecordIdentifier(e,t){let i=this.getOrCreateRecordIdentifier(e)
const r=this._keyInfoForResource(t,i)
let s=function(e,t,i,r){const s=t.id,{id:n,type:o,lid:a}=i,l=e.resourcesByType[i.type]
if(null!==n&&n!==s&&null!==s){const e=l&&l.id.get(s)
return void 0!==e&&e}{const i=t.type
if(null!==n&&n===s&&i===o&&b(r)&&r.lid!==a)return N(e,r.lid)||!1
if(null!==n&&n===s&&i&&i!==o&&b(r)&&r.lid===a){const t=e.resourcesByType[i],r=t&&t.id.get(s)
return void 0!==r&&r}}return!1}(this._cache,r,i,t)
const n=b(t)
if(s||i.type!==r.type&&(n&&delete t.lid,s=this.getOrCreateRecordIdentifier(t)),s){const e=i
i=this._mergeRecordIdentifiers(r,e,s,t),n&&(t.lid=i.lid)}const o=i.id;(function(e,t,i,r){r(e,i,"record"),void 0!==i.id&&(e.id=p(i.id))})(i,0,t,this._update)
const a=i.id
if(o!==a&&null!==a){const e=this._cache.resourcesByType[i.type]
e.id.set(a,i),null!==o&&e.id.delete(o)}return i}_mergeRecordIdentifiers(e,t,i,r){const s=this._merge(t,i,r),n=s===t?i:t,o=this._cache.polymorphicLidBackMap.get(n.lid)
o&&this._cache.polymorphicLidBackMap.delete(n.lid),this.forgetRecordIdentifier(n),this._cache.resources.set(n.lid,s)
const a=this._cache.polymorphicLidBackMap.get(s.lid)??[]
return a.push(n.lid),o&&o.forEach((e=>{a.push(e),this._cache.resources.set(e,s)})),this._cache.polymorphicLidBackMap.set(s.lid,a),s}forgetRecordIdentifier(e){const t=this.getOrCreateRecordIdentifier(e),i=this._cache.resourcesByType[t.type]
null!==t.id&&i.id.delete(t.id),this._cache.resources.delete(t.lid),i.lid.delete(t.lid)
const r=this._cache.polymorphicLidBackMap.get(t.lid)
r&&(r.forEach((e=>{this._cache.resources.delete(e)})),this._cache.polymorphicLidBackMap.delete(t.lid)),t[o]=void 0,w.delete(t),this._forget(t,"record")}destroy(){M.clear(),this._cache.documents.forEach((e=>{R.delete(e)})),this._reset()}}function P(e,t,i){return w.add(e),e}function N(e,t,i){return e.resources.get(t)||null}function F(e,t){e.resources.set(t.lid,t)
let i=e.resourcesByType[t.type]
i||(i={lid:new Map,id:new Map},e.resourcesByType[t.type]=i),i.lid.set(t.lid,t),t.id&&i.id.set(t.id,t)}class I{constructor(e,t){f(this,"___token",void 0),f(this,"___identifier",void 0),this.store=e,this.___identifier=t,this.___token=e.notifications.subscribe(t,((e,t,i)=>{("identity"===t||"attributes"===t&&"id"===i)&&this._ref++}))}destroy(){this.store.notifications.unsubscribe(this.___token)}get type(){return this.identifier().type}id(){return this._ref,this.___identifier.id}identifier(){return this.___identifier}remoteType(){return"identity"}push(e){return Promise.resolve(e).then((e=>this.store.push(e)))}value(){return this.store.peekRecord(this.___identifier)}load(){const e=this.id()
if(null!==e)return this.store.findRecord(this.type,e)}reload(){const e=this.id()
if(null!==e)return this.store.findRecord(this.type,e,{reload:!0})}}(0,l.sg)(I.prototype,"_ref")
class ${constructor(e){this._store=e,this._willNotify=!1,this._pendingNotifies=new Map}get identifierCache(){return this._store.identifierCache}_scheduleNotification(e,t){let i=this._pendingNotifies.get(e)
i||(i=new Set,this._pendingNotifies.set(e,i)),i.add(t),!0!==this._willNotify&&(this._willNotify=!0,this._store._cbs?this._store._schedule("notify",(()=>this._flushNotifications())):this._flushNotifications())}_flushNotifications(){if(!1===this._willNotify)return
const e=this._pendingNotifies
this._pendingNotifies=new Map,this._willNotify=!1,e.forEach(((e,t)=>{e.forEach((e=>{this._store.notifications.notify(t,"relationships",e)}))}))}notifyChange(e,t,i){"relationships"===t&&i?this._scheduleNotification(e,i):this._store.notifications.notify(e,t,i)}get schema(){return this._store.schema}setRecordId(e,t){this._store._instanceCache.setRecordId(e,t)}hasRecord(e){return Boolean(this._store._instanceCache.peek(e))}disconnectRecord(e){this._store._instanceCache.disconnect(e),this._pendingNotifies.delete(e)}}$.prototype.getSchemaDefinitionService=function(){return this._store.schema}
const z=(0,n.L1)("CacheForIdentifierCache",new Map)
function x(e,t){z.set(e,t)}function L(e){z.delete(e)}function B(e){return z.has(e)?z.get(e):null}const U=(0,n.L1)("RecordCache",new Map)
function V(e){return U.get(e)}function H(e){return U.get(e)}function W(e,t){U.set(e,t)}const K=(0,n.L1)("StoreMap",new Map)
function G(e){return K.get(e)}class J{constructor(e){f(this,"__instances",{record:new Map,reference:new WeakMap}),this.store=e,this._storeWrapper=new $(this.store),e.identifierCache.__configureMerge(((e,t,i)=>{let r=e
e.id!==t.id?r="id"in i&&e.id===i.id?e:t:e.type!==t.type&&(r="type"in i&&e.type===i.type?e:t)
const s=e===r?t:e,n=this.__instances.record.has(r),o=this.__instances.record.has(s)
if(n&&o&&"id"in i)throw new Error(`Failed to update the 'id' for the RecordIdentifier '${e.type}:${String(e.id)} (${e.lid})' to '${String(i.id)}', because that id is already in use by '${t.type}:${String(t.id)} (${t.lid})'`)
return this.store.cache.patch({op:"mergeIdentifiers",record:s,value:r}),this.unloadRecord(s),r}))}peek(e){return this.__instances.record.get(e)}getRecord(e,t){let i=this.__instances.record.get(e)
if(!i){const r=this.store.cache
x(e,r),i=this.store.instantiateRecord(e,t||{}),W(i,e),x(i,r),K.set(i,this.store),this.__instances.record.set(e,i)}return i}getReference(e){const t=this.__instances.reference
let i=t.get(e)
return i||(i=new I(this.store,e),t.set(e,i)),i}recordIsLoaded(e,t=!1){const i=this.cache
if(!i)return!1
const r=i.isNew(e),s=i.isEmpty(e)
return r?!i.isDeleted(e):!(t&&i.isDeletionCommitted(e)||s)}disconnect(e){this.__instances.record.get(e),this.store._graph?.remove(e),this.store.identifierCache.forgetRecordIdentifier(e),L(e),this.store._requestCache._clearEntries(e)}unloadRecord(e){this.store._join((()=>{const t=this.__instances.record.get(e),i=this.cache
t&&(this.store.teardownRecord(t),this.__instances.record.delete(e),K.delete(t),U.delete(t),L(t)),i?(i.unloadRecord(e),L(e)):this.disconnect(e),this.store._requestCache._clearEntries(e)}))}clear(e){const t=this.store.identifierCache._cache
if(void 0===e)t.resources.forEach((e=>{this.unloadRecord(e)}))
else{const i=t.resourcesByType,r=i[e]?.lid
r&&r.forEach((e=>{this.unloadRecord(e)}))}}setRecordId(e,t){const{type:i,lid:s}=e,n=e.id
null===n||null!==t?(this.store.identifierCache.peekRecordIdentifier({type:i,id:t}),null===e.id&&this.store.identifierCache.updateRecordIdentifier(e,{type:i,id:t}),this.store.notifications.notify(e,"identity")):(0,r.warn)(`Your ${i} record was saved to the server, but the response does not have an id.`,!(null!==n&&null===t))}}function Y(e,t){return"string"==typeof e||"number"==typeof e?{type:t,id:y(e)}:H(e)}const Z=(0,n.L1)("AvailableShims",new WeakMap)
class X{constructor(e,t){this.__store=e,this.modelName=t}get fields(){const e=new Map
return this.__store.schema.fields({type:this.modelName}).forEach(((t,i)=>{"attribute"!==t.kind&&"belongsTo"!==t.kind&&"hasMany"!==t.kind||e.set(i,t.kind)})),e}get attributes(){const e=new Map
return this.__store.schema.fields({type:this.modelName}).forEach(((t,i)=>{"attribute"===t.kind&&e.set(i,t)})),e}get relationshipsByName(){const e=new Map
return this.__store.schema.fields({type:this.modelName}).forEach(((t,i)=>{"belongsTo"!==t.kind&&"hasMany"!==t.kind||e.set(i,t)})),e}eachAttribute(e,t){this.__store.schema.fields({type:this.modelName}).forEach(((i,r)=>{"attribute"===i.kind&&e.call(t,r,i)}))}eachRelationship(e,t){this.__store.schema.fields({type:this.modelName}).forEach(((i,r)=>{"belongsTo"!==i.kind&&"hasMany"!==i.kind||e.call(t,r,i)}))}eachTransformedAttribute(e,t){this.__store.schema.fields({type:this.modelName}).forEach(((i,r)=>{if("attribute"===i.kind){const s=i.type
s&&e.call(t,r,s)}}))}}const Q=new Set(["added","removed","state","updated","invalidated"])
function ee(e){return Q.has(e)}function te(){return!!c._backburner.currentInstance&&!0!==c._backburner._autorun}class ie{constructor(e){this.store=e,this.isDestroyed=!1,this._buffered=new Map,this._hasFlush=!1,this._cache=new Map,this._tokens=new Map}subscribe(e,t){let i=this._cache.get(e)
i||(i=new Map,this._cache.set(e,i))
const r={}
return i.set(r,t),this._tokens.set(r,e),r}unsubscribe(e){this.isDestroyed||function(e,t,i){const r=e.get(t)
if(r){e.delete(t)
const s=i.get(r)
s?.delete(t)}}(this._tokens,e,this._cache)}notify(e,t,i){if(!k(e)&&!S(e))return!1
const r=Boolean(this._cache.get(e)?.size)
if(ee(t)||r){let r=this._buffered.get(e)
r||(r=[],this._buffered.set(e,r)),r.push([t,i]),this._scheduleNotify()}return r}_onNextFlush(e){this._onFlushCB=e}_scheduleNotify(){const e=this.store._enableAsyncFlush
this._hasFlush&&!1!==e&&!te()||(!e||te()?this._flush():this._hasFlush=!0)}_flush(){const e=this._buffered
e.size&&(this._buffered=new Map,e.forEach(((e,t)=>{e.forEach((e=>{this._flushNotification(t,e[0],e[1])}))}))),this._hasFlush=!1,this._onFlushCB?.(),this._onFlushCB=void 0}_flushNotification(e,t,i){if(ee(t)){const i=this._cache.get(S(e)?"document":"resource")
i&&i.forEach((i=>{i(e,t)}))}const r=this._cache.get(e)
return!(!r||!r.size||(r.forEach((r=>{r(e,t,i)})),0))}destroy(){this.isDestroyed=!0,this._tokens.clear(),this._cache.clear()}}const re=Proxy
var se=Object.defineProperty;((e,t)=>{for(var i in t)se(e,i,{get:t[i],enumerable:!0})})({},{c:()=>he,f:()=>oe,g:()=>ae,i:()=>de,m:()=>le,n:()=>ce,p:()=>ue})
var ne=new WeakMap
function oe(e,t,i,r){return ae(e.prototype,t,i,r)}function ae(e,t,i,r){let s={configurable:!0,enumerable:!0,writable:!0,initializer:null}
r&&(s.initializer=r)
for(let n of i)s=n(e,t,s)||s
void 0===s.initializer?Object.defineProperty(e,t,s):function(e,t,i){let r=ne.get(e)
r||(r=new Map,ne.set(e,r)),r.set(t,i)}(e,t,s)}function le({prototype:e},t,i){return ce(e,t,i)}function ce(e,t,i){let r={...Object.getOwnPropertyDescriptor(e,t)}
for(let s of i)r=s(e,t,r)||r
void 0!==r.initializer&&(r.value=r.initializer?r.initializer.call(e):void 0,r.initializer=void 0),Object.defineProperty(e,t,r)}function de(e,t){let i=function(e,t){let i=e.prototype
for(;i;){let e=ne.get(i)?.get(t)
if(e)return e
i=i.prototype}}(e.constructor,t)
i&&Object.defineProperty(e,t,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(e):void 0})}function he(e,t){return t.reduce(((e,t)=>t(e)||e),e)}function ue(e,t){for(let[i,r,s]of t)"field"===i?fe(e,r,s):ce(e,r,s)
return e}function fe(e,t,i){let r={configurable:!0,enumerable:!0,writable:!0,initializer:()=>Object.getOwnPropertyDescriptor(e,t)?.value}
for(let s of i)r=s(e,t,r)||r
r.initializer&&(r.value=r.initializer.call(e),delete r.initializer),Object.defineProperty(e,t,r)}const pe=new Set([Symbol.iterator,"concat","entries","every","fill","filter","find","findIndex","flat","flatMap","forEach","includes","indexOf","join","keys","lastIndexOf","map","reduce","reduceRight","slice","some","values"]),ye=new Set(["push","pop","unshift","shift","splice","sort"]),me=new Set(["[]","length","links","meta"])
function ge(e){return pe.has(e)}function _e(e,t){return t in e}const be=(0,n.L1)("#signal",Symbol("#signal")),ve=(0,n.L1)("#source",Symbol("#source")),we=(0,n.L1)("#update",Symbol("#update")),Re=(0,n.L1)("#notify",Symbol("#notify")),ke=(0,n.L1)("IS_COLLECTION",Symbol.for("Collection"))
function Se(e){(0,l.RH)(e[be])}function Ae(e){if("symbol"==typeof e)return null
const t=Number(e)
return isNaN(t)?null:t%1==0?t:null}class Me{[Re](){Se(this)}destroy(e){this.isDestroying=!e,this[ve].length=0,this[Re](),this.isDestroyed=!e}get length(){return this[ve].length}set length(e){this[ve].length=e}constructor(e){f(this,"isLoaded",!0),f(this,"isDestroying",!1),f(this,"isDestroyed",!1),f(this,"_updatingPromise",null),f(this,ke,!0),f(this,ve,void 0)
const t=this
this.modelName=e.type,this.store=e.store,this._manager=e.manager,this[ve]=e.identifiers,this[be]=(0,l.n5)(this,"length")
const i=e.store,r=new Map,s=this[be],n={links:e.links||null,meta:e.meta||null}
let o=!1
const a=new re(this[ve],{get(a,c,d){const h=Ae(c)
if(s.shouldReset&&(null!==h||me.has(c)||ge(c))&&(e.manager._syncArray(d),s.t=!1,s.shouldReset=!1),null!==h){const e=a[h]
return o||(0,l.B1)(s),e&&i._instanceCache.getRecord(e)}if("meta"===c)return(0,l.B1)(s),n.meta
if("links"===c)return(0,l.B1)(s),n.links
if("[]"===c)return(0,l.B1)(s),d
if(ge(c)){let e=r.get(c)
return void 0===e&&(e="forEach"===c?function(){(0,l.B1)(s),o=!0
const e=function(e,t,i,r,s){void 0===s&&(s=null)
const n=(t=t.slice()).length
for(let o=0;o<n;o++)r.call(s,i._instanceCache.getRecord(t[o]),o,e)
return e}(d,a,i,arguments[0],arguments[1])
return o=!1,e}:function(){(0,l.B1)(s),o=!0
const e=Reflect.apply(a[c],d,arguments)
return o=!1,e},r.set(c,e)),e}if(function(e){return ye.has(e)}(c)){let i=r.get(c)
return void 0===i&&(i=function(){if(!e.allowMutation)return
const i=Array.prototype.slice.call(arguments)
o=!0
const r=t[we](a,d,c,i,s)
return o=!1,r},r.set(c,i)),i}if(_e(t,c)){if(c===Re||c===be||c===ve)return t[c]
let e=r.get(c)
if(e)return e
const i=t[c]
return"function"==typeof i?(e=function(){return(0,l.B1)(s),Reflect.apply(i,d,arguments)},r.set(c,e),e):((0,l.B1)(s),i)}return a[c]},set(i,r,a,l){if("length"===r){if(!o&&0===a)return o=!0,t[we](i,l,"length 0",[],s),o=!1,!0
if(o)return Reflect.set(i,r,a)}if("links"===r)return n.links=a||null,!0
if("meta"===r)return n.meta=a||null,!0
const c=Ae(r)
if(null===c||c>i.length){if(null!==c&&o){const e=H(a)
return i[c]=e,!0}return!!_e(t,r)&&(t[r]=a,!0)}if(!e.allowMutation)return!1
const d=i[c],h=(u=a)?H(u):null
var u
return i[c]=h,o?i[c]=h:t[we](i,l,"replace cell",[c,d,h],s),!0},deleteProperty:(e,t)=>!!o&&Reflect.deleteProperty(e,t),getPrototypeOf:()=>Me.prototype})
return(0,l.zs)(a,s),this[Re]=this[Re].bind(a),a}update(){if(this.isUpdating)return this._updatingPromise
this.isUpdating=!0
const e=this._update()
return e.finally((()=>{this._updatingPromise=null,this.isDestroying||this.isDestroyed||(this.isUpdating=!1)})),this._updatingPromise=e,e}_update(){return this.store.findAll(this.modelName,{reload:!0})}save(){return Promise.all(this.map((e=>this.store.saveRecord(e)))).then((()=>this))}}ce(Me.prototype,"length",[d.Vv])
const Ce={enumerable:!0,configurable:!1,get:function(){return this}};(0,d.Vv)(Ce),Object.defineProperty(Me.prototype,"[]",Ce),(0,l.sg)(Me.prototype,"isUpdating",!1)
class Ee extends Me{constructor(e){super(e),f(this,"query",null),this.query=e.query||null,this.isLoaded=e.isLoaded||!1}_update(){const{store:e,query:t}=this
return e.query(this.modelName,t,{_recordArray:this})}destroy(e){super.destroy(e),this._manager._managed.delete(this),this._manager._pending.delete(this)}}Ee.prototype.query=null
const Te=(0,n.L1)("FAKE_ARR",{}),Oe=1200
function qe(e,t){let i=0
const r=t.length
for(;r-i>Oe;)e.push.apply(e,t.slice(i,i+Oe)),i+=Oe
e.push.apply(e,t.slice(i))}class De{constructor(e){this.store=e.store,this.isDestroying=!1,this.isDestroyed=!1,this._live=new Map,this._managed=new Set,this._pending=new Map,this._staged=new Map,this._keyedArrays=new Map,this._identifiers=new Map,this._set=new Map,this._visibilitySet=new Map,this._subscription=this.store.notifications.subscribe("resource",((e,t)=>{"added"===t?(this._visibilitySet.set(e,!0),this.identifierAdded(e)):"removed"===t?(this._visibilitySet.set(e,!1),this.identifierRemoved(e)):"state"===t&&this.identifierChanged(e)}))}_syncArray(e){const t=this._pending.get(e)
!t||this.isDestroying||this.isDestroyed||(function(e,t,i){const r=e[ve],s=[],n=[]
t.forEach(((e,t)=>{if("add"===e){if(i.has(t))return
s.push(t),i.add(t)}else i.has(t)&&(n.push(t),i.delete(t))})),n.length&&(n.length===r.length?r.length=0:n.forEach((e=>{const t=r.indexOf(e);-1!==t&&(r.splice(t,1),i.delete(e))}))),s.length&&qe(r,s)}(e,t,this._set.get(e)),this._pending.delete(e))}liveArrayFor(e){let t=this._live.get(e)
const i=[],r=this._staged.get(e)
return r&&(r.forEach(((e,t)=>{"add"===e&&i.push(t)})),this._staged.delete(e)),t||(t=new Me({type:e,identifiers:i,store:this.store,allowMutation:!1,manager:this}),this._live.set(e,t),this._set.set(t,new Set(i))),t}createArray(e){const t={type:e.type,links:e.doc?.links||null,meta:e.doc?.meta||null,query:e.query||null,identifiers:e.identifiers||[],isLoaded:!!e.identifiers?.length,allowMutation:!1,store:this.store,manager:this},i=new Ee(t)
return this._managed.add(i),this._set.set(i,new Set(t.identifiers||[])),e.identifiers&&je(this._identifiers,i,e.identifiers),i}dirtyArray(e,t){if(e===Te)return
const i=e[be]
i.shouldReset?t>0&&!i.t&&(0,l.Fe)(e[Re]):(i.shouldReset=!0,(0,l.Fe)(e[Re]))}_getPendingFor(e,t,i){if(this.isDestroying||this.isDestroyed)return
const r=this._live.get(e.type),s=this._pending,n=new Map
if(t){const t=this._identifiers.get(e)
t&&t.forEach((e=>{let t=s.get(e)
t||(t=new Map,s.set(e,t)),n.set(e,t)}))}if(r&&0===r[ve].length&&i){const e=s.get(r)
if(!e||0===e.size)return n}if(r){let e=s.get(r)
e||(e=new Map,s.set(r,e)),n.set(r,e)}else{let t=this._staged.get(e.type)
t||(t=new Map,this._staged.set(e.type,t)),n.set(Te,t)}return n}populateManagedArray(e,t,i){this._pending.delete(e)
const r=e[ve],s=r.slice()
r.length=0,qe(r,t),this._set.set(e,new Set(t)),Se(e),e.meta=i.meta||null,e.links=i.links||null,e.isLoaded=!0,function(e,t,i){for(let r=0;r<i.length;r++)Pe(e,t,i[r])}(this._identifiers,e,s),je(this._identifiers,e,t)}identifierAdded(e){const t=this._getPendingFor(e,!1)
t&&t.forEach(((t,i)=>{"del"===t.get(e)?t.delete(e):(t.set(e,"add"),this.dirtyArray(i,t.size))}))}identifierRemoved(e){const t=this._getPendingFor(e,!0,!0)
t&&t.forEach(((t,i)=>{"add"===t.get(e)?t.delete(e):(t.set(e,"del"),this.dirtyArray(i,t.size))}))}identifierChanged(e){const t=this.store._instanceCache.recordIsLoaded(e,!0)
this._visibilitySet.get(e)!==t&&(t?this.identifierAdded(e):this.identifierRemoved(e))}clear(e=!0){this._live.forEach((t=>t.destroy(e))),this._managed.forEach((t=>t.destroy(e))),this._managed.clear(),this._identifiers.clear(),this._pending.clear(),this._set.forEach((e=>e.clear())),this._visibilitySet.clear()}destroy(){this.isDestroying=!0,this.clear(!1),this._live.clear(),this.isDestroyed=!0,this.store.notifications.unsubscribe(this._subscription)}}function je(e,t,i){for(let r=0;r<i.length;r++){const s=i[r]
let n=e.get(s)
n||(n=new Set,e.set(s,n)),n.add(t)}}function Pe(e,t,i){const r=e.get(i)
r&&r.delete(t)}const Ne=(0,n.L1)("Touching",Symbol("touching")),Fe=(0,n.L1)("RequestPromise",Symbol("promise")),Ie=[]
class $e{constructor(e){f(this,"_pending",new Map),f(this,"_done",new Map),f(this,"_subscriptions",new Map),f(this,"_toFlush",[]),f(this,"_store",void 0),this._store=e}_clearEntries(e){this._done.delete(e)}_enqueue(e,t){const i=t.data[0]
if("recordIdentifier"in i){const r=i.recordIdentifier,s="saveRecord"===i.op?"mutation":"query"
this._pending.has(r)||this._pending.set(r,[])
const n={state:"pending",request:t,type:s}
return n[Ne]=[i.recordIdentifier],n[Fe]=e,this._pending.get(r).push(n),this._triggerSubscriptions(n),e.then((e=>{this._dequeue(r,n)
const i={state:"fulfilled",request:t,type:s,response:{data:e}}
return i[Ne]=n[Ne],this._addDone(i),this._triggerSubscriptions(i),e}),(e=>{this._dequeue(r,n)
const i={state:"rejected",request:t,type:s,response:{data:e}}
throw i[Ne]=n[Ne],this._addDone(i),this._triggerSubscriptions(i),e}))}}_triggerSubscriptions(e){"pending"!==e.state?(this._toFlush.push(e),1===this._toFlush.length&&this._store.notifications._onNextFlush((()=>{this._flush()}))):this._flushRequest(e)}_flush(){this._toFlush.forEach((e=>{this._flushRequest(e)})),this._toFlush=[]}_flushRequest(e){e[Ne].forEach((t=>{const i=this._subscriptions.get(t)
i&&i.forEach((t=>t(e)))}))}_dequeue(e,t){const i=this._pending.get(e)
this._pending.set(e,i.filter((e=>e!==t)))}_addDone(e){e[Ne].forEach((t=>{const i=e.request.data[0].op
let r=this._done.get(t)
r&&(r=r.filter((e=>{let t
return t=Array.isArray(e.request.data)?e.request.data[0]:e.request.data,t.op!==i}))),r=r||[],r.push(e),this._done.set(t,r)}))}subscribeForRecord(e,t){let i=this._subscriptions.get(e)
i||(i=[],this._subscriptions.set(e,i)),i.push(t)}getPendingRequestsForRecord(e){return this._pending.get(e)||Ie}getLastRequestForRecord(e){const t=this._done.get(e)
return t?t[t.length-1]:null}}function ze(e){return Boolean(e&&"string"==typeof e)}function xe(e,t,i){if("object"==typeof e&&null!==e){const t=e
return k(t)||"id"in t&&(t.id=p(t.id)),t}{const r=p(t)
if(!ze(r)){if(ze(i))return{lid:i}
throw new Error("Expected either id or lid to be a valid string")}return ze(i)?{type:e,id:r,lid:i}:{type:e,id:r}}}const Le=class{constructor(e){}},Be=Le
Be!==Le&&(0,r.deprecate)("The Store class extending from EmberObject is deprecated.\nPlease remove usage of EmberObject APIs and mark your class as not requiring it.\n\nTo mark the class as no longer extending from EmberObject, in ember-cli-build.js\nset the following config:\n\n```js\nconst app = new EmberApp(defaults, {\n  emberData: {\n    deprecations: {\n      DEPRECATE_STORE_EXTENDS_EMBER_OBJECT: false\n    }\n  }\n});\n```\n",!1,{id:"ember-data:deprecate-store-extends-ember-object",until:"6.0",for:"ember-data",since:{available:"5.4",enabled:"5.4"}})
class Ue extends Be{get schema(){return this._schema||(this._schema=this.createSchemaService()),this._schema}get isDestroying(){return this._isDestroying}set isDestroying(e){this._isDestroying=e}get isDestroyed(){return this._isDestroyed}set isDestroyed(e){this._isDestroyed=e}constructor(e){super(e),Object.assign(this,e),this.identifierCache=new j,this.notifications=new ie(this),this.recordArrayManager=new De({store:this}),this._requestCache=new $e(this),this._instanceCache=new J(this),this._documentCache=new Map,this.isDestroying=!1,this.isDestroyed=!1}_run(e){const t=this._cbs={}
e(),t.coalesce&&t.coalesce(),t.sync&&t.sync(),t.notify&&t.notify(),this._cbs=null}_join(e){this._cbs?e():this._run(e)}_schedule(e,t){this._cbs[e]=t}getRequestStateService(){return this._requestCache}_getAllPending(){}request(e){const t={store:this,[s._q]:!0}
if(e.records){const i=this.identifierCache
t.records=e.records.map((e=>i.getOrCreateRecordIdentifier(e)))}const i=Object.assign({},e,t),r=this.requestManager.request(i)
return r.onFinalize((()=>{("findBelongsTo"!==e.op||e.url)&&this.notifications._flush()})),r}modelFor(e){return function(e,t){let i=Z.get(e)
i||(i=Object.create(null),Z.set(e,i))
let r=i[t]
return void 0===r&&(r=i[t]=new X(e,t)),r}(this,e)}createRecord(e,t){let i
return this._join((()=>{const r=m(e),s={...t}
let n=null
if(null===s.id||void 0===s.id){const e=this.adapterFor?.(r,!0)
n=e&&e.generateIdForRecord?s.id=p(e.generateIdForRecord(this,r,s)):s.id=null}else n=s.id=p(s.id)
const o={type:r,id:n}
o.id&&this.identifierCache.peekRecordIdentifier(o)
const a=this.identifierCache.createIdentifierForNewRecord(o),l=this.cache,c=function(e,t,i){if(void 0!==i){const{type:r}=t,s=e.schema.fields({type:r})
if(s.size){const e=Object.keys(i)
for(let t=0;t<e.length;t++){const r=e[t],n=s.get(r)
n&&("hasMany"===n.kind?i[r]=i[r].map((e=>He(e))):"belongsTo"===n.kind&&(i[r]=He(i[r])))}}}return i}(this,a,s),d=l.clientDidCreate(a,c)
i=this._instanceCache.getRecord(a,d)})),i}deleteRecord(e){const t=V(e),i=this.cache
this._join((()=>{i.setIsDeleted(t,!0),i.isNew(t)&&this._instanceCache.unloadRecord(t)}))}unloadRecord(e){const t=V(e)
t&&this._instanceCache.unloadRecord(t)}findRecord(e,t,i){Ve(e)?i=t:e=xe(m(e),y(t))
const r=this.identifierCache.getOrCreateRecordIdentifier(e)
return(i=i||{}).preload&&(this._instanceCache.recordIsLoaded(r)||(i.reload=!0),this._join((()=>{!function(e,t,i){const r={},s=e.schema.fields(t)
Object.keys(i).forEach((e=>{const t=i[e],n=s.get(e)
!n||"hasMany"!==n.kind&&"belongsTo"!==n.kind?(r.attributes||(r.attributes={}),r.attributes[e]=t):(r.relationships||(r.relationships={}),r.relationships[e]=function(e,t){const i=e.type
return"hasMany"===e.kind?{data:t.map((e=>Y(e,i)))}:{data:t?Y(t,i):null}}(n,t))}))
const n=e.cache,o=Boolean(e._instanceCache.peek(t))
n.upsert(t,r,o)}(this,r,i.preload)}))),this.request({op:"findRecord",data:{record:r,options:i},cacheOptions:{[s.ER]:!0}}).then((e=>e.content))}getReference(e,t){let i
i=1===arguments.length&&Ve(e)?e:xe(m(e),y(t))
const r=this.identifierCache.getOrCreateRecordIdentifier(i)
return this._instanceCache.getReference(r)}peekRecord(e,t){if(1===arguments.length&&Ve(e)){const t=this.identifierCache.peekRecordIdentifier(e)
return t&&this._instanceCache.recordIsLoaded(t)?this._instanceCache.getRecord(t):null}const i={type:m(e),id:y(t)},r=this.identifierCache.peekRecordIdentifier(i)
return r&&this._instanceCache.recordIsLoaded(r)?this._instanceCache.getRecord(r):null}query(e,t,i={}){return this.request({op:"query",data:{type:m(e),query:t,options:i},cacheOptions:{[s.ER]:!0}}).then((e=>e.content))}queryRecord(e,t,i){return this.request({op:"queryRecord",data:{type:m(e),query:t,options:i||{}},cacheOptions:{[s.ER]:!0}}).then((e=>e.content))}findAll(e,t={}){return this.request({op:"findAll",data:{type:m(e),options:t||{}},cacheOptions:{[s.ER]:!0}}).then((e=>e.content))}peekAll(e){return this.recordArrayManager.liveArrayFor(m(e))}unloadAll(e){this._join((()=>{void 0===e?(this._graph?.identifiers.clear(),this.recordArrayManager.clear(),this._instanceCache.clear()):this._instanceCache.clear(m(e))}))}push(e){const t=this._push(e,!1)
return Array.isArray(t)?t.map((e=>this._instanceCache.getRecord(e))):null===t?null:this._instanceCache.getRecord(t)}_push(e,t){let i
return t&&(this._enableAsyncFlush=!0),this._join((()=>{i=this.cache.put({content:e})})),this._enableAsyncFlush=null,"data"in i?i.data:null}saveRecord(e,t={}){const i=H(e),r=this.cache
if(!i)return Promise.reject(new Error("Record Is Disconnected"))
if(function(e,t){const i=e.cache
return!i||function(e,t){return t.isDeletionCommitted(e)||t.isNew(e)&&t.isDeleted(e)}(t,i)}(this._instanceCache,i))return Promise.resolve(e)
t||(t={})
let n="updateRecord"
r.isNew(i)?n="createRecord":r.isDeleted(i)&&(n="deleteRecord")
const o={op:n,data:{options:t,record:i},records:[i],cacheOptions:{[s.ER]:!0}}
return this.request(o).then((e=>e.content))}get cache(){let{cache:e}=this._instanceCache
return e||(e=this._instanceCache.cache=this.createCache(this._instanceCache._storeWrapper)),e}destroy(){this.isDestroyed||(this.isDestroying=!0,this._graph?.destroy(),this._graph=void 0,this.notifications.destroy(),this.recordArrayManager.destroy(),this.identifierCache.destroy(),this.unloadAll(),this.isDestroyed=!0)}static create(e){return new this(e)}}function Ve(e){return Boolean(null!==e&&"object"==typeof e&&("id"in e&&"type"in e&&e.id&&e.type||e.lid))}function He(e){return e?H(e):null}function We(e){return"string"==typeof e?e:e.href}Ue.prototype.getSchemaDefinitionService=function(){return(0,r.deprecate)("Use `store.schema` instead of `store.getSchemaDefinitionService()`",!1,{id:"ember-data:schema-service-updates",until:"5.0",for:"ember-data",since:{available:"5.4",enabled:"5.4"}}),this._schema},Ue.prototype.registerSchemaDefinitionService=function(e){(0,r.deprecate)("Use `store.createSchemaService` instead of `store.registerSchemaDefinitionService()`",!1,{id:"ember-data:schema-service-updates",until:"5.0",for:"ember-data",since:{available:"5.4",enabled:"5.4"}}),this._schema=e},Ue.prototype.registerSchema=function(e){(0,r.deprecate)("Use `store.createSchemaService` instead of `store.registerSchema()`",!1,{id:"ember-data:schema-service-updates",until:"5.0",for:"ember-data",since:{available:"5.4",enabled:"5.4"}}),this._schema=e}
var Ke=new WeakMap,Ge=new WeakSet
class Je{constructor(e,t){var i
h(this,i=Ge),i.add(this),function(e,t,i){h(e,t),t.set(e,void 0)}(this,Ke),function(e,t,i){e.set(u(e,t),i)}(Ke,this,e),this.identifier=t}fetch(e={}){return e.cacheOptions=e.cacheOptions||{},e.cacheOptions.key=this.identifier?.lid,u(Ge,this,Ye).call(this,this.links.related?"related":"self",e)}next(e={}){return u(Ge,this,Ye).call(this,"next",e)}prev(e={}){return u(Ge,this,Ye).call(this,"prev",e)}first(e={}){return u(Ge,this,Ye).call(this,"first",e)}last(e={}){return u(Ge,this,Ye).call(this,"last",e)}toJSON(){const e={}
return e.identifier=this.identifier,void 0!==this.data&&(e.data=this.data),void 0!==this.links&&(e.links=this.links),void 0!==this.errors&&(e.errors=this.errors),void 0!==this.meta&&(e.meta=this.meta),e}}async function Ye(e,t){const i=this.links?.[e]
return i?(t.method=t.method||"GET",Object.assign(t,{url:We(i)}),(await(r=Ke,this,r.get(u(r,this))).request(t)).content):null
var r}(0,l.sg)(Je.prototype,"data"),(0,l.sg)(Je.prototype,"links"),(0,l.sg)(Je.prototype,"errors"),(0,l.sg)(Je.prototype,"meta")
const Ze=new Set(["createRecord","updateRecord","deleteRecord"])
function Xe(e){return Boolean(e.op&&Ze.has(e.op))}function Qe(e,t){"links"in t&&(e.links=t.links),"meta"in t&&(e.meta=t.meta),"errors"in t&&(e.errors=t.errors)}function et(e){const t=function(e){return e instanceof AggregateError||"AggregateError"===e.name&&Array.isArray(e.errors)}(e),i=t?new AggregateError(structuredClone(e.errors),e.message):new Error(e.message)
return i.stack=e.stack,i.error=e.error,Object.assign(i,e),i}function tt(e,t,i){if(e){const i=t.get(e)
if(i)return i.priority}return i}const it={request(e,t){if(!e.request.store||e.request.cacheOptions?.[s.ER])return t(e.request)
const{store:i}=e.request,r=i.identifierCache.getOrCreateDocumentIdentifier(e.request)
r&&e.setIdentifier(r)
const n=i.requestManager._deduped,o=r&&n.get(r),a=r?i.cache.peekRequest(r):null
if(function(e,t,i,r){const{cacheOptions:s}=t
return t.op&&Ze.has(t.op)||s?.reload||!i||!(!e.lifetimes||!r)&&e.lifetimes.isHardExpired(r,e)}(i,e.request,!!a,r)){if(o)return o.priority={blocking:!0},o.promise
let s=nt(t,e,r,{blocking:!0})
return r&&(s=s.finally((()=>{n.delete(r),i.notifications.notify(r,"state")})),n.set(r,{priority:{blocking:!0},promise:s}),i.notifications.notify(r,"state")),s}if(function(e,t,i,r){const{cacheOptions:s}=t
return s?.backgroundReload||!(!e.lifetimes||!r)&&e.lifetimes.isSoftExpired(r,e)}(i,e.request,0,r)){let s=o?.promise||nt(t,e,r,{blocking:!1})
r&&!o&&(s=s.finally((()=>{n.delete(r),i.notifications.notify(r,"state")})),n.set(r,{priority:{blocking:!1},promise:s}),i.notifications.notify(r,"state")),i.requestManager._pending.set(e.id,s)}const l=e.request[s._q]||!1
if(e.setResponse(a.response),"error"in a){const e=l?st(i,{shouldHydrate:l,identifier:r},a.content,!0):a.content,t=et(a)
throw t.content=e,t}return l?rt(i,e.request,{shouldHydrate:l,identifier:r},a.content,!0):a.content}}
function rt(e,t,i,r,s){const{identifier:n}=i
if(!r)return r
if(Array.isArray(r.data)){const{recordArrayManager:o}=e
if(!n){if(!i.shouldHydrate)return r
const s=o.createArray({type:t.url,identifiers:r.data,doc:r,query:t}),n=new Je(e,null)
return n.data=s,n.meta=r.meta,n.links=r.links,n}let a=o._keyedArrays.get(n.lid)
if(a){const t=e._documentCache.get(n)
return s||(o.populateManagedArray(a,r.data,r),t.data=a,t.meta=r.meta,t.links=r.links),i.shouldHydrate?t:r}{a=o.createArray({type:n.lid,identifiers:r.data,doc:r}),o._keyedArrays.set(n.lid,a)
const t=new Je(e,n)
return t.data=a,t.meta=r.meta,t.links=r.links,e._documentCache.set(n,t),i.shouldHydrate?t:r}}{if(!n&&!i.shouldHydrate)return r
const t=r.data?e.peekRecord(r.data):null
let o
return n&&(o=e._documentCache.get(n)),o?s||(o.data=t,Qe(o,r)):(o=new Je(e,n),o.data=t,Qe(o,r),n&&e._documentCache.set(n,o)),i.shouldHydrate?o:r}}function st(e,t,i,r){const{identifier:s}=t
if(!function(e){return"errors"in e}(i)||!s&&!t.shouldHydrate)return i
let n
return s&&(n=e._documentCache.get(s)),n?r||(n.data=void 0,Qe(n,i)):(n=new Je(e,s),Qe(n,i),s&&e._documentCache.set(s,n)),t.shouldHydrate?n:i}function nt(e,t,i,r){const{store:n}=t.request,o={shouldHydrate:t.request[s._q]||!1,identifier:i,priority:r}
let a=!1
if(Xe(t.request)){a=!0
const e=t.request.data?.record||t.request.records?.[0]
e&&n.cache.willCommit(e,t)}n.lifetimes?.willRequest&&n.lifetimes.willRequest(t.request,i,n)
const l=e(t.request).then((e=>function(e,t,i,r){const{request:s}=t
let n
if(e.requestManager._pending.delete(t.id),e._enableAsyncFlush=!0,e._join((()=>{n=function(e,t,i,r){let s=null
if(Xe(t)){const i=t.data?.record||t.records?.[0]
i?s=e.cache.didCommit(i,r):function(e){return!Xe(e.request)||("createRecord"===e.request.op&&201===e.response?.status?!!e.content&&Object.keys(e.content).length>0:204!==e.response?.status)}(r)&&(s=e.cache.put(r))}else s=e.cache.put(r)
return rt(e,t,i,s,!1)}(e,s,i,r)})),e._enableAsyncFlush=null,e.lifetimes?.didRequest&&e.lifetimes.didRequest(t.request,r.response,i.identifier,e),tt(i.identifier,e.requestManager._deduped,i.priority).blocking)return n
e.notifications._flush()}(n,t,o,e)),(e=>function(e,t,i,r){if(e.requestManager._pending.delete(t.id),t.request.signal?.aborted)throw r
let s
if(e._enableAsyncFlush=!0,e._join((()=>{s=function(e,t,i,r){let s
if(!Xe(t.request))return s=e.cache.put(r),st(e,i,s,!1)
{const i=r&&r.content&&"object"==typeof r.content&&"errors"in r.content&&Array.isArray(r.content.errors)?r.content.errors:void 0,s=t.request.data?.record||t.request.records?.[0]
e.cache.commitWasRejected(s,i)}}(e,t,i,r)})),e._enableAsyncFlush=null,i.identifier&&e.lifetimes?.didRequest&&e.lifetimes.didRequest(t.request,r.response,i.identifier,e),Xe(t.request))throw r
if(tt(i.identifier,e.requestManager._deduped,i.priority).blocking){const e=et(r)
throw e.content=s,e}e.notifications._flush()}(n,t,o,e)))
if(!a)return l
const c=t.request.data?.record||t.request.records?.[0]
return n._requestCache._enqueue(l,{data:[{op:"saveRecord",recordIdentifier:c,options:void 0}]})}},730:(e,t,i)=>{i.d(t,{Ay:()=>r.S,fV:()=>r.s,lL:()=>r.C,o:()=>r.r})
var r=i(582)
i(603),i(241)},146:(e,t,i)=>{i.d(t,{B1:()=>l,Fe:()=>d,RH:()=>c,V1:()=>y,i$:()=>m,n5:()=>p,sg:()=>u,zs:()=>f})
var r=i(463),s=i(606),n=i(375)
function o(e){e&&(0,s.consumeTag)(e)}function a(e){e&&(0,s.dirtyTag)(e)}function l(e){const t=(0,n.Yj)("TRANSACTION")
t?t.sub.add(e):"tag"in e?(o(e["[]"]),o(e["@length"]),(0,s.consumeTag)(e.tag)):e.ref}function c(e){const t=(0,n.Yj)("TRANSACTION")
t?t.props.add(e):function(e){"tag"in e?(a(e["[]"]),a(e["@length"]),(0,s.dirtyTag)(e.tag)):e.ref=null}(e)}function d(e){const t=(0,n.Yj)("TRANSACTION")
t?t.cbs.add(e):e()}const h=(0,n.L1)("Signals",Symbol("Signals"))
function u(e,t,i){Object.defineProperty(e,t,{enumerable:!0,configurable:!1,get(){const e=this[h]=this[h]||new Map,r=e.has(t),s=function(e,t,i){let r=e.get(i)
return r||(r=p(t,i),e.set(i,r)),l(r),r}(e,this,t)
return r||void 0===i||(s.lastValue=i),s.lastValue},set(e){const i=this[h]=this[h]||new Map
let r=i.get(t)
r||(r=p(this,t),i.set(t,r)),r.lastValue!==e&&(r.lastValue=e,c(r))}})}function f(e,t){t["[]"]=(0,r.tagForProperty)(e,"[]"),t["@length"]=(0,r.tagForProperty)(e,"length")}function p(e,t){return{key:t,tag:(0,r.tagForProperty)(e,t),t:!1,shouldReset:!1,"[]":null,"@length":null,lastValue:void 0}}function y(e,t,i){let r=e[h]
r||(r=new Map,e[h]=r)
let s=r.get(t)
return s||(s=p(e,t),s.shouldReset=i,r.set(t,s)),s}function m(e,t){const i=e[h]
if(i)return i.get(t)}},738:(e,t,i)=>{i.d(t,{PO:()=>n,Vv:()=>s.dependentKeyCompat})
var r=i(217),s=(i(146),i(394))
function n(e,t,i){const s=new WeakMap,n=i.get
i.get=function(){return s.has(this)||s.set(this,(0,r.createCache)(n.bind(this))),(0,r.getValue)(s.get(this))}}},193:(e,t,i)=>{function r(e){return e?.__esModule?e:{default:e,...e}}i.d(t,{A:()=>r})},375:(e,t,i)=>{i.d(t,{L1:()=>l,Yj:()=>c,dN:()=>u,dV:()=>d,ml:()=>f,vs:()=>h})
const r="@warp-drive/core-types",s=globalThis,n=s.__warpDrive_universalCache=s.__warpDrive_universalCache??{}
s[r]=s[r]??{__version:"0.0.0-beta.12"}
const o=s[r],a=o.__warpDrive_ModuleScopedCaches??{}
if(o.__warpDrive_hasOtherCopy)throw new Error("Multiple copies of EmberData detected, the application will malfunction.")
function l(e,t){return t}function c(e){return a[`(transient) ${e}`]??null}function d(e,t){return a[`(transient) ${e}`]=t}function h(e,t){return t}function u(e){return n[`(transient) ${e}`]??null}function f(e,t){return n[`(transient) ${e}`]=t}o.__warpDrive_hasOtherCopy=!0},648:(e,t,i)=>{i.d(t,{ER:()=>s,J6:()=>o,_q:()=>n,k0:()=>a})
var r=i(375)
const s=(0,r.vs)("SkipCache",Symbol.for("wd:skip-cache")),n=(0,r.vs)("EnableHydration",Symbol.for("wd:enable-hydration")),o=(0,r.L1)("IS_FUTURE",Symbol("IS_FUTURE")),a=(0,r.L1)("DOC",Symbol("DOC"))},788:(e,t,i)=>{i.d(t,{k5:()=>n,pm:()=>s})
var r=i(375)
const s=(0,r.L1)("Store",Symbol("Store")),n=(0,r.L1)("$type",Symbol("$type"));(0,r.L1)("RequestSignature",Symbol("RequestSignature"))},922:(e,t,i)=>{i.r(t),i.d(t,{default:()=>gt})
var r=i(151)
const s={iterator:()=>({next:()=>({done:!0,value:void 0})})}
class n{constructor(e){this.version="2",this._capabilities=e,this.__cache=new Map,this.__graph=(0,r.graphFor)(e),this.__destroyedCache=new Map,this.__documents=new Map}put(e){if(b(e))return this._putDocument(e,void 0,void 0)
if(function(e){return!(e instanceof Error)&&e.content&&!("data"in e.content)&&!("included"in e.content)&&"meta"in e.content}(e))return this._putDocument(e,void 0,void 0)
const t=e.content,i=t.included
let r,s
const{identifierCache:n}=this._capabilities
if(i)for(r=0,s=i.length;r<s;r++)i[r]=g(this,n,i[r])
if(Array.isArray(t.data)){s=t.data.length
const o=[]
for(r=0;r<s;r++)o.push(g(this,n,t.data[r]))
return this._putDocument(e,o,i)}if(null===t.data)return this._putDocument(e,null,i)
const o=g(this,n,t.data)
return this._putDocument(e,o,i)}_putDocument(e,t,i){const r=b(e)?function(e){const t={}
return e.content&&(v(t,e.content),"errors"in e.content?t.errors=e.content.errors:"object"==typeof e.error&&"errors"in e.error?t.errors=e.error.errors:t.errors=[{title:e.message}]),t}(e):function(e){const t={},i=e.content
return i&&v(t,i),t}(e)
void 0!==t&&(r.data=t),void 0!==i&&(r.included=i)
const s=e.request,n=s?this._capabilities.identifierCache.getOrCreateDocumentIdentifier(s):null
if(n){r.lid=n.lid,e.content=r
const t=this.__documents.has(n.lid)
this.__documents.set(n.lid,e),this._capabilities.notifyChange(n,t?"updated":"added")}return r}patch(e){if("mergeIdentifiers"===e.op){const t=this.__cache.get(e.record)
t&&(this.__cache.set(e.value,t),this.__cache.delete(e.record)),this.__graph.update(e,!0)}}mutate(e){this.__graph.update(e,!1)}peek(e){if("type"in e){const t=this.__safePeek(e,!1)
if(!t)return null
const{type:i,id:r,lid:s}=e,n=Object.assign({},t.remoteAttrs,t.inflightAttrs,t.localAttrs),o={},a=this.__graph.identifiers.get(e)
a&&Object.keys(a).forEach((t=>{a[t].definition.isImplicit||(o[t]=this.__graph.getData(e,t))})),this._capabilities
const c=this._capabilities._store
return this._capabilities.schema.fields(e).forEach(((t,i)=>{if(i in n&&void 0!==n[i])return
const r=l(t,e,c)
void 0!==r&&(n[i]=r)})),{type:i,id:r,lid:s,attributes:n,relationships:o}}const t=this.peekRequest(e)
return t&&"content"in t?t.content:null}peekRequest(e){return this.__documents.get(e.lid)||null}upsert(e,t,i){let r
const s=this.__safePeek(e,!1),n=!!s,o=s||this._createCache(e),a=function(e,t,i){const r=t._store.getRequestStateService()
return!u(e)&&r.getPendingRequestsForRecord(i).some((e=>"query"===e.type))}(s,this._capabilities,e)||!u(s),l=!function(e){if(!e)return!0
const t=e.isNew,i=e.isDeleted,r=h(e)
return(!t||i)&&r}(s)&&!a
return o.isNew&&(o.isNew=!1,this._capabilities.notifyChange(e,"identity"),this._capabilities.notifyChange(e,"state")),i&&(r=n?d(o,t.attributes):Object.keys(t.attributes||{})),o.remoteAttrs=Object.assign(o.remoteAttrs||Object.create(null),t.attributes),o.localAttrs&&m(o)&&this._capabilities.notifyChange(e,"state"),l||this._capabilities.notifyChange(e,"added"),t.id&&(o.id=t.id),t.relationships&&f(this.__graph,this._capabilities,e,t),r&&r.length&&c(this._capabilities,e,r),r}fork(){throw new Error("Not Implemented")}merge(e){throw new Error("Not Implemented")}diff(){throw new Error("Not Implemented")}dump(){throw new Error("Not Implemented")}hydrate(e){throw new Error("Not Implemented")}clientDidCreate(e,t){this._createCache(e).isNew=!0
const i={}
if(void 0!==t){const r=this._capabilities.schema.fields(e),s=this.__graph,n=Object.keys(t)
for(let o=0;o<n.length;o++){const a=n[o],l=t[a]
if("id"===a)continue
const c=r.get(a)
let d
switch(void 0!==c?"kind"in c?c.kind:"attribute":null){case"attribute":this.setAttr(e,a,l),i[a]=l
break
case"belongsTo":this.mutate({op:"replaceRelatedRecord",field:a,record:e,value:l}),d=s.get(e,a),d.state.hasReceivedData=!0,d.state.isEmpty=!1
break
case"hasMany":this.mutate({op:"replaceRelatedRecords",field:a,record:e,value:l}),d=s.get(e,a),d.state.hasReceivedData=!0,d.state.isEmpty=!1
break
default:i[a]=l}}}return this._capabilities.notifyChange(e,"added"),i}willCommit(e){const t=this.__peek(e,!1)
t.inflightAttrs?t.localAttrs&&Object.assign(t.inflightAttrs,t.localAttrs):t.inflightAttrs=t.localAttrs,t.localAttrs=null}didCommit(e,t){const i=t.content,r=t.request.op,s=i&&i.data,{identifierCache:n}=this._capabilities,o=e.id,a="deleteRecord"!==r&&s?n.updateRecordIdentifier(e,s):e,l=this.__peek(a,!1)
let h
l.isDeleted&&(this.__graph.push({op:"deleteRecord",record:a,isNew:!1}),l.isDeletionCommitted=!0,this._capabilities.notifyChange(a,"removed")),l.isNew=!1,s&&(s.id&&!l.id&&(l.id=s.id),a===e&&a.id!==o&&this._capabilities.notifyChange(a,"identity"),s.relationships&&f(this.__graph,this._capabilities,a,s),h=s.attributes)
const u=d(l,h)
l.remoteAttrs=Object.assign(l.remoteAttrs||Object.create(null),l.inflightAttrs,h),l.inflightAttrs=null,m(l),l.errors&&(l.errors=null,this._capabilities.notifyChange(a,"errors")),c(this._capabilities,a,u),this._capabilities.notifyChange(a,"state")
const p=i&&i.included
if(p)for(let c=0,d=p.length;c<d;c++)g(this,n,p[c])
return{data:a}}commitWasRejected(e,t){const i=this.__peek(e,!1)
if(i.inflightAttrs){const e=Object.keys(i.inflightAttrs)
if(e.length>0){const t=i.localAttrs=i.localAttrs||Object.create(null)
for(let r=0;r<e.length;r++)void 0===t[e[r]]&&(t[e[r]]=i.inflightAttrs[e[r]])}i.inflightAttrs=null}t&&(i.errors=t),this._capabilities.notifyChange(e,"errors")}unloadRecord(e){const t=this._capabilities
if(!this.__cache.has(e))return void(0,r.peekGraph)(t)?.unload(e)
const i=!this.isDeletionCommitted(e)
let s=!1
const n=this.__peek(e,!1)
n.isNew?(0,r.peekGraph)(t)?.push({op:"deleteRecord",record:e,isNew:!0}):(0,r.peekGraph)(t)?.unload(e),n.localAttrs=null,n.remoteAttrs=null,n.defaultAttrs=null,n.inflightAttrs=null
const o=function(e,t){const i=[],r=[],s=new Set
for(r.push(t);r.length>0;){const n=r.shift()
i.push(n),s.add(n)
const o=_(e,t).iterator()
for(let e=o.next();!e.done;e=o.next()){const t=e.value
t&&!s.has(t)&&(s.add(t),r.push(t))}}return i}(t,e)
if(function(e,t){for(let i=0;i<t.length;++i){const r=t[i]
if(e.hasRecord(r))return!1}return!0}(t,o))for(let r=0;r<o.length;++r){const e=o[r]
t.notifyChange(e,"removed"),s=!0,t.disconnectRecord(e)}this.__cache.delete(e),this.__destroyedCache.set(e,n),1===this.__destroyedCache.size&&setTimeout((()=>{this.__destroyedCache.clear()}),100),!s&&i&&t.notifyChange(e,"removed")}getAttr(e,t){const i=!Array.isArray(t)||1===t.length
if(Array.isArray(t)&&1===t.length&&(t=t[0]),i){const i=t,s=this.__peek(e,!0)
if(s.localAttrs&&i in s.localAttrs)return s.localAttrs[i]
if(s.inflightAttrs&&i in s.inflightAttrs)return s.inflightAttrs[i]
if(s.remoteAttrs&&i in s.remoteAttrs)return s.remoteAttrs[i]
if(s.defaultAttrs&&i in s.defaultAttrs)return s.defaultAttrs[i]
{const t=this._capabilities.schema.fields(e).get(i)
this._capabilities
const n=l(t,e,this._capabilities._store)
return(r=t)&&a(r.options)&&(s.defaultAttrs=s.defaultAttrs||Object.create(null),s.defaultAttrs[i]=n),n}}var r
const s=t,n=this.__peek(e,!0),o=s[0]
let c=n.localAttrs&&o in n.localAttrs?n.localAttrs[o]:void 0
if(void 0===c&&(c=n.inflightAttrs&&o in n.inflightAttrs?n.inflightAttrs[o]:void 0),void 0===c&&(c=n.remoteAttrs&&o in n.remoteAttrs?n.remoteAttrs[o]:void 0),void 0!==c){for(let e=1;e<s.length;e++)if(c=c[s[e]],void 0===c)return
return c}}setAttr(e,t,i){const r=!Array.isArray(t)||1===t.length
if(Array.isArray(t)&&1===t.length&&(t=t[0]),r){const r=this.__peek(e,!1),s=t,n=r.inflightAttrs&&s in r.inflightAttrs?r.inflightAttrs[s]:r.remoteAttrs&&s in r.remoteAttrs?r.remoteAttrs[s]:void 0
return n!==i?(r.localAttrs=r.localAttrs||Object.create(null),r.localAttrs[s]=i,r.changes=r.changes||Object.create(null),r.changes[s]=[n,i]):r.localAttrs&&(delete r.localAttrs[s],delete r.changes[s]),r.defaultAttrs&&s in r.defaultAttrs&&delete r.defaultAttrs[s],void this._capabilities.notifyChange(e,"attributes",s)}const s=t,n=this.__peek(e,!1),o=s[0],a=n.inflightAttrs&&o in n.inflightAttrs?n.inflightAttrs[o]:n.remoteAttrs&&o in n.remoteAttrs?n.remoteAttrs[o]:void 0
let l
if(a){l=a[s[1]]
for(let e=2;e<s.length;e++)l=l[s[e]]}if(l!==i){n.localAttrs=n.localAttrs||Object.create(null),n.localAttrs[o]=n.localAttrs[o]||structuredClone(a),n.changes=n.changes||Object.create(null)
let e=n.localAttrs[o],t=1
for(;t<s.length-1;)e=e[s[t++]]
e[s[t]]=i,n.changes[o]=[a,n.localAttrs[o]]}else if(n.localAttrs)try{if(!a)return
JSON.stringify(a)!==JSON.stringify(n.localAttrs[o])&&(delete n.localAttrs[o],delete n.changes[o])}catch{}this._capabilities.notifyChange(e,"attributes",o)}changedAttrs(e){return this.__peek(e,!1).changes||Object.create(null)}hasChangedAttrs(e){const t=this.__peek(e,!0)
return null!==t.inflightAttrs&&Object.keys(t.inflightAttrs).length>0||null!==t.localAttrs&&Object.keys(t.localAttrs).length>0}rollbackAttrs(e){const t=this.__peek(e,!1)
let i
return t.isDeleted=!1,null!==t.localAttrs&&(i=Object.keys(t.localAttrs),t.localAttrs=null,t.changes=null),t.isNew&&(t.isDeletionCommitted=!0,t.isDeleted=!0,t.isNew=!1),t.inflightAttrs=null,t.defaultAttrs=null,t.errors&&(t.errors=null,this._capabilities.notifyChange(e,"errors")),this._capabilities.notifyChange(e,"state"),i&&i.length&&c(this._capabilities,e,i),i||[]}changedRelationships(e){return this.__graph.getChanged(e)}hasChangedRelationships(e){return this.__graph.hasChanged(e)}rollbackRelationships(e){let t
return this._capabilities,this._capabilities._store._join((()=>{t=this.__graph.rollback(e)})),t}getRelationship(e,t){return this.__graph.getData(e,t)}setIsDeleted(e,t){this.__peek(e,!1).isDeleted=t,this._capabilities.notifyChange(e,"state")}getErrors(e){return this.__peek(e,!0).errors||[]}isEmpty(e){const t=this.__safePeek(e,!0)
return!t||null===t.remoteAttrs&&null===t.inflightAttrs&&null===t.localAttrs}isNew(e){return this.__safePeek(e,!0)?.isNew||!1}isDeleted(e){return this.__safePeek(e,!0)?.isDeleted||!1}isDeletionCommitted(e){return this.__safePeek(e,!0)?.isDeletionCommitted||!1}_createCache(e){const t={id:null,remoteAttrs:null,localAttrs:null,defaultAttrs:null,inflightAttrs:null,changes:null,errors:null,isNew:!1,isDeleted:!1,isDeletionCommitted:!1}
return this.__cache.set(e,t),t}__safePeek(e,t){let i=this.__cache.get(e)
return!i&&t&&(i=this.__destroyedCache.get(e)),i}__peek(e,t){return this.__safePeek(e,t)}}function o(e){return(0,r.isBelongsTo)(e)?e.remoteState?[e.remoteState]:[]:e.remoteState}function a(e){return!!e&&"function"==typeof e.defaultValue}function l(e,t,i){const r=e?.options
if(e&&(r||e.type)&&("attribute"===e.kind||"field"===e.kind)){if(a(r))return r.defaultValue()
if(r&&"defaultValue"in r)return r.defaultValue
if("attribute"!==e.kind&&e.type){const s=i.schema.transformation(e)
if(s?.defaultValue)return s.defaultValue(r||null,t)}}}function c(e,t,i){if(i)for(let r=0;r<i.length;r++)e.notifyChange(t,"attributes",i[r])
else e.notifyChange(t,"attributes")}function d(e,t){const i=[]
if(t){const r=Object.keys(t),s=r.length,n=e.localAttrs,o=Object.assign(Object.create(null),e.remoteAttrs,e.inflightAttrs)
for(let e=0;e<s;e++){const s=r[e],a=t[s]
n&&void 0!==n[s]||o[s]!==a&&i.push(s)}}return i}function h(e){return!e||null===e.remoteAttrs&&null===e.inflightAttrs&&null===e.localAttrs}function u(e,t=!1){if(!e)return!1
const i=e.isNew,r=h(e)
return i?!e.isDeleted:!(t&&e.isDeletionCommitted||r)}function f(e,t,i,r){const s=t.schema.fields(i)
for(const[n,o]of s){if(!y(o))continue
const t=r.relationships[n]
t&&e.push({op:"updateRelationship",record:i,field:n,value:t})}}const p=new Set(["hasMany","belongsTo","resource","collection"])
function y(e){return p.has(e.kind)}function m(e){const{localAttrs:t,remoteAttrs:i,inflightAttrs:r,defaultAttrs:s,changes:n}=e
if(!t)return e.changes=null,!1
let o=!1
const a=Object.keys(t)
for(let l=0,c=a.length;l<c;l++){const e=a[l];(r&&e in r?r[e]:i&&e in i?i[e]:void 0)===t[e]&&(o=!0,delete t[e],delete n[e]),s&&e in s&&delete s[e]}return o}function g(e,t,i){let r=t.peekRecordIdentifier(i)
return r=r?t.updateRecordIdentifier(r,i):t.getOrCreateRecordIdentifier(i),e.upsert(r,i,e._capabilities.hasRecord(r)),r}function _(e,t){const i=(0,r.peekGraph)(e),n=i?.identifiers.get(t)
if(!n)return s
const a=[]
Object.keys(n).forEach((e=>{const t=n[e]
t&&!t.definition.isImplicit&&a.push(t)}))
let l=0,c=0,d=0
return{iterator:()=>({next:()=>{const e=(()=>{for(;l<a.length;){for(;c<2;){const t=0===c?(e=a[l],(0,r.isBelongsTo)(e)?e.localState?[e.localState]:[]:e.additions?[...e.additions]:[]):o(a[l])
for(;d<t.length;){const e=t[d++]
if(null!==e)return e}d=0,c++}c=0,l++}var e})()
return{value:e,done:void 0===e}}})}}function b(e){return e instanceof Error}function v(e,t){"links"in t&&(e.links=t.links),"meta"in t&&(e.meta=t.meta)}var w=i(294),R=i(730),k=i(274),S=i(910)
function A(e,t,i,r){const s=t.data?(0,S.i)(t.data,((t,s)=>{const{id:n,type:o}=t
return function(e,t,i,r,s){const{id:n,type:o}=e
e.relationships||(e.relationships={})
const{relationships:a}=e,l=function(e,t,i,r){const{name:s}=i,{type:n}=t,o=function(e,t,i){const r=e.schema.fields(t).get(i)
return r?r.options.inverse:null}(e,{type:n},s)
if(o)return{inverseKey:o,kind:e.schema.fields({type:r}).get(o).kind}}(i,t,r,o)
if(l){const{inverseKey:e,kind:i}=l,r=a[e]?.data
"hasMany"===i&&void 0===r||(a[e]=a[e]||{},a[e].data=function(e,t,{id:i,type:r}){const s={id:i,type:r}
let n=null
if("hasMany"===t){const t=e||[]
e&&e.find((e=>e.type===s.type&&e.id===s.id))||t.push(s),n=t}else{const t=e||{}
Object.assign(t,s),n=t}return n}(r??null,i,t))}}(t,i,e,r),{id:n,type:o}})):null,n={}
"meta"in t&&(n.meta=t.meta),"links"in t&&(n.links=t.links),"data"in t&&(n.data=s)
const o={id:i.id,type:i.type,relationships:{[r.name]:n}}
return Array.isArray(t.included)||(t.included=[]),t.included.push(o),t}const M=new Set(["findRecord","findAll","query","queryRecord","findBelongsTo","findHasMany","updateRecord","createRecord","deleteRecord"]),C={request(e,t){if(e.request.url||!e.request.op||!M.has(e.request.op))return t(e.request)
const{store:i}=e.request
switch(i._fetchManager||(i._fetchManager=new S.F(i)),e.request.op){case"findRecord":return function(e){const{store:t,data:i}=e.request,{record:r,options:s}=i
let n
if(t._instanceCache.recordIsLoaded(r))if(s.reload)(0,S.a)(r),n=t._fetchManager.scheduleFetch(r,s,e.request)
else{let i=null
const o=t.adapterFor(r.type)
void 0===s.reload&&o.shouldReloadRecord&&o.shouldReloadRecord(t,i=t._fetchManager.createSnapshot(r,s))?((0,S.a)(r),s.reload=!0,n=t._fetchManager.scheduleFetch(r,s,e.request)):(!1===s.backgroundReload||!s.backgroundReload&&o.shouldBackgroundReloadRecord&&!o.shouldBackgroundReloadRecord(t,i=i||t._fetchManager.createSnapshot(r,s))||((0,S.a)(r),s.backgroundReload=!0,t._fetchManager.scheduleFetch(r,s,e.request)),n=Promise.resolve(r))}else n=t._fetchManager.fetchDataIfNeededForIdentifier(r,s,e.request)
return n.then((e=>t.peekRecord(e)))}(e)
case"findAll":return function(e){const{store:t,data:i}=e.request,{type:r,options:s}=i,n=t.adapterFor(r),o=t.recordArrayManager._live.get(r),a=new S.b(t,r,s)
let l
return s.reload||!1!==s.reload&&(n.shouldReloadAll&&n.shouldReloadAll(t,a)||!n.shouldReloadAll&&0===a.length)?(o&&(o.isUpdating=!0),l=T(n,t,r,a,e.request,!0)):(l=Promise.resolve(t.peekAll(r)),(s.backgroundReload||!1!==s.backgroundReload&&(!n.shouldBackgroundReloadAll||n.shouldBackgroundReloadAll(t,a)))&&(o&&(o.isUpdating=!0),T(n,t,r,a,e.request,!1))),l}(e)
case"query":return function(e){const{store:t,data:i}=e.request
let{options:r}=i
const{type:s,query:n}=i,o=t.adapterFor(s),a=r._recordArray||t.recordArrayManager.createArray({type:s,query:n})
delete r._recordArray
const l=t.modelFor(s)
return Promise.resolve().then((()=>o.query(t,l,n,a,r))).then((e=>{const i=t.serializerFor(s),r=(0,S.n)(i,t,l,e,null,"query"),n=t._push(r,!0)
return t.recordArrayManager.populateManagedArray(a,n,r),a}))}(e)
case"queryRecord":return function(e){const{store:t,data:i}=e.request,{type:r,query:s,options:n}=i,o=t.adapterFor(r),a=t.modelFor(r)
return Promise.resolve().then((()=>o.queryRecord(t,a,s,n))).then((e=>{const i=t.serializerFor(r),s=(0,S.n)(i,t,a,e,null,"queryRecord"),n=t._push(s,!0)
return n?t.peekRecord(n):null}))}(e)
case"findBelongsTo":return function(e){const{store:t,data:i,records:r}=e.request,{options:s,record:n,links:o,useLink:a,field:l}=i,c=r?.[0],d=c&&t._fetchManager.getPendingFetch(c,s)
if(d)return d
if(a)return function(e,t,i,r,s){return Promise.resolve().then((()=>{const n=e.adapterFor(t.type),o=e._fetchManager.createSnapshot(t,s),a=i&&"string"!=typeof i?i.href:i
return n.findBelongsTo(e,o,a,r)})).then((i=>{const s=e.modelFor(r.type),n=e.serializerFor(r.type)
let o=(0,S.n)(n,e,s,i,null,"findBelongsTo")
return o.data||o.links||o.meta?(o=A(e,o,t,r),e._push(o,!0)):null}),null)}(t,n,o.related,l,s)
const h=t._fetchManager
return(0,S.a)(c),s.reload?h.scheduleFetch(c,s,e.request):h.fetchDataIfNeededForIdentifier(c,s,e.request)}(e)
case"findHasMany":return function(e){const{store:t,data:i,records:r}=e.request,{options:s,record:n,links:o,useLink:a,field:l}=i
if(a)return function(e,t,i,r,s,n){return Promise.resolve().then((()=>{const o=t._fetchManager.createSnapshot(i,n),a=r&&"string"!=typeof r?r.href:r
return e.findHasMany(t,o,a,s)})).then((e=>{const r=t.modelFor(s.type),n=t.serializerFor(s.type)
let o=(0,S.n)(n,t,r,e,null,"findHasMany")
return o=A(t,o,i,s),t._push(o,!0)}),null)}(t.adapterFor(n.type),t,n,o.related,l,s)
const c=new Array(r.length),d=t._fetchManager
for(let h=0;h<r.length;h++){const t=r[h];(0,S.a)(t),c[h]=s.reload?d.scheduleFetch(t,s,e.request):d.fetchDataIfNeededForIdentifier(t,s,e.request)}return Promise.all(c)}(e)
case"updateRecord":case"createRecord":case"deleteRecord":return function(e){const{store:t,data:i,op:r}=e.request,{options:s,record:n}=i
t.cache.willCommit(n,e)
const o=Object.assign({[S.S]:r},s)
return t._fetchManager.scheduleSave(n,o).then((i=>{let s
return t._join((()=>{s=t.cache.didCommit(n,{request:e.request,content:i})})),t.lifetimes?.didRequest&&"createRecord"===r&&t.lifetimes.didRequest(e.request,{status:201},null,t),t.peekRecord(s.data)})).catch((e=>{let i=e
throw e?"string"==typeof e&&(i=new Error(e)):i=new Error("Unknown Error Occurred During Request"),function(e,t,i){if(i&&!0===i.isAdapterError&&"InvalidError"===i.code){const r=e.serializerFor(t.type)
if(r&&"function"==typeof r.extractErrors){const s=r.extractErrors(e,e.modelFor(t.type),i,t.id)
i.errors=function(e){const t=[]
return e&&Object.keys(e).forEach((i=>{const r=(s=e[i],Array.isArray(s)?s:[s])
var s
for(let e=0;e<r.length;e++){let s="Invalid Attribute",n=`/data/attributes/${i}`
i===E&&(s="Invalid Document",n="/data"),t.push({title:s,detail:r[e],source:{pointer:n}})}})),t}(s)}}const r=e.cache
if(i.errors){let e=i.errors
0===e.length&&(e=[{title:"Invalid Error",detail:"",source:{pointer:"/data"}}]),r.commitWasRejected(t,e)}else r.commitWasRejected(t)}(t,n,i),i}))}(e)
default:return t(e.request)}}},E="base"
function T(e,t,i,r,s,n){const o=t.modelFor(i)
let a=Promise.resolve().then((()=>e.findAll(t,o,null,r)))
return a=a.then((e=>{const s=t.serializerFor(i),a=(0,S.n)(s,t,o,e,null,"findAll")
return t._push(a,n),r._recordArray.isUpdating=!1,r._recordArray})),a}function O(e,t){this._adapterCache=this._adapterCache||Object.create(null)
const i=(0,k.di)(e),{_adapterCache:r}=this
let s=r[i]
if(s)return s
const n=(0,w.getOwner)(this)
return s=n.lookup(`adapter:${i}`),void 0!==s?(r[i]=s,s):(s=r.application||n.lookup("adapter:application"),void 0!==s?(r[i]=s,r.application=s,s):void 0)}function q(e){this._serializerCache=this._serializerCache||Object.create(null)
const t=(0,k.di)(e),{_serializerCache:i}=this
let r=i[t]
if(r)return r
const s=(0,w.getOwner)(this)
return r=s.lookup(`serializer:${t}`),void 0!==r?(i[t]=r,r):(r=i.application||s.lookup("serializer:application"),void 0!==r?(i[t]=r,i.application=r,r):null)}function D(e,t){const i=(0,k.di)(e),r=this.serializerFor(i),s=this.modelFor(i)
return r.normalize(s,t)}function j(e,t){const i=t||e,r=t?(0,k.di)(e):"application"
this.serializerFor(r).pushPayload(this,i)}function P(e,t){return this._fetchManager||(this._fetchManager=new S.F(this)),this._fetchManager.createSnapshot((0,R.o)(e)).serialize(t)}function N(){for(const e in this._adapterCache){const t=this._adapterCache[e]
"function"==typeof t.destroy&&t.destroy()}for(const e in this._serializerCache){const t=this._serializerCache[e]
"function"==typeof t.destroy&&t.destroy()}}var F,I,$,z,x,L=i(603),B=i(241),U=i(471),V=i.n(U),H=i(738),W=i(146),K=i(788),G=i(389),J=i(410),Y=i.n(J),Z=i(991),X=i(491),Q=i(375),ee=i(280),te=i.n(ee),ie=i(104),re=i.n(ie),se=i(666),ne=i(193)
function oe(e,t,i){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,i)}function ae(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e
var i=e[Symbol.toPrimitive]
if(void 0!==i){var r=i.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function le(e){{const t=(0,B._k)(e)
return(0,L.deprecate)(`The resource type '${e}' is not normalized. Update your application code to use '${t}' instead of '${e}'.`,t===e,{id:"ember-data:deprecate-non-strict-types",until:"6.0",for:"ember-data",since:{available:"5.3",enabled:"5.3"}}),t}}class ce extends k.oz{constructor(e){super(e),this.isLoaded=e.isLoaded||!1,this.isAsync=e.isAsync||!1,this.isPolymorphic=e.isPolymorphic||!1,this.identifier=e.identifier,this.key=e.key}[k.XK](e,t,i,r,s){switch(i){case"length 0":return Reflect.set(e,"length",0),ye(this,[],s),!0
case"replace cell":{const[t,i,n]=r
return e[t]=n,function(e,t,i){me(e,{op:"replaceRelatedRecord",record:e.identifier,field:e.key,...t},i)}(this,{value:n,prior:i,index:t},s),!0}case"push":{const n=de(r)
ue(this,e,(e=>e.push(...n)),"Cannot push duplicates to a hasMany's state.")
{const n=new Set(e),o=new Set
r.forEach((e=>{const t=(0,k.o)(e)
n.has(t)||(n.add(t),o.add(e))}))
const a=Array.from(o),l=Reflect.apply(e[i],t,a)
return a.length&&fe(this,{value:de(a)},s),l}}case"pop":{const n=Reflect.apply(e[i],t,r)
return n&&pe(this,{value:(0,k.o)(n)},s),n}case"unshift":{const n=de(r)
ue(this,e,(e=>e.unshift(...n)),"Cannot unshift duplicates to a hasMany's state.")
{const n=new Set(e),o=new Set
r.forEach((e=>{const t=(0,k.o)(e)
n.has(t)||(n.add(t),o.add(e))}))
const a=Array.from(o),l=Reflect.apply(e[i],t,a)
return a.length&&fe(this,{value:de(a),index:0},s),l}}case"shift":{const n=Reflect.apply(e[i],t,r)
return n&&pe(this,{value:(0,k.o)(n),index:0},s),n}case"sort":{const n=Reflect.apply(e[i],t,r)
return function(e,t,i){me(e,{op:"sortRelatedRecords",record:e.identifier,field:e.key,value:t},i)}(this,n.map(k.o),s),n}case"splice":{const[n,o,...a]=r
if(0===n&&o===this[k.u2].length){const r=de(a)
ue(this,e,(e=>e.splice(n,o,...r)),"Cannot replace a hasMany's state with a new state that contains duplicates.")
{const r=new Set(a),l=Array.from(r),c=[n,o].concat(l),d=Reflect.apply(e[i],t,c)
return ye(this,de(l),s),d}}const l=de(a)
ue(this,e,(e=>e.splice(n,o,...l)),"Cannot splice a hasMany's state with a new state that contains duplicates.")
{const r=e.slice()
r.splice(n,o)
const l=new Set(r),c=[]
a.forEach((e=>{const t=(0,k.o)(e)
l.has(t)||(l.add(t),c.push(e))}))
const d=[n,o,...c],h=Reflect.apply(e[i],t,d)
return o>0&&pe(this,{value:h.map(k.o),index:n},s),c.length>0&&fe(this,{value:de(c),index:n},s),h}}}}notify(){this[k.To].shouldReset=!0,(0,k.J4)(this)}reload(e){return this._manager.reloadHasMany(this.key,e)}createRecord(e){const{store:t}=this,i=t.createRecord(this.modelName,e)
return this.push(i),i}destroy(){super.destroy(!1)}}function de(e){return e.map(he)}function he(e){return(0,k.o)(e)}function ue(e,t,i,r){const s=t.slice()
if(i(s),s.length!==new Set(s).size){const t=s.filter(((e,t)=>s.indexOf(e)!==t));(0,L.deprecate)(`${r} This behavior is deprecated. Found duplicates for the following records within the new state provided to \`<${e.identifier.type}:${e.identifier.id||e.identifier.lid}>.${e.key}\`\n\t- ${Array.from(new Set(t)).map((e=>(0,k.xm)(e)?e.lid:(0,k.o)(e).lid)).sort(((e,t)=>e.localeCompare(t))).join("\n\t- ")}`,!1,{id:"ember-data:deprecate-many-array-duplicates",for:"ember-data",until:"6.0",since:{enabled:"5.3",available:"5.3"}})}}function fe(e,t,i){me(e,{op:"addToRelatedRecords",record:e.identifier,field:e.key,...t},i)}function pe(e,t,i){me(e,{op:"removeFromRelatedRecords",record:e.identifier,field:e.key,...t},i)}function ye(e,t,i){me(e,{op:"replaceRelatedRecords",record:e.identifier,field:e.key,value:t},i)}function me(e,t,i){e._manager.mutate(t),(0,W.RH)(i)}ce.prototype.isAsync=!1,ce.prototype.isPolymorphic=!1,ce.prototype.identifier=null,ce.prototype.cache=null,ce.prototype._inverseIsAsync=!1,ce.prototype.key="",ce.prototype.DEPRECATED_CLASS_NAME="ManyArray"
const ge=re().extend(te())
var _e=Object.defineProperty;((e,t)=>{for(var i in t)_e(e,i,{get:t[i],enumerable:!0})})({},{c:()=>Ae,f:()=>ve,g:()=>we,i:()=>Se,m:()=>Re,n:()=>ke,p:()=>Me})
var be=new WeakMap
function ve(e,t,i,r){return we(e.prototype,t,i,r)}function we(e,t,i,r){let s={configurable:!0,enumerable:!0,writable:!0,initializer:null}
r&&(s.initializer=r)
for(let n of i)s=n(e,t,s)||s
void 0===s.initializer?Object.defineProperty(e,t,s):function(e,t,i){let r=be.get(e)
r||(r=new Map,be.set(e,r)),r.set(t,i)}(e,t,s)}function Re({prototype:e},t,i){return ke(e,t,i)}function ke(e,t,i){let r={...Object.getOwnPropertyDescriptor(e,t)}
for(let s of i)r=s(e,t,r)||r
void 0!==r.initializer&&(r.value=r.initializer?r.initializer.call(e):void 0,r.initializer=void 0),Object.defineProperty(e,t,r)}function Se(e,t){let i=function(e,t){let i=e.prototype
for(;i;){let e=be.get(i)?.get(t)
if(e)return e
i=i.prototype}}(e.constructor,t)
i&&Object.defineProperty(e,t,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(e):void 0})}function Ae(e,t){return t.reduce(((e,t)=>t(e)||e),e)}function Me(e,t){for(let[i,r,s]of t)"field"===i?Ce(e,r,s):ke(e,r,s)
return e}function Ce(e,t,i){let r={configurable:!0,enumerable:!0,writable:!0,initializer:()=>Object.getOwnPropertyDescriptor(e,t)?.value}
for(let s of i)r=s(e,t,r)||r
r.initializer&&(r.value=r.initializer.call(e),delete r.initializer),Object.defineProperty(e,t,r)}const Ee=Symbol.for("LegacyPromiseProxy"),Te=ge
class Oe extends Te{constructor(...e){super(...e),ae(this,Ee,!0)}get id(){const{key:e,legacySupport:t}=this._belongsToState
return t.referenceFor("belongsTo",e).id()}get meta(){}async reload(e){const{key:t,legacySupport:i}=this._belongsToState
return await i.reloadBelongsTo(t,e),this}}ke((F=Oe).prototype,"id",[H.PO]),ke(F.prototype,"meta",[(0,U.computed)()])
class qe{constructor(e,t){ae(this,Ee,!0),this._update(e,t),this.isDestroyed=!1}get length(){return this["[]"],this.content?this.content.length:0}forEach(e){this.content&&this.length&&this.content.forEach(e)}reload(e){return this.content.reload(e),this}then(e,t){return this.promise.then(e,t)}catch(e){return this.promise.catch(e)}finally(e){return this.promise.finally(e)}destroy(){this.isDestroyed=!0,this.content=null,this.promise=null}get links(){return this.content?this.content.links:void 0}get meta(){return this.content?this.content.meta:void 0}_update(e,t){void 0!==t&&(this.content=t),this.promise=function(e,t){return e.isPending=!0,e.isSettled=!1,e.isFulfilled=!1,e.isRejected=!1,Promise.resolve(t).then((t=>(e.isPending=!1,e.isFulfilled=!0,e.isSettled=!0,e.content=t,t)),(t=>{throw e.isPending=!1,e.isFulfilled=!1,e.isRejected=!0,e.isSettled=!0,t}))}(this,e)}static create({promise:e,content:t}){return new this(e,t)}}ke((I=qe).prototype,"length",[H.Vv]),ke(I.prototype,"links",[H.Vv]),ke(I.prototype,"meta",[H.Vv]),(0,W.sg)(qe.prototype,"content",null),(0,W.sg)(qe.prototype,"isPending",!1),(0,W.sg)(qe.prototype,"isRejected",!1),(0,W.sg)(qe.prototype,"isFulfilled",!1),(0,W.sg)(qe.prototype,"isSettled",!1)
{const e={enumerable:!0,configurable:!1,get:function(){return this.content?.length&&this.content}};(0,H.Vv)(e),Object.defineProperty(qe.prototype,"[]",e)}class De{constructor(e,t,i,r,s){ae(this,"___token",void 0),ae(this,"___identifier",void 0),ae(this,"___relatedTokenMap",void 0),this.graph=t,this.key=s,this.hasManyRelationship=r,this.type=r.definition.type,this.store=e,this.___identifier=i,this.___token=e.notifications.subscribe(i,((e,t,i)=>{"relationships"===t&&i===s&&this._ref++})),this.___relatedTokenMap=new Map}destroy(){this.store.notifications.unsubscribe(this.___token),this.___relatedTokenMap.forEach((e=>{this.store.notifications.unsubscribe(e)})),this.___relatedTokenMap.clear()}get identifiers(){this._ref
const e=this._resource(),t=this.___relatedTokenMap
return this.___relatedTokenMap=new Map,e&&e.data?e.data.map((e=>{const i=this.store.identifierCache.getOrCreateRecordIdentifier(e)
let r=t.get(i)
return r?t.delete(i):r=this.store.notifications.subscribe(i,((e,t,i)=>{("identity"===t||"attributes"===t&&"id"===i)&&this._ref++})),this.___relatedTokenMap.set(i,r),i})):(t.forEach((e=>{this.store.notifications.unsubscribe(e)})),t.clear(),[])}_resource(){return this.store.cache.getRelationship(this.___identifier,this.key)}remoteType(){const e=this._resource()
return e&&e.links&&e.links.related?"link":"ids"}ids(){return this.identifiers.map((e=>e.id))}link(){const e=this._resource()
if(t=e,Boolean(t&&t.links&&t.links.related)&&e.links){const t=e.links.related
return t&&"string"!=typeof t?t.href:t}var t
return null}links(){const e=this._resource()
return e&&e.links?e.links:null}meta(){let e=null
const t=this._resource()
return t&&t.meta&&"object"==typeof t.meta&&(e=t.meta),e}async push(e,t){const{store:i}=this,r=Array.isArray(e)?{data:e}:e,s=Array.isArray(r.data)&&r.data.length>0&&je(r.data[0]),n=Array.isArray(r.data)?s?i._push(r,!0):r.data.map((e=>i.identifierCache.getOrCreateRecordIdentifier(e))):[],{identifier:o}=this.hasManyRelationship,a={}
if(Array.isArray(r.data)&&(a.data=n),"links"in r&&(a.links=r.links),"meta"in r&&(a.meta=r.meta),i._join((()=>{this.graph.push({op:"updateRelationship",record:o,field:this.key,value:a})})),!t)return this.load()}_isLoaded(){if(!this.hasManyRelationship.state.hasReceivedData)return!1
const e=this.graph.getData(this.hasManyRelationship.identifier,this.key)
return e.data?.every((e=>!0===this.store._instanceCache.recordIsLoaded(e,!0)))}value(){const e=Fe.get(this.___identifier)
return this._isLoaded()?e.getManyArray(this.key):(this._ref,null)}async load(e){const t=Fe.get(this.___identifier)
return this.hasManyRelationship.definition.isAsync||xe(this.store,this._resource())?t.getHasMany(this.key,e):t.reloadHasMany(this.key,e)}reload(e){return Fe.get(this.___identifier).reloadHasMany(this.key,e)}}function je(e){return Object.keys(e).filter((e=>"id"!==e&&"type"!==e&&"lid"!==e)).length>0}function Pe(e){return Boolean(e&&e.links&&e.links.related)}ke(De.prototype,"identifiers",[H.Vv,H.PO]),(0,W.sg)(De.prototype,"_ref",0)
class Ne{constructor(e,t,i,r,s){this.graph=t,this.key=s,this.belongsToRelationship=r,this.type=r.definition.type,this.store=e,this.___identifier=i,this.___relatedToken=null,this.___token=e.notifications.subscribe(i,((e,t,i)=>{"relationships"===t&&i===s&&this._ref++}))}destroy(){this.store.notifications.unsubscribe(this.___token),this.___token=null,this.___relatedToken&&(this.store.notifications.unsubscribe(this.___relatedToken),this.___relatedToken=null)}get identifier(){this.___relatedToken&&(this.store.notifications.unsubscribe(this.___relatedToken),this.___relatedToken=null)
const e=this._resource()
if(e&&e.data){const t=this.store.identifierCache.getOrCreateRecordIdentifier(e.data)
return this.___relatedToken=this.store.notifications.subscribe(t,((e,t,i)=>{("identity"===t||"attributes"===t&&"id"===i)&&this._ref++})),t}return null}id(){return this.identifier?.id||null}link(){const e=this._resource()
if(Pe(e)&&e.links){const t=e.links.related
return t&&"string"!=typeof t?t.href:t}return null}links(){const e=this._resource()
return e&&e.links?e.links:null}meta(){let e=null
const t=this._resource()
return t&&t.meta&&"object"==typeof t.meta&&(e=t.meta),e}_resource(){return this._ref,this.store.cache.getRelationship(this.___identifier,this.key)}remoteType(){return Pe(this._resource())?"link":"id"}async push(e,t){const{store:i}=this,r=e.data&&je(e.data)?i._push(e,!0):e.data?i.identifierCache.getOrCreateRecordIdentifier(e.data):null,{identifier:s}=this.belongsToRelationship,n={}
if((e.data||null===e.data)&&(n.data=r),"links"in e&&(n.links=e.links),"meta"in e&&(n.meta=e.meta),i._join((()=>{this.graph.push({op:"updateRelationship",record:s,field:this.key,value:n})})),!t)return this.load()}value(){const e=this._resource()
return e&&e.data?this.store.peekRecord(e.data):null}async load(e){const t=Fe.get(this.___identifier)
return this.belongsToRelationship.definition.isAsync||xe(this.store,this._resource())?t.getBelongsTo(this.key,e):t.reloadBelongsTo(this.key,e).then((()=>this.value()))}reload(e){return Fe.get(this.___identifier).reloadBelongsTo(this.key,e).then((()=>this.value()))}}ke(Ne.prototype,"identifier",[H.Vv,H.PO]),(0,W.sg)(Ne.prototype,"_ref",0)
const Fe=(0,Q.L1)("LEGACY_SUPPORT",new Map)
function Ie(e){const t=(0,k.o)(e)
let i=Fe.get(t)
return i||(i=new $e(e),Fe.set(t,i),Fe.set(e,i)),i}class $e{constructor(e){this.record=e,this.store=(0,k.fV)(e),this.identifier=(0,k.o)(e),this.cache=(0,k.oX)(e)
{const e=(0,ne.A)(i(151)).graphFor
this.graph=e(this.store)}this._manyArrayCache=Object.create(null),this._relationshipPromisesCache=Object.create(null),this._relationshipProxyCache=Object.create(null),this._pending=Object.create(null),this.references=Object.create(null)}_syncArray(e){if(this.isDestroyed||this.isDestroying)return
const t=e[k.u2],i=this.identifier,[r,s]=this._getCurrentState(i,e.key)
s.meta&&(e.meta=s.meta),s.links&&(e.links=s.links),t.length=0,(0,k.RX)(t,r)}mutate(e){this.cache.mutate(e)}_findBelongsTo(e,t,i,r){return this._findBelongsToByJsonApiResource(t,this.identifier,i,r).then((t=>ze(this,e,i,t)),(t=>ze(this,e,i,null,t)))}reloadBelongsTo(e,t){const i=this._relationshipPromisesCache[e]
if(i)return i
const r=this.graph.get(this.identifier,e),s=this.cache.getRelationship(this.identifier,e)
r.state.hasFailedLoadAttempt=!1,r.state.shouldForceReload=!0
const n=this._findBelongsTo(e,s,r,t)
return this._relationshipProxyCache[e]?this._updatePromiseProxyFor("belongsTo",e,{promise:n}):n}getBelongsTo(e,t){const{identifier:i,cache:r}=this,s=r.getRelationship(this.identifier,e),n=s&&s.data?s.data:null,o=this.store,a=this.graph.get(this.identifier,e),l=a.definition.isAsync,c={key:e,store:o,legacySupport:this,modelName:a.definition.type}
if(l){if(a.state.hasFailedLoadAttempt)return this._relationshipProxyCache[e]
const i=this._findBelongsTo(e,s,a,t),r=n&&o._instanceCache.recordIsLoaded(n)
return this._updatePromiseProxyFor("belongsTo",e,{promise:i,content:r?o._instanceCache.getRecord(n):null,_belongsToState:c})}return null===n?null:o._instanceCache.getRecord(n)}setDirtyBelongsTo(e,t){return this.cache.mutate({op:"replaceRelatedRecord",record:this.identifier,field:e,value:(i=t,i?(0,k.o)(i):null)},!0)
var i}_getCurrentState(e,t){const i=this.cache.getRelationship(e,t),r=this.store._instanceCache,s=[]
if(i.data)for(let n=0;n<i.data.length;n++){const e=i.data[n]
r.recordIsLoaded(e,!0)&&s.push(e)}return[s,i]}getManyArray(e,t){{let i=this._manyArrayCache[e]
if(t||(t=this.graph.get(this.identifier,e).definition),!i){const[r,s]=this._getCurrentState(this.identifier,e)
i=new ce({store:this.store,type:t.type,identifier:this.identifier,cache:this.cache,identifiers:r,key:e,meta:s.meta||null,links:s.links||null,isPolymorphic:t.isPolymorphic,isAsync:t.isAsync,_inverseIsAsync:t.inverseIsAsync,manager:this,isLoaded:!t.isAsync,allowMutation:!0}),this._manyArrayCache[e]=i}return i}}fetchAsyncHasMany(e,t,i,r){{let s=this._relationshipPromisesCache[e]
if(s)return s
const n=this.cache.getRelationship(this.identifier,e),o=this._findHasManyByJsonApiResource(n,this.identifier,t,r)
return o?(s=o.then((()=>ze(this,e,t,i)),(r=>ze(this,e,t,i,r))),this._relationshipPromisesCache[e]=s,s):(i.isLoaded=!0,Promise.resolve(i))}}reloadHasMany(e,t){{const i=this._relationshipPromisesCache[e]
if(i)return i
const r=this.graph.get(this.identifier,e),{definition:s,state:n}=r
n.hasFailedLoadAttempt=!1,n.shouldForceReload=!0
const o=this.getManyArray(e,s),a=this.fetchAsyncHasMany(e,r,o,t)
return this._relationshipProxyCache[e]?this._updatePromiseProxyFor("hasMany",e,{promise:a}):a}}getHasMany(e,t){{const i=this.graph.get(this.identifier,e),{definition:r,state:s}=i,n=this.getManyArray(e,r)
if(r.isAsync){if(s.hasFailedLoadAttempt)return this._relationshipProxyCache[e]
const r=this.fetchAsyncHasMany(e,i,n,t)
return this._updatePromiseProxyFor("hasMany",e,{promise:r,content:n})}return n}}_updatePromiseProxyFor(e,t,i){let r=this._relationshipProxyCache[t]
if("hasMany"===e){const{promise:e,content:s}=i
return r?r._update(e,s):r=this._relationshipProxyCache[t]=new qe(e,s),r}if(r){const{promise:e,content:t}=i
void 0!==t&&r.set("content",t),r.set("promise",e)}else r=Oe.create(i),this._relationshipProxyCache[t]=r
return r}referenceFor(e,t){let i=this.references[t]
if(!i){const{graph:e,identifier:r}=this,s=e.get(r,t),n=s.definition.kind
"belongsTo"===n?i=new Ne(this.store,e,r,s,t):"hasMany"===n&&(i=new De(this.store,e,r,s,t)),this.references[t]=i}return i}_findHasManyByJsonApiResource(e,t,i,r={}){{if(!e)return
const{definition:s,state:n}=i;(0,X.upgradeStore)(this.store)
const o=this.store.adapterFor?.(s.type),{isStale:a,hasDematerializedInverse:l,hasReceivedData:c,isEmpty:d,shouldForceReload:h}=n,u=xe(this.store,e),f=e.data,p=e.links&&e.links.related&&("function"==typeof o?.findHasMany||void 0===f)&&(h||l||a||!u&&!d),y={useLink:p,field:this.store.schema.fields({type:s.inverseType}).get(s.key),links:e.links,meta:e.meta,options:r,record:t}
if(p)return this.store.request({op:"findHasMany",records:f||[],data:y,cacheOptions:{[Symbol.for("wd:skip-cache")]:!0}})
const m=c&&!d,g=l||d&&Array.isArray(f)&&f.length>0,_=!h&&!a&&(m||g)
if(_&&u)return
return _||c&&!d||g?(r.reload=r.reload||!_||void 0,this.store.request({op:"findHasMany",records:f,data:y,cacheOptions:{[Symbol.for("wd:skip-cache")]:!0}})):void 0}}_findBelongsToByJsonApiResource(e,t,i,r={}){if(!e)return Promise.resolve(null)
const s=i.definition.key
if(this._pending[s])return this._pending[s]
const n=e.data?e.data:null,{isStale:o,hasDematerializedInverse:a,hasReceivedData:l,isEmpty:c,shouldForceReload:d}=i.state,h=xe(this.store,e),u=e.links?.related&&(d||a||o||!h&&!c),f={useLink:u,field:this.store.schema.fields(this.identifier).get(i.definition.key),links:e.links,meta:e.meta,options:r,record:t}
if(u){const e=this.store.request({op:"findBelongsTo",records:n?[n]:[],data:f,cacheOptions:{[Symbol.for("wd:skip-cache")]:!0}})
return this._pending[s]=e.then((e=>e.content)).finally((()=>{this._pending[s]=void 0})),this._pending[s]}const p=l&&h&&!c,y=a||c&&e.data,m=!d&&!o&&(p||y)
return m&&!n?Promise.resolve(null):m&&h||null===n?.id?Promise.resolve(n):n?(r.reload=r.reload||!m||void 0,this._pending[s]=this.store.request({op:"findBelongsTo",records:[n],data:f,cacheOptions:{[Symbol.for("wd:skip-cache")]:!0}}).then((e=>e.content)).finally((()=>{this._pending[s]=void 0})),this._pending[s]):Promise.resolve(null)}destroy(){this.isDestroying=!0
let e=this._manyArrayCache
this._manyArrayCache=Object.create(null),Object.keys(e).forEach((t=>{e[t].destroy()})),e=this._relationshipProxyCache,this._relationshipProxyCache=Object.create(null),Object.keys(e).forEach((t=>{const i=e[t]
i.destroy&&i.destroy()})),e=this.references,this.references=Object.create(null),Object.keys(e).forEach((t=>{e[t].destroy()})),this.isDestroyed=!0}}function ze(e,t,i,r,s){delete e._relationshipPromisesCache[t],i.state.shouldForceReload=!1
const n="hasMany"===i.definition.kind
if(n&&r.notify(),s){i.state.hasFailedLoadAttempt=!0
const r=e._relationshipProxyCache[t]
throw r&&!n&&(r.content&&r.content.isDestroying&&r.set("content",null),e.store.notifications._flush()),s}return n?r.isLoaded=!0:e.store.notifications._flush(),i.state.hasFailedLoadAttempt=!1,i.state.isStale=!1,n||!r?r:e.store.peekRecord(r)}function xe(e,t){const i=e._instanceCache,r=t.data
return Array.isArray(r)?r.every((e=>i.recordIsLoaded(e))):!r||i.recordIsLoaded(r)}const Le=Y()
var Be=new WeakMap,Ue=new WeakMap
class Ve extends Le{constructor(...e){super(...e),oe(this,Be,void Se(this,"messages")),oe(this,Ue,void Se(this,"isEmpty"))}get errorsByAttributeName(){return new Map}errorsFor(e){const t=this.errorsByAttributeName
let i=t.get(e)
return void 0===i&&(i=(0,G.A)(),t.set(e,i)),(0,U.get)(i,"[]"),i}get content(){return(0,G.A)()}unknownProperty(e){const t=this.errorsFor(e)
if(0!==t.length)return t}add(e,t){const i=this._findOrCreateMessages(e,t)
this.addObjects(i),this.errorsFor(e).addObjects(i),this.__record.currentState.notify("isValid"),this.notifyPropertyChange(e)}_findOrCreateMessages(e,t){const i=this.errorsFor(e),r=Array.isArray(t)?t:[t],s=new Array(r.length)
for(let n=0;n<r.length;n++){const t=r[n],o=i.findBy("message",t)
s[n]=o||{attribute:e,message:t}}return s}remove(e){if(this.isEmpty)return
const t=this.rejectBy("attribute",e)
this.content.setObjects(t)
const i=this.errorsFor(e)
for(let r=0;r<i.length;r++)i[r].attribute===e&&i.replace(r,1)
this.errorsByAttributeName.delete(e),this.__record.currentState.notify("isValid"),this.notifyPropertyChange(e),this.notifyPropertyChange("length")}clear(){if(this.isEmpty)return
const e=this.errorsByAttributeName,t=[]
e.forEach((function(e,i){t.push(i)})),e.clear(),t.forEach((e=>{this.notifyPropertyChange(e)})),this.__record.currentState.notify("isValid"),super.clear()}has(e){return this.errorsFor(e).length>0}}function He(e,t,i,r){if("belongsTo"===r.kind)i.notifyPropertyChange(t)
else if("hasMany"===r.kind){const s=Fe.get(e),n=s&&s._manyArrayCache[t],o=s&&s._relationshipPromisesCache[t]
if(n&&o)return
n&&(n.notify(),r.options.async&&i.notifyPropertyChange(t))}}function We(e,t,i,r){(0,se.cacheFor)(r,i)!==e.cache.getAttr(t,i)&&r.notifyPropertyChange(i)}ke(($=Ve).prototype,"errorsByAttributeName",[(0,U.computed)()]),we($.prototype,"messages",[(0,Z.mapBy)("content","message")]),ke($.prototype,"content",[(0,U.computed)()]),we($.prototype,"isEmpty",[(0,Z.not)("length")])
const Ke=/^\/?data\/(attributes|relationships)\/(.*)/,Ge=/^\/?data/
function Je(e){return!!e&&e instanceof Error&&"isAdapterError"in e&&!0===e.isAdapterError&&"code"in e&&"InvalidError"===e.code}function Ye(e,t,i){const r=i.get,s=i.set
return i.get=function(){const e=(0,W.V1)(this,t,!0)
return(0,W.B1)(e),e.shouldReset&&(e.shouldReset=!1,e.lastValue=r.call(this)),e.lastValue},i.set=function(e){(0,W.V1)(this,t,!0),s.call(this,e)},(0,H.Vv)(i),i}function Ze(e,t){const i=(0,W.i$)(e,t)
i&&(i.shouldReset=!0,(0,W.RH)(i))}class Xe{constructor(e){const t=(0,R.fV)(e),i=(0,k.o)(e)
this.identifier=i,this.record=e,this.cache=t.cache,this.pendingCount=0,this.fulfilledCount=0,this.rejectedCount=0,this._errorRequests=[],this._lastError=null
const r=t.getRequestStateService(),s=t.notifications,n=e=>{if("mutation"===e.type)switch(e.state){case"pending":this.isSaving=!0
break
case"rejected":this.isSaving=!1,this._lastError=e,e.response&&Je(e.response.data)||this._errorRequests.push(e),Qe(this)
break
case"fulfilled":this._errorRequests=[],this._lastError=null,this.isSaving=!1,this.notify("isDirty"),Qe(this)}else switch(e.state){case"pending":this.pendingCount++,this.notify("isLoading")
break
case"rejected":this.pendingCount--,this._lastError=e,e.response&&Je(e.response.data)||this._errorRequests.push(e),this.notify("isLoading"),Qe(this)
break
case"fulfilled":this.pendingCount--,this.fulfilledCount++,this.notify("isLoading"),this.notify("isDirty"),Qe(this),this._errorRequests=[],this._lastError=null}}
r.subscribeForRecord(i,n)
const o=r.getLastRequestForRecord(i)
o&&n(o),this.handler=s.subscribe(i,((e,t,i)=>{switch(t){case"state":this.notify("isSaved"),this.notify("isNew"),this.notify("isDeleted"),this.notify("isDirty")
break
case"attributes":this.notify("isEmpty"),this.notify("isDirty")
break
case"errors":this.updateInvalidErrors(this.record.errors),this.notify("isValid")}}))}destroy(){(0,R.fV)(this.record).notifications.unsubscribe(this.handler)}notify(e){Ze(this,e)}updateInvalidErrors(e){const t=this.cache.getErrors(this.identifier)
e.clear()
for(let i=0;i<t.length;i++){const r=t[i]
if(r.source&&r.source.pointer){const t=r.source.pointer.match(Ke)
let i
if(t?i=t[2]:-1!==r.source.pointer.search(Ge)&&(i="base"),i){const t=r.detail||r.title
e.add(i,t)}}}}cleanErrorRequests(){this.notify("isValid"),this.notify("isError"),this.notify("adapterError"),this._errorRequests=[],this._lastError=null}get isLoading(){return!this.isLoaded&&this.pendingCount>0&&0===this.fulfilledCount}get isLoaded(){return!!this.isNew||this.fulfilledCount>0||!this.isEmpty}get isSaved(){const e=this.cache
return this.isDeleted?e.isDeletionCommitted(this.identifier):!(this.isNew||this.isEmpty||!this.isValid||this.isDirty||this.isLoading)}get isEmpty(){const e=this.cache
return!this.isNew&&e.isEmpty(this.identifier)}get isNew(){return this.cache.isNew(this.identifier)}get isDeleted(){return this.cache.isDeleted(this.identifier)}get isValid(){return 0===this.record.errors.length}get isDirty(){const e=this.cache
return!(this.isEmpty||e.isDeletionCommitted(this.identifier)||this.isDeleted&&this.isNew)&&(this.isDeleted||this.isNew||e.hasChangedAttrs(this.identifier))}get isError(){return!!this._errorRequests[this._errorRequests.length-1]}get adapterError(){const e=this._lastError
return e?"rejected"===e.state&&e.response.data:null}get isPreloaded(){return!this.isEmpty&&this.isLoading}get stateName(){return this.isLoading?"root.loading":this.isEmpty?"root.empty":this.isDeleted?this.isSaving?"root.deleted.inFlight":this.isSaved?"root.deleted.saved":this.isValid?"root.deleted.uncommitted":"root.deleted.invalid":this.isNew?this.isSaving?"root.loaded.created.inFlight":this.isValid?"root.loaded.created.uncommitted":"root.loaded.created.invalid":this.isSaving?"root.loaded.updated.inFlight":this.isValid?this.isDirty?"root.loaded.updated.uncommitted":"root.loaded.saved":"root.loaded.updated.invalid"}get dirtyType(){return this.isLoading||this.isEmpty?"":this.isDirty&&this.isDeleted?"deleted":this.isNew?"created":this.isSaving||!this.isValid||this.isDirty?"updated":""}}function Qe(e){e.notify("isValid"),e.notify("isError"),e.notify("adapterError")}function et(e,t,i){const r=new WeakMap,s=i.get
return i.get=function(){let e=r.get(this)
return e||(e={hasComputed:!1,value:void 0},r.set(this,e)),e.hasComputed||(e.value=s.call(this),e.hasComputed=!0),e.value},i}ke((z=Xe).prototype,"isLoading",[Ye]),ke(z.prototype,"isLoaded",[Ye]),ke(z.prototype,"isSaved",[Ye]),ke(z.prototype,"isEmpty",[Ye]),ke(z.prototype,"isNew",[Ye]),ke(z.prototype,"isDeleted",[Ye]),ke(z.prototype,"isValid",[Ye]),ke(z.prototype,"isDirty",[Ye]),ke(z.prototype,"isError",[Ye]),ke(z.prototype,"adapterError",[Ye]),ke(z.prototype,"isPreloaded",[H.PO]),ke(z.prototype,"stateName",[H.PO]),ke(z.prototype,"dirtyType",[H.PO]),(0,W.sg)(Xe.prototype,"isSaving",!1)
class tt extends(V()){init(e){const t=e._createProps,i=e._secretInit
e._createProps=null,e._secretInit=null
const r=this.store=i.store
super.init(e),this[K.pm]=r
const s=i.identifier
i.cb(this,i.cache,s,i.store),this.___recordState=null,this.setProperties(t)
const n=r.notifications
this.___private_notifications=n.subscribe(s,((e,t,i)=>{!function(e,t,i,r,s){if("attributes"===t)i?We(s,e,i,r):r.eachAttribute((t=>{We(s,e,t,r)}))
else if("relationships"===t)if(i){const t=r.constructor.relationshipsByName.get(i)
He(e,i,r,t)}else r.eachRelationship(((t,i)=>{He(e,t,r,i)}))
else"identity"===t&&r.notifyPropertyChange("id")}(e,t,i,this,r)}))}destroy(){const e=(0,R.o)(this)
this.___recordState?.destroy(),(0,R.fV)(this).notifications.unsubscribe(this.___private_notifications),this.eachRelationship(((e,t)=>{"belongsTo"===t.kind&&this.notifyPropertyChange(e)})),Fe.get(this)?.destroy(),Fe.delete(this),Fe.delete(e),super.destroy()}get isEmpty(){return this.currentState.isEmpty}get isLoading(){return this.currentState.isLoading}get isLoaded(){return this.currentState.isLoaded}get hasDirtyAttributes(){return this.currentState.isDirty}get isSaving(){return this.currentState.isSaving}get isDeleted(){return this.currentState.isDeleted}get isNew(){return this.currentState.isNew}get isValid(){return this.currentState.isValid}get dirtyType(){return this.currentState.dirtyType}get isError(){return this.currentState.isError}set isError(e){}get id(){return(0,R.o)(this).id}set id(e){const t=(0,k.pG)(e),i=(0,R.o)(this),r=t!==i.id
null!==t&&r&&(this.store._instanceCache.setRecordId(i,t),this.store.notifications.notify(i,"identity"))}toString(){return`<model::${this.constructor.modelName}:${this.id}>`}get currentState(){return this.___recordState||(this.___recordState=new Xe(this)),this.___recordState}set currentState(e){throw new Error("cannot set currentState")}get errors(){const e=Ve.create({__record:this})
return this.currentState.updateInvalidErrors(e),e}get adapterError(){return this.currentState.adapterError}set adapterError(e){throw new Error("adapterError is not directly settable")}notifyPropertyChange(e){Ze(this,e),super.notifyPropertyChange(e)}attr(){}eachRelationship(e,t){this.constructor.eachRelationship(e,t)}relationshipFor(e){return this.constructor.relationshipsByName.get(e)}inverseFor(e){return this.constructor.inverseFor(e,(0,R.fV)(this))}eachAttribute(e,t){this.constructor.eachAttribute(e,t)}static typeForRelationship(e,t){const i=this.relationshipsByName.get(e)
return i&&t.modelFor(i.type)}static get inverseMap(){return Object.create(null)}static inverseFor(e,t){const i=this.inverseMap
if(i[e])return i[e]
{const r=this._findInverseFor(e,t)
return i[e]=r,r}}static _findInverseFor(e,t){const i=this.relationshipsByName.get(e)
if(!i)return null
const{options:r}=i
return null===r.inverse?null:t.schema.hasResource(i)&&t.schema.fields(i).get(r.inverse)||null}static get relationships(){const e=new Map
return this.relationshipsByName.forEach((t=>{const{type:i}=t
e.has(i)||e.set(i,[]),e.get(i).push(t)})),e}static get relationshipNames(){const e={hasMany:[],belongsTo:[]}
return this.eachComputedProperty(((t,i)=>{it(i)&&e[i.kind].push(t)})),e}static get relatedTypes(){const e=[],t=this.relationshipsObject,i=Object.keys(t)
for(let r=0;r<i.length;r++){const s=t[i[r]].type
e.includes(s)||e.push(s)}return e}static get relationshipsByName(){const e=new Map,t=this.relationshipsObject,i=Object.keys(t)
for(let r=0;r<i.length;r++){const s=t[i[r]]
e.set(s.name,s)}return e}static get relationshipsObject(){const e=Object.create(null)
return this.modelName,this.eachComputedProperty(((t,i)=>{it(i)&&(i.key=t,i.name=t,e[t]=i)})),e}static get fields(){const e=new Map
return this.eachComputedProperty(((t,i)=>{it(i)?e.set(t,i.kind):rt(i)&&e.set(t,"attribute")})),e}static eachRelationship(e,t){this.relationshipsByName.forEach(((i,r)=>{e.call(t,r,i)}))}static eachRelatedType(e,t){const i=this.relatedTypes
for(let r=0;r<i.length;r++){const s=i[r]
e.call(t,s)}}static determineRelationshipType(e,t){const i=e.name,r=e.kind,s=this.inverseFor(i,t)
return s?"belongsTo"===s.kind?"belongsTo"===r?"oneToOne":"manyToOne":"belongsTo"===r?"oneToMany":"manyToMany":"belongsTo"===r?"oneToNone":"manyToNone"}static get attributes(){const e=new Map
return this.eachComputedProperty(((t,i)=>{rt(i)&&(i.key=t,i.name=t,e.set(t,i))})),e}static get transformedAttributes(){const e=new Map
return this.eachAttribute(((t,i)=>{i.type&&e.set(t,i.type)})),e}static eachAttribute(e,t){this.attributes.forEach(((i,r)=>{e.call(t,r,i)}))}static eachTransformedAttribute(e,t){this.transformedAttributes.forEach(((i,r)=>{e.call(t,r,i)}))}static toString(){return`model:${this.modelName}`}}function it(e){return"object"==typeof e&&null!==e&&"kind"in e&&"options"in e&&("hasMany"===e.kind||"belongsTo"===e.kind)}function rt(e){return"object"==typeof e&&null!==e&&"kind"in e&&"attribute"===e.kind}ke((x=tt).prototype,"isEmpty",[H.Vv]),ke(x.prototype,"isLoading",[H.Vv]),ke(x.prototype,"isLoaded",[H.Vv]),ke(x.prototype,"hasDirtyAttributes",[H.Vv]),ke(x.prototype,"isSaving",[H.Vv]),ke(x.prototype,"isDeleted",[H.Vv]),ke(x.prototype,"isNew",[H.Vv]),ke(x.prototype,"isValid",[H.Vv]),ke(x.prototype,"dirtyType",[H.Vv]),ke(x.prototype,"isError",[H.Vv]),ke(x.prototype,"id",[Ye]),ke(x.prototype,"currentState",[Ye]),ke(x.prototype,"errors",[et]),ke(x.prototype,"adapterError",[H.Vv]),ae(tt,"isModel",!0),ae(tt,"modelName",null),ke(x,"inverseMap",[et]),ke(x,"relationships",[et]),ke(x,"relationshipNames",[et]),ke(x,"relatedTypes",[et]),ke(x,"relationshipsByName",[et]),ke(x,"relationshipsObject",[et]),ke(x,"fields",[et]),ke(x,"attributes",[et]),ke(x,"transformedAttributes",[et]),tt.prototype.save=function(e){let t
return this.currentState.isNew&&this.currentState.isDeleted?t=Promise.resolve(this):(this.errors.clear(),t=this[K.pm].saveRecord(this,e)),t},tt.prototype.destroyRecord=function(e){const{isNew:t}=this.currentState
return this.deleteRecord(),t?Promise.resolve(this):this.save(e).then((e=>(this.unloadRecord(),this)))},tt.prototype.unloadRecord=function(){this.currentState.isNew&&(this.isDestroyed||this.isDestroying)||this[K.pm].unloadRecord(this)},tt.prototype.hasMany=function(e){return Ie(this).referenceFor("hasMany",e)},tt.prototype.belongsTo=function(e){return Ie(this).referenceFor("belongsTo",e)},tt.prototype.serialize=function(e){return(0,X.upgradeStore)(this[K.pm]),this[K.pm].serializeRecord(this,e)},tt.prototype._createSnapshot=function(){const e=this[K.pm]
if((0,X.upgradeStore)(e),!e._fetchManager){const t=(0,ne.A)(i(491)).FetchManager
e._fetchManager=new t(e)}return e._fetchManager.createSnapshot((0,R.o)(this))},tt.prototype.deleteRecord=function(){this.currentState&&this[K.pm].deleteRecord(this)},tt.prototype.changedAttributes=function(){return(0,k.oX)(this).changedAttrs((0,R.o)(this))},tt.prototype.rollbackAttributes=function(){const{currentState:e}=this,{isNew:t}=e
this[K.pm]._join((()=>{(0,k.oX)(this).rollbackAttrs((0,R.o)(this)),this.errors.clear(),e.cleanErrorRequests(),t&&this.unloadRecord()}))},tt.prototype.reload=function(e={}){e.isReloading=!0,e.reload=!0
const t=(0,R.o)(this)
return this.isReloading=!0,this[K.pm].request({op:"findRecord",data:{options:e,record:t},cacheOptions:{[Symbol.for("wd:skip-cache")]:!0}}).then((()=>this)).finally((()=>{this.isReloading=!1}))},(0,W.sg)(tt.prototype,"isReloading",!1),tt.prototype._createProps=null,tt.prototype._secretInit=null
class st{constructor(e){this.store=e,this._schemas=new Map,this._typeMisses=new Set}hasTrait(e){return!1}resourceHasTrait(e,t){return!1}transformation(e){}derivation(e){}hashFn(e){}resource(e){const t=le(e.type)
return this._schemas.has(t)||this._loadModelSchema(t),this._schemas.get(t).schema}registerResources(e){}registerResource(e){}registerTransformation(e){}registerDerivation(e){}registerHashFn(e){}_loadModelSchema(e){const t=this.store.modelFor(e),i=t.attributes,r=Object.create(null)
i.forEach(((e,t)=>r[t]=e))
const s=t.relationshipsObject||null,n=new Map
for(const a of Object.values(r))n.set(a.name,a)
for(const a of Object.values(s))n.set(a.name,a)
const o={schema:{legacy:!0,identity:{name:"id",kind:"@id"},type:e,fields:Array.from(n.values())},attributes:r,relationships:s,fields:n}
return this._schemas.set(e,o),o}fields(e){const t=le(e.type)
return this._schemas.has(t)||this._loadModelSchema(t),this._schemas.get(t).fields}hasResource(e){const t=le(e.type)
return!!this._schemas.has(t)||!this._typeMisses.has(t)&&!(null===nt(this.store,t)&&(this._typeMisses.add(t),1))}}function nt(e,t){e._modelFactoryCache||(e._modelFactoryCache=Object.create(null))
const i=e._modelFactoryCache
let r=i[t]
if(!r){if(r=(0,w.getOwner)(e).factoryFor(`model:${t}`),r||(r=function(e,t){const i=(0,w.getOwner)(e),r=i.factoryFor(`mixin:${t}`),s=r&&r.class
if(s){const e=tt.extend(s)
e.__isMixin=!0,e.__mixin=s,i.register(`model:${t}`,e)}return i.factoryFor(`model:${t}`)}(e,t)),!r)return null
const s=r.class
s.isModel&&(s.modelName&&Object.prototype.hasOwnProperty.call(s,"modelName")||Object.defineProperty(s,"modelName",{value:t})),i[t]=r}return r}function ot(e,t){const i=e.type,r={_createProps:t,_secretInit:{identifier:e,cache:this.cache,store:this,cb:ct}}
return(0,w.setOwner)(r,(0,w.getOwner)(this)),nt(this,i).class.create(r)}function at(e){e.destroy()}function lt(e){const t=nt(this,le(e)),i=t&&t.class?t.class:null
if(i&&i.isModel&&!this._forceShim)return i}function ct(e,t,i,r){(0,k.TP)(e,i),k.i.set(e,r),(0,k.Wz)(e,t)}st.prototype.doesTypeExist=function(e){return(0,L.deprecate)("Use `schema.hasResource({ type })` instead of `schema.doesTypeExist(type)`",!1,{id:"ember-data:schema-service-updates",until:"5.0",for:"ember-data",since:{available:"5.4",enabled:"5.4"}}),this.hasResource({type:e})},st.prototype.attributesDefinitionFor=function(e){(0,L.deprecate)("Use `schema.fields({ type })` instead of `schema.attributesDefinitionFor({ type })`",!1,{id:"ember-data:schema-service-updates",until:"5.0",for:"ember-data",since:{available:"5.4",enabled:"5.4"}})
const t=le(e.type)
return this._schemas.has(t)||this._loadModelSchema(t),this._schemas.get(t).attributes},st.prototype.relationshipsDefinitionFor=function(e){(0,L.deprecate)("Use `schema.fields({ type })` instead of `schema.relationshipsDefinitionFor({ type })`",!1,{id:"ember-data:schema-service-updates",until:"5.0",for:"ember-data",since:{available:"5.4",enabled:"5.4"}})
const t=le(e.type)
return this._schemas.has(t)||this._loadModelSchema(t),this._schemas.get(t).relationships}
var dt=i(82),ht=i(464)
const ut="undefined"!=typeof fetch?(...e)=>fetch(...e):"undefined"!=typeof FastBoot?(...e)=>FastBoot.require("node-fetch")(...e):()=>{throw new Error("No Fetch Implementation Found")},ft=new Set(["updateRecord","createRecord","deleteRecord"]),pt=new Map([[400,"Bad Request"],[401,"Unauthorized"],[402,"Payment Required"],[403,"Forbidden"],[404,"Not Found"],[405,"Method Not Allowed"],[406,"Not Acceptable"],[407,"Proxy Authentication Required"],[408,"Request Timeout"],[409,"Conflict"],[410,"Gone"],[411,"Length Required"],[412,"Precondition Failed"],[413,"Payload Too Large"],[414,"URI Too Long"],[415,"Unsupported Media Type"],[416,"Range Not Satisfiable"],[417,"Expectation Failed"],[419,"Page Expired"],[420,"Enhance Your Calm"],[421,"Misdirected Request"],[422,"Unprocessable Entity"],[423,"Locked"],[424,"Failed Dependency"],[425,"Too Early"],[426,"Upgrade Required"],[428,"Precondition Required"],[429,"Too Many Requests"],[430,"Request Header Fields Too Large"],[431,"Request Header Fields Too Large"],[450,"Blocked By Windows Parental Controls"],[451,"Unavailable For Legal Reasons"],[500,"Internal Server Error"],[501,"Not Implemented"],[502,"Bad Gateway"],[503,"Service Unavailable"],[504,"Gateway Timeout"],[505,"HTTP Version Not Supported"],[506,"Variant Also Negotiates"],[507,"Insufficient Storage"],[508,"Loop Detected"],[509,"Bandwidth Limit Exceeded"],[510,"Not Extended"],[511,"Network Authentication Required"]]),yt={async request(e){let t
try{t=await ut(e.request.url,e.request)}catch(e){throw e instanceof DOMException&&"AbortError"===e.name?(e.statusText="Aborted",e.status=20,e.isRequestError=!0):(e.statusText="Unknown Network Error",e.status=0,e.isRequestError=!0),e}const i=!t.ok||t.status>=400,r=e.request.op,s=Boolean(r&&ft.has(r))
if(!i&&!s&&204!==t.status&&!t.headers.has("date")){const e=new Headers(t.headers)
e.set("date",(new Date).toUTCString()),t=function(e,t){const i=(0,ht.f)(e)
return new Response(e.body,Object.assign(i,t))}(t,{headers:e})}if(e.setResponse(t),204===t.status)return null
let n=""
{const i=t.body.getReader(),r=new TextDecoder
let s=e.hasRequestedStream,o=s?new TransformStream:null,a=o?.writable.getWriter()
for(s&&(e.request.signal?.addEventListener("abort",(()=>{s&&(o.writable.abort("Request Aborted"),o.readable.cancel("Request Aborted"))})),e.setStream(o.readable));;){const{done:t,value:l}=await i.read()
if(t){s&&(s=!1,await a.ready,await a.close())
break}if(n+=r.decode(l,{stream:!0}),s)await a.ready,await a.write(l)
else if(e.hasRequestedStream){const t=new TextEncoder
s=!0,o=new TransformStream,e.request.signal?.addEventListener("abort",(()=>{s&&(o.writable.abort("Request Aborted"),o.readable.cancel("Request Aborted"))})),e.setStream(o.readable),a=o.writable.getWriter(),await a.ready,await a.write(t.encode(n)),await a.ready,await a.write(l)}}s&&(s=!1,await a.ready,await a.close())}if(i){let i
try{i=JSON.parse(n)}catch{}const r=Array.isArray(i)?i:null!==(o=i)&&"object"==typeof o&&Array.isArray(i.errors)?i.errors:null,s=t.statusText||pt.get(t.status)||"Unknown Request Error",a=`[${t.status} ${s}] ${e.request.method??"GET"} (${t.type}) - ${t.url}`,l=r?new AggregateError(r,a):new Error(a)
throw l.status=t.status,l.statusText=s,l.isRequestError=!0,l.code=l.status,l.name=l.statusText.replaceAll(" ","")+"Error",l.content=i,l}return JSON.parse(n)
var o}}
function mt(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e
var i=e[Symbol.toPrimitive]
if(void 0!==i){var r=i.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class gt extends R.Ay{constructor(e){super(e),mt(this,"adapterFor",O),mt(this,"serializerFor",q),mt(this,"pushPayload",j),mt(this,"normalize",D),mt(this,"serializeRecord",P),"requestManager"in this||(this.requestManager=new dt.Ay,this.requestManager.use([C,yt])),this.requestManager.useCache(R.lL)}createSchemaService(){return new st(this)}createCache(e){return new n(e)}instantiateRecord(e,t){return ot.call(this,e,t)}teardownRecord(e){at.call(this,e)}modelFor(e){return lt.call(this,e)||super.modelFor(e)}destroy(){N.call(this),super.destroy()}}},81:(e,t,i)=>{function r(e,t,i){return(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||!e)return e
var i=e[Symbol.toPrimitive]
if(void 0!==i){var r=i.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t))?r:String(r))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e
var r}function s(e,t,i,r){i&&Object.defineProperty(e,t,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(r):void 0})}function n(e,t,i,r,s){var n={}
return Object.keys(r).forEach((function(e){n[e]=r[e]})),n.enumerable=!!n.enumerable,n.configurable=!!n.configurable,("value"in n||n.initializer)&&(n.writable=!0),n=i.slice().reverse().reduce((function(i,r){return r(e,t,i)||i}),n),s&&void 0!==n.initializer&&(n.value=n.initializer?n.initializer.call(s):void 0,n.initializer=void 0),void 0===n.initializer&&(Object.defineProperty(e,t,n),n=null),n}i.d(t,{_:()=>n,a:()=>s,b:()=>r})},266:(e,t,i)=>{i.r(t),i.d(t,{default:()=>h})
var r,s,n,o=i(81),a=i(735),l=i(336),c=i.n(l),d=i(666)
let h=(r=(0,a.inject)("page-title"),s=class extends(c()){constructor(e){super(e),(0,o.a)(this,"tokens",n,this),(0,o.b)(this,"tokenId",(0,d.guidFor)(this)),this.tokens.push({id:this.tokenId})}compute(e,t){const i={...t,id:this.tokenId,title:e.join("")}
return this.tokens.push(i),this.tokens.scheduleTitleUpdate(),""}willDestroy(){super.willDestroy(),this.tokens.remove(this.tokenId),this.tokens.scheduleTitleUpdate()}},n=(0,o._)(s.prototype,"tokens",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s)},299:(e,t,i)=>{i.r(t),i.d(t,{default:()=>g})
var r,s,n,o,a,l=i(81),c=i(223),d=i(735),h=i.n(d),u=i(553),f=i(603)
const p="undefined"!=typeof FastBoot,y="routeDidChange",m=["separator","prepend","replace"]
let g=(r=(0,d.inject)("router"),s=(0,d.inject)("-document"),n=class extends(h()){constructor(e){if(super(e),(0,l.a)(this,"router",o,this),(0,l.a)(this,"document",a,this),(0,l.b)(this,"tokens",[]),(0,l.b)(this,"_defaultConfig",{separator:" | ",prepend:!0,replace:null}),(0,l.b)(this,"scheduleTitleUpdate",(()=>{(0,c.scheduleOnce)("afterRender",this,this._updateTitle)})),this._validateExistingTitleElement(),function(e){return"resolveRegistration"in e}(e)){const i=e.resolveRegistration("config:environment")
"object"==typeof(t=i)&&null!==t&&"pageTitle"in t&&m.forEach((e=>{if(!(0,u.isEmpty)(i.pageTitle[e])){const t=i.pageTitle[e]
this._defaultConfig[e]=t}}))}var t
this.router.on(y,this.scheduleTitleUpdate)}applyTokenDefaults(e){const t=this._defaultConfig.separator,i=this._defaultConfig.prepend,r=this._defaultConfig.replace
e.previous??=null,e.next??=null,null==e.separator&&(e.separator=t),null==e.prepend&&null!=i&&(e.prepend=i),null==e.replace&&null!=r&&(e.replace=r)}inheritFromPrevious(e){const t=e.previous
t&&(null==e.separator&&(e.separator=t.separator),null==e.prepend&&(e.prepend=t.prepend))}push(e){const t=this._findTokenById(e.id)
if(t){const i=this.tokens.indexOf(t),r=[...this.tokens],s=t.previous
return e.previous=s,e.next=t.next,this.inheritFromPrevious(e),this.applyTokenDefaults(e),r.splice(i,1,e),void(this.tokens=r)}const i=this.tokens.slice(-1)[0]
i&&(e.previous=i??null,i.next=e,this.inheritFromPrevious(e)),this.applyTokenDefaults(e),this.tokens=[...this.tokens,e]}remove(e){const t=this._findTokenById(e)
if(!t)return
const{next:i,previous:r}=t
i&&(i.previous=r),r&&(r.next=i),t.previous=t.next=null
const s=[...this.tokens]
s.splice(s.indexOf(t),1),this.tokens=s}get visibleTokens(){const e=this.tokens
let t=e?e.length:0
const i=[]
for(;t--;){const r=e[t]
if(r){if(r.replace){i.unshift(r)
break}i.unshift(r)}}return i}get sortedTokens(){const e=this.visibleTokens
if(!e)return[]
let t=!0,i=[]
const r=[i],s=[]
return e.forEach((e=>{if(e.front)s.unshift(e)
else if(e.prepend){t&&(t=!1,i=[],r.push(i))
const s=i[0]
s&&((e={...e}).separator=s.separator),i.unshift(e)}else t||(t=!0,i=[],r.push(i)),i.push(e)})),s.concat(r.reduce(((e,t)=>e.concat(t)),[]))}toString(){const e=this.sortedTokens,t=[]
for(let i=0,r=e.length;i<r;i++){const s=e[i]
s&&s.title&&(t.push(s.title),i+1<r&&t.push(s.separator))}return t.join("")}willDestroy(){super.willDestroy(),this.router.off(y,this.scheduleTitleUpdate)}_updateTitle(){const e=this.toString()
p?this.updateFastbootTitle(e):this.document.title=e,this.titleDidUpdate(e)}_validateExistingTitleElement(){p||(0,f.assert)("[ember-page-title]: Multiple title elements found. Check for other addons like ember-cli-head updating <title> as well.",document.head.querySelectorAll("title").length<=1)}_findTokenById(e){return this.tokens.find((t=>t.id===e))}updateFastbootTitle(e){if(!p)return
const t=this.document.head,i=t.childNodes
for(let n=0;n<i.length;n++){const e=i[n]
e&&"title"===e.nodeName.toLowerCase()&&t.removeChild(e)}const r=this.document.createElement("title"),s=this.document.createTextNode(e)
r.appendChild(s),t.appendChild(r)}titleDidUpdate(e){}},o=(0,l._)(n.prototype,"router",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a=(0,l._)(n.prototype,"document",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),n)},411:(e,t,i)=>{i.r(t),i.d(t,{ModuleRegistry:()=>m,default:()=>g})
class r{constructor(e,t,i){this.limit=e,this.func=t,this.store=i,this.size=0,this.misses=0,this.hits=0,this.store=i||new Map}get(e){let t=this.store.get(e)
return this.store.has(e)?(this.hits++,this.store.get(e)):(this.misses++,t=this.set(e,this.func(e)),t)}set(e,t){return this.limit>this.size&&(this.size++,this.store.set(e,t)),t}purge(){this.store.clear(),this.size=0,this.hits=0,this.misses=0}}const s=/[ _]/g,n=new r(1e3,(e=>{return(t=e,p.get(t)).replace(s,"-")
var t})),o=/^(\-|_)+(.)?/,a=/(.)(\-|\_|\.|\s)+(.)?/g,l=/(^|\/|\.)([a-z])/g,c=new r(1e3,(e=>{const t=(e,t,i)=>i?`_${i.toUpperCase()}`:"",i=(e,t,i,r)=>t+(r?r.toUpperCase():""),r=e.split("/")
for(let s=0;s<r.length;s++)r[s]=r[s].replace(o,t).replace(a,i)
return r.join("/").replace(l,(e=>e.toUpperCase()))})),d=/([a-z\d])([A-Z]+)/g,h=/\-|\s+/g,u=new r(1e3,(e=>e.replace(d,"$1_$2").replace(h,"_").toLowerCase())),f=/([a-z\d])([A-Z])/g,p=new r(1e3,(e=>e.replace(f,"$1_$2").toLowerCase()))
function y(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e
var i=e[Symbol.toPrimitive]
if(void 0!==i){var r=i.call(e,"string")
if("object"!=typeof r)return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class m{constructor(e){this._entries=e||globalThis.requirejs.entries}moduleNames(){return Object.keys(this._entries)}has(e){return e in this._entries}get(...e){return globalThis.require(...e)}}class g{static create(e){return new this(e)}static withModules(e){var t
return y(t=class extends(this){},"explicitModules",e),t}constructor(e){if(y(this,"moduleBasedResolver",!0),y(this,"_deprecatedPodModulePrefix",!1),y(this,"_normalizeCache",Object.create(null)),y(this,"moduleNameLookupPatterns",[this.podBasedModuleName,this.podBasedComponentsInSubdir,this.mainModuleName,this.defaultModuleName,this.nestedColocationComponentModuleName]),Object.assign(this,e),!this._moduleRegistry){let e=this.constructor.explicitModules
e?this._moduleRegistry={moduleNames:()=>Object.keys(e),has:t=>Boolean(e[t]),get:t=>e[t],addModules(t){e=Object.assign({},e,t)}}:(void 0===globalThis.requirejs.entries&&(globalThis.requirejs.entries=globalThis.requirejs._eak_seen),this._moduleRegistry=new m)}this.pluralizedTypes=this.pluralizedTypes||Object.create(null),this.pluralizedTypes.config||(this.pluralizedTypes.config="config")}makeToString(e,t){return this.namespace.modulePrefix+"@"+t+":"}shouldWrapInClassFactory(){return!1}parseName(e){if(!0===e.parsedName)return e
let t,i,r,s=e.split("@")
if(3===s.length){if(0===s[0].length){t=`@${s[1]}`
let e=s[2].split(":")
i=e[0],r=e[1]}else t=`@${s[1]}`,i=s[0].slice(0,-1),r=s[2]
"template:components"===i&&(r=`components/${r}`,i="template")}else if(2===s.length){let e=s[0].split(":")
if(2===e.length)0===e[1].length?(i=e[0],r=`@${s[1]}`):(t=e[1],i=e[0],r=s[1])
else{let e=s[1].split(":")
t=s[0],i=e[0],r=e[1]}"template"===i&&0===t.lastIndexOf("components/",0)&&(r=`components/${r}`,t=t.slice(11))}else s=e.split(":"),i=s[0],r=s[1]
let n=r,o=this.namespace
return{parsedName:!0,fullName:e,prefix:t||this.prefix({type:i}),type:i,fullNameWithoutType:n,name:r,root:o,resolveMethodName:"resolve"+(a=i,c.get(a))}
var a}resolveOther(e){_("`modulePrefix` must be defined",this.namespace.modulePrefix)
let t=this.findModuleName(e)
if(t){let r=this._extractDefaultExport(t,e)
if(void 0===r)throw new Error(` Expected to find: '${e.fullName}' within '${t}' but got 'undefined'. Did you forget to 'export default' within '${t}'?`)
return this.shouldWrapInClassFactory(r,e)&&(i=r,r={create:e=>"function"==typeof i.extend?i.extend(e):i}),r}var i}normalize(e){return this._normalizeCache[e]||(this._normalizeCache[e]=this._normalize(e))}resolve(e){if("resolver:current"===e)return{create:()=>this}
let t,i=this.parseName(e),r=i.resolveMethodName
return"function"==typeof this[r]&&(t=this[r](i)),null==t&&(t=this.resolveOther(i)),t}addModules(e){if(!this._moduleRegistry.addModules)throw new Error("addModules is only supported when your Resolver has been configured to use static modules via Resolver.withModules()")
this._moduleRegistry.addModules(e)}_normalize(e){let t=e.split(":")
if(t.length>1){let e=t[0]
return"component"===e||"helper"===e||"modifier"===e||"template"===e&&0===t[1].indexOf("components/")?e+":"+t[1].replace(/_/g,"-"):e+":"+(i=t[1].replace(/\./g,"/"),n.get(i))}return e
var i}pluralize(e){return this.pluralizedTypes[e]||(this.pluralizedTypes[e]=e+"s")}podBasedLookupWithPrefix(e,t){let i=t.fullNameWithoutType
return"template"===t.type&&(i=i.replace(/^components\//,"")),e+"/"+i+"/"+t.type}podBasedModuleName(e){let t=this.namespace.podModulePrefix||this.namespace.modulePrefix
return this.podBasedLookupWithPrefix(t,e)}podBasedComponentsInSubdir(e){let t=this.namespace.podModulePrefix||this.namespace.modulePrefix
if(t+="/components","component"===e.type||/^components/.test(e.fullNameWithoutType))return this.podBasedLookupWithPrefix(t,e)}resolveEngine(e){let t=e.fullNameWithoutType+"/engine"
if(this._moduleRegistry.has(t))return this._extractDefaultExport(t)}resolveRouteMap(e){let t=e.fullNameWithoutType,i=t+"/routes"
if(this._moduleRegistry.has(i)){let e=this._extractDefaultExport(i)
return _(`The route map for ${t} should be wrapped by 'buildRoutes' before exporting.`,e.isRouteMap),e}}resolveTemplate(e){return this.resolveOther(e)}mainModuleName(e){if("main"===e.fullNameWithoutType)return e.prefix+"/"+e.type}defaultModuleName(e){return e.prefix+"/"+this.pluralize(e.type)+"/"+e.fullNameWithoutType}nestedColocationComponentModuleName(e){if("component"===e.type)return e.prefix+"/"+this.pluralize(e.type)+"/"+e.fullNameWithoutType+"/index"}prefix(e){let t=this.namespace.modulePrefix
return this.namespace[e.type+"Prefix"]&&(t=this.namespace[e.type+"Prefix"]),t}findModuleName(e){let t,i=this.moduleNameLookupPatterns
for(let r=0,s=i.length;r<s;r++){let s=i[r].call(this,e)
if(s&&(s=this.chooseModuleName(s)),s&&this._moduleRegistry.has(s)&&(t=s),t)return t}}chooseModuleName(e){let t=(i=e,u.get(i))
var i
if(e!==t&&this._moduleRegistry.has(e)&&this._moduleRegistry.has(t))throw new TypeError(`Ambiguous module names: '${e}' and '${t}'`)
return this._moduleRegistry.has(e)?e:this._moduleRegistry.has(t)?t:void 0}knownForType(e){let t=this._moduleRegistry.moduleNames(),i=Object.create(null)
for(let r=0,s=t.length;r<s;r++){let s=t[r],n=this.translateToContainerFullname(e,s)
n&&(i[n]=!0)}return i}translateToContainerFullname(e,t){let i=this.prefix({type:e}),r=i+"/",s="/"+e,n=t.indexOf(r),o=t.indexOf(s)
if(0===n&&o===t.length-s.length&&t.length>r.length+s.length)return e+":"+t.slice(n+r.length,o)
let a=i+"/"+this.pluralize(e)+"/"
return 0===t.indexOf(a)&&t.length>a.length?e+":"+t.slice(a.length):void 0}_extractDefaultExport(e){let t=this._moduleRegistry.get(e,null,null,!0)
return t&&t.default&&(t=t.default),t}}function _(e,t){if(!t)throw new Error(e)}y(g,"moduleBasedResolver",!0)},139:(e,t,i)=>{function r(e,t){let i=e.load(t)
if(!i)throw new Error(t+" must export an initializer.")
let r=i.default
if(!r)throw new Error(t+" must have a default export")
return r.name||(r.name=t.slice(t.lastIndexOf("/")+1)),r}function s(e,t,i){var s=t+"/initializers/",n=t+"/instance-initializers/",o=[],a=[]
let l
l=i?{names:()=>Object.keys(i),load:e=>i[e]}:{names(){let e=globalThis.requirejs
if(!e||!e._eak_seen)throw new Error("No global AMD loader found. To use loadInitializers without a global AMD loader you must provide explicit modules")
return Object.keys(e._eak_seen)},load:e=>globalThis.require(e,null,null,!0)}
for(let r of l.names())r.startsWith(s)&&!r.endsWith("-test")?o.push(r):r.startsWith(n)&&!r.endsWith("-test")&&a.push(r)
!function(e,t,i){for(let s of i)e.initializer(r(t,s))}(e,l,o),function(e,t,i){for(let s of i)e.instanceInitializer(r(t,s))}(e,l,a)}i.r(t),i.d(t,{default:()=>s})}}])
