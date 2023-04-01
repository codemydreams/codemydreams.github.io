import{_ as n,p as s,q as a,a1 as t}from"./framework-5866ffd3.js";const p={},e=t(`<h2 id="get与post的传参差异" tabindex="-1"><a class="header-anchor" href="#get与post的传参差异" aria-hidden="true">#</a> get与post的传参差异</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//get传参时 多一层对象包裹</span>
axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
	<span class="token literal-property property">params</span><span class="token operator">:</span><span class="token punctuation">{</span>
		<span class="token literal-property property">username</span><span class="token operator">:</span><span class="token string">&quot;xiaosu&quot;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">//post传参时，直接是一个对象</span>
axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
	<span class="token literal-property property">username</span><span class="token operator">:</span><span class="token string">&quot;xiaosu&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","props-diff.html.vue"]]);export{r as default};
