const displayModal = document.querySelector("#displayModal");
const close = document.querySelector(".close");
const displayImg = document.querySelector("#img01");
const displayColorValue = document.querySelector("#color-value");

const images = document.querySelectorAll(".img");

images.forEach(image=>{
    image.addEventListener('click', event=>{
        displayImg.src = event.currentTarget.src;
        displayModal.style.display = "block";

        const colors = event.currentTarget.dataset.colors.split(",");

        displayColorValue.innerHTML = "";
        colors.forEach(color=>{
            
            displayColorValue.innerHTML += `<div style="background-color:${color}"><p class="copy">${color}</p></div><span class="showCopy"></span>`;
            console.log(`<div>${color}</div>`);
        })

        const copyValues = document.querySelectorAll(".copy");
        copyValues.forEach(copyValue=>{
            copyValue.addEventListener('click',event=>{
                const copyText = event.target.textContent;
                console.log(copyText);
                navigator.clipboard.writeText(copyText);
            }         
            )
        })
    })
})

close.addEventListener('click',()=>{
    displayModal.style.display = "none";
})