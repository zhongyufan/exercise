//窗口对象
	window对象属性
	window对象方法
		打开窗口：
			window.open(URL, 窗口名称, 参数);
		关闭当前窗口：
			window.close();
			close();
			this.close();
		关闭子窗口：
			窗口名.close();
		改变窗口大小：
			resizeTo()方法	//一步到位
				window.resizeTo(x, y)
			resizeBy()方法	//增减过程
				window.resizeBy(x, y)
		移动窗口：
			moveTo()方法	//一步到位
				window.moveTo(x,y);
			moveBy()方法	//增减过程
				window.moveBy(x, y);
		窗口历史：
			history对象属性
				//用得比较少
			history对象方法
				go()	进入指定的网页
				back()	返回上一页
				forward()	进入下一页
				//参数为正数，则向前移动；若参数为负数，则向后移动
				//go(-1)	>向后退1次
				//back(2)	>向后前进2次
			定时器：
				setTimeout()和clearTimeout()；	//执行一次
				setInterval()和clearInterval()；	//重复执行