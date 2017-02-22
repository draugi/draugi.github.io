var link = document.querySelector(".search-btn");
           var popup = document.querySelector(".search-window");

           link.addEventListener("click", function(event) {
                event.preventDefault();
                popup.classList.toggle("search-window-show");
            });