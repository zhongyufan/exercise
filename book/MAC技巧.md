### 开启原生读写NTFS功能

```bash
1、插入NTFS盘，找到盘名（NAME列）
diskutil list
2、更新 /etc/fstab文件（需要输入开机密码）
sudo nano /etc/fstab
3、写入内容（\040代替空格）
LABEL=NAME none ntfs rw,auto,nobrowse
LABEL=NAME\040NAME none ntfs rw,auto,nobrowse
4、写入完成（Ctrl + X >>> Y >>> 回车）
5、重启
6、创建桌面快捷方式
sudo ln -s /Volumes/BOOTCAMP ~/Desktop/NAME
6.1、搜索前往
/Volumes/


sudo ln -s /Volumes/dabai ~/Desktop/dabai

```

### Mac快捷键

1. Mac 自带屏幕截图 `Command` + `Shift` + `5`
2. 全屏幕  Cmd+Shift+3
3. 区域 Cmd+Shift+4
4. 快速显示或隐藏程序坞 `Command` + `Option` + `D`
5. 最小化窗口 `Command` + `M`
6. 隐藏当前窗口 `Command` + `H`





Shadowsocks PAC配置

```
=== 通配符支持 => *
*.example.com/ 代表 http://example.com http://233.example.com https://233.example.com https://666.example.com/233.mp4 全部走代理。
同时"*"可省略，.example.com/ 与 *.example.com/ 效果是一样的
 
=== 正则表达式支持
以 \ 开始和结束，\[\w]+:\/\/example.com\
 
=== 例外规则 => @@
@@*.example.com/ 表示"@@"后面的网址规则(*.example.com)不走代理
如：@@www.baidu.com 表示 www.baidu.com 不走代理
 
=== 匹配地址开始和结尾规则 => |
|http://example.com、example.com| 分别表示 以http://example.com开始 和 以example.com结束 的地址
如：|http://233.com ，代表 http://233.com 开头的网址才会走代理，即 https://233.com http://1.233.com 都不会走代理
如：233.com|，代表 233.com 结尾的网站才会走代理，即 http://233.com https://233.com http://1.233.com 都会走带了，而 http://233.com/index.html 不会走代理。
 
=== 全匹配规则 => ||
||example.com 则代表 http://example.com、https://example.com、ftp://example.com 等协议的地址全部走代理
如：||233.com ，即 http://233.com、https://233.com、ftp://233.com 等地址全都走代理
 
=== 注释规则 => !
!我是注释233
!我也是注释666
```



```bash
#Mac
#查看端口占用情况
lsof -i tcp:8080(端口号的数字)
#杀死占用端口的进程
kill -9  PID(进程号)
#Windows
#查看端口占用情况
netstat -aon|findstr "8080"(端口号)
#杀死占用端口的进程
taskkill /pid 4136(进程号)  -t -f
```



### Git clone 太慢

github.com换成github.com.cnpmjs.org