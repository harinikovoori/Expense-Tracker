let expense_per_category = [0, 0, 0, 0, 0]; // Adjusted to match the number of default categories
var count = 5; // Initial count to match the number of default categories

update_sum();

function update_sum() {
    var sum = document.querySelectorAll(".sum");
    for (var i = 0; i < sum.length; i++) {
        sum[i].innerHTML = " - " + expense_per_category[i] + " Rs. spent";
    }
}

function add_expense() {
    var amount = document.getElementsByName("amount")[0].value;
    var categoryIndex = document.getElementsByName("category")[0].selectedIndex;
    var date = document.getElementsByName("date")[0].value;
    var note = document.getElementsByName("note")[0].value;
    var selected = document.getElementsByName("category")[0].options[categoryIndex].value;

    if (amount && date && note && selected) {
        alert("Successfully added expense!");

        var table = document.querySelector(".expense-table");
        var new_row = document.createElement("tr");
        new_row.style.borderBottom = "1px solid white";
        new_row.innerHTML = `
            <td>${amount}</td>
            <td>${selected}</td>
            <td>${date}</td>
            <td>${note}</td>
        `;
        table.appendChild(new_row);

        expense_per_category[categoryIndex] = parseInt(expense_per_category[categoryIndex]) + parseInt(amount);
        update_sum();

        document.querySelector(".add-new-expense").style.display = "none";
    } else {
        alert("Please enter all details!");
    }
}

function add_category() {
    var new_category_value = document.getElementsByName("new-category")[0].value;
    if (new_category_value) {
        var dropdown = document.getElementsByName("category")[0];
        var available_categories = document.querySelector(".available-categories");
        
        var new_category_option = document.createElement("option");
        new_category_option.value = new_category_value;
        new_category_option.innerText = new_category_value;
        dropdown.appendChild(new_category_option);

        expense_per_category.push(0);
        count++;

        var new_category_span = document.createElement("span");
        new_category_span.innerHTML = `${new_category_value} <span class="sum"> - 0 Rs. spent</span>`;
        available_categories.appendChild(new_category_span);

        document.querySelector(".add-category").style.display = "none";
        update_sum();
    }
}

function add_category_page() {
    var categoryForm = document.querySelector(".add-category");
    categoryForm.style.display = categoryForm.style.display === "block" ? "none" : "block";
}

function add_expense_page() {
    var expenseForm = document.querySelector(".add-new-expense");
    expenseForm.style.display = expenseForm.style.display === "block" ? "none" : "block";
}