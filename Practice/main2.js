var personName = "mujahid" + "sohail";
console.log(personName.toUpperCase());
console.log(personName.toLowerCase());
console.log(personName.replace(/\b\w/g, function (ghr) { return (ghr.toUpperCase()); }));
