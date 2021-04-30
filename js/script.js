fetch('https://jsonplaceholder.typicode.com/users').then(function (response) {
    if (response.status !== 200) {
        alert('Houston We Have a Problem! Problem code: ' + response.status);
        return;
    }
    response.json().then(function (data) {
        for (var i = 0; i < data.length; i++) {
            $(".cards").append('<div class="card" id="card' + i + '">' + '<img src="img/' + i + '.png" />' + '<h4> Name: ' + data[i].name + ' </h4>' + '<h5> Username :  ' + data[i].username + ' </h5>' + '<p> Email: ' + data[i].email + ' </p>' + '<p> Adress: ' + data[i].address.street + ' st. ' + data[i].address.suite + ' ' + data[i].address.city + ' </p>' + '</div>');
        }
        $("#customerID").on("input", function () {
            var val = $(this).val();
            if (parseInt(val) < 0 || parseInt(val) > data.length - 1) {
                alert("Enter a value between 0 -" + data.length);
            } else if (parseInt(val) >= 0 && parseInt(val) < data.length) {
                $(".cards").empty();
                $(".cards").append('<div class="card onecard" id="card' + val + '">' + '<img src="img/' + val + '.png" />' + '<h4> Name: ' + data[val].name + ' </h4>' + '<h5> Username :  ' + data[val].username + ' </h5>' + '<p> Email: ' + data[val].email + ' </p>' + '<p> Adress: ' + data[val].address.street + ' st. ' + data[val].address.suite + ' ' + data[val].address.city + ' </p>' + '</div>');
            } else if (val = "''") {
                for (var i = 0; i < data.length; i++) {
                    $(".cards").append('<div class="card" id="card' + i + '">' + '<img src="img/' + i + '.png" />' + '<h4> Name: ' + data[i].name + ' </h4>' + '<h5> Username :  ' + data[i].username + ' </h5>' + '<p> Email: ' + data[i].email + ' </p>' + '<p> Adress: ' + data[i].address.street + ' st. ' + data[i].address.suite + ' ' + data[i].address.city + ' </p>' + '</div>');
                    $(".onecard").remove();
                }
            }

        });

    }).catch(err => {
        console.log(`Houston We a Problem! Problem is: ${err}`)
    });
});

fetch('https://jsonplaceholder.typicode.com/photos/?_limit=50').then(function (response) {
    if (response.status !== 200) {
        alert('Houston We Have a Problem! Problem code: ' + response.status);
        return;
    }
    response.json().then(function (variables) {
        for (var j = 0; j < variables.length; j++) {
            $("#slideShow").append('<img class="mySlide" style="width:100%" src=' + variables[j].url + ' />');
        }
        var myIndex = 0;
        carousel();

        function carousel() {
            var k;
            var x = document.getElementsByClassName("mySlide");
            for (k = 0; k < x.length; k++) {
                x[k].style.display = "none";
            }
            myIndex++;
            if (myIndex > x.length) {
                myIndex = 1
            }
            x[myIndex - 1].style.display = "block";
            setTimeout(carousel, 1000);
        }
    });

}).catch(err => {
    console.log(`Houston We a Problem! Problem is: ${err}`)
});