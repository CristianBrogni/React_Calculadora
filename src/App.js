import { useState } from "react";
import "./App.css";

function App() {
	const [display, setDisplay] = useState("");
	const [result, setResult] = useState("");

	const ops = ["/", "*", "+", "-", "."];

	function addNumber(num) {
		if (
			(ops.includes(num) && display === "") ||
			(ops.includes(num) && ops.includes(display.slice(-1)))
		) {
			return;
		}
		setDisplay(display + num);

		if (!ops.includes(num)) {
			setResult(eval(display + num).toString());
		}
	}

	function createDigits() {
		const digits = [];

		for (let i = 1; i < 10; i++) {
			digits.push(
				<button key={i} onClick={() => addNumber(i.toString())}>
					{i}
				</button>
			);
		}
		return digits;
	}

	function deleteLast() {
		if (display === "" || result === "") {
			setResult("");
		}
		const num = display.slice(0, -1);

		setDisplay(num);
	}

	function calculate() {
		setDisplay(eval(display).toString());
	}

	return (
		<div className="App">
			<div className="calc-box">
				<div className="display">
					<span className="display-result">{result}</span>
					<br />
					<span className="display-current">{display}</span>
				</div>
				<div className="inputs">
					<div className="inputs-function">
						<button onClick={() => addNumber("/")}>/</button>
						<button onClick={() => addNumber("+")}>+</button>
						<button onClick={() => addNumber("-")}>-</button>
						<button onClick={() => addNumber("*")}>*</button>
						<button onClick={deleteLast}>DEL</button>
					</div>

					<div className="inputs-number">
						{createDigits()}
						<button onClick={() => addNumber(".")}>.</button>
						<button onClick={() => addNumber("0")}>0</button>
						<button onClick={calculate}>=</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
