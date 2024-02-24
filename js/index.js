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
