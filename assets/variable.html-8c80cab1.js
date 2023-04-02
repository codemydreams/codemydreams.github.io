import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const p={},o=e(`<h2>变量</h2><p>变量是计算机中用来<strong>存储数据的容器</strong>，它可以让计算机变得有记忆。简单理解是一个个的盒子。</p><h3 id="变量的本质" tabindex="-1"><a class="header-anchor" href="#变量的本质" aria-hidden="true">#</a> 变量的本质</h3><p><strong>内存</strong>：计算机中存储数据的地方，相当于一个空间。</p><p><strong>变量</strong>：是程序在内存中申请的一块用来存放数据的小空间。</p><p><strong>垃圾回收机制</strong>：变量不使用自动回收。</p><h3 id="变量的使用" tabindex="-1"><a class="header-anchor" href="#变量的使用" aria-hidden="true">#</a> 变量的使用</h3><h4 id="声明并赋值" tabindex="-1"><a class="header-anchor" href="#声明并赋值" aria-hidden="true">#</a> 声明并赋值</h4><blockquote><p>使用 <strong><code>let</code></strong> 这个关键字，告诉浏览器，我们定义了一个变量，使用 <strong><code>=</code></strong> 告诉浏览器，我们要把右边的数据赋值到左边的变量名中，然后当我们使用这个数据时，就可以直接使用这个变量名代替这个数据。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 基本格式</span>
<span class="token keyword">let</span> 变量名 <span class="token operator">=</span> 数据<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="先声明再赋值" tabindex="-1"><a class="header-anchor" href="#先声明再赋值" aria-hidden="true">#</a> 先声明再赋值</h4><blockquote><p>变量定义分为两个过程：变量声明和变量赋值。</p></blockquote><div class="custom-container tip"><p class="custom-container-title">声明变量</p><p>声明变量有两部分构成：声明关键字、变量名（也叫标识符）</p><p>let 即关键字（let: 允许、许可、让、要），所谓关键字是系统提供的专门用来声明（定义）变量的词语。</p><p>变量必须先声明再使用</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> 变量名<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">变量赋值</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>变量名 <span class="token operator">=</span> 数据<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">更新变量</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>变量名 <span class="token operator">=</span> 新数据<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><h3 id="变量的命名" tabindex="-1"><a class="header-anchor" href="#变量的命名" aria-hidden="true">#</a> 变量的命名</h3><blockquote><p>JS中的变量是弱类型，可以保存所有类型的数据，即变量没有类型而值有类型。</p></blockquote><p><strong>命名规则</strong>：必须遵守，不遵守报错。</p><ol><li><p>变量名不能使用关键字、也不建议使用保留字。</p></li><li><p>变量名由 <code>字母</code>、<code>数字</code>、<code>_</code>、<code>$</code>组成，且不能以 <code>数字</code> 开头。</p></li><li><p>字母严格区分大小写，如 Age 和 age 是不同的变量。</p></li></ol><p><strong>命名规范</strong>：建议，不遵守不会报错，但不符合业内通识。</p><ol><li><p>起名要有意义，见名知意。</p></li><li><p>遵守小驼峰命名法，增加代码可读性。</p><ul><li>第一个单词首字母小写，后面每个单词首字母大写。例：userName。</li></ul></li></ol><h3 id="变量提升" tabindex="-1"><a class="header-anchor" href="#变量提升" aria-hidden="true">#</a> 变量提升</h3><ul><li><p>js在执行之前，会有js解析引擎(V8)，先把代码解析一遍</p></li><li><p>完成那些事：</p><ul><li><p>把变量的声明和函数的声明提升到当前作用域的最前端</p></li><li><p>变量的赋值和函数的调用还是保留在原来的位置</p></li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

预解析
<span class="token keyword">var</span> a
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
a<span class="token operator">=</span><span class="token number">10</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

输出
<span class="token number">10</span>
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">20</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

预解析
<span class="token keyword">var</span> a
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> a
  a <span class="token operator">=</span> <span class="token number">20</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
a <span class="token operator">=</span> <span class="token number">10</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

输出
<span class="token number">20</span>
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">20</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

预解析
<span class="token keyword">var</span> a
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> a
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
  a <span class="token operator">=</span> <span class="token number">20</span>
<span class="token punctuation">}</span>
a <span class="token operator">=</span> <span class="token number">10</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

输出
<span class="token keyword">undefined</span>
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
  a <span class="token operator">=</span> <span class="token number">20</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>

预解析
<span class="token keyword">var</span> a
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
  a <span class="token operator">=</span> <span class="token number">20</span>
<span class="token punctuation">}</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
a <span class="token operator">=</span> <span class="token number">10</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>

输出
<span class="token keyword">undefined</span> 
<span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> b <span class="token operator">=</span> c <span class="token operator">=</span> <span class="token number">9</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

预解析
<span class="token keyword">function</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> a
  a <span class="token operator">=</span> <span class="token number">9</span>
  b <span class="token operator">=</span> <span class="token number">9</span>
  c <span class="token operator">=</span> <span class="token number">9</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>

输出
<span class="token number">9</span>
<span class="token number">9</span>
<span class="token number">9</span>
<span class="token number">9</span>
<span class="token number">9</span>
未定义 not defined
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),t=[o];function c(i,l){return s(),a("div",null,t)}const r=n(p,[["render",c],["__file","variable.html.vue"]]);export{r as default};
