DOM操作应用
	创建DOM元素
	createElement（标签名）	appendChild 为父级添加子节点
	OLi.innerHTML=oTxt.value;

	父级.appendChild 为父级添加子节点	//1.先把元素从原有的父级上删掉	2.添加到新的父级.
	父级.insertBefore（子节点） 如果没有元素 则需要用if判断 加入appendChild
		
	父级.removeChild	删除元素
		文档碎片
		文档碎片可以调高DOM操作性能
		文档碎片原理
		
		父级（parentNode）
			
		document.createDocumentFragment() 基本上没用了
		
DOM高级应用
	表格应用
	获取：
	rows行 cells
	隔行变色：
	存一个oldcolor 后使用 
	
	添加 、删除 
		
	搜索
		忽略大小写	toLowerCase==toLowerCase
		模糊搜索	search 	//找到并且返回字符串出现位置
		多关键字	split	//依据符号切成数组
		display
			
			
	排序的原理
		把最下的值appendChild拉到最后，循环整个元素组
		
		
	表单应用
		action 提交到哪儿
		
		表单事件
		