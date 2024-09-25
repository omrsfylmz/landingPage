import Awards from "../components/Awards";
interface Award {
  title: string;
  winner: {
    name: string;
    link: string;
  };
  game?: {
    name: string;
    link: string;
  };
}

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
      title: "Yılın Oyunu",
      winner: {
        name: "İstanbul Şehir Tiyatroları",
        link: "https://tiyatrolar.com.tr/istanbulsehirtiyatrolari",
      },
      game: {
        name: "Cadı Kazanı",
        link: "https://tiyatrolar.com.tr/tiyatro/cadi-kazani-2",
      },
    },
    {
      title: "Yılın Yönetmeni",
      winner: {
        name: "M.Nurullah Tuncer",
        link: "https://tiyatrolar.com.tr/m-nurullah-tuncer",
      },
      game: {
        name: "Don Kişot'un Yeni Maceraları",
        link: "https://tiyatrolar.com.tr/tiyatro/don-kisotun-yeni-maceralari",
      },
    },
    {
      title: "Yılın Yerli Oyun Yazarları",
      winner: {
        name: "İhsan Sami Çolak",
        link: "https://tiyatrolar.com.tr/ihsan-sami-colak", // Corrected link to match the name
      },
      game: {
        name: "Hayat Seni Çok Seviyorum",
        link: "https://tiyatrolar.com.tr/tiyatro/hayat-seni-cok-seviyorum",
      },
    },
    {
      title: "Yılın Dramaturgu", // Corrected title
      winner: {
        name: "Dilek Tekintaş",
        link: "https://tiyatrolar.com.tr/dilek-tekintas",
      },
      game: {
        name: "Richard",
        link: "https://tiyatrolar.com.tr/tiyatro/richard",
      },
    },
    {
      title: "Yılın Kadın Oyuncusu",
      winner: {
        name: "Şenay Gürler",
        link: "https://tiyatrolar.com.tr/senay-gurler",
      },
      game: {
        name: "Medea'ya Göre Ahlak",
        link: "https://tiyatrolar.com.tr/tiyatro/medeaya-gore-ahlak",
      },
    },
    {
      title: "Yılın Erkek Oyuncusu",
      winner: {
        name: "Caner Cindoruk",
        link: "https://tiyatrolar.com.tr/caner-cindoruk",
      },
      game: {
        name: "Eve Dönüşler",
        link: "https://tiyatrolar.com.tr/tiyatro/eve-donusler",
      },
    },
    {
      title: "Yılın Kadın Komedi Oyuncusu",
      winner: {
        name: "Yeşim Koçak", // Removed trailing space
        link: "https://tiyatrolar.com.tr/yesim-kocak",
      },
      game: {
        name: "Tartuffe",
        link: "https://tiyatrolar.com.tr/tiyatro/tartuffe-4",
      },
    },
    {
      title: "Yılın Erkek Komedi Oyuncusu",
      winner: {
        name: "Timur Acar",
        link: "https://tiyatrolar.com.tr/timur-acar",
      },
      game: {
        name: "Şirreti Evcilleştirmek (The Taming of The Shrew)", // Added space before parenthesis
        link: "https://tiyatrolar.com.tr/tiyatro/sirreti-evcillestirmek-the-taming-of-the-shrew",
      },
    },
    {
      title: "Yılın Umut Veren Kadın Oyuncusu",
      winner: {
        name: "Ezgi Enec",
        link: "https://tiyatrolar.com.tr/ezgi-enec",
      },
      game: {
        name: "Medea'nın Parmak İzleri",
        link: "https://tiyatrolar.com.tr/tiyatro/medeanin-parmak-izleri",
      },
    },
    {
      title: "Yılın Umut Veren Erkek Oyuncusu",
      winner: {
        name: "Alper Şimşek",
        link: "https://tiyatrolar.com.tr/alper-simsek",
      },
      game: {
        name: "Eve Dönüşler",
        link: "https://tiyatrolar.com.tr/tiyatro/eve-donusler",
      },
    },
    {
      title: "Yılın Umut Veren Erkek Oyuncusu",
      winner: {
        name: "Nejat Uygur",
        link: "https://tiyatrolar.com.tr/nejat-uygur-1",
      },
      game: {
        name: "Paraya Hayır",
        link: "https://tiyatrolar.com.tr/tiyatro/paraya-hayir-1",
      },
    },
    {
      title: "Yılın Sahne Tasarımı",
      winner: {
        name: "Aytuğ Dereli",
        link: "https://tiyatrolar.com.tr/aytug-dereli",
      },
      game: {
        name: "Kafkas Tebeşir Dairesi",
        link: "https://tiyatrolar.com.tr/tiyatro/kafkas-tebesir-dairesi-3",
      },
    },
    {
      title: "Yılın Giysi Tasarımı",
      winner: {
        name: "Cemre Bulak",
        link: "https://tiyatrolar.com.tr/cemre-bulak",
      },
      game: {
        name: "Babalar ve Oğullar",
        link: "https://tiyatrolar.com.tr/tiyatro/babalar-ve-ogullar",
      },
    },
    {
      title: "Yılın Koreografisi",
      winner: {
        name: "Meral Ceranoğlu",
        link: "https://tiyatrolar.com.tr/meral-ceranoglu-1",
      },
      game: {
        name: "Fosforlu Cevriye",
        link: "https://tiyatrolar.com.tr/tiyatro/fosforlu-cevriye-1",
      },
    },
    {
      title: "Yılın Sahne Müziği",
      winner: {
        name: "Çiğdem Erken",
        link: "https://tiyatrolar.com.tr/cigdem-erken",
      },
      game: {
        name: "Tataylada Son Dans",
        link: "https://tiyatrolar.com.tr/tiyatro/tatavlada-son-dans",
      },
    },
    {
      title: "Yılın Sahne Müziği",
      winner: {
        name: "Batuhan Parlak",
        link: "https://tiyatrolar.com.tr/batuhan-parlak",
      },
      game: {
        name: "Tataylada Son Dans",
        link: "https://tiyatrolar.com.tr/tiyatro/tatavlada-son-dans",
      },
    },
    {
      title: "Ragıp Ertuğrul Özel Ödülü",
      winner: {
        name: "Zeynep Erkekli",
        link: "https://tiyatrolar.com.tr/zeynep-erkekli",
      },
      game: {
        name: "Bir Ruhun Hikayesi",
        link: "https://tiyatrolar.com.tr/tiyatro/bir-ruhun-hikayesi",
      },
    },
    {
      title: "Yılın Ekibi",
      winner: {
        name: "Cimri",
        link: "https://tiyatrolar.com.tr/tiyatro/cimri-5",
      },
      game: {
        name: "Tiyatro BeReZe",
        link: "https://tiyatrolar.com.tr/tiyatro/bereze", // Fixed URL
      },
    },
    {
      title: "Tiyatro Oyun Yazarı Emek Ödülü",
      winner: {
        name: "Kaan Erkam",
        link: "https://tiyatrolar.com.tr/kaan-erkam",
      },
      // No game associated; optional field
    },
    {
      title: "Üstün Akmen Vefa Ödülü",
      winner: {
        name: "Şahlarıda Vurular",
        link: "https://tiyatrolar.com.tr/tiyatro/sahlari-da-vururlar",
      },
      game: {
        name: "Orta Oyuncular",
        link: "https://tiyatrolar.com.tr/ortaoyuncular",
      },
    },
    {
      title: "Yılın Müzikali",
      winner: {
        name: "Jekyll & Hydee",
        link: "https://tiyatrolar.com.tr/tiyatro/jekyll-hydee",
      },
      game: {
        name: "Kerki Solfej",
        link: "https://tiyatrolar.com.tr/kerkisolfej",
      },
    },
    {
      title: "Kültür Sanata Katkı",
      winner: {
        name: "Nedret Avşar",
        link: "https://tiyatrolar.com.tr/nedret-avsar",
      },
      // No game associated; optional field
    },
    {
      title: "Üstün Akmen Onur Ödülü",
      winner: {
        name: "Hikmet Kömürcü",
        link: "https://tiyatrolar.com.tr/hikmet-kormukcu",
      },
      // No game associated; optional field
    },
    {
      title: "Üstün Akmen Onur Ödülü",
      winner: {
        name: "Naşit Özcan",
        link: "https://tiyatrolar.com.tr/nasit-ozcan",
      },
      // No game associated; optional field
    },
    {
      title: "Üstün Akmen Onur Ödülü",
      winner: {
        name: "Suna Selen",
        link: "https://tiyatrolar.com.tr/suna-selen",
      },
      // No game associated; optional field
    },
    {
      title: "Üstün Akmen Onur Ödülü",
      winner: {
        name: "Zihni Göktay",
        link: "https://tiyatrolar.com.tr/zihni-goktay",
      },
      // No game associated; optional field
    },
    {
      title: "Seçici Kurul Özel Ödülü",
      winner: {
        name: "Kadınlar Bölümü.IR",
        link: "https://tiyatrolar.com.tr/tiyatro/kadinlar-bolumuir",
      },
      // No game associated; optional field
    },
    {
      title: "Seçici Kurul Özel Ödülü",
      winner: {
        name: "Silüet",
        link: "https://tiyatrolar.com.tr/tiyatro/siluet",
      },
      game: {
        name: "Pat Atolye",
        link: "https://tiyatrolar.com.tr/patatolye",
      },
    },
    {
      title: "Seçici Kurul Özel Ödülü",
      winner: {
        name: "Olcay Tanberken",
        link: "https://tiyatrolar.com.tr/olcay-tanberken",
      },
      game: {
        name: "İzlanda'nın Baikenti?",
        link: "https://tiyatrolar.com.tr/tiyatro/izlandanin-baskenti",
      },
    },
    {
      title: "Seçici Kurul Özel Ödülü",
      winner: {
        name: "Çıkmaz Sokak",
        link: "https://tiyatrolar.com.tr/tiyatro/cikmaz-sokak-1",
      },
      game: {
        name: "Şişli Tiyatrosu",
        link: "https://tiyatrolar.com.tr/sislitiyatrosu",
      },
    },
    {
      title: "Seçici Kurul Özel Ödülü",
      winner: {
        name: "Aslı İktu",
        link: "https://tiyatrolar.com.tr/asli-iktu-1",
      },
      game: {
        name: "Mata Hari",
        link: "https://tiyatrolar.com.tr/tiyatro/mata-hari",
      },
    },
    {
      title: "Seçici Kurul Özel Ödülü",
      winner: {
        name: "Ebru Unurtan",
        link: "https://tiyatrolar.com.tr/ebru-unurtan",
      },
      game: {
        name: "Camille (Düşünce)", // Added space before parenthesis
        link: "https://tiyatrolar.com.tr/tiyatro/camille-dusunce",
      },
    },
    {
      title: "Yılın Işık Tasarımı",
      winner: {
        name: "Akın Yılmaz",
        link: "https://tiyatrolar.com.tr/akin-yilmaz",
      },
      game: {
        name: "Don Kişot'un Yeni Maceraları",
        link: "https://tiyatrolar.com.tr/tiyatro/don-kisotun-yeni-maceralari",
      },
    },
    {
      title: "Yılın Işık Tasarımı",
      winner: {
        name: "Kemal Yiğitcan",
        link: "https://tiyatrolar.com.tr/kemal-yigitcan",
      },
      game: {
        name: "Fosforlu Cevriye",
        link: "https://tiyatrolar.com.tr/tiyatro/fosforlu-cevriye-1",
      },
    },
    {
      title: "Yılın Işık Tasarımı",
      winner: {
        name: "Ayşe Sedef Ayter",
        link: "https://tiyatrolar.com.tr/kelepce-kullanma-kilavuzu", // Updated link from 404 to actual game link
      },
      game: {
        name: "Kelepçe Kullanma Kılavuzu",
        link: "https://tiyatrolar.com.tr/tiyatro/kelepce-kullanma-kilavuzu",
      },
    },
    {
      title: "Yılın Kadın Komedi Oyuncusu",
      winner: {
        name: "Merve Polat",
        link: "https://tiyatrolar.com.tr/merve-polat",
      },
      game: {
        name: "Yan Rol",
        link: "https://tiyatrolar.com.tr/tiyatro/yan-rol-1",
      },
    },
    {
      title: "Seçici Kurul Özel Ödülü",
      winner: {
        name: "Uyandığımda Sesim Yoktu",
        link: "https://tiyatrolar.com.tr/tiyatro/uyandigimda-sesim-yoktu",
      },
      game: {
        name: "Bu Yapım",
        link: "https://tiyatrolar.com.tr/buyapim",
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
          <BreadcrumbPage>2023</BreadcrumbPage>
        </BreadcrumbList>
      </Breadcrumb>

      <Awards awards={awards} />
    </div>
  );
};

export default Home;
