var sampleId = 0;

var tasks = [

'// TASK #1.\n'+
'//Finish convert function to parse and print year, month, day, hour, minute, seconds and\n'+
'//millis from provided data.\n\n'+

'//Input: date in a string.  Like: 2018-08-13 17.00.05:542;\n'+
'//Expected output from a function in console:\n'+
'//Current time is 17 hours, 00 min, 05 sec & 542 millis. Date: 13/08/2018.\n\n'+

'function convert(input){\n'+
'	var output = "Current time is 17 hours, 00 min, 05 sec & 542 millis. Date: 13/08/2018.";\n\n'+	
'       //your solution should be here\n\n'+
'	return output;\n'+
'}\n\n'+

"console.log(convert('2018-08-13 17.00.05:542'));\n"



];

var tests = [

"var testSample = '2018-08-13 17.00.05:542';\n"+
'var output = "Current time is 17 hours, 00 min, 05 sec & 542 millis. Date: 13/08/2018."\n'+

'if(convert(testSample) == output){\n'+
'	alert("Solution is good");\n'+
'}\n'+
'else{\n'+
'	alert("Solution is bad");\n'+
'}\n'


]

function testSolution(){
	
	var el = document.getElementById('jscontent');
   	
    var oldScript = document.getElementById('scriptContainer');
		
    var newScript;

    if (oldScript) {
      oldScript.parentNode.removeChild(oldScript);
    }
	
	var userSript = el.value;
	    userSript = userSript + tests[sampleId];
		
    newScript = document.createElement('script');
    newScript.id = 'scriptContainer';
    newScript.text = userSript;
    document.body.appendChild(newScript);
}



var former = console.log;
	console.log = function (msg) {
    former(msg);

    var ul = document.getElementById("log");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(msg));
    ul.appendChild(li)

}

function clearLog() {
    document.getElementById("log").innerHTML = "";
    Materialize.toast("Console Cleared", 4000)
}

function reloadPage() {
    location.reload();
}

function loadTask(sampleId) {
	this.sampleId = sampleId; 
    document.getElementById('jscontent').value = tasks[sampleId];
	
}

function saveSolution(){
	var el = document.getElementById('jscontent');
	download(el.value, "solution_" + sampleId, ".txt");
}

function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}



