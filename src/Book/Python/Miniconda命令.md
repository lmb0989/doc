Miniconda 命令：

1. **创建虚拟环境**：

   ```bash
   bashCopy code
   conda create -n myenv python=3.8
   ```

   这个命令用于创建一个名为 `myenv` 的新虚拟环境，并安装 Python 3.8 版本。

2. **激活虚拟环境**：

   ```bash
   bashCopy code
   conda activate myenv
   ```

   这个命令用于激活名为 `myenv` 的虚拟环境，进入该环境后，所有的 Python 和包命令都将在该环境中执行。

3. **停用虚拟环境**：

   ```bash
   bashCopy code
   conda deactivate
   ```

   这个命令用于停用当前的虚拟环境。

4. **列出所有虚拟环境**：

   ```bash
   bashCopy code
   conda env list
   ```

   这个命令用于列出所有已创建的虚拟环境。

5. **安装包**：

   ```bash
   bashCopy code
   conda install package_name
   ```

   这个命令用于安装指定的 Python 包，可以指定包名，也可以指定版本号。

6. **升级包**：

   ```bash
   bashCopy code
   conda update package_name
   ```

   这个命令用于升级指定的 Python 包到最新版本。

7. **删除包**：

   ```bash
   bashCopy code
   conda remove package_name
   ```

   这个命令用于删除指定的 Python 包。

8. **搜索包**：

   ```bash
   bashCopy code
   conda search search_term
   ```

   这个命令用于搜索符合搜索条件的 Python 包。

9. **列出已安装的包**：

   ```bash
   bashCopy code
   conda list
   ```

   这个命令用于列出当前虚拟环境中已安装的所有包。

10. **导出环境**：

    ```bash
    bashCopy code
    conda env export > environment.yaml
    ```

    这个命令用于导出当前虚拟环境的环境配置到一个 YAML 文件中。

这些是一些常用的 Anaconda 或 Miniconda 命令，它们使你可以轻松地管理 Python 环境和包。你可以使用 `conda --help` 命令来查看所有可用的命令和选项。