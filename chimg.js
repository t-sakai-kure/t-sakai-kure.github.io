$(function() {
        $("#myImg").mouseenter(function() {
                var random = Math.floor( Math.random()*3 );
                if (random == 0) {
                        this.src = "https://t-sakai-kure.github.io/img/cat.jpg";                        
                } else if (random == 2) {
                        this.src = "https://t-sakai-kure.github.io/img/cat3.jpg";                
                }
            });
        $("#myImg").mouseout(function() {
                this.src = "https://t-sakai-kure.github.io/img/Dec_2020.jpg";
            });
    });
