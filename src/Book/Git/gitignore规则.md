### 匹配规则

- `空格`不匹配任意文件，可作为分隔符，可用反斜杠转义
- `# 开头`的模式标识注释，可以使用反斜杠进行转义
- `! 开头`的模式标识否定，该文件将会再次被包含，**如果排除了该文件的父级目录，则使用 ! 也不会再次被包含**。可以使用反斜杠进行转义
- `/ 结束`的模式只匹配文件夹以及在该文件夹路径下的内容，但是不匹配该文件
- `/ 开始`的模式匹配项目跟目录
- 如果一个模式不包含斜杠，则它匹配相对于当前 .gitignore 文件路径的内容，如果该模式不在 .gitignore 文件中，则相对于项目根目录
- `**`匹配多级目录，可在开始，中间，结束
- `?`通用匹配单个字符
- `[]`通用匹配单个字符列表

### 常用匹配示例

- bin/: 忽略当前路径下的bin文件夹，该文件夹下的所有内容都会被忽略，不忽略 bin 文件
- /bin: 忽略根目录下的bin文件
- /*.c: 忽略 cat.c，不忽略 build/cat.c
- debug/*.obj: 忽略 debug/io.obj，不忽略 debug/common/io.obj 和 tools/debug/io.obj
- **/foo: 忽略/foo, a/foo, a/b/foo等
- a/**/b: 忽略a/b, a/x/b, a/x/y/b等
- !/bin/run.sh: 不忽略 bin 目录下的 run.sh 文件
- *.log: 忽略所有 .log 文件
- config.php: 忽略当前路径的 config.php 文件
- **/fd1/***:说明：忽略根目录下的 /fd1/ 目录的全部内容；



在项目目录下建立".gitignore"文件，此文件有如下规则

```bash
# 匹配示例
# 						    #注释
logs/						# 忽略当前路径下的logs目录，包含logs下的所有子目录和文件
/logs.txt					# 忽略根目录下的logs.txt文件
*.class						# 忽略所有后缀为.class的文件
!/classes/a.class			 # 不忽略classes目录下的a.class文件
tmp/*.txt					# 只忽略tmp目录下的.txt文件
**/foo						# 可以忽略/foo, a/foo, a/b/foo等
```

>各语言忽略文件参考
>
><https://github.com/github/gitignore>
