// 设置原生导航
var titleNView = {
	backgroundColor: '#f7f7f7',
	titleText: '',
	titleColor: '#000000',
	type: 'transparent',
	autoBackButton: true,
	splitLine: {
		color: '#cccccc'
	}
}

mui.plusReady(function () {
	// 预加载电影详情页
	detail = mui.preload({
		url: 'movie_detail.html',
		id: 'movie_detail.html',
		styles:{
			render: 'always',
			popGesture: 'hide',
			titleNView: titleNView
		}
	})
})

mui('.mui-table-view').on('tap', 'mui-media', item => {
	mui.fire(detail, 'get_detail', {
		post_id: item.id,
		cover: item.img,
		average: item.average,
		title: item.title,
		genres: item.genres,
		cast: item.directors
	})
	titleNView.titleText = item.title;
	detail.setStyle({
		titleNView:titleNView
	})
	setTimeout(() =>{
		detail.show('slide-in-right',300)
	},150)
})