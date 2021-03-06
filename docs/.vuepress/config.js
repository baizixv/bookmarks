const utils = require('./utils')

module.exports = {
  title: "Baizixv Bookmarks",
  description: "生有涯而知无涯，懂得取舍才是学习之道",
  base: '/bookmarks/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ],
    [
      'script',
      {},
      `  
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?27487eee16f52d12664f13d868c1d22f";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
      `
    ]
  ],
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: 'API网站',
        link: '/apiWebsite/'
      },
      {
        text: '实用网站',
        link: '/website/'
      },
      {
        text: '常用库与插件',
        link: '/librarys/'
      },
      {
        text: '常用工具',
        link: '/tools/'
      },
      {
        text: '教程与书籍',
        link: '/teachbooks/'
      },
      {
        text: '文章收集',
        link: '/article/'
      }, 
      {
        text: '资源网站',
        link: '/resources/'
      },
      {
        text: '友情链接',
        link: '/links/'
      },
      {
        text: '个人相关',
        link: '/personal/'
      },
    ],
    sidebar: utils.inferSiderbars(),
    lastUpdated: '上次更新',
    repo: 'baizixv/bookmarks',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    sidebarDepth: 4
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  },
}