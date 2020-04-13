import './styles.css';
import { Entry } from './entry';


$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();
    var titleEntry = $("#title").val();
    var bodyEntry = $("#body").val();
    var entry = new Entry(titleEntry, bodyEntry);
    var output = entry.getWords(titleEntry,bodyEntry);
    // console.log(output);
    var titleVowelList = entry.getVowels(titleEntry); //later fix name
    // console.log(titleVowelList);
    var bodyVowelList = entry.getVowels(bodyEntry); //later fix name
    console.log(bodyVowelList);

   
    //output the number of vowels and consonants in each entry
    // var output = Entry(titleEntry, bodyEntry)
  });
});





// return number of words in each entry 
// Entry function: output the number of vowels and consonants in each entry -> 4 output boxes(2output boxes for title, 2output boxes for body)

// getTeaser function: know if the sentence is over 8words, display first 8 words. -> 2 output box(1output box for title, 1output box for body)
// ex) input: "Today I went to school. I was very tired and blah blah blah.""
//     output: "Today I went to school. I was"
