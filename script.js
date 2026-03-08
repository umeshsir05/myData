fetch("sample.docx")
.then(response => response.arrayBuffer())
.then(arrayBuffer => {

mammoth.convertToHtml({arrayBuffer: arrayBuffer})

.then(result => {

document.getElementById("viewer").innerHTML = result.value;

})

});