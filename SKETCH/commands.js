annyang.start({
	autoRestart: true
});
    
    // WRITE COMMANDS BELLOW
    
if (annyang) {
  
 
    // COMMANDS ON INDEX PAGE
   var commands = {
     
     //AUDIO COMMAND
 'audio start': function() {
      console.log('audio start')
      var audio = new Audio('hhttps://cdn.glitch.com/39f0fd15-d133-4051-8325-fd3a4e25480e%2Fannyang-presentation-mp3-man.mp3?1519326621055');
      audio.play();
}, 
    
		'first page': function() {
			console.log('first page');
			var utterance = new SpeechSynthesisUtterance('first page');
			window.speechSynthesis.speak(utterance);
			document.location.href = 'index.html';
		},
     
		'start presentation': function() {
			console.log('start presentation');
			var utterance = new SpeechSynthesisUtterance('start presentation');
			window.speechSynthesis.speak(utterance);
			document.location.href = 'presentation1.html';
		},
     
		'page two': function() {
			console.log('page two');
			var utterance = new SpeechSynthesisUtterance('change to page two');
			window.speechSynthesis.speak(utterance);
			document.location.href = 'presentation2.html';
			console.log('presentation start');
		},
  
		'page three': function() {
			console.log('page three');
			var utterance = new SpeechSynthesisUtterance('change to page three');
			window.speechSynthesis.speak(utterance);
			document.location.href = 'presentation3.html';
			console.log('presentation start');
		},
	};
	annyang.addCommands(commands);
	annyang.start();
}