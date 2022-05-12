let inp1=document.querySelector('#inp1')

let inp2=document.querySelector('#inp2')
let text= document.querySelector('#text')


function Up(){
let inpupper=inp1.value.toUpperCase()
inp1.value=inpupper
console.log(inp1.value);
text.innerHTML=inpupper
}




function Down(){
    let inpupper2=inp2.value.toLowerCase()
    inp2.value=inpupper2
    console.log(inp2.value);
    text.innerHTML=inpupper2
    }



    function buton1(){
        inp1.value=''
        text.innerHTML=''
    }


    function buton2(){
        inp2.value=''
        text.innerHTML=''
        
    }