// const pdegeri=document.querySelector("p");
// console.log(pdegeri.innerText);


// pdegeri.innerText="ece javascript ogreniyor";

// const pdegeri=document.querySelectorAll("p");
// pdegeri.forEach(e => {
//     console.log(e.innerText);
//     e.innerText += " yeni alan"
// });

const icerik=document.querySelector(".icerik");
console.log(icerik);


//icerik.innerHTML='<h2> Vue Js, React Js, Angular Js </h2>';

icerik.innerHTML +=' <h2> Vue Js, React Js, Angular Js </h2>';


const ogrenciler=["selin",'tuba','elif'];
ogrenciler.forEach(a =>{
    icerik.innerHTML +=`<p> ${ogrenciler} </p>`
})