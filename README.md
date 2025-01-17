# 空白模板

```ruby
project/
├── public/                  # 静态资源（不会被打包处理）
│   ├── index.html           # 入口 HTML 文件
│   ├── favicon.ico          # 网站图标
│   └── assets/              # 公共静态资源（图片、字体等）
│
├── src/                     # 源代码目录
│   ├── api/                 # API 请求相关模块
│   │   └── index.ts         # API 请求封装
│   │
│   ├── assets/              # 静态资源（会被打包）
│   │   ├── images/          # 图片文件
│   │   ├── styles/          # 全局样式（如 SCSS、CSS）
│   │   └── fonts/           # 字体文件
│   │
│   ├── components/          # 通用组件
│   │   ├── Button.tsx       # 按钮组件示例
│   │   └── Header.tsx       # 头部组件示例
│   │
│   ├── hooks/               # 自定义 Hooks
│   │   └── useFetch.ts      # 数据请求 Hook 示例
│   │
│   ├── layouts/             # 页面布局
│   │   └── MainLayout.tsx   # 主布局
│   │
│   ├── pages/               # 页面文件
│   │   ├── Home/            # 主页模块
│   │   │   ├── index.tsx    # 页面入口文件
│   │   │   └── Home.module.scss # 局部样式
│   │   └── About/           # 关于页面模块
│   │       ├── index.tsx
│   │       └── About.module.scss
│   │
│   ├── router/              # 路由配置
│   │   └── index.ts         # 路由定义
│   │
│   ├── store/               # 状态管理
│   │   ├── index.ts         # 全局状态入口
│   │   └── userSlice.ts     # 用户状态模块（Redux 示例）
│   │
│   ├── utils/               # 工具函数
│   │   ├── helpers.ts       # 通用工具函数
│   │   └── constants.ts     # 常量
│   │
│   ├── App.tsx              # 应用根组件
│   ├── index.tsx            # 应用入口文件
│   └── vite-env.d.ts        # Vite 环境类型声明文件
│
├── .husky/                  # Husky 钩子配置
│   └── commit-msg           # 提交消息钩子
│
├── .vscode/                 # VSCode 编辑器配置
│   └── settings.json        # 编辑器相关设置
│
├── node_modules/            # 依赖模块（自动生成）
│
├── .editorconfig            # 编辑器格式配置
├── .eslintignore            # ESLint 忽略文件
├── .eslintrc.js             # ESLint 配置
├── .gitignore               # Git 忽略文件
├── .prettierrc.js           # Prettier 配置
├── package.json             # 项目配置文件
├── tsconfig.json            # TypeScript 配置
├── vite.config.ts           # Vite 配置文件
└── README.md                # 项目说明文档
```



## 一、项目依赖

| 技术栈   | 工具/库                                                      | 版本     | 说明                                                         |
| -------- | ------------------------------------------------------------ | -------- | ------------------------------------------------------------ |
| JS框架   | React                                                        | 18+      |                                                              |
| UI库     | Antd                                                         | 5+       |                                                              |
| CLI      | Vite                                                         | -        |                                                              |
| Node.js  | Node                                                         | 20.15.1  | JavaScript 运行环境，版本 20.15.1 提供了最新的稳定特性和性能优化。 |
| 包管理器 | pnpm                                                         | \>=9.0.0 | 快速、节省磁盘空间的 JavaScript 包管理器，支持并行安装。     |
| 类型检查 | TypeScript                                                   | 5+       | antd要求使用5+                                               |
| 样式管理 | Module+Sass                                                  | -        |                                                              |
|          |                                                              |          |                                                              |
| 格式化   | Prettier                                                     | 2+       |                                                              |
| 代码规范 | ESLint                                                       | 8+       |                                                              |
|          | [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) | -        | 关闭所有不必要或可能与 Prettier 冲突的规则                   |
| git规范  | Husky+commitlint                                             | -        |                                                              |
|          |                                                              |          |                                                              |
| 路由管理 | HashRoute                                                    | -        | 基于 URL 哈希的路由管理方式，适用于SPA，无需后端支持。       |
| 状态管理 | <font color='red'>Zustand</font>                             |          | Zustand相比Redux少了很多样板代码                             |
| 日志管理 | Sentry                                                       | -        |                                                              |
| 请求框架 | Axios                                                        | -        |                                                              |



**常用库：**

