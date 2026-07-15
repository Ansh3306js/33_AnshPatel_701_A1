// Simple rule-based chatbot module for a college helpdesk

const rules = [
    {
        keywords: ['admission', 'apply', 'enroll'],
        response: 'For admissions, please visit our admissions portal at website/admissions or email admissions@college.edu. The deadline for the fall semester is August 31st.'
    },
    {
        keywords: ['fees', 'tuition', 'payment'],
        response: 'Tuition fees vary by program. You can find the detailed fee structure at website/fees. Payments can be made via credit card, bank transfer, or at the student finance office.'
    },
    {
        keywords: ['course', 'syllabus', 'programs', 'subjects'],
        response: 'We offer Undergraduate and Postgraduate courses in Engineering, Science, Commerce, and Humanities. View our syllabus guide at website/courses.'
    },
    {
        keywords: ['contact', 'phone', 'address', 'location'],
        response: 'Our campus is located at 123 Education Lane. You can reach the main desk at +1 (555) 019-2834 or support@college.edu.'
    },
    {
        keywords: ['library', 'books', 'journals'],
        response: 'The college library is open Monday to Friday, 8:00 AM to 10:00 PM, and Saturday, 9:00 AM to 5:00 PM. Students can also access digital resources online.'
    },
    {
        keywords: ['exam', 'schedule', 'results'],
        response: 'Mid-term exams start from October 15th, and final exams from December 10th. The schedules will be posted on the student dashboard under the Academic tab.'
    }
];

function getResponse(message) {
    if (!message || message.trim() === '') {
        return 'Please say something so I can help you.';
    }

    const lowerMessage = message.toLowerCase();

    // Check matching keywords
    for (const rule of rules) {
        for (const keyword of rule.keywords) {
            if (lowerMessage.includes(keyword)) {
                return rule.response;
            }
        }
    }

    // Default fallback response
    return 'I am sorry, I did not quite understand that. You can ask me about admissions, fees, courses, library, exams, or contact info.';
}

module.exports = {
    getResponse
};
