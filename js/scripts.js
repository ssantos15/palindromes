$(document).ready(function() {
  $("#palindromes").submit(function(event) {
    event.preventDefault();
    var inputWord = $("#word").val();
    var reversedWord = inputWord.split("").reverse().join("");
    if(reversedWord===inputWord) {
      $("#result").text("palindrome");
    }
    else{
      $("#result").text("nonpalindrome");
    }
  });
});
