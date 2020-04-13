export function Entry(titleEntry, bodyEntry) {
  this.title = titleEntry;
  this.body = bodyEntry;
  this.output = [];
  this.titleVowelList = [];
  this.bodyVowelList = [];
}

Entry.prototype.getWords = function() {
  var titleWordSplit = this.title.split(" ");
  var bodyWordSplit = this.body.split(" ");
  this.output.push(titleWordSplit.length);
  this.output.push(bodyWordSplit.length);
  return this.output; 
};

Entry.prototype.getVowels = function() {
  var vowels = ["a", "e", "i", "o", "u"];
  var titleCharacterSplit = this.title.toLowerCase().split("");
  var bodyCharacterSplit = this.body.toLowerCase().split("");

  for (var i = 0; i<titleCharacterSplit.length; i++){
    if(vowels.includes(titleCharacterSplit[i])) { 
      this.titleVowelList.push(titleCharacterSplit[i]);
    }
  }

  for (var i = 0; i<bodyCharacterSplit.length; i++){
    if(vowels.includes(bodyCharacterSplit[i])) {
      this.bodyVowelList.push(bodyCharacterSplit[i]);
    }
  }
  return [this.titleVowelList.length, this.bodyVowelList.length]; 
};

Entry.prototype.getConsonants = function() {

};

Entry.prototype.getTeaser = function () {

};