import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const t={},p=e(`<h2>路由守卫</h2><blockquote><p>路由守卫的作用：对路由进行权限控制</p></blockquote><h3 id="全局前置守卫" tabindex="-1"><a class="header-anchor" href="#全局前置守卫" aria-hidden="true">#</a> 全局前置守卫</h3><blockquote><p>初始化的时候被调用</p><p>每次路由切换之前被调用</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
  router.beforeEach((to,from,next)=&gt;{})
    to: 即将进入的路由对象
    from：即将离开的路由对象
    next：向下运行（符合规则，就让你向下执行）
*/</span>

router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>to<span class="token punctuation">.</span>path <span class="token operator">==</span> <span class="token string">&#39;/cart&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> token <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">&#39;token&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">next</span><span class="token punctuation">(</span><span class="token string">&#39;/user&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由独享守卫" tabindex="-1"><a class="header-anchor" href="#路由独享守卫" aria-hidden="true">#</a> 路由独享守卫</h3><blockquote><p>某一个路由所独享的，直接在路由配置上定义 <code>beforeEnter</code></p><p>适用于对权限划分</p><p><strong>只在进入路由时触发</strong>，不会在 <code>params</code>、<code>query</code> 或 <code>hash</code> 改变时触发</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
	beforeEnter(to,from.next){}
		to: 即将进入的路由对象
    from：即将离开的路由对象
    next：向下运行（符合规则，就让你向下执行）
*/</span>
<span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&quot;/move&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">component</span><span class="token operator">:</span>Move<span class="token punctuation">,</span>
  <span class="token function">beforeEnter</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span>from<span class="token punctuation">,</span>next</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 业务逻辑</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组件内部守卫" tabindex="-1"><a class="header-anchor" href="#组件内部守卫" aria-hidden="true">#</a> 组件内部守卫</h3><blockquote><p><code>beforeRoutrEnter</code> 通过路由规则进入该组件时被调用</p><p><code>beforeRouteUpdate</code> 组件路由动态更新触发【tab栏切换】</p><p><code>beforeRouteLeave</code> 通过路由规则离开该组件时被调用</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
	beforeRoutrEnter(to,from,next){
		// 在组件实例被创建之前执行（在beforeCreate生命周期函数之前执行）
		// 不能获取组件实例 \`this\` 因为守卫在导航确认前被调用，因此即将登场的新组件还没被创建。
	}
	
	beforeRouteUpdate(to,from,next){
		// 当前组件路由动态更新时触发
		// 举例：对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
		// 由于会渲染同样的 Foo组件，因此组件实例会被复用。而这个钩子函数就会在这个情况下被调用
		// 可以访问组件实例 \`this\`
	}
	
	beforeRouteLeave(to,from,next){
		// 离开当前组件对应的路由时触发
		// 可以访问组件实例 \`this\`
		// 这个离开守卫 通常用来预防用户在还未保存修改前突然离开。
		// 该导航可以通过返回 \`false\` 来取消。
	}
*/</span>

<span class="token comment">// 写在单页面组件中（.vue的文件）</span>
<span class="token comment">// 只有在home页面可以访问这个公共的组件，其他的页面不允许访问</span>

<span class="token function">beforeRouteEnter</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span>from<span class="token punctuation">,</span>next</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>from<span class="token punctuation">.</span>path <span class="token operator">==</span> <span class="token string">&quot;/home&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;没有权限&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="全局后置守卫" tabindex="-1"><a class="header-anchor" href="#全局后置守卫" aria-hidden="true">#</a> 全局后置守卫</h3><blockquote><p>初始化的时候被调用</p><p>每次路由切换之后被调用</p><p>后置路由守卫是没有next的，虽然用的不多，但也有自己的作用，比如：可以用来设置网页的标题</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
	router.afterEach(to,from)=&gt;{
		// 没有next
		document.title = to.meta.title		// 修改网页的title
	}
*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="守卫流程总结" tabindex="-1"><a class="header-anchor" href="#守卫流程总结" aria-hidden="true">#</a> 守卫流程总结</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1. beforeEach 全局前置守卫
2. beforeEnter 路由独享守卫
3. beforeRouteEnter 组件内部守卫
3. afterEach 全局后置守卫
4. 组件的8个生命周期
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="滚动行为" tabindex="-1"><a class="header-anchor" href="#滚动行为" aria-hidden="true">#</a> 滚动行为</h3><blockquote><p>使用前端路由，当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，就像重新加载页面那样。<code>vue-router</code> 能做到，而且更好，它让你可以自定义路由切换时页面如何滚动。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&quot;history&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">BASE_URL</span><span class="token punctuation">,</span>
  routes<span class="token punctuation">,</span>
  <span class="token function">scrollBehavior</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span>from<span class="token punctuation">,</span>savedPosition</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  	<span class="token comment">// return 期望滚动到哪个的位置</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>savePosition<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> savePostion
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token literal-property property">y</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),o=[p];function i(c,l){return s(),a("div",null,o)}const r=n(t,[["render",i],["__file","router-guard.html.vue"]]);export{r as default};
