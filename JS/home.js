
$("#fortune").keyup(function(event){
    if(event.keyCode == 13){
        $("button").click();
    }
});

function ball() {
  var answer = Math.floor((Math.random() * 6) + 1);
  var output;
  if (answer < 1) {
    output = "The spirits shine upon you. The answer is definitely."
  } else if (answer == 1) {
    output = "The spirits are amused. The answer is yes."
  } else if (answer == 2) {
    output = "The spirits are not amused. The answer is no."
  } else if (answer == 3) {
    output = "The spirits did not hear you properly... ask again."
  } else if (answer == 4) {
    output = "The spirits say that the choice is in your hands alone."
  } else if (answer == 5) {
    output = "The spirits say, 'Ask the one closest to your heart for answers.'"
  } else if (answer > 5) {
    output = "The sprits are aloof and wish not to answer the question."
  }
  else {
    alert("The universe cannot be read at rhe moment.")
  }

  document.getElementById('log').innerHTML = output;
}

