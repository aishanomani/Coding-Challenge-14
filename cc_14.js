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
    resolveButton.addEventListener("click", function () { // Event listener to resolve card when button is clicked
        ticketContainer.removeChild(ticket);
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

// Test Cases
addSupportTicket("Ambika Rao", "Unable to reset password", "High"); // Adding customer 1
addSupportTicket("Carlos Rangel", "Error displayed on dashboard", "Medium"); // Adding customer 2
addSupportTicket("Ishaan Goel", "Delayed loading time", "Low"); // Adding customer 3

highlightHighPriorityTickets();