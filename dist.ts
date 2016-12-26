我们在使用Angular2项目时，直接使用官网提供的基础配置文件，在NodeJS下面就可以生成一个新的ng2项目，但是这样非常不便利，每次都要新建目录，复制配置文件，使用Node命令安装支持库，最后才是写代码。Angular-cli就是用来简化这一操作的，而且官方配置文件不包含打包命令，对于新手来说，对System打包和webpack打包都不熟悉的情况下，使用Angular-cli能够非常方便的生存一样ng2项目，打包ng2项目，集中在编写项目代码上，省略繁琐的配置过程。

1、 安装Angular Cli

npm install -g angular-cli
-g命令表示安装在全局。

2、使用Angular cli初始化ng2项目

ng new my-ng2-app
这样就创建一个名为my-ng2-app的项目

如果在要把现有目录转成ng2项目，只需要运行下面命令：

mkdir ng2-test
cd ng2-test
ng init
3、运行ng项目

ng serve
或者

npm start
两个都可以，默认端口为：4200
http://localhost:4200

4、修改默认端口 -> 修改为（3000）

ng serve -p 3000
5、打包发布

ng build
ng build --prod 打包文件压缩
目录中就会出现dist文件夹，可以看到里面就是打包后的文件，包含一些html、js等文件，上传服务器就可以运行代码了。

6、修改文件

修改目录中的src文件夹，里面就是TypeScript书写的组件，服务，管道，指令等文件。
