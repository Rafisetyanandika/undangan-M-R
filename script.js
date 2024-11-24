document.getElementById('rsvpForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Menghindari form submit default

    var name = document.getElementById('name').value;
    var attending = document.getElementById('attending').value;

    if (name && attending) {
        var message = `Terima kasih, ${name}! Kami telah menerima konfirmasi Anda untuk hadir: ${attending === 'yes' ? 'Ya' : 'Tidak'}.`;
        document.getElementById('confirmationMessage').innerText = message;
    } else {
        document.getElementById('confirmationMessage').innerText = 'Harap lengkapi semua kolom.';
    }
});
