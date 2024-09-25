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
      title: "Seçici Kurul Özel Ödülü",
      winner: {
        name: "İstanbul Devlet Tiyatrosu",
        link: "https://tiyatrolar.com.tr/istanbuldevlettiyatrosu",
      },
      game: {
        name: "Bir Peri Masalı Radyum Kızları",
        link: "https://tiyatrolar.com.tr/tiyatro/bir-peri-masali-radyum-kizlari",
      },
    },
    {
      title: "Üstün Akmen Üst Kurul Ödülü",
      winner: {
        name: "Red Light Kışı",
        link: "https://tiyatrolar.com.tr/tiyatro/red-light-kisi",
      },
      game: {
        name: "Noact ",
        link: "https://tiyatrolar.com.tr/noact",
      },
    },
    {
      title: "Ekip Oyunu",
      winner: {
        name: "Cihangir Atölye Sahnesi",
        link: "https://tiyatrolar.com.tr/cihangiratolyesahnesi",
      },
      game: {
        name: "Bir Alaturka Hikayesi - Raif ile Letafet",
        link: "https://tiyatrolar.com.tr/tiyatro/bir-alaturka-hikayet",
      },
    },
    {
      title: "Yılın Prodüksiyonu",
      winner: {
        name: "Tiyatrokare",
        link: "https://tiyatrolar.com.tr/tiyatrokare",
      },
      game: {
        name: "Süper İyi Günler",
        link: "https://tiyatrolar.com.tr/tiyatro/super-iyi-gunler",
      },
    },
    {
      title: "Emek Ödülü",
      winner: {
        name: "Dilek Türker",
        link: "https://tiyatrolar.com.tr/dilek-turker",
      },
    },
    {
      title: "Emek Ödülü",
      winner: {
        name: "Rutkay Aziz",
        link: "https://tiyatrolar.com.tr/rutkay-aziz",
      },
    },
    {
      title: "Emek Ödülü",
      winner: {
        name: "MGöksel Kortay ",
        link: "https://tiyatrolar.com.tr/goksel-kortay",
      },
    },
    {
      title: "Onur Ödülü",
      winner: {
        name: "Handan Ural Ertuğrul",
        link: "https://tiyatrolar.com.tr/handan-uran-ertugrul",
      },
    },
    {
      title: "Onur Ödülü",
      winner: {
        name: "Engin Uludağ",
        link: "https://tiyatrolar.com.tr/engin-uludag",
      },
    },
    {
      title: "Efekt Tasarımı",
      winner: {
        name: "Ali Ören",
        link: "https://tiyatrolar.com.tr/ali-oren",
      },
      game: {
        name: "Radyatro Show",
        link: "https://tiyatrolar.com.tr/tiyatro/radyatro-show",
      },
    },
    {
      title: "Yılın Kareografisi",
      winner: {
        name: "Alparslan Karaduman",
        link: "https://tiyatrolar.com.tr/alpaslan-karaduman",
      },
      game: {
        name: "Kosovalı Peer Gynt",
        link: "https://tiyatrolar.com.tr/tiyatro/kosovali-peer-gynt",
      },
    },
    {
      title: "Yılın Sahne Müziği",
      winner: {
        name: "Türkü Deyiş Çınar",
        link: "https://tiyatrolar.com.tr/turku-deyis-cinar",
      },
      game: {
        name: "Kosovalı Peer Gynt",
        link: "https://tiyatrolar.com.tr/tiyatro/kosovali-peer-gynt",
      },
    },
    {
      title: "Yılın Işık Tasarımı",
      winner: {
        name: "Mustafa Türkoğlu",
        link: "https://tiyatrolar.com.tr/mustafa-turkoglu",
      },
      game: {
        name: "Can Yeleği",
        link: "https://tiyatrolar.com.tr/tiyatro/can-yelegi",
      },
    },
    {
      title: "Yılın Giysi Tasarımı",
      winner: {
        name: "Dilek Kaplan",
        link: "https://tiyatrolar.com.tr/dilek-kaplan",
      },
      game: {
        name: "Bir Peri Masalı Radyum Kızları",
        link: "https://tiyatrolar.com.tr/tiyatro/bir-peri-masali-radyum-kizlari",
      },
    },
    {
      title: "Yılın Sahne Tasarımı",
      winner: {
        name: "Onur Alagöz",
        link: "https://tiyatrolar.com.tr/onur-alagoz",
      },
      game: {
        name: "Sesler",
        link: "https://tiyatrolar.com.tr/tiyatro/sesler-1",
      },
    },
    {
      title: "Yılın Umut Veren Erkek Oyuncusu",
      winner: {
        name: "Uğur Kanbay",
        link: "https://tiyatrolar.com.tr/ugur-kanbay",
      },
      game: {
        name: "Eylül",
        link: "https://tiyatrolar.com.tr/tiyatro/eylul",
      },
    },
    {
      title: "Yılın Umut Veren Erkek Oyuncusu",
      winner: {
        name: "Emir Özden",
        link: "https://tiyatrolar.com.tr/emir-ozden",
      },
      game: {
        name: "Süper İyi Günler",
        link: "https://tiyatrolar.com.tr/tiyatro/super-iyi-gunler",
      },
    },
    {
      title: "Yılın Umut Veren Kadın Oyuncusu",
      winner: {
        name: "Ece Cesmioğlu",
        link: "https://tiyatrolar.com.tr/ece-cesmioglu",
      },
      game: {
        name: "Dogville",
        link: "https://tiyatrolar.com.tr/tiyatro/dogville",
      },
    },
    {
      title: "Yılın Yardımcı Rolde Erkek Oyuncusu ",
      winner: {
        name: "Ozan Dağara",
        link: "https://tiyatrolar.com.tr/ozan-dagara",
      },
      game: {
        name: "Kosovalı Peer Gynt",
        link: "https://tiyatrolar.com.tr/tiyatro/kosovali-peer-gynt",
      },
    },
    {
      title: "Yılın Yardımcı Rolde Kadın Oyuncusu",
      winner: {
        name: "Aslı Aybars",
        link: "https://tiyatrolar.com.tr/asli-aybars",
      },
      game: {
        name: "Felatun Bey ile Rakım Efendi",
        link: "https://tiyatrolar.com.tr/tiyatro/felatun-bey-ile-rakim-efendi-1",
      },
    },
    {
      title: "Yılın Erkek Oyuncusu",
      winner: {
        name: "Ozan Güven",
        link: "https://tiyatrolar.com.tr/ozan-guven",
      },
      game: {
        name: "Don Kişot'um Ben",
        link: "https://tiyatrolar.com.tr/tiyatro/don-kisotum-ben",
      },
    },
    {
      title: "Yılın Kadın Oyuncusu",
      winner: {
        name: "Günay Karacaoğlu",
        link: "https://tiyatrolar.com.tr/gunay-karacaoglu2",
      },
      game: {
        name: "Don Kişot'um Ben",
        link: "https://tiyatrolar.com.tr/tiyatro/don-kisotum-ben",
      },
    },
    {
      title: "Yılın Yerli Oyun Yazarı",
      winner: {
        name: "Ahmet Sami Özbudak",
        link: "https://tiyatrolar.com.tr/ahmet-sami-ozbudak",
      },
      game: {
        name: "Meçhul Paşa",
        link: "https://tiyatrolar.com.tr/404",
      },
    },
    {
      title: "Yılın Yönetmeni",
      winner: {
        name: "Saydam Yeniay",
        link: "https://tiyatrolar.com.tr/saydam-yeniay",
      },
      game: {
        name: "Kosovalı Peer Gynt",
        link: "https://tiyatrolar.com.tr/tiyatro/kosovali-peer-gynt",
      },
    },
    {
      title: "Yılın Oyunu",
      winner: {
        name: "Tiyatroadam",
        link: "https://tiyatrolar.com.tr/tiyatroadam",
      },
      game: {
        name: "Meçhul Paşa",
        link: "https://tiyatrolar.com.tr/404",
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
          <BreadcrumbPage>2019</BreadcrumbPage>
        </BreadcrumbList>
      </Breadcrumb>

      <Awards awards={awards} />
    </div>
  );
};

export default Home;
