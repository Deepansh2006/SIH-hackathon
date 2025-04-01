document.addEventListener('DOMContentLoaded', function() {
    const projectForm = document.getElementById('projectForm');
    const projectsList = document.getElementById('projectsList');

    projectForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const studentName = document.getElementById('studentName').value;
        const projectDescription = document.getElementById('projectDescription').value;
        const projectAmount = document.getElementById('projectAmount').value;

        const projectElement = document.createElement('div');
        projectElement.classList.add('project');

        projectElement.innerHTML = `
            <h3>${studentName}</h3>
            <p>${projectDescription}</p>
            <p>Amount Requested: $${projectAmount}</p>
            <a href="payment.html" class="btn">Pay</a>
        `;

        projectsList.appendChild(projectElement);

        // Clear form fields
        projectForm.reset();
    });
});
