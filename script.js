const services = [
  { name:"Жіноча стрижка", price:400 },
  { name:"Чоловіча стрижка", price:300 },
  { name:"Фарбування", price:900 },
  { name:"Укладка", price:500 }
];

const list = document.getElementById("servicesList");
const checkboxes = document.getElementById("checkboxes");

if (list) {
  services.forEach(s=>{
    const div=document.createElement("div");
    div.className="service-card";
    div.innerHTML=`<h3>${s.name}</h3><p>${s.price} грн</p>`;
    list.appendChild(div);
  });
}

if (checkboxes) {
  services.forEach((s,i)=>{
    checkboxes.innerHTML += `<label><input type='checkbox' value='${s.price}'> ${s.name}</label><br>`;
  });
}

function calculateTotal(){
  let total=0;
  document.querySelectorAll("#checkboxes input:checked").forEach(el=>{
    total+=+el.value;
  });
  document.getElementById("total").textContent="Сума: "+total+" грн";
}

const form=document.getElementById("contactForm");
if(form){
  form.addEventListener("submit",e=>{
    e.preventDefault();
    document.getElementById("message").textContent="Дякуємо! Ми з вами зв'яжемось 😉";
  });
}
