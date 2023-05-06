const updateClock = () => {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    clock.textContent = `${hours}:${minutes}:${seconds}`;
}

// Add listener to wait for content to load
document.addEventListener("DOMContentLoaded", () => {
    let clock = document.getElementById('clock');
    // Apply listeners to all elements
    updateClock();
    setInterval(updateClock, 1000);
});