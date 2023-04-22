let links = ["/styles/style.css","/styles/style2.css"]
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