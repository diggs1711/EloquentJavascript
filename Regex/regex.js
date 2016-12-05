/*
/abc/ A sequence of characters
/[abc]/ Any character from a set of characters
/[^abc]/ Any character not in a set of characters
/[0-9]/ Any character in a range of characters
/x+/ One or more occurrences of the pattern x
/x+?/ One or more occurrences, nongreedy
/x*\/ Zero or more occurrences
/x?/ Zero or one occurrence
/x{2,4}/ Between two and four occurrences
/(abc)/ A group
/a|b|c/ Any one of several patterns
/\d/ Any digit character
/\w/ An alphanumeric character (“word character”)
/\s/ Any whitespace character
/./ Any character except newlines
/\b/ A word boundary
/^/ Start of input
/$/ End of input
*/

//1. Cat or car
verify(/ca[rt]/,
["my car", "bad cat"],
["camper", "bad art"] );

//2.pop and prop
verify(/pr?op/g,
["pop culture", "mad props"],
["plop"]);

//3. ferret, ferry, ferrari
verify(/ferr(et|y|ari)/,
["ferret", "ferry", "ferrari"],
["ferrum", "transfer a"]);

//4.any word ending in ious
verify(/ious\b/,
["how delicious", "spacious room"],
["ruinous", "consciousness"]);

//5. A whitespace character followed by a dot, comma, colon, or semicolon
verify(/\s[.,:;]/,
["bad punctuation .", "end of line ;"],
[" {}", " $"]);

//6. A word longer than six letters
verify(/\w{7,}/,
["whitespace", "character"],
["no", "white"]);

//7. A word without the letter e
verify(/\b[a-df-z]+\b/,
["without", "word"],
["character", "whitespace"]);

function verify(regex, yes, no) {
  if(regex.source == "..") return;
  yes.forEach(function(s) {
    if (!regex.test(s)) {
      console.log("Failed to match '" + s + "'");
    }
  });
  no.forEach(function(s) {
    if(regex.test(s))
      console.log("Unexpected match for '" + s + "'");
  });

}
