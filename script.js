var a =sessionStorage.getItem("theme");

function theme(){
        document.body.style.background = a;
}

document.getElementById('dark').addEventListener('click',() =>{
    a = "#24252A";
    document.documentElement.style.setProperty('--bg-color', '#24252A');
    sessionStorage.setItem("theme", a);
    theme();
})

document.getElementById('light').addEventListener('click',() =>{
    a = "#94a4a8";
    document.documentElement.style.setProperty('--bg-color', a);
    sessionStorage.setItem("theme", a);
    theme();
})

function home(){
    console.log("HEHEHEHEHEHHEHHHE");
}