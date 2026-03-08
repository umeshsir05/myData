let pages = []
let currentPage = 0

document.getElementById("fileInput").addEventListener("change", function(e){

let file = e.target.files[0]

let reader = new FileReader()

reader.onload = function(event){

mammoth.convertToHtml({arrayBuffer:event.target.result})
.then(function(result){

let text = result.value

pages = text.split("<p>").map(p => "<p>"+p)

currentPage = 0

showPage()

})

}

reader.readAsArrayBuffer(file)

})

function showPage(){

document.getElementById("viewer").innerHTML = pages[currentPage] || ""

document.getElementById("pageNum").textContent = currentPage + 1

}

function nextPage(){

if(currentPage < pages.length-1){

currentPage++

showPage()

}

}

function prevPage(){

if(currentPage > 0){

currentPage--

showPage()

}

}

function toggleDark(){

document.body.classList.toggle("dark")

}

function toggleMenu(){

document.getElementById("menu").classList.toggle("show")

}
