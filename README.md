# pangramchecker
Test for Pangrams (Strings that contain all letters of the English alphabet)



This is version 1.0.

Built as part of a proficiency test for a job.

Takes a string and uses a regex to determine whether or not the letters A-Z all occur at least once in a string entered into a 
text field.
-----
RegExp:
/([a-z])(?!.*\1)/gi


[a-z] - self explanatory (I hope)

?! - Negative lookahead. Specifies a group that can not match after the main expression (if it matches, the result is discarded).
    
. - (Dot) Matches any character except line breaks.

* - (Star) Match 0 or more of the preceding token.

\1 - Backreference. Matches the results of capture group #1.

g - Global search

i - ignore case

-----
/* Add click listener to a button called "check" that starts the function /*
document.getElementById("check").addEventListener("click", function(e) {

/* Set i = to whatever is in the text input field /*
var i = document.getElementById("input").value;

/*  Return value of the input, match it to regex, and make sure it's more than 25 characters. /*
function testpan(input) {
    var regex = /([a-z])(?!.*\1)/gi;
    return (input.match(regex) || []).length > 25;
  }

/* if the input (i) tests good, "Yep" is displayed, if not, "Nope" is displayed. preventDefault stops the function from starting over.
if (testpan(i)) {
    document.getElementById("result").innerHTML = "Yep";
  } else document.getElementById("result").innerHTML = "Nope";
  e.preventDefault();
});
