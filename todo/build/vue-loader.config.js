module.exports = (isDev) => {
  return {
    preserveWhitepace: true, // 空格合并
    extractCSS: !isDev // vue文件的css的提取
    // cssModules:{
    //     localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
    //     camelCase: true
    //     //不常用，cssModules可以自定义区配置
    // },
    // hotReload:false, //根据环境变量生成去配置
  }
}
