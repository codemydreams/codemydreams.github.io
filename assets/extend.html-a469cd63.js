import{_ as p,M as s,p as l,q as c,R as a,t as e,N as t,V as r,a1 as n}from"./framework-5866ffd3.js";const u={},d=n('<h2 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h2><h3 id="环境搭建" tabindex="-1"><a class="header-anchor" href="#环境搭建" aria-hidden="true">#</a> 环境搭建</h3><h4 id="安装脚手架" tabindex="-1"><a class="header-anchor" href="#安装脚手架" aria-hidden="true">#</a> 安装脚手架</h4>',3),v={href:"https://cli.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},m=n(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装vue cli脚手架</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> @vue/cli
<span class="token comment"># 升级vue cli脚手架版本</span>
<span class="token function">npm</span> update <span class="token parameter variable">-g</span> @vue/cli

<span class="token comment">#查看vue版本</span>
vue <span class="token parameter variable">--version</span>
vue <span class="token parameter variable">-V</span>

<span class="token comment"># 命令行创建项目</span>
vue create project_name
vue create <span class="token builtin class-name">.</span> <span class="token comment"># 当前目录下创建</span>
<span class="token comment"># 可视化创建项目</span>
vue ui
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 命令行创建项目</span>
vue create project_name
<span class="token comment"># 当前目录下创建</span>
vue create <span class="token builtin class-name">.</span> 

<span class="token comment"># 1.选择手动选择功能并回车</span>
Vue CLI v5.0.8
? Please pick a preset:
  Default <span class="token punctuation">(</span><span class="token punctuation">[</span>Vue <span class="token number">3</span><span class="token punctuation">]</span> babel, eslint<span class="token punctuation">)</span>
  Default <span class="token punctuation">(</span><span class="token punctuation">[</span>Vue <span class="token number">2</span><span class="token punctuation">]</span> babel, eslint<span class="token punctuation">)</span>
❯ Manually <span class="token keyword">select</span> features

<span class="token comment"># 2.按空格选中或取消选中，按回车下一步</span>
Vue CLI v5.0.8
? Please pick a preset: Manually <span class="token keyword">select</span> features
? Check the features needed <span class="token keyword">for</span> your project: <span class="token punctuation">(</span>Press <span class="token operator">&lt;</span>space<span class="token operator">&gt;</span> to select, <span class="token operator">&lt;</span>a<span class="token operator">&gt;</span> to toggle all, <span class="token operator">&lt;</span>i<span class="token operator">&gt;</span> to invert selection, and <span class="token operator">&lt;</span>enter<span class="token operator">&gt;</span> to proceed<span class="token punctuation">)</span>
 ◉ Babel
 ◯ TypeScript
 ◯ Progressive Web App <span class="token punctuation">(</span>PWA<span class="token punctuation">)</span> Support
 ◉ Router
 ◉ Vuex
 ◉ CSS Pre-processors
❯◉ Linter / Formatter
 ◯ Unit Testing
 ◯ E2E Testing
 
<span class="token comment"># 3.选择Vue版本，选择2.x并回车</span>
Vue CLI v5.0.8
? Please pick a preset: Manually <span class="token keyword">select</span> features
? Check the features needed <span class="token keyword">for</span> your project: Babel, Router, Vuex, CSS Pre-processors, Linter
? Choose a version of Vue.js that you want to start the project with
  <span class="token number">3</span>.x
❯ <span class="token number">2</span>.x

<span class="token comment"># 4.是否使用history模式的路由，输入Y并回车</span>
Vue CLI v5.0.8
? Please pick a preset: Manually <span class="token keyword">select</span> features
? Check the features needed <span class="token keyword">for</span> your project: Babel, Router, Vuex, CSS Pre-processors, Linter
? Choose a version of Vue.js that you want to start the project with <span class="token number">2</span>.x
? Use <span class="token function">history</span> mode <span class="token keyword">for</span> router? <span class="token punctuation">(</span>Requires proper server setup <span class="token keyword">for</span> index fallback <span class="token keyword">in</span> production<span class="token punctuation">)</span> <span class="token punctuation">(</span>Y/n<span class="token punctuation">)</span> Y

<span class="token comment"># 5.选择css预处理器，选择Less并回车</span>
? Pick a CSS pre-processor <span class="token punctuation">(</span>PostCSS, Autoprefixer and CSS Modules are supported by default<span class="token punctuation">)</span>:
  Sass/SCSS <span class="token punctuation">(</span>with dart-sass<span class="token punctuation">)</span>
❯ Less
  Stylus
  
<span class="token comment"># 6.选择ESLint，选择默认并回车</span>
? Pick a linter / formatter config: <span class="token punctuation">(</span>Use arrow keys<span class="token punctuation">)</span>
❯ ESLint with error prevention only
  ESLint + Airbnb config
  ESLint + Standard config
  ESLint + Prettier

<span class="token comment"># 7.在什么时候检测Lint，选择默认并回车</span>
? Pick additional lint features: <span class="token punctuation">(</span>Press <span class="token operator">&lt;</span>space<span class="token operator">&gt;</span> to select, <span class="token operator">&lt;</span>a<span class="token operator">&gt;</span> to toggle all, <span class="token operator">&lt;</span>i<span class="token operator">&gt;</span> to invert selection, and <span class="token operator">&lt;</span>enter<span class="token operator">&gt;</span> to proceed<span class="token punctuation">)</span>
❯◉ Lint on save
 ◯ Lint and fix on commit
 
<span class="token comment"># 8.将这个配置文件放在哪里？选择默认并回车</span>
? Where <span class="token keyword">do</span> you prefer placing config <span class="token keyword">for</span> Babel, ESLint, etc.? <span class="token punctuation">(</span>Use arrow keys<span class="token punctuation">)</span>
❯ In dedicated config files
  In package.json
  
<span class="token comment"># 9.是否保存刚才的预设，（将刚才的配置作为模版，下次选择可直接创建，免去从头到尾一项一项配置的烦恼）</span>
 Save this as a preset <span class="token keyword">for</span> future projects? <span class="token punctuation">(</span>y/N<span class="token punctuation">)</span> N

<span class="token comment"># 10.若9选择Y，这里需要为预设模版起名字</span>
 Save preset as:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="启动项目" tabindex="-1"><a class="header-anchor" href="#启动项目" aria-hidden="true">#</a> 启动项目</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> project_name <span class="token operator">&amp;&amp;</span> <span class="token function">npm</span> run serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h3><p>我们实际开发中，往往有多种环境，如</p><ul><li>development模式用于 vue-cli-service serve</li><li>production模式用于vue-cli-service build 和 vue-cli-service test:e2e</li><li>test模式用于vue-cli-service test:unit</li></ul><p>甚至还有其他的，这里我们只讨论development和production。</p><p>此处有几个需要注意的点：</p><p>1.一个模式可以包含多个环境变量</p><p>2.每个模式都会将环境变量中 NODE_ENV 的值设置为模式的名称</p><p>3.可以通过.env文件增加后缀来设置某个模式下特有的环境变量</p><p>4.为一个特定模式准备的环境文件（例如 .env.production）将会比一般环境文件（例如 .env）拥有更高的优先级</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>.env							<span class="token comment"># 在所有环境中被载入</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="路径配置" tabindex="-1"><a class="header-anchor" href="#路径配置" aria-hidden="true">#</a> @路径配置</h3><p>vscode安装 <code>Path Intellisense</code> 插件</p><p>打开设置-首选项-搜索 <code>Path Intellisense</code> -打开 <code>settings.json</code> ，添加</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;path-intellisense.mappings&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
  <span class="token property">&quot;@&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${workspaceRoot}/src&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在项目 <code>package.json</code> 所在同级目录下创建文件 <code>jsconfig.json</code></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ES6&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;commonjs&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;allowSyntheticDefaultImports&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;@/*&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;src/*&quot;</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;node_modules&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代码片段" tabindex="-1"><a class="header-anchor" href="#代码片段" aria-hidden="true">#</a> 代码片段</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;vue2&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;v2&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;&lt;template&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\\t&lt;div&gt;\\n&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\\t&lt;/div&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;/template&gt;\\n&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;script&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;export default {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\\tdata() {&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\\t\\treturn {\\n&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\\t\\t}&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\\t},&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\\tcomponents: {\\n&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\\t},&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\\tcomputed: {\\n&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\\t},&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\\tcreated() {\\n&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\\t},&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\\tmethods: {\\n&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;\\t},&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;}&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;/script&gt;\\n&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;style lang=\\&quot;less\\&quot; scoped&gt;&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;&lt;/style&gt;&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="什么是spa" tabindex="-1"><a class="header-anchor" href="#什么是spa" aria-hidden="true">#</a> 什么是SPA?</h3><p>Single Page Application，中文：单页应用。</p><p>其实SPA最主要的特点就是在前后端分离的基础上加了一层前端路由，也就是前端来维护一套路由规则。</p><blockquote><p>前端路由的核心是什么呢？</p><p>改变URL，但是页面不进行整体的刷新</p></blockquote><h3 id="什么是mvvm" tabindex="-1"><a class="header-anchor" href="#什么是mvvm" aria-hidden="true">#</a> 什么是MVVM?</h3><p>1.view层---body内的标签</p><p>视图层，在前端里面就是我们常说的DOM层，主要作用是给用户展示各种信息</p><p>2.Model层---new Vue对象</p><p>数据层，数据可能是我们自定义的数据，或者是从网络请求下来的数据</p><p>3.ViewModel层---vue.js文件</p><p>视图模型层，是view层和model层沟通的桥梁；</p><p>一方面它实现了<strong>数据绑定</strong>，将model的改变实时反应到view中；另一方面它实现了<strong>DOM监听</strong>，当DOM发生改变可以对应改变数据（Data）</p><h3 id="scoped的作用是什么" tabindex="-1"><a class="header-anchor" href="#scoped的作用是什么" aria-hidden="true">#</a> scoped的作用是什么？</h3><p>scoped会在元素上添加唯一的属性（data-v-x形式），css编译后也会加上属性选择器，从而达到限制作用域的目的</p><h3 id="模块化" tabindex="-1"><a class="header-anchor" href="#模块化" aria-hidden="true">#</a> 模块化</h3><p>AMD、CMD，鼻祖级别的，现在半淘汰状态了</p><p>模块化目前比较流行的就是 <code>CommonJs规范</code> 和 <code>ES6模块化</code></p><h4 id="commonjs" tabindex="-1"><a class="header-anchor" href="#commonjs" aria-hidden="true">#</a> Commonjs</h4>`,49),k=n(`<p>只要导出正确，导入使哪种方式都行，但尽量配套使用</p><ul><li>导出</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>导入</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//commonjs</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="es6" tabindex="-1"><a class="header-anchor" href="#es6" aria-hidden="true">#</a> ES6</h4><ul><li>导出</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>导入</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//es6 默认引入export下的default</span>
<span class="token keyword">import</span> test <span class="token keyword">from</span> <span class="token string">&#39;@/路径&#39;</span>

<span class="token comment">//commonjs 默认引入的是export对象</span>
<span class="token keyword">var</span> test <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@/路径&#39;</span><span class="token punctuation">)</span>


<span class="token comment">//按需导入</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>num<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/路径&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>export</code>：通过export方式导出，在导入的时候需要加{}，且不能换名字（导出啥名，导入就啥名，名字加到{}） <ul><li><code>import {aaa,bbb,ccc导出的时候的名字} from &quot;路径+文件名&quot;</code></li></ul></li><li><code>export default</code>：通过export default方式导出，导入时不需要加{} <ul><li><code>import 名字 from &quot;路径+文件名&quot;</code></li></ul></li><li>使用场景 <ul><li>导出单个值就用 <code>export default</code></li><li>导出多个值就用 <code>export</code></li></ul></li></ul>`,13);function b(g,h){const i=s("ExternalLinkIcon"),o=s("font");return l(),c("div",null,[d,a("p",null,[a("a",v,[e("vue cli"),t(i)])]),m,t(o,{color:"red"},{default:r(()=>[e("导出是导出，导入是导入两者没有必然关系")]),_:1}),k])}const f=p(u,[["render",b],["__file","extend.html.vue"]]);export{f as default};
