# npm常用命令

1. 添加用户：

   ```bash
   npm  adduser
   ```

2. 添加镜像：

   ```bash
   npm  config  set  registry  https://registry.npm.taobao.org
   ```

3. 恢复镜像：

   ```bash
   npm  config  delete  registry
   或
   npm  config  edit（手动删除）
   ```

4. 安装：

   a. 命令：

   ```bash
   npm  -g  install  包名  		#  全局安装
   npm  install  				 #  根据package.json文件安装
   npm  install  包名  			#  本地安装，在npm运行目录下安装
   npm  install  包名@1.x  		#  安装指定版本
   ```

   b. package.json文件：

   ```json
   {
   	"name": "orderlee",
       "dependencies": {
           "ejs": "^0.0.2",			// ^表示第一位版本号不变，后面两位取最新的
           "ejs": "~0.0.2",			// ~表示前两位不变，最后一个取最新的
           "ejs": "*0.0.2"				// *表示全部取最新
       }
   }
   ```

5. 卸载：

   ```bash
   npm  uninstall  包名
   ```

6. 更新：

   ```bash
   npm  -g  update  包名  	#  全局更新
   npm  update  包名  		#  本地更新
   ```

7. 查看已安装的模块：

   ```bash
   npm  ls
   ```

8. 生成符号链接：

   ```bash
   # 1、在本地安装好的模块中，运行（添加本地模块到全局链接）：
   npm  link
   # 2、在要使用的本地目录中，运行（从全局中获取链接）：
   npm  link  模块名
   ```

9. 执行脚本：

   ```bash
   npm  run  	# 在package.json的scripts中定义的脚本命令
   ```

10. 登录：

    ```bash
    npm  login
    ```

11. 发布包：

    ```bash
    npm  init
    npm  publish
    ```

12. 撤销发布：

    ```bash
    npm  -f  unpublish  dollarphpajax@*
    ```