import{_ as n,p as s,q as a,a1 as t}from"./framework-5866ffd3.js";const e={},p=t(`<h2>Vue2双向绑定原理</h2><p><code>Object.defineProperty()</code> 是ES5中一个无法shim的特性，可以用来给对象设置属性</p><p>一个shim是一个库，它将一个新的API引入到一个旧的环境中，而且仅靠旧环境中已有的手段实现。 比如：google和github上都有一段用于兼容ie等低版本浏览器的html标签库 html5shiv，ps: shim有时也叫shiv。</p><p>第一种方法：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;xiaosutongxue&quot;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 普通添加属性的方式</span>
obj<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">27</span>

<span class="token comment">// Object.defineProperty()添加属性的方式</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&quot;wish&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;code better&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>	<span class="token comment">// 设置obj的wish属性可以被修改,默认值是false，不可被修改</span>
  <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>	<span class="token comment">// 设置obj的wish属性可以被删除，默认是false，不可被删除</span>
  <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span>	<span class="token comment">// 设置obj的wish属性可以被遍历，默认是false，不可被遍历</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二种方法：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> val <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// 思考：此处get()什么时候执行，执行后返回了什么？</span>
  <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 当获取name属性的时候，会执行这里的代码</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;get执行了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// return返回的数据就是obj.name的值</span>
    <span class="token keyword">return</span> val<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">set</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 当给name属性赋值的时候，会执行这里的代码</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;set执行了&quot;</span><span class="token punctuation">,</span> newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 将新数据赋值给val，这样下次执行get()时，返回的就是新值</span>
    val <span class="token operator">=</span> newValue<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 执行get()</span>
obj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;Vue&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 触发set()</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 执行get()</span>

<span class="token doc-comment comment">/** 控制台打印结果
* get执行了
* 10
* set执行了 Vue
* get执行了
* Vue
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模拟双向绑定" tabindex="-1"><a class="header-anchor" href="#模拟双向绑定" aria-hidden="true">#</a> 模拟双向绑定</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inp<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>pp<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 准备一个对象,模拟data这个对象,往里面添加一个txtVal属性</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> val <span class="token operator">=</span> <span class="token string">&quot;初始值&quot;</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&quot;txtVal&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> val<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">set</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在set方法进行数据劫持</span>
    <span class="token comment">// 此处set()是第三方,负责通知每一个订阅者改数据了</span>
    inp<span class="token punctuation">.</span>value <span class="token operator">=</span> newValue<span class="token punctuation">;</span>
    pp<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> newValue<span class="token punctuation">;</span>
    val <span class="token operator">=</span> newValue<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 两个订阅者,都订阅了obj.txtVal</span>
inp<span class="token punctuation">.</span>value <span class="token operator">=</span> obj<span class="token punctuation">.</span>txtVal<span class="token punctuation">;</span>
pp<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> obj<span class="token punctuation">.</span>txtVal<span class="token punctuation">;</span>

<span class="token comment">// v-model可以用value属性和input事件代替</span>
inp<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;input&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 一边输入的时候，一边修改txtVal的值</span>
  <span class="token comment">// obj.txtVal = 用户输入的值</span>
  <span class="token comment">// 这里是发布者,发布新的数据</span>
  obj<span class="token punctuation">.</span>txtVal <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// 触发set()</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="双向绑定原理" tabindex="-1"><a class="header-anchor" href="#双向绑定原理" aria-hidden="true">#</a> 双向绑定原理</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>借助Object.defineProperty()的set()对数据进行劫持，并结合发布-订阅者模式来实现双向绑定
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="vue2的数组内元素的修改失效问题" tabindex="-1"><a class="header-anchor" href="#vue2的数组内元素的修改失效问题" aria-hidden="true">#</a> Vue2的数组内元素的修改失效问题</h3><blockquote><p>为什么会有这种bug</p><p>原理：Vue2的双向数据绑定原理用的是Object.defineProperty()，修改引用类型的数据（数组和对象）的时候没有办法触发set，所以最终导致的现象就是数据能够修改，但是界面修改不了。</p><p>Vue提供了 <code>this.$set()</code> 方法，可以用来修改引用类型的数据，同时进行界面修改。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>this.$set(数组名，要修改元素的下标，新的值)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,15),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","bidirectional-binding-principle.html.vue"]]);export{r as default};
