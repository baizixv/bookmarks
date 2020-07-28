export default ({ router }) => {
	/**
	 * 路由切换事件处理
	 */
	router.beforeEach((to, from, next) => {
		console.log('切换路由', to.fullPath, from.fullPath)

		//触发百度的pv统计
		if (typeof _hmt != 'undefined') {
			if (to.path) {
				_hmt.push(['_trackPageview', to.fullPath])
				console.log('上报百度统计', to.fullPath)
			}
		}

		// continue
		next()
	})
}

/**
 * 首次访问
 * 刷新页面
 * 切换到当前文章的其它章节
 * 切换锚点，URL 会变化，所以会触发路由变化事件。
 * 所以，当用户完整得浏览完一篇博客时，可能会触发多次上报。
 * 
 */
