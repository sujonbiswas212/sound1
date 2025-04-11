var recognition = new webkitSpeechRecognition();
recognition.onresult = function(event){
     var text = event.results[0][0].transcript;
     var output = document.getElementById('output').innerHTML = text;

     read(text)
}

function read(text){
     var speech = new SpeechSynthesisUtterance();
     speech.text = text;
     if(text == 'Hello'){
          var s = new Audio('music/a.mp3')
          s.play();
     }
     else if(text=='What is your name'){
          speech.text = 'my name is sujon biswas';

     }
     else if(text == 'my favorite player'){
          speech.text = 'leneo messi';
     }
     else{
          speech.text ="please try agin";
     }

     document.getElementById('res').innerHTML=speech.text;
     window.speechSynthesis.speak(speech);

}
