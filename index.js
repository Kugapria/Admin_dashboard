const sideMenu = document.querySelector("aside");
const menubtn = document.querySelector("#menu-btn");
const closebtn = document.querySelector("#close-btn");
const themetoggler = document.querySelector(".theme-toggler");

menubtn.addEventListener('click',() => {
    sideMenu.style.display = 'block';
})

closebtn.addEventListener('click',() =>
{
    sideMenu.style.display = 'none';
}
)

themetoggler.addEventListener('click',() =>{
    document.body.classList.toggle('dark-theme-variables');

    themetoggler.querySelector('span').classList.toggle(active);

})

Orders.forEach(order =>{
    const tr = document.createElement('tr');
    const trContent = `
                        <td>${order.productName}</td>
                        <td>${order.productNumber}</td>
                        <td>${order.paymentstatus}</td>
                        <td class = "${order.shipping === 'Declined'?'danger': order.shipping === 'Pending'?'warning':'primary'}">${order.shipping}</td>
                        <td class = primary>Details</td>  
                    `;

   tr.innerHTML = trContent;
   document.querySelector('table tbody').appendChild(tr);
                            
})
