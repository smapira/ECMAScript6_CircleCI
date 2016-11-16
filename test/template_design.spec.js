let chai = require('chai'),
	path = require('path'),
	Report = require(path.join(__dirname, '../src', 'template_design'));
var expect = chai.expect;

describe('Report', () => {
	describe('#OutPut', () => {
		var report;
		beforeEach(() => {
			report = new Report.HTML();
			expect(report.title).to.equal("月次報告");
		});

		it('returns the html', () => {
			expect(report.output_report()).to.equal("<html><head><title>月次報告</title></head><body>\n<p>順調</p>\n<p>最高</p>\n</body></html>\n");
		});
		
		it('can be changed', () => {
			report = new Report.PlaneText();
			expect(report.output_report()).to.equal("**** 月次報告****\n順調\n最高\n");
		});
	});
});

