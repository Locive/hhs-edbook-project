function saveInsertedImage(){
	var editIMGElem = document.getElementById("insertedImage");
	var userVersion = editIMGElem.innerHTML;

	localStorage.userEdits = userVersion;
}