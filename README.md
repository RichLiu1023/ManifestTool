# ManifestTool
HTML5 实现离线缓存，Manifest 文件自动化工具。

首先需要安装`nodejs`

然后在当前目录下安装依赖包：
```
	npm install 
```
安装成功后，在当前目录下查看版本：
```
gulp -v
[10:11:00] CLI version 3.9.0
[10:11:00] Local version 3.9.1
```

把项目放入`public`文件夹内，并执行 命令：

`win` 下执行 `build.bat`

`mac` 下在当前目录下执行 gulp build ，如下
```
[10:08:33] Using gulpfile ~/Documents/GitClonePro/ManifestTool/gulpfile.js
[10:08:34] Starting 'build'...
[10:08:34] Finished 'build' after 6.92 ms
```
成功后会在public目录内生成一个 `app.manifest`文件。

在项目的index.html头部引用此文件，如下：

```
<!DOCTYPE HTML>
<html manifest="app.manifest">
<head>
    <meta charset="utf-8">
    <title>Game</title>
    ……
</head>
</html>
```

完成，直接把 `public` 内所有文件直接拷贝到自己的web服务器上即可。