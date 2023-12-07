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
            document.getElementById('aboutme').style.backgroundImage="url('images/blackbg.png')";
            document.getElementsByClassName('education')[0].style.backgroundImage="url('images/blackedu.png')";
            document.body.style.color='white';
            document.getElementById('contactme').style.borderRight="white solid 2px";
            
        } else {
            document.getElementById('btn').style.justifyContent="flex-start";
            document.body.style.backgroundColor="white";
            document.getElementById('aboutme').style.backgroundImage="url('images/whitebg.png')"
            document.getElementsByClassName('education')[0].style.backgroundImage="url('images/whiteedu.png')";
            document.body.style.color='black';
            document.getElementById('contactme').style.borderRight="black solid 2px";
        }
    }

    