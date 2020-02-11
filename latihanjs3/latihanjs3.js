// class Mobil {
//   Jenis(Merek) {
//     this.NamaMobil = Merek;
//   }
//   cetak() {
//     return "I have a " + this.NamaMobil;
//   }
// }

// mobilsaya = new Mobil("gunung","bmx",2);
// document.getElementById("demo").innerHTML = mobilsaya.cetak();

class Kendaraan {
    constructor(Merek, Jenis, JumlahBan) {
      this.NamaSepeda = Merek;
      this.JenisSepeda = Jenis;
      this.JumlahBanSepeda = JumlahBan;
    }
    Spesifikasi() {
      return 'Saya Punya sepeda ' + this.NamaSepeda + 'memiliki jenis ' + this.JenisSepeda + 'Jumlah bannya ' + this.JumlahBanSepeda;
    }
  }
  
  class Harga extends Kendaraan {
    constructor(Merek, Jenis, JumlahBan, Harga) {
      super(Merek,Jenis,JumlahBan);
      this.HargaSepeda = Harga;
    }
    show() {
      return this.Spesifikasi() + ' Dengan Harga ' + this.HargaSepeda;
    }
  }
  
  mycar = new Harga("BMX ", "Sepeda Gunung ", 2, "RP. 1.500.000 ");
  document.getElementById("demo").innerHTML = mycar.show();

