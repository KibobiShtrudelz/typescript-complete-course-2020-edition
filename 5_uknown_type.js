// -------------------------------------------------------------------------
// unknown type - it's more restrictive than any
var userInput;
var userName;
userInput = 5;
userInput = "Peco";
if (typeof userInput === "string") {
    userName = userInput;
}
// -------------------------------------------------------------------------
// never type
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occured!", 500);
