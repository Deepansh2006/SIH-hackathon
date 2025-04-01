document.addEventListener('DOMContentLoaded', function() {
    const eventForm = document.getElementById('eventForm');
    const eventsList = document.getElementById('eventsList');

    // Load events from local storage
    loadEvents();

    // Event listener for form submission
    eventForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const eventTitle = document.getElementById('eventTitle').value;
        const eventDate = document.getElementById('eventDate').value;
        const eventTime = document.getElementById('eventTime').value;
        const eventDescription = document.getElementById('eventDescription').value;
        const contactInfo = document.getElementById('contactInfo').value;

        const eventItem = {
            id: Date.now(),
            title: eventTitle,
            date: eventDate,
            time: eventTime,
            description: eventDescription,
            contact: contactInfo,
        };

        saveEvent(eventItem);
        addEventToDOM(eventItem);

        // Clear form after submission
        eventForm.reset();
    });

    function saveEvent(event) {
        const events = getEventsFromLocalStorage();
        events.push(event);
        localStorage.setItem('events', JSON.stringify(events));
    }

    function getEventsFromLocalStorage() {
        return JSON.parse(localStorage.getItem('events')) || [];
    }

    function loadEvents() {
        const events = getEventsFromLocalStorage();
        const now = new Date().getTime();

        events.forEach(event => {
            const eventDate = new Date(event.date + 'T' + event.time).getTime();
            if (eventDate > now) {
                addEventToDOM(event);
            }
        });

        // Remove expired events
        const updatedEvents = events.filter(event => new Date(event.date + 'T' + event.time).getTime() > now);
        localStorage.setItem('events', JSON.stringify(updatedEvents));
    }

    function addEventToDOM(event) {
        const eventItem = document.createElement('div');
        eventItem.classList.add('event-item');
        eventItem.dataset.id = event.id;

        eventItem.innerHTML = `
            <h3>${event.title}</h3>
            <p><strong>Date:</strong> ${event.date} at ${event.time}</p>
            <p>${event.description}</p>
            <p class="contact-info"><strong>Contact:</strong> ${event.contact}</p>
        `;

        eventsList.appendChild(eventItem);
    }
});
