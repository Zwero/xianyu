<template>
  <div>
    <Header />
    <!-- 组件占位符，相当于router-view -->
    <nuxt />

    <Footer />
>
  </div>
</template>
<script>
import Header from "@/components/header";
import Footer from "@/components/footer";

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style>
/*项目css初始化文件*/
/*清除内外边距  */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* html,
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  div,
  img,
  input,
  span,
  ul,
  li,
  ol,
  dl,
  dt,
  dd,
  p,
  a,
  button {
    padding: 0;
    margin: 0;
  } */
/*让所有斜体 不倾斜*/
em,
i {
  font-style: normal;
}
/*去掉列表前面的小点*/
li {
  list-style: none;
}
/*图片没有边框   去掉图片底侧的空白缝隙*/
img {
  border: 0; /*ie6*/
  vertical-align: middle;
}
/*让button 按钮 变成小手*/
button {
  cursor: pointer;
  /* 在微金所权重不够 给了!important */
  border: none !important;
  outline: none !important;
}
/*取消链接的下划线*/
a {
  text-decoration: none;
  /* 继承颜色 */
  color: inherit;
}
/* a hover 的时候颜色 */
/* a:hover {
  color: #1761e9;
} */

/* input img textarea的边框 外轮廓线 */
input,
img,
textarea {
  border: none;
  outline: none;
}

button,
input {
  font-family: Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB,
    \\5b8b\4f53, sans-serif;
}

/* body {
  -webkit-font-smoothing: antialiased;
  background-color: #fff;
  font: 12px Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB,
    \\5b8b\4f53, sans-serif;
  color: #666;
} */

.hide,
.none {
  display: none;
}
/*清除浮动*/
.clearfix::after {
  visibility: hidden;
  clear: both;
  display: block;
  content: ".";
  height: 0;
}
.clearfix {
  *zoom: 1;
}
/* 左浮动 */
.fl {
  float: left;
}
/* 右浮动 */
.fr {
  float: right;
}
/* 相对定位 */
.pr {
  position: relative;
}
</style>