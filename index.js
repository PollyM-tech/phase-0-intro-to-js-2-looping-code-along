// Code your solutions in this file
 function writeCards(names, event){
    let thankYouMessages = [];
    for(let i =0; i<names.length; i++){
        let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
        thankYouMessages.push(message)
    }
    return thankYouMessages;
 }

 let cards = writeCards(["Polly", 'Daniel', 'Kylian'], 'wedding')
 console.log(cards);

 //ASSIGNMENT2
 function countDown(countNumber){
    let currentCount = countNumber;

    while (currentCount >=0){
       console.log(currentCount--);
      
 }
}
countNumber(10)