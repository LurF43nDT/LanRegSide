function startCountdown(targetDate) {
            function updateCountdown() {
                const now = new Date().getTime();
                const distance = targetDate - now;

                if (distance <= 0) {
                    document.getElementById("countdown").innerText = "LANet har startet!";
                    return;
                }

                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
                document.getElementById("countdown").innerText = `${days}d ${hours}t ${minutes}m ${seconds}s`;
            }

            setInterval(updateCountdown, 1000);
        }
        

        const lanDate = new Date("2025-04-18T18:00:00").getTime(); 
        startCountdown(lanDate);
        

        