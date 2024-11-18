const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-icon");
const cancelBtn = document.querySelector(".cancel-icon");

menuBtn.onclick = ()=>{
    menu.classList.add("active");
    menuBtn.classList.add("hide");
}

cancelBtn.onclick = ()=>{
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
}

const profile = document.querySelector("#profile")
const profileBtn = document.querySelector("#profile-icon")

profileBtn.onclick = () => {
    if (!profile.classList.contains("active")) {
        profile.classList.add("active");
        profileBtn.classList.add("profilehide");
    } else {
        profile.classList.remove("active");
        profileBtn.classList.remove("profilehide");
    }
};