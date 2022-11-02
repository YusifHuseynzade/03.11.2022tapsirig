let openFileText = function(event) {
    let input = event.target;

    let reader = new FileReader();
    reader.onload = function(){
      let text = reader.result;
      console.log(text.substring(0, 2000));
    };
    reader.readAsText(input.files[0]);
  };


let openFileImage = function(event) {
    let input = event.target;

    let reader = new FileReader();
    reader.onload = function(){
      let dataURL = reader.result;
      let output = document.getElementById('output');
      output.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);
  };