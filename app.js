var recognition = new webkitSpeechRecognition(); 
recognition.onresult = function(event){
     var text = event.results[0][0].transcript;
     var output = document.getElementById('output').innerHTML = text;
     console.log(text);
     read(text)
}

function read(text){
     var speech = new SpeechSynthesisUtterance();
     speech.text = text;
     if(text == 'hello'){
          speech.text = 'bye'


     }
     else if(text == "what is you name"){
          speech.text = "my name is sujon biswas"
     }

     else{
          speech.text="please try agin";
     }

     document.getElementById('res').innerHTML=speech.text;
     window.speechSynthesis.speak();
}
