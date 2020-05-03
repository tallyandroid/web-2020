

let isVisible = true
let elements = document.querySelectorAll(".theme, h2")

elements = Array.from(elements)


function toggleVisibility() {
    isVisible = !isVisible

    let visibility = isVisible ? "visible" : "hidden"
    elements.forEach(function(elem, i) {
        elem.style.visibility = visibility
    })
}