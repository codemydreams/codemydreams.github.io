import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const t={},p=e(`<h2 id="解决跨域" tabindex="-1"><a class="header-anchor" href="#解决跨域" aria-hidden="true">#</a> 解决跨域</h2><blockquote><p>什么时跨域？</p><p>协议、域名、端口有一个不一致就会出现跨域</p></blockquote><p>如何解决跨域：axios解决跨域采用的方式是：写代理。</p><p>如何设置代理：找到 <code>vue.config.js</code> 文件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@vue/cli-service&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span><span class="token punctuation">{</span>
		<span class="token comment">//如果需要自定义代理名，我们需要重写路径</span>
    <span class="token string-property property">&#39;/代理名&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">target</span><span class="token operator">:</span><span class="token string">&#39;代理地址&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token string-property property">&quot;^/api&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//注意：修改配置文件必须重启服务</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[p];function c(i,l){return s(),a("div",null,o)}const u=n(t,[["render",c],["__file","solve-cross-domain.html.vue"]]);export{u as default};
