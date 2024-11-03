/* Görev 1: Isınalım Biraz :) */

/* TÜM CEVAPLARINI BİR FUNCTION İÇİNDE VERDİĞİNİZ EMİN OL (GÖREV 1D - GÖREV 6). AKSİ TAKTİRDE, OTOMATİK TEST SİSTEMİ ÇALIŞMAYACAKTIR. */

// Görev 1a, 1b ve 1c puanlamaya dahil değildir

/*
Bu görevleri yaparken, yazdığın kod'un doğru çıktı verdiğini kontrol etmek için console.log'u kullanmanı öneririz.
Bunun için cevabı direk console'a logla veya çağırdığın fonksiyondan dönen değeri console'a logla.  
Örneğin:  console.log(ornekFonksiyon(deger1,deger2))
*/

/*
Görev 1a - Ehliyet Yaşı (puanlamaya dahil değildir)

Aşağıdakileri yap:   
   1. surucuYasi isimli bir değişken yaz ve bir sayı ata.
   2. Eğer yaş 18'den büyük ise Console'da true, değilse false değeri yazdırın.

   İPUCU: fonksiyon oluşturmaya gerek yok
*/
// 1. surucuYasi isimli bir değişken yaz ve bir sayı ata
let surucuYasi = 20; // Buraya istediğin bir yaş değerini atayabilirsin

// 2. Eğer yaş 18'den büyük ise Console'da true, değilse false değeri yazdırın
console.log(surucuYasi > 18); // true veya false
/*
Görev 1b - Değerler (puanlamaya dahil değildir)

Aşağıdakileri yap:   
   1. 2 değişken tanımla ve bunlara değerler ata (isimlendirme olarak birinciDeger ikinciDegeri kullanabilirsin)
   2. 1. değeri 2. değer ile karşılaştıran bir koşul oluşturun
   3. 2. adımdaki koşul doğru olduğunda 1. değeri değiştirin
   4. 1. değeri Console'a yazdırın

   İPUCU: fonksiyon oluşturmaya gerek yok
*/
// 1. 2 değişken tanımla ve bunlara değerler ata
let birinciDeger = 10;
let ikinciDeger = 15;

// 2. 1. değeri 2. değer ile karşılaştıran bir koşul oluştur
if (birinciDeger < ikinciDeger) {
  // 3. Koşul doğru olduğunda 1. değeri değiştir
  birinciDeger = 20;
}

// 4. 1. değeri Console'a yazdır
console.log(birinciDeger); // 20
/*
Görev 1c - String bir değeri Number'a dönüştürün (puanlamaya dahil değildir)

Aşağıdakileri yap:   
   1. String tipinde ve değeri "1999" olan bir değişken oluşturun
   2. Değeri "1999" olan bu String'i değeri 1999 olan bir integer'a dönüştürün
   3. Sonucu Console'a yazdırın

   İPUCU: Number metoduna bakabilirsin
*/
// 1. String tipinde ve değeri "1999" olan bir değişken oluştur
let stringDeğer = "1999";

// 2. Değeri "1999" olan bu String'i değeri 1999 olan bir integer'a dönüştür
let integerDeğer = Number(stringDeğer);

// 3. Sonucu Console'a yazdır
console.log(integerDeğer); // 1999
/*
Görev 1d - Çarpma
 
Aşağıdakileri yaparak carpma isimli fonksiyonu tamamla:   
   1. 2 argüman alsın(a ve b olarak tanımlayabilirsin)
   2. a ve b'yi çarpıp, sonucu dönsün
   3. console.log(carpma(7,4)) ile yazdığın fonsiyonu test edin. Console'da sonucu 28 olarak görmelisin.
*/

function carpma(sayi1 , sayi2) {
  return sayi1 * sayi2
}

/* Görev 2 : Köpeğin Yaşı */

/*
Aşağıdakileri yap:
 1. Aşağıdaki kopeginYasi fonsiyonunu bir argüman alacak şekilde tanımla.
 2. Gelen değeri kullanarak köpeğin yaşını hesapla (insanlarda 1 yıl köpeklerde 7 yıla denk gelir)
 3. Hesaplanan köpeğin yaşını dönün.
 */

function kopeginYasi(insanYili) {
  const köpekYili = insanYili * 7;
  return köpekYili;
}

