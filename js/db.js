const sideMenu = document.querySelector ("aside");
const menuBtn = document.querySelector ("#menu-btn");
const closeBtn = document.querySelector ("#close-btn");
const themeToggler =  document.querySelector (".themeToggler");


menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})


function closebtn(){
    document.getElementById(`side`).style.display=`none`;
    document.getElementById(`close-btn`).style.display='none';
}



themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variable');

    themeToggler.querySelector('span:nth-chile(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-chile(2)').classList.toggle('active');
})

function togglethemelight() {
    // Light theme
    document.getElementById('light').classList.add('active');
    document.getElementById('dark').classList.remove('active');
    document.body.style.background = '#f6f6f9';
    document.body.style.color = '#363949';
    document.querySelectorAll('.text, .text1, .text2, .text3').forEach(element => {
        element.style.color = '#363949';
        element.classList.remove('dark-theme');
    });
    document.querySelector('.date').style.background = '#848bc82e';
    document.querySelectorAll('.sales, .expenses, .income, .table, .updates, .online, .offline, .customers').forEach(element => {
        element.style.background = 'white';
    });
}

function togglethemedark() {
    // Dark theme
    document.getElementById('dark').classList.add('active');
    document.getElementById('light').classList.remove('active');
    document.body.style.background = '#181a1e';
    document.body.style.color = 'white';
    document.querySelectorAll('.text, .text1, .text2, .text3').forEach(element => {
        element.style.color = '#FFFFFF'; // Adjust text color for dark theme
        element.classList.add('dark-theme');
    });
    document.querySelector('.date').style.background = 'white'; // Adjust date background color
    document.querySelectorAll('.sales, .expenses, .income, .table, .updates, .online, .offline, .customers').forEach(element => {
        element.style.background = '#1c1d27'; // Adjust background color for dark theme
    });
}
