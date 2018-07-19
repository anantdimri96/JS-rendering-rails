// $(function(){ alert("hi") });

function getBoxListTableDiv() {
	return document.getElementById('box-list-div');
}


function populateDataToElement(ele, data) {
	if(ele) {
		ele.innerHTML = data;
		runScriptFromData(ele);
		return true;
	}
	return false;
}

function reloadBoxList(tableData) {
	console.log('tabledata----',tableData);
	if(tableData) {
		var boxListTableDiv = getBoxListTableDiv();
		if(boxListTableDiv) {
			populateDataToElement(boxListTableDiv, tableData);
			// boxListTableDiv.innerHTML = tableData;
		}
	}
}


function runScriptFromData(ele){
    if(ele){
        var scripts = ele.getElementsByTagName("script");
        for (var i = 0; i < scripts.length; ++i) {
            var script = scripts[i];
            eval(script.innerHTML);
        }
    }
    return;
}