Vue.filter('filterTime',function(value) {
	var minute = 1000 * 60
	var hour = minute * 60
	var day = hour * 24 
	var week = day * 7
	var month = day * 30
	
	var time1 = new Date().getTime()
	var time2 = Date.parse(new Date(value))
	
	var time = time1 - time2
	var result = null
	if(time<0){
		alert('')
	} else if(time/month>=1){
		result = '发布于' + parseInt(time/month) + '月前'
	} else if(time/week>=1){
		result = '发布于' + parseInt(time/week) + '周前'
	} else if(time/day>=1){
		result = '发布于' + parseInt(time/day) + '天前'
	} else if(time/hour>=1){
		result = '发布于' + parseInt(time/hour) + '小时前'
	} else if(time/minute>=1){
		result = '发布于' + parseInt(time/minute) + '分钟前'
	} else {
		result = '刚刚发布'
	}
	return result
})

Vue.filter('setImg', function(value){
	return value.replace('w.h', '60.90')
})

Vue.filter('type', function(value) {
	return value.replace(/\,/g, '/')
})