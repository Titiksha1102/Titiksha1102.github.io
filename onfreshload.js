
document.body.style.backgroundColor="white";
window.addEventListener("resize", myScript);

function myScript(){
    if(window.innerWidth<577){
        document.getElementById('contactme').style.borderRight="none";
    }
    if(window.innerWidth>576){
        console.log(window.innerWidth);
        if (document.body.style.backgroundColor==="white"){
            console.log(document.body.style.backgroundColor);
            document.getElementById('contactme').style.borderRight="black solid 2px";
        } 
        if(document.body.style.backgroundColor==="black") {
            console.log(document.body.style.backgroundColor);
            document.getElementById('contactme').style.borderRight="white solid 2px";
        }
    }
}
