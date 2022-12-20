import Chart from 'chart.js/auto';

export default function graphs () {

	const earningsGraphContainer = document.querySelector('#graph_earnings'),
		  earningsTotal = document.querySelector('#graph_earnings_total'),
		  spendingsGraphContainer = document.querySelector('#graph_spendings'), 
		  spendingsTotal = document.querySelector('#graph_spendings_total');

	const earningsValues = [
		{date: "2022-09-20", value: 0.108},
		{date: "2022-09-21", value: null},
		{date: "2022-09-22", value: 0.802},
		{date: "2022-09-23", value: null},
		{date: "2022-09-24", value: 1.001},
		{date: "2022-09-25", value: 0.603},
		{date: "2022-09-26", value: null},
		{date: "2022-09-27", value: null},
		{date: "2022-09-28", value: 0.209},
		{date: "2022-09-29", value: null},
		{date: "2022-09-30", value: null},
		{date: "2022-10-01", value: 1.210},
		{date: "2022-10-02", value: null},
		{date: "2022-10-03", value: 1.501},
		{date: "2022-10-04", value: 2.050},
	];

	const spendingsValues = [
		{date: "2022-09-20", value: 0.031},
		{date: "2022-09-21", value: null},
		{date: "2022-09-22", value: 0.229},
		{date: "2022-09-23", value: null},
		{date: "2022-09-24", value: 0.286},
		{date: "2022-09-25", value: 0.172},
		{date: "2022-09-26", value: null},
		{date: "2022-09-27", value: null},
		{date: "2022-09-28", value: 0.060},
		{date: "2022-09-29", value: null},
		{date: "2022-09-30", value: null},
		{date: "2022-10-01", value: 0.346},
		{date: "2022-10-02", value: null},
		{date: "2022-10-03", value: 0.429},
		{date: "2022-10-04", value: 0.586},
	];

	function showTotal (container, array) {
		container.textContent = array.reduce((accumulator, current) => {
			return accumulator + current.value;
		}, 0).toFixed(3);
	}

  	function renderGraph(container, array, color="#fff") {
		const scalesOptions = {
			border: {
				display: false
			},
			grid: {
				display:false
			},
			ticks: {
				display:false
			}
		};
		
		new Chart(container, {
			type: 'line',
			data: {
				datasets: [{
					data: array,
					spanGaps: true,
					backgroundColor: color,
					borderColor: color,
					tension: .4,
					label: '',
					borderWidth: 2,
					pointBorderWidth: 1,
				}]
			},
			options: {
				animation: false,
				maintainAspectRatio: false,
				parsing: {
					xAxisKey: 'date',
					yAxisKey: 'value',
				},
				plugins: {
					legend: {
						display: false,
					},
					tooltip: {
						enabled: false,
					},
				},
				scales: {
					x: scalesOptions,
					y: scalesOptions,
				},
			}
		});
  	};

	renderGraph(earningsGraphContainer, earningsValues, "#34D178");
	renderGraph(spendingsGraphContainer, spendingsValues, "#ff0000");
	showTotal(earningsTotal, earningsValues);
	showTotal(spendingsTotal, spendingsValues);
}
