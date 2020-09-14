var $ = {
    ajax: function (options) {
        var xhr = null, // XMLHttpRequest对象
            url = options.url, // URL地址
            method = options.method || "get", //传输方式，默认get
            async = typeof (options.async) === "undefined" ? true : options.async,
                data = options.data || null,
                params = "",
                callback = options.success,
                error = options.error; // 请求成功时的回调函数
        // 转换 将data的对象字面量的形式转换为字符串形式
        if (data) {
            for (var i in data) {
                params += i + '=' + data[i] + '&';
            }
            params = params.replace(/&$/, ""); //去掉最后的&
        }
        // 根据method 的值改变url
        if (method === "get") {
            url += '?' + params;
        }

        function createXHR() {
            // 判断浏览器是否将XMLHttpRequest作为本地对象实现，针对IE7、firefox、opera等
            if (typeof XMLHttpRequest != "undefined") {
                xhr = new XMLHttpRequest();
            } else if (typeof ActiveXObject != "undefined") {
                // 将所有可能出现的ActiveXObject版本放在一个数组中
                var xhrArr = ['Microsoft.XMLHTTP', 'MSXML2.XMLHTTP.6.0', 'MSXML2.XMLHTTP.5.0', 'MSXML2.XMLHTTP.4.0',
                    'MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP.2.0'
                ]
                // 遍历创建XMLHttpRequest对象
                var len = xhrArr.length;
                for (var i = 0; i < len; i++) {
                    try {
                        // 创建XMLHttpRequest对象
                        xhr = new ActiveXObject(xhrArr[i]);
                        break;
                    } catch (ex) {

                    }
                }
            } else {
                throw new Error('No XHR object availabel.');
            }
        }

        // 创建请求
        xhr.open(method, url, async);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(params);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                    callback && callback(JSON.parse(xhr.responseText))
                } else {
                    error && error();
                }
            }
        };
        xhr.send();
    },
    jsonp: function (options) {
        var url = options.url,
            callback = options.callback;

        if (!url) {
            return;
        }
        // 声明数组用来随机生成函数名
        var a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'i', 'h', 'j'],
            r1 = Math.floor(Math.random() * 10),
            r2 = Math.floor(Math.random() * 10),
            r3 = Math.floor(Math.random() * 10),
            name = 'getJSONP' + a[r1] + a[r2] + a[r3],
            cbname = 'getJSONP.' + name;

        // 判断url地址中是否有？
        url.indexOf('?') === -1 ? url += '?jsonp=' + cbname : url += '&jsonp=' + cbname;

        // 动态创建script标签
        var script = document.createElement('script');

        //定义被脚本执行的callback
        getJSONP[name] = function (data) {
            try {
                callback && callback(data);
            } catch (e) {

            } finally {
                // 最后删除该函数及script标签
                delete getJSONP[name];
                script.parentNode.removeChild(script);
            }
        }
        // 动态添加
        var script = document.createElement("script");
        // 定义script的src
        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    }
}