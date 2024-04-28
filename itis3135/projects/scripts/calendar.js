const events = [
  { 
    date: "2024-04-06", 
    title: "Practice: FallGuys", 
    category: "practice", 
    where: "UREC", 
    time: "5:30 PM",
    when: "2024-04-05" 
  },
  { 
    date: "2024-04-23", 
    title: "Playoff: FallGuys vs. Block Party", 
    category: "playoff", 
    where: "BELK", 
    time: "7:00 PM",
    when: "2024-04-22"  
  },
  { 
    date: "2024-04-25", 
    title: "Playoff: FallGuys vs. Sevine Sharks", 
    category: "playoff", 
    where: "BELK", 
    time: "9:00 PM",
    when: "2024-04-24" 
  },
  {
    date: "2024-04-04",
    title: "Game: FallGuys vs. Kinky Sets",
    category: "game",
    where: "BELK",
    time: "7:00pm",
    when: "2024-04-03" 
  },
  { 
    date: "2024-04-13", 
    title: "Practice: FallGuys", 
    category: "practice", 
    where: "UREC", 
    time: "5:30 PM" ,
    when: "2024-04-12" 
  }, 
  { 
    date: "2024-04-20", 
    title: "Practice: FallGuys", 
    category: "practice", 
    where: "UREC", 
    time: "5:30 PM" ,
    when: "2024-04-21" 
  }

];

const calendar = document.getElementById('calendar');
const prevMonthButton = document.getElementById('prevMonth');
const nextMonthButton = document.getElementById('nextMonth');
const eventInfo = document.getElementById('eventInfo');

let currentMonth = (new Date()).getMonth();

prevMonthButton.addEventListener('click', () => {
  currentMonth--;
  renderCalendar(currentMonth, 2024);
});

nextMonthButton.addEventListener('click', () => {
  currentMonth++;
  renderCalendar(currentMonth, 2024);
});

function renderCalendar(month, year) {
  calendar.innerHTML = '';
  eventInfo.innerHTML = '';

  const filteredEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate.getMonth() === month && eventDate.getFullYear() === year;
  });

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const header = document.createElement('h2');
  header.textContent = `${monthNames[month]} ${year}`;
  calendar.appendChild(header);

  const table = document.createElement('table');
  table.className = 'calendar-table';
  calendar.appendChild(table);

  // Create table header with days of the week
  const thead = document.createElement('thead');
  const tr = document.createElement('tr');
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  weekdays.forEach(day => {
    const th = document.createElement('th');
    th.textContent = day;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);

  // Calculate the offset for the first day of the month
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  // Create table body with calendar days
  const tbody = document.createElement('tbody');
  let date = new Date(year, month, 1);
  let row = document.createElement('tr');

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    const td = document.createElement('td');
    row.appendChild(td);
  }

  while (date.getMonth() === month) {
    const td = document.createElement('td');
    td.textContent = date.getDate();

    if (date.getMonth() === (new Date()).getMonth() && date.getDate() === (new Date()).getDate()) {
      td.classList.add('current-date');
    }

    const eventList = document.createElement('ul');
    filteredEvents.forEach(event => {
      const eventDate = new Date(event.date);
      if (eventDate.getDate() === date.getDate()) {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.textContent = event.title;
        link.href = '#';
        link.addEventListener('click', () => {
          showEventInfo(event.title, event.when, event.time, event.where);
        });
        li.appendChild(link);
        eventList.appendChild(li);
      }
    });
    td.appendChild(eventList);

    row.appendChild(td);

    if (date.getDay() === 6) {
      // Start a new row for the next week
      tbody.appendChild(row);
      row = document.createElement('tr');
    }

    date.setDate(date.getDate() + 1);
  }

  // Add remaining empty cells for the last week
  for (let i = date.getDay(); i < 7; i++) {
    const td = document.createElement('td');
    row.appendChild(td);
  }

  tbody.appendChild(row);
  table.appendChild(tbody);
}

function showEventInfo(title, when, time, where) {
  eventInfo.innerHTML = `
    <h3>${title}</h3>
    <p>Date: ${when}</p>
    <p>Time: ${time}</p>
    <p>Location: ${where}</p>
  `;
}

renderCalendar(currentMonth, 2024);
