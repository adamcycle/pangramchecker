document.getElementById("check").addEventListener("click", function(e) {

  var i = document.getElementById("input").value;

  function testpan(input) {
    var regex = /([a-z])(?!.*\1)/gi;
    return (input.match(regex) || []).length > 25;
  }

  document.getElementById("reset").style.display = "block";
  document.getElementById("check").style.display = "none";


  if (testpan(i)) {
    document.getElementById("result").innerHTML = "Yep";
  } else document.getElementById("result").innerHTML = "Nope";
  e.preventDefault();
});

function reset() {
  document.getElementById("pangram").reset();
  document.getElementById("result").innerHTML = "";
  document.getElementById("reset").style.display = "none";
}
