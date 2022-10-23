import { useState } from "react";
export default function DarkMode() {
	const [darkMode, setDarkMode] = useState(false);

	function changeMode(mode) {
		if (mode === "dark") {
			setDarkMode(true);
		}
		if (mode === "light") {
			setDarkMode(false);
		}
	}

	return (
		<div className={`page ${darkMode && "dark-mode"}`}>
			<button className='dark-mode-button' onClick={() => changeMode("dark")}>
				Dark Mode
			</button>
			<button className='light-mode-button' onClick={() => changeMode("light")}>
				Light Mode
			</button>
		</div>
	);
}
