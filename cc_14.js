// Task 1: Creating the Base Structure
console.log("********** Base Structure Created **********");

// Task 2: Adding Support Tickets Dynamically
console.log("********** Support Tickets Dynamic Addition **********");
function addSupportTicket(customerName, issueDescription, priorityLevel) { // Function to add employee card dynamically
 
    const ticket = document.createElement("div"); // Create the main ticket container
    ticket.setAttribute("class", "support-ticket"); 
    const nameHeading = document.createElement("h4"); // Heading for the customer name
    nameHeading.textContent = customerName;
    const issueParagraph = document.createElement("p"); // Paragraph for the issue description
    issueParagraph.textContent = issueDescription;
    const priorityLabel = document.createElement("span"); // Label for priority
    priorityLabel.textContent = `Priority: ${priorityLevel}`;
    priorityLabel.setAttribute("class", "priority-label");
        if (priorityLevel.toLowerCase() === "high") { // Added for Task 3
        ticket.classList.add("high-priority"); // Add class for high priority
        }
    const resolveButton = document.createElement("button"); // Resolve button
    resolveButton.textContent = "Resolve";
    resolveButton.setAttribute("class", "resolve-button");
    resolveButton.addEventListener("click", function (event) { // Added for Task 4
        event.stopPropagation(); // Prevent event bubbling to the container
        ticketContainer.removeChild(ticket); // Resolve only the specific card
    });

    ticket.addEventListener("dblclick", function () { // Added for Task 5
        enableEditing(ticket, nameHeading, issueParagraph, priorityLabel); // Enable editing by double-clicking
    });

    ticket.appendChild(nameHeading);  // Append heading to ticket
    ticket.appendChild(issueParagraph); // Append paragraph to ticket
    ticket.appendChild(priorityLabel); // Append label to ticket
    ticket.appendChild(resolveButton); // Append button to ticket
    ticketContainer.appendChild(ticket); // Append ticket to container
}

// Task 3: Converting NodeLists to Arrays for Bulk Updates
console.log("********** Highlighting High Priority Tickets **********");
function highlightHighPriorityTickets() {
    const highPriorityTickets = document.querySelectorAll(".high-priority"); // Select high priority tickets
    Array.from(highPriorityTickets).forEach(ticket => {
        ticket.style.backgroundColor = "#ff6666"; // Change background to red 
    });
}

// Task 4: Implementing Ticket Resolution with Event Bubbling (Part of Task 4 is in Task 2)
console.log("********** Support Ticket Resolution with Event Bubbling **********");
document.getElementById("ticketContainer").addEventListener("click", function (event) {
    if (event.target.classList.contains("support-ticket")) {
        console.log("Ticket Has Been Clicked:", event.target); // Logs message if ticket is clicked
    } else {
        console.log("Click occurred within the ticket container but outside a ticket."); // Logs message if click is within container but outside ticket
    }
});

// Task 5: Additional Challenge – Inline Editing of Support Tickets (Part of Task 5 is in Task 2)
console.log("********** Inline Editing for Support Tickets **********");
function enableEditing(ticket, nameElement, issueElement, priorityElement) {
    const nameInput = document.createElement("input"); // Edit name
    nameInput.type = "text";
    nameInput.value = nameElement.textContent;
    
    const issueInput = document.createElement("input"); // Edit issue
    issueInput.type = "text";
    issueInput.value = issueElement.textContent;

    const priorityInput = document.createElement("input"); // Edit priority level
    priorityInput.type = "text";
    priorityInput.value = priorityElement.textContent;
    
    const saveButton = document.createElement("button"); // Save button
    saveButton.textContent = "Save";
    saveButton.classList.add("save-btn");
    
    ticket.innerHTML = ""; // Clear existing elements
    ticket.appendChild(nameInput);
    ticket.appendChild(issueInput);
    ticket.appendChild(priorityInput);
    ticket.appendChild(saveButton);
    
    saveButton.addEventListener("click", function () {
        nameElement.textContent = nameInput.value;
        issueElement.textContent = issueInput.value;
        priorityElement.textContent = priorityInput.value;
        
        ticket.innerHTML = "";
        ticket.appendChild(nameElement);
        ticket.appendChild(issueElement);
        ticket.appendChild(priorityElement);
        ticket.appendChild(resolveButton);
    });
}

// Test Cases
addSupportTicket("Ambika Rao", "Unable to reset password", "High"); // Adding customer 1
addSupportTicket("Carlos Rangel", "Error displayed on dashboard", "Medium"); // Adding customer 2
addSupportTicket("Ishaan Goel", "Delayed loading time", "Low"); // Adding customer 3

highlightHighPriorityTickets(); // Adding highlight to all high priority tickets