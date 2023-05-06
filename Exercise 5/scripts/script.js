// Function to add listener to all images
const addImageEventListeners = () => {
    // Get all images from the side bar
    let images = document.querySelectorAll('.mini-pictures img');

    // Loop for each image
    images.forEach((image) => {
        // Add event listener on click
        image.addEventListener('click', () => {
            // Gets the image source
            let imageSrc = image.src;

            // Get the big image container element
            let imageContainer = document.querySelector('.image-container img');
            // Set the source of the big image container to the clicked sidebar image
            imageContainer.src = imageSrc;
        });
    });
}



// Add listener to wait for content to load
document.addEventListener("DOMContentLoaded", () => {
    // Execute function to add listeners
    addImageEventListeners();
});