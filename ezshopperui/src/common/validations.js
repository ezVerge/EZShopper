const required = value =>
    !value ?
        'This field is required' :
        undefined;

const minLength = min => value =>
    value && value.length < min ?
        `This field must be ${min} characters or more` :
        undefined;

const maxLength = max => value =>
    value && value.length > max ?
        `This field must be ${max} characters or less` :
        undefined;

const minValue = min => value =>
    value && value < min ?
        `This field must be at least ${min}` :
        undefined;

const maxValue = max => value =>
    value && value > max ?
        `This field must be max ${max}` :
        undefined;

const number = value =>
    value && isNaN(Number(value)) ?
        'This field must be a number' :
        undefined;

const alphaNumeric = value =>
    value && /[^a-zA-Z0-9 ]/i.test(value) ?
        'You can only enter alphanumeric characters in this field' :
        undefined;

const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' :
        undefined;

const phoneNumber = value =>
    value && !/^(0|[1-9][0-9]{9})$/i.test(value.replace(/[-()\s]/gi, '')) ?
        'Invalid phone number, must be 10 digits' :
        undefined;

const password = value => // todo: fix by our password policy
    value && !/((?=(.*[a-z]))(?=(.*[A-Z]))(?=(.*\d))(?=(.*[@$!%*?&)(]))){8,}/i.test(value) ?
        'Invalid password format. Your password should be minimum 8 characters long and should include a capital letter, a number and a special character.' :
        undefined;

const shouldMatch = (value, allValues, props, fieldName) => {
    const confirmAgainstFieldName = fieldName.replace('_confirmation', '');
    const confirmAgainstField = allValues[confirmAgainstFieldName];
    return value !== confirmAgainstField ?
        'Confirmation field does not match' :
        undefined;
};

export default {
    required,
    minLength,
    maxLength,
    minValue,
    maxValue,
    number,
    alphaNumeric,
    email,
    phoneNumber,
    password,
    shouldMatch
};
