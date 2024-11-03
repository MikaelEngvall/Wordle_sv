// Load the Swedish word list, filter it, and select a random word of the desired length
const getRandomWord = async (length) => {
    // Replace 'path/to/your/swedish_words.txt' with the correct path to the word list file
    const response = await fetch('swe_wordlist.txt');
    const text = await response.text();
    
    // Split the file into an array of words
    const words = text.split('\n');
    
    // Filter words by the specified length
    const filteredWords = words.filter(word => word.length === length);
  
    // Check if there are words of that length
    if (filteredWords.length === 0) {
      throw new Error(`No words found with length ${length}`);
    }
  
    // Select a random word from the filtered list
    const randomWord = filteredWords[Math.floor(Math.random() * filteredWords.length)];
    return randomWord;
  };
  
  // Usage
  (async () => {
    try {
      const word = await getRandomWord(5); // Example: get a word with 5 letters
      console.log("Random Swedish word:", word);
    } catch (error) {
      console.error(error.message);
    }
  })();
  