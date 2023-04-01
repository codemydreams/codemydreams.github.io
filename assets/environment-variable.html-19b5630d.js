import{_ as n,p as s,q as e,a1 as a}from"./framework-5866ffd3.js";const t={},p=a(`<h2 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h2><p>我们实际开发中，往往有多种环境，如</p><ul><li>development模式用于 vue-cli-service serve</li><li>production模式用于vue-cli-service build 和 vue-cli-service test:e2e</li><li>test模式用于vue-cli-service test:unit</li></ul><p>甚至还有其他的，这里我们只讨论development和production。</p><p>此处有几个需要注意的点：</p><p>1.一个模式可以包含多个环境变量</p><p>2.每个模式都会将环境变量中 NODE_ENV 的值设置为模式的名称</p><p>3.可以通过.env文件增加后缀来设置某个模式下特有的环境变量</p><p>4.为一个特定模式准备的环境文件（例如 .env.production）将会比一般环境文件（例如 .env）拥有更高的优先级</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>.env							<span class="token comment"># 在所有环境中被载入</span>
.env.local				<span class="token comment"># 在所有环境中被载入，但会被 git 忽略</span>
.env.<span class="token punctuation">[</span>mode<span class="token punctuation">]</span>				<span class="token comment"># 只在指定的模式中被载入，优先级高于 .env 和 .env.local</span>
.env.<span class="token punctuation">[</span>mode<span class="token punctuation">]</span>.local	<span class="token comment"># 只在指定的模式中被载入，但会被 git 忽略，优先级高于 .env 和 .env.local</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一般环境变量文件都创建在根目录下，我们创建以下两份：</p><p><code>.env.development</code> 文件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>NODE_ENV=development
VUE_APP_BASE_URL=/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>.env.production</code> 文件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>NODE_ENV=production
VUE_APP_BASE_URL=&#39;http://www.xiaosutongxue.com&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用场景</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@vue/cli-service&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">devServer</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token comment">// 在Vue中通过p<wbr>rocess.env.变量名获取环境变量</span>
    <span class="token comment">// 使用机制：当项目以生产环境启动时，p<wbr>rocess.env.VUE_APP_BASE_URL这个值就在.env.production文件中寻找</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_BASE_URL</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>怎么以生产环境启动呢？</p><p>配置 <code>package.json</code> 中的启动命令</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;serve&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service serve --mode production&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service build&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>`,18),o=[p];function i(c,l){return s(),e("div",null,o)}const d=n(t,[["render",i],["__file","environment-variable.html.vue"]]);export{d as default};
