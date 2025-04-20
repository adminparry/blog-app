# git

> init

初始化仓库

``` bash
git init 
git init newrepo
```

> stash

``` bash
git stash
git checkout b
git stash pop

```
> cherry-pick

``` bash
git cherry-pick --continue
git cherry-pick --abort
git cherry-pick --quit
```

> rebase

``` bash
git rebase --continue
git rebase --abort
git rebase -i commitid
# drop 删除记录
git push origin master -f
```
> reset

``` bash
#undo
git reset --soft HEAD^
git reset --hard head
```
> merge

``` bash
git checkout main
git merge new-feature

```
> ls-remote
``` bash
git ls-remote 
git remote update 
```
> commit
``` bash
git commit -m 'message'
```

> add

添加文件到仓库

``` bash
git add *.c
git add README.md

```
> clone

拷贝一份远程仓库，也就是下载一个项目。

``` bash
git clone <repo> <directory>
```

> status

查看仓库当前的状态，显示有变更的文件。

``` bash
git status -s
```
> diff

比较文件的不同，即暂存区和工作区的差异。

``` bash
git diff [file]
git diff --cached [file]
git diff --staged [file]
git diff [first-branch]...[second-branch]

```

> blame

以列表形式查看指定文件的历史修改记录

``` bash
git blame <file>
```
> log

查看历史提交记录

``` bash
git log --author=Linus --oneline -5
git log --reverse --oneline
git log --oneline --before={3.weeks.ago} --after={2010-04-18} --no-merges
```

> remote

``` bash
#查看
git remote -v
#设置
git remote set-url origin ssh://username@xxx.com/integration
```

> fetch

从远程获取代码库

``` bash
git fetch origin
```

> pull

> checkout

> tag

``` bash
git tag xxxxx
git push origin --tags
```

> push

> mv

> rm

> symbolic-ref 

``` bash
#获取当前分支名称简介
git symbolic-ref --short -q HEAD
```
> .gitignore
``` bash

```
