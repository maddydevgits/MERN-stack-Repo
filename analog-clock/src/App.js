import AnalogClock from 'analog-clock-react';

export default function ReactClock() {
let options = {
	width: "300px",
	border: true,
	borderColor: "#2e2e2e",
	baseColor: "#17a2b8",
	centerColor: "#459cff",
	centerBorderColor: "#ffffff",
	handColors: {
	second: "#d81c7a",
	minute: "#ffffff",
	hour: "#ffffff"
	}
};

return (
	<div>
	<h2>React Clock - Make Skilled</h2>
	<AnalogClock {...options} />
	</div>
)
}