| 库            | 地址                                  | 说明                           |
| ------------- | ------------------------------------- | ------------------------------ |
| Lodash        | https://lodash.com/                   | 常用的扩展工具包               |
| clsx          | https://github.com/lukeed/clsx#readme | 合并类名。相比classnames更轻量 |
| react-i18next | https://react.i18next.com/            | 国际化                         |
| qs            | https://github.com/ljharb/qs          | 字符串安全解析和序列化         |
| dayjs         | https://day.js.org/                   | 时间处理。相比moment更轻量     |
| ahooks        | https://ahooks.js.org/                | 封装了常用的hook               |
| crypto-js     | https://github.com/brix/crypto-js     | 加密标准库                     |



## 二、创建项目

> 参考：https://vite.dev/guide/

```shell
# pnpm create vite 项目名称 --template 模板名称
pnpm create vite db-app --template react-ts
```



### 2.1. 添加依赖

#### 2.1.1. sass

```shell
pnpm add -D sass-embedded
```



#### 2.1.2. axios

```
pnpm add axios --save
```



#### 2.1.3. antd

```
pnpm add antd --save
```



#### 2.1.4. normalize

```shell
pnpm add normalize.css --save

@import 'normalize.css';
```



## 三、项目规范

> 参考：https://juejin.cn/post/6938687606687432740

为了项目风格能够统一，并且提高编码质量，需要配置项目规范所需的依赖库：Prettier+ESLint+eslint-config-prettier。

### 3.1. 配置prettier

> 参考：https://prettier.io/docs/en/install

1. 安装依赖

   ```shell
   pnpm add --save-dev --save-exact prettier
   ```

2. 配置文件

   项目根目录创建`.prettierrc`配置文件及`.prettierignore`忽略文件。

   ```shell
   touch .prettierrc .prettierignore
   ```

   配置`.prettierrc`：

   ```json
   {
     "printWidth": 120,
     "tabWidth": 2,
     "useTabs": false,
     "semi": true,
     "singleQuote": true,
     "plugins": ["prettier-plugin-organize-imports"]
   }
   ```



#### 3.1.1. prettier-plugin-organize-imports

目的为了兼容格式化导入样式。

```shell
pnpm add --save-dev prettier-plugin-organize-imports
```

### 3.2. 配置ESLint

#### 3.2.1. eslint-config-prettier

> 参考：https://github.com/prettier/eslint-config-prettier

如果使用 ESLint，请安装 eslint-config-prettier以使 ESLint 和 Prettier 能够很好地配合。它关闭所有不必要或可能与 Prettier 冲突的 ESLint 规则。

```shell
pnpm add --save-dev eslint-config-prettier
```

`eslint.config.js`添加：

```js
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
	...,
	eslintConfigPrettier
)
```

注意：以上配置完成后如果未生效，请重启项目。

### 3.3. husky

husky是为了规范git提交使用的，需要配合commitlint使用。

> 参考：https://typicode.github.io/husky/

```shell
# 安装依赖
pnpm add --save-dev husky
# 初始化配置（会自动创建.husky和配置package.json的prepare脚本）
pnpm exec husky init
```

#### 3.3.1. commitlint

> 参考：https://commitlint.js.org/

```shell
# 安装依赖
pnpm add --save-dev @commitlint/{cli,config-conventional}

# 初始化配置
echo "export default { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js

# .husky/commit-msg填充以下内容
npx --no -- commitlint --edit
```



#### 3.3.2. Git提交规范

> 参考angular：https://github.com/angular/angular/blob/main/CONTRIBUTING.md#-commit-message-format

| type     | 说明                                                                |
| -------- | ------------------------------------------------------------------- |
| feat     | 新功能（feature）                                                   |
| fix      | 产生diff并自动修复此问题。适合于一次提交直接修复问题                |
| to       | 产生diff不自动修复此问题。适合于多次提交。最终修复问题提交时使用fix |
| docs     | 文档（documentation）                                               |
| style    | 格式（不影响代码运行的变动）                                        |
| refactor | 重构（即不是新增功能，也不是修改bug的代码变动）                     |
| perf     | 优化相关，比如提升性能、体验                                        |
| test     | 增加测试                                                            |
| chore    | 构建过程或辅助工具的变动                                            |
| revert   | 回滚到上一个版本                                                    |
| merge    | 代码合并                                                            |
| sync     | 同步主线或分支的Bug                                                 |

```shell
# 提交格式：<type>(<scope>): <subject>
# type: 提交类别。必须
# scope: 影响范围。可选
# subject: 描述。必须


# 示例
fix(DAO): 用户查询缺少username属性
```

> VSCode有类似插件：git-commit-plugin



## 四、其他

### 4.1. 生成目录结构

VSCode扩展：project-tree

生成的内容会自动填充到README.md文档的最后。

