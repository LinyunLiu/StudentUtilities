function initialize(){

    let text1 = document.getElementById("textarea1")
    let text2 = document.getElementById("textarea2")
    text1.value = "Grammarly citation generator is a tool designed to help writers create accurate and properly formatted citations for their academic papers and other writing projects. It automatically generates citations in various citation styles, such as APA, MLA, and Chicago, based on the information provided by the user. With this tool, writers can save time and avoid the tedious task of manually formatting their citations.";
    text2.value = "Scribbr citation generator is an online tool that assists writers in creating accurate and consistent citations for their academic papers and other writing assignments. It supports various citation styles, including APA, MLA, Harvard, and Chicago, and provides users with helpful tips and examples for each style. The tool also allows users to easily organize and manage their references and citations. Overall, Scribbr citation generator simplifies the citation process for writers and helps them avoid common mistakes.";
}

function goToGrammarly(){
    window.open("https://www.grammarly.com/citations")
}
function goToScribbr(){
    window.open("https://www.scribbr.com/citation/generator/")
}