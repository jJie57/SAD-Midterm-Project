function updateTableAndGPA() {
    const tableBody = document.querySelector("#subjectTable tbody");
    const gpaResult = document.getElementById("gpaResult");
    tableBody.innerHTML = "";
    let totalPoints = 0;
    let totalUnits = 0;

    subjects.forEach((sub) => {
        const row = document.createElement("tr");
        row.innerHTML = <td>${sub.name}</td><td>${sub.grade.toFixed(2)}</td><td>${sub.units}</td>;
        tableBody.appendChild(row);
        totalPoints += sub.grade * sub.units;
        totalUnits += sub.units;
    });

    const gpa = totalUnits > 0 ? (totalPoints / totalUnits) : 0;
    gpaResult.textContent = gpa.toFixed(2);
}
