module.exports = function(data) {
	sortData(data);

	return {
		mean: mean(data),
		median: median(data),
		range: range(data)
	};
}

var mean = function(data) {
	var sum = 0;

	for(var i = 0; i < data.length; i++) {
		sum += data[i];
	}

	return sum / data.length;
}

var median = function(data) {
	if(data.length % 2 == 0) {
		return (data[data.length / 2 - 1] + data[data.length / 2]) / 2;
	}
	else {
		return data[Math.floor(data.length / 2)];
	}
}

var range = function(data) {
	return data[data.length - 1] - data[0];
}

var sortData = function(data) {
	return data.sort(function(a, b) {
		return a - b;
	});
}