import {validateEmail} from "../Contact/Contact";

test("validateEmail should return true when the email is valid", function (){
    const validEmail = "maarten@atisuto.nl"
    const resultEmail = validateEmail(validEmail);
    expect(resultEmail).toBe(true);
})

test("validateEmail should return a feedback message when the email is not valid", function (){
    const validEmail = "atisuto"
    const resultEmail = validateEmail(validEmail);
    expect(resultEmail).toBe('Uw email dient een "@" te bevatten.');
})
