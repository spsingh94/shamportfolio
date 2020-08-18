// const fetch = require("node-fetch");

// let credentials;
// var credentialArr = [];
// var user;
// var pass;

// async function getCreds(url = "", data = {}) {
//   const response = await fetch(url, {
//     method: "GET",
//     mode: "cors",
//     cache: "no-cache",
//     credentials: "include",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     redirect: "follow",
//     referrerPolicy: "no-referrer",
//   });
//   return response.json();
// }

// getCreds("http://localhost:8080/api/credential", { answer: 42 }).then(
//   (data) => {
//     console.log(data);
//     credentials = data;
//     initSeperate();
//   }
// );

// function initSeperate() {
//     credentials.forEach((credential) => {
//         credentialArr.push(credential.cred);
//     });
//     user = credentialArr[0];
//     console.log(user);
//     pass = credentialArr[1];
//     console.log(pass);
// };

// module.exports.user = user;
// module.exports.pass = pass;

// async function getCreds() {
//   fetch("/api/credential")
//   .then((response) => response.json())
//   .then((res) => credentials = res)
//   .catch(function (error) {
//     console.log(error);
//   });
//   await getCreds();
// }