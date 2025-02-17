document.addEventListener("DOMContentLoaded", function() {
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');

    let dd = document.getElementById('dd');
    let hh = document.getElementById('hh');

    let day_dot = document.querySelector('.day_dot');
    let hr_dot = document.querySelector('.hr_dot');

    const lanDate = new Date("2025-04-18T18:12:00").getTime();

    let x = setInterval(function() {
        let now = new Date().getTime();
        let distance = lanDate - now;

        // Time calculations for days and total hours
        let d = Math.floor(distance / (1000 * 60 * 60 * 24));
        let h = Math.floor(distance / (1000 * 60 * 60)); // Total hours

        // Output the result in the element with id
        days.innerHTML = d + "<br><span>Days</span>";
        hours.innerHTML = h + "<br><span>Hours</span>";

        // Animate stroke
        dd.style.strokeDashoffset = 440 - (440 * d) / 365;
        hh.style.strokeDashoffset = 440 - (440 * (h % 24)) / 24; // Use modulo to animate within 24 hours

        // Animate circle dots
        day_dot.style.transform = `rotateZ(${d * 0.986}deg)`;
        hr_dot.style.transform = `rotateZ(${(h % 24) * 15}deg)`; // Use modulo to animate within 24 hours
    }, 1000);
});




