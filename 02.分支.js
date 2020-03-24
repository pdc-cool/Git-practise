// author: pdc

// 你将经历如下步骤：

// 1.开发某个网站。

// 2.为实现某个新的用户需求，创建一个分支。

// 3.在这个分支上开展工作。

// 正在此时，你突然接到一个电话说有个很严重的问题需要紧急修补。 你将按照如下方式来处理：

// 1.切换到你的线上分支（production branch）。

// 2.为这个紧急任务新建一个分支，并在其中修复它。

// 3.在测试通过之后，切换回线上分支，然后合并这个修补分支，最后将改动推送到线上分支

// 4.切换回你最初工作的分支上，继续工作

// 步骤
// 1. 决定要解决你的公司使用的问题追踪系统中的 #53 问题。 想要新建一个分支并同时切换到那个分支上
// $ git branch iss53
// $ git checkout iss53

// 2.iss53 开发了一段,提交到 git 版本记录（index区）
// $ git commit -a -m 'added a new footer [issue 53]'

// 3.遇到线上紧急 bug，切回主分支，创建 hotfix 分支解决 bug，然后合并到 master 主分支 
// $ git checkout master
// $ git checkout -b hotfix
// $ vim index.html
// $ git commit -a -m 'fixed the broken email address'
// $ git checkout master
// $ git merge hotfix