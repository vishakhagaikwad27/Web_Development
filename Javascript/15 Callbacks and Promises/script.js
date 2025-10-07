console.log("Harry is Hacker")

setTimeout(() =>{
    console.log("I am Inside Settimeout")
}, 1000);

console.log("The End")

const fn = () => {
    console.log("Nothing")
}

const callback = (arg, fn) => {
    console.log(arg)
    fn()
}

const loadscript = (src, callback) => {
    let sc = document.createElement("script");
        sc.src = src;
        sc.onload = callback("Harry", fn);
        document.head.append(sc)
}