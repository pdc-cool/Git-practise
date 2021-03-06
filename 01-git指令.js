// git config --list : 检查你的配置
// git config <key>: 检查某一项设置，例如 git config user.name
// git config <key> value: 设置某一项设置,例如 git config --global user.name "pdc"

// git 对象相当于文件的一次次版本， tree 对象相当于项目的一次次版本
/**
 * 获取 git 查询手册
 */
// git help <verb>
// git <verb> --help
// 例如 git help config/git config --help
// 如果不需要全面的手册，只需要可用的选项的快速参考，可以使用 -h 选项获取简明的 'help' 输出
// git add -h

/**
 * 获取 git 仓库
 */
// 1. git init
// 2. git clone https://github.com/libgit2/libgit2

/**
 * 检查当前文件状态
 */
// git status

// 查看暂存区命令
// git ls-files -s

/**
 * git add :可以用它开始跟踪新文件，或者把已跟踪的文件放到暂存区，还能用于合并时把有冲突的文件标记为已解决状态等
 * 可以理解为：精确地将内容添加到下一次提交中
 * 状态简单浏览：git status -s
 */

 /**
  * 忽略文件: .gitignore
  */
 // 例子:
 //  $ cat .gitignore
 //  *.[oa]    // 忽略以 .o 或 .a 结尾的文件
 //  *~         // 告诉 git 忽略所有名字以波浪符 (~) 结尾的文件

 // 例子：
// # 忽略所有的 .a 文件
// *.a

// # 但跟踪所有的 lib.a，即便你在前面忽略了 .a 文件
// !lib.a

// # 只忽略当前目录下的 TODO 文件，而不忽略 subdir/TODO
// /TODO

// # 忽略任何目录下名为 build 的文件夹
// build/

// # 忽略 doc/notes.txt，但不忽略 doc/server/arch.txt
// doc/*.txt

// # 忽略 doc/ 目录及其所有子目录下的 .pdf 文件
// doc/**/*.pdf

/**
 * 查看已暂存和未暂存的修改：git add获取信息过于简陋，可以使用 git diff 查看细节
 * 1.当前做的哪些更新尚未暂存
 * 2.有哪些更新已暂存并准备好下次提交
 * 3.git diff 可以通过文件补丁的格式显示哪些行为发生了变化
 * git diff --staged: (已暂存)比对已暂存文件与最后一次提交的文件差异
 * git diff : (尚未暂存)比对的是工作目录中当前文件和暂存区域快照之间的差异
 */

 /**
  * git restore <file>...: 来丢弃文件
  */

  /**
   * 跳过使用暂存区域：git commit -a -m ''
   * 1.尽管使用暂存区域的方式可以精心准备要提交的细节，但有时候这么做略显繁琐
   * 2.Git 提供了一个跳过使用暂存区域的方式， 只要在提交的时候
   * 3.给 git commit 加上 -a 选项，Git 就会自动把所有已经跟踪过的文件暂存起来一并提交，从而跳过 git add 步骤
   */

   /**
    * 移除文件：要从 Git 中移除某个文件，就必须要从已跟踪文件清单中移除（确切地说，是从暂存区域移除）
    * 常见的两种做法：
    * 1.rm + git commit -am "abc"
    * 2.git rm + git commit -m "abc"
    * 3.git rm: 删除工作区文件 再将文件放入暂存区
    * 4.rm: 只是删除文件，并没有将文件放入暂存区
    */
   // 删除文件：git rm text1.txt
   // 删除文件夹： git rm -r mydir

   /**
    * 移动文件：git mv README.md README（相当于重命名）将工作目录的文件进行重命名，再将修改添加到暂存区
    */

    /**
     * 查看历史提交记录: git log
     * 美观化查看：git log --pretty=oneline / git log --oneline
     * 列出每个提交的 SHA-1 校验和、作者的名字和电子邮件地址、提交时间以及提交说明
     * 比较有用的选项是 -p 或 --patch ，它会显示每次提交所引入的差异（按 补丁 的格式输出）。 你也可以限制显示的日志条目数量，例如使用 -2 选项来只显示最近的两次提交
     * 例如：git log -p -2
     */

     /**
      * 撤销操作:
      * git commit --amend 重新提交
      */

      /**
       * 打标签：tag
       */
      // 查看 tag
      // git tag

      // 创建附注标签
    //   git tag -a v1.2 -m 'my version 1.2'

    // 删除标签
    // Delete tag 'v1.2'

    /**
     * 分支:https://git-scm.com/book/zh/v2/Git-%E5%88%86%E6%94%AF-%E5%88%86%E6%94%AF%E7%AE%80%E4%BB%8B
     */