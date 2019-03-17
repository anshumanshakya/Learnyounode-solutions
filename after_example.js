var after = require("after")
    , next = after(3, logItWorks)
 
next()
next()
next() // it works
 
function logItWorks() {
    console.log("it works!")
}