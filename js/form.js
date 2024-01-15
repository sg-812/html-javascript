$(document).ready(function () 
{
  $("#userCheck").hide(); //initially hide the error part
  $("#pwdCheck").hide(); //initially hide the error part
  $("#cpwdCheck").hide(); //initially hide the error part

  let user_no_err = true; //indicator for error collection in username field
  let pass_no_err = true; //indicator for error collection in password field
  let cpwd_no_err = true; //indicator for error collection in confirm password field

 
  // username validation
  $("#userName").keyup(function () {
    username_check(); //calling the function for validation check
  });

  function username_check() {
    let user_value = $("#userName").val();
    let reg_user=/^[A-Z]{1}[a-z]{1,4}$/;
    // console.log("User Value: ", user_value);
    if (user_value.length == "") {
      $("#userCheck").show();
      $("#userCheck").html("** Required field");
      
      user_no_err = false; //as there is error so value of indicator is changed
      return false;
    }
    else if(!reg_user.test(user_value)) 
    {
      $("#userCheck").show();
      $("#userCheck").html(" ** Wrong Pattern");
      $("#userCheck").css({'background-color':'yellow','color':'red'})
      user_no_err = false; //as there is error so value of indicator is changed
      return false;
    }   
    else {
      $("#userCheck").hide();
      user_no_err = true; //error removed so again indicator gets it's old value back
      return true;
    }
     // else if (user_value.length < 3 || user_value.length > 10) {
      // $("#userCheck").show();
      // $("#userCheck").html(" ** Minimum length 3 and maximum length 10");
     
      // user_no_err = false; //as there is error so value of indicator is changed
      // return false;
    // } 
  }


  // password validation
  $("#pwd").keyup(function () {
    pwd_check(); //calling the function for validation check
  });

  function pwd_check() {
    let pwd_value = $("#pwd").val();
    // console.log("Password Value: ",pwd_value);
    let validation_pwd = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,15}$/;
    if (pwd_value.length == "") {
      $("#pwdCheck").show();
      $("#pwdCheck").html("** Required field");
      $("#pwdCheck").css("color", "red");
      $("#pwdCheck").focus();
      pass_no_err = false; //as there is error so value of indicator is changed
      return false;
    } 
    else if (!validation_pwd.test(pwd_value)) {
      $("#pwdCheck").show();
      $("#pwdCheck").html(
        "wrong pattern,atleast 1 small case, 1 capital case, 1 special character, 1 number"
      );
      $("#pwdCheck").css("color", "maroon");
      $("#pwdCheck").focus();
      pass_no_err = false;//as there is error so value of indicator is changed
      return false;
    }
    else {
      $("#pwdCheck").hide();
      pass_no_err = true; //error removed so again indicator gets it's old value back
      return true;
    }
  }



  // confirm password validation
  $("#cpwd").keyup(function () {
    cpwd_check(); //calling the function for validation check
  });

  function cpwd_check() {
    let cpwd_value = $("#cpwd").val();
    console.log("Confirm Password Value: ", cpwd_value);

    let pwd=$('#pwd').val();
    console.log(" Password Value: ", pwd);
    
    if(pwd!==cpwd_value)
    {
      $("#cpwdCheck").show();
      $("#cpwdCheck").html("password mismatch");
      $("#cpwdCheck").css("color", "maroon");
      $("#cpwdCheck").focus();
      cpwd_no_err = false; //as there is error so value of indicator is changed
      return false;
    }
    else{
      $("#cpwdCheck").show(); 
      $("#cpwdCheck").html("password matched");
      $("#cpwdCheck").css("color", "blue");
      cpwd_no_err = true; //error removed so again indicator gets it's old value back
      return true;
    }
  }

  $(".submitBtn").click(function () {
    user_no_err = true;
    pass_no_err = true;
    cpwd_no_err = true;
    username_check();
    pwd_check();
    cpwd_check();

    if (user_no_err == true && pass_no_err == true && cpwd_no_err == true) {
      return true;
    } else {
      return false;
    }
  });
});
  // end of form validation













