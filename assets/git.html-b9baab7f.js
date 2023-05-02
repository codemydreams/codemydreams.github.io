import{_ as e,M as i,p as t,q as l,R as n,t as s,N as c,a1 as d}from"./framework-5866ffd3.js";const r={},o=n("h1",{id:"git",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#git","aria-hidden":"true"},"#"),s(" git")],-1),p={href:"https://git-scm.com/book/zh/v2",target:"_blank",rel:"noopener noreferrer"},m=d(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>start a 工作区 <span class="token punctuation">(</span>see also: <span class="token function">git</span> <span class="token builtin class-name">help</span> tutorial<span class="token punctuation">)</span>
	clone     将仓库克隆到新目录中
	init      创建一个空Git仓库 or 重新初始化一个现有的

处理当前的变化
	<span class="token function">add</span>       将文件内容添加到index中
	<span class="token function">mv</span>        移动 or 重命名 a file, a directory, or a symlink
	restore   恢复工作树文件
	<span class="token function">rm</span>        从工作树和index中删除文件

检查历史和状态
	bisect    Use binary search to <span class="token function">find</span> the commit that introduced a bug
	<span class="token function">diff</span>      Show changes between commits, commit and working tree, etc
	<span class="token function">grep</span>      Print lines matching a pattern
	log       展示 commit 日志
	show      Show various types of objects
	status    展示工作树状态

grow, mark and tweak your common <span class="token function">history</span>
	branch    列出, 创建, 或删除分支
	commit    记录对仓库的更改
	merge     将两个或多个开发历史连接在一起
	rebase    在另一个基底之上重新提交
	reset     重置当前HEAD到指定状态
	switch    切换分支
	tag       Create, list, delete or verify a tag object signed with GPG

协作
	fetch     从另一个仓库下载对象和分支
	pull      获取和集成 另一个仓库 or 一个本地分支
	push      更新远程分支和相关对象

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-配置" tabindex="-1"><a class="header-anchor" href="#_1-配置" aria-hidden="true">#</a> 1. 配置</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看git版本</span>
<span class="token function">git</span> <span class="token parameter variable">-v</span>

<span class="token comment"># 配置name和email，在提交代码时作为区分提交者身份的标识</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name	<span class="token string">&quot;DancySue&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;codebetter@163.com&quot;</span>

<span class="token comment"># 查看当前name和email</span>
<span class="token function">git</span> config user.name
<span class="token function">git</span> config user.email
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用" aria-hidden="true">#</a> 2.使用</h2><h3 id="文件状态" tabindex="-1"><a class="header-anchor" href="#文件状态" aria-hidden="true">#</a> 文件状态</h3><p>可以通过 <code>git status</code> 来查看文件的状态。</p><p>git中的文件类型有两种：未跟踪文件和已跟踪文件。</p><ul><li><p>未跟踪文件（Untracked files）：文件的初始状态，指文件没有被git所管理，尚未使用 <code>git add</code> 命令添加的文件。</p></li><li><p>已跟踪文件（tracked files）：指文件已经被git管理</p><ul><li>未修改（unmidified）：表示磁盘中的文件和git仓库中文件相同，没有修改。</li><li>已修改（modified）：表示磁盘中的文件已被修改，和git仓库中的文件不同。</li><li>暂存（staged）：表示文件修改已被保存，但是尚未提交到git仓库。</li></ul></li></ul><h3 id="状态转换" tabindex="-1"><a class="header-anchor" href="#状态转换" aria-hidden="true">#</a> 状态转换</h3><p>1）<code>Untracked files</code> ==&gt; <code>Changes to be committed</code></p><p>使用：<code>git add</code></p><p>含义：将工作区的某个文件、某些文件、或者是所有文件，所作出的修改（新建、删除也算的），添加至暂存区，此时文件就可以被git commit了。</p><p>2）<code>Changes to be committed</code> ==&gt; <code>Untracked files</code></p><p>使用：git rm --cached 文件名</p><p>含义：将文件从暂存状态转换为未暂存状态</p><p>3）<code>Changes to be committed</code> ==&gt; <code>Changes not staged for commit</code></p><p>使用：当某个文件已经git add过了，此时如果再进行修改，使用git status查看文件状态的时候，就处于Changes not staged for commit，意思是修改的部分没有生成快照，不能提交。</p><p>Untracked files：即未跟踪的状态，这是文件的初始状态，也就是在工作区中的状态，就是说git不知道你这个文件的信息，没有生成快照</p><p>Changes to be committed：即文件在暂存区中生成了快照等待被提交（commit）</p><p>Changes not staged for commit：即文件生成过快照，但是又有了新的修改，并且没有生成新的快照</p><p>当在工作目录中新加入一个文件时，它处于未跟踪状态，这表示其没有纳入Git的版本控制。</p><p>通过 git add 命令可以将其加入跟踪，并同时放入暂存区。</p><p>一个已经被跟踪的文件，如果没有做过新的修改，就是未修改状态。</p><p>一旦对其做了改动，就变成了已修改状态。通过 git add 命令可以将已修改的文件放入暂存区。</p><p>初次克隆某个仓库时，工作目录中所有文件都是已跟踪且未修改的状态。</p><p>git commit 命令会将暂存区中的文件提交至HEAD所指向的分支。当被commit之后，暂存区的文件将回到未修改状态。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 初始化仓库 （初始化之后会出现一个名为.git的隐藏文件夹）</span>
<span class="token function">git</span> init

<span class="token comment"># 查看当前仓库状态 （红色：还未上传至暂存区的文件, 绿色：已上传至暂存区的文件）</span>
<span class="token function">git</span> status

<span class="token comment"># 上传暂存区 （未跟踪文件/已修改状态 =&gt; 暂存）</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token operator">&lt;</span>filename<span class="token operator">&gt;</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span> <span class="token comment"># 将所有文件上传至暂存区</span>

<span class="token comment"># 上传本地仓库 （暂存区 =&gt; 未修改状态）</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;对本次上传的说明,如bug修复、新增功能点等&quot;</span>
<span class="token function">git</span> commit <span class="token parameter variable">-a</span> <span class="token parameter variable">-m</span> <span class="token string">&quot;本次上传说明&quot;</span> <span class="token comment"># 提交所有已修改的文件，未跟踪的文件不会提交（等于 git add + git commit 两条命令）</span>

<span class="token comment"># 查看提交日志</span>
<span class="token function">git</span> log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重置文件" tabindex="-1"><a class="header-anchor" href="#重置文件" aria-hidden="true">#</a> 重置文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 重置文件 (将文件重置至未修改状态)</span>
<span class="token comment"># 恢复文件 (文件删除后，先取消暂存状态后才可进行恢复操作)</span>
<span class="token function">git</span> restore 文件名 

<span class="token comment"># 将文件从暂存状态取消(变为未跟踪状态)</span>
<span class="token function">git</span> restore <span class="token parameter variable">--staged</span> 文件名 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除文件" tabindex="-1"><a class="header-anchor" href="#删除文件" aria-hidden="true">#</a> 删除文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 删除文件（只能删除未修改文件）</span>
<span class="token function">git</span> <span class="token function">rm</span> 文件名
<span class="token comment"># 强制删除</span>
<span class="token function">git</span> <span class="token function">rm</span> 文件名 <span class="token parameter variable">-f</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="移动文件" tabindex="-1"><a class="header-anchor" href="#移动文件" aria-hidden="true">#</a> 移动文件</h3><p>也可以为文件重命名</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 移动文件</span>
<span class="token function">git</span> <span class="token function">mv</span> from to 
<span class="token comment"># 为文件重命名</span>
<span class="token function">git</span> <span class="token function">mv</span> <span class="token operator">&lt;</span>filename<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>newname<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="版本退回" tabindex="-1"><a class="header-anchor" href="#版本退回" aria-hidden="true">#</a> 版本退回</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> reset <span class="token parameter variable">--hard</span> 前8位
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-分支" tabindex="-1"><a class="header-anchor" href="#_3-分支" aria-hidden="true">#</a> 3.分支</h2><p>git在存储文件时，每一次代码的提交都会创建一个与之对应的节点，类似于游戏中的存档（存储操作信息），git就是通过一个一个的节点来记录代码的状态的，可以通过 <code>git log</code> 命令查看节点。</p><p>节点会构成一个树状结构，树状结构就意味着这个树会存在分支，默认情况下仓库只有一个分支，命名为master。在使用git时，可以创建多个分支，分支与分支之间相互独立，在一个分支上修改代码不会影响其他的分支。</p><p>Accept Current Change 保留当前的 Accept Incoming Change 保留后来的 Accept Both Changes 两者都保留 Compare Changes</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看分支</span>
<span class="token function">git</span> branch

<span class="token comment"># 创建分支</span>
<span class="token function">git</span> brance <span class="token operator">&lt;</span>brance name<span class="token operator">&gt;</span>

<span class="token comment"># 删除分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-d</span> <span class="token operator">&lt;</span>brance name<span class="token operator">&gt;</span> <span class="token comment"># 分支合并后才能删除</span>
<span class="token function">git</span> branch <span class="token parameter variable">-D</span> <span class="token operator">&lt;</span>brance name<span class="token operator">&gt;</span> <span class="token comment"># 强制删除</span>

<span class="token comment"># 切换分支</span>
<span class="token function">git</span> switch <span class="token operator">&lt;</span>brance name<span class="token operator">&gt;</span> <span class="token comment"># 新版命令（功能不如checkout丰富）</span>
<span class="token function">git</span> checkout 分支名

<span class="token comment"># 创建并切换到该分支</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> 分支名
<span class="token function">git</span> switch <span class="token parameter variable">-c</span> <span class="token operator">&lt;</span>brance name<span class="token operator">&gt;</span>

<span class="token comment"># 合并分支（合并分支需要切换到主分支）</span>
<span class="token function">git</span> merge 分支名

<span class="token comment"># 变基</span>
<span class="token function">git</span> switch <span class="token operator">&lt;</span>branch name<span class="token operator">&gt;</span>
<span class="token function">git</span> rebase master
<span class="token function">git</span> switch master
<span class="token function">git</span> merge <span class="token operator">&lt;</span>branch name<span class="token operator">&gt;</span>
<span class="token function">git</span> branch <span class="token parameter variable">-d</span> <span class="token operator">&lt;</span>branch name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变基rebase" tabindex="-1"><a class="header-anchor" href="#变基rebase" aria-hidden="true">#</a> 变基rebase</h3><p>在开发中除了通过merge合并分支外，还可以通过变基来完成分支的合并。</p><p>我们通过merge合并分支时，在提交记录中会将所有的分支创建和分支合并的过程全部都显示出来，这样当项目比较复杂，开发周期比较长时，必须要反复的创建、合并、删除分支，这样一来将会使得我们代码的提交记录变得极为混乱。</p><p>原理（变基时发生了什么）：</p><ol><li><p>当我们发起变基时，git会首先找到两条分支的最近的共同祖先</p></li><li><p>对比当前分支相对于祖先的历史提交，并且将它们提取出来存储到一个临时文件中</p></li><li><p>将当前部分指向目标的基底</p></li><li><p>以当前基底开始，重新执行历史操作</p></li></ol><p>变基和merge对于合并分支来说最终的结果是一样的！但是变基会使得代码的提交记录更整洁更清晰。</p><p>注意：大部分情况下合并和变基是可以互换的，但是如果分支已经提交给了远程仓库，那么这时尽量不要变基。</p><h2 id="_4-远程仓库remote" tabindex="-1"><a class="header-anchor" href="#_4-远程仓库remote" aria-hidden="true">#</a> 4.远程仓库remote</h2><p>远程的git仓库和本地的没什么本质区别，不同在于远程的仓库可以被多人同时访问使用，方便我们协同开发。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1.连接远程仓库地址</span>
	<span class="token function">git</span> remote <span class="token function">add</span> origin git远程仓库的地址

<span class="token comment"># 2.克隆远程仓库项目</span>
	<span class="token function">git</span> clone 远程地址

<span class="token comment"># 3.将本地仓库项目推送远程仓库</span>
	<span class="token function">git</span> push origin 分支

<span class="token comment"># 4.更新仓库（同步远程仓库）只有克隆过项目才可以更新</span>
	<span class="token function">git</span> pull origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>工作流程</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 克隆</span>
<span class="token function">git</span> clone
<span class="token comment"># 创建分支</span>
<span class="token function">git</span> branch <span class="token operator">&lt;</span>branch name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-ssh" tabindex="-1"><a class="header-anchor" href="#_5-ssh" aria-hidden="true">#</a> 5.SSH</h2><ol><li>我的 ==&gt; 设置 ==&gt; 安全设置(ssh公钥)</li><li>怎样生成公钥(https://gitee.com/help/articles/4181#article-header0) ==&gt; ssh-keygen -t ed25519 -C &quot;192966603@qq.com&quot;</li></ol><h3 id="ssh和https的区别" tabindex="-1"><a class="header-anchor" href="#ssh和https的区别" aria-hidden="true">#</a> ssh和https的区别</h3><ul><li><p>ssh属于项目的管理者，之后提交不需要验证身份，因为只有管理者才能操作</p></li><li><p>https谁都可以下载，每次需要输入用户名和密码</p></li></ul><h3 id="git相关命令" tabindex="-1"><a class="header-anchor" href="#git相关命令" aria-hidden="true">#</a> git相关命令</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>初次运行 Git 前的配置
https://gitee.com/help/articles/4107

如何通过 git clone 克隆仓库/项目
https://gitee.com/help/articles/4111#article-header0

Git 仓库基础操作
https://gitee.com/help/articles/4114#article-header0

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="code-打开编辑器" tabindex="-1"><a class="header-anchor" href="#code-打开编辑器" aria-hidden="true">#</a> code . 打开编辑器</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.手动打开编辑器
2.按 shift commind p
3.键入shell
4.找到Shell Command: install &#39;code&#39; command in PATH&quot;, 对其点击
5.提示安装成功
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,61);function v(u,b){const a=i("ExternalLinkIcon");return t(),l("div",null,[o,n("p",null,[n("a",p,[s("git"),c(a)]),s("是一个免费的开源的分布式版本控制系统，它可以快速高效地管理项目开发的源码。")]),m])}const g=e(r,[["render",v],["__file","git.html.vue"]]);export{g as default};
