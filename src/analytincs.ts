let logged;

function sendAnalytincs(data: string) {
  console.log(data);

  logged = true;

  console.log(logged);
}

sendAnalytincs("The data");
