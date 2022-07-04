// Create an object to hold the 3 message arrays
const messages = {
    inspiration: ['When you have a dream, you\'ve got to grab it and never let go.',
    'Nothing is impossible. The word itself says I\'m possible!',
    'Success is not final, failure is not fatal: it is the courage to continue that counts.',
    'You define your own life. Don\'t let other people write your script.',
    'You are never too old to set another goal or to dream a new dream.'],
    film: ['May the Force be with you.',
    'There\'s no place like home.',
    'My mama always said life was like a box of chocolates. You never know what you\'re gonna get.',
    'I\'ll be back.',
    'You\'re gonna need a bigger boat.'],
    philosophy: ['The unexamined life is not worth living',
    'I think therefore I am',
    'Happiness is not an ideal of reason but of imagination',
    'Science is what you know. Philosophy is what you don\'t know',
    'A day without laughter is a day wasted.']
};

// The main function,which picks the 3 random quotes and returns them to the user
const messageGenerator = name => {
    
    // Generate random index numbers for each of the quote catagories
    const quoteCategories = ['inspiration', 'film', 'philosophy'];
    const greeting  = `Hey ${name}, I have selected the following quotes for you.  Enjoy!\n`;
    console.log(greeting);
    quoteCategories.forEach((item) => {
       const randIndex = Math.floor(Math.random() * messages[item].length);
       const quote = `Your ${item} quote for today is:  ${messages[item][randIndex]}\n`;
       console.log(quote);
    });
    
};

messageGenerator('Jane');
