function validateRegistration() {
    var regForm = document.reg;
    var firstname = regForm.fn;
    var lastname = regForm.ln;
    var pass = regForm.pw;
    var confirmPass = regForm.cpw;
    var gender = regForm.gen;
    var technology = regForm.tech;

    if (firstname.value.length < 3) {
        alert('Firstname must be morethan 3 characters');
        return false;
    }
    if (lastname.value.length < 1) {
        alert('Lastname must be atleast 1 character');
        return false;
    }
    if (pass.value.length < 3) {
        alert('Password must be morethan 3 characters');
        return false;
    }
    if (pass.value != confirmPass.value) {
        alert("Password & Confirm Password must be same");
        return false;
    }

    if (gender.value.length < 1) {
        alert('Gender should be selected');
        return false;
    }

    var flag = false;
    for (var i = 0; i < technology.length; i++) {
        if (technology[i].checked) {
            flag = true;
        }
    }
    if (flag == false) {
        return false;
    }
    return true;
}