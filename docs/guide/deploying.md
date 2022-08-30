# Deploying

以下指南基于一些共同的假设：
<!-- The following guides are based on some shared assumptions: -->

- 您将文档放在项目的 `docs` 目录中。
- 您正在使用默认的构建输出位置 (`.vitepress/dist`)。
- VitePress 作为本地依赖安装在您的项目中，并且您在 `package.json` 中设置了以下脚本：
- You are placing your docs inside the `docs` directory of your project.
- You are using the default build output location (`.vitepress/dist`).
- VitePress is installed as a local dependency in your project, and you have set up the following scripts in your `package.json`:

  ```json
  {
    "scripts": {
      "docs:build": "vitepress build docs",
      "docs:serve": "vitepress serve docs"
    }
  }
  ```

::: tip

如果要在子目录（`https://example.com/subdir/`）中提供您的站点，则必须将 `'/subdir/'` 设置为 [`base`](../config/ app-configs#base) 在你的 `docs/.vitepress/config.js` 中。

If your site is to be served at a subdirectory (`https://example.com/subdir/`), then you have to set `'/subdir/'` as the [`base`](../config/app-configs#base) in your `docs/.vitepress/config.js`.

**示例：** 如果您使用 Github（或 GitLab）页面并部署到 `user.github.io/repo/`，则将 `base` 设置为 `/repo/`。
**Example:** If you're using Github (or GitLab) Pages and deploying to `user.github.io/repo/`, then set your `base` to `/repo/`.

:::

## Build and Test Locally

- 您可以运行此命令来构建文档：
<!-- - You may run this command to build the docs: -->

  ```sh
  $ yarn docs:build
  ```

- 构建文档后，您可以通过运行在本地测试它们：
- Once you've built the docs, you can test them locally by running:

  ```sh
  $ yarn docs:serve
  ```

`serve` 命令将启动一个本地静态 Web 服务器，该服务器将在 `http://localhost:4173` 提供来自 `.vitepress/dist` 的文件。 这是检查生产版本在您的本地环境中是否正常的简单方法。
  <!-- The `serve` command will boot up a local static web server that will serve the files from `.vitepress/dist` at `http://localhost:4173`. It's an easy way to check if the production build looks fine in your local environment. -->

- 您可以通过传递 `--port` 作为参数来配置服务器的端口。
<!-- - You can configure the port of the server by passing `--port` as an argument. -->

  ```json
  {
    "scripts": {
      "docs:serve": "vitepress serve docs --port 8080"
    }
  }
  ```

  现在 `docs:serve` 方法将在 `http://localhost:8080` 启动服务器。
  <!-- Now the `docs:serve` method will launch the server at `http://localhost:8080`. -->

## Netlify, Vercel, AWS Amplify, Cloudflare Pages, Render

使用仪表板设置新项目并更改这些设置：
<!-- Set up a new project and change these settings using your dashboard: -->

- **Build Command:** `yarn docs:build`
- **Output Directory:** `docs/.vitepress/dist`
- **Node Version:** `14` (or above, by default it usually will be 14 or 16, but on Cloudflare Pages the default is still 12, so you may need to [change that](https://developers.cloudflare.com/pages/platform/build-configuration/))

::: warning
不要为 HTML 代码启用 _Auto Minify_ 之类的选项。 它将从输出中删除对 Vue 有意义的注释。 如果它们被删除，您可能会看到水合不匹配错误。
<!-- Don't enable options like _Auto Minify_ for HTML code. It will remove comments from output which have meaning to Vue. You may see hydration mismatch errors if they get removed. -->
:::

## GitHub Pages

### Using GitHub Actions

1. 在您的主题配置文件 `docs/.vitepress/config.js` 中，将 `base` 属性设置为您的 GitHub 存储库的名称。 如果你打算将你的站点部署到`https://foo.github.io/bar/`，那么你应该将base设置为`'/bar/'`。 它应该始终以斜线开头和结尾。
<!-- 1. In your theme config file, `docs/.vitepress/config.js`, set the `base` property to the name of your GitHub repository. If you plan to deploy your site to `https://foo.github.io/bar/`, then you should set base to `'/bar/'`. It should always start and end with a slash. -->

2. 在项目的 `.github/workflows` 目录中创建一个名为 `deploy.yml` 的文件，内容如下：
<!-- 2. Create a file named `deploy.yml` inside `.github/workflows` directory of your project with the following content: -->

   ```yaml
   name: Deploy

   on:
     push:
       branches:
         - main

   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - uses: actions/setup-node@v3
           with:
             node-version: 16
             cache: yarn
         - run: yarn install --frozen-lockfile

         - name: Build
           run: yarn docs:build

         - name: Deploy
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: docs/.vitepress/dist
   ```

   ::: tip
   请替换对应的分支名称。 例如，如果您要构建的分支是 `master`，则应将上述文件中的 `main` 替换为 `master`。
   <!-- Please replace the corresponding branch name. For example, if the branch you want to build is `master`, then you should replace `main` with `master` in the above file. -->
   :::

3. 现在提交您的代码并将其推送到 `main` 分支。
<!-- 3. Now commit your code and push it to the `main` branch. -->

4. 等待操作完成。
<!-- 4. Wait for actions to complete. -->

5. 在页面菜单项下的存储库设置中，选择 `gh-pages` 分支作为 GitHub 页面源。 现在，您的文档将在您每次推送时自动部署。
<!-- 5. In your repository's Settings under Pages menu item, select `gh-pages` branch as GitHub Pages source. Now your docs will automatically deploy each time you push. -->

## GitLab Pages

### Using GitLab CI

1. 将 `docs/.vitepress/config.js` 中的 `outDir` 设置为 `../public`。

2. 在项目的根目录中创建一个名为 `.gitlab-ci.yml` 的文件，内容如下。 每当您更改内容时，这将构建和部署您的网站：
<!-- 1. Set `outDir` in `docs/.vitepress/config.js` to `../public`.

2. Create a file called `.gitlab-ci.yml` in the root of your project with the content below. This will build and deploy your site whenever you make changes to your content: -->

   ```yaml
   image: node:16
   pages:
     cache:
       paths:
         - node_modules/
     script:
       - yarn install
       - yarn docs:build
     artifacts:
       paths:
         - public
     only:
       - main
   ```

## Azure Static Web Apps

1. Follow the [official documentation](https://docs.microsoft.com/en-us/azure/static-web-apps/build-configuration).

2. Set these values in your configuration file (and remove the ones you don't require, like `api_location`):

   - **`app_location`**: `/`
   - **`output_location`**: `docs/.vitepress/dist`
   - **`app_build_command`**: `yarn docs:build`

## Firebase

1. Create `firebase.json` and `.firebaserc` at the root of your project:

   `firebase.json`:

   ```json
   {
     "hosting": {
       "public": "docs/.vitepress/dist",
       "ignore": []
     }
   }
   ```

   `.firebaserc`:

   ```json
   {
     "projects": {
       "default": "<YOUR_FIREBASE_ID>"
     }
   }
   ```

2. After running `yarn docs:build`, run this command to deploy:

   ```sh
   firebase deploy
   ```

## Surge

1. After running `yarn docs:build`, run this command to deploy:

   ```sh
   npx surge docs/.vitepress/dist
   ```

## Heroku

1. Follow documentation and guide given in [`heroku-buildpack-static`](https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-static).

2. Create a file called `static.json` in the root of your project with the below content:

   ```json
   {
     "root": "docs/.vitepress/dist"
   }
   ```

## Layer0

Refer [Creating and Deploying a VitePress App with Layer0](https://docs.layer0.co/guides/vitepress).
