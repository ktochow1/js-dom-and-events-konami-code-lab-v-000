const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];


function init() {
  var index = 0; //index needs to be declared inside function
  // Write your JavaScript code inside the init() function
  document.body.addEventListener('keydown', function(e){
    const key = parseInt(e.which || e.detail);
      if (key === code[index]) {
      index++;
      if (index === code.length) {
        alert("you did it!");
        index = 0;
      }
    } else {
      index = 0;
    }
  });
}
init(); //need to call function in the end
