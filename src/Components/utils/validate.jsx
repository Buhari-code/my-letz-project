export default function validate(values){
    let errors = {};

    if (!values.username.trim()) {
        errors.username = "User Name is required"
    } else if (!/^[a-zA-Z\s]+$/.test(values.username)){
        errors.username = "User Name only has letters"
    }

    if (!values.phnumber.trim()) {
        errors.phnumber = "Phone Number is required"
    } else if (!/^\d{10}$/.test(values.phnumber)){
        errors.phnumber = "Phone number must be exactly 10 digits"
    }

    if (!values.email.trim()) {
        errors.email = "Email is required"
    } else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)){
        errors.email = "Enter a Valid Email"
    }

    if (!values.password.trim()){
        errors.password = "Password is required"
    } else if (values.password.length < 6) {
        errors.password = "Password needs to be 6 characters or more"
    }

    if (!values.password2.trim()){
        errors.password2 = "Password confirmation is required"
    } else if (values.password2 !== values.password) {
        errors.password2 = "Passwords do not match"
    }
    return errors;
}
