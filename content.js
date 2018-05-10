console.log('🔥Thank you🔥 for running the GitLab Finn Notify script! The android 🤖 will notify you when the push has finished!');

var projectName = document.querySelector('.sidebar-context-title').innerText;

console.log('gitlab-speech-tracker is on');
// console.log('%c       \n      ', 'font-size: 100px; background: url(https://s8.favim.com/orig/141226/adventure-time-cartoon-finn-gif-Favim.com-2337968.gif) no-repeat;');

var tracking = document.querySelector('.ci-running') ? true : false;
var contentWrapper = document.querySelector('.content-wrapper');

var contentObserver = new MutationObserver(function(mutationsList){
  // this code will display any mutations:
  // console.log(mutationsList);

  if (!document.querySelector('.ci-running') && tracking){
    tracking = false;
    console.log('the thing is not running any more!');

    //Speech synth tell user project done
    var voices = speechSynthesis.getVoices();
    var msg = new SpeechSynthesisUtterance();
    msg.text =
      'Notification: ' +
      projectName +
      ' has finished pushing';
    msg.rate = 1.1;
    msg.pitch = 0.25;
    window.speechSynthesis.speak(msg);

  }

  if (document.querySelector('.ci-running') && !tracking){
    tracking = true;
    console.log('now tracking the thing!');

    //Speech synth tell user project started
    var voices = speechSynthesis.getVoices();
    var msg = new SpeechSynthesisUtterance();
    msg.text =
      'Notification: a pipeline for ' + projectName + ' is now being tracked.';
    msg.rate = 1.1;
    msg.pitch = 0.5;
    window.speechSynthesis.speak(msg);

  }

});

contentObserver.observe(contentWrapper, { childList: true, subtree: true});

