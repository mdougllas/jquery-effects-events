$("p").click(function(){
  $(this).hide(2000);
});
$(".red").click(function(){
  $(this).fadeOut(15000);
});

$("li").on("click", function(){
  console.log($(this).html());
});

// $("button").click(function(){
//   $("input").toggle();
// });

// $("input").keyup(function(){
//   var name = $(this).val();
//   var fullThing = "Hello " + name;
//   $("h1").text(fullThing);
// })

$("#sign-up-form").submit(function(e){
  e.preventDefault();
  console.log("hey: ", $("input"));
  var username = $("input[name='username']").val();
  console.log("username is ", username);
  var password = $("input[name='password']").val();
  if(username === "ironhack" && password === "ironhack123"){
    console.log("All Good.")
  } else {
    console.log("Sorry dude!")
  }
});
