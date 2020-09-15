## SVN与Git的区别？

SVN是集中式版本控制系统，版本集中放置在中央服务器

Git是分布式版本控制系统，每个用户都是完整版本库

## Linux命令

1. `cd`  改变目录
2. `cd ..` 上级目录
3. `pwd` 显示当前目录
4. `ls` 列出所有当前目录下所有文件
5. `touch` 新建文件
6. `rm` 删除文件
7. `mkdir` 新建目录
8. `rm -r` 删除文件夹
9. `rm -rf /` 递归删除所有文件
10. `mv` 移动文件
11. `reset` 重启终端
12. `clear` 清屏
13. `history` 查看历史命令
14. `help` 帮助
15. `exit` 退出

## Git 常用命令

[Git常用操作](https://www.bootcss.com/p/git-guide/)

```bash
# 查看系统config
git config --system --list
# 查看当前用户（global）配置
git config --global --list
# 设置用户名
git config --global user.name "xxx"
# 设置邮箱
git config --global user.email "xxx@xxx"
```

<img src="/Users/zhong/Desktop/前端开发/ggs/日常练习/笔记/image/gitwork.png" alt="gitwork" style="zoom: 50%;" />

working directory 工作区

index/Satge 暂存区

Repository 仓库区

Remote 远程仓库

```bash
# 初始化
git init
# 克隆项目到本地
git clone [url]
```

**Git文件状态**

* Untracked 未跟踪
* Unmodify 文件入库，未修改
* Modified 文件已修改
* Staged 暂存

```bash
# 查看所有文件状态
git status
# 查看指定文件状态
git status [filename]
# 注释消息内容
git commit -m "msg"
```

**忽略文件**

在主目录创建 .gitignore 文件

1. `#`  注释
2. `*｜?｜[abc]｜{string}` 任意字符｜一个字符｜可选字符｜可选字符串
3. `!` 名称前修饰，表示例外规则

**Git分支**

```bash
# 列出所有分支
git branch
# 新建分支
git branch [branch-name]
# 新建分支并切换
git checkout -b [branch]
# 合并指定分支到当前
git merge [branch]
# 删除分支
git branch -d [branch-name]
# 删除远程分支
git push origin --delete [branch-name]
git branch -dr [remote/branch]
```

文件冲突选择保留谁的代码