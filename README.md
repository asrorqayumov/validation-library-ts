# Description

This library helps to you validate your form data in typescript.

## Installation

```bash
npm install ts-validation
```

## Usage



```typescript 
import {isValidPassword, isValidEmail, isValidInput} from "ts-valdation";

// your need to select your form element
let form:HTMLFormElement = document.querySelector('.form')

// validate password
let validatePassword:object = isValidPassword(form.password.value,{
minSymbol: 3; // must be number, required
maxSymbol: 10; // must be number, required
mustBeLowercase: false; // boolean , not required
mustBeUppercase: true; // boolean , not required
mustBeNumber: false; // boolean , not required
})

// returns 
{isSuccessful: false,
message: "Password length must be shorter than 3 symbols",}
that kind of object , if there is a error otherwise
validation returns { isSuccessful: true, message: "Validation ended successfully" }; that object

// validate string

let validateName:object = isValidInput(form.name.value, {
mustBeLowercase: false; // boolean , required
mustBeUppercase: true; // boolean , required
})

// validation returns error when the length of string is  is equal to 0

// validate email

let validateEmail:object = isValidEmail(form.email.value, {
mustBeLowercase: false; // boolean , required
mustBeUppercase: true; // boolean , required
})

// validation returns error when  the length of email is equal to 0
// validation returns error when email doesn't include "@"  symbol
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)