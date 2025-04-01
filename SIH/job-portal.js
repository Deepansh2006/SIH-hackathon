document.addEventListener('DOMContentLoaded', function() {
    const jobForm = document.getElementById('jobForm');
    const jobsList = document.getElementById('jobsList');

    // Load jobs from local storage
    loadJobs();

    // Event listener for form submission
    jobForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const jobTitle = document.getElementById('jobTitle').value;
        const companyName = document.getElementById('companyName').value;
        const location = document.getElementById('location').value;
        const jobDescription = document.getElementById('jobDescription').value;
        const contactInfo = document.getElementById('contactInfo').value;

        const jobItem = {
            id: Date.now(),
            title: jobTitle,
            company: companyName,
            location: location,
            description: jobDescription,
            contact: contactInfo,
        };

        saveJob(jobItem);
        addJobToDOM(jobItem);

        // Clear form after submission
        jobForm.reset();
    });

    function saveJob(job) {
        const jobs = getJobsFromLocalStorage();
        jobs.push(job);
        localStorage.setItem('jobs', JSON.stringify(jobs));
    }

    function getJobsFromLocalStorage() {
        return JSON.parse(localStorage.getItem('jobs')) || [];
    }

    function loadJobs() {
        const jobs = getJobsFromLocalStorage();
        jobs.forEach(job => {
            addJobToDOM(job);
        });
    }

    function addJobToDOM(job) {
        const jobItem = document.createElement('div');
        jobItem.classList.add('job-item');
        jobItem.dataset.id = job.id;

        jobItem.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Location:</strong> ${job.location}</p>
            <p>${job.description}</p>
            <p class="contact-info"><strong>Contact:</strong> ${job.contact}</p>
        `;

        jobsList.appendChild(jobItem);
    }
});

