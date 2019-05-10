
$(document).ready(function() {
$('#newsSection').change(function(){
    var section = $(this).val();
    // Show loading icon
    $(".loading-indicator").show();
    $(".loadingcontainer").show();
    $(".articlesContainer").empty()


    $.ajax({
      url: "https://api.nytimes.com/svc/topstories/v2/" +section+".json?api-key=JZGkmnwVvjwt6MH5Fh2i4dL1nQTF2AD9",
      type: 'GET',
      datatype: 'json'
    })
      .fail(function () {
        $(".loading-indicator").hide()
        $(".header").css("flex-direction", "row")
        $(".header").css("justify-content", "flex-start")
        $(".header").css("height", "150px")
        $(".header").css("margin", "30px")
        $(".loadingcontainer").append("<h2>We're sorry but the New York Times API could not be reached at this time</h2>")
        })

      .done(function(topStories) {
        $(".header").css("flex-direction", "row")
        $(".header").css("justify-content", "flex-start")
        $(".header").css("height", "150px")
        $(".header").css("margin", "30px")

        $.each(topStories.results, function () {
          //End at this point
          if (document.querySelector(".articlesContainer").childElementCount == 12) {
            return false;
          }
          else {
              //If the article object contains an image url
            if (this.multimedia[4] !== undefined){

              $( "<a class='newArticle'></a>" ).appendTo( ".articlesContainer" )
              $('.newArticle').append("<h1>"+this.title+"</h1>")
              $('.newArticle').append("<div><p>"+this.abstract+"</p></div>")
              $('.newArticle').css("background-image", "url(" + this.multimedia[4].url + ")")
              $('.newArticle').attr("href", this.url)
              $('.newArticle').attr("class", "articleBox")
            }
          }
        })
      // Hide loading icon
      $(".loading-indicator").hide()
      $(".loadingcontainer").hide()
      });
    });
})

