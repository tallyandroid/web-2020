let header = document.getElementById("header")
console.log(header)

function toggleVisibility() {
    console.log("Toggle")

    if(header.style.visibility === "hidden") {
        header.style.visibility = "visible" 
        return
    }
    header.style.visibility = "visible"
}