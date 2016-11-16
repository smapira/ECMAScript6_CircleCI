class Report {
	constructor() {
		this.title = "月次報告";
		this.text = ["順調", "最高"];
	}

	output_report() {
		return this.output_start() + this.output_body() + this.output_end();
	}

	output_start() {
	}

	output_body() {
		var result = "";
		for (const line of this.text) {
			result += this.output_line(line);
		}
		return result;
	}

	output_line() {
	}

	output_end() {
	}
}

class HTMLReport extends Report {
	output_start() {
		return "<html><head><title>" + this.title + "</title></head><body>\n";
	}

	output_line(line) {
		return "<p>" + line + "</p>\n";
	}

	output_end() {
		return "</body></html>\n";
	}
}

class PlaneTextReport extends Report {
	output_start() {
		return "**** " + this.title + "****\n";
	}

	output_line(line) {
		return line + "\n";
	}

	output_end() {
		return "";
	}
}

module.exports = {HTMLReport, PlaneTextReport};
