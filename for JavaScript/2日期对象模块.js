//日期对象
Date：
	var 日期对象名 = new Date();			获取系统时间
	var 日期对象名 = new Date(日期字符串);	"2015-5-3"	"May 3,2015"	"2015/5/3"
	
	Date对象方法（get需要新定义，set则不需要）
		获日期时间的getXxx
			getFullYear()	
			getMonth()		返回0（一月）到11（十二月），+1
			getDate()		
			getHours() 		0~23，同理
			getMinutes()	0~59，同理
			getSeconds()	0~59，同理
//			getUTCDay()	日期对象.getUTCDay()	
		设置日期时间的setXxx
			setFullYear()	日期对象.setFullYear(year,month,day)
			setMonth()		日期对象.setMonth(month,day)
			setDate()		日期对象.setDate(day)
			setHours()		日期对象.setHours(hour,min,sec,millisec)
			setMinutes()	日期对象.setMinutes(min,sec,millisec)
			setSeconds()	日期对象.setSeconds(sec,millisec)
		日期时间转换为字符串的toXxx
			toString()		日期对象.toString()			转换为字符串
//			toUTCString()	日期对象.toUTCString()		转字表世界时间
//			toLocaleString()	日期对象.toLocaleString()	转字表本时格式