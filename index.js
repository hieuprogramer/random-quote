let quotes = [
    [
      "Life isn’t about getting and having, it’s about giving and being.",
      "Kevin Kruse"
    ],
    [
      "Whatever the mind of man can conceive and believe, it can achieve.",
      "Napoleon Hill"
    ],
    [
      "Whatever the mind of man can conceive and believe, it can achieve.",
      "Napoleon Hill"
    ],
    [
      "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
      "Robert Frost"
    ],
    [
      "I attribute my success to this: I never gave or took any excuse.",
      "Florence Nightingale"
    ],
    ["You miss 100% of the shots you don’t take.", "Wayne Gretzky"],
    [
      "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
      "Michael Jordan"
    ]
  ];
  
  let colors = [
    "#F15F79",
    "#c2e59c",
    "#64b3f4",
    "#FFB75E",
    "#f46b45",
    "#e53935",
    "#00dbde",
    "#3498db",
    "#3498db"
  ];
  $(document).ready(() => {
    $("#twitter-quote").attr(
      "href",
      "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
        encodeURIComponent('"' + quotes[0][0] + '" ' + quotes[0][1])
    );
    $("#text").text(quotes[0][0]);
    $("#author").text(quotes[0][1]);
    $(".button").css("background-color", colors[0]);
    $("body").css("background-color", colors[0]);
    $("#new-quote").on("click", () => {
      let i = Math.floor(Math.random() * quotes.length);
      let j = Math.floor(Math.random() * colors.length);
      $("#text").text(quotes[i][0]);
      $("#author").text(quotes[i][1]);
      $(".button").css("background-color", colors[j]);
      $("body").css("background-color", colors[j]);
      $("#tweet-quote").attr(
        "href",
        "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
          encodeURIComponent('"' + quotes[i][0] + '" ' + quotes[i][1])
      );
    });
  });
  