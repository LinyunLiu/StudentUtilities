let links = ["style.css"]
let count_links = 0
let links_size = links.length-1
function changeTheme(){
    if (count_links < links_size) {
        count_links++
        let link = document.getElementsByTagName('link')[0]
        link.setAttribute('href', links[count_links]);
    }
    else{
        let link = document.getElementsByTagName('link')[0]
        link.setAttribute('href', links[0]);
        count_links = 0
    }
}

function Calculator(){
    window.open("../calculator/calculator.html");
}
function AITools(){
    window.open("../aitools/aitools.html");
}

function Converter(){
    window.open("../Converter/Converter.html");
}
function TodoList(){
    window.open("../todolist/note.html");
}
function Downloader(){
    window.open("../ytd/index.html");
}
function Citation(){
    window.open("../citation/citation.html");
}