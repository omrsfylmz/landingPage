import Awards from "../components/Awards";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
const Home: React.FC = () => {
  const awards = [
    {
      title: "Yılın Koreografisi",
      winner: {
        name: "Senem Oluz",
        link: "https://tiyatrolar.com.tr/senem-oluz",
      },
      game: {
        name: "Hayvan Çiftliği",
      },
      link: "https://tiyatrolar.com.tr/tiyatro/hayvan-ciftligi-1",
    },
    {
      title: "Yılın Sahne Müziği",
      winner: {
        name: "Burçak Çöllü",
        link: "https://tiyatrolar.com.tr/burcak-collu",
      },
      game: {
        name: "Hayvan Çiftliği",
        link: "https://tiyatrolar.com.tr/tiyatro/hayvan-ciftligi-1",
      },
    },
    {
      title: "Yılın Işık Tasarımı",
      winner: {
        name: "Yüksel Aymaz",
        link: "https://tiyatrolar.com.tr/yuksel-aymaz",
      },
      game: {
        name: "Kanlı Komedya (Caligula)",
        link: "https://tiyatrolar.com.tr/tiyatro/kanli-komedya-caligula",
      },
    },
    {
      title: "Yılın Işık Tasarımı",
      winner: {
        name: "Cem Yılmazer",
        link: "https://tiyatrolar.com.tr/cem-yilmazer",
      },
      game: {
        name: "Martı",
        link: "https://tiyatrolar.com.tr/tiyatro/marti-1",
      },
    },
    {
      title: "Yılın Giysi Tasarımı",
      winner: {
        name: "Candan Seda Balaban ",
        link: "https://tiyatrolar.com.tr/candan-seda-balaban",
      },
      game: {
        name: "Hayvan Çiftliği",
        link: "https://tiyatrolar.com.tr/tiyatro/hayvan-ciftligi-1",
      },
    },
    {
      title: "Yılın Sahne Tasarımı",
      winner: {
        name: "Barış Dinçel",
        link: "https://tiyatrolar.com.tr/baris-dincel",
      },
      game: {
        name: "Bir Baba Hamlet",
        link: "https://tiyatrolar.com.tr/tiyatro/bir-baba-hamlet",
      },
    },
    {
      title: "Yılın Umut Veren Erkek Oyuncusu",
      winner: {
        name: "Efe Erkekli",
        link: "https://tiyatrolar.com.tr/efe-erkekli",
      },
      game: {
        name: "Tamamen Doluyuz",
        link: "https://tiyatrolar.com.tr/tiyatro/tamamen-doluyuz-1",
      },
    },
    {
      title: "Yılın Umut Veren Erkek Oyuncusu",
      winner: {
        name: "Ozan Dolunay",
        link: "https://tiyatrolar.com.tr/ozan-dolunay",
      },
      game: {
        name: "Killology",
        link: "https://tiyatrolar.com.tr/tiyatro/killology",
      },
    },
    {
      title: "Yılın Umut Veren Kadın Oyuncusu",
      winner: {
        name: "Demet Ergün",
        link: "https://tiyatrolar.com.tr/demet-ergun",
      },
      game: {
        name: "Düdüklüde Kıymalı Bamya",
        link: "https://tiyatrolar.com.tr/tiyatro/duduklude-kiymali-bamya-2",
      },
    },
    {
      title: "Yılın Umut Veren Kadın Oyuncusu",
      winner: {
        name: "Ayça Koptur",
        link: "https://tiyatrolar.com.tr/ayca-koptur",
      },
      game: {
        name: "Woyzeck",
        link: "https://tiyatrolar.com.tr/tiyatro/woyzeck-1",
      },
    },
    {
      title: "Yılın Umut Veren Kadın Oyuncusu",
      winner: {
        name: "Ilgaz Kaya",
        link: "https://tiyatrolar.com.tr/ilgaz-kaya",
      },
      game: {
        name: "Dara",
        link: "https://tiyatrolar.com.tr/tiyatro/dara",
      },
    },
    {
      title: "Yılın Yardımcı Rolde Erkek Oyuncusu",
      winner: {
        name: "Fatih Koyunoğlu",
        link: "https://tiyatrolar.com.tr/fatih-koyunoglu",
      },
      game: {
        name: "İntiharın Genel Provası",
        link: "https://tiyatrolar.com.tr/tiyatro/intiharin-genel-provasi",
      },
    },
    {
      title: "Yılın Yardımcı Rolde Kadın Oyuncusu",
      winner: {
        name: "Ayşegül Uraz",
        link: "https://tiyatrolar.com.tr/aysegul-uraz",
      },
      game: {
        name: "HE-GO",
        link: "https://tiyatrolar.com.tr/tiyatro/he-go",
      },
    },
    {
      title: "Yılın Erkek Oyuncusu",
      winner: {
        name: "Murat Akkoyunlu",
        link: "https://tiyatrolar.com.tr/404",
      },
      game: {
        name: "Bir Baba Hamlet",
        link: "https://tiyatrolar.com.tr/tiyatro/bir-baba-hamlet",
      },
    },
    {
      title: "Yılın Kadın Oyuncsu",
      winner: {
        name: "Nezaket Erden ",
        link: "https://tiyatrolar.com.tr/nezaket-erden",
      },
      game: {
        name: "Sevgili Arsız Ölüm - Dirmit",
        link: "https://tiyatrolar.com.tr/tiyatro/sevgili-arsiz-olum-dirmit",
      },
    },
    {
      title: "Yılın Yerli Oyun Yazarı",
      winner: {
        name: "Haliil Babür",
        link: "https://tiyatrolar.com.tr/halil-babur",
      },
      game: {
        name: "HE-GO",
        link: "https://tiyatrolar.com.tr/tiyatro/he-go",
      },
    },
    {
      title: "Yılın Yerli Oyun Yazarı",
      winner: {
        name: "Duygu Dalyanoğlu",
        link: "https://tiyatrolar.com.tr/duygu-dalyanoglu",
      },
      game: {
        name: "Zabel",
        link: "https://tiyatrolar.com.tr/tiyatro/zabel",
      },
    },
    {
      title: "Yılın Yerli Oyun Yazarı",
      winner: {
        name: "Aysel Yıldırım",
        link: "https://tiyatrolar.com.tr/aysel-yildirim",
      },
      game: {
        name: "Zabel",
        link: "https://tiyatrolar.com.tr/tiyatro/zabel",
      },
    },
    {
      title: "Yılın Yönetmeni ",
      winner: {
        name: "Yiğit Sertdemir",
        link: "https://tiyatrolar.com.tr/yigit-sertdemir",
      },
      game: {
        name: "Hayvan Çiftliği",
        link: "https://tiyatrolar.com.tr/tiyatro/hayvan-ciftligi-1",
      },
    },
    {
      title: "Yılın Oyunu",
      winner: {
        name: "Pürtelaş",
        link: "https://tiyatrolar.com.tr/purtelas",
      },
      game: {
        name: "Martı",
        link: "https://tiyatrolar.com.tr/tiyatro/marti-1",
      },
    },
    {
      title: "Seçici Kurul Özel Ödülü",
      winner: { name: "Cem Uslu", link: "https://tiyatrolar.com.tr/cem-uslu" },
      game: {
        name: "Dünya'nın En Güzel Arabistanı",
        link: "https://tiyatrolar.com.tr/tiyatro/dunyanin-en-guzel-arabistani",
      },
    },
    {
      title: "Yılın Prodüksiyonu",
      winner: {
        name: "İstanbul Devlet Tiyatrosu",
        link: "https://tiyatrolar.com.tr/istanbuldevlettiyatrosu",
      },
      game: {
        name: "Romeo ve Juliet",
        link: "https://tiyatrolar.com.tr/tiyatro/romeo-ve-juliet-1",
      },
    },
    {
      title: "Üstün Akmen Teşfik Ödülü",
      winner: {
        name: "Erkan Akbulut",
        link: "https://tiyatrolar.com.tr/erkan-akbulut",
      },
      game: {
        name: "Dönüşüm",
        link: "https://tiyatrolar.com.tr/tiyatro/donusum-1",
      },
    },
    {
      title: "Üstün Akmen Teşfik Ödülü",
      winner: {
        name: "Seyhan Arman",
        link: "https://tiyatrolar.com.tr/seyhan-arman",
      },
      game: {
        name: "Küründen Kabare",
        link: "https://tiyatrolar.com.tr/tiyatro/kurunden-kabare",
      },
    },
    {
      title: "Üstün Akmen Tiyatroya Katkı Ödülü",
      winner: {
        name: "Şevket Çoruh",
        link: "https://tiyatrolar.com.tr/gunay-karacaoglu",
      },
    },
    {
      title: "Ekip Oyunu ",
      winner: {
        name: "Twotwo Production",
        link: "https://tiyatrolar.com.tr/twotwoproduction",
      },
      game: {
        name: "Mutluyduk Belki Bugüne Kadar",
        link: "https://tiyatrolar.com.tr/tiyatro/mutluyduk-belki-bugune-kadar",
      },
    },
    {
      title: "Ekip Oyunu",
      winner: {
        name: "Tiyatro Keyfi",
        link: "https://tiyatrolar.com.tr/tiyatrokeyfi",
      },
      game: {
        name: "Gözlerin Ardında Müzikal",
        link: "https://tiyatrolar.com.tr/tiyatro/gozlerin-ardinda-muzikal",
      },
    },
    {
      title: "Ustaya Saygı Ödülü",
      winner: {
        name: "Ali Poyrazoğlu",
        link: "https://tiyatrolar.com.tr/ali-poyrazoglu",
      },
    },
    {
      title: "Emek Ödülü",
      winner: {
        name: "Ferhan Şensoy",
        link: "https://tiyatrolar.com.tr/ferhan-sensoyi",
      },
    },
    {
      title: "Onur Ödülü",
      winner: {
        name: "Haldun Dormen",
        link: "https://tiyatrolar.com.tr/haldun-dormen",
      },
    },
    {
      title: "Onur Ödülü",
      winner: {
        name: "Suna Keskin",
        link: "https://tiyatrolar.com.tr/suna-keskin",
      },
    },
  ];

  return (
    <div className="flex gap-3 flex-col mt-2">
      <Breadcrumb className="mt-3">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Ana Sayfa</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/kazananlar-ve-adaylar">
              Kazananlar ve Adaylar
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbPage>2018</BreadcrumbPage>
        </BreadcrumbList>
      </Breadcrumb>

      <Awards awards={awards} />
    </div>
  );
};

export default Home;