/* Görev 3 */
/*
Aşağıdakileri oyun isimli fonksiyonu kullanarak yap.
1. 2 argüman alın: oyuncunun tercihini alan bir string değer: "Taş", "Kağıt" veya "Makas" 
   ve bilgisayarınkini alan: "Taş", "Kağıt" veya "Makas"
   Not: string değerlerin yazımına dikkat! İlk harf büyük ve türkçe karakterler kullanarak. Yoksa testi geçemez.
2. Aşağıdaki oyun kurallarına göre oyuncunun kazanıp kazanamadığını veya berabere kalıp kalmadığını dönün - (uygulamanın oluşturduğu çıktı tam olarak aşağıdakinin aynısı olmalı)
 - kazanma durumunda "Kazandın!" dönmeli
 - kaybetme durumunda "Kaybettin!" dönmeli
 - beraberlikte "Beraberlik" dönmeli

OYUNUN KURALLARI: Makas Kağıdı yener| Kağıt Taşı yener | Taş Makas'ı yener | veya beraberlik olur.
*/

function oyun(oyuncu, bilgisayar) {
  if(oyuncu ==="Taş"){
    return "Beraberlik";
  }
if(oyuncu==="Taş"){
  return (bilgisayar==="Makas") ? "Kazandin" : "Kaybettin!";
}else if(oyuncu ==="Kağit"){
  return (bilgisayar === "Taş") ?  "Kazandin" : "Kaybettin!";
}else if(oyuncu === "Makas"){
  return  (bilgisayar === "Kağit") ? "Kazandin" : "Kaybettin";
}else{
  return "Geçersiz tercih";
}

}

// Şimdi Taş, Kağıt, Makas oyununu bilgisayara karşı oynayalım!

//Öncelikle aşağıdakileri yap:
//1. Bilgisayarın seçimini rastgele oluşturacağım bir fonksiyon tanımla. Örn: 
   function bilgisayarinSecimi() {
    const rastgele = Math.random(); // 0 ile 1 arasında bir değer al
    let secim; // Bilgisayarın seçimi için değişken
  
    // Rastgele değere göre seçim yap
    if (rastgele < 0.33) {
      secim = "Taş";
    } else if (rastgele < 0.66) {
      secim = "Kağit";
    } else {
      secim = "Makas";
    }
  
    return secim; // Seçimi geri döndür
   }
//2. Fonsiyonun içinde bilgisayarın seçimi için bir değişken tanımla
//3. Math.random'ı kullanarak bilgisayarın seçimini oluşturun (Math.random 0-1 arasında bir değer verecek)
//4. Bu rastgele değeri "Taş", "Kağıt" veya "Makas"a dönüştüren bir koşul oluşturun
//5. Oluşan değeri geri dönün

//Şimdi kendi seçtiğin bir seçime karşı bilgisayarın rastgele oluşturduğu seçimi yukarıda yazdığın oyun fonsiyonu ile oynayın ve sonucu console'a yazdırın.
//Örn: console.log(oyun("Makas",bilgisayarinSecimi()))
function oyun(oyuncu, bilgisayar) {
  if (oyuncu === bilgisayar) {
    return "Beraberlik";
  } 

  if (oyuncu === "Taş") {
    return (bilgisayar === "Makas") ? "Kazandın!" : "Kaybettin!";
  } else if (oyuncu === "Kağıt") {
    return (bilgisayar === "Taş") ? "Kazandın!" : "Kaybettin!";
  } else if (oyuncu === "Makas") {
    return (bilgisayar === "Kağıt") ? "Kazandın!" : "Kaybettin!";
  } else {
    return "Geçersiz tercih"; // Geçersiz giriş için bir kontrol ekleyebilirsiniz
  }
}

// Kullanıcının seçimini belirt
const oyuncuSecimi = "Makas"; // Burada kullanıcının seçimini belirtebilirsin
const bilgisayarSecimi = bilgisayarinSecimi(); // Bilgisayarın rastgele seçimini al

// Sonucu yazdır
console.log(`Kullanıcı Seçimi: ${oyuncuSecimi}, Bilgisayar Seçimi: ${bilgisayarSecimi}`);
console.log(oyun(oyuncuSecimi, bilgisayarSecimi)); // Oyunu oyna ve sonucu yazdır


/* Görev 4 : Metrik Dönüştürücü */

//Görev 4a - Kilometreden Mil
/*
Aşağdaki milDonusturucu fonksiyonunu aşağıdakileri kullanarak tamamla:
1. Kilometre değerini argüman olarak alın.
2. Aldığın bu değeri Mil'e dönüştürün
3. Mil değerini geri dönün
*/

function milDonusturucu(kilometre) {
  const mil = kilometre * 0.621371; // 1 kilometre = 0.621371 mil
  return mil; // Dönüştürülen mil değerini geri döndür
}


