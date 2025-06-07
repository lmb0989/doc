

```shell
#!/bin/bash -l

# 显式加载 nvm
export NVM_DIR="/Users/qingker/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# 验证环境
echo "当前 Node 版本: $(node -v)"
echo "nvm 可用版本: $(nvm ls)"
echo "全局包列表: $(npm ls -g --depth 0)"

# 强制使用指定版本
nvm use v16.17.1 --silent

# 执行脚本
export FORCE_COLOR=1
cd /Users/qingker/Workspace/ProjecBuilder/src/Project/Sword2_CN/Client/
echo "开始构建"
npx ts-node Build.ts vivo
echo "构建结束"
```

