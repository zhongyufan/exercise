//数组对象
	var myArr = new Array();	数组长度为0	添加数组名
	
	Array对象属性
		length		length属性用于获取数组的长度。
		constructor	
		prototype	
	slice()方法
		数组对象.slice(start,end)						//获取数组中的某段数组元素
		数组对象.unshift(新元素1,新元素2,…,新元素n);	//数组开头添加元素
		数组对象.push(新元素1,新元素2,…,新元素n);	//在数组末尾添加元素
		数组对象.shift();								//删除数组中第一个元素
		数组对象.pop();								//删除数组最后一个元素pop
		数组对象.toString()							//将数组转换为字符串
		数组对象.join("分隔符")						//将数组元素连接成字符串
		数组1.concat(数组2,数组3,…,数组n)			//多个数组合并
		数组对象.sort(函数名)						//数组元素比较排序
		数组对象.reverse();							//数组元素镜像排列、改变原来的数组，而不是创建新的数组