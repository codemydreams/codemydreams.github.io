import{_ as e,M as t,p as o,q as i,N as p,V as l,t as s,R as n,a1 as c}from"./framework-5866ffd3.js";const r={},d=n("h2",{id:"模块化",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#模块化","aria-hidden":"true"},"#"),s(" 模块化")],-1),u=n("p",null,"AMD、CMD，鼻祖级别的，现在半淘汰状态了",-1),v=n("p",null,[s("模块化目前比较流行的就是 "),n("code",null,"CommonJs规范"),s(" 和 "),n("code",null,"ES6模块化")],-1),m=n("h3",{id:"commonjs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#commonjs","aria-hidden":"true"},"#"),s(" Commonjs")],-1),k=c(`<p>只要导出正确，导入使哪种方式都行，但尽量配套使用</p><h4 id="导出" tabindex="-1"><a class="header-anchor" href="#导出" aria-hidden="true">#</a> 导出</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">username</span><span class="token operator">:</span><span class="token string">&quot;su&quot;</span><span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token number">123</span>
<span class="token punctuation">}</span>

<span class="token comment">//整体导出，支持对象简写</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  num<span class="token punctuation">,</span>
  obj<span class="token punctuation">,</span>
  func
<span class="token punctuation">}</span>

<span class="token comment">//按需导出 不建议这么写，意义不大</span>
module<span class="token punctuation">.</span>exports<span class="token punctuation">.</span>num <span class="token operator">=</span> num<span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports<span class="token punctuation">.</span>obj <span class="token operator">=</span> obj<span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports<span class="token punctuation">.</span>func <span class="token operator">=</span> func<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="导入" tabindex="-1"><a class="header-anchor" href="#导入" aria-hidden="true">#</a> 导入</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//commonjs</span>
<span class="token keyword">var</span> test <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@/路径&#39;</span><span class="token punctuation">)</span>
<span class="token comment">//es6</span>
<span class="token keyword">import</span> test <span class="token keyword">from</span> <span class="token string">&#39;@/路径&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>module.exports导出，本质上是在导出什么？</p><p>在导出exports</p><p>只写module 或者 module.exports;导出都是一个空对象，因为引入一个js文件，本质上就是在引入一个空对象</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
	module:{
		exports:{
			num,
			obj,
			func
		}
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="es6" tabindex="-1"><a class="header-anchor" href="#es6" aria-hidden="true">#</a> ES6</h3><h4 id="导出-1" tabindex="-1"><a class="header-anchor" href="#导出-1" aria-hidden="true">#</a> 导出</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">username</span><span class="token operator">:</span><span class="token string">&quot;su&quot;</span><span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token number">123</span>
<span class="token punctuation">}</span>

<span class="token comment">//整体导出</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  num<span class="token punctuation">,</span>
  obj<span class="token punctuation">,</span>
  func
<span class="token punctuation">}</span>

<span class="token comment">//按需导出，</span>
<span class="token keyword">export</span> <span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="导入-1" tabindex="-1"><a class="header-anchor" href="#导入-1" aria-hidden="true">#</a> 导入</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//es6 默认引入export下的default</span>
<span class="token keyword">import</span> test <span class="token keyword">from</span> <span class="token string">&#39;@/路径&#39;</span>

<span class="token comment">//commonjs 默认引入的是export对象</span>
<span class="token keyword">var</span> test <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@/路径&#39;</span><span class="token punctuation">)</span>


<span class="token comment">//按需导入</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>num<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/路径&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>export</code>：通过export方式导出，在导入的时候需要加{}，且不能换名字（导出啥名，导入就啥名，名字加到{}） <ul><li><code>import {aaa,bbb,ccc导出的时候的名字} from &quot;路径+文件名&quot;</code></li></ul></li><li><code>export default</code>：通过export default方式导出，导入时不需要加{} <ul><li><code>import 名字 from &quot;路径+文件名&quot;</code></li></ul></li><li>使用场景 <ul><li>导出单个值就用 <code>export default</code></li><li>导出多个值就用 <code>export</code></li></ul></li></ul>`,13);function b(h,f){const a=t("font");return o(),i("div",null,[d,u,v,m,p(a,{color:"red"},{default:l(()=>[s("导出是导出，导入是导入两者没有必然关系")]),_:1}),k])}const g=e(r,[["render",b],["__file","modularization.html.vue"]]);export{g as default};
