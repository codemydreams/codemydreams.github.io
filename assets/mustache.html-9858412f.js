import{_ as n,p as s,q as a,a1 as t}from"./framework-5866ffd3.js";const p={},c=t(`<h2>{{ }}</h2><p><code>{{}}</code> 除了可以进行<strong>数据的渲染</strong>和<strong>方法的调用</strong>外，还支持一些书写业务逻辑，复杂的业务逻辑不建议书写在内，影响代码的可读性</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token comment">// 1.支持三元运算符</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text"> </span><span class="token punctuation">{</span><span class="token punctuation">{</span> a <span class="token operator">&gt;</span> b <span class="token operator">?</span> c <span class="token operator">:</span> d <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token plain-text"> </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">// 2.支持方法调用</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text"> </span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token plain-text"> </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),e=[c];function o(l,i){return s(),a("div",null,e)}const k=n(p,[["render",o],["__file","mustache.html.vue"]]);export{k as default};
