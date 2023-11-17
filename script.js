window.addEventListener('load', function() {
    let countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();

    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('minutes').innerHTML = `${minutes}`;
        document.getElementById('seconds').innerHTML = `${seconds}`;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById('timer').innerHTML = 'EXPIRED';
        }
    }, 1000);
});
