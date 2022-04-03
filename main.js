import { words, legal } from './dict.js';
const all = [...words, ...legal]
//get the words that have been guessed
const totalWords = words.length;
const firstDay = new Date('6/19/2021') //launch date of wordle 6/19/2021
const today = new Date(new Date().toLocaleDateString());
const differenceInTime = today.getTime() - firstDay.getTime()
const differenceInDays = differenceInTime / (1000 * 3600 * 24);
const wordEnd = differenceInDays % totalWords;
const wordsHaveGuessed = words.slice(0, wordEnd)

const checkHistoryBtn = document.querySelector('.checkHistory')
const wordInput = document.querySelector('.word')
const message = document.querySelector('.message')
document.addEventListener('keypress', checkHistory)
checkHistoryBtn.addEventListener('click',checkHistory)
wordInput.addEventListener('input', hideMsg)
function hideMsg(){
    message.className = 'message hide'
}
function checkHistory(e){
    if(e.type==='keypress' && e.key!=='Enter') return;
    const value = wordInput.value.toLowerCase();
    message.className = 'message alert'
    if(value.length<5){
        message.innerText = 'Need to be a 5-letter word'
    }else if(wordsHaveGuessed.includes(value)){
        message.innerText = 'It was guessed before!'
    }else if(all.includes(value)){
        message.className = 'message available alert'
        message.innerText = "It's available!"
    }else {
        message.innerText = "Not a legit word!"
    }
}