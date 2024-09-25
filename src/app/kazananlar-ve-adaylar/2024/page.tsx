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
      title: "Yılın Umut Veren Kadın Oyuncusu",
      winner: {
        name: "Büşra Şensoy",
        link: "https://tiyatrolar.com.tr/busra-sensoy",
      },
      game: {
        name: "Montaigne",
        link: "https://tiyatrolar.com.tr/tiyatro/montaigne",
      },
    },
    {
      title: "Yılın Yerli Oyun Yazarı",
      winner: {
        name: "Doğaç Gözüdeli",
        link: "https://tiyatrolar.com.tr/dogac-gozudeli",
      },
      game: {
        name: "O Zaman Küs Ölene Kadar!",
        link: "https://tiyatrolar.com.tr/tiyatro/o-zaman-kus-olene-kadar",
      },
    },
    {
      title: "Seçici Kurul Özel Ödülü",
      winner: {
        name: "Kerim Urun",
        link: "https://tiyatrolar.com.tr/kerim-urun",
      },
      game: {
        name: "Bay Samir",
        link: "https://tiyatrolar.com.tr/tiyatro/bay-samir",
      },
    },
    {
      title: "Seçici Kurul Özel Ödülü",
      winner: {
        name: "Gökhan Gürün",
        link: "https://tiyatrolar.com.tr/gokhan-gurun",
      },
      game: {
        name: "Bay Samir",
        link: "https://tiyatrolar.com.tr/tiyatro/bay-samir",
      },
    },
    {
      title: "Üstün Akmen Teşvik Ödülü",
      winner: {
        name: "Tebdil-i Mekan",
        link: "https://tiyatrolar.com.tr/tiyatro/tebdil-i-mekan",
      },
      game: {
        name: "Apartman Sahne",
        link: "https://tiyatrolar.com.tr/apartmansahne",
      },
    },
    {
      title: "Seçici Kurul Özel Ödülü",
      winner: {
        name: "Cüneyt Uzunlar",
        link: "https://tiyatrolar.com.tr/cuneyt-uzunlar",
      },
      game: {
        name: "Merdane",
        link: "https://tiyatrolar.com.tr/tiyatro/merdane",
      },
    },
    {
      title: "Üstün Akmen Teşvik Ödülü",
      winner: {
        name: "Meltem Erkurtulgu",
        link: "https://tiyatrolar.com.tr/meltem-erkurtulgu",
      },
      game: {
        name: "Othello! Seyircili İntikam Provası",
        link: "https://tiyatrolar.com.tr/tiyatro/othello-seyircili-intikam-provasi",
      },
    },
    {
      title: "Yılın En İyi Dekor Tasarımı",
      winner: {
        name: "Ceyda Balaban",
        link: "https://tiyatrolar.com.tr/ceyda-balaban",
      },
      game: {
        name: "Sığınak",
        link: "https://tiyatrolar.com.tr/tiyatro/siginak",
      },
    },
    {
      title: "Yılın En İyi Işık Tasarımı",
      winner: {
        name: "Cem Yılmazer",
        link: "https://tiyatrolar.com.tr/cem-yilmazer",
      },
      game: {
        name: "Küheylan",
        link: "https://tiyatrolar.com.tr/tiyatro/kuheylan-2",
      },
    },
    {
      title: "Seçici Kurul Özel Ödülü",
      winner: {
        name: "Nihan Doğa",
        link: "https://tiyatrolar.com.tr/nihan-doga",
      },
      game: {
        name: "Disko Topu",
        link: "https://tiyatrolar.com.tr/tiyatro/disko-topu",
      },
    },
    {
      title: "En İyi Oyun Müziği",
      winner: {
        name: "Kenan Doğulu",
        link: "https://tiyatrolar.com.tr/kenan-dogulu",
      },
      game: {
        name: "Kim Bu Ben",
        link: "https://tiyatrolar.com.tr/tiyatro/kim-bu-ben",
      },
    },
    {
      title: "En İyi Oyun Müziği",
      winner: {
        name: "Albin Sopa",
        link: "https://tiyatrolar.com.tr/albin-sopa",
      },
      game: {
        name: "Caesar - İktidar Oyunu",
        link: "https://tiyatrolar.com.tr/tiyatro/julius-caesar-1",
      },
    },
    {
      title: "Yılın Dramaturgu",
      winner: {
        name: "Ömer İvedi",
        link: "https://tiyatrolar.com.tr/omer-ivedi",
      },
      game: {
        name: "Anahtar Deliğinden Gişeye Bakan Üç Kişi Ve Sonat",
        link: "https://tiyatrolar.com.tr/tiyatro/anahtar-deliginden-giseye-bakan-uc-kisi-ve-sonat",
      },
    },
    {
      title: "Ekip Oyunu",
      winner: {
        name: "Sevgi Soysal Yaşamakta Israr Ediyor",
        link: "https://tiyatrolar.com.tr/tiyatro/sevgi-soysal-yasamakta-israr-ediyor",
      },
      game: {
        name: "BGST - Boğaziçi Gösteri Sanatları Topluluğu",
        link: "https://tiyatrolar.com.tr/bgst",
      },
    },
    {
      title: "Yılın Umut Veren Kadın Oyuncusu",
      winner: {
        name: "Gülşah Yavuz",
        link: "https://tiyatrolar.com.tr/gulsah-yavuz",
      },
      game: {
        name: "Mavi Müzikhol",
        link: "https://tiyatrolar.com.tr/tiyatro/mavi-muzikhol",
      },
    },
    {
      title: "Yılın Umut Veren Kadın Oyuncusu",
      winner: {
        name: "Diana Çilingaryan",
        link: "https://tiyatrolar.com.tr/diana-cilingaryan",
      },
      game: {
        name: "Yüreğim Dağlardadır",
        link: "https://tiyatrolar.com.tr/tiyatro/yuregim-daglardadir",
      },
    },
    {
      title: "Yılın Umut Veren Erkek Oyuncusu",
      winner: {
        name: "Oğuzhan Aksu",
        link: "https://tiyatrolar.com.tr/oguzhan-aksu",
      },
      game: {
        name: "Ceviz Ağacı",
        link: "https://tiyatrolar.com.tr/tiyatro/ceviz-agaci",
      },
    },
    {
      title: "Yılın Umut Veren Erkek Oyuncusu",
      winner: {
        name: "Adil İrfanoğlu",
        link: "https://tiyatrolar.com.tr/adil-irfanoglu",
      },
      game: {
        name: "Ceviz Ağacı",
        link: "https://tiyatrolar.com.tr/tiyatro/ceviz-agaci",
      },
    },
    {
      title: "Yılın Umut Veren Erkek Oyuncusu",
      winner: {
        name: "Sevkan Çelik",
        link: "https://tiyatrolar.com.tr/sevkan-celik",
      },
      game: { name: "Aut", link: "https://tiyatrolar.com.tr/tiyatro/aut-2" },
    },
    {
      title: "Yılın Umut Veren Erkek Oyuncusu",
      winner: {
        name: "Mahmut Ugar",
        link: "https://tiyatrolar.com.tr/mahmut-ugar",
      },
      game: { name: "Aut", link: "https://tiyatrolar.com.tr/tiyatro/aut-2" },
    },
    {
      title: "Yılın Komedi Oyunu",
      winner: { name: "Sır", link: "https://tiyatrolar.com.tr/tiyatro/sir-1" },
      game: {
        name: "Gate Production",
        link: "https://tiyatrolar.com.tr/gate-production",
      },
    },
    {
      title: "Yılın Komedi Kadın Oyuncusu",
      winner: {
        name: "Mahperi Mertoğlu",
        link: "https://tiyatrolar.com.tr/mahperi-mertoglu",
      },
      game: {
        name: "Gidiş Dönüş Moskova (Retro)",
        link: "https://tiyatrolar.com.tr/tiyatro/gidis-donus-moskova-retro-yetiskin",
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
          <BreadcrumbPage>2024</BreadcrumbPage>
        </BreadcrumbList>
      </Breadcrumb>

      <Awards awards={awards} />
    </div>
  );
};

export default Home;
