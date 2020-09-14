<template>
    
</template>


<script>
    export default {
        name: "index"
    }
</script>


<style scoped>

</style>


<!--mvvm模型-->
<!--底层逻辑不一样-->
<!--UI层的渐进式框架-->
<!--复用是框架最重要的特性-->

<!--原生js 是手动挡、 jQuery 是自动挡、 Vue 是自动驾驶-->

<!--优势：-->
<!--提高代码复用率-->
<!--降低模块之间耦合度-->
<!--提高开发速度-->
<!--提高代码质量-->

<!--受Angular启发且更简单-->
<!--社区活越高-->
<!--性能高-->
<!--基于组件-->

<!--MV*模型-->
<!--SPA DOM不会被摧毁-->
<!--直接操作DOM -> MVC模式（react） -> MVP模式 -> MVVM模式（Vue、Angular）-->

<!--MVC（都依赖同一个数据）-->
<!--在close的情况下复用-->
<!--Module：用于存放数据-->
<!--View：用于更新DOM-->
<!--Controller：调用Module给View渲染使用-->
<!--就是当数据发生变化的时候 ，控制好C，然后自动的映射到View上，不用人工干预-->

<!--MVP-->
<!--Presenter：增加一条回来的路，当View发生交互的时候还能返回通知Presenter-->

<!--MVVM（其实三个模式都是一个东西，只是哪个更智能罢了）-->
<!--ViewModel：自动化调用的Presenter-->
<!--数据改了就自动更新到View-->


<!--无论是原生js，或者是jQuery，都把HTML的定义放在JS代码中，这种方法违反了JS与HTML相分离的原则，大大降低代码可维护性-->