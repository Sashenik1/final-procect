function updateDate() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    let formattedDate = now.toLocaleDateString("en-UK", options).toUpperCase();
    formattedDate = formattedDate.replace(/(\d{1,2}) (\w+) (\d{4})/, '$2 $1, $3');

    document.getElementById("date1").textContent = formattedDate;
    document.getElementById("date2").textContent = formattedDate;
    document.getElementById("date3").textContent = formattedDate;
}
updateDate();



function toggleMenu() {
    document.body.classList.toggle('open-mobile-menu');
    document.querySelector(".hamburger").classList.toggle('is-active');
}