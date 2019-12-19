console.log("hip hip array");

var colors = ["mistyrose", "plum", "tomato", "papayawhip"];

var languages = ["javascript", "ruby", "python"];

for (var index = 0; index < languages.length; index++) {
  console.log(languages[index]);
}

colors.forEach(c => {
  console.log(c);
});
