function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}

//getValuesFromForm
function processForm(form){
  var comments = form.comments,
      startTime = form.startTime,
      endTime = form.endTime,
      sheet = SpreadsheetApp.openById("10JKPLkDROnA59l7axx_ifaTfRW5aF9Zd4EPcHvt0AAw").getActiveSheet();
  sheet.appendRow([startTime,endTime,comments]);
}
