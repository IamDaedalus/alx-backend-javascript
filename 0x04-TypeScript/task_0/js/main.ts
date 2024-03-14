interface Student {
    firstName: string; 
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'James',
    lastName: 'Bond',
    age: 42,
    location: 'London'
};

const student2: Student = {
    firstName: 'Paul',
    lastName: 'Atreides',
    age: 17,
    location: 'Arrakeen'
};

const studentsList: Student[] = [student1, student2];

let table = document.createElement('table');

for (let i = 0; i < studentsList.length; i++) {
    let row = table.insertRow();
    let name = row.insertCell();
    let location = row.insertCell();

    name.innerHTML = studentsList[i].firstName;
    location.innerHTML = studentsList[i].location;
}

document.body.appendChild(table);
