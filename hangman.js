var Hangman = (function () {
  'use strict';


   
  function Hangman(elId) {
     
      this.elId = elId;
     
      this.words      = [
        'H-FARM', 'SCHOOL', 'LEARNING', 'HOMEWORK',
        'DESKS', 'PEN', 'PLAYTIME', 'TYPEWRITER', 'CODER', 
        'PROF', 'MANAGEBAC', 'IPAD', 'COMPUTER', 'BOOKS', 'STUDY', 'HTML', 'CSS'
      ];
  }

  Hangman.prototype.reset = function () {
   
      this.STOPPED        = false;
      this.MISTAKES       = 0;
      this.GUESSES        = [];
     
      this.WORD           = this.words[Math.floor(Math.random() * this.words.length)];
     
      this.hideElementByClass('h');
      this.showElementByIdWithContent(this.elId + "_guessbox", null);
      this.showElementByIdWithContent(this.elId + "_word", this.getGuessedfWord());
  };

  
  
  
  Hangman.prototype.guess = function (letter) {
      letter = letter.charAt(0).toUpperCase();

     
      if (this.STOPPED || this.GUESSES.indexOf(letter) > -1) {
       
          return;
      }

      this.GUESSES.push(letter);

      this.showElementByIdWithContent(this.elId + "_word", this.getGuessedfWord());
      this.showElementByIdWithContent(this.elId + "_guesses", this.GUESSES.join(''));


      if (this.WORD.indexOf(letter) < 0) {
      
          this.MISTAKES++;

          this.showElementByIdWithContent(this.elId + "_" + this.MISTAKES, null);

          if (this.MISTAKES === 6) {
              this.showElementByIdWithContent(this.elId + "_end", "GAME OVER!<br/>The word was: " + this.WORD);
              this.STOPPED = true;
          }
      } else if (this.WORD.indexOf(this.getGuessedfWord()) !== -1) {

          this.showElementByIdWithContent(this.elId + "_end", "You made it!<br/>The word was: " + this.WORD);
          this.STOPPED = true;
      }
  };

 
   
  Hangman.prototype.showElementByIdWithContent = function (elId, content) {
      if (content !== null) {
          document.getElementById(elId).innerHTML = content;
      }
      document.getElementById(elId).style.opacity = 1;
  };


  
  
  Hangman.prototype.hideElementByClass = function (elClass) {
      var elements = document.getElementsByClassName(elClass), i;
      for (i = 0; i < elements.length; i++) {
          elements[i].style.opacity = 0;
      }
  };


  Hangman.prototype.getGuessedfWord = function () {
      var result = "", i;
      for (i = 0; i < this.WORD.length; i++) {
  
          result += (this.GUESSES.indexOf(this.WORD[i]) > -1) ?
                  this.WORD[i] : "_";
      }
      return result;
  };


  return new Hangman('hangm');    
}());