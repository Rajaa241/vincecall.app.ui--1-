import { AUTH_EMAIL_REGUALR_EXPRESSION, AUTH_PASSWORD_REGULAR_EXPRESSION } from "../../com.vincecall.auth/constants/Constants";

export function isValidEmail(email) {
    if (new RegExp(AUTH_EMAIL_REGUALR_EXPRESSION).test(email)) {
        return true;
    }
    return false;
};

export function isValidPassword(password) {
    if (new RegExp(AUTH_PASSWORD_REGULAR_EXPRESSION).test(password)) {
        return true;
    }
    return false;
};

export function isValidOTP(otp) {
    // add validation - OTP should be 6 digits
    if (otp.length !== 6) {
        return false;
    }
    return true;
};

export function comparePasswords(password, confirmPassword) {
    // add validation - Entered password and confirm password should be same.
    if (password !== confirmPassword) {
        return true;
    }
    return false;
}
export function isValidTitle(title) {
    if (title.length < 4) {
        return false;
    }
    return true;
}
export function isValidDuration(duration) {
    if (duration <= 10) { return false; }
    return true;
}
export function isValidWorkingHours(duration) {
    if (duration > 40) { return false; }
    return true;
}
export function isValidWorkedHours(duration) {
    if (duration > 8) { return false; }
    return true;
}
export function isValidDate(value) {
    let date = new Date(value);
    let today = new Date();
    today.setHours(0, 0, 0, 0);
    return date >= today;
}
export function isValidString(firstname) {
    if (new RegExp(/^[a-zA-Z]+(?:[ \t]+[a-zA-Z]+)*$/).test(firstname)) {
        return true;
    }
    return false;
};

export function isValidMobileNo(mobileNo) {
    if (new RegExp(/^(\+\d{1,3}[- ]?)?\d{10}$/).test(mobileNo)) {
        return true;
    }
    return false;
};
export function isValidNumber(input) {
    if (new RegExp(/^[0-9]+$/).test(input)) {
        return true;
    }
    return false;
};
