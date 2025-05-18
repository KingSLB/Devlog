document.addEventListener('DOMContentLoaded', function() {
const timelineData = [
    {
        date: 'Sep 2016 - Nov 2016',
        title: 'Intern Admin',
        description: 'Help manage paperwork and used IT skills to solve printer issues and computer problems such as office suite.'
    },
    {
        date: 'Nov 2016 - Oct 2019',
        title: 'IT Support Intern',
        description: 'Helped install office suite to laptops for clients use, set up clients on to the servers to be able to access files and applications, communicated with telephone service providers for any issues and fixed and set up printer for client use.'
    },
    {
        date: 'Dec 2022',
        title: 'Educators Assistant',
        description: 'Did marking  for two weeks.'
    },
    {
        date: 'Jun 2023 - Jul 2024',
        title: 'Kitchen Staff/ Cashier',
        description: 'Did cooking and cleaning of kicthen and restuarant as well as handled the money coming in and out of business giving daily report and sum up for each business day.'
    },
];

    const timeline = document.getElementById('timeline');

    timelineData.forEach((item, index) => {
        let entry = document.createElement('div');
        entry.classList.add('timeline-entry');
        entry.setAttribute('id', 'entry-' + index);

        let dot = document.createElement('div');
        dot.classList.add('timeline-dot');

        let date = document.createElement('div');
        date.textContent = item.date;
        date.classList.add('timeline-date');

        let content = document.createElement('div');
        content.classList.add('timeline-content');
        content.setAttribute('id', 'content-' + index);

        let title = document.createElement('h3');
        title.textContent = item.title;

        let description = document.createElement('p');
        description.textContent = item.description;
        description.style.display = 'none'; // Initially hide the description

        // Click event to toggle the description visibility
        entry.addEventListener('click', function() {
            description.style.display = description.style.display === 'none' ? 'block' : 'none';
        });

        content.appendChild(title);
        content.appendChild(description);

        entry.appendChild(dot);
        entry.appendChild(date);
        entry.appendChild(content);

        timeline.appendChild(entry);
    });
});
