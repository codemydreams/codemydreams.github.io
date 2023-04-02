import{_ as n,p as e,q as i,a1 as s}from"./framework-5866ffd3.js";const l={},a=s(`<h2>函数式组件</h2><p>react里面组件分两种</p><ul><li><p>类式组件</p></li><li><p>函数式组件</p><ul><li>没有state，但是提供了很多的hook函数，数据渲染简洁</li><li>没有this，它指向window</li><li>没有生命周期函数（靠 hook 模拟出来）</li><li>写的都是js原生，数据不是响应式的</li></ul></li></ul><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token comment">// 这就是一个简单的函数式组件</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Demo</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="usestate-响应式数据" tabindex="-1"><a class="header-anchor" href="#usestate-响应式数据" aria-hidden="true">#</a> useState 响应式数据</h3><blockquote><h5 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用：</h5><p><code>let [变量名,修改变量的回调] = useState(默认值)</code></p><h5 id="修改" tabindex="-1"><a class="header-anchor" href="#修改" aria-hidden="true">#</a> 修改：</h5><p><code>修改变量的回调(变量名)</code></p></blockquote><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import React,{useState} from &quot;react&quot;

export default function App() {
  // 第一个数据 就是我们想要使用的组件内部数据
  // 第二个数据 是专门用来修改第一个数据的方法名	setNum(新值) 表示把第一个数据改成新值
  // 第三个数据 useState方法的形参就是第一个数据的初始值
  const [num,setNum] = useState(0)
  function hdClick(){
    setNum(num + 1)
  }
  return (
    &lt;div&gt;
    	&lt;p&gt;{num}&lt;/p&gt;
      &lt;button onClick={hdClick}&gt;按钮1&lt;/button&gt;
      &lt;button onClick={() =&gt; setNum(num + 1)}&gt;按钮2&lt;/button&gt;
    &lt;/div&gt;
  )
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="父子组件传值" tabindex="-1"><a class="header-anchor" href="#父子组件传值" aria-hidden="true">#</a> 父子组件传值</h3><h4 id="父传子" tabindex="-1"><a class="header-anchor" href="#父传子" aria-hidden="true">#</a> 父传子</h4><ol><li><p>给儿子自定义属性</p></li><li><p>儿子在函数参数位置接取props</p></li></ol><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import React,{useState} from &#39;react&#39;

function Child(props){
  let {num} = props
  return (
  	&lt;div&gt;
    	&lt;h2&gt;{num}&lt;/h2&gt;
    &lt;/div&gt;
  )
  
}

export default function Father(){
  const [num,setNum] = useState(10)
  return (
  	&lt;div&gt;
    	&lt;Child num={num}&gt;&lt;/Child&gt;
    &lt;/div&gt;
  )
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="子传父" tabindex="-1"><a class="header-anchor" href="#子传父" aria-hidden="true">#</a> 子传父</h4><ol><li><p>给儿子传函数</p></li><li><p>儿子调用函数传值</p></li></ol><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import React, { useState } from &quot;react&quot;;

function Child(props) {
  let { num, changeNum } = props;
  return (
    &lt;div&gt;
      &lt;h2&gt;{num}&lt;/h2&gt;
      &lt;button onClick={changeNum}&gt;按钮&lt;/button&gt;
    &lt;/div&gt;
  );
}

export default function Father() {
  const [num, setNum] = useState(10);
  return (
    &lt;div&gt;
      &lt;Child num={num} changeNum={() =&gt; setNum(num + 1)}&gt;&lt;/Child&gt;
    &lt;/div&gt;
  );
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hook-多级组件传值" tabindex="-1"><a class="header-anchor" href="#hook-多级组件传值" aria-hidden="true">#</a> Hook 多级组件传值</h3><p>ctx.js</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import {createContext} from &quot;react&quot;
const ctx = createContext()

export default ctx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>父辈组件</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import React from &quot;react&quot;;
import Baba from &quot;./Baba&quot;;
import ctx from &quot;./ctx&quot;;
let { Provider } = ctx;
export default function Yeye() {
  const jie = (v) =&gt; {
    console.log(v);
  };
  return (
    &lt;Provider value={{ name: &quot;苏东旭&quot;, fn: jie }}&gt;
      &lt;div&gt;
        yeye
        &lt;hr /&gt;
        &lt;Baba /&gt;
      &lt;/div&gt;
    &lt;/Provider&gt;
  );
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>中间</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import React from &quot;react&quot;;
import Son from &quot;./Son&quot;;
export default function Baba() {
  return (
    &lt;div&gt;
      Baba
      &lt;hr /&gt;
      &lt;Son&gt;&lt;/Son&gt;
      &lt;Sunzi /&gt;
    &lt;/div&gt;
  );
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后代组件</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import React from &quot;react&quot;;
import { useContext } from &quot;react&quot;;
import ctx from &quot;./ctx&quot;;

export default function Son() {
  const value = useContext(ctx);
  return (
    &lt;div&gt;
      Son
      &lt;p&gt;{value.name}&lt;/p&gt;
      &lt;button
        onClick={() =&gt; {
          value.fn(&quot;苏东旭&quot;);
        }}
      &gt;
        契机
      &lt;/button&gt;
    &lt;/div&gt;
  );
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hook模拟生命周期" tabindex="-1"><a class="header-anchor" href="#hook模拟生命周期" aria-hidden="true">#</a> Hook模拟生命周期</h3><p>componentDidMount 请求数据 组件渲染完毕</p><p>componentDidUpdate 数据更新完毕</p><p>componentWillUnmount 页面关闭的时候</p><p>useEffect(回调函数，数组)</p><ol><li>第二个参数是空数组 [] ，不监听任何一个数据的变化 代替 componentDidMount</li><li>第二个参数不写，监听所有内容，代替componentDidUpdate</li><li>第二个参数 非空数组[有内容] 只监听 [] 里面的数据的改变 类似watch，不代替任何一个生命周期</li><li>如果里面有return 函数，代表页面关闭的时候执行 代替componentWillUnmount</li></ol><p>useEffect做请求数据，一定是空数组</p><p>里面不支持async/await</p><h3 id="hook获取dom元素" tabindex="-1"><a class="header-anchor" href="#hook获取dom元素" aria-hidden="true">#</a> Hook获取DOM元素</h3><p>useRef 获取DOM元素</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import React from &quot;react&quot;;
import { useRef } from &quot;react&quot;;

export default function App6() {
  const inp = useRef();
  const box = useRef();

  const dian = () =&gt; {
    console.log(inp.current.value);
    console.log(box.current);
  };

  return (
    &lt;div&gt;
      App6
      &lt;input type=&quot;text&quot; ref={inp} /&gt;
      &lt;div ref={box}&gt;盒子&lt;/div&gt;
      &lt;button onClick={dian}&gt;获取dom&lt;/button&gt;
    &lt;/div&gt;
  );
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hook-计算属性" tabindex="-1"><a class="header-anchor" href="#hook-计算属性" aria-hidden="true">#</a> Hook 计算属性</h3><p>useMemo(回调函数，[监听的内容])</p><div class="language-react line-numbers-mode" data-ext="react"><pre class="language-react"><code>import React from &quot;react&quot;;
import { useMemo } from &quot;react&quot;;
import { useState } from &quot;react&quot;;

export default function App7() {
  const [num, setNum] = useState(10);
  let total = useMemo(() =&gt; {
    return num * 2;
  }, [num]);
  return (
    &lt;div&gt;
      &lt;p&gt;{num}&lt;/p&gt;
      &lt;p&gt;{total}&lt;/p&gt;
      &lt;button
        onClick={() =&gt; {
          setNum(num + 1);
        }}
      &gt;
        按钮
      &lt;/button&gt;
    &lt;/div&gt;
  );
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37),d=[a];function t(r,u){return e(),i("div",null,d)}const c=n(l,[["render",t],["__file","function-component.html.vue"]]);export{c as default};
