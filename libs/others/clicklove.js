var a_idx = 0;
jQuery(document).ready(function($) {
	$('body').click(function(e) {
		var a = new Array(
			'蒸羊羔',
			'蒸熊掌',
			'蒸鹿尾儿',
			'烧花鸭',
			'烧雏鸡',
			'烧子鹅',
			'卤猪',
			'卤鸭',
			'酱鸡',
			'腊肉',
			'松花',
			'小肚儿',
			'晾肉',
			'香肠儿',
			'什锦酥盘儿',
			'熏鸡白肚儿',
			'清蒸八宝猪',
			'江米酿鸭子',
			'罐儿野鸡',
			'罐儿鹌鹑',
			'卤什件儿',
			'卤子鹅',
			'山鸡',
			'兔脯',
			'菜蟒',
			'银鱼',
			'清蒸哈什蚂',
			'烩鸭丝儿',
			'烩鸭腰儿',
			'烩鸭条儿',
			'清拌腰丝儿',
			'黄心管儿',
			'焖黄鳝',
			'焖白鳝',
			'豆豉鲶鱼',
			'锅烧鲤鱼',
			'清蒸甲鱼',
			'抓炒里脊',
			'抓炒对儿虾',
			'软炸里脊',
			'软炸鸡',
			'什锦套肠儿',
			'麻酥油卷儿',
			'卤煮寒鸦儿',
			'熘鲜菇',
			'熘鱼脯',
			'熘鱼肚儿',
			'醋溜肉片儿',
			'烩三鲜',
			'烩白菇',
			'烩鸽子蛋',
			'炒银鱼儿',
			'烩鳗鱼',
			'清蒸火腿',
			'炒白虾',
			'炝青蛤',
			'炒面鱼',
			'炝竹笋',
			'芙蓉燕菜',
			'炒虾仁儿',
			'烩虾仁儿',
			'炒腰花儿',
			'烩海参',
			'炒蹄筋儿',
			'锅烧海参',
			'锅烧白菜',
			'炸海耳',
			'烧田鸡',
			'桂花翅子',
			'清蒸翅子',
			'炸飞禽',
			'炸汁儿',
			'炸排骨',
			'清蒸江牙柱',
			'糖熘芡仁米',
			'拌鸡丝',
			'拌肚丝',
			'什锦豆腐',
			'什锦丁儿',
			'糟虾',
			'糟蟹',
			'糟鱼',
			'糟熘鱼片',
			'熘蟹肉',
			'炒蟹肉',
			'烩蟹肉',
			'清拌蟹肉',
			'蒸南瓜',
			'酿倭瓜',
			'炒丝瓜',
			'焖冬瓜',
			'焖鸡掌儿',
			'焖鸭掌儿',
			'焖笋',
			'烩茭白',
			'茄干晒驴肉',
			'鸭羹',
			'蟹肉羹',
			'三鲜木须汤',
			'红丸子',
			'白丸子',
			'熘丸子',
			'炸丸子',
			'氽丸子',
			'南煎丸子',
			'木须丸子',
			'烙炸丸子',
			'豆腐丸子',
			'三鲜丸子',
			'四喜丸子',
			'鲜虾丸子',
			'鱼脯丸子',
			'一品丸子',
			'一品肉',
			'红焖肉',
			'白焖肉',
			'樱桃肉',
			'马牙肉',
			'荷叶肉',
			'坛子肉',
			'福禄肉',
			'元宝肉',
			'烀肉',
			'扣肉',
			'松肉',
			'罐肉',
			'烧肉',
			'烤肉',
			'大肉',
			'白肉',
			'酱豆腐肉',
			'红肘子',
			'白肘子',
			'熏肘子',
			'酱肘子',
			'水晶肘子',
			'蜜腊肘子',
			'锅烧肘子',
			'扒肘子',
			'涮羊肉',
			'酱羊肉',
			'烧羊肉',
			'烤羊肉',
			'五香羊肉',
			'爆羊肉',
			'氽三样儿',
			'爆三样儿',
			'烩银丝儿',
			'烩散蛋',
			'熘白杂碎',
			'三鲜鱼翅',
			'栗子鸡',
			'煎氽鲤鱼',
			'酱汁鲫鱼',
			'活钻鲤鱼',
			'板鸭',
			'筒子鸡',
			'烩脐肚',
			'爆肚仁',
			'盐水肘花儿',
			'锅烧猪蹄儿',
			'烧肝尖儿',
			'烧肥肠',
			'浇心',
			'烧肺',
			'烧紫菜儿',
			'烧莲蒂',
			'烧宝盖儿',
			'油炸肺',
			'酱瓜丝儿',
			'山鸡丁儿',
			'拌海蜇',
			'龙须菜',
			'炝冬笋',
			'玉兰片',
			'浇鸳鸯',
			'烧鱼头',
			'烧槟子',
			'烧百合',
			'炸豆腐',
			'炸面筋',
			'糖熘儿',
			'拔丝山药',
			'糖焖莲子',
			'酿山药',
			'杏仁酪',
			'小炒螃蟹',
			'氽大甲',
			'什锦葛仙米',
			'蛤蟆鱼',
			'扒带鱼',
			'海鲫鱼',
			'黄花鱼',
			'扒海参',
			'扒燕窝',
			'扒鸡腿儿',
			'扒鸡块儿',
			'扒肉',
			'扒面筋',
			'扒三样儿',
			'油泼肉',
			'酱泼肉',
			'炒虾黄儿',
			'熘蟹黄儿',
			'炒子蟹',
			'佛手海参',
			'炒芡子米',
			'奶汤',
			'翅子汤',
			'三丝汤',
			'熏斑鸠',
			'卤斑鸠',
			'海白米',
			'烩腰丁儿',
			'火烧茨菰',
			'炸鹿尾儿',
			'焖鱼头',
			'拌皮渣儿',
			'氽肥肠儿',
			'清拌粉皮儿',
			'木须菜',
			'烹丁香',
			'烹大肉',
			'烹白肉',
			'麻辣野鸡',
			'咸肉丝儿',
			'白肉丝儿',
			'荸荠',
			'一品锅',
			'素炝春不老',
			'清焖莲子',
			'酸黄菜',
			'烧萝卜',
			'烩银耳',
			'炒银枝儿',
			'八宝榛子酱',
			'黄鱼锅子',
			' 白菜锅子',
			'什锦锅子',
			'汤圆子锅',
			'菊花锅子',
			'煮饽饽锅子',
			'肉丁辣酱',
			'炒肉丝儿',
			'炒肉片',
			'烩酸菜',
			'烩白菜',
			'烩豌豆',
			'焖扁豆',
			'氽毛豆',
			'腌苤蓝丝儿',
			'别点了',
			'别点了',
			'别点了',
			'已经说完一轮了'
		);
		var $i = $('<span></span>').text(a[a_idx]);
		a_idx = (a_idx + 1) % a.length;
		var x = e.pageX,
			y = e.pageY;
		$i.css({
			'z-index': 999,
			top: y - 20,
			left: x,
			position: 'absolute',
			'font-weight': 'bold',
			color:
				'rgb(' + ~~(255 * Math.random()) + ',' + ~~(255 * Math.random()) + ',' + ~~(255 * Math.random()) + ')'
		});
		$('body').append($i);
		$i.animate(
			{
				top: y - 180,
				opacity: 0
			},
			1500,
			function() {
				$i.remove();
			}
		);
	});
});

