
    document.getElementById("btn-prdc").addEventListener("click", function() {
        document.getElementById("product-page").scrollIntoView({
            behavior: "smooth"
        });
    });


    document.getElementById("btn-about").addEventListener("click", function() {
        document.querySelectorAll('.about-card-container')[0].scrollIntoView({
            behavior: "smooth"
        });
        
    });

    document.getElementById("btn.home").addEventListener("click",function(){
        document.getElementById('hero-header').scrollIntoView({
            behavior:"smooth"
        })
    })

 
    document.getElementById("testimonis").addEventListener("click", function() {
        document.getElementById("testimoni").scrollIntoView({
            behavior: "smooth"
        });
    });
    

    
 

