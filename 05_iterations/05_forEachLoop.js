const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function (value){
//     //console.log(value)
// })

// coding.forEach( (item) =>{
//     //console.log(item)
// })

// function printMe(items){
//     //console.log(items)
// }

// //coding.forEach(printMe)

// coding.forEach( (item, index, array ) =>{
//     //console.log(item, index, array)
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item)=> {
    // console.log(item.languageName)
    // console.log(item.languageFileName);
    console.log(`languageName: ${item.languageName}, languageFileName: ${item.languageFileName}`)
} )

