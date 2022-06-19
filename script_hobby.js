function matchRuleShort(str, rule) {
    var escapeRegex = (str) => str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    return new RegExp("^" + rule.split("*").map(escapeRegex).join(".*") + "$").test(str);
  }

function search(a){
    var b = a.toLowerCase();
    if(matchRuleShort(b, "*game*")){
        window.location.assign("hobbiesGame.html");
    }
    else if(matchRuleShort(b, "*music*")){
        window.location.assign("hobbiesMusic.html");
    }
    else if(matchRuleShort(b, "*anime*")){
        window.location.assign("hobbiesAnime.html");
    }
    else{
        window.location.assign("hobbies.html");
    }
}

function display(a){
    var b = a.value;
    var img = document.getElementById("img");
    var vid = document.getElementById("vid");

    if(b==="nier"){
        img.innerHTML="<img src=\"res/nierp.jpg\"width=\"400px\">";
        vid.innerHTML="<iframe width=\"700\" height=\"394\" src=\"https://www.youtube.com/embed/StXRi5zPPjk\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>";
    }
    else if(b==="fgo"){
        img.innerHTML="<img src=\"res/fgo.jpg\" width=\"400px\">"
        vid.innerHTML="<iframe width=\"700\" height=\"394\" src=\"https://www.youtube.com/embed/fxqsgGmg7-Y\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
    }
    else if(b==="balo"){
        img.innerHTML="<img src=\"res/balo2.jpg\" width=\"400px\">"
        vid.innerHTML="<iframe width=\"700\" height=\"394\" src=\"https://www.youtube.com/embed/O3InzdUOhxs\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
    }
}

function displayM(a){
    var b = a.value;
    var img = document.getElementById("img");
    var vid = document.getElementById("vid");
    console.log(b);

    if(b==="eva"){      
        img.innerHTML="<img src=\"res/eva.jpg\"width=\"400px\">";
        vid.innerHTML="<iframe style=\"border-radius:12px\" src=\"https://open.spotify.com/embed/album/3YXibprimHgDGwv8iPPT6S?utm_source=generator\" width=\"100%\" height=\"380\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"></iframe>";
    }
    else if(b==="normie"){
        img.innerHTML="<img src=\"res/normie.jpg\" width=\"400px\">"
        vid.innerHTML="<iframe style=\"border-radius:12px\" src=\"https://open.spotify.com/embed/album/2W5SVDEBlGqHYqt5sa9PnA?utm_source=generator\" width=\"100%\" height=\"380\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"></iframe>"
    } 
}

function displayA(a){
    var b = a.value;
    var img = document.getElementById("img");
    var vid = document.getElementById("vid");
    console.log(b);

    if(b==="op"){    
        img.innerHTML="<img src=\"res/op2.jpg\"width=\"400px\">";
        vid.innerHTML="<iframe width=\"700\" height=\"394\" src=\"https://www.youtube.com/embed/urx41HBed1s\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>";
    }
    else if(b==="opm"){
        img.innerHTML="<img src=\"res/opm.jpg\" width=\"400px\">"
        vid.innerHTML="<iframe width=\"700\" height=\"394\" src=\"https://www.youtube.com/embed/RzmFKUDOUgw\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
    }
    else if(b==="mp"){
        img.innerHTML="<img src=\"res/mp.jpg\" width=\"400px\">"
        vid.innerHTML="<iframe width=\"700\" height=\"394\" src=\"https://www.youtube.com/embed/mV39saBlBLI\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
    }
}