function openNav() {
  document.getElementById("navbar").style.transform = "translateX(0)";
}

function closeNav() {
  document.getElementById("navbar").style.transform = "translateX(-100%)";
}

function sendMail() {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  }
  const serviceID = "service_msi75fo";
  const templateID = "template_xoqz4u9";

  emailjs.send(serviceID, templateID, params)
    .then(
      res => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Mensagem enviada!");
      }
    )
    .catch(err => console.log(err));
}
