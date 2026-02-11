function sendMail() {
  var params = {
    name: document.getElementById("name").value,
  tel: document.getElementById("phone_number").value,
  date: document.getElementById("date").value,
  count_days: document.getElementById("duration").value,
  count_people: document.getElementById("quantity").value
  };
    
  const serviceID = "service_v3e3wah";
  const templateID = "template_daixcow";
    
    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("phone_number").value = "";
        document.getElementById("date").value = "";
        document.getElementById("duration").value = "";
        document.getElementById("quantity").value = "";
        console.log(res);
        alert("Ваша бронь была отправлена, скоро с вами свяжется наш администратор для уточнения деталей")

    })
}

