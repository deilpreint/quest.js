const changeProposal = (arr) => {
    const result = [];
    for (const item of arr){
        let newWord = "";
        let position = 1;
        
    for (const symbol of item.word){
        if (symbol === " "){
            newWord += symbol;
            continue;
        };

    const isEvenRule = item.divisibility === "чётный";
    let shouldUpper = false;
        if (isEvenRule) {
            if (position % 2 === 0) {
                shouldUpper = true;
            }
        }else {
            if (position % 2 === 1) {
                shouldUpper = true;
            }
        };

        if (shouldUpper) {
            newWord += symbol.toUpperCase();
        }else {
            newWord += symbol.toLowerCase();
        };
        position++;
    }    
    result.push(newWord);
    }
    return result;
};

console.log(changeProposal([
    { word: 'чётный текст', divisibility: 'чётный' },
    { word: 'нечётный текст', divisibility: 'нечётный' },
    { word: 'этот текст тоже должен быть с каждым большим чётным символом', divisibility: 'чётный' },
    { word: 'а у этого текста должен быть каждый нечётный большой символ', divisibility: 'нечётный' },
]));