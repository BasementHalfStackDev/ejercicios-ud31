// Function to add listener to all p elements of table id
const addListenersTo = (tableid) => {
    // get table and p elements
    let table = document.getElementById(tableid);
    let ps = table.getElementsByTagName('p');

    // Loop through p elements and add listener with function to each p
    for (let i = 0; i < ps.length; i++) {
        let p = ps[i];
        p.addEventListener('click', () => {
            window.alert("You clicked a p element within the table " + tableid);
            });
    }
}

// Function to add listener to all p elements of body
const addListenersToBody = () => {
    // Get Ps from body excluding the ones from the tables
    let bodyPs = document.querySelectorAll('body p:not(table p)');

    // For each P, add listener with function
    bodyPs.forEach(p => {
        p.addEventListener('click', () => {
            window.alert('You clicked a p element in the body');
        });
    });
}

// Add listener to wait for content to load
document.addEventListener("DOMContentLoaded", () => {
    // Apply listeners to all elements
    addListenersTo("table1");
    addListenersTo("table2");
    addListenersToBody();
});
