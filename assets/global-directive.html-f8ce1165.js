import{_ as n,p as s,q as a,a1 as t}from"./framework-5866ffd3.js";const p={},o=t(`<h2>全局自定义指令</h2><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&quot;./App.vue&quot;</span><span class="token punctuation">;</span>

Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

<span class="token comment">// 全局自定义指令</span>
Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&quot;myshow&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">bind</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> binding<span class="token punctuation">.</span>value <span class="token operator">?</span> <span class="token string">&quot;block&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    el<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> binding<span class="token punctuation">.</span>value <span class="token operator">?</span> <span class="token string">&quot;block&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>bind</code> 和 <code>update</code> 函数都属于钩子函数</p><p>钩子函数：不需要手动调用，在某种条件满足时，会自动触发的函数就叫做钩子函数。</p>`,4),e=[o];function c(i,u){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","global-directive.html.vue"]]);export{k as default};