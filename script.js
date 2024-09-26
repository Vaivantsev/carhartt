let img = document.getElementsByTagName("img")[0];
let blue = document.getElementsByClassName("blue")[0];
let pink = document.getElementsByClassName("pink")[0];
let yellow = document.getElementsByClassName("yellow")[0];
let sizes = document.getElementsByClassName("size");
let colors = document.getElementsByClassName("colors")[0].children;

let color = 0;
let itemSide = "front";
let items = [
  {
    front: "image 2.png",
    back: "image 1.png",
  },
  {
    front: "image 3.png",
    back: "image 4.png",
  },
  {
    front: "image 5.png",
    back: "image 6.png",
  },
];
img.onclick = () => {
  itemSide = itemSide == "front" ? "back" : "front";
  

  img.src = "Carhartt/" + items[color][itemSide];
};
yellow.onclick = () => {
  itemSide = "front";
  color = 0;
  img.src = "Carhartt/" + items[color][itemSide];

};
blue.onclick = () => {
  itemSide = "front";
  color = 1;
  img.src = "Carhartt/" + items[color][itemSide];

};
pink.onclick = () => {
  itemSide = "front";
  color = 2;
  img.src = "Carhartt/" + items[color][itemSide];


};
for (let i = 0; i<4;i = i + 1) { 
    sizes[i].onclick = ()=> {
        console.log(sizes[i]);
        let active = document.getElementsByClassName ("active") [0]
        active.classList.remove("active")
        sizes[i].classList.add( "active")
    }
}
 for (let i=0 ; i<3; i=i+1) {
     colors[i].onclick = ()=> {
        let active = document.getElementsByClassName ("activeColor") [0]
         active.classList.remove("activeColor")
         colors[i].classList.add( "activeColor")
     }
 }
