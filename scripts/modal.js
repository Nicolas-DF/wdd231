
const courseDetails = document.querySelector('#course-details');

function displayCourseDetails(course) {
    courseDetails.innerHTML = '';
    courseDetails.innerHTML = `
        <button id="closeModal">❌</button>
        <h2>${course.subject} ${course.number}</h2>
        <h3>${course.title}</h3>
        <p><strong>Credits</strong>: ${course.credits}</p>
        <p><strong>Certificate</strong>: ${course.certificate}</p>
        <p>${course.description}</p>
        <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
        `;
    courseDetails.showModal();

    //Closing modal
    document.querySelector('#closeModal').addEventListener('click', () => {
        courseDetails.close();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const courseContainer = document.querySelector('.courses');

    courseContainer.addEventListener('click', () => {
        const card = event.target.closest('.course');
        if (!card) return;

        const course = courses.find(c => `${c.subject} ${c.number}` === card.textContent);

        if (course) {
            displayCourseDetails(course);
        }
    });
});