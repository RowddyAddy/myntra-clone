const images = document.querySelectorAll('.image-container img');
        let position = 0;

        function rotateImages() {
            images.forEach((image, index) => {
                const offset = position + index * (100 + 10);
                image.style.transform = `translateX(${offset}px)`;
            });

            position -= 1;

            // If all images are moved off-screen, reset position to loop
            if (position < -1100) { // Assuming each image has a width of 100px and there are 10 images
                position = 0;
            }
        }

        // Update the rotation every 50 milliseconds (adjust as needed)
        setInterval(rotateImages, 50)


        const image = document.querySelectorAll('.im-container img');
        let positions = 0;

        function rotateOtherImages() {
            image.forEach((image, index) => {
                const offset = positions + index * (100 + 10);
                image.style.transform = `translateX(${offset}px)`;
            });

            positions -= 1;

            // If all images are moved off-screen, reset position to loop
            if (positions < -1100) { // Assuming each image has a width of 100px and there are 10 images
                positions = 0;
            }
        }

        // Update the rotation every 50 milliseconds (adjust as needed)
        setInterval(rotateOtherImages, 50)

