import{_ as e,p as n,q as i,a1 as l}from"./framework-5866ffd3.js";const d={},s=l(`<h2>组件化开发</h2><h3 id="定义组件" tabindex="-1"><a class="header-anchor" href="#定义组件" aria-hidden="true">#</a> 定义组件</h3><p>定义组件分为3步：</p><ol><li><p>导入React核心模块</p></li><li><p>定义组件类</p></li><li><p>导出组件</p></li></ol><p>在src目录下新建App.js文件：</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>//1、导入React核心模块
import React from &#39;react&#39;

//2、定义组件类
class Hello extends React.Component{   //类
    render(){     //函数
        return (   //返回值
            &lt;div&gt;
                hello world !!! 我是组件
            &lt;/div&gt;
        )
    }
}

//3、导出组件
export default Hello

/*
	为什么继承Component？
		因为继承Component，组件里就可以写render，return(标签)，然后React就会帮助渲染成浏览器认识的标签
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="引入组件" tabindex="-1"><a class="header-anchor" href="#引入组件" aria-hidden="true">#</a> 引入组件</h3><p>在需要引入该组件的index.js中，导入，就可以直接使用这个组件了：</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>//import 组件名 from &#39;文件路径&#39;

//1、导入Hello组件 (首字母必须大写)
import Hello from &#39;./App&#39; 

ReactDOM.render(
// 2、使用Hello组件 (首字母必须大写) 
&lt;Hello /&gt; 
, document.getElementById(&#39;root&#39;));

//注意：Hello是组件名，在使用的时候就应该写JSX标签写法，而不能直接写Hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h4><ol><li><p>定义组件的时候，return 后面<strong>只能有一个根标签</strong>，不能有多个，但这个标签内部可以有其他多个标签</p></li><li><p>使用组件的时候，<strong>首字母必须大写</strong>，（是为了和标签进行区分，标签是小写）</p></li><li><p>如果最外层实在不想放置一层div根目录，可以使用 <strong><code>&lt;&gt;&lt;/&gt;</code></strong> 空标签代替</p></li><li><p>写jsx要套在 <code>return ()</code> 里，写js语法要套在 <code>{}</code> 里</p></li></ol>`,11),r=[s];function a(c,t){return n(),i("div",null,r)}const o=e(d,[["render",a],["__file","component.html.vue"]]);export{o as default};
