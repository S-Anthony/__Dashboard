import * as Plot from "@observablehq/plot";

export default function graphs () {

	const earningsGraph = document.querySelector('#graph_earnings'),
		  earningsTotal = document.querySelector('#graph_earnings_total'),
		  spendingsGraph = document.querySelector('#graph_spendings'), 
		  spendingsTotal = document.querySelector('#graph_spendings_total'),
		  graphHeight = window.getComputedStyle(earningsGraph).height.match(/[\d.]/g).join(''),
		  graphWidth = window.getComputedStyle(earningsGraph).width.match(/[\d.]/g).join('');

	const earningsValues = [
		{date: "09.20.2022", value: 0.108},
		{date: "09.22.2022", value: 0.802},
		{date: "09.24.2022", value: 1.001},
		{date: "09.25.2022", value: 0.603},
		{date: "09.28.2022", value: 0.209},
		{date: "10.01.2022", value: 1.210},
		{date: "10.03.2022", value: 1.501},
		{date: "10.04.2022", value: 2.050}
	];

	const spendingsValues = [
		{date: "09.20.2022", value: 0.031},
		{date: "09.22.2022", value: 0.229},
		{date: "09.24.2022", value: 0.286},
		{date: "09.25.2022", value: 0.172},
		{date: "09.28.2022", value: 0.060},
		{date: "10.01.2022", value: 0.346},
		{date: "10.03.2022", value: 0.429},
		{date: "10.04.2022", value: 0.586}
	];

	function formatArrayDates (array) {
		array.forEach(value => {
			value.date = new Date( value.date ).getTime();
		});
	}

	function filterFirstAndLast (element, index) {
		if (index !== 0 && index !== earningsValues.length-1) {
			return element;
		}
	}

	function showTotal (parent, array) {
		let total = 0;

		array.forEach(item => {
			total+= item.value;
		});
		parent.textContent = total.toFixed(3);
	}

  	function renderGraph(parent, array, color="#fff") {
		formatArrayDates(array);
		const plot = Plot.plot({
			x: {axis: ""},
			y: {axis: ""},
			style: {
				background: "transparent",
				color: color,
				overflow: "visible",

			},
			height: graphHeight,
			width: graphWidth,
			marks: [
				Plot.line(array, {x: "date", y: "value", strokeWidth: 2, curve: "catmull-rom"}),
				Plot.dot(array.filter(filterFirstAndLast), {x: "date", y: "value", r:3, fill: "currentColor"}),
			],
		});
	parent.append(plot);
  }

  renderGraph(earningsGraph, earningsValues, "#34D178");
  showTotal(earningsTotal, earningsValues);
  renderGraph(spendingsGraph, spendingsValues, "#ff0000");
  showTotal(spendingsTotal, spendingsValues);
}
