import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const t={},p=e(`<h2 id="计算属性" tabindex="-1"><a class="header-anchor" href="#计算属性" aria-hidden="true">#</a> 计算属性</h2><p>原理：底层借助了 Object.defineProperty方法提供的getter 和 setter方法</p><p>优势：与methods相比，内部有缓存机制（实现复用效果），效率高，调试方便</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 调用计算属性，不需要写()</span>
<span class="token punctuation">{</span><span class="token punctuation">{</span>total<span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token comment">// 格式一：</span>
<span class="token literal-property property">computed</span><span class="token operator">:</span><span class="token punctuation">{</span>
	<span class="token function">total</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> 
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 格式二</span>
<span class="token literal-property property">computed</span><span class="token operator">:</span><span class="token punctuation">{</span>
	total：<span class="token punctuation">{</span>
    <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token comment">// 在{{}}中第一次获取这个计算属性的值的时候执行这里的代码</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">set</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token comment">// 计算属性受其他数据影响而变化时</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>什么时候用计算属性，什么时候用method？</p><p>一个值如果受其他数据的影响，就用计算属性</p><h3 id="methods-和-computed-的区别" tabindex="-1"><a class="header-anchor" href="#methods-和-computed-的区别" aria-hidden="true">#</a> methods 和 computed 的区别</h3><ul><li><p>调用的时候methods需要使用()，而computed不需要()</p></li><li><p>methods调用的时候吧，多次调用多次执行</p></li><li><p>computed如果方法的返回值没有改变就只执行一次，多次调用的结果是在内存中获取数据</p></li></ul>`,8),c=[p];function i(o,l){return s(),a("div",null,c)}const d=n(t,[["render",i],["__file","computed.html.vue"]]);export{d as default};
