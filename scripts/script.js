let isProfileActive = () => { return document.querySelector('.profile').classList.value.includes("active"); }

isProfileActive
    ? document.querySelector('.app').style.width = "calc(100% - 50px)"
    : null;

const profile = () => {
    console.log('profile clicked', isProfileActive());

    if (isProfileActive()) {
        // than hide
        // console.log('profile active');
        document.querySelector('.profile').classList.remove("profile__active");
        document.querySelector('.app').style.width = "unset";

    } else {
        // than show
        // console.log('profile not active');
        document.querySelector('.profile').classList.add("profile__active");
        document.querySelector('.app').style.width = "calc(100% - 50px)";
    }
}