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
      title: "Yılın Oyunu",
      winner: {
        name: "Yolcu Tiyatro",
        link: "https://tiyatrolar.com.tr/yolcutiyatro",
      },
      game: {
        name: "Joko'nun Doğum Günü",
      },
      link: "https://tiyatrolar.com.tr/tiyatro/joko-nun-dogum-gunu",
    },
    {
      title: "Yılın En Başarılı Yönetmeni",
      winner: {
        name: "Ersin Umut Gülen",
        link: "https://tiyatrolar.com.tr/ersin-umut-guler",
      },
      game: {
        name: "Joko'nun Doğum Günü",
        link: "https://tiyatrolar.com.tr/tiyatro/joko-nun-dogum-gunu",
      },
    },
    {
      title: "Yılın En İyi Oyun Yazarı",
      winner: {
        name: "Bihter Dinçel",
        link: "https://tiyatrolar.com.tr/bihter-dincel",
      },
      game: {
        name: "Aşiyan",
        link: "https://tiyatrolar.com.tr/tiyatro/asiyan",
      },
    },
    {
      title: "Yılın Kadın Oyuncusu",
      winner: {
        name: "Nergis Öztürk",
        link: "https://tiyatrolar.com.tr/nergis-ozturk",
      },
      game: {
        name: "Akciğer",
        link: "https://tiyatrolar.com.tr/tiyatro/akciger",
      },
    },
    {
      title: "Yılın Kadın Oyuncusu",
      winner: {
        name: "Tilbe Saran ",
        link: "https://tiyatrolar.com.tr/tilbe-saran",
      },
      game: {
        name: "Vanya,Sonya,Maşa ve Spike",
        link: "https://tiyatrolar.com.tr/tiyatro/vanya-sonya-masa-ve-spike",
      },
    },
    {
      title: "Yılın Erkek Oyuncusu",
      winner: {
        name: "Alican Yücesoy",
        link: "https://tiyatrolar.com.tr/alican-yucesoy",
      },
      game: {
        name: "Gülünç Karanlık",
        link: "https://tiyatrolar.com.tr/tiyatro/gulunc-karanlik",
      },
    },
    {
      title: "Seçici Kurul Özel Ödülü",
      winner: {
        name: "Kazan Dairesi",
        link: "https://tiyatrolar.com.tr/kazandairesi",
      },
      game: {
        name: "Hedwig ve Angry Inch ",
        link: "https://tiyatrolar.com.tr/tiyatro/hedwig-ve-angry-inch",
      },
    },
    {
      title: "Seçici Kurul Özel Ödülü",
      winner: {
        name: "Fiziksel Tiyatro Araştırmaları",
        link: "https://tiyatrolar.com.tr/fizikseltiyatroarastirmalari",
      },
      game: {
        name: "Şato'nun Altında",
        link: "https://tiyatrolar.com.tr/tiyatro/satonun-altinda",
      },
    },
    {
      title: "Onur Ödülü",
      winner: {
        name: "Yıldız Kneter",
        link: "https://tiyatrolar.com.tr/yildiz-kenter",
      },
    },
    {
      title: "Onur Ödülü",
      winner: {
        name: "Erol Keskin",
        link: "https://tiyatrolar.com.tr/erol-keskin",
      },
    },
    {
      title: "Emek Ödülleri",
      winner: {
        name: "Genco Erkal",
        link: "https://tiyatrolar.com.tr/genco-erkal",
      },
    },
    {
      title: "Emek Ödülleri",
      winner: {
        name: "Müjdat Gezen",
        link: "https://tiyatrolar.com.tr/mujdat-gezen",
      },
    },
    {
      title: "Yılın Umut Veren Erkek Oyuncusu",
      winner: {
        name: "Cenk Dost Verdi",
        link: "https://tiyatrolar.com.tr/cenk-dost-verdi",
      },
      game: {
        name: "Joko'nun Doğum Günü",
        link: "https://tiyatrolar.com.tr/tiyatro/joko-nun-dogum-gunu",
      },
    },
    {
      title: "Yılın Umut Veren Kadın Oyuncusu",
      winner: {
        name: "Merve Dağlı",
        link: "https://tiyatrolar.com.tr/merve-dagli",
      },
      game: {
        name: "Joko'nun Doğum Günü",
        link: "https://tiyatrolar.com.tr/tiyatro/joko-nun-dogum-gunu",
      },
    },
    {
      title: "Yılın Sahne Tasarımı",
      winner: {
        name: "Behlüldane Tor ",
        link: "https://tiyatrolar.com.tr/behluldane-tor",
      },
      game: {
        name: "Coriolanus",
        link: "https://tiyatrolar.com.tr/tiyatro/coriolanus",
      },
    },
    {
      title: "Yılın Giysi Tasarımı",
      winner: {
        name: "Medina Yavuz Almaç",
        link: "https://tiyatrolar.com.tr/medina-yavuz-almac",
      },
      game: {
        name: "Coriolanus",
        link: "https://tiyatrolar.com.tr/tiyatro/coriolanus",
      },
    },
    {
      title: "En İyi Işık Tasarımı",
      winner: {
        name: "Önder Arık",
        link: "https://tiyatrolar.com.tr/onder-arik",
      },
      game: {
        name: "Coriolanus",
        link: "https://tiyatrolar.com.tr/tiyatro/coriolanus",
      },
    },
    {
      title: "Yılın Sahne Müziği",
      winner: {
        name: "Çağrı Beklen",
        link: "https://tiyatrolar.com.tr/cagri-beklen",
      },
      game: {
        name: "Coriolanus",
        link: "https://tiyatrolar.com.tr/tiyatro/coriolanus",
      },
    },
    {
      title: "Yılın Koreografisi ",
      winner: {
        name: "Selçuk Göldere",
        link: "https://tiyatrolar.com.tr/selcuk-goldere",
      },
      game: {
        name: "Joko'nun Doğum Günü",
        link: "https://tiyatrolar.com.tr/tiyatro/joko-nun-dogum-gunu",
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
          <BreadcrumbPage>2017</BreadcrumbPage>
        </BreadcrumbList>
      </Breadcrumb>

      <Awards awards={awards} />
    </div>
  );
};

export default Home;
