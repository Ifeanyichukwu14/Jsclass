function post(){
    let messlen = document.querySelector("#text").value;
    
        let txtlen = messlen.length;
    
        console.log(txtlen);
    
        document.getElementById("count").innerHTML = txtlen;
        document.getElementById("count1").innerHTML = txtlen;
    }
    function limchange(){
    
    let textlim = document.getElementById("charlim").value;
    
    document.getElementById("limit").innerHTML = "/" +textlim;
    
    }
    function fresh(){
    document.getElementById("text").value = ''
    }
    
    function slice(){
    
    let messlen = document.querySelector("#text").value;
    
    let txtlen = messlen.length;
    
    let textlim = document.getElementById("charlim").value;
    
    if(+txtlen > +textlim){
        let slicetxt = messlen.slice(0,+textlim);
     
        console.log(slicetxt);
    
        document.getElementById("text").value = slicetxt;
    }
    }