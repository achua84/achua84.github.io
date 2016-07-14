function setupHandlers() {
    $("#Pic1 img").on("mouseenter", function() {
    console.log("The image was found!");
    $(this).animate({width:120, height:160}, 2000);
  })

  $("#Pic1 img").on("mouseleave", function () {
    $(this).animate({width: 80, height:120}, 2000);
  })}

  function setupHandlers1() {
      $("#Pic2 img").on("mouseenter", function() {
      console.log("The image was found!");
      $(this).animate({width:120, height:160}, 2000);
    })

    $("#Pic2 img").on("mouseleave", function () {
      $(this).animate({width: 80, height:120}, 2000);
    })}

    function setupHandlers2() {
        $("#Pic3 img").on("mouseenter", function() {
        console.log("The image was found!");
        $(this).animate({width:120, height:160}, 2000);
      })

      $("#Pic3 img").on("mouseleave", function () {
        $(this).animate({width: 80, height:120}, 2000);
      })}


  function setupHandlers() {
      $("#wall img").on("mouseenter", function() {
      $(this).fadeIn();
      alert("The image was found!");  
    })}

$(document).ready(setupHandlers);
$(document).ready(setupHandlers1);
$(document).ready(setupHandlers2);

/*function setupHandlers() {
  var isReaction = false;
  var reactionTime;

$("#PEP").mouseenter(function () {
  console.log("click");
  if (!isReaction){
    isReaction=true;
    var d = new Date ();
    reactionTime = d.getTime();
  } else {
    var d = new Date ();
    var endTime = d.getTime();
    alert("You took " + endTime - reactionTime + " miliseconds!");
    isReaction = false;
  }
 });
}*/
