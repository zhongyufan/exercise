//Document Object Model（文档对象模型）
	作用：添加一个元素或者删除元素
	DOM常用的节点属性
		parentNode		获取当前节点的父节点
		offsetParent		寻找某一元素的定位
		childNodes		获取当前节点的子节点集合
		firstChild		获取当前节点的第一个子节点
		firstElementChild	(兼容性)
		lastChild		获取当前节点的最后一个子节点
		previousSibling		获取当前节点的前一个兄弟节点
		nextSibling		获取当前节点的后一个兄弟节点
		attributes		元素的属性列表
	获取DOM中指定元素
		getElementById()；		//
		getElementsByName()	//表单数组
	创建节点
		var e = document.createElement("元素名");       	//创建元素节点
		var t = document.createTextNode("元素内容");  	//创建文本节点
		e.appendChild(t);                               			//把元素内容插入元素中去
	插入节点
		obj.appendChild(new);		//obj表示当前节点，new表示新节点。
		obj.insertBefore(new,ref);	//ref指定一个节点，在这个节点前插入新的节点。
	删除节点
		obj.removeChild(oldChild);	//oldChild表示需要当前节点内部的某个子节点
	复制节点
		obj.cloneNode(bool);	//1或true：表示复制节点本身以及复制该节点下的所有子节点；
								//0或false：表示仅仅复制节点本身，不复制该节点下的子节点；
	替换节点
		obj.replaceChild(new,old);
	innerHTML和innerText
		innerHTML包含HTML文本
		innerText则为纯文本
	JavaScript操作CSS样式
		obj.style.属性名;
		//"骆驼峰”型的CSS属性名	“font-size”应该写成“fontSize”

文档碎片
	创建文档碎片:document.createDocunmentFragment() 基本上不用了(了解)
	
		