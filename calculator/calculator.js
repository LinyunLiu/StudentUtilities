function initialize(){

    let text1 = document.getElementById("textarea1")
    let text2 = document.getElementById("textarea2")
    text1.value = "Wolfram Alpha is a computational knowledge engine developed by Wolfram Research. It is a web-based platform that provides answers to factual questions and performs calculations across a wide range of domains including mathematics, science, engineering, finance, health, and many more.\n" +
        "\n" +
        "Unlike a search engine, Wolfram Alpha doesn't just provide links to web pages, but rather it computes answers based on structured data and algorithms. It uses a vast collection of curated data, including statistical data, mathematical equations, and real-time data from various sources to provide instant and accurate answers to your queries.\n" +
        "\n" +
        "The platform is used by individuals, students, educators, researchers, and businesses to solve problems, learn new concepts, and explore new ideas. Wolfram Alpha offers a range of features, including graphs, plots, tables, and animations, to help users visualize their queries and explore data interactively.\n" +
        "\n" +
        "Wolfram Alpha is available as a web-based platform and as mobile applications for iOS and Android devices. It offers both free and paid versions, with the paid version providing additional features such as increased computation time, ad-free experience, and extended access to data."

    text2.value = "Desmos is a powerful and intuitive online graphing calculator that allows users to create and share graphs, tables, and interactive visualizations for a wide range of mathematical concepts. It is a free web-based tool that is accessible from any device with an internet connection.\n" +
        "\n" +
        "Desmos is used by educators, students, researchers, and professionals to visualize and explore mathematical concepts, from basic algebra and geometry to advanced calculus and statistics. The platform offers a wide range of features, including the ability to plot functions, create tables, graph inequalities, plot data sets, and much more.\n" +
        "\n" +
        "One of the most notable features of Desmos is its ease of use and accessibility. Users can create and edit graphs in real-time, with the ability to manipulate equations and see the resulting changes instantly. The platform also offers a wide range of customization options, including the ability to change colors, adjust scales, and add labels and annotations to graphs.\n" +
        "\n" +
        "Desmos also has an active community of users and educators who share their creations and resources on the platform. This includes pre-made graphing activities, interactive simulations, and tutorials that can be used for teaching and learning mathematical concepts."
}

function goToWolfram(){
    window.open("https://www.wolframalpha.com/")
}
function goToDesmos(){
    window.open("https://www.desmos.com/")
}