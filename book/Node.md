# Node

## Pm2 配置 错误自动重启

sockte 除了服务器要开启http 1.1  pm2的负载均衡需要加入一下策略

https://www.nginx.com/blog/websocket-nginx/  如果使用了nginx 需要配置下config。



https://github.com/Unitech/pm2/issues/1510

https://blog.csdn.net/javacodekit/article/details/81415422 Socket.io的集群方案



https://socket.io/docs/using-multiple-nodes/# Socket.io的集群方案

15992500547

## Egg

egg-socket

1. ```javascript
   // 使用egg-socket
   目录结构上一定要按照文档上的
   io/controller/xxx.js
   io/middleware/xxx.js
   ```

2. ```javascript
   // router 配置
   																									⬇️ xxx中的index函数
   io.of('/').route('connection', io.controller.xxx.index);
   			⬆️ 命名空间   ⬆️ 通讯的字段							 ⬆️ controller中的文件名
   io.of('/').route('disconnect', io.controller.notice.disconnect);
   																											⬆️ 系统事件
   ```

3. ```javascript
   // 命名空间 namespace
   这个设置仅作用于io本身，不会影响其他地方
   io默认使用'/'命名空间
   // 房间 room
   在命名空间下
   ```

4. ```javascript
   // vue访问 dev配置代理
   const nodeUrl = 'http://127.0.0.1:7001'
   devServer: {
      disableHostCheck: true,
      port: 8080,
      proxy: {
        '/node': {
          target: nodeUrl,
          ws: true,
          pathRewrite: {
            '^/node': '/node'
          }
        }
      }
   }
   ```

5. ```nginx
   # 上线最优做法推荐使用nginx
   location / {
     proxy_set_header Upgrade $http_upgrade;
     proxy_set_header Connection "upgrade";
     proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
     proxy_set_header Host $host;
     proxy_pass   http://127.0.0.1:7001;
   
     # http://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_bind
     # proxy_bind       $remote_addr transparent;
   }
   # HTTPS怎么办？
   # HTTPS 浏览器会强制使用 wss 所以需要做转发
   server
   {
       listen 443 ssl;
       server_name xxx
       ssl_certificate xxx.pem;
       ssl_certificate_key xxx.key;
       ssl_session_timeout 5m;
       root  /dist;
       location /node/ { # ⚠️ 使用/xxx/ 而不是/xxx
          proxy_read_timeout 60s;
          proxy_set_header Upgrade $http_upgrade;
          proxy_set_header Connection "upgrade";
          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
          proxy_set_header Host $host;
          proxy_http_version 1.1;
       	 # ⚠️ 必须使用 http1.1以上的版本 https://www.nginx.com/blog/websocket-nginx/
          proxy_pass   http://127.0.0.1:7001/; # ⚠️ 使用7001/ 而不是7001
        }
   }
   # socket
   # const socket = io(域名, {
   #   path:'/node/socket.io', 
   # ⚠️ path默认使用/socket.io https://socket.io/docs/v3/client-api/#new-Manager-url-options
   # })
   ```

6. 暂时遇到这么多

egg-mongoose

1. ```javascript
   // 用户密码连接
   url:'mongodb://user:password@127.0.0.1/数据库'
   ```

2. 

