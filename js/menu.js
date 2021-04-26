export class Menu {
    constructor() {

        ////// JDOM  ///////////


        this.allDivMenu = $(".allDivMenu");
        this.openMenu = $(".open-menu");
        this.outMenu = $(".out-menu");
        this.socialItems = $(".social-items");
        this.clickedIcon = $(".clicked");
        this.justifyIcon = $(".justifyIcon")
        this.timesIcon = $(".timesIcon");
        this.movieCat = $(".nav-cat");
        this.windows = $(window.top);
        this.item1 = $("#item1");
        this.item2 = $("#item2");
        this.item3 = $("#item3");
        this.item4 = $("#item4");
        this.item5 = $("#item5");
        this.item6 = $("#item6");

        

        ///////  Calling Function ////////

        this.iconClick();
        this.menuSlideUp();
    }



    ///////  Menu Icon Click ////////
    iconClick() {
        let openMenuLeft = this.openMenu.outerWidth();

        this.allDivMenu.css("left", -openMenuLeft);
        this.clickedIcon.click(() => {
            if (this.allDivMenu.css("left") == "0px") {
                this.allDivMenu.animate({
                    left: -openMenuLeft,
                }, 500, () => {
                    this.justifyIcon.css({
                        display: "block"
                    });
                    this.timesIcon.css({
                        display: "none"
                    });
                    this.itemsDef();
                })
            }
            else {
                this.allDivMenu.animate({
                    left: 0,
                }, 500, () => {
                    this.timesIcon.css({
                        display: "block"
                    });
                    this.justifyIcon.css({
                        display: "none"
                    });
                    this.itemsSlideUp();
                })
            }
        })
    }

    /////  Menu Category Animation  ///////
    itemsSlideUp() {

        this.item1.animate({
            opacity: 1,
            bottom: 0
        }, 600);
        this.item2.animate({
            opacity: 1,
            bottom: 0
        }, 800);
        this.item3.animate({
            opacity: 1,
            bottom: 0
        }, 900);
        this.item4.animate({
            opacity: 1,
            bottom: 0
        }, 950);
        this.item5.animate({
            opacity: 1,
            bottom: 0
        }, 1000);
        this.item6.animate({
            opacity: 1,
            bottom: 0
        }, 1050);

    }


    /////  Menu Category default  ///////

    itemsDef() {
        this.item1.css({
            bottom: -400,
            opacity: 1
        })
        this.item2.css({
            bottom: -400,
            opacity: 1
        })
        this.item3.css({
            bottom: -400,
            opacity: 1
        })
        this.item4.css({
            bottom: -400,
            opacity: 1
        })
        this.item5.css({
            bottom: -400,
            opacity: 1
        })
        this.item6.css({
            bottom: -400,
            opacity: 1
        })
    }



    /////  All Menu Div Animation ///////

    menuSlideUp() {
        $(window).resize(() => {
            if (window.innerHeight != this.allDivMenu.height()) {
                this.openMenu.animate({
                    height: window.innerHeight
                }, 20)
                this.outMenu.animate({
                    height: this.allDivMenu.height()
                }, 30)
            }
        })




    }

}