"use strict";
let logged;
function sendAnalytincs(data) {
    console.log(data);
    logged = true;
    console.log(logged);
}
sendAnalytincs("The data");
