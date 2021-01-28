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
