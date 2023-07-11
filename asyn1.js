const async = require("async");

function square(a,b){
	return new Promise((reslove) => {
		setTimeout(() => {
			reslove(a + b);
		}, 2000);
	});
}

async function output(a,b){
	const ans = await square(a,b);
	console.log(ans);
}

output(10,20);