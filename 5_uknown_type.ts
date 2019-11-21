// -------------------------------------------------------------------------
// unknown type - it's more restrictive than any

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Peco";

if (typeof userInput === "string") {
  userName = userInput;
}

// -------------------------------------------------------------------------
// never type

function generateError(message: string, code: number): never {
  // this function never returns anything, even undefined!
  throw { message, errorCode: code };
}

generateError("An error occured!", 500);
