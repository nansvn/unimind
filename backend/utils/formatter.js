const colorMap = {
	primaryMain: "#00A76F",
	secondaryMain: "#8E33FF",
	infoMain: "#00B8D9",
	infoDarker: "#003768",
	successMain: "#22C55E",
	warningMain: "#FFAB00",
	errorMain: "#FF5630",
	errorDarker: "#7A0916",
};

const now = new Date();

// ----------------------------------------------------------------------
const formatTime = (date) => {
	const result = new Date(date);
	return new Date(result.setHours(result.getHours() - 7));
};

const formatColor = (colorName) => {
	const colorCode = colorMap[colorName];
	if (!colorCode) {
		colorCode = "#fff";
	}
	return colorCode;
};
