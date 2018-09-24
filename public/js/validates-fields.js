$().ready(function() {
  $("#form").validate({
    ignore: ".ignore",
    rules: {
      fullname: {
        required: true,
        minlength: 3
      },
      email: {
        required: true,
        email: true
      },
      gender: {
        required: true
      },
      passoutyear: {
        required: true
      },
      addressLine1: {
        required: true,
        minlength: 5
      },
      city: {
        required: true,
        minlength: 4
      },
      state: {
        required: true,
        minlength: 4
      },
      pincode: {
        required: true,
        digits: true,
        minlength: 6
      },
      password: {
        required: true,
        minlength: 8,
        maxlength: 15,
        regex: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}/
      },
      confirmPassword: {
        required: true,
        equalTo: "#password"
      },
      notification: {
        required: true
      },
      hiddenRecaptcha: {
        required: function() {
          if (grecaptcha.getResponse() == "") {
            return true;
          } else {
            return false;
          }
        }
      }
    },
    messages: {
      fullname: {
        required: "<br/> You have not entered a name!",
        minlength: "<br/> Your name must consist of atleast 3 characters"
      },
      email: {
        required: "<br/> You have not entered an email address!",
        email: "<br/> Please use a valid email address!"
      },
      gender: {
        required: "<br/> Please select your gender."
      },
      passoutyear: {
        required: "<br/> Year of Passout is required."
      },
      password: {
        required: "<br/> Please enter a valid password!",
        regex:
          "<br/>  Password should contain atleast 1 Capital Letter, 1 number and 1 Lowercase and 1 special character, ie, sbp_arun_2016"
      },
      confirmPassword: {
        required: "<br/> Please re-enter the password!",
        equalTo: "<br/>  Passwords are not matching."
      },
      addressLine1: {
        required: "<br/> Please enter your address.",
        minlength: "<br/> Please enter the valid address."
      },
      city: {
        required: "<br/> Please enter your city / village name.",
        minlength: "<br/> Please enter the valid city name."
      },
      state: {
        required: "<br/> Please enter the state name.",
        minlength: "<br/> Please enter the valid state name."
      },
      pincode: {
        required: "<br/> Please enter the pincode of your city/village.",
        minlength: "<br/> Please enter the valid pincode."
      },
      notification: {
        required: "<br/> Please select one of the option."
      }
    }
  });
  $("#form input").bind("keyup blur click", function() {
    // fires on every keyup & blur
    if (
      $("#form")
        .validate()
        .checkForm()
    ) {
      // checks form for validity
      $("#submit")
        .removeClass("button_disabled")
        .prop("disabled", false); // enables button
    } else {
      $("#submit")
        .addClass("button_disabled")
        .prop("disabled", true); // disables button
    }
  });
});
