import{r as v,j as l}from"./index-DlRWamn9.js";import{B as x}from"./button-BzzomSIn.js";import{I as ie}from"./input-wKP_J64x.js";import{C as ae,b as re,a as ce}from"./card-KLcyomIB.js";import{c as Q,X as L,e as le}from"./App-CvhLKF7W.js";import"./utils-CytzSlOG.js";/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=Q("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=Q("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);var j;(function(e){e.STRING="string",e.NUMBER="number",e.INTEGER="integer",e.BOOLEAN="boolean",e.ARRAY="array",e.OBJECT="object"})(j||(j={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(e){e.LANGUAGE_UNSPECIFIED="language_unspecified",e.PYTHON="python"})(G||(G={}));var H;(function(e){e.OUTCOME_UNSPECIFIED="outcome_unspecified",e.OUTCOME_OK="outcome_ok",e.OUTCOME_FAILED="outcome_failed",e.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(H||(H={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U=["user","model","function","system"];var F;(function(e){e.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",e.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",e.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",e.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",e.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",e.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY"})(F||(F={}));var P;(function(e){e.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",e.BLOCK_NONE="BLOCK_NONE"})(P||(P={}));var k;(function(e){e.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",e.NEGLIGIBLE="NEGLIGIBLE",e.LOW="LOW",e.MEDIUM="MEDIUM",e.HIGH="HIGH"})(k||(k={}));var $;(function(e){e.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",e.SAFETY="SAFETY",e.OTHER="OTHER"})($||($={}));var O;(function(e){e.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",e.STOP="STOP",e.MAX_TOKENS="MAX_TOKENS",e.SAFETY="SAFETY",e.RECITATION="RECITATION",e.LANGUAGE="LANGUAGE",e.BLOCKLIST="BLOCKLIST",e.PROHIBITED_CONTENT="PROHIBITED_CONTENT",e.SPII="SPII",e.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",e.OTHER="OTHER"})(O||(O={}));var B;(function(e){e.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",e.RETRIEVAL_QUERY="RETRIEVAL_QUERY",e.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",e.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",e.CLASSIFICATION="CLASSIFICATION",e.CLUSTERING="CLUSTERING"})(B||(B={}));var K;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.AUTO="AUTO",e.ANY="ANY",e.NONE="NONE"})(K||(K={}));var Y;(function(e){e.MODE_UNSPECIFIED="MODE_UNSPECIFIED",e.MODE_DYNAMIC="MODE_DYNAMIC"})(Y||(Y={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h extends Error{constructor(n){super(`[GoogleGenerativeAI Error]: ${n}`)}}class I extends h{constructor(n,t){super(n),this.response=t}}class ee extends h{constructor(n,t,s,o){super(n),this.status=t,this.statusText=s,this.errorDetails=o}}class _ extends h{}class te extends h{}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue="https://generativelanguage.googleapis.com",fe="v1beta",he="0.24.1",ge="genai-js";var y;(function(e){e.GENERATE_CONTENT="generateContent",e.STREAM_GENERATE_CONTENT="streamGenerateContent",e.COUNT_TOKENS="countTokens",e.EMBED_CONTENT="embedContent",e.BATCH_EMBED_CONTENTS="batchEmbedContents"})(y||(y={}));class Ee{constructor(n,t,s,o,i){this.model=n,this.task=t,this.apiKey=s,this.stream=o,this.requestOptions=i}toString(){var n,t;const s=((n=this.requestOptions)===null||n===void 0?void 0:n.apiVersion)||fe;let i=`${((t=this.requestOptions)===null||t===void 0?void 0:t.baseUrl)||ue}/${s}/${this.model}:${this.task}`;return this.stream&&(i+="?alt=sse"),i}}function pe(e){const n=[];return e!=null&&e.apiClient&&n.push(e.apiClient),n.push(`${ge}/${he}`),n.join(" ")}async function Ce(e){var n;const t=new Headers;t.append("Content-Type","application/json"),t.append("x-goog-api-client",pe(e.requestOptions)),t.append("x-goog-api-key",e.apiKey);let s=(n=e.requestOptions)===null||n===void 0?void 0:n.customHeaders;if(s){if(!(s instanceof Headers))try{s=new Headers(s)}catch(o){throw new _(`unable to convert customHeaders value ${JSON.stringify(s)} to Headers: ${o.message}`)}for(const[o,i]of s.entries()){if(o==="x-goog-api-key")throw new _(`Cannot set reserved header name ${o}`);if(o==="x-goog-api-client")throw new _(`Header name ${o} can only be set using the apiClient field`);t.append(o,i)}}return t}async function me(e,n,t,s,o,i){const a=new Ee(e,n,t,s,i);return{url:a.toString(),fetchOptions:Object.assign(Object.assign({},Ie(i)),{method:"POST",headers:await Ce(a),body:o})}}async function N(e,n,t,s,o,i={},a=fetch){const{url:r,fetchOptions:d}=await me(e,n,t,s,o,i);return _e(r,d,a)}async function _e(e,n,t=fetch){let s;try{s=await t(e,n)}catch(o){ve(o,e)}return s.ok||await ye(s,e),s}function ve(e,n){let t=e;throw t.name==="AbortError"?(t=new te(`Request aborted when fetching ${n.toString()}: ${e.message}`),t.stack=e.stack):e instanceof ee||e instanceof _||(t=new h(`Error fetching from ${n.toString()}: ${e.message}`),t.stack=e.stack),t}async function ye(e,n){let t="",s;try{const o=await e.json();t=o.error.message,o.error.details&&(t+=` ${JSON.stringify(o.error.details)}`,s=o.error.details)}catch{}throw new ee(`Error fetching from ${n.toString()}: [${e.status} ${e.statusText}] ${t}`,e.status,e.statusText,s)}function Ie(e){const n={};if((e==null?void 0:e.signal)!==void 0||(e==null?void 0:e.timeout)>=0){const t=new AbortController;(e==null?void 0:e.timeout)>=0&&setTimeout(()=>t.abort(),e.timeout),e!=null&&e.signal&&e.signal.addEventListener("abort",()=>{t.abort()}),n.signal=t.signal}return n}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),A(e.candidates[0]))throw new I(`${m(e)}`,e);return Oe(e)}else if(e.promptFeedback)throw new I(`Text not available. ${m(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),A(e.candidates[0]))throw new I(`${m(e)}`,e);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),q(e)[0]}else if(e.promptFeedback)throw new I(`Function call not available. ${m(e)}`,e)},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),A(e.candidates[0]))throw new I(`${m(e)}`,e);return q(e)}else if(e.promptFeedback)throw new I(`Function call not available. ${m(e)}`,e)},e}function Oe(e){var n,t,s,o;const i=[];if(!((t=(n=e.candidates)===null||n===void 0?void 0:n[0].content)===null||t===void 0)&&t.parts)for(const a of(o=(s=e.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)a.text&&i.push(a.text),a.executableCode&&i.push("\n```"+a.executableCode.language+`
`+a.executableCode.code+"\n```\n"),a.codeExecutionResult&&i.push("\n```\n"+a.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}function q(e){var n,t,s,o;const i=[];if(!((t=(n=e.candidates)===null||n===void 0?void 0:n[0].content)===null||t===void 0)&&t.parts)for(const a of(o=(s=e.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)a.functionCall&&i.push(a.functionCall);if(i.length>0)return i}const Re=[O.RECITATION,O.SAFETY,O.LANGUAGE];function A(e){return!!e.finishReason&&Re.includes(e.finishReason)}function m(e){var n,t,s;let o="";if((!e.candidates||e.candidates.length===0)&&e.promptFeedback)o+="Response was blocked",!((n=e.promptFeedback)===null||n===void 0)&&n.blockReason&&(o+=` due to ${e.promptFeedback.blockReason}`),!((t=e.promptFeedback)===null||t===void 0)&&t.blockReasonMessage&&(o+=`: ${e.promptFeedback.blockReasonMessage}`);else if(!((s=e.candidates)===null||s===void 0)&&s[0]){const i=e.candidates[0];A(i)&&(o+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(o+=`: ${i.finishMessage}`))}return o}function R(e){return this instanceof R?(this.v=e,this):new R(e)}function Se(e,n,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s=t.apply(e,n||[]),o,i=[];return o={},a("next"),a("throw"),a("return"),o[Symbol.asyncIterator]=function(){return this},o;function a(u){s[u]&&(o[u]=function(f){return new Promise(function(c,E){i.push([u,f,c,E])>1||r(u,f)})})}function r(u,f){try{d(s[u](f))}catch(c){C(i[0][3],c)}}function d(u){u.value instanceof R?Promise.resolve(u.value.v).then(g,p):C(i[0][2],u)}function g(u){r("next",u)}function p(u){r("throw",u)}function C(u,f){u(f),i.shift(),i.length&&r(i[0][0],i[0][1])}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function Ne(e){const n=e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),t=we(n),[s,o]=t.tee();return{stream:Ae(s),response:be(o)}}async function be(e){const n=[],t=e.getReader();for(;;){const{done:s,value:o}=await t.read();if(s)return M(Te(n));n.push(o)}}function Ae(e){return Se(this,arguments,function*(){const t=e.getReader();for(;;){const{value:s,done:o}=yield R(t.read());if(o)break;yield yield R(M(s))}})}function we(e){const n=e.getReader();return new ReadableStream({start(s){let o="";return i();function i(){return n.read().then(({value:a,done:r})=>{if(r){if(o.trim()){s.error(new h("Failed to parse stream"));return}s.close();return}o+=a;let d=o.match(z),g;for(;d;){try{g=JSON.parse(d[1])}catch{s.error(new h(`Error parsing JSON response: "${d[1]}"`));return}s.enqueue(g),o=o.substring(d[0].length),d=o.match(z)}return i()}).catch(a=>{let r=a;throw r.stack=a.stack,r.name==="AbortError"?r=new te("Request aborted when reading from the stream"):r=new h("Error reading from the stream"),r})}}})}function Te(e){const n=e[e.length-1],t={promptFeedback:n==null?void 0:n.promptFeedback};for(const s of e){if(s.candidates){let o=0;for(const i of s.candidates)if(t.candidates||(t.candidates=[]),t.candidates[o]||(t.candidates[o]={index:o}),t.candidates[o].citationMetadata=i.citationMetadata,t.candidates[o].groundingMetadata=i.groundingMetadata,t.candidates[o].finishReason=i.finishReason,t.candidates[o].finishMessage=i.finishMessage,t.candidates[o].safetyRatings=i.safetyRatings,i.content&&i.content.parts){t.candidates[o].content||(t.candidates[o].content={role:i.content.role||"user",parts:[]});const a={};for(const r of i.content.parts)r.text&&(a.text=r.text),r.functionCall&&(a.functionCall=r.functionCall),r.executableCode&&(a.executableCode=r.executableCode),r.codeExecutionResult&&(a.codeExecutionResult=r.codeExecutionResult),Object.keys(a).length===0&&(a.text=""),t.candidates[o].content.parts.push(a)}o++}s.usageMetadata&&(t.usageMetadata=s.usageMetadata)}return t}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e,n,t,s){const o=await N(n,y.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(t),s);return Ne(o)}async function se(e,n,t,s){const i=await(await N(n,y.GENERATE_CONTENT,e,!1,JSON.stringify(t),s)).json();return{response:M(i)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e){if(e!=null){if(typeof e=="string")return{role:"system",parts:[{text:e}]};if(e.text)return{role:"system",parts:[e]};if(e.parts)return e.role?e:{role:"system",parts:e.parts}}}function S(e){let n=[];if(typeof e=="string")n=[{text:e}];else for(const t of e)typeof t=="string"?n.push({text:t}):n.push(t);return xe(n)}function xe(e){const n={role:"user",parts:[]},t={role:"function",parts:[]};let s=!1,o=!1;for(const i of e)"functionResponse"in i?(t.parts.push(i),o=!0):(n.parts.push(i),s=!0);if(s&&o)throw new h("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!s&&!o)throw new h("No content is provided for sending chat message.");return s?n:t}function Me(e,n){var t;let s={model:n==null?void 0:n.model,generationConfig:n==null?void 0:n.generationConfig,safetySettings:n==null?void 0:n.safetySettings,tools:n==null?void 0:n.tools,toolConfig:n==null?void 0:n.toolConfig,systemInstruction:n==null?void 0:n.systemInstruction,cachedContent:(t=n==null?void 0:n.cachedContent)===null||t===void 0?void 0:t.name,contents:[]};const o=e.generateContentRequest!=null;if(e.contents){if(o)throw new _("CountTokensRequest must have one of contents or generateContentRequest, not both.");s.contents=e.contents}else if(o)s=Object.assign(Object.assign({},s),e.generateContentRequest);else{const i=S(e);s.contents=[i]}return{generateContentRequest:s}}function V(e){let n;return e.contents?n=e:n={contents:[S(e)]},e.systemInstruction&&(n.systemInstruction=oe(e.systemInstruction)),n}function Le(e){return typeof e=="string"||Array.isArray(e)?{content:S(e)}:e}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],De={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function je(e){let n=!1;for(const t of e){const{role:s,parts:o}=t;if(!n&&s!=="user")throw new h(`First content should be with role 'user', got ${s}`);if(!U.includes(s))throw new h(`Each item should include role field. Got ${s} but valid roles are: ${JSON.stringify(U)}`);if(!Array.isArray(o))throw new h("Content should have 'parts' property with an array of Parts");if(o.length===0)throw new h("Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const r of o)for(const d of W)d in r&&(i[d]+=1);const a=De[s];for(const r of W)if(!a.includes(r)&&i[r]>0)throw new h(`Content with role '${s}' can't contain '${r}' part`);n=!0}}function J(e){var n;if(e.candidates===void 0||e.candidates.length===0)return!1;const t=(n=e.candidates[0])===null||n===void 0?void 0:n.content;if(t===void 0||t.parts===void 0||t.parts.length===0)return!1;for(const s of t.parts)if(s===void 0||Object.keys(s).length===0||s.text!==void 0&&s.text==="")return!1;return!0}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X="SILENT_ERROR";class Ge{constructor(n,t,s,o={}){this.model=t,this.params=s,this._requestOptions=o,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=n,s!=null&&s.history&&(je(s.history),this._history=s.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(n,t={}){var s,o,i,a,r,d;await this._sendPromise;const g=S(n),p={safetySettings:(s=this.params)===null||s===void 0?void 0:s.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(a=this.params)===null||a===void 0?void 0:a.toolConfig,systemInstruction:(r=this.params)===null||r===void 0?void 0:r.systemInstruction,cachedContent:(d=this.params)===null||d===void 0?void 0:d.cachedContent,contents:[...this._history,g]},C=Object.assign(Object.assign({},this._requestOptions),t);let u;return this._sendPromise=this._sendPromise.then(()=>se(this._apiKey,this.model,p,C)).then(f=>{var c;if(J(f.response)){this._history.push(g);const E=Object.assign({parts:[],role:"model"},(c=f.response.candidates)===null||c===void 0?void 0:c[0].content);this._history.push(E)}else{const E=m(f.response);E&&console.warn(`sendMessage() was unsuccessful. ${E}. Inspect response object for details.`)}u=f}).catch(f=>{throw this._sendPromise=Promise.resolve(),f}),await this._sendPromise,u}async sendMessageStream(n,t={}){var s,o,i,a,r,d;await this._sendPromise;const g=S(n),p={safetySettings:(s=this.params)===null||s===void 0?void 0:s.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(a=this.params)===null||a===void 0?void 0:a.toolConfig,systemInstruction:(r=this.params)===null||r===void 0?void 0:r.systemInstruction,cachedContent:(d=this.params)===null||d===void 0?void 0:d.cachedContent,contents:[...this._history,g]},C=Object.assign(Object.assign({},this._requestOptions),t),u=ne(this._apiKey,this.model,p,C);return this._sendPromise=this._sendPromise.then(()=>u).catch(f=>{throw new Error(X)}).then(f=>f.response).then(f=>{if(J(f)){this._history.push(g);const c=Object.assign({},f.candidates[0].content);c.role||(c.role="model"),this._history.push(c)}else{const c=m(f);c&&console.warn(`sendMessageStream() was unsuccessful. ${c}. Inspect response object for details.`)}}).catch(f=>{f.message!==X&&console.error(f)}),u}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function He(e,n,t,s){return(await N(n,y.COUNT_TOKENS,e,!1,JSON.stringify(t),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ue(e,n,t,s){return(await N(n,y.EMBED_CONTENT,e,!1,JSON.stringify(t),s)).json()}async function Fe(e,n,t,s){const o=t.requests.map(a=>Object.assign(Object.assign({},a),{model:n}));return(await N(n,y.BATCH_EMBED_CONTENTS,e,!1,JSON.stringify({requests:o}),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(n,t,s={}){this.apiKey=n,this._requestOptions=s,t.model.includes("/")?this.model=t.model:this.model=`models/${t.model}`,this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.toolConfig=t.toolConfig,this.systemInstruction=oe(t.systemInstruction),this.cachedContent=t.cachedContent}async generateContent(n,t={}){var s;const o=V(n),i=Object.assign(Object.assign({},this._requestOptions),t);return se(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(s=this.cachedContent)===null||s===void 0?void 0:s.name},o),i)}async generateContentStream(n,t={}){var s;const o=V(n),i=Object.assign(Object.assign({},this._requestOptions),t);return ne(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(s=this.cachedContent)===null||s===void 0?void 0:s.name},o),i)}startChat(n){var t;return new Ge(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(t=this.cachedContent)===null||t===void 0?void 0:t.name},n),this._requestOptions)}async countTokens(n,t={}){const s=Me(n,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),o=Object.assign(Object.assign({},this._requestOptions),t);return He(this.apiKey,this.model,s,o)}async embedContent(n,t={}){const s=Le(n),o=Object.assign(Object.assign({},this._requestOptions),t);return Ue(this.apiKey,this.model,s,o)}async batchEmbedContents(n,t={}){const s=Object.assign(Object.assign({},this._requestOptions),t);return Fe(this.apiKey,this.model,n,s)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(n){this.apiKey=n}getGenerativeModel(n,t){if(!n.model)throw new h("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new Z(this.apiKey,n,t)}getGenerativeModelFromCachedContent(n,t,s){if(!n.name)throw new _("Cached content must contain a `name` field.");if(!n.model)throw new _("Cached content must contain a `model` field.");const o=["model","systemInstruction"];for(const a of o)if(t!=null&&t[a]&&n[a]&&(t==null?void 0:t[a])!==n[a]){if(a==="model"){const r=t.model.startsWith("models/")?t.model.replace("models/",""):t.model,d=n.model.startsWith("models/")?n.model.replace("models/",""):n.model;if(r===d)continue}throw new _(`Different value for "${a}" specified in modelParams (${t[a]}) and cachedContent (${n[a]})`)}const i=Object.assign(Object.assign({},t),{model:n.model,tools:n.tools,toolConfig:n.toolConfig,systemInstruction:n.systemInstruction,cachedContent:n});return new Z(this.apiKey,i,s)}}const ke="AIzaSyAlIBrQ16b_xVo-gY5JyBTCEEnfyUdjT7I";async function $e(e,n,t){try{const o=new Pe(ke).getGenerativeModel({model:"gemini-1.5-flash"}),i=`You are a helpful customer service assistant for Pizza Plus, a kosher pizza restaurant in Jerusalem, Israel.

Restaurant Details:
- Name: Pizza Plus (פיצה פלוס)
- Location: 2 Ish Matzliach St, Har Homa, Jerusalem (איש מצלח 2, הר חומה, ירושלים)
- Phone: 02-9921201
- WhatsApp Orders: 054-6083500
- Hours: Sun-Thu 11:00-23:00, Fri 11:00-15:00, Sat Night 20:00-23:00
- Kosher: Certified by Chief Rabbinate of Israel (בד״ץ הרבנות הראשית לישראל)

COMPLETE MENU WITH EXACT PRICES:

PIZZAS:
- מגש XL (Pizza XL 42cm): ₪65 base price
- מגש L (Pizza L 36cm): ₪52 base price  
- מגש אישי (Personal Pizza): ₪35 base price

PIZZA TOPPINGS:
For XL Pizza (₪9 each): עגבניות, בצל, זיתים ירוקים, זיתים שחורים, פטריות, פלפל חריף, בולגרית (₪12), חציל, בטטה, תירס, אננס, טונה (₪12), פסטו
For Large Pizza (₪7 each): עגבניות, בצל, זיתים ירוקים, זיתים שחורים, פטריות, פלפל חריף, בולגרית (₪10), חציל, בטטה, תירס, אננס, טונה (₪10), פסטו
For Personal Pizza (₪6 each): עגבניות, בצל, זיתים ירוקים, זיתים שחורים, פטריות, פלפל חריף, בולגרית (₪8), חציל, בטטה, תירס, אננס, טונה (₪8), פסטו
For Half Large Pizza (₪6 each per half): Same toppings, בולגרית (₪7), טונה (₪7)

PASTAS:
- רוטב עגבניות ובזיליקום (Tomato & Basil): ₪52
- שמנת פטריות (Mushroom Cream): ₪52
- רוזה (Rosé - tomato & cream): ₪52

SALADS:
- סלט קטן (Small Salad): ₪39
- סלט גדול (Large Salad): ₪55
Salad Toppings: ביצה קשה, טונה, אבוקדו, בולגרית

SPECIALS:
- פיש & צ'יפס (Fish & Chips): ₪68
- צ'יז קראסט (Cheese Crust Pizza with cheese-stuffed crust): ₪72
- מרקים בעונה (Seasonal Soups): ₪32
- מקלות שוקולד (Chocolate Sticks): ₪32

SIDES:
- צ'יפס קטן (Small Chips): ₪15
- צ'יפס גדול (Large Chips): ₪24
- לחם שום (Garlic Bread): ₪22

DRINKS:
- בקבוק גדול (Large Bottle): ₪15
- בקבוק קטן (Small Bottle): ₪10
- פחית (Can): ₪8

Website Features: Online menu with cart, multilingual support (Hebrew/English/French/Russian), interactive Google Maps, real-time AI chat, WhatsApp ordering, authentic restaurant photos.

Always respond in ${t==="he"?"Hebrew":t==="en"?"English":t==="fr"?"French":"Russian"}. Be helpful, friendly, and encourage orders via WhatsApp 054-6083500. Help calculate prices with toppings and guide ordering.`;return(await o.generateContent({contents:[{role:"user",parts:[{text:i+`

User message: `+e}]}],generationConfig:{maxOutputTokens:300,temperature:.7}})).response.text()}catch(s){return console.error("Gemini API error:",s),t==="he"?"מצטער, אירעה שגיאה. אנא נסה שוב או צור קשר טלפונית.":t==="fr"?"Désolé, une erreur s'est produite. Veuillez réessayer ou nous contacter par téléphone.":t==="ru"?"Извините, произошла ошибка. Пожалуйста, попробуйте еще раз или свяжитесь с нами по телефону.":"Sorry, an error occurred. Please try again or contact us by phone."}}const We=({translations:e,currentLanguage:n})=>{const[t,s]=v.useState(!1),[o,i]=v.useState([]),[a,r]=v.useState(""),[d,g]=v.useState(!1),p=v.useRef(null);v.useEffect(()=>{i([{id:"1",text:e.chatWelcome,sender:"gemini",timestamp:new Date}])},[e.chatWelcome]),v.useEffect(()=>{C()},[o]);const C=()=>{var c;(c=p.current)==null||c.scrollIntoView({behavior:"smooth"})},u=async()=>{if(!a.trim()||d)return;const c={id:Date.now().toString(),text:a,sender:"user",timestamp:new Date};i(E=>[...E,c]),r(""),g(!0);try{const E=o.map(b=>({role:b.sender==="user"?"user":"model",parts:[{text:b.text}]})),w=await $e(a,E,n),T={id:(Date.now()+1).toString(),text:w,sender:"gemini",timestamp:new Date};i(b=>[...b,T])}catch(E){console.error("Chat error:",E);const w={id:(Date.now()+1).toString(),text:n==="he"?"מצטער, אירעה שגיאה. אנא נסה שוב או צור קשר טלפונית.":"Sorry, an error occurred. Please try again or contact us by phone.",sender:"gemini",timestamp:new Date};i(T=>[...T,w])}finally{g(!1)}},f=c=>{c.key==="Enter"&&!c.shiftKey&&(c.preventDefault(),u())};return l.jsxs("div",{className:"fixed bottom-20 left-5 z-40",children:[l.jsx(x,{onClick:()=>s(!t),className:"w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all transform hover:scale-110",style:{animation:t?"none":"bounce 2s infinite"},children:t?l.jsx(L,{className:"w-5 h-5"}):l.jsx(le,{className:"w-5 h-5"})}),t&&l.jsxs(ae,{className:"absolute bottom-16 left-0 w-80 max-w-[90vw] h-96 shadow-2xl border border-gray-200 transform origin-bottom-left",children:[l.jsx(re,{className:"bg-blue-600 text-white rounded-t-lg p-4",children:l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center",children:[l.jsx(D,{className:"w-5 h-5 mr-2"}),l.jsx("span",{className:"font-semibold",children:e.chatTitle})]}),l.jsx(x,{variant:"ghost",size:"sm",onClick:()=>s(!1),className:"text-white hover:bg-blue-700 p-1",children:l.jsx(L,{className:"w-4 h-4"})})]})}),l.jsxs(ce,{className:"flex-1 overflow-y-auto p-4 h-64 space-y-3",children:[o.map(c=>l.jsx("div",{className:`flex ${c.sender==="user"?"justify-end":"justify-start"}`,children:l.jsxs("div",{className:`max-w-[80%] p-3 rounded-2xl text-sm ${c.sender==="user"?"bg-blue-600 text-white rounded-br-none":"bg-gray-100 text-gray-800 rounded-bl-none"}`,children:[c.sender==="gemini"&&l.jsx(D,{className:"w-3 h-3 inline mr-1 text-blue-600"}),l.jsx("span",{className:"whitespace-pre-wrap",children:c.text})]})},c.id)),d&&l.jsx("div",{className:"flex justify-start",children:l.jsx("div",{className:"bg-gray-100 p-3 rounded-2xl rounded-bl-none",children:l.jsxs("div",{className:"flex space-x-1",children:[l.jsx("div",{className:"w-2 h-2 bg-gray-400 rounded-full animate-bounce"}),l.jsx("div",{className:"w-2 h-2 bg-gray-400 rounded-full animate-bounce",style:{animationDelay:"0.1s"}}),l.jsx("div",{className:"w-2 h-2 bg-gray-400 rounded-full animate-bounce",style:{animationDelay:"0.2s"}})]})})}),l.jsx("div",{ref:p})]}),l.jsx("div",{className:"border-t border-gray-200 p-4",children:l.jsxs("div",{className:"flex items-center space-x-2",children:[l.jsx(ie,{value:a,onChange:c=>r(c.target.value),onKeyPress:f,placeholder:e.chatPlaceholder,className:"flex-1 text-sm",disabled:d}),l.jsx(x,{onClick:u,disabled:d||!a.trim(),size:"sm",className:"bg-blue-600 hover:bg-blue-700 text-white",children:l.jsx(de,{className:"w-4 h-4"})})]})})]})]})};export{We as default};