//Görev 4b - Santimetreden Feet
/*
Aşağıdakileri feetDonusturucu fonsiyonunu kullanarak yap:
1. Santimetre değerini argüman olarak alın.
2. Aldığın bu değeri feet'e dönüştürün
3. feet değerini geri dönün

Google'da arama ipucu: "feet cm dönüştürme"
*/

function feetDonusturucu(santimetre) {
  const feet = santimetre/ 30.48;
  return feet;
}

/* Görev 5 : 5 küçük maymun yatakta zıplamış şarkısını çocuklar için hazırladığımı varsayalım. https://www.youtube.com/watch?v=e4EJ34xnlxk */

/*
Aşağıdakileri cocukSarkisi fonksiyonunda yap:
1. Başlangıçta var olan maymun sayısını alın.
2. cocukSarkisi fonksiyonu aşağıdaki satırı sadece 1 kere yazacak şekilde kodunuzu yazın:

    "{sayı} küçük maymun yatakta zıplamış, biri düşüp başını çarpmış, Anne doktoru aramış, Doktor çok kızmış: Bir daha yatakta zıplamak yok!"

3. Bu fonksiyonun dışında bir yerde, maymun sayısının her seferinde 1 azaldığı ve maymun sayısı 1 olana kadar devem eden bir döngü oluşturun. 
4. Bu döngüde, her seferinde cocukSarkisi fonsiyonu çalışsın ve console.log'a dönen metni yazdırsın.
*/

function cocukSarkisi(maymunSayisi) {
  return `${maymunSayisi} küçük maymun yatakta zıplamış, biri düşüp başını çarpmış, Anne doktoru aramış, Doktor çok kızmış: Bir daha yatakta zıplamak yok!`;
}
let maymunSayisi = 5;//başlangıçta var olan maymun sayısı
while (maymunSayisi > 0) {
  // cocukSarkisi fonksiyonunu çağır ve sonucu yazdır
  console.log(cocukSarkisi(maymunSayisi));
  maymunSayisi--; // Maymun sayısını 1 azalt
}


/* Görev 6 : Not Hesaplayıcı */

/*
Aşağdakileri notHesapla fonksiyonunda yap.
1. 100'lük sistemde bir sınav sonucu alın.
2. Aşağıdaki tabloya göre notu dönün.

 90-100 arasında 'A aldın' 
 80-89 arasında 'B aldın'
 70-79 arasında 'C aldın'
 60-69 arasında 'D aldın'
 daha aşağıda 'F aldın'
 dönün
*/

function notHesapla(sinavSonucu) {
  if (sinavSonucu >= 90 && sinavSonucu <= 100) {
    return "A aldin";
  } else if (sinavSonucu >= 80 && sinavSonucu < 90) {
    return "B aldin";
  } else if (sinavSonucu >= 70 && sinavSonucu < 80) {
    return "C aldin";
  } else if (sinavSonucu >= 60 && sinavSonucu < 70) {
    return "D aldin";
  } else if (sinavSonucu < 60) {
    return "F aldin";
  } else {
    return "Geçersiz not"; // Geçersiz bir not girildiğinde
  }
}

/* Bonus Çalışma: Sesli harf sayacı - Kaç tane sesli harf var? */

/*
Aşağıdakileri sesliHarfSayaci fonskiyonunda yap.
1. Bir argüman alın, string olsun.
2. Bu string'in içindeki sesli harfleri sayın ve sayısını geri dönün.  (hem büyük hem de küçük harflerin sayısını dönmeli).

İPUCU - yarın işlenecek array(dizi) konusunu önden araştırman gerekecek. (https://www.w3schools.com/js/js_arrays.asp)
İPUCU - .includes() methoduna bakabilirsin. (https://www.w3schools.com/jsref/jsref_includes.asp)
*/

function sesliHarfSayaci(metin) {
  const sesliHarfler = ['a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü', 'A', 'E', 'I', 'İ', 'O', 'Ö', 'U', 'Ü'];
  let sayac = 0; // Sesli harf sayısını tutacak değişken

  // Metin içindeki her karakteri kontrol et
  for (let i = 0; i < metin.length; i++) {
    if (sesliHarfler.includes(metin[i])) {
      sayac++; // Eğer sesli harfse sayacı artır
    }
  }

  return sayac; // Toplam sesli harf sayısını döndür

}

/* Lütfen bu satırın alt tarafını değiştirmeyin */
function sa() {
  console.log("Kodlar çalışıyor");
  return "as";
}
sa();
/* Bu satırdan sonrasını değiştirmeyin */
module.exports = {
  sa,
  carpma,
  kopeginYasi,
  oyun,
  milDonusturucu,
  feetDonusturucu,
  cocukSarkisi,
  notHesapla,
};
