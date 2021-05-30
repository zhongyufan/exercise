```bash
npm i vite vite-plugin-vue2 sass -D
```

```bash
# 自动查找组件
vite-plugin-components
```

修改了port会导致无法访问资源





强缓存

Cache-Control

协商缓存

第一优先级 Etag 唯一标识 / If-None-Match 

Last-Modified 最后修改时间 / If-Modified-Since 对比

HTML使用协商缓存；CSS&JS&图片使用强缓存，文件命名带上 hash 值；

chunkhash 颗粒度到文件夹

contenthash 颗粒度到文件内容