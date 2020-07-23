function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}

//getValuesFromForm
function processForm(form){
  var comments = form.comments,
      startTime = form.startTime,
      endTime = form.endTime,
      sheet = SpreadsheetApp.openById("[PUT YOUR SPREADSHEET ID IN HERE]").getActiveSheet();
  sheet.appendRow([startTime,endTime,comments]);
}
