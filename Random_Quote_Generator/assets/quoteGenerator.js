// Quote Generator

var quoteList=[
  ["What's comin' will come, an' we'll meet it when it does.", "Rubeus Hagrid"],
  ["If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.", "Sirius Black"],
  ["Dumbledore says people find it far easier to forgive others for being wrong than being right.", "Hermione Granger"],
  ["It does not do to dwell on dreams and forget to live.", "Albus Dumbledore"],
  ["It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.", "Albus Dumbledore"],
  ["It is the unknown we fear when we look upon death and darkness, nothing more.", "Albus Dumbledore"],
  ["We could all have been killed - or worse, expelled.", "Hermione Granger"],
  ["Dobby is free", "Dobby the House Elf"],
  ["Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.", "Albus Dumbledore"],
  ["It's cruel that I got to spend so much time with James and Lily, and you so little. But know this; the ones that love us never really leave us.", "Sirius Black"],
  ["Working hard is important. But there is something that matters even more: believing in yourself.", "Harry Potter"],
  ["I'm sorry too, that I will never know him ... but he will know why I died and I hope he will understand. I was trying to make a world in which he could live a happier life.", "Remus Lupin"],
  ["Always.", "Severus Snape"]
];

function randQuote() {
  var randPicker = Math.floor(Math.random() * (quoteList.length));
  randQuotePicker = quoteList[randPicker][0];
  randQuoteAuthor = quoteList[randPicker][1];
  document.getElementById("quote").innerHTML = randQuotePicker;
  document.getElementById("quoteAuthor").innerHTML = randQuoteAuthor;
}

