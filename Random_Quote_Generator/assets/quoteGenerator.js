var quoteList=[
  ["quote 0", "author"],
  ["To succeed in life, you need three things: a wishbone, a backbone, and a funny bone.", "Reba McEntire"],
  ["What the world really needs is more love and less paperwork", "Pearl Bailey"],
  ["It does not do to dwell on dreams and forget to live", "Albus Dumbledore"],
  ["It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends", "Albus Dumbledore"],
  ["quote 4", "author"],
  ["quote 5", "author"],
  ["quote 6", "author"],
  ["quote 7", "author"],
  ["quote 8", "author"],
  ["quote 9", "author"],
  ["quote 10", "author"],
];

function randQuote() {
  var randPicker = Math.floor(Math.random() * (quoteList.length));
  var randQuotePicker = quoteList[randPicker][0];
  var randQuoteAuthor = quoteList[randPicker][1];
  document.getElementById("quote").innerHTML = randQuotePicker;
  document.getElementById("quoteAuthor").innerHTML = randQuoteAuthor;
}