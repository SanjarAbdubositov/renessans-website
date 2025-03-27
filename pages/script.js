emailjs.init("LTavXQueku0gnOu4e");  

function sendEmail() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let telegram = document.getElementById("telegram").value;
    let message = document.getElementById("message").value;

    if (!name || !email || !phone || !telegram || !message) {
        alert("Iltimos, barcha maydonlarni to‘ldiring!");
        return;
    }

    let params = {
        name: name,
        email: email,
        phone: phone,
        telegram: telegram,
        message: message,
        title: "Yangi xabar"
    };

    emailjs.send("service_z06gjwm", "template_z9b1que", params)
        .then(response => {
            alert("Xabar yuborildi!");
        }, error => {
            alert("Xatolik yuz berdi!");
            console.log(error);
        });
}
