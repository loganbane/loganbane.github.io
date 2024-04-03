const persons = [];
const salaries = [];

const addSalary = () => {
    const nameInput = document.getElementById('name');
    const salaryInput = document.getElementById('salary');
    const name = nameInput.value.trim();
    const salary = parseFloat(salaryInput.value.trim());
    if (name === '' || isNaN(salary)) {
        alert('Please enter valid name and numeric salary.');
        return;
    }
    persons.push(name);
    salaries.push(salary);
    nameInput.value = '';
    salaryInput.value = '';
    nameInput.focus();
    populateDropdown();
}

const modifySalary = () => {
    const modifyDropdown = document.getElementById('modify');
    const selectedIndex = modifyDropdown.selectedIndex;
    const newName = modifyDropdown.options[selectedIndex].text;
    const newSalary = parseFloat(document.getElementById('newSalary').value.trim());
    if (isNaN(newSalary)) {
        alert('Please enter a valid numeric salary.');
        return;
    }
    salaries[selectedIndex] = newSalary;
    document.getElementById('newSalary').value = '';
}

const displayResults = () => {
    const resultsDiv = document.getElementById('results');
    const averageSalary = salaries.reduce((acc, curr) => acc + curr, 0) / salaries.length;
    const highestSalary = Math.max(...salaries);
    resultsDiv.innerHTML = `
        <h2>Results</h2>
        <p>Average Salary: ${averageSalary}</p>
        <p>Highest Salary: ${highestSalary}</p>
    `;
}

const displaySalary = () => {
    const tableBody = document.querySelector('#results_table tbody');
    tableBody.innerHTML = '';
    for (let i = 0; i < persons.length; i++) {
        const newRow = `<tr><td>${persons[i]}</td><td>${salaries[i]}</td></tr>`;
        tableBody.insertAdjacentHTML('beforeend', newRow);
    }
}

const populateDropdown = () => {
    const modifyDropdown = document.getElementById('modify');
    modifyDropdown.innerHTML = ''; 

    persons.forEach((person) => {
        const option = document.createElement('option');
        option.text = person;
        modifyDropdown.add(option);
    });
}

document.getElementById('addBtn').addEventListener('click', addSalary);
document.getElementById('modifyBtn').addEventListener('click', modifySalary);
document.getElementById('displayResultsBtn').addEventListener('click', displayResults);
document.getElementById('displaySalaryBtn').addEventListener('click', displaySalary);
document.getElementById('name').focus();
populateDropdown();