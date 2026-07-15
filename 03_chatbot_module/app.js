const readline = require('readline');
const chatbot = require('./chatbot');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('==================================================');
console.log('Welcome to the College Helpdesk Chatbot CLI!');
console.log('Ask me about admissions, fees, courses, exams, etc.');
console.log('Type "exit" or "bye" to end the conversation.');
console.log('==================================================\n');

function askQuestion() {
    rl.question('You: ', (input) => {
        const cleanedInput = input.trim().toLowerCase();

        if (cleanedInput === 'exit' || cleanedInput === 'bye') {
            console.log('\nChatbot: Thank you for visiting the College Helpdesk. Goodbye!');
            rl.close();
            return;
        }

        const reply = chatbot.getResponse(input);
        console.log(`Chatbot: ${reply}\n`);
        
        // Loop back to ask another question
        askQuestion();
    });
}

// Start the dialogue loop
askQuestion();
