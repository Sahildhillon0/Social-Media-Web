const menuItems = document.querySelectorAll(".menu-item");

const messageNotification = document.querySelector(`#messages-notifications`);
const messages = document.querySelector(`.messages`);
const message = document.querySelectorAll(`.message`);
const messageSearch = document.querySelector(`#search-message`);

// console.log(messageSearch);

const changeActiveItems = () => {
    menuItems.forEach(item => {
        item.classList.remove(`active`);
    })
}

menuItems.forEach(item => {
    item.addEventListener(`click`, () => {
        changeActiveItems();
        item.classList.add(`active`);

        if (item.id === `Theme`) {
            theme();
            console.log(x);
            // document.querySelector(`.feed`).style.background=`#525252`;
        }


        if (item.id != `notifications`) {
            let popup = document.querySelector(`.notification-popup`);
            popup.style.display = `none`;
        }
        else {
            let popup = document.querySelector(`.notification-popup`);
            popup.style.display = `block`;
            document.querySelector(`#notifications .notification-count`).style.display = `none`;
        }

    })
})

const searchMessage = () => {
    const val = messageSearch.value.trim().toLowerCase();
    console.log("Search query:", val);

    message.forEach(chat => {
        let names = [];
        chat.querySelectorAll(`h5`).forEach(element => {
            names.push(element.textContent.trim().toLowerCase());
        });
        console.log("Names in current chat:", names);

        if (names.includes(val)) {
            chat.style.display = "flex";
            console.log("Match found in:", names);
        } else {
            chat.style.display = "none";
        }
    });
}

messageSearch.addEventListener("keyup", searchMessage);




messageNotification.addEventListener(`click`, () => {
    // console.log(messageNotification);
    // console.log(messages);
    messages.style.boxShadow = "0 0 1rem var(--color-primary)";
    messageNotification.querySelector(".notification-count").style.display = "none";
    setTimeout(() => {
        messages.style.boxShadow = "none";
    }, 2000);

})

let darkTheme = false;

function theme() {
    if (!darkTheme) {
        document.body.style.background = `#222831`;
        document.getElementById(`logo`).style.color = `white`;
        document.getElementById(`navbar`).style.background = `#393E46`;
        darkTheme = true;
    } else {
        document.body.style.background = `#f0eef6`;
        document.getElementById(`logo`).style.color = `black`;
        document.getElementById(`navbar`).style.background = `#ffffff`;
        darkTheme = false;
    }
}

function explore23(){
    document.getElementById(`stories`).style.display=`none`;
    document.getElementById(`input`).style.display=`none`;
}
function home(){
    document.getElementById(`stories`).style.display=``;
    document.getElementById(`input`).style.display=``;
}

function settings(){
    const set=document.querySelector(`.middle`);
    alert("Sorry! currently working on it.")
}


function primary() {
    document.querySelector(`#general`).classList.remove(`active`);
    document.querySelector(`#request`).classList.remove(`active1`);
    document.querySelector(`#primary`).classList.add(`active`);
    document.getElementById(`msgs`).innerHTML = `<div class="message">
    <div class="profile-picture">
        <img src="./images/bmw.jpg" alt="">
    </div>
    <div class="message-body">
        <h5>Mikey-Kun</h5>
        <p class="text-bold">Sup! homie</p>
    </div>
</div>
<div class="message">
    <div class="profile-picture">
        <img src="./images/bmw.jpg" alt="">
    </div>
    <div class="message-body">
        <h5>Liza</h5>
        <p class="text-bold">hi!</p>
    </div>
</div>
<div class="message">
    <div class="profile-picture">
        <img src="./images/bmw.jpg" alt="">
    </div>
    <div class="message-body">
        <h5>Albert</h5>
        <p class="text-bold">Will be soon</p>
    </div>
</div>
<div class="message">
    <div class="profile-picture">
        <img src="./images/bmw.jpg" alt="">
    </div>
    <div class="message-bold">
        <h5>Sherlock</h5>
        <p class="text-muted">lmao!</p>
    </div>
</div>
<div class="message">
    <div class="profile-picture">
        <img src="./images/bmw.jpg" alt="">
    </div>
    <div class="message-body">
        <h5>Stephen-Hawkins</h5>
        <p class="text-bold">You'll handle Island</p>
    </div>
</div>
<div class="message">
    <div class="profile-picture">
        <img src="./images/bmw.jpg" alt="">
    </div>
    <div class="message-body">
        <h5>Shashank</h5>
        <p class="text-muted">Sup! homie</p>
    </div>
</div>`
}
function requests() {
    document.querySelector(`#primary`).classList.remove(`active`);
    document.querySelector(`#general`).classList.remove(`active`);
    document.querySelector(`#request`).classList.add(`active1`);
    document.getElementById(`msgs`).innerHTML = `<div class="message">
    <div class="profile-picture">
        <img src="./images/bmw.jpg" alt="">
    </div>
    <div class="message-body">
        <h5>Stephen-Hawkins</h5>
        <p class="text-bold">You'll handle Island</p>
    </div>
</div>
<div class="message">
    <div class="profile-picture">
        <img src="./images/bmw.jpg" alt="">
    </div>
    <div class="message-body">
        <h5>Shashank</h5>
        <p class="text-muted">Sup! homie</p>
    </div>
</div>`
}

function general() {
    document.getElementById(`msgs`).innerHTML = `<div class="message">
    <div class="profile-picture">
        <img src="./images/bmw.jpg" alt="">
    </div>
    <div class="message-body">
        <h5>Mikey-Kun</h5>
        <p class="text-bold">Sup! homie</p>
    </div>
</div>
<div class="message">
    <div class="profile-picture">
        <img src="./images/bmw.jpg" alt="">
    </div>
    <div class="message-body">
        <h5>Liza</h5>
        <p class="text-bold">hi!</p>
    </div>
</div>`;
    document.querySelector(`#primary`).classList.remove(`active`);
    document.querySelector(`#request`).classList.remove(`active1`);
    document.querySelector(`#general`).classList.add(`active`);

}

function liked1(){
    document.getElementById(`liked1`).style.color=`red`;
}
function liked2(){
    document.getElementById(`liked2`).style.color=`red`;
}
function liked3(){
    document.getElementById(`liked3`).style.color=`red`;
}
function liked4(){
    document.getElementById(`liked4`).style.color=`red`;
}

function post(){
    const con=document.getElementById(`create-post`).value;
    console.log(con);
    document.getElementById(`content`).innerHTML=`<h2>${con}</h2>`;
    document.getElementById(`main-content`).style.display=`block`;
    document.getElementById(`content`).classList.add(`main-content`);
}