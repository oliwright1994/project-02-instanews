
$(document).ready(function() {
  $('#newsSection').change(function(){
    var section = $(this).val();
    // Show loading icon
    $(".error").remove();
    $(".loading-indicator").show();
    $(".loadingcontainer").show();
    $(".articlesContainer").empty()


    $.ajax({
      url: "https://api.nytimes.com/svc/topstories/v2/" + section + ".json?api-key=JZGkmnwVvjwt6MH5Fh2i4dL1nQTF2AD9",
      type: 'GET',
      datatype: 'json'
    })
    .fail(function () {
      $(".loading-indicator").hide()
      // $(".header").css("flex-direction", "row")
      // $(".header").css("justify-content", "flex-start")
      // $(".header").css("height", "150px")
      // $(".header").css("margin", "30px")
      $(".loadingcontainer").append("<h2 class='error'>We're sorry but the New York Times API could not be reached at this time</h2>")
    })

    .done(function(topStories) {
      $(".articlesContainer").hide()
      if (window.screen.width >= 1200){
      $(".header").animate({'height':'150px','margin':'30px'}, 500 )
      }
      $(".header").css("flex-direction", "row")
      $(".header").css("justify-content", "flex-start")


        $.each(topStories.results, function () {
          //End at this point
          if (document.querySelector(".articlesContainer").childElementCount === 12) {
            return false;
          }
          else {
              //Renders the article if all of the 4 values used are defined
            if (this.multimedia[4] !== undefined && this.title !== undefined && this.abstract !== undefined && this.url !== undefined){

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
      $(".articlesContainer").fadeIn(1000)
      });
    });
})


