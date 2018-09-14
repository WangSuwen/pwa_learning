 ## PWA

 ### 一、manifest.json
 * `manifest.json`文件修改以后，需要重新向桌面添加`PWA`应用。
 * 修改了 `Cache Storage` 中缓存的文件后，需要重新向桌面添加`PWA`应用。
 # > 这个需要研究一下怎么处理。
 * theme_color: 修改 手机 【运营商区域】的 颜色。
 * display：配置应用展示形式。
   * fullscreen：全屏，会把 【运营商区域】都给遮住（theme_color 不生效）
   * standalone：【运营商区域】正常显示，（theme_color 生效）
   * minimal-ui：没具体试过
   * browser：在指定了 theme_color 的值之后，地址栏依然呈白色。可以在页面 HTML 里设置 name 为 theme-color 的 meta 标签
   ```
    <meta name="theme-color" content="green">
   ```
   > 需要注意的是，这个标签的色值会覆盖 `manifest.json` 里设置的 `theme_color`，如果两个色值不一样的话，会导致应用启动画面和内容页的主题色不一致，因此建议将 `theme_color` 的色值设置与 `theme-color<meta>` 的色值相同

   ![示例](https://gss0.bdstatic.com/9rkZbzqaKgQUohGko9WTAnF6hhy/assets/pwa/projects/1515680651540/meta.jpg)