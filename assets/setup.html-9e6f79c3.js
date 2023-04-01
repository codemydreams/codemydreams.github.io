import{_ as a,M as i,p as t,q as l,R as n,t as s,N as c,a1 as o}from"./framework-5866ffd3.js";const r={},p=n("h2",{id:"环境搭建",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#环境搭建","aria-hidden":"true"},"#"),s(" 环境搭建")],-1),d=n("h3",{id:"安装脚手架",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装脚手架","aria-hidden":"true"},"#"),s(" 安装脚手架")],-1),u={href:"https://cli.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},v=o(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装vue cli脚手架</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 命令行创建项目</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动项目" tabindex="-1"><a class="header-anchor" href="#启动项目" aria-hidden="true">#</a> 启动项目</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> project_name <span class="token operator">&amp;&amp;</span> <span class="token function">npm</span> run serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5);function m(b,k){const e=i("ExternalLinkIcon");return t(),l("div",null,[p,d,n("p",null,[n("a",u,[s("vue cli"),c(e)])]),v])}const f=a(r,[["render",m],["__file","setup.html.vue"]]);export{f as default};
