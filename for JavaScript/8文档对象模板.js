//文档对象
	document对象（document对象是window对象中的子对象）
	document对象属性
		document.title				//改变网页标题
		-------------------------------------------------------------
		document.fileCreateDate	//文档创建日期
		document.fileModifiedDate	//文档修改时间（精确到天）
		document.lastModified		//文档修改时间（精确到秒）
		document.fileSize			//文档大小
		-------------------------------------------------------------
		document.URL
		-------------------------------------------------------------
		document.fgColor		//定义文档的前景色	font
		document.bgColor		//定义文档的背景色
		document.linkColor		//定义“未访问”的超链接颜色
		document.alinkColor	//定义“被激活”的超链接颜色
		document.vlinkColor	//定义“访问过”的超链接颜色
	document对象方法
		write()方法：
		document.write("输出的内容")
		writeln()方法
		document.writeln("输出的内容")	//输出的内容放进<pre></pre>标签才能被识别	