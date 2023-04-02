import{_ as n,p as a,q as s,a1 as e}from"./framework-5866ffd3.js";const t={},i=e(`<h2>路由</h2><h3 id="路由切换原理" tabindex="-1"><a class="header-anchor" href="#路由切换原理" aria-hidden="true">#</a> 路由切换原理</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>路由切换原理<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.bootcdn.net/ajax/libs/jquery/3.6.1/jquery.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#/login<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>点击跳转登录页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#/reg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>点击跳转注册页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>routerview<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
      <span class="token comment">// 路由表</span>
      <span class="token keyword">let</span> routes <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;#/login&quot;</span><span class="token operator">:</span><span class="token string">&quot;./login.html&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;#/reg&quot;</span><span class="token operator">:</span><span class="token string">&quot;./reg.html&quot;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 当路由发生变化时 hashchange事件，重新加载 routes中的视图</span>
      window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;hashchange&quot;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#routerview&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>routes<span class="token punctuation">[</span>location<span class="token punctuation">.</span>hash<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装路由" tabindex="-1"><a class="header-anchor" href="#安装路由" aria-hidden="true">#</a> 安装路由</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> react-router-dom@6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>在 src/router/index.jsx</li></ul><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>// 先安装路由 npm i react-router-dom@6
// 这不仅仅是一个路由文件，它也是一个路由组件
// BrowserRouter是一个路由组件（自带的history模式），同时还有一个HashRouter（自带hash模式）
// 引入三个路由组件
import { BrowserRouter, Routes, Route } from &quot;react-router-dom&quot;;

// BrowserRouter 指定路由模式 HashRouter 两种路由模式
// Routes 路由表
// Route 路由

// 1. 引入要跳转的组件

import Home from &quot;../views/router/Home&quot;;
import User from &quot;../views/router/User&quot;;

// 2. 创建路由
const router = (
  &lt;BrowserRouter&gt;
    &lt;Routes&gt;
      &lt;Route path=&quot;/&quot; element={&lt;Home /&gt;}&gt;&lt;/Route&gt;
      &lt;Route path=&quot;/user&quot; element={&lt;User /&gt;}&gt;&lt;/Route&gt;
    &lt;/Routes&gt;
  &lt;/BrowserRouter&gt;
);

export default router;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="子路由" tabindex="-1"><a class="header-anchor" href="#子路由" aria-hidden="true">#</a> 子路由</h3><h4 id="配置子路由" tabindex="-1"><a class="header-anchor" href="#配置子路由" aria-hidden="true">#</a> 配置子路由</h4><p>Route嵌套Route</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>&lt;Route&gt;
	&lt;Route&gt;&lt;/Route&gt;
&lt;/Route&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="子路由页面展示" tabindex="-1"><a class="header-anchor" href="#子路由页面展示" aria-hidden="true">#</a> 子路由页面展示</h4><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import {Outlet} from &#39;react-router-dom&#39;;

&lt;Outlet&gt;&lt;/Outlet&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由跳转" tabindex="-1"><a class="header-anchor" href="#路由跳转" aria-hidden="true">#</a> 路由跳转</h3><h4 id="link方式" tabindex="-1"><a class="header-anchor" href="#link方式" aria-hidden="true">#</a> Link方式</h4><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import {Link} from &quot;react-router-dom&quot;;

&lt;Link to=&quot;/路径&quot;&gt;标题&lt;/link&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="js方式" tabindex="-1"><a class="header-anchor" href="#js方式" aria-hidden="true">#</a> JS方式</h4><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import {useNavagate} from &quot;react-router-dom&quot;

let navigate = useNavigate()

const goHome=()=&gt;{
  navigate(&quot;/Home&quot;)
}

&lt;button onClick={goHome}&gt;首页&lt;/button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由传参" tabindex="-1"><a class="header-anchor" href="#路由传参" aria-hidden="true">#</a> 路由传参</h3><h4 id="_1-动态路由" tabindex="-1"><a class="header-anchor" href="#_1-动态路由" aria-hidden="true">#</a> 1. 动态路由</h4><p>优点：美观，但是需要修改路由配置文件</p><h5 id="传参" tabindex="-1"><a class="header-anchor" href="#传参" aria-hidden="true">#</a> 传参</h5><ul><li>配置文件</li></ul><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>&lt;Route path=&quot;/路由规则/:id/:name/xxxxx&quot;&gt;&lt;/Route&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>路由传参</li></ul><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>// Link方式
&lt;Link to=&quot;/路由规则/参数1/参数2/...&quot;&gt;首页&lt;/Link&gt;

// JS方式
import {useNavagate} from &quot;react-router-dom&quot;
let navigate = useNavigate()

const goHome=()=&gt;{
  navigate(&quot;/路由规则/参数1/参数2/...&quot;)
}

&lt;button onClick={goHome}&gt;首页&lt;/button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="接参" tabindex="-1"><a class="header-anchor" href="#接参" aria-hidden="true">#</a> 接参</h5><p>Hook</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import (useParams) from &quot;react-router-dom&quot;

let params = useParams()
console.log(params)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-通过查询字符串" tabindex="-1"><a class="header-anchor" href="#_2-通过查询字符串" aria-hidden="true">#</a> 2. 通过查询字符串</h4><h5 id="传参-1" tabindex="-1"><a class="header-anchor" href="#传参-1" aria-hidden="true">#</a> 传参</h5><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>//?id=19&amp;name=苏东旭
// Link方式
&lt;Link to=&quot;/路由规则?参数1=xxx&amp;参数2=xxx...&quot;&gt;首页&lt;/Link&gt;

// JS方式
import {useNavagate} from &quot;react-router-dom&quot;
let navigate = useNavigate()

const goHome=()=&gt;{
  navigate(&quot;/路由规则?参数1=xxx&amp;参数2=xxx...&quot;)
}

&lt;button onClick={goHome}&gt;首页&lt;/button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="接参-1" tabindex="-1"><a class="header-anchor" href="#接参-1" aria-hidden="true">#</a> 接参</h5><p>Hook</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import {useSearchParams} from &quot;react-router-dom&quot;

const [data] = useSearchParams()
console.log(data.get(&#39;参数1&#39;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-通过navigate函数传参" tabindex="-1"><a class="header-anchor" href="#_3-通过navigate函数传参" aria-hidden="true">#</a> 3. 通过navigate函数传参</h4><h5 id="传参-2" tabindex="-1"><a class="header-anchor" href="#传参-2" aria-hidden="true">#</a> 传参</h5><p>添加第二个参数 {state:{}}</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import {useNavigate} from &quot;react-router-dom&quot;
let navigate = useNavigate()

const goHome=()=&gt;{
  navigate(&quot;/路由规则&quot;,{
    state:{
      id:17,
    	name:&quot;小星星&quot;
    }
  })
}

&lt;button onClick={goHome}&gt;首页&lt;/button&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="接参-2" tabindex="-1"><a class="header-anchor" href="#接参-2" aria-hidden="true">#</a> 接参</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import (useLocation) from &quot;react-router-dom&quot;

let location = useLocation()
console.log(location.state)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结</p><p>传参 useNavigate</p><p>接参 useLocation</p></blockquote>`,42),l=[i];function o(c,u){return a(),s("div",null,l)}const r=n(t,[["render",o],["__file","router.html.vue"]]);export{r as default};
