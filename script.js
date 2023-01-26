let btn = document.querySelector(".btn");

function generate() {
  let quotes = {
    " ― Mahatma Gandhi": "“Be the change that you wish to see in the world.”",
    "― Robert Frost":
      "“In three words I can sum up everything I have learned about life: it goes on.”",
    "― J.K. Rowling":
      "“If you want to know what a man is like, take a good look at how he treats his inferiors, not his equals.”",
    "― Mark Twain":
      "“If you tell the truth, you don't have to remember anything.”",
    "― Oscar Wilde":
      "“I am so clever that sometimes I don't understand a single word of what I am saying.”",
    "― Andre Gide":
      "“It is better to be hated for what you are than to be loved for what you are not.”",
    "― Thomas A. Edison":
      "“I have not failed. I've just found 10,000 ways that won't work.”",
    "-A. P. J. Abdul Kalam":
      '"If you want to shine like a sun, first burn like a sun."',
    "-Joe Dispenza":
      "“Process of change requires you becoming conscious of your unconscious self.” ",
    "-Joe Dispenza":
      " “We do not perceive things the way they are, we perceive things the way we are.”",
    "-Joe Dispenza": "“Routine lulls the brain to sleep.” ",
    "― Albert Einstein":
      "“Life is like riding a bicycle. To keep your balance, you must keep moving.”",
  };
  let authors = Object.keys(quotes);
  let author = authors[Math.floor(Math.random() * authors.length)];
  let quote = quotes[author];
  document.getElementById("quote").innerText = quote;
  document.getElementById("author").innerText = author;
}
btn.addEventListener("click", generate);
