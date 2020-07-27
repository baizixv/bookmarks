#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 存档当前文件

# git add -A
# git commit -m "update"
# git push

# 生成静态文件
# yarn build

# 进入生成的文件夹
cd docs/.vuepress/dist

#创建.nojekyll 防止Github Pages build错误
touch .nojekyll

git init
git config user.name "bai.zixv"
git config user.email "bai.zixv@foxmail.com"
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

# 把上面的 <USERNAME> 换成你自己的 Github 用户名，<REPO> 换成仓库名，比如我这里就是：
git push -f git@github:baizixv/bookmarks.git master:gh-pages

cd -