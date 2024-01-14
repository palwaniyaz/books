var animateText1 = function () {
    $('#animate').fadeOut(2000, function() {
        $(this).text('IPhone').fadeIn(2000);
    }).setTimeout(() => {
        fadeOut(2000, function() {
            $(this).text('IPad').fadeIn(2000);
        });
    }, 1000);
}
setInterval(animateText1,)
// var animateText = function () {

//     $('#animate').fadeOut(5000);
//     $('#animate').text('AirPods Pro');
//     $('#animate').fadeIn(5000);
// }
// setInterval(animateText, 50);
// setTimeout(() => {
//     $("#animate").fadeOut(2000, function() {
//         $(this).html("IPhone").fadeIn(2000);
//     });},1000);
// var animateText1 = function () {
//     $("#animate").fadeOut(2000, function() {
//         $(this).html("IPhone").fadeIn(2000);
//     });
//     // $('#animate').animate({'opacity': 0}, 2000, function(){
//     //     $(this).html('IPhone').animate({'opacity': 1}, 2000);
//     // });
// }
// setTimeout(() => {
//     $("#animate").fadeOut(2000, function() {
//         $(this).html("IPad").fadeIn(2000);
//     });},1000);
    
// setTimeout(() => {
//     $("#animate").fadeOut(2000, function() {
//         $(this).html("IMac").fadeIn(2000);
//     });},1000);

// var animateText2 = function () {
//     $("#animate").fadeOut(2000, function() {
//         $(this).html("IPad").fadeIn(2000);
//     });
// }
// var animateText3 = function () {
//     $("#animate").fadeOut(2000, function() {
//         $(this).html("IMac").fadeIn(2000);
//     });
// }

// setTimeout(() => {
//     $("#animate").fadeOut(2000, function() {
//         $(this).html("AirPods Pro").fadeIn(2000);
//     });},1000);
// var animateText4 = function () {
//     $("#animate").fadeOut(2000, function() {
//         $(this).html("AirPods Pro").fadeIn(2000);
//     });
// }

