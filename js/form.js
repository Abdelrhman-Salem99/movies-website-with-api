export class Form {
    constructor() {

        ///////  JDOM  ////////


        ///////  Input  JDOM  With jQuery  ////////

        this.name = $("#name");
        this.email = $("#email");
        this.phone = $("#phone");
        this.age = $("#age");
        this.spam18 = $("#spam18");
        this.password = $("#password");
        this.rePassword = $("#rePassword");


        ///////  Alert Divs  JDOM  With jQuery  ////////

        this.namealert = $("#namealert");
        this.emailalert = $("#emailalert");
        this.phonealert = $("#phonealert");
        this.agealert = $("#agealert");
        this.passwordalert = $("#passwordalert");
        this.repasswordalert = $("#repasswordalert");


        ///////  Submit Button  JDOM  With jQuery  ////////
        this.submitBtn = $("#submitBtn");


        ///////  array For Local Storage  ////////
        this.localData = [];



        /////// Function For Calling Finctions  ////////
        this.callingFunctions();




    }


    callingFunctions() {
        this.nameCheck();
        this.emailCheck();
        this.phoneCheck();
        this.ageCheck();
        this.passwordCheck();
        this.repasswordCheck();
        this.inputsCheck();

    }

 /////// Form Check Functions   ////////
    nameCheck() {
        this.name.keyup(() => {
            if (this.name.val() == "") {
                this.namealert.css({
                    display: "block",
                })
                this.submit();
            }
            else {
                this.namealert.css({
                    display: "none",
                })
                return false;
            }

        })
        this.submit();
    }

    emailCheck() {
        let emailRegex = /^[a-zA-Z0-9]{2,30}[@][a-zA-Z]{3,10}[.][a-zA-Z]{3,5}$/;
        this.email.keyup(() => {

            if (emailRegex.test(this.email.val())) {
                this.emailalert.css({
                    display: "none",
                })
                this.submit();
            }
            else {
                this.emailalert.css({
                    display: "block",
                })
            }

        })

    }

    phoneCheck() {
        let phoneRegex = /^(01[0-2|5])[0-9]{8}$/;
        this.phone.keyup(() => {

            if (phoneRegex.test(this.phone.val())) {
                this.phonealert.css({
                    display: "none",
                })
                this.submit();
            }
            else {
                this.phonealert.css({
                    display: "block",
                })
            }

        })

    }


    ageCheck() {
        let ageRegex = /^(?:100|1[8-9]|[2-9][0-9])$/;
        this.age.keyup(() => {

            if (ageRegex.test(this.age.val())) {
                this.agealert.css({
                    display: "none",
                })
                this.submit();
            }
            else {
                if (this.age.val() < 18) {
                    this.agealert.css({
                        display: "block",
                    });

                    this.spam18.css({
                        display: "inline-block",
                    });

                }
                else {
                    this.agealert.css({
                        display: "block",
                    });
                    this.spam18.css({
                        display: "none",
                    });
                }
            }

        })

    }


    passwordCheck() {
        let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        this.password.keyup(() => {

            if (passwordRegex.test(this.password.val())) {
                this.passwordalert.css({
                    display: "none",
                })
                this.submit();

            }
            else {
                this.passwordalert.css({
                    display: "block",
                })
            }



        })



    }


    repasswordCheck() {
        this.rePassword.keyup(() => {
            if (this.password.val() == this.rePassword.val()) {
                this.repasswordalert.css({
                    display: "none",
                })
                this.submit();
            }
            else {
                this.repasswordalert.css({
                    display: "block",
                })
            }

        })

    }

    /////// Form Check Functions  End ////////

    
    /////// Button Function   ////////
    submit() {

        this.inputsCheck();
        this.submitBtn.click(() => {
            this.pushToLocal();
            this.clearForm();

        })
    }

    /////// Form Empty & validation Check Function  ////////
    inputsCheck() {

        if (this.namealert.css("display") == "none" && this.emailalert.css("display") == "none" && this.phonealert.css("display") == "none" && this.agealert.css("display") == "none" && this.passwordalert.css("display") == "none" && this.repasswordalert.css("display") == "none") {
            if (this.name.val() != "" && this.email.val() != "" && this.phone.val() != "" && this.age.val() != "" && this.password.val() != "" && this.rePassword.val() != "") {
                this.submitBtn.removeAttr("disabled");
            }
        }

    }

    /////// Local Storage Push Function  ////////
    pushToLocal() {

        let userData = {};

        userData = {
            userName: this.name.val(),
            userEmail: this.email.val(),
            userPhone: this.phone.val(),
            userAge: this.age.val(),
            userPassword: this.password.val(),
            userRepassword: this.rePassword.val(),
        }

        this.localData.push(userData);
        localStorage.setItem("userData", JSON.stringify(this.localData));

    }

    /////// Form Empty Function  ////////
    clearForm() {
        console.log("yes");
        this.name.val("");
        this.email.val("");
        this.phone.val("");
        this.age.val("");
        this.password.val("");
        this.rePassword.val("");
    }


}