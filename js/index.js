var colors = ['#FFCE00', '#0375B4', '#007849', '#262228', '#C0B283', '#E37222', '#07889B', '#A239CA', '#4717F6', '#6D7993', '#B82601', '#FF3B3F', '#3CC47C', '#233237', '#DF744A', '#EB6E80', '#008F95', '#94618E', '#1D2731'];

$(document).ready(function() {
  $.getJSON(
    "https://random-quote-generator.herokuapp.com/api/quotes/",
    function(a) {
      num = Math.floor(Math.random() * a.length);
      $("#quote-content").append(a[num].quote + "<p>&mdash; " + a[num].author + "</p>");
    }
  );
});

$('#get-another-quote-button').on('click', function(e) {
    e.preventDefault();
    $.getJSON(
    "https://random-quote-generator.herokuapp.com/api/quotes/",
    function(a) {
      $("#quote-content").fadeOut(function() {
         num = Math.floor(Math.random() * a.length);
         $("#quote-content").html(a[num].quote + "<br>" + "&mdash;" + a[num].author).fadeIn();
        color = colors[Math.floor(Math.random() * colors.length)];
        $(".quote").css("color", color);
        // $(‘body’).animate({backgroundColor: '#CD3333'});
        $( "body" ).animate({
          backgroundColor: color
        }, 400);
        $("button").animate({
          backgroundColor: color
        }, 400);
    });
  });
});

$('#tweet').click(function() {
    var toTweet = $("#quote-content").text();
    window.open('https://twitter.com/intent/tweet?text=' + toTweet);
    // $("#link").text('https://twitter.com/intent/tweet?text=' + toTweet);
});