// 心心

// !(function(e, t, a) {
// 	function r() {
// 		for (var e = 0; e < n.length; e++)
// 			n[e].alpha <= 0
// 				? (t.body.removeChild(n[e].el), n.splice(e, 1))
// 				: (n[e].y--,
// 					(n[e].scale += 0.004),
// 					(n[e].alpha -= 0.013),
// 					(n[e].el.style.cssText =
// 						'left:' +
// 						n[e].x +
// 						'px;top:' +
// 						n[e].y +
// 						'px;opacity:' +
// 						n[e].alpha +
// 						';transform:scale(' +
// 						n[e].scale +
// 						',' +
// 						n[e].scale +
// 						') rotate(45deg);background:' +
// 						n[e].color +
// 						';z-index:99999'));
// 		requestAnimationFrame(r);
// 	}
// 	var n = [];
// 	(e.requestAnimationFrame =
// 		e.requestAnimationFrame ||
// 		e.webkitRequestAnimationFrame ||
// 		e.mozRequestAnimationFrame ||
// 		e.oRequestAnimationFrame ||
// 		e.msRequestAnimationFrame ||
// 		function(e) {
// 			setTimeout(e, 1e3 / 60);
// 		}),
// 		(function(e) {
// 			var a = t.createElement('style');
// 			a.type = 'text/css';
// 			try {
// 				a.appendChild(t.createTextNode(e));
// 			} catch (t) {
// 				a.styleSheet.cssText = e;
// 			}
// 			t.getElementsByTagName('head')[0].appendChild(a);
// 		})(
// 			".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"
// 		),
// 		(function() {
// 			var a = 'function' == typeof e.onclick && e.onclick;
// 			e.onclick = function(e) {
// 				a && a(),
// 					(function(e) {
// 						var a = t.createElement('div');
// 						(a.className = 'heart'),
// 							n.push({
// 								el: a,
// 								x: e.clientX - 5,
// 								y: e.clientY - 5,
// 								scale: 1,
// 								alpha: 1,
// 								color:
// 									'rgb(' +
// 									~~(255 * Math.random()) +
// 									',' +
// 									~~(255 * Math.random()) +
// 									',' +
// 									~~(255 * Math.random()) +
// 									')'
// 							}),
// 							t.body.appendChild(a);
// 					})(e);
// 			};
// 		})(),
// 		r();
// })(window, document);
