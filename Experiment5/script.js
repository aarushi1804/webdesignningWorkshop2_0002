let employees = [];

    function addEmployee() {
        let emp = {
            name: document.getElementById("name").value,
            id: document.getElementById("id").value,
            salary: Number(document.getElementById("salary").value),
            department: document.getElementById("dept").value
        };

        employees.push(emp);
        alert("Employee Added Successfully");

        document.getElementById("name").value = "";
        document.getElementById("id").value = "";
        document.getElementById("salary").value = "";
        document.getElementById("dept").value = "";
    }

    function displayEmployees(list = employees) {
        if (list.length == 0) {
            document.getElementById("output").innerHTML = "No records found";
            return;
        }

        let html = `<table>
            <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Salary</th>
                <th>Department</th>
            </tr>`;

        for (let emp of list) {
            html += `<tr>
                <td>${emp.name}</td>
                <td>${emp.id}</td>
                <td>₹${emp.salary}</td>
                <td>${emp.department}</td>
            </tr>`;
        }

        html += `</table>`;
        document.getElementById("output").innerHTML = html;
    }

    function filterSalary() {
        let filtered = employees.filter(emp => emp.salary > 50000);
        displayEmployees(filtered);
    }

    function totalSalary() {
        let total = 0;
        for (let emp of employees) {
            total += emp.salary;
        }
        document.getElementById("output").innerHTML =
            `<b>Total Salary Payout:</b> ₹${total}`;
    }

    function averageSalary() {
        if (employees.length === 0) return;
        let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
        let avg = total / employees.length;
        document.getElementById("output").innerHTML =
            `<b>Average Salary:</b> ₹${avg.toFixed(2)}`;
    }

    function countDepartment() {
        let deptCount = {};

        for (let emp of employees) {
            deptCount[emp.department] =
                (deptCount[emp.department] || 0) + 1;
        }

        let result = "<b>Employees per Department:</b><br>";
        for (let dept in deptCount) {
            result += `${dept}: ${deptCount[dept]}<br>`;
        }

        document.getElementById("output").innerHTML = result;
    }

