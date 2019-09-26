function saveEdits(){
	var editElem = document.getElementById("edit");
	var userVersion = editElem.innerHTML;

	localStorage.userEdits = userVersion;
}