const itemData = [
    { kode: '001', nama: 'A', harga: 10000 },
    { kode: '002', nama: 'B', harga: 20000 },
    { kode: '003', nama: 'C', harga: 30000 }
];

function tampilkanData() {
    const itemTable = document.getElementById('barangTable');
    itemData.forEach((item, index) => {
        const row = barangTable.insertRow(index + 1);
        const kodeCell = row.insertCell(0);
        const namaCell = row.insertCell(1);
        const hargaCell = row.insertCell(2);

        kodeCell.textContent = item.kode;
        namaCell.textContent = item.nama;
        hargaCell.textContent = item.harga;
    });
}

function tambahTransaksi(event) {
    event.preventDefault();

    const kodeInput = document.getElementById('kodeInput');
    const quantityInput = document.getElementById('quantityInput');

    const selectedItem = itemData.find(item => item.kode === kodeInput.value);

    if (!selectedItem) {
        alert('Kode barang tidak valid');
        return;
    }

    const jumlah = parseInt(quantityInput.value);
    const totalHarga = selectedBarang.harga * jumlah;

    const bayar = window.prompt(
        'Total yang harus dibayar: ' + totalHarga + '\n\n' +
        'Masukkan jumlah uang yang akan dibayarkan:'
    );

    if (bayar === null || bayar === '') {
        alert('Pembayaran dibatalkan');
        return;
    }

    const jumlahBayar = parseFloat(bayar);

    if (isNaN(jumlahBayar) || jumlahBayar < totalHarga) {
        alert('Jumlah pembayaran tidak valid atau kurang dari total yang harus dibayar');
        return;
    }

    const kembalian = jumlahBayar - totalHarga;

    alert(
        'Pembayaran berhasil!\n\n' +
        'Total yang harus dibayar: ' + totalHarga + '\n' +
        'Jumlah yang dibayarkan: ' + jumlahBayar + '\n' +
        'Kembalian: ' + kembalian
    );

    // Jika Anda ingin melakukan sesuatu dengan data transaksi, seperti menyimpannya ke dalam array, Anda dapat melakukannya di sini.
}

document.addEventListener('DOMContentLoaded', () => {
    tampilkanDataItem();
});
