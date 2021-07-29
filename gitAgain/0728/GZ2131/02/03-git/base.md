Git 是 分布式 版本控制系统
一切反动派都是纸老虎。

vi xxx.file vi 编辑器打开某个文件
vi xxx.file
i 进入编辑模式
esc 退出编辑模式
:wq 保存并推出 vi 编辑器 :q

配置
git config --global user.name "Nicholas"
git config --global user.email "Nicholas@xx.com"

操作
git init

11111111111111111111111

添加到仓库
git add base.md

git commmit -m '本次提交描述'

添加到仓库完成 有一个版本

查看所有版本
git log

222222222222222

查看仓库状态
git status
333333333333333

撤销
git restore

撤销工作区更改
git restore file

撤销暂存区更改
git restore --staged file


<!-- 生成ssh-key -->
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"


<!-- 版本回退 -->

用 HEAD 表示当前版本
上一个版本就是 HEAD^，上上一个版本就是 HEAD^^, HEAD~100
git reset --hard 12345


git reflog 所有git 仓库 操作记录



关联远程仓库
git remote add origin git@github.com:FindIndex/git-test.git

git branch -M main

推送到远程仓库
git push -u origin main

git push



第一次拿别人的项目所有代码
git clone git@github.com:FindIndex/git-test.git
以后每次更新代码 用 
git pull