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
x=false;
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
            if(!x){
                // console.log(`he`);
            let popup = document.querySelector(`.notification-popup`);
            popup.style.display = `block`;
            document.querySelector(`#notifications .notification-count`).style.display = `none`;
            x=true;
            }
            else{
                // console.log(`eh`);
                let popup = document.getElementById(`popup`);
            popup.style.display = `none`;
            x=false;
            }
            
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
        document.body.style.background = `#181a1e`;
        document.body.style.color=`white`;
        document.getElementById(`logo`).style.color = `white`;
        document.getElementById(`navbar`).style.background = `#1c1d27`;
        document.getElementById(`profile`).style.background = `#1c1d27`;
        document.getElementById(`sidebar`).style.background = `#1c1d27`;
        document.getElementById(`right`).style.background = `#1c1d27`;
        document.getElementById(`searchbar`).style.background = `rgb(36 38 43)`;
        document.getElementById(`searchbar1`).style.background = `rgb(36 38 43)`;
        document.getElementById(`input`).style.background = `rgb(36 38 43)`;
        document.getElementById(`popup`).style.background = `#1c1d27`;
        document.getElementById(`feed2`).style.background = `#1c1d27`;
        document.getElementById(`feed3`).style.background = `#1c1d27`;
        document.getElementById(`feed4`).style.background = `#1c1d27`;
        document.getElementById(`feed5`).style.background = `#1c1d27`;
        document.getElementById(`feed6`).style.background = `#1c1d27`;
        document.getElementById(`feed7`).style.background = `#1c1d27`;
        document.getElementById(`feed8`).style.background = `#1c1d27`;
        document.getElementById(`feed9`).style.background = `#1c1d27`;
        document.getElementById(`feed10`).style.background = `#1c1d27`;
        document.getElementById(`feed11`).style.background = `#1c1d27`;
        document.getElementById(`feed12`).style.background = `#1c1d27`;
        document.getElementById(`feed13`).style.background = `#1c1d27`;
        document.getElementById(`feed14`).style.background = `#1c1d27`;
        document.getElementById(`request1`).style.background = `#1c1d27`;
        document.getElementById(`request2`).style.background = `#1c1d27`;
        document.getElementById(`request3`).style.background = `#1c1d27`;
        document.getElementById(`request4`).style.background = `#1c1d27`;
        document.getElementById(`tag1`).style.color = `#ffffff`;
        document.getElementById(`tag2`).style.color = `#ffffff`;
        document.getElementById(`tag3`).style.color = `#ffffff`;
        document.getElementById(`tag4`).style.color = `#ffffff`;
        document.getElementById(`tag5`).style.color = `#ffffff`;
        document.getElementById(`tag6`).style.color = `#ffffff`;
        document.getElementById(`tag7`).style.color = `#ffffff`;

        darkTheme = true;
    } else {
        document.body.style.background = `#f0eef6`;
        document.body.style.color=`hsl(252,30%,10%)`;
        document.getElementById(`logo`).style.color = `black`;
        document.getElementById(`navbar`).style.background = `#ffffff`;
        document.getElementById(`profile`).style.background = `#ffffff`;
        document.getElementById(`sidebar`).style.background = `#ffffff`;
        document.getElementById(`right`).style.background = `#ffffff`;
        document.getElementById(`searchbar`).style.background = `#f0eef6`;
        document.getElementById(`searchbar1`).style.background = `#f0eef6`;
        document.getElementById(`input`).style.background = `#ffffff`;
        document.getElementById(`popup`).style.background = `#ffffff`;
        document.getElementById(`feed2`).style.background = `#ffffff`;
        document.getElementById(`feed3`).style.background = `#ffffff`;
        document.getElementById(`feed4`).style.background = `#ffffff`;
        document.getElementById(`feed5`).style.background = `#ffffff`;
        document.getElementById(`feed6`).style.background = `#ffffff`;
        document.getElementById(`feed7`).style.background = `#ffffff`;
        document.getElementById(`feed8`).style.background = `#ffffff`;
        document.getElementById(`feed9`).style.background = `#ffffff`;
        document.getElementById(`feed10`).style.background = `#ffffff`;
        document.getElementById(`feed11`).style.background = `#ffffff`;
        document.getElementById(`feed12`).style.background = `#ffffff`;
        document.getElementById(`feed13`).style.background = `#ffffff`;
        document.getElementById(`feed14`).style.background = `#ffffff`;
        document.getElementById(`request1`).style.background = `#ffffff`;
        document.getElementById(`request2`).style.background = `#ffffff`;
        document.getElementById(`request3`).style.background = `#ffffff`;
        document.getElementById(`request4`).style.background = `#ffffff`;
        document.getElementById(`tag1`).style.color = `#1c1d27`;
        document.getElementById(`tag2`).style.color = `#1c1d27`;
        document.getElementById(`tag3`).style.color = `#1c1d27`;
        document.getElementById(`tag4`).style.color = `#1c1d27`;
        document.getElementById(`tag5`).style.color = `#1c1d27`;
        document.getElementById(`tag6`).style.color = `#1c1d27`;
        document.getElementById(`tag7`).style.color = `#1c1d27`;
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
    document.getElementById(`msgs`).innerHTML = `<div id="msgs">
    <div class="message">
        <div class="profile-picture">
            <img src="./images/pfp3.jpg" alt="">
        </div>
        <div class="message-body">
            <h5>Mikey-Kun</h5>
            <p class="text-bold">Sup! homie</p>
        </div>
    </div>
    <div class="message">
        <div class="profile-picture">
            <img src="./images/lpost.jpg" alt="">
        </div>
        <div class="message-body">
            <h5>Liza</h5>
            <p class="text-bold">hi!</p>
        </div>
    </div>
    <div class="message">
        <div class="profile-picture">
            <img src="./images/pfp1.jpg" alt="">
        </div>
        <div class="message-body">
            <h5>Albert</h5>
            <p class="text-bold">Will be soon</p>
        </div>
    </div>
    <div class="message">
        <div class="profile-picture">
            <img src="./images/sherlock.jpg" alt="">
        </div>
        <div class="message-bold">
            <h5>Sherlock</h5>
            <p class="text-muted">lmao!</p>
        </div>
    </div>
    <div class="message">
        <div class="profile-picture">
            <img src="./images/stephen.jpg" alt="">
        </div>
        <div class="message-body">
            <h5>Stephen-Hawkins</h5>
            <p class="text-bold">You'll handle Island</p>
        </div>
    </div>
    <div class="message">
        <div class="profile-picture">
            <img src="./images/pfp1.jpg" alt="">
        </div>
        <div class="message-body">
            <h5>Shashank</h5>
            <p class="text-muted">Sup! homie</p>
        </div>
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
function liked5(){
    document.getElementById(`liked5`).style.color=`red`;
}
function like6(){
    document.getElementById(`liked6`).style.color=`red`;
}
function liked7(){
    document.getElementById(`liked7`).style.color=`red`;
}
function liked8(){
    document.getElementById(`liked8`).style.color=`red`;
}
function liked9(){
    document.getElementById(`liked9`).style.color=`red`;
}
function liked10(){
    document.getElementById(`liked10`).style.color=`red`;
}
function liked11(){
    document.getElementById(`liked11`).style.color=`red`;
}
function liked12(){
    document.getElementById(`liked12`).style.color=`red`;
}
function liked13(){
    document.getElementById(`liked13`).style.color=`red`;
}
function liked14(){
    document.getElementById(`liked14`).style.color=`red`;
}

function post(){
    const con=document.getElementById(`create-post`).value;
    console.log(con);
    document.getElementById(`content`).innerHTML=`<h2>${con}</h2>`;
    document.getElementById(`main-content`).style.display=`block`;
    document.getElementById(`content`).classList.add(`main-content`);
}

function accept1(){
    document.getElementById(`request1`).style.display=`none`;
}
function accept2(){
    document.getElementById(`request2`).style.display=`none`;
}
function accept3(){
    document.getElementById(`request3`).style.display=`none`;
}
function accept4(){
    document.getElementById(`request4`).style.display=`none`;
}
function reject1(){
    document.getElementById(`request1`).style.display=`none`;
}
function reject2(){
    document.getElementById(`request2`).style.display=`none`;
}
function reject3(){
    document.getElementById(`request3`).style.display=`none`;
}
function reject4(){
    document.getElementById(`request4`).style.display=`none`;
}