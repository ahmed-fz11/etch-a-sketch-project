const gridContainer = document.querySelector('.grid-container');

for(let i=0;i<16;i++)
{
    for(let j=0;j<16;j++)
    {
        const gridItem = document.createElement("div");
        gridItem.className = "grid-item";
        gridContainer.appendChild(gridItem);
    }
}

let gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach((gridItem)=>{
    gridItem.style.border = "1px solid grey";
    gridItem.style.backgroundColor = "white";
});

gridItems.forEach((gridItem)=>{
    gridItem.addEventListener("mouseenter",(e)=>{
        gridItem.style.backgroundColor = "black";
    });
});

const colorInput = document.querySelector('.color-input');
const applyButton = document.querySelector('.apply-button');

applyButton.addEventListener('click',()=>{
    const selectedColor = colorInput.value;
    
    gridItems.forEach((gridItem)=>{
        gridItem.addEventListener("mouseenter",(e)=>{
            gridItem.style.backgroundColor = selectedColor;
        });
    });
})

