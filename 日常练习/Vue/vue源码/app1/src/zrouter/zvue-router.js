
let Vue;

class ZVueRouter {
    constructor(options) {
        this.$options = options;

        console.log(Vue.util);
        // ! 需要创建响应式的current属性
        Vue.util.defineReactive(this, 'current', '/');
        // this.current = '/';

        // 监控url变化
        window.addEventListener('hashchange', this.onHashchange.bind(this));
        // 监控页面刷新
        window.addEventListener('load', this.onHashchange.bind(this));

        // 创建一个路由映射表
        this.routeMap = {}
        options.routes.forEach(route => this.routeMap[route.path] = route);
    }

    onHashchange() {
        this.current = window.location.hash.slice(1)
    }
}
ZVueRouter.install = function (_Vue) {
    /**
     * 注册router
     */
    // 保存构造函数
    Vue = _Vue;

    // 挂载$router
    Vue.mixin({
        beforeCreate() {
            if (this.$options.router) { // 根实例才执行
                // 将router配置部署到Vue上全局访问 
                Vue.prototype.$router = this.$options.router
            }
        }
    })
    /**
     * 实现全局router-link router-view
     */
    Vue.component('router-link', {
        props: {
            to: {
                type: String,
                required: true
            }
        },
        render() {
            return (
                <a href={'#' + this.to}>{this.$slots.default}</a>
            )
        }
        // render(h) {
        //     return h('a', { attrs: { href: '#' + this.to } }, this.$slots.default)
        // }
    })
    Vue.component('router-view', {
        render(h) {
            const { routeMap, current } = this.$router;
            let component = routeMap[current].component || null;
            return h(component)
        }
    })
}

export default ZVueRouter