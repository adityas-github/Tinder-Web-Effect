//get data
let users = [
  {
    profilePic:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    pendingMessage: 4,
    location: "Pune, India",
    name: "Harshita",
    age: 23,
    interest: [
      {
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "music",
      },
      {
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "writing",
      },
    ],
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam illum dolore est reprehenderit, omnis nemo",
    isFriend: null,
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2861&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1548142813-c348350df52b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
    pendingMessage: 3,
    location: "Delhi, India",
    name: "Akash",
    age: 26,
    interest: [
      {
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "music",
      },
      {
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "writing",
      },
    ],
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam illum dolore",
    isFriend: null,
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    displayPic:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    pendingMessage: 14,
    location: "Banglore, India",
    name: "Rahul",
    age: 26,
    interest: [
      {
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "music",
      },
      {
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "writing",
      },
    ],
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam illum dolore est reprehenderit, omnis nemo",
    isFriend: null,
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=2823&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1515190962763-c7cd8b16b25c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
    pendingMessage: 41,
    location: "Pune, India",
    name: "John",
    age: 7,
    interest: [
      {
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "music",
      },
      {
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "writing",
      },
    ],
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam illum dolore est reprehenderit, omnis nemo",
    isFriend: null,
  },
];
function select(elem) {
  return document.querySelector(elem);
}
let curr = 0;
let isAnimating = false;

function setData(index){
  select(".prflimg img").src = users[index].profilePic;
  select(".badge h5").textContent = users[index].pendingMessage;
  select(" .location h3").textContent = users[index].location;
  select(".name h1:nth-child(1)").textContent = users[index].name;
  select(".name h1:nth-child(2)").textContent = users[index].age;

  let clutter = "";

  users[index].interest.forEach(function (interest) {
    clutter += `<div class="tag flex gap-3 items-center bg-white/30 px-3 py-1 rounded-full text-white">
        ${interest.icon}
        <h3 class="text-sm tracking-tight capitalize">${interest.interest}</h3>
    </div>`;
  });
  select(".tags").innerHTML = clutter;
  select(".bio p").textContent = users[index].bio;
}
(function setInitial() {
  select(".maincard img").src = users[curr].displayPic;
  select(".incoming img").src = users[curr + 1]?.displayPic;
  // select(".maincard .name").innerText = users[curr].name;
  setData(curr);
  curr = 2;
})();

function imageChange() {
  if (!isAnimating) {
    isAnimating = true;
    let tl = gsap.timeline({
      onComplete: function () {
        isAnimating = false;
        let main = select(".maincard");
        let incoming = select(".incoming");

        incoming.classList.remove("z-[2]");
        incoming.classList.add("z-[3]");
        incoming.classList.remove("incoming");
        // incoming.classList.add("maincard");

        main.classList.remove("z-[3]");
        main.classList.add("z-[2]");
        gsap.set(main, {
          opacity: 1,
          scale: 1,
        });
        // select(".main img").src = users[curr+1]?.displayPic;
        if (curr === users.length) curr = 0;
        select(".maincard img").src = users[curr].displayPic;
        curr++;
        main.classList.remove("maincard");
        incoming.classList.add("maincard");
        main.classList.add("incoming");
      },
    });
    tl.to(
      ".maincard",
      {
        scale: 1.1,
        opacity: 0,
        ease: Circ,
        duration: 0.9,
      },
      "a"
    ).from(
      ".incoming",
      {
        scale: 0.9,
        opacity: 0,
        ease: Circ,
        duration: 1.1,
      },
      "a"
    );
  }
}

let deny = select(".deny");
let accept = select(".accept");
deny.addEventListener("click", function () {
  imageChange();
  setData(curr-1);
gsap.from(".details .element", {
  y:"100%",
  stagger:0.06,
  ease: Power4.easeOut,
  duration:1.5,
});
});

accept.addEventListener("click", function () {
  imageChange();
  setData(curr-1);
gsap.from(".details .element", {
  y:"100%",
  stagger:0.06,
  ease: Power4.easeOut,
  duration:1.5,
});
});

(function containerCreator() {
  document.querySelectorAll(".element").forEach(function (element) {
    let div = document.createElement("div");
    div.classList.add(`${element.classList[1]}container`,'overflow-hidden');
    div.appendChild(element);
    select(".details").appendChild(div);
  });
})();

gsap.from(".details .element", {
  y:"100%",
  stagger:0.06,
  ease: Power4.easeOut,
  duration:1.5,
}); 