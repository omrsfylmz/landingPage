import React from "react";
import AuthorBooks from "./AuthorBooks";
const author = "ÜSTÜN AKMEN";
const books = [
  {
    title: "Yazarın Tüm Yazıları",
    description: "Tiyatro Yazarımızdı. (1943-2015)",
    publishedYear: "(1943-2015)",
    link: "https://www.sanattanyansimalar.com/yazar/ustun-akmen/1",
  },
  {
    title: "13. Kıbrıs Tiyatro Festivali’nin en sivri oyunu: “Halktan Biri”",
    description:
      "Kıbrıs Tiyatro Festivali'nde sahnelenen 'Halktan Biri' oyununa dair bir eleştiri.",
    publishedYear: "29 Ekim 2015",
    link: "https://www.sanattanyansimalar.com/yazarlar/ustun-akmen/13-kibris-tiyatro-festivali-nin-en-sivri-oyunu-halktan-biri/746/",
  },
  {
    title: "Kadınlar da savaşı yitirdi",
    description:
      "İkinci Dünya Savaşı sonrası Avusturya’daki kadınların zorlu koşullarını anlatan bir oyun üzerine eleştiri.",
    publishedYear: "22 Ekim 2015",
    link: "https://www.sanattanyansimalar.com/yazarlar/ustun-akmen/kadinlar-da-savasi-yitirdi/739/",
  },
  {
    title: "Moda’nın kumaşı olarak insan derisi: “Terzi”",
    description:
      "İnsan derisinin metafor olarak kullanıldığı 'Terzi' oyununa dair değerlendirme.",
    publishedYear: "17 Ekim 2015",
    link: "https://www.sanattanyansimalar.com/yazarlar/ustun-akmen/moda-nin-kumasi-olarak-insan-derisi-terzi/733/",
  },
  {
    title: "Yeni sezon geldi hoş geldi, aynaya renk geldi",
    description: "Tiyatro sezonu başlangıcı üzerine izlenimler.",
    publishedYear: "07 Ekim 2015",
    link: "https://www.sanattanyansimalar.com/yazarlar/ustun-akmen/yeni-sezon-geldi-hos-geldi-aynaya-renk-geldi/724/",
  },
  {
    title: "Batmakta olan geminin duvarlarına resim yapmak",
    description: "Sanat ve toplum üzerine metaforik bir eleştiri.",
    publishedYear: "19 Eylül 2015",
    link: "https://www.sanattanyansimalar.com/yazarlar/ustun-akmen/batmakta-olan-geminin-duvarlarina-resim-yapmak/709/",
  },
  {
    title: "Şiirimizin 50 Yıllık Bey Oğlu: Ataol Behramoğlu",
    description:
      "Ataol Behramoğlu'nun Türk şiirine katkıları üzerine bir değerlendirme.",
    publishedYear: "13 Eylül 2015",
    link: "https://www.sanattanyansimalar.com/yazarlar/ustun-akmen/siirimizin-50-yillik-bey-oglu-ataol-behramoglu/707/",
  },
  {
    title: "Topçu, Levent Üzümcü'ye sahip çıksana...",
    description:
      "Oyuncu Levent Üzümcü'nün yaşadığı sıkıntılara dair bir çağrı.",
    publishedYear: "06 Eylül 2015",
    link: "https://www.sanattanyansimalar.com/yazarlar/ustun-akmen/topcu-levent-uzumcu-ye-sahip-ciksana/701/",
  },
  {
    title: "Tomris İncer, hasta karakterine can verirken",
    description: "Tomris İncer’in başarılı performansı üzerine bir eleştiri.",
    publishedYear: "30 Ağustos 2015",
    link: "https://www.sanattanyansimalar.com/yazarlar/ustun-akmen/tomris-incer-hasta-karakterine-can-verirken/697/",
  },
  {
    title: "Paşa Paşa Tiyatro yahut Ahmet Vefik Paşa",
    description:
      "Ahmet Vefik Paşa’nın tiyatroya katkıları üzerine bir değerlendirme.",
    publishedYear: "16 Ağustos 2015",
    link: "https://www.sanattanyansimalar.com/yazarlar/ustun-akmen/metin-yeterli-olmayinca-col-firtinalari/691/",
  },
  {
    title: "Ye'cûc ve Me'cûc ile Rumelihisari Mescidi",
    description: "Rumelihisarı Mescidi ve tarihi üzerine bir inceleme.",
    publishedYear: "09 Ağustos 2015",
    link: "https://www.sanattanyansimalar.com/yazarlar/ustun-akmen/ye-c-c-ve-me-c-c-ile-rumelihisari-mescidi/678/",
  },
];

const page = () => {
  return <AuthorBooks author={author} books={books} />;
};

export default page;
