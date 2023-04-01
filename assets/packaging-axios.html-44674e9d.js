import{_ as n,p as s,q as a,a1 as t}from"./framework-5866ffd3.js";const e={},p=t(`<h2 id="封装axios" tabindex="-1"><a class="header-anchor" href="#封装axios" aria-hidden="true">#</a> 封装Axios</h2><p>为了便于维护，开发中都会对axios进行封装，建立一个统一的文件去管理它们，另外可以对一些请求进行拦截，发起请求时对一些配置项进行拦截，响应数据时对它进行一个拦截</p><ul><li>request.js <ul><li>这份文件就是用来做拦截的</li></ul></li><li>api.js <ul><li>管理请求</li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>

<span class="token comment">//创建一个axios实例</span>
<span class="token keyword">const</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span><span class="token string">&quot;请求路径&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span>超时时间
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//拦截器 - 请求拦截</span>
instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  <span class="token comment">//在发送请求之前做些什么</span>
  <span class="token comment">//部分接口需要拿到token</span>
  <span class="token keyword">let</span> token <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;token&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">{</span>
    config<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>token <span class="token operator">=</span> token<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> config
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token parameter">err</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token comment">//拦截器 - 响应拦截</span>
instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  <span class="token comment">//对响应数据做点什么</span>
  <span class="token keyword">return</span> response
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token parameter">err</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//整体导出</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> instance<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//将request.js整体导入</span>
<span class="token keyword">import</span> request <span class="token keyword">from</span> <span class="token string">&#39;./request&#39;</span>

<span class="token comment">//按需导出每个请求，也就是按需导出每个api</span>

<span class="token comment">//get请求</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">GetHomeAPI</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> request<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/api&#39;</span><span class="token punctuation">)</span>

<span class="token comment">//post请求</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">PostLoginAPI</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> request<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/api&#39;</span><span class="token punctuation">,</span>params<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//按需导入</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>GetHomeAPI<span class="token punctuation">,</span>PostLoginAPI<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/request/api.js&#39;</span>

<span class="token function">GetHomeAPI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">PostLoginAPI</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">username</span><span class="token operator">:</span><span class="token string">&quot;xiaosu&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">password</span><span class="token operator">:</span><span class="token string">&quot;123&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","packaging-axios.html.vue"]]);export{r as default};
