import{_ as p,p as e,q as d,a1 as i}from"./framework-5866ffd3.js";const a={},n=i(`<h2 id="多表查询" tabindex="-1"><a class="header-anchor" href="#多表查询" aria-hidden="true">#</a> 多表查询</h2><p>* 查询语法：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>select
	列名列表
from
	表名列表
where....
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>* 准备sql</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code># 创建部门表
CREATE TABLE dept(
	id INT PRIMARY KEY AUTO_INCREMENT,
	NAME VARCHAR(20)
);
INSERT INTO dept (NAME) VALUES (&#39;开发部&#39;),(&#39;市场部&#39;),(&#39;财务部&#39;);

# 创建员工表
CREATE TABLE emp (
	id INT PRIMARY KEY AUTO_INCREMENT,
	NAME VARCHAR(10),
	gender CHAR(1), -- 性别
	salary DOUBLE, -- 工资
	join_date DATE, -- 入职日期
	dept_id INT,
	FOREIGN KEY (dept_id) REFERENCES dept(id) -- 外键，关联部门表(部门表的主键)
);

INSERT INTO emp(NAME,gender,salary,join_date,dept_id) VALUES(&#39;孙悟空&#39;,&#39;男&#39;,7200,&#39;2013-02-24&#39;,1);
INSERT INTO emp(NAME,gender,salary,join_date,dept_id) VALUES(&#39;猪八戒&#39;,&#39;男&#39;,3600,&#39;2010-12-02&#39;,2);
INSERT INTO emp(NAME,gender,salary,join_date,dept_id) VALUES(&#39;唐僧&#39;,&#39;男&#39;,9000,&#39;2008-08-08&#39;,2);
INSERT INTO emp(NAME,gender,salary,join_date,dept_id) VALUES(&#39;白骨精&#39;,&#39;女&#39;,5000,&#39;2015-10-07&#39;,3);
INSERT INTO emp(NAME,gender,salary,join_date,dept_id) VALUES(&#39;蜘蛛精&#39;,&#39;女&#39;,4500,&#39;2011-03-14&#39;,1);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>* 笛卡尔积：</p><p>​ * 有两个集合A,B .取这两个集合的所有组成情况。</p><p>​ * 要完成多表查询，需要消除无用的数据</p><p>* 多表查询的分类：</p><p>​ \\1. 内连接查询：</p><p>​ \\1. 隐式内连接：使用where条件消除无用数据</p><p>​ * 例子：</p><p>​</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>-- 查询所有员工信息和对应的部门信息
SELECT * FROM emp,dept WHERE emp.\`dept_id\` = dept.\`id\`;

-- 查询员工表的名称，性别。部门表的名称
SELECT emp.name,emp.gender,dept.name FROM emp,dept WHERE emp.\`dept_id\` = dept.\`id\`;

SELECT
	t1.name, -- 员工表的姓名
	t1.gender,-- 员工表的性别
	t2.name -- 部门表的名称
FROM
	emp t1,
	dept t2
WHERE
	t1.\`dept_id\` = t2.\`id\`;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p><p>​</p><p>​</p><p>​</p><p>​ \\2. 显式内连接：</p><p>​ * 语法： select 字段列表 from 表名1 [inner] join 表名2 on 条件</p><p>​ * 例如：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT * FROM emp INNER JOIN dept ON emp.\`dept_id\` = dept.\`id\`;   
SELECT * FROM emp JOIN dept ON emp.\`dept_id\` = dept.\`id\`;  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>​ \\3. 内连接查询：</p><p>​ \\1. 从哪些表中查询数据</p><p>​ \\2. 条件是什么</p><p>​ \\3. 查询哪些字段</p><p>​ \\2. 外链接查询：</p><p>​ \\1. 左外连接：</p><p>​ * 语法：select 字段列表 from 表1 left [outer] join 表2 on 条件；</p><p>​ * 查询的是左表所有数据以及其交集部分。</p><p>​ * 例子：</p><p>​ -- 查询所有员工信息，如果员工有部门，则查询部门名称，没有部门，则不显示部门名称</p><p>​ SELECT t1.*,t2.<code>name</code> FROM emp t1 LEFT JOIN dept t2 ON t1.<code>dept_id</code> = t2.<code>id</code>;</p><p>​ \\2. 右外连接：</p><p>​ * 语法：select 字段列表 from 表1 right [outer] join 表2 on 条件；</p><p>​ * 查询的是右表所有数据以及其交集部分。</p><p>​ * 例子：</p><p>​ SELECT * FROM dept t2 RIGHT JOIN emp t1 ON t1.<code>dept_id</code> = t2.<code>id</code>;</p><p>​ \\3. 子查询：</p><p>​ * 概念：查询中嵌套查询，称嵌套查询为子查询。</p><p>​ -- 查询工资最高的员工信息</p><p>​ -- 1 查询最高的工资是多少 9000</p><p>​ SELECT MAX(salary) FROM emp;</p><p>​</p><p>​ -- 2 查询员工信息，并且工资等于9000的</p><p>​ SELECT * FROM emp WHERE emp.<code>salary</code> = 9000;</p><p>​</p><p>​ -- 一条sql就完成这个操作。子查询</p><p>​ SELECT * FROM emp WHERE emp.<code>salary</code> = (SELECT MAX(salary) FROM emp);</p><p>​ * 子查询不同情况</p><p>​ \\1. 子查询的结果是单行单列的：</p><p>​ * 子查询可以作为条件，使用运算符去判断。 运算符： &gt; &gt;= &lt; &lt;= =</p><p>​ *</p><p>​ -- 查询员工工资小于平均工资的人</p><p>​ SELECT * FROM emp WHERE emp.salary &lt; (SELECT AVG(salary) FROM emp);</p><p>​ \\2. 子查询的结果是多行单列的：</p><p>​ * 子查询可以作为条件，使用运算符in来判断</p><p>​ -- 查询&#39;财务部&#39;和&#39;市场部&#39;所有的员工信息</p><p>​ SELECT id FROM dept WHERE NAME = &#39;财务部&#39; OR NAME = &#39;市场部&#39;;</p><p>​ SELECT * FROM emp WHERE dept_id = 3 OR dept_id = 2;</p><p>​ -- 子查询</p><p>​ SELECT * FROM emp WHERE dept_id IN (SELECT id FROM dept WHERE NAME = &#39;财务部&#39; OR NAME = &#39;市场部&#39;);</p><p>​ \\3. 子查询的结果是多行多列的：</p><p>​ * 子查询可以作为一张虚拟表参与查询</p><p>​ -- 查询员工入职日期是2011-11-11日之后的员工信息和部门信息</p><p>​ -- 子查询</p><p>​ SELECT * FROM dept t1 ,(SELECT * FROM emp WHERE emp.<code>join_date</code> &gt; &#39;2011-11-11&#39;) t2</p><p>​ WHERE t1.id = t2.dept_id;</p><p>​</p><p>​ -- 普通内连接</p><p>​ SELECT * FROM emp t1,dept t2 WHERE t1.<code>dept_id</code> = t2.<code>id</code> AND t1.<code>join_date</code> &gt; &#39;2011-11-11&#39;</p><p>​ * 多表查询练习</p><p>​ -- 部门表</p><p>​ CREATE TABLE dept (</p><p>​ id INT PRIMARY KEY PRIMARY KEY, -- 部门id</p><p>​ dname VARCHAR(50), -- 部门名称</p><p>​ loc VARCHAR(50) -- 部门所在地</p><p>​ );</p><p>​</p><p>​ -- 添加4个部门</p><p>​ INSERT INTO dept(id,dname,loc) VALUES</p><p>​ (10,&#39;教研部&#39;,&#39;北京&#39;),</p><p>​ (20,&#39;学工部&#39;,&#39;上海&#39;),</p><p>​ (30,&#39;销售部&#39;,&#39;广州&#39;),</p><p>​ (40,&#39;财务部&#39;,&#39;深圳&#39;);</p><p>​</p><p>​</p><p>​</p><p>​ -- 职务表，职务名称，职务描述</p><p>​ CREATE TABLE job (</p><p>​ id INT PRIMARY KEY,</p><p>​ jname VARCHAR(20),</p><p>​ description VARCHAR(50)</p><p>​ );</p><p>​</p><p>​ -- 添加4个职务</p><p>​ INSERT INTO job (id, jname, description) VALUES</p><p>​ (1, &#39;董事长&#39;, &#39;管理整个公司，接单&#39;),</p><p>​ (2, &#39;经理&#39;, &#39;管理部门员工&#39;),</p><p>​ (3, &#39;销售员&#39;, &#39;向客人推销产品&#39;),</p><p>​ (4, &#39;文员&#39;, &#39;使用办公软件&#39;);</p><p>​</p><p>​</p><p>​</p><p>​ -- 员工表</p><p>​ CREATE TABLE emp (</p><p>​ id INT PRIMARY KEY, -- 员工id</p><p>​ ename VARCHAR(50), -- 员工姓名</p><p>​ job_id INT, -- 职务id</p><p>​ mgr INT , -- 上级领导</p><p>​ joindate DATE, -- 入职日期</p><p>​ salary DECIMAL(7,2), -- 工资</p><p>​ bonus DECIMAL(7,2), -- 奖金</p><p>​ dept_id INT, -- 所在部门编号</p><p>​ CONSTRAINT emp_jobid_ref_job_id_fk FOREIGN KEY (job_id) REFERENCES job (id),</p><p>​ CONSTRAINT emp_deptid_ref_dept_id_fk FOREIGN KEY (dept_id) REFERENCES dept (id)</p><p>​ );</p><p>​</p><p>​ -- 添加员工</p><p>​ INSERT INTO emp(id,ename,job_id,mgr,joindate,salary,bonus,dept_id) VALUES</p><p>​ (1001,&#39;孙悟空&#39;,4,1004,&#39;2000-12-17&#39;,&#39;8000.00&#39;,NULL,20),</p><p>​ (1002,&#39;卢俊义&#39;,3,1006,&#39;2001-02-20&#39;,&#39;16000.00&#39;,&#39;3000.00&#39;,30),</p><p>​ (1003,&#39;林冲&#39;,3,1006,&#39;2001-02-22&#39;,&#39;12500.00&#39;,&#39;5000.00&#39;,30),</p><p>​ (1004,&#39;唐僧&#39;,2,1009,&#39;2001-04-02&#39;,&#39;29750.00&#39;,NULL,20),</p><p>​ (1005,&#39;李逵&#39;,4,1006,&#39;2001-09-28&#39;,&#39;12500.00&#39;,&#39;14000.00&#39;,30),</p><p>​ (1006,&#39;宋江&#39;,2,1009,&#39;2001-05-01&#39;,&#39;28500.00&#39;,NULL,30),</p><p>​ (1007,&#39;刘备&#39;,2,1009,&#39;2001-09-01&#39;,&#39;24500.00&#39;,NULL,10),</p><p>​ (1008,&#39;猪八戒&#39;,4,1004,&#39;2007-04-19&#39;,&#39;30000.00&#39;,NULL,20),</p><p>​ (1009,&#39;罗贯中&#39;,1,NULL,&#39;2001-11-17&#39;,&#39;50000.00&#39;,NULL,10),</p><p>​ (1010,&#39;吴用&#39;,3,1006,&#39;2001-09-08&#39;,&#39;15000.00&#39;,&#39;0.00&#39;,30),</p><p>​ (1011,&#39;沙僧&#39;,4,1004,&#39;2007-05-23&#39;,&#39;11000.00&#39;,NULL,20),</p><p>​ (1012,&#39;李逵&#39;,4,1006,&#39;2001-12-03&#39;,&#39;9500.00&#39;,NULL,30),</p><p>​ (1013,&#39;小白龙&#39;,4,1004,&#39;2001-12-03&#39;,&#39;30000.00&#39;,NULL,20),</p><p>​ (1014,&#39;关羽&#39;,4,1007,&#39;2002-01-23&#39;,&#39;13000.00&#39;,NULL,10);</p><p>​</p><p>​</p><p>​</p><p>​ -- 工资等级表</p><p>​ CREATE TABLE salarygrade (</p><p>​ grade INT PRIMARY KEY, -- 级别</p><p>​ losalary INT, -- 最低工资</p><p>​ hisalary INT -- 最高工资</p><p>​ );</p><p>​</p><p>​ -- 添加5个工资等级</p><p>​ INSERT INTO salarygrade(grade,losalary,hisalary) VALUES</p><p>​ (1,7000,12000),</p><p>​ (2,12010,14000),</p><p>​ (3,14010,20000),</p><p>​ (4,20010,30000),</p><p>​ (5,30010,99990);</p><p>​</p><p>​ -- 需求：</p><p>​</p><p>​ -- 1.查询所有员工信息。查询员工编号，员工姓名，工资，职务名称，职务描述</p><p>​ /*</p><p>​ 分析：</p><p>​ 1.员工编号，员工姓名，工资，需要查询emp表 职务名称，职务描述 需要查询job表</p><p>​ 2.查询条件 emp.job_id = job.id</p><p>​</p><p>​ */</p><p>​ SELECT</p><p>​ t1.<code>id</code>, -- 员工编号</p><p>​ t1.<code>ename</code>, -- 员工姓名</p><p>​ t1.<code>salary</code>,-- 工资</p><p>​ t2.<code>jname</code>, -- 职务名称</p><p>​ t2.<code>description</code> -- 职务描述</p><p>​ FROM</p><p>​ emp t1, job t2</p><p>​ WHERE</p><p>​ t1.<code>job_id</code> = t2.<code>id</code>;</p><p>​</p><p>​</p><p>​</p><p>​ -- 2.查询员工编号，员工姓名，工资，职务名称，职务描述，部门名称，部门位置</p><p>​ /*</p><p>​ 分析：</p><p>​ \\1. 员工编号，员工姓名，工资 emp 职务名称，职务描述 job 部门名称，部门位置 dept</p><p>​ \\2. 条件： emp.job_id = job.id and emp.dept_id = dept.id</p><p>​ */</p><p>​</p><p>​ SELECT</p><p>​ t1.<code>id</code>, -- 员工编号</p><p>​ t1.<code>ename</code>, -- 员工姓名</p><p>​ t1.<code>salary</code>,-- 工资</p><p>​ t2.<code>jname</code>, -- 职务名称</p><p>​ t2.<code>description</code>, -- 职务描述</p><p>​ t3.<code>dname</code>, -- 部门名称</p><p>​ t3.<code>loc</code> -- 部门位置</p><p>​ FROM</p><p>​ emp t1, job t2,dept t3</p><p>​ WHERE</p><p>​ t1.<code>job_id</code> = t2.<code>id</code> AND t1.<code>dept_id</code> = t3.<code>id</code>;</p><p>​</p><p>​ -- 3.查询员工姓名，工资，工资等级</p><p>​ /*</p><p>​ 分析：</p><p>​ 1.员工姓名，工资 emp 工资等级 salarygrade</p><p>​ 2.条件 emp.salary &gt;= salarygrade.losalary and emp.salary &lt;= salarygrade.hisalary</p><p>​ emp.salary BETWEEN salarygrade.losalary and salarygrade.hisalary</p><p>​ */</p><p>​ SELECT</p><p>​ t1.ename ,</p><p>​ t1.<code>salary</code>,</p><p>​ t2.*</p><p>​ FROM emp t1, salarygrade t2</p><p>​ WHERE t1.<code>salary</code> BETWEEN t2.<code>losalary</code> AND t2.<code>hisalary</code>;</p><p>​</p><p>​</p><p>​</p><p>​ -- 4.查询员工姓名，工资，职务名称，职务描述，部门名称，部门位置，工资等级</p><p>​ /*</p><p>​ 分析：</p><p>​ \\1. 员工姓名，工资 emp ， 职务名称，职务描述 job 部门名称，部门位置，dept 工资等级 salarygrade</p><p>​ \\2. 条件： emp.job_id = job.id and emp.dept_id = dept.id and emp.salary BETWEEN salarygrade.losalary and salarygrade.hisalary</p><p>​</p><p>​ */</p><p>​ SELECT</p><p>​ t1.<code>ename</code>,</p><p>​ t1.<code>salary</code>,</p><p>​ t2.<code>jname</code>,</p><p>​ t2.<code>description</code>,</p><p>​ t3.<code>dname</code>,</p><p>​ t3.<code>loc</code>,</p><p>​ t4.<code>grade</code></p><p>​ FROM</p><p>​ emp t1,job t2,dept t3,salarygrade t4</p><p>​ WHERE</p><p>​ t1.<code>job_id</code> = t2.<code>id</code></p><p>​ AND t1.<code>dept_id</code> = t3.<code>id</code></p><p>​ AND t1.<code>salary</code> BETWEEN t4.<code>losalary</code> AND t4.<code>hisalary</code>;</p><p>​</p><p>​</p><p>​</p><p>​ -- 5.查询出部门编号、部门名称、部门位置、部门人数</p><p>​</p><p>​ /*</p><p>​ 分析：</p><p>​ 1.部门编号、部门名称、部门位置 dept 表。 部门人数 emp表</p><p>​ 2.使用分组查询。按照emp.dept_id完成分组，查询count(id)</p><p>​ 3.使用子查询将第2步的查询结果和dept表进行关联查询</p><p>​ */</p><p>​ SELECT</p><p>​ t1.<code>id</code>,t1.<code>dname</code>,t1.<code>loc</code> , t2.total</p><p>​ FROM</p><p>​ dept t1,</p><p>​ (SELECT</p><p>​ dept_id,COUNT(id) total</p><p>​ FROM</p><p>​ emp</p><p>​ GROUP BY dept_id) t2</p><p>​ WHERE t1.<code>id</code> = t2.dept_id;</p><p>​</p><p>​</p><p>​ -- 6.查询所有员工的姓名及其直接上级的姓名,没有领导的员工也需要查询</p><p>​</p><p>​ /*</p><p>​ 分析：</p><p>​ 1.姓名 emp， 直接上级的姓名 emp</p><p>​ * emp表的id 和 mgr 是自关联</p><p>​ 2.条件 emp.id = emp.mgr</p><p>​ 3.查询左表的所有数据，和 交集数据</p><p>​ * 使用左外连接查询</p><p>​ */</p><p>​ /*</p><p>​ select</p><p>​ t1.ename,</p><p>​ t1.mgr,</p><p>​ t2.<code>id</code>,</p><p>​ t2.ename</p><p>​ from emp t1, emp t2</p><p>​ where t1.mgr = t2.<code>id</code>;</p><p>​</p><p>​ */</p><p>​</p><p>​ SELECT</p><p>​ t1.ename,</p><p>​ t1.mgr,</p><p>​ t2.<code>id</code>,</p><p>​ t2.<code>ename</code></p><p>​ FROM emp t1</p><p>​ LEFT JOIN emp t2</p><p>​ ON t1.<code>mgr</code> = t2.<code>id</code>;</p><h2 id="事务" tabindex="-1"><a class="header-anchor" href="#事务" aria-hidden="true">#</a> 事务</h2><h3 id="事务的基本介绍" tabindex="-1"><a class="header-anchor" href="#事务的基本介绍" aria-hidden="true">#</a> 事务的基本介绍</h3><h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4><p>如果一个包含多个步骤的业务操作，被事务管理，那么这些操作要么同时成功，要么同时失败。</p><h4 id="操作" tabindex="-1"><a class="header-anchor" href="#操作" aria-hidden="true">#</a> 操作</h4><ol><li><p>开启事务： start transaction;</p></li><li><p>回滚：rollback;</p></li><li><p>提交：commit;</p></li></ol><h4 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h4><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>CREATE TABLE account (
	id INT PRIMARY KEY AUTO_INCREMENT,
	NAME VARCHAR(10),
	balance DOUBLE
);

-- 添加数据
INSERT INTO account (NAME, balance) VALUES (&#39;zhangsan&#39;, 1000), (&#39;lisi&#39;, 1000);

SELECT * FROM account;
UPDATE account SET balance = 1000;

-- 张三给李四转账 500 元
-- 0. 开启事务
START TRANSACTION;
-- 1. 张三账户 -500
UPDATE account SET balance = balance - 500 WHERE NAME = &#39;zhangsan&#39;;
-- 2. 李四账户 +500
-- 出错了...
UPDATE account SET balance = balance + 500 WHERE NAME = &#39;lisi&#39;;
-- 发现执行没有问题，提交事务
COMMIT;
-- 发现出问题了，回滚事务
ROLLBACK;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p><h4 id="mysql数据库中事务默认自动提交" tabindex="-1"><a class="header-anchor" href="#mysql数据库中事务默认自动提交" aria-hidden="true">#</a> MySQL数据库中事务默认自动提交</h4><p>​ * 事务提交的两种方式：</p><p>​ * 自动提交：</p><p>​ * mysql就是自动提交的</p><p>​ * 一条DML(增删改)语句会自动提交一次事务。</p><p>​ * 手动提交：</p><p>​ * Oracle 数据库默认是手动提交事务</p><p>​ * 需要先开启事务，再提交</p><p>​ * 修改事务的默认提交方式：</p><p>​ * 查看事务的默认提交方式：SELECT @@autocommit; -- 1 代表自动提交 0 代表手动提交</p><p>​ * 修改默认提交方式： set @@autocommit = 0;</p><h3 id="事务的四大特征" tabindex="-1"><a class="header-anchor" href="#事务的四大特征" aria-hidden="true">#</a> 事务的四大特征：</h3><ol><li><p>原子性：是不可分割的最小操作单位，要么同时成功，要么同时失败。</p></li><li><p>持久性：当事务提交或回滚后，数据库会持久化的保存数据。</p></li><li><p>隔离性：多个事务之间。相互独立。</p></li><li><p>一致性：事务操作前后，数据总量不变</p></li></ol><h3 id="事务的隔离级别-了解" tabindex="-1"><a class="header-anchor" href="#事务的隔离级别-了解" aria-hidden="true">#</a> 事务的隔离级别（了解）</h3><p>​ * 概念：多个事务之间隔离的，相互独立的。但是如果多个事务操作同一批数据，则会引发一些问题，设置不同的隔离级别就可以解决这些问题。</p><p>​ * 存在问题：</p><p>​ \\1. 脏读：一个事务，读取到另一个事务中没有提交的数据</p><p>​ \\2. 不可重复读(虚读)：在同一个事务中，两次读取到的数据不一样。</p><p>​ \\3. 幻读：一个事务操作(DML)数据表中所有记录，另一个事务添加了一条数据，则第一个事务查询不到自己的修改。</p><p>​ * 隔离级别：</p><p>​ \\1. read uncommitted：读未提交</p><p>​ * 产生的问题：脏读、不可重复读、幻读</p><p>​ \\2. read committed：读已提交 （Oracle）</p><p>​ * 产生的问题：不可重复读、幻读</p><p>​ \\3. repeatable read：可重复读 （MySQL默认）</p><p>​ * 产生的问题：幻读</p><p>​ \\4. serializable：串行化</p><p>​ * 可以解决所有的问题</p><p>​ * 注意：隔离级别从小到大安全性越来越高，但是效率越来越低</p><p>​ * 数据库查询隔离级别：</p><p>​ * select @@tx_isolation;</p><p>​ * 数据库设置隔离级别：</p><p>​ * set global transaction isolation level 级别字符串;</p><p>​ * 演示：</p><p>​ set global transaction isolation level read uncommitted;</p><p>​ start transaction;</p><p>​ -- 转账操作</p><p>​ update account set balance = balance - 500 where id = 1;</p><p>​ update account set balance = balance + 500 where id = 2;</p><h2 id="dcl" tabindex="-1"><a class="header-anchor" href="#dcl" aria-hidden="true">#</a> DCL</h2><h3 id="sql分类" tabindex="-1"><a class="header-anchor" href="#sql分类" aria-hidden="true">#</a> SQL分类</h3><ol><li><p>DDL：操作数据库和表</p></li><li><p>DML：增删改表中数据</p></li><li><p>DQL：查询表中数据</p></li><li><p>DCL：管理用户，授权</p></li></ol><p>* DBA：数据库管理员</p><p>* DCL：管理用户，授权</p><p>​ \\1. 管理用户</p><p>​ \\1. 添加用户：</p><p>​ * 语法：CREATE USER &#39;用户名&#39;@&#39;主机名&#39; IDENTIFIED BY &#39;密码&#39;;</p><p>​ \\2. 删除用户：</p><p>​ * 语法：DROP USER &#39;用户名&#39;@&#39;主机名&#39;;</p><p>​ \\3. 修改用户密码：</p><p>​</p><p>​ UPDATE USER SET PASSWORD = PASSWORD(&#39;新密码&#39;) WHERE USER = &#39;用户名&#39;;</p><p>​ UPDATE USER SET PASSWORD = PASSWORD(&#39;abc&#39;) WHERE USER = &#39;lisi&#39;;</p><p>​</p><p>​ SET PASSWORD FOR &#39;用户名&#39;@&#39;主机名&#39; = PASSWORD(&#39;新密码&#39;);</p><p>​ SET PASSWORD FOR &#39;root&#39;@&#39;localhost&#39; = PASSWORD(&#39;123&#39;);</p><p>​ * mysql中忘记了root用户的密码？</p><p>​ \\1. cmd -- &gt; net stop mysql 停止mysql服务</p><p>​ * 需要管理员运行该cmd</p><p>​ \\2. 使用无验证方式启动mysql服务： mysqld --skip-grant-tables</p><p>​ \\3. 打开新的cmd窗口,直接输入mysql命令，敲回车。就可以登录成功</p><p>​ \\4. use mysql;</p><p>​ \\5. update user set password = password(&#39;你的新密码&#39;) where user = &#39;root&#39;;</p><p>​ \\6. 关闭两个窗口</p><p>​ \\7. 打开任务管理器，手动结束mysqld.exe 的进程</p><p>​ \\8. 启动mysql服务</p><p>​ \\9. 使用新密码登录。</p><p>​ \\4. 查询用户：</p><p>​ -- 1. 切换到mysql数据库</p><p>​ USE myql;</p><p>​ -- 2. 查询user表</p><p>​ SELECT * FROM USER;</p><p>​</p><p>​ * 通配符： % 表示可以在任意主机使用用户登录数据库</p><p>​ \\2. 权限管理：</p><p>​ \\1. 查询权限：</p><p>​ -- 查询权限</p><p>​ SHOW GRANTS FOR &#39;用户名&#39;@&#39;主机名&#39;;</p><p>​ SHOW GRANTS FOR &#39;lisi&#39;@&#39;%&#39;;</p><p>​ \\2. 授予权限：</p><p>​ -- 授予权限</p><p>​ grant 权限列表 on 数据库名.表名 to &#39;用户名&#39;@&#39;主机名&#39;;</p><p>​ -- 给张三用户授予所有权限，在任意数据库任意表上</p><p>​</p><p>​ GRANT ALL ON <em>.</em> TO &#39;zhangsan&#39;@&#39;localhost&#39;;</p><p>​ \\3. 撤销权限：</p><p>​ -- 撤销权限：</p><p>​ revoke 权限列表 on 数据库名.表名 from &#39;用户名&#39;@&#39;主机名&#39;;</p><p>​ REVOKE UPDATE ON db3.<code>account</code> FROM &#39;lisi&#39;@&#39;%&#39;;</p>`,381),l=[n];function s(t,c){return e(),d("div",null,l)}const o=p(a,[["render",s],["__file","多表_事务.html.vue"]]);export{o as default};
