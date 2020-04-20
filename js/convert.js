// 处理返回的数据
function convert(arr) {
	var newList = []
	arr.forEach(function(item){
		var directors = item.directors.map(function(item){
			return item.name
		})
		var casts = item.casts.map(function(item){
			return item.name
		})
		var time = item.mainland_pubdate.split('-')
		newList.push({
			id: item.id,
			title: item.title, 									// 标题
			img: item.images.large, 							// 图片
			genres: item.genres.join('/'),						// 分类
			average: item.rating.average, 						// 评分
			directors: directors.join('/'),						// 导演
			casts: casts.join('/'), 			    			// 主演
			mainland_pubdate: time[1] + '月' + time[2] + '日', 	// 即将上映
			ticket: item.box    								// 票房
		})
	})
	return newList
}

// 处理北美票房返回的数据
function convertTicket(arr) {
	var newList = []
	arr.forEach(item =>{
		var directors = item.subject.directors.map(item=>{
			return item.name
		})
		var casts = item.subject.casts.map(function(item){
			return item.name
		})
		newList.push({
			id: item.subject.id,
			title: item.subject.title,
			img: item.subject.images.large,
			genres: item.subject.genres.join('/'),
			average: item.subject.rating.average,
			directors: directors.join('/'),
			casts: casts.join('/'),
			ticket: item.box
		})
	})
	return newList
}

