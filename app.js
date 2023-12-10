// let bodycolor=document.body.style.backgroundColor;
// function changetheme(){
//     bodycolor="black";
    
// }
    // function changetheme(){
    //     if(document.body.style.backgroundColor==="black"){
    //         document.body.style.backgroundColor="white";
    //     }
    //     else{
    //         document.body.style.backgroundColor="black";
    //     }
        
    // }


    function changetheme(){
        if (document.body.style.backgroundColor==='white') {
            document.getElementById('btn').style.justifyContent="flex-end";
            document.body.style.backgroundColor="black";
            document.getElementById('aboutme').style.backgroundColor='black';
            document.getElementsByClassName('education')[0].style.backgroundColor='black';
            document.body.style.color='white';
            document.getElementById('contactme').style.borderRight="white solid 2px";
        } else {
            document.getElementById('btn').style.justifyContent="flex-start";
            document.body.style.backgroundColor="white";
            document.getElementById('aboutme').style.backgroundColor='white';
            document.getElementsByClassName('education')[0].style.backgroundColor='white';
            document.body.style.color='black';
            document.getElementById('contactme').style.borderRight="black solid 2px"; 
        }
    }

    
    function mobnav(){
        
        if(document.getElementsByClassName('mob')[0].classList.contains('mobilenavlink')){
            document.getElementsByClassName('mob')[0].classList.remove("mobilenavlink");
            document.getElementsByClassName('mob')[0].classList.add("mobilenavlinkshow");
        }
        else{
            document.getElementsByClassName('mob')[0].classList.remove("mobilenavlinkshow");
            document.getElementsByClassName('mob')[0].classList.add("mobilenavlink");
        }
        

    }
    
   