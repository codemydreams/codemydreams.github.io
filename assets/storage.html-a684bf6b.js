import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const i={},o=e(`<h2 id="数据存储" tabindex="-1"><a class="header-anchor" href="#数据存储" aria-hidden="true">#</a> 数据存储</h2><h3 id="localstorage" tabindex="-1"><a class="header-anchor" href="#localstorage" aria-hidden="true">#</a> localStorage</h3><p><code>localStorage</code> 是本地存储，存储的内容在关闭浏览器后再次点开网页时依然存在，需要手动清除才会消失（手动清除的方法有两种：1.调用API清除；2.直接在开发者工具中清除浏览器缓存）。</p><p>localStorage特点：</p><ol><li>永久性存储，可手动删除。</li><li>以字符串的形式存储数据。</li><li>一般浏览器的存储大小是5MB，即5120KB。</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 存数据</span>
localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">,</span>value<span class="token punctuation">)</span>
<span class="token comment">// 取数据</span>
localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 删除指定数据</span>
localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 清空数据</span>
localStorage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：只能存储字符串类型的数据，存取对象格式的数据时，需要使用 <code>JSON.stringify()</code> 和 <code>JSON.parse()</code> 进行转换</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;xiaosutongxue&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">27</span>
<span class="token punctuation">}</span>

<span class="token comment">// 存储对象格式的数据需要使用JSON.stringify()</span>
localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;obj&#39;</span><span class="token punctuation">,</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// 获取数据需要使用JSON.parse()</span>
<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;obj&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sessionstorage" tabindex="-1"><a class="header-anchor" href="#sessionstorage" aria-hidden="true">#</a> sessionStorage</h3><p><code>sessionStorage</code> 是会话存储，存储的内容会随着浏览器窗口的关闭而消失（关闭网页即会话结束）。</p><p>sessionStorage特点：</p><ol><li>暂时性存储，关闭窗口即清除数据。</li><li>以字符串的形式存储数据。</li><li>一般浏览器的存储大小是5MB，即5120KB。</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 存数据</span>
sessionStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">,</span>value<span class="token punctuation">)</span>
<span class="token comment">// 取数据</span>
sessionStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 删除指定数据</span>
sessionStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 清空数据</span>
seesionStorage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> cookie</h3><p><code>cookie</code> 是一种状态保持技术。</p><p>网站中，<strong>http请求是无状态的</strong>。也就是第一次登录成功（发送请求），第二次请求服务器依然不知道是哪一个用户。这时候的cookie就是解决这个问题的。</p><p>第一次登录后，服务器返回cookie给浏览器，然后浏览器保存在本地，当该用户第二次请求，浏览器会自动把上次请求存储的cookie数据自动带上给服务器，服务器根据客户端cookie来判断当前是哪一个用户。</p><p>cookie存储有大小限制，不同浏览器不一样，一般是4kb，所以cookie只能存储小量数据。</p><p>cookie是在服务器生成，保存在浏览器的一小段文本信息。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># cookie</span>
<span class="token function">npm</span> i js-cookie <span class="token comment"># js版</span>
<span class="token function">npm</span> i @types/js-cookie	<span class="token comment"># ts版</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Cookie <span class="token keyword">from</span> <span class="token string">&#39;js-cookie&#39;</span>

<span class="token comment">// 设置</span>
Cookie<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">expires</span><span class="token operator">:</span> <span class="token number">7</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 读取</span>
Cookie<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// 删除</span>
Cookie<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="区别" tabindex="-1"><a class="header-anchor" href="#区别" aria-hidden="true">#</a> 区别</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>不同点：
1，与服务器之间的通信：
cookie在浏览器与服务器之间来回传递，每次都会携带在HTTP头中，作用是与服务器进行交互，作为http规范的一部分而存在的，如果使用cookie保存过多数据会带来性能问题

localstorage和sessionstorage不参与和服务器间的通信，不会把数据发给服务器，仅在本地保存，存储在本地的数据可以直接获取 ，web Storage仅仅是为了在本地“存储”数据而生

2，作用域的不同：
localStorage在所有同源窗口中都是共享的，同浏览器无法共享local和session的信息，同浏览器下，local可以在不同页面 (指的是相同域名和端口的下的不同页面) 共享相同的local数据，

sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面，不同页面或标签页间无法共享sessionStorage的信息，需要注意页面及标签页仅指顶级窗口，如果一个标签页包含多个iframe标签且他们属于同源页面，那么他们之间是可以共享sessionStorage的

cookie也是在所有同源窗口中都是共享的，cookie在不设置过期时间的前提下，只在当前的会话有效，

3，存储大小：
cookie存储大小为4k
localStorage和sessionStorage的存储数据大小一般都是：5MB

4，存储内容类型：
localStorage和sessionStorage只能存储字符串类型，对于复杂的对象可以使用ECMAScript提供的JSON对象的stringify和parse来处理
会话cookie一般不存储在硬盘而是保存在内存里，当然这个行为并不是规范规定的。若设置了过期时间，浏览器就会把cookie保存到硬盘上

5，应用场景：
localStoragese：常用于长期登录（+判断用户是否已登录），适合长期保存在本地的数据
sessionStorage：敏感账号一次性登录
cookie的作用：主要用于保存登录信息，设置“每次请求都要携带的信息（最典型的就是身份认证信息）”就特别适合放在cookie中                                                                            

6，获取速度：
local和session存储在WebStorage上，再加上浏览器本身的缓存。获取数据时可以从本地获取会比从服务器端获取快得多，所以速度更快，cookie每次请求都会传送到服务器，数据获取交互相对慢些

7，安全性：
WebStorage不会随着HTTP header发送到服务器端，所以安全性相对于cookie来说比较高一些，不会担心截获，但是仍然存在伪造问题

8，失效时间：
cookie：一般默认是浏览器关闭失效,cookie的生命期为浏览器会话期间，关闭浏览器窗口，cookie就会消失，这种生命期为浏览器会话期的cookie被称为会话，cookie可以自己设置失效时间,设置时间后只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭也不会影响。

localstorage：永久有效，除非主动删除数据，否则永远也不会过期

sessionstorage：当前会话有效，在关闭页面或浏览器后被清除,sessionStorage对象存储特定于某个会话的数据,也就是该数据只保持到浏览器关闭，sessionStorage的概念很特别，引入了一个“浏览器窗口”的概念，sessionStorage是在同源的同窗口中，始终存在的数据，也就是说只要这个浏览器窗口没有关闭，即使刷新页面或进入同源另一个页面，数据仍然存在，关闭窗口后，sessionStorage就会被销毁，同时“独立”打开的不同窗口，即使是同一页面，sessionStorage对象也是不同的

9：存储方法的调用
web storage拥有setItem,getItem,removeItem,clear等方法

相同点：
都是保存在浏览器端、且同源的
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),t=[o];function c(l,p){return s(),a("div",null,t)}const d=n(i,[["render",c],["__file","storage.html.vue"]]);export{d as default};
