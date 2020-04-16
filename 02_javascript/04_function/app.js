
let name = "Christian"
let friendsName = "Sam"

if(name) {
  doLogging()
}

//Code...

if(name && true) {
    doLogging()
}

function doLogging() {
    console.log("This")
    console.log("Then log this.")
    console.log("Then finish by logging this.")
}

function sayHi() {
    console.log("Hello, " + name)
}