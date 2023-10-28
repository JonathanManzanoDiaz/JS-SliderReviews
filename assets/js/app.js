const img = document.querySelector(".profile");
const namePerson = document.querySelector(".name");
const job = document.querySelector(".job");
const text = document.querySelector(".text");
const leftBtn = document.querySelector(".left-a");
const rightBtn = document.querySelector(".right-a");

let reviews = [
  {
    id: 1,
    namePerson: "Michael Damm",
    job: "Writter",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&dl=michael-dam-mEZ3PoFGs_k-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
    text: "The writter of the company: quos aspernatur, consequuntur vero odio deserunt quisquam pariatur optio ",
  },
  {
    id: 2,
    namePerson: "Joseph González",
    job: "Compositor",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&dl=joseph-gonzalez-iFgRcqHznqg-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
    text: "The Compositor of the company: , consequuntur vero odio deserunt quisquam pariatur optio ",
  },
  {
    id: 3,
    namePerson: "Christopher Campbell",
    job: "Designer",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&dl=christopher-campbell-rDEOVtE7vOs-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
    text: "The Designer of the company: quos aspernatur, conrsequuntur veo  pariatur optio ",
  },
  {
    id: 4,
    namePerson: "Joel Mott",
    job: "Singer",
    img: "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&dl=joel-mott-LaK153ghdig-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb",
    text: "The Singer of the company: quos aspernatur, consequuntur oio optio ",
  },
];

//start set item
let actualItem = 1;

window.addEventListener("DOMContentLoaded", function () {
  changePerson(actualItem);
});

function changePerson(person) {
  const item = reviews[person];
  img.src = item.img;
  namePerson.innerHTML = item.namePerson;
  job.innerHTML = `${item.job}`;
  text.innerHTML = `${item.text}`;
}

rightBtn.onclick = () => {
  if (actualItem >= 3) {
    actualItem = 0;
  } else {
    actualItem++;
  }
  changePerson(actualItem);
};
leftBtn.onclick = () => {
  if (actualItem >= 0) {
    actualItem = 3;
  } else {
    actualItem--;
  }
  changePerson(actualItem);
};
