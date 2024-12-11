class Kendaraan {
  constructor(jenis, kecepatanMaksimal) {
      if (this.constructor === Kendaraan) {
          throw new Error("Kelas abstrak 'Kendaraan' tidak bisa diinstansiasi langsung.");
      }
      this._jenis = jenis;
      this._kecepatanMaksimal = kecepatanMaksimal;
  }

  deskripsi() {
      throw new Error("Method abstrak 'deskripsi()' harus diimplementasikan.");
  }

  set kecepatanMaksimal(value) {
      if (value > 0) {
          this._kecepatanMaksimal = value;
      } else {
          console.error("Kecepatan maksimal harus lebih dari 0.");
      }
  }

  get kecepatanMaksimal() {
      return this._kecepatanMaksimal;
  }
}

class Mobil extends Kendaraan {
  constructor(merk, tipe, jumlahRoda, warna, berat, kecepatanMaksimal) {
      super("Mobil", kecepatanMaksimal);
      this._merk = merk;
      this._tipe = tipe;
      this._jumlahRoda = jumlahRoda;
      this._warna = warna;
      this._berat = berat;
  }

  deskripsi() {
      return `Jenis: ${this._jenis}, 
              Merk: ${this._merk}, 
              Tipe: ${this._tipe}, 
              Jumlah Roda: ${this._jumlahRoda}, 
              Kecepatan Maksimal: ${this._kecepatanMaksimal} km/jam, 
              Warna: ${this._warna}, Berat: ${this._berat} kg`;
  }
}

class Motor extends Kendaraan {
  constructor(merk, tipe, jumlahRoda, warna, berat, kecepatanMaksimal) {
      super("Motor", kecepatanMaksimal);
      this._merk = merk;
      this._tipe = tipe;
      this._jumlahRoda = jumlahRoda;
      this._warna = warna;
      this._berat = berat;
  }

  deskripsi() {
      return `Jenis: ${this._jenis}, 
              Merk: ${this._merk}, 
              Tipe: ${this._tipe}, 
              Jumlah Roda: ${this._jumlahRoda}, 
              Kecepatan Maksimal: ${this._kecepatanMaksimal} km/jam, 
              Warna: ${this._warna}, Berat: ${this._berat} kg`;
  }
}

const kendaraanList = [
  new Mobil("Toyota", "SUV", 4, "Merah", 1500, 220),
  new Mobil("Alphard", "X", 4, "Abu-abu", 1400, 210),
  new Motor("Honda", "Sport", 2, "Hitam", 200, 140),
  new Motor("Vario", "160", 2, "Merah", 400, 180)
];

const vehicleSelect = document.getElementById("vehicleSelect");
const vehicleTitle = document.getElementById("vehicleTitle");
const vehicleDetails = document.getElementById("vehicleDetails");

kendaraanList.forEach((kendaraan, index) => {
  const option = document.createElement("option");
  option.value = index;
  option.textContent = kendaraan._merk + " " + kendaraan._tipe;
  vehicleSelect.appendChild(option);
});

vehicleSelect.addEventListener("change", (event) => {
  const selectedIndex = event.target.value;
  const selectedKendaraan = kendaraanList[selectedIndex];
  if (selectedKendaraan) {
      vehicleTitle.textContent = selectedKendaraan._merk + " " + selectedKendaraan._tipe;
      vehicleDetails.textContent = selectedKendaraan.deskripsi();
  }
});