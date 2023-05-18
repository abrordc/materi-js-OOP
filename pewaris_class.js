/*Pewarisan
Dalam gambaran dunia nyata, banyak sekali objek yang berbeda, tetapi punya kemiripan tertentu. Jika kita berbicara mobil, tentu banyak ragam dari mobil mulai dari mobil transportasi, mobil balap, ambulan, truk, dan mobil yang lainnya. Walaupun semua ragam tersebut termasuk dalam kategori mobil, tetapi kemampuannya berbeda-beda. Contoh, mobil balap memiliki kemampuan untuk mengaktifkan mode sport, sehingga dapat melaju dengan cepat; mobil ambulan dapat mengaktifkan sinyal darurat; mobil truk dapat menggerakan container-nya untuk menurunkan muatan. Di sisi lain, mereka memiliki kesamaan yaitu sama-sama mobil yang memiliki merek, warna, kecepatan maksimal, dan nomor rangka.

Sama halnya pada objek pada pemrograman, kita sering sekali mendapati kasus membuat sebuah objek dengan spesifikasi yang serupa, tetapi memiliki beberapa perbedaan kecil. Contoh, objek EmailService dengan WhatsAppService. Kedua objek tersebut sama-sama layanan perpesanan, mereka dapat mengirim pesan dan membutuhkan properti sender. Namun, terdapat beberapa perbedaan contohnya WhatsApp bisa mengirim pesan secara broadcast, sedangkan email bisa mengirim pesan secara delay.

Pertanyaannya, bagaimana cara membuat class untuk kedua objek ini? Sebenarnya kita bisa saja membuat dua class, yakni WhatsAppService dan EmailService dengan cara seperti ini. */

class WhatsAppService {
  constructor(sender) {
    this.sender = sender;
  }
 
  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }
 
  sendBroadcastMessage(message, receivers) {
    for (const receiver of receivers) {
      this.sendMessage(message, receiver);
    }
  }
}
 
class EmailService {
  constructor(sender) {
    this.sender = sender;
  }
 
  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }
 
  sendDelayedMessage(message, receiver, delay) {
    setTimeout(() => {
      this.sendMessage(message, receiver);
    }, delay);
  }
}
/*Namun, jika kita lihat kode di atas, terdapat duplikasi kode untuk bagian yang “sama” antarkedua objek tersebut. Walau terlihat sederhana, tetapi tidak menutup kemungkinan kesamaan antarobjek tersebut terus berkembang dan kita perlu melakukan duplikasi kode di antara keduanya.

Oke, sekarang masalahnya adalah duplikasi kode, bagaimana cara menghindari duplikasi kode pada kasus ini? Sebenarnya, kita bisa saja membuat satu class yang mencakup kemampuan kedua objek tersebut. Sehingga kita bisa membuat instance WhatsAppService dan EmailService menggunakan satu class saja. */

class MailService {
  constructor(sender) {
    this.sender = sender;
  }
 
  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }
 
  sendDelayedMessage(message, receiver, delay) {
    setTimeout(() => {
      this.sendMessage(message, receiver);
    }, delay);
  }
 
  sendBroadcastMessage(message, receivers) {
    for (const receiver of receivers) {
      this.sendMessage(message, receiver);
    }
  }
}
 
const whatsapp = new MailService('+6281234567890');
const email = new MailService('dimas@dicoding.

const whatsapp = new WhatsAppService('+6281234567890');
const email = new EmailService('dimas@dicoding.com');

//untuk mengecek tipe Object (Operator instanceof)
 
/*console.log(whatsapp instanceof WhatsAppService); // true
console.log(whatsapp instanceof EmailService); // false
console.log(whatsapp instanceof MailService); // true
 
console.log(email instanceof EmailService); // true
console.log(email instanceof WhatsAppService); // false
console.log(email instanceof MailService); // true */