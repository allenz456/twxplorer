// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

// Check for empty search term
function validate() {
  if($("#search").val().length == 0) {
    alert("Looks like you didn't enter a search term!");
    return false;
  }
  return true;
}

$("a.breadcrumbs").click(function() {
  var stopid = $(this).attr("id");
  var oldid = "";
  if (stopid == $('.search-input').val()) {
      var snapshot = $('#snapshot-string').text();
      if (snapshot == '') {
        $.get('/searchedtweets/_makedata?search=' + $('.search-input').val() + '&id=' + oldid + '&stoplistvar=' + $("#stoplist-text").val(), function(response) { $('#main-wrap').html(response);}, 'html');
      }
      else {
        $.get('/searchedtweets/_makedata?search=' + $('.search-input').val() + '&id=' + oldid + '&stoplistvar=' + $("#stoplist-text").val() + '&snapshot=' + snapshot, function(response) { $('#main-wrap').html(response);}, 'html');
      }
  }
  $("a.breadcrumbs:not(:first)").each(function() {
    var currentid = $(this).attr("id");
    if (currentid == stopid) {
      oldid += ":" + currentid;

      var snapshot = $('#snapshot-string').text();
      if (snapshot == '') {
        $.get('/searchedtweets/_makedata?search=' + $('.search-input').val() + '&id=' + oldid + '&stoplistvar=' + $("#stoplist-text").val(), function(response) { $('#main-wrap').html(response);}, 'html');
      }
      else {
        $.get('/searchedtweets/_makedata?search=' + $('.search-input').val() + '&id=' + oldid + '&stoplistvar=' + $("#stoplist-text").val() + '&snapshot=' + snapshot, function(response) { $('#main-wrap').html(response);}, 'html');
      }
    }
    else {
      oldid += ":" + currentid;
    }
  });
})

// Fixing dropdown toggling 
$('a.dropdown-toggle').click(function(event) {
  $('ul#menu1').toggle();  
})

// Stoplist
$(document).ready(function() {
  $('.modal-backdrop').remove();
  $("a.inserted-at").click(function() {
    var stoplistvar = "";
    $.get('/searchedtweets/_makedata?search=' + $('.search-input').val() + '&id=' + $('.search-input').val() + '&stoplistvar=' + stoplistvar + '&snapshot=' + $(this).attr("id"), function(response) { $('#main-wrap').html(response);}, 'html');
  });
  $("#stoplist-submit").click(function() {
    var oldid = "";
    $("a.breadcrumbs:not(:first)").each(function() {
      var currentid = $(this).attr("id");
      oldid += ":" + currentid;
    });
    var snapshot = $('#snapshot-string').text();
    if (snapshot == '') {
      $.get('/searchedtweets/_makedata?search=' + $('.search-input').val() + '&id=' + oldid + '&stoplistvar=' + $("#stoplist-text").val(), function(response) { $('#main-wrap').html(response);}, 'html');
    } else {
      $.get('/searchedtweets/_makedata?search=' + $('.search-input').val() + '&id=' + oldid + '&stoplistvar=' + $("#stoplist-text").val() + '&snapshot=' + snapshot, function(response) { $('#main-wrap').html(response);}, 'html');
    }
  })
});