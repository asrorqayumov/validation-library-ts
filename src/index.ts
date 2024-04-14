type InputPassword = {
  minSymbol: number;
  maxSymbol: number;
  mustBeLowercase?: boolean;
  mustBeUppercase?: boolean;
  mustBeNumber?: boolean;
};
type InputEmail = {
  mustBeLowercase: boolean;
  mustBeUppercase: boolean;
};
type InputBase = {
  mustBeLowercase: boolean;
  mustBeUppercase: boolean;
};

type inputResponse = {
  isSuccessful: boolean;
  message: string;
};

export function isValidPassword(
  inputValue: string,
  inputObj: InputPassword
): inputResponse {
  let valueLength: number = inputValue.trim().length;

  if (valueLength < inputObj.minSymbol) {
    return {
      isSuccessful: false,
      message: `Password length must be longer than ${inputObj.minSymbol} symbols`,
    };
  }

  if (valueLength > inputObj.maxSymbol) {
    return {
      isSuccessful: false,
      message: `Password length must be shorter than ${inputObj.maxSymbol} symbols`,
    };
  }

  if (inputObj.mustBeLowercase) {
    if (inputValue !== inputValue.toLowerCase()) {
      return {
        isSuccessful: false,
        message: `Password must be consist of lowercase symbols `,
      };
    }
  }

  if (inputObj.mustBeUppercase) {
    if (inputValue !== inputValue.toUpperCase()) {
      return {
        isSuccessful: false,
        message: `Password must be consist of uppercase symbols `,
      };
    }
  }

  if (inputObj.mustBeNumber) {
    if (isNaN(Number(inputValue))) {
      return {
        isSuccessful: false,
        message: `Password must be number`,
      };
    }
  }

  return { isSuccessful: true, message: "Validation ended successfully" };
}

export function isValidEmail(
  inputValue: string,
  inputObj: InputEmail
): inputResponse {
  let emailLength: number = inputValue.trim().length;
  if (emailLength == 0) {
    return { isSuccessful: false, message: "Email length can not be 0" };
  }
  if (!inputValue.includes("@")) {
    return { isSuccessful: false, message: "Email must include @ letter" };
  }
  if (inputObj.mustBeLowercase) {
    if (inputValue !== inputValue.toLowerCase()) {
      return {
        isSuccessful: false,
        message: `Email must be consist of lowercase symbols `,
      };
    }
  }
  if (inputObj.mustBeUppercase) {
    if (inputValue !== inputValue.toUpperCase()) {
      return {
        isSuccessful: false,
        message: `Email must be consist of uppercase symbols `,
      };
    }
  }

  return { isSuccessful: true, message: "Validation ended successfully" };
}

export function isValidInput(
  inputValue: string,
  inputObj: InputBase
): inputResponse {
  let inputLength: number = inputValue.trim().length;
  if (inputLength == 0) {
    return {
      isSuccessful: false,
      message: "This field length must be longer than 0",
    };
  }

  if (inputObj.mustBeLowercase) {
    if (inputValue !== inputValue.toLowerCase()) {
      return {
        isSuccessful: false,
        message: `Text must be consist of lowercase symbols `,
      };
    }
  }
  if (inputObj.mustBeUppercase) {
    if (inputValue !== inputValue.toUpperCase()) {
      return {
        isSuccessful: false,
        message: `Text must be consist of uppercase symbols `,
      };
    }
  }

  return { isSuccessful: true, message: "Validation ended successfully" };
}
