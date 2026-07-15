// A program demonstrating dependent task execution chained via .then() Promises

// Task 1: Fetch student ID by name
function getStudentId(studentName) {
    return new Promise((resolve, reject) => {
        console.log(`Starting Task 1: Fetching database record for student "${studentName}"...`);
        setTimeout(() => {
            if (!studentName) {
                reject(new Error('Student name is required.'));
            } else {
                const dummyId = '70133';
                resolve({ name: studentName, id: dummyId });
            }
        }, 1000); // 1-second delay
    });
}

// Task 2: Fetch courses registered to the student ID
function getRegisteredCourses(studentObj) {
    return new Promise((resolve, reject) => {
        console.log(`Starting Task 2: Fetching courses for Student ID ${studentObj.id}...`);
        setTimeout(() => {
            if (studentObj.id !== '70133') {
                reject(new Error(`No courses found for student ID ${studentObj.id}.`));
            } else {
                const registeredList = ['Node.js Programming', 'Cloud Architectures', 'Web Security'];
                resolve({ student: studentObj.name, courses: registeredList });
            }
        }, 1000); // 1-second delay
    });
}

// Task 3: Fetch course schedule for the first registered course
function getCourseSchedule(enrollmentObj) {
    return new Promise((resolve, reject) => {
        const primaryCourse = enrollmentObj.courses[0];
        console.log(`Starting Task 3: Fetching weekly schedule for course "${primaryCourse}"...`);
        setTimeout(() => {
            if (!primaryCourse) {
                reject(new Error('No primary course available.'));
            } else {
                const scheduleDetails = 'Mondays and Wednesdays at 10:00 AM in Room 402';
                resolve({
                    student: enrollmentObj.student,
                    course: primaryCourse,
                    schedule: scheduleDetails
                });
            }
        }, 1000); // 1-second delay
    });
}

// Chaining the Promises sequentially using .then()
console.log('Initiating Promise Chain demonstration...\n');

getStudentId('Ansh Patel')
    .then((studentObj) => {
        console.log(`Task 1 Completed: Found ID "${studentObj.id}" for ${studentObj.name}.\n`);
        // Return the promise of the next task
        return getRegisteredCourses(studentObj);
    })
    .then((enrollmentObj) => {
        console.log(`Task 2 Completed: Registered courses for ${enrollmentObj.student}: ${enrollmentObj.courses.join(', ')}.\n`);
        // Return the promise of the third task
        return getCourseSchedule(enrollmentObj);
    })
    .then((resultObj) => {
        console.log('Task 3 Completed: Schedule loaded successfully.');
        console.log(`- Student: ${resultObj.student}`);
        console.log(`- Course: ${resultObj.course}`);
        console.log(`- Schedule: ${resultObj.schedule}\n`);
        console.log('=== Promise Chain demonstration completed ===');
    })
    .catch((error) => {
        // Single catch handler to capture any error thrown in the chain
        console.error('An error occurred during promise execution:', error.message);
    });
