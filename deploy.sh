#!/usr/bin/env sh
# 當發生錯誤時終止腳本運行
set -e

# 打包編譯
npm run build

#  移動到打包資料夾下
cd dist

# 部署到自定義網域
git init
git add -A
git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io
git push -f https://github.com/Yetyaya/PersonalBrand.git main:gh-pages

cd -

#在終端機輸入 sh deploy.sh
