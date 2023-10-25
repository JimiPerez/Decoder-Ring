// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if(!shift || shift === 0 || shift < -25 || shift > 25 || !input) { return false}
    
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    
    for (const char of input.toLowerCase()) {
      if (alphabet.includes(char)) {
        const currentIndex = alphabet.indexOf(char);
        let newIndex;
        
        if (encode) {
          newIndex = (currentIndex + shift) % 26;
          
            if (newIndex < 0) {
              newIndex += 26;
            }
        }
        else {
          newIndex = (currentIndex - shift) % 26;
          
            if (newIndex < 0) {
              newIndex += 26;
            }
        }

      result += alphabet[newIndex];
    } else {
      result += char;
    }
  }
    return result;
    
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };








