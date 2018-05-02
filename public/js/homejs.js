//Button Search Ajax call
function MyAjaxFunction(a){
    var showtab=document.getElementById("displaylist");
    showtab.style.display="none";

    var formData = {
        'restaurant_name': a
    };

    $.ajax({
        url: 'http://localhost:3000/search',
        data: formData,
        type: 'POST',
        success: function (data) {
            var resultarr2='';
            var resultarr3='';
            resultarr2+='<section class="reserve-block">';
            resultarr2+=' <div class="container">';
            resultarr2+=' <div class="row">';
            resultarr2+='   <div class="col-md-6">';
            resultarr2+='   <h5>'+data[0].restaurant_name+'</h5>';
            resultarr2+='   <p><span></span></p>';
            resultarr2+='   <p class="reserve-description">'+data[0].Cuisine+'</p>';
            resultarr2+='   </div>';
            resultarr2+='           </div></div></section>';

            resultarr2+='   <section class="light-bg booking-details_wrap">';
            resultarr2+='   <div class="container">';
            resultarr2+='<div class="row">';
            resultarr2+='    <div class="col-md-8 responsive-wrap">';
            resultarr2+='      <div class="booking-checkbox_wrap mt-4">';
            resultarr2+='          <h5>Reviews</h5>';
            resultarr2+='          <hr>';

            for(var j=1;j<data.length;j++){
                resultarr2+='        <div class="customer-review_wrap">';

                resultarr2+='              <p class="customer-text">'+data[j].Description+'</p>'
                resultarr2+='      </div>';
                resultarr2+='        <hr>';
            }
            resultarr2+='      </div>';
            resultarr2+='  </div>';
            resultarr2+='  <div class="col-md-4 responsive-wrap"><div class="contact-info">';
            resultarr2+='        <div class="address">';
            resultarr2+='          <b><p>Address</p></b>';
            resultarr2+='          <p> '+ data[0].Address+'</p>';
            resultarr2+='    </div></div></div>';
            resultarr2+='  </div>';
            resultarr2+='</div>';
            resultarr2+='</section>';
            resultarr3+='<div class="styled-heading"> <br/><br/><br/> <h3>Give Review or Reserve a table </h3> </div>'
            document.getElementById("display2").innerHTML=resultarr2;
            document.getElementById("display3").innerHTML=resultarr3;
            var showtab=document.getElementById("tabs-1");
            showtab.style.display="block";

        },
        error: function (xhr, status, error) {
            console.log('Error: ' + error.message);
        },
    });
}//Button Search Ajax call


//Ajax call for getting all restaurants.
$(document).ready(function() {
    var resultarr='';
    var resultarr1='';
    $.ajax({
        url: 'http://localhost:3000/getrestaurants',
        type: 'GET',
        success: function (data) {
            temp=data;
            console.log(data[0].restaurant_name);


            for(var i = 0; i<data.length/2; i++){
                var abc = "abc"
                resultarr+='<div class="featured-place-wrap">';
                resultarr+="<button onclick='MyAjaxFunction(\""+ data[i].restaurant_name + "\");'>";
                resultarr+='<img src='+data[i].img+' class="img-fluid" alt="#">';
                resultarr+='<span class="featured-rating-green">' + data[i].rating + '</span>';
                resultarr+='<div class="featured-title-box">';
                resultarr+='<h6>' + data[i].restaurant_name + '</h6>';

                resultarr+='<ul>';

                resultarr+='<li><p>' + data[i].Address+ '</p></li>';

                resultarr+='</ul>';
                resultarr+='</div>';
                resultarr+='</button>';
                resultarr+='</div>';
            }

            for(var i = data.length/2; i<data.length; i++){
                resultarr1+='<div class="featured-place-wrap">';
                resultarr1+="<button onclick='MyAjaxFunction(\""+ data[i].restaurant_name + "\");'>";
                resultarr1+='<img src='+data[i].img+' class="img-fluid" alt="#">';
                resultarr1+='<span class="featured-rating-green">' + data[i].rating + '</span>';
                resultarr1+='<div class="featured-title-box">';
                resultarr1+='<h6>' + data[i].restaurant_name + '</h6>';

                resultarr1+='<ul>';

                resultarr1+='<li><p>' + data[i].Address+ '</p></li>';

                resultarr1+='</ul>';
                resultarr1+='</div>';
                resultarr1+='</button>';
                resultarr1+='</div>';
            }

            document.getElementById("display").innerHTML=resultarr;
            document.getElementById("display1").innerHTML=resultarr1;

        },
        error: function (xhr, status, error) {
            console.log('Error: ' + error.message);
        },
    });
    event.preventDefault();
});//Ajax call for getting all restaurants.



//Search bar search ajax call
$(document).ready(function() {
    var resultarr2 = '';
    var resultarr3 = '';
    $("#form")
        .submit(function(event) {
            var showtab=document.getElementById("displaylist");
            showtab.style.display="none";
            var formData = {
                'restaurant_name': $('input[name=restaurant_name]').val()
            };
            $.ajax({
                url: 'http://localhost:3000/search',
                data: formData,
                type: 'POST',
                success: function (data) {
                    if(data[0] == false){
                        alert("No Resturants found with name:" +formData.restaurant_name);
                        top.location.href = './home.html';
                    }
                    else{
                        var resultarr2='';
                        var resultarr3='';
                        resultarr2+='<section class="reserve-block">';
                        resultarr2+=' <div class="container">';
                        resultarr2+=' <div class="row">';
                        resultarr2+='   <div class="col-md-6">';
                        resultarr2+='   <h5>'+data[0].restaurant_name+'</h5>';
                        resultarr2+='   <p><span></span></p>';
                        resultarr2+='   <p class="reserve-description">'+data[0].Cuisine+'</p>';
                        resultarr2+='   </div>';
                        resultarr2+='     </div></div></section>';

                        resultarr2+='   <section class="light-bg booking-details_wrap">';
                        resultarr2+='   <div class="container">';
                        resultarr2+='<div class="row">';
                        resultarr2+='    <div class="col-md-8 responsive-wrap">';
                        resultarr2+='      <div class="booking-checkbox_wrap mt-4">';
                        resultarr2+='          <h5>Reviews</h5>';
                        resultarr2+='          <hr>';

                        for(var j=1;j<data.length;j++){
                            resultarr2+='        <div class="customer-review_wrap">';

                            resultarr2+='              <p class="customer-text">'+data[j].Description+'</p>'
                            resultarr2+='      </div>';
                            resultarr2+='        <hr>';
                        }
                        resultarr2+='      </div>';
                        resultarr2+='  </div>';
                        resultarr2+='  <div class="col-md-4 responsive-wrap"><div class="contact-info">';
                        resultarr2+='        <div class="address">';
                        resultarr2+='          <b><p>Address</p></b>';
                        resultarr2+='          <p> '+ data[0].Address+'</p>';
                        resultarr2+='    </div></div></div>';
                        resultarr2+='  </div>';
                        resultarr2+='</div>';
                        resultarr2+='</section>';
                        resultarr3+='<div class="styled-heading"> <br/><br/><br/> <h3>Give Review or Reserve a table </h3> </div>'

                        document.getElementById("display2").innerHTML=resultarr2;
                        document.getElementById("display3").innerHTML=resultarr3;


                        var showtab=document.getElementById("tabs-1");
                        showtab.style.display="block";

                    }},
                error: function (xhr, status, error) {
                    console.log('Error: ' + error.message);
                }
            });
            event.preventDefault();
        });
});//Search bar search ajax call


//Signout Ajax call
function  signout() {

    {
        $.ajax({
            url: 'http://localhost:3000/signout',
            type: 'POST',
            jsonpCallback: 'callback',
            success: function () {
                top.location.href = './index.html';
            },
            error: function (xhr, status, error) {
                console.log('Error: ' + error.message);
            }
        });
    }}
//Signout Ajax call



//Ajax tabs
$(function() {
    $( "#tabs-1" ).tabs();
});//Ajax tabs



//search button disabled if search bar is empty

$(document).ready(function() {

    $(function() {
        $('#searchbtn').attr('disabled', 'disabled');
    });

    $('input[type=text]').keyup(function() {

        if ($('#searchtxt').val()) {

            $('#searchbtn').removeAttr('disabled');
        } else {
            $('#searchbtn').attr('disabled', 'disabled');
        }
    });
});//search button disabled if search bar is empty
