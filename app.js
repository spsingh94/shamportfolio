var username;
var password;


function getResults() {
    fetch("/all")
        .then(function(response) {
            if (response.status !== 200) {
                console.log("Looks like there was a problem. Status Code: " + response.status);
                return;
            }
            response.json().then(function(data) {
                seperateData(data);
            });
        })
        .catch(function(err) {
            console.log("Fetch Error :-S", err);
        });
}

function seperateData(res) {
    for (var i = 0; i < res.length; i++) {
        username = res[i][0];
        password = res[i][1];
    }
}

getResults();