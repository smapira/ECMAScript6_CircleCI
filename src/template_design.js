class Report {
	constructor() {
		this.title = "月次報告";
		this.text = ["順調", "最高"];
	}

	output_report() {
		this.output_start();
		this.output_body(this.text);
		this.output_end();
	}

	output_start() {
	}

	output_body() {
		for (const line of this.text) {
			this.output_line(line)
		}
	}

	output_line(line) {
	}

	output_end() {
	}
}

class HTMLReport extends Report {
	output_start() {
		console.log("<html><head><title>" + this.title + "</title></head><body>");
	}

	output_line(line) {
		console.log("<p>" + line + "</p>");
	}

	output_end() {
		console.log("</body></html>");
	}
}

class PlaneTextReport extends Report {
	output_start() {
		console.log("**** " + this.title + "****");
	}

	output_line(line) {
		console.log(line);
	}

	output_end() {
	}
}

const html_report = new HTMLReport();
html_report.output_report();

const plane_text_report = new PlaneTextReport();
plane_text_report.output_report();
