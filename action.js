        let lastScrollTop = 0;
        const header = document.querySelector('.header');

        window.addEventListener("scroll", function() {
            let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            if (currentScroll > lastScrollTop) {
                // Scroll down
                header.style.top = "-100px"; // Adjust the value as needed
            } else {
                // Scroll up
                header.style.top = "0";
            }
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        }, false);

        function hideMenu() {
            document.getElementById('navLinks').style.display = 'none';
        }

        function showMenu() {
            document.getElementById('navLinks').style.display = 'flex';
        }