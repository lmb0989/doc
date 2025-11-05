### 调试TypeScript项目

TypeScript 需要生成 Source Map 文件，以便 DevTools 能将运行的 JavaScript 代码映射回原始 TypeScript 代码

- **在 `tsconfig.json` 中启用 Source Map：**

  ```json
  {
    "compilerOptions": {
      "sourceMap": true,
    }
  }
  ```

- **通过 `ts-node` 调试（无需编译）：**

  ```bash
  # 立即启动调试，代码自动运行
  node --inspect -r ts-node/register src/index.ts
  # 在首行暂停，等待调试器连接
  node --inspect-brk -r ts-node/register src/index.ts
  # 或者
  NODE_OPTIONS="--inspect" ts-node src/index.ts
  ```

### **调试JavaScript项目**

**直接调试：**

```bash
# 立即启动调试，代码自动运行
node --inspect dist/index.js
# 在首行暂停，等待调试器连接
node --inspect-brk dist/index.js

# 指定端口号
node --inspect=10000 dist/index.js
node --inspect-brk=10000 dist/index.js
```

### **在 Chrome 中连接 DevTools**

1. 打开 Chrome 浏览器，输入地址栏：

   ```
   chrome://inspect
   ```

2. 在`Remote Target`部分找到你的 Node.js 进程，点击 `Inspect`

   - 如果未自动出现，确保端口正确（默认 `9229`），或手动添加连接地址。

3. **设置断点并调试**

   - 在 DevTools 中：
     - 切换到 **Sources** 面板。
     - 通过左侧文件树导航到你的 TypeScript 文件（可能需要展开 `file://` 目录）
     - 点击行号设置断点。
   - 功能支持：
     - 单步执行（Step Over/Into/Out）、查看调用栈。
     - 监视变量、修改表达式（Console）
     - 捕获异常（通过 **Pause on exceptions** 按钮）

### **可选：使用 VSCode 集成（替代方案）**

如果更喜欢在 VSCode 中调试，可配置 `.vscode/launch.json`：

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug TS",
      "skipFiles": ["<node_internals>/**"],
      "program": "${workspaceFolder}/src/index.ts",
      "preLaunchTask": "tsc: build",
      "outFiles": ["${workspaceFolder}/dist/**/*.js"],
      "sourceMaps": true
    }
  ]
}
```

### **常见问题**

- **Source Map 未加载**：检查文件路径是否正确，或尝试在 DevTools 中手动映射（右键 → **Add source map**）。
- **端口冲突**：通过 `--inspect=9222` 指定其他端口。
- **TypeScript 文件未显示**：确保编译后的 `.js` 和 `.js.map` 文件在正确位置。