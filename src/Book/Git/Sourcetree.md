- ### 增加自定义操作

  * **撤销所有变化**

    找一个目录，新建一个bat文件，内容: 

    ```bash
    cd %1 && git checkout . && git clean -df
    ```

    sourceTree中打开编辑 - 选项 - 自定义操作 - 添加

    `菜单标题`：撤销所有变化

    `运行的脚本`：将刚刚新建的bat文件路径填入

    `参数`：$REPO