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
      title: "Yılın Prodiksüyonu",
      winner: {
        name: "Io",
        link: "https://tiyatrolar.com.tr/tiyatro/io",
      },
      game: {
        name: "Stüdio Oyuncuları",
        link: "https://tiyatrolar.com.tr/studiooyunculari",
      },
    },
    {
      title: "Yılın Oyunu",
      winner: {
        name: "Bernarda",
        link: "https://tiyatrolar.com.tr/tiyatro/bernarda-1",
      },
      game: {
        name: "Proje No 2 ",
        link: "https://tiyatrolar.com.tr/projeno2",
      },
    },
    {
      title: "Yılın Oyunu",
      winner: {
        name: "Gomidas",
        link: "https://tiyatrolar.com.tr/tiyatro/gomidas",
      },
      game: {
        name: "Yolcu Tiyatro",
        link: "https://tiyatrolar.com.tr/yolcutiyatro",
      },
    },
    {
      title: "Yılın Yönetmeni",
      winner: {
        name: "İlknur Güneş",
        link: "https://tiyatrolar.com.tr/ilknur-gunes",
      },
      game: {
        name: "Personas Kuartet",
        link: "https://tiyatrolar.com.tr/tiyatro/personas-kuartet",
      },
    },
    {
      title: "Yılın Yönetmeni",
      winner: {
        name: "Serdar Saatman",
        link: "https://tiyatrolar.com.tr/serdar-saatman",
      },
      game: {
        name: "Ölü Kadınlar Diyarı",
        link: "https://tiyatrolar.com.tr/tiyatro/olu-kadinlar-diyari",
      },
    },
    {
      title: "Yılın Yerli Oyun Yazarı",
      winner: {
        name: "Erdi Işık",
        link: "https://tiyatrolar.com.tr/erdi-isik",
      },
      game: {
        name: "Hipokrat",
        link: "https://tiyatrolar.com.tr/tiyatro/hipokrat",
      },
    },
    {
      title: "Yılın Yerli Oyun Yazarı",
      winner: {
        name: "Murat Karahüseyinoğlu ",
        link: "https://tiyatrolar.com.tr/murat-karahuseyinoglu",
      },
      game: {
        name: "Godot Bize Gelmez",
        link: "https://tiyatrolar.com.tr/tiyatro/godot-bize-gelmez",
      },
    },
    {
      title: "Yılın Dragmaturu",
      winner: {
        name: "Gökhan Aktemur",
        link: "https://tiyatrolar.com.tr/gokhan-aktemur",
      },
      game: {
        name: "Yaftalı Tabut",
        link: "hhttps://tiyatrolar.com.tr/tiyatro/yaftali-tabut",
      },
    },
    {
      title: "Yılın Kadın Oyuncusu",
      winner: {
        name: "Özge Arslan",
        link: "https://tiyatrolar.com.tr/ozge-arslan",
      },
      game: {
        name: "Bernarda",
        link: "https://tiyatrolar.com.tr/tiyatro/bernarda-1",
      },
    },
    {
      title: "Yılın Kadın Oyuncusu",
      winner: {
        name: "Rüçhan Çalışkur",
        link: "https://tiyatrolar.com.tr/ruchan-caliskur",
      },
      game: {
        name: "Ölü Kadınlar Diyarı",
        link: "https://tiyatrolar.com.tr/tiyatro/olu-kadinlar-diyari",
      },
    },
    {
      title: "Yılın Erkek Oyuncusu",
      winner: {
        name: "Cem Yiğit Üzümoğlu",
        link: "https://tiyatrolar.com.tr/cem-uzumoglu",
      },
      game: {
        name: "Evlat",
        link: "https://tiyatrolar.com.tr/tiyatro/evlat",
      },
    },
    {
      title: "Yılın Erkek Oyuncusu",
      winner: {
        name: "Onur Ünsal",
        link: "https://tiyatrolar.com.tr/onur-unsal",
      },
      game: {
        name: "Babamı Kim Öldürdü",
        link: "https://tiyatrolar.com.tr/tiyatro/babami-kim-oldurdu",
      },
    },
    {
      title: "Yılın Yardımcı Rolde Kadın Oyuncusu",
      winner: {
        name: "Ebru Saçar",
        link: "https://tiyatrolar.com.tr/ebru-sacar",
      },
      game: {
        name: "Memleketimden İnsan Manzaraları",
        link: "https://tiyatrolar.com.tr/tiyatro/memleketimden-insan-manzaralari",
      },
    },
    {
      title: "Yılın Yardımcı Rolde Kadın Oyuncusu",
      winner: {
        name: "Doğa Başak",
        link: "https://tiyatrolar.com.tr/doga-basak",
      },
      game: {
        name: "İki Efendi'nin Uşağı",
        link: "https://tiyatrolar.com.tr/tiyatro/iki-efendinin-usagi-2",
      },
    },
    {
      title: "Yılın Yardımcı Rolde Erkek Oyuncusu",
      winner: {
        name: "İsmet Üstekin",
        link: "https://tiyatrolar.com.tr/ismet-ustekin",
      },
      game: {
        name: "Bulaşıkcılar",
        link: "https://tiyatrolar.com.tr/tiyatro/bulasikcilar",
      },
    },
    {
      title: "Yılın Umut Veren Kadın Oyuncusu",
      winner: {
        name: "Naz Çağla Irmak",
        link: "https://tiyatrolar.com.tr/naz-cagla-irmak",
      },
      game: {
        name: "Westend- Batının Sonu",
        link: "https://tiyatrolar.com.tr/tiyatro/westend",
      },
    },
    {
      title: "Yılın Umut Veren Kadın Oyuncusu",
      winner: {
        name: "Cansu Tekoluk",
        link: "https://tiyatrolar.com.tr/cansu-tekoluk",
      },
      game: {
        name: "Tut Elimden Rovni",
        link: "https://tiyatrolar.com.tr/tiyatro/tut-elimden-rovni",
      },
    },
    {
      title: "Yılın Umut Veren Kadın Oyuncusu",
      winner: {
        name: "Selena Demirli",
        link: "https://tiyatrolar.com.tr/selena-demirli",
      },
      game: {
        name: "Ağladım",
        link: "https://tiyatrolar.com.tr/tiyatro/agladim",
      },
    },
    {
      title: "Yılın Umut Veren Erkek Oyuncusu Oyuncusu",
      winner: {
        name: "Toprak Can Adıgüzel",
        link: "https://tiyatrolar.com.tr/toprak-can-adiguzel",
      },
      game: {
        name: "Yak Bunu",
        link: "https://tiyatrolar.com.tr/tiyatro/yak-bunu",
      },
    },
    {
      title: "Yılın Umut Veren Erkek Oyuncusu Oyuncusu",
      winner: {
        name: "Savaş Alp Başar",
        link: "https://tiyatrolar.com.tr/savas-alp-basar",
      },
      game: {
        name: "Tut Elimden Rovni",
        link: "https://tiyatrolar.com.tr/tiyatro/tut-elimden-rovni",
      },
    },
    {
      title: "Yılın Sahne Tasarımı",
      winner: {
        name: "Başak Özdoğan",
        link: "https://tiyatrolar.com.tr/basak-ozdogan",
      },
      game: {
        name: "En Güzel Parçam",
        link: "https://tiyatrolar.com.tr/tiyatro/en-guzel-parcam",
      },
    },
    {
      title: "Yılın Giysi Tasarımı",
      winner: {
        name: "Eylül Gürcan",
        link: "https://tiyatrolar.com.tr/eylul-gurcan",
      },
      game: {
        name: "İki Efendi'nin Uşağı",
        link: "https://tiyatrolar.com.tr/tiyatro/iki-efendinin-usagi-2",
      },
    },
    {
      title: "Yılın Giysi Tasarımı",
      winner: {
        name: "Gaye Kızılışık",
        link: "https://tiyatrolar.com.tr/gaye-kizilisik",
      },
      game: {
        name: "Madam Giyotin",
        link: "https://tiyatrolar.com.tr/tiyatro/madam-giyotin",
      },
    },
    {
      title: "Yılın Işık Tasarımı",
      winner: {
        name: "Önder Arık",
        link: "https://tiyatrolar.com.tr/onder-arik",
      },
      game: {
        name: "Lâl Hayal",
        link: "https://tiyatrolar.com.tr/tiyatro/ll-hayal",
      },
    },
    {
      title: "Yılın Işık Tasarımı",
      winner: {
        name: "Malcolm Keith Kay",
        link: "https://tiyatrolar.com.tr/malcolm-keith-kay",
      },
      game: {
        name: "Unutmak",
        link: "https://tiyatrolar.com.tr/tiyatro/unutmak-1",
      },
    },
    {
      title: "Yılın Sahne Müziği ",
      winner: {
        name: "Erdem Altınses",
        link: "https://tiyatrolar.com.tr/erdem-altinses",
      },
      game: {
        name: "Bernarda",
        link: "https://tiyatrolar.com.tr/tiyatro/bernarda-1",
      },
    },
    {
      title: "Yılın Sahne Müziği",
      winner: {
        name: "Özge Arslan",
        link: "https://tiyatrolar.com.tr/ozge-arslan",
      },
      game: {
        name: "Bernarda",
        link: "https://tiyatrolar.com.tr/tiyatro/bernarda-1",
      },
    },
    {
      title: "Yılın Sahne Müziği",
      winner: {
        name: "Cengiz Orhonlu",
        link: "https://tiyatrolar.com.tr/cengiz-orhonlu",
      },
      game: {
        name: "Sana Bir Sır Vereceğim",
        link: "https://tiyatrolar.com.tr/tiyatro/sana-bir-sir-verecegim",
      },
    },
    {
      title: "Yılın Koreografisi",
      winner: {
        name: "Fırat Akarcalı",
        link: "https://tiyatrolar.com.tr/firat-akarcali",
      },
      game: {
        name: "Uçmak",
        link: "https://tiyatrolar.com.tr/tiyatro/ucmak-hezarfen-ahmet-celebi",
      },
    },
    {
      title: "Yılın Koreografisi",
      winner: {
        name: "Evrim Akyay",
        link: "https://tiyatrolar.com.tr/evrim-akyay",
      },
      game: {
        name: "Yol",
        link: "https://tiyatrolar.com.tr/tiyatro/yol-2",
      },
    },
    {
      title: "Ekip Oyunu",
      winner: {
        name: "Personas Kuartet",
        link: "https://tiyatrolar.com.tr/tiyatro/personas-kuartet",
      },
      game: {
        name: "Uyumsuz Tiyatro",
        link: "https://tiyatrolar.com.tr/uyumsuztiyatro",
      },
    },
    {
      title: "Ekip Oyunu",
      winner: {
        name: "Yaftalı Tabut",
        link: "https://tiyatrolar.com.tr/tiyatro/yaftali-tabut",
      },
      game: {
        name: "İstanbul Şehir Tiyatroları",
        link: "https://tiyatrolar.com.tr/istanbulsehirtiyatrolari",
      },
    },
    {
      title: "Seçici Kurul Özel Ödülü",
      winner: {
        name: "Yiğit Özşener",
        link: "https://tiyatrolar.com.tr/yigit-ozsener",
      },
    },
    {
      title: "Seçici Kurul Özel Ödülü",
      winner: {
        name: "Melek Ceylan",
        link: "https://tiyatrolar.com.tr/melek-ceylan",
      },
      game: {
        name: "On İkinci Ev ",
        link: "https://tiyatrolar.com.tr/tiyatro/on-ikinci-ev",
      },
    },
    {
      title: "Seçici Kurul Özel Ödülü",
      winner: {
        name: "Tamer Levent",
        link: "https://tiyatrolar.com.tr/tamer-levent",
      },
    },
    {
      title: "Yılın Kadın Komedi Oyuncusu",
      winner: {
        name: "Serpil Göral",
        link: "https://tiyatrolar.com.tr/serpil-goral",
      },
      game: {
        name: "Ödenmeyecek! Ödemiyoruz!",
        link: "https://tiyatrolar.com.tr/tiyatro/odenmeyecek-odemiyoruz-2",
      },
    },
    {
      title: "Yılın Erkek Komedi Oyuncusu",
      winner: {
        name: "Kemal Uçar",
        link: "https://tiyatrolar.com.tr/kemal-ucar",
      },
      game: {
        name: "Dublör'ün Hikasyesi",
        link: "https://tiyatrolar.com.tr/tiyatro/dublorun-hikyesi",
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
          <BreadcrumbPage>2022</BreadcrumbPage>
        </BreadcrumbList>
      </Breadcrumb>

      <Awards awards={awards} />
    </div>
  );
};

export default Home;
