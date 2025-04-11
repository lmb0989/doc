### 静态方法

### **1. `Promise.resolve(value)`** 

**功能**：将值包装为已解决的 Promise 对象。
​**​场景​**​：

- 参数为非 Promise 对象时，直接返回状态为 `fulfilled` 的 Promise。
- 参数为 Promise 对象时，直接返回该对象（无额外包装）。
- 参数为 `thenable` 对象（含 `then` 方法的对象）时，将其转换为 Promise 并执行 `then` 方法。

**示例**

```javascript
Promise.resolve('Success').then(val => console.log(val)); // 输出: Success
```

------

### **2. `Promise.reject(reason)`** **9****10****11**

**功能**：返回一个立即拒绝的 Promise 对象。
​**​特点​**​：

- 无论参数类型如何，始终返回状态为 `rejected` 的 Promise。
- 错误原因可以是任意值（推荐使用 `Error` 对象以保留调用栈）。

**示例**：

```javascript
Promise.reject(new Error('Fail')).catch(err => console.error(err)); // 输出: Error: Fail
```

------

### **3. `Promise.all(iterable)`** **12****13****14**

**功能**：并行执行多个 Promise，全部成功时返回结果数组；任一失败则立即拒绝。
​**​核心逻辑​**​：

- 输入为 Promise 数组，非 Promise 值会被自动转换为 `fulfilled` 状态的 Promise。
- 结果顺序与输入顺序一致。

**示例**：

```javascript
const p1 = Promise.resolve(1);
const p2 = new Promise(resolve => setTimeout(resolve, 100, 'two'));
Promise.all([p1, p2]).then(console.log); // 输出: [1, 'two']
```

------

### **4. `Promise.race(iterable)`** **15****16****17**

**功能**：返回第一个完成（无论成功或失败）的 Promise 结果。
​**​适用场景​**​：

- 设置超时机制（如请求超时则返回错误）。
- 竞速处理多个异步任务，仅需最快结果。

**示例**：

```javascript
const slow = new Promise(resolve => setTimeout(resolve, 500, 'slow'));
const fast = new Promise(resolve => setTimeout(resolve, 100, 'fast'));
Promise.race([slow, fast]).then(console.log); // 输出: 'fast'
```

------

### **5. `Promise.allSettled(iterable)`** **5****13**

**功能**：等待所有 Promise 完成（无论成功或失败），返回包含每个结果的数组。
​**​输出结构​**​：

- 每个结果对象包含 `status`（`fulfilled` 或 `rejected`）和对应的 `value` 或 `reason`。

**示例**：

```javascript
const resolved = Promise.resolve(1);
const rejected = Promise.reject('Error');
Promise.allSettled([resolved, rejected])
  .then(results => results.forEach(console.log));
// 输出: {status: 'fulfilled', value: 1}, {status: 'rejected', reason: 'Error'}
```

------

### **6. `Promise.any(iterable)`** **5****13**

**功能**：返回第一个成功的 Promise，若全部失败则抛出聚合错误。
​**​与 `race` 的区别​**​：

- `any` 仅关注首个成功的 Promise，而 `race` 关注首个完成的（可能成功或失败）。

**示例**：

```javascript
const p1 = Promise.reject('Error');
const p2 = new Promise(resolve => setTimeout(resolve, 100, 'Success'));
Promise.any([p1, p2]).then(console.log); // 输出: 'Success'
```

------

### **7. `Promise.try()`（提案阶段）** **6**

**功能**：同步捕获函数中的异常并转换为 Promise 链中的错误。
​**​用途​**​：

- 统一同步/异步代码的错误处理，避免 `try/catch` 与 `.catch()` 混用。

**示例**（假设已支持）：

```javascript
Promise.try(() => JSON.parse(invalidJson))
  .catch(err => console.error('解析失败:', err));
```

------

### **总结对比**

|         方法         |       输入要求       |      成功条件      |      失败条件      |       输出结构       |
| :------------------: | :------------------: | :----------------: | :----------------: | :------------------: |
|    `Promise.all`     |       所有成功       | 任一失败则整体失败 |  返回首个失败原因  |       结果数组       |
| `Promise.allSettled` | 全部完成（无论成败） |         无         |         无         |     状态对象数组     |
|    `Promise.race`    | 首个完成（无论成败） | 首个成功的 Promise | 首个失败的 Promise | 首个完成的结果或错误 |
|    `Promise.any`     |     至少一个成功     | 全部失败则整体失败 |  返回聚合错误数组  | 首个成功值或错误集合 |

------

### **版本说明**

- **ES6 原生支持**：`resolve`、`reject`、`all`、`race`
- **ES2020 新增**：`allSettled`
- **ES2021 新增**：`any`
- **提案阶段**：`try`（尚未标准化）