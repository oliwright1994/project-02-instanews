
$( document ).ready(function() {
$('#newsSection').change(function(){
    var value = $(this).val();
    $.getJSON("https://api.nytimes.com/svc/topstories/v2/" +value+".json?api-key=JZGkmnwVvjwt6MH5Fh2i4dL1nQTF2AD9").done(function(articles) {
        let articleBox = $('.container').append("<div></div>")
        $(articleBox).append("<p>"+articles.results[0].title+"</p>")
        $(articleBox).attr("background-image", +articles.results[0].multimedia[1].url )


      });
    });
})

