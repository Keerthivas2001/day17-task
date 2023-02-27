var doc=document.createElement("div");
doc.setAttribute("class","container");


var span=document.createElement("span");
span.setAttribute("id","span");

span.innerHTML=10;

doc.append(span);
document.body.append(doc);

let count=10;

setTimeout(()=>{
count=count-1;
span.innerHTML=count;

setTimeout(()=>{
    count=count-1;
    span.innerHTML=count;

    setTimeout(()=>{
        count=count-1;
        span.innerHTML=count;

        setTimeout(()=>{
            count=count-1;
            span.innerHTML=count;

            setTimeout(()=>{
                count=count-1;
                span.innerHTML=count;

                setTimeout(()=>{
                    count=count-1;
                    span.innerHTML=count;

                    setTimeout(()=>{
                        count=count-1;
                        span.innerHTML=count;

                        setTimeout(()=>{
                            count=count-1;
                            span.innerHTML=count;
                            
                            setTimeout(()=>{
                                count=count-1;
                                span.innerHTML=count;
                                
                                setTimeout(()=>{
                                    count=count-1;
                                    span.innerHTML="Happy Independence Day";
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
  },1000);
},1000);
