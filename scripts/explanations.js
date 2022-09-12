
var currentExplanation = ""
function showExplanation ( name ) {
  if ( name == "" ) {
    console.log("No explaination found for " + $(this))
    return
  }

  if ( currentExplanation != "")
    $(currentExplanation).hide()

  var target = "#explanation_" + name
  $(target).show()
  currentExplanation = target

  const url = new URL(window.location.href)
  url.searchParams.set("page", name)
  window.history.pushState({}, "", url)
}

$(document).ready(function() {
  $(".explainable").each(function() {
    $(this).click(function() {
      var name = ""
      var classes = $(this).attr('class').split(' ')
      for ( var i = 0 ; i < classes.length ; ++i ) {
        if ( classes[i].indexOf('explain_') == 0 ) {
          name = classes[i].substring(8)
          break
        }
      }

      showExplanation(name)
    })
  })

  var url = new URL(window.location.href)
  var page = url.searchParams.get("page")
  if ( page != null )
    showExplanation(page)

})
