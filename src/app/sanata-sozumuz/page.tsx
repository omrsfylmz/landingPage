import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const SanataSozumuz = () => {
  return (
    <div className="flex justify-center items-center container mx-auto">
      <div className="w-full h-full mt-[100px]">
        <div className="container mx-auto px-4 flex flex-col justify-center items-center h-full">
          <div>
            <h1 className="text-5xl">Sanata Sözümüz</h1>
            <Breadcrumb className="mt-3">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Ana Sayfa</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbPage>Sanata Sözümüz</BreadcrumbPage>
              </BreadcrumbList>
            </Breadcrumb>
            <br />
            <p>Değerli Sanatseverler,</p>
            <br />
            <p>
              Yapı Kredi, kurulduğu 1944’ten bu yana bankacılık alanında
              Türkiye’ye pek çok ilk kazandırdı. Ancak kurum olarak bizi en çok
              gururlandıran sektörümüzdeki ilklerden belki de daha fazlasını,
              sosyal ve kültürel hayatın gelişimi için Türk toplumuna
              kazandırmış olmamız.
            </p>
            <br />
            <p>
              Türkiye’de bir bankanın kurduğu ilk çocuk dergisi olan Doğan
              Kardeş’in yanı sıra ilk çocuk sineması, ilk özel tiyatro, ilk
              renkli sinema filmi, ilk fotoğraf yarışması, bir bankaya ait ilk
              sanat galerisi ve hatta Türkiye’de basılan ilk müzik CD’si Yapı
              Kredi ile hayatımızın bir parçası haline geldi. Yapı Kredi Kültür
              Sanat Yayıncılık her yıl resim, heykel, fotoğraf, grafik,
              arkeoloji ve kültür alanlarında gündem oluşturan, dikkat çekici
              sergilere ev sahipliği yapmakta, ortalama 200 yeni başlıkta kitap
              yayımlamakta, sinemadan edebiyata, sanat tarihinden
              fotoğrafçılığa, çocuklar, öğretmenler ve kütüphaneciler için
              yaratıcı drama ile okuma etkinliklerine kadar uzanan geniş bir
              kültürel yelpazede, konunun uzmanlarıyla her yaş ve ilgi alanından
              insanları toplantılar ve söyleşilerle bir araya getirmektedir.
              Yapı Kredi Yayınları bugüne kadar 6000’den fazla başlıkta kitap
              yayımlayarak kırılması güç bir rekora imza atmıştır. Boğaziçi
              Üniversitesi Görme Engelliler Teknoloji ve Eğitim Laboratuvarı
              (GETEM) ile 2012 yılından beri işbirliği yapan tek yayınevi olan
              YKY 797 başlıkta kitabın görme engellilere ulaştırılmasını
              sağlamıştır.
            </p>
            <br />
            <p>
              Öte yandan resim, heykel, arkeoloji, tiyatro, edebiyat, fotoğraf
              ve tarih gibi kültür sanat hayatının hemen hemen her alanında
              sayısız sanatçıya ve projeye desteklerimiz sürüyor. Topluma fayda
              sağlama hedefimiz doğrultusunda hayata geçirdiğimiz tüm bu sanat
              faaliyetlerinin altında daha çok vatandaşımızı çağdaş, nitelikli
              ve farklı sanat olaylarıyla buluşturma arzumuz yatıyor.
            </p>
            <br />
            <p>
              Farklı disiplinlerdeki kültür ve sanat çalışmalarına verdiğimiz bu
              desteklerin en önemlisi ise 26 yıldır kesintisiz olarak
              sürdürdüğümüz Yapı Kredi Üstün Akmen Tiyatro Ödülleri… Bu ödüller
              vasıtasıyla, “Türk tiyatrosunun fedaisi” olarak tanınan ve
              hayatını tiyatroya adamış büyük sanatçı Üstün Akmen’in ismini
              yaşatıyor olmaktan büyük onur duyuyoruz. Türk tiyatrosu dün olduğu
              gibi bugün de, Üstün gibi yürekli, inançlı ve sabırlı
              sanatçıların, gençlerin omuzlarında yükseliyor.
            </p>
            <br />
            <p>
              İlk günden bu yana Yapı Kredi Üstün Akmen Tiyatro Ödülleri, Türk
              tiyatrosuna, emek ve yaratıcılıklarıyla sahnelerimize can katan
              tüm tiyatro çalışanlarına duyduğumuz derin saygının da bir ifadesi
              oldu.
            </p>

            <br />
            <p>
              Bu vesileyle tiyatro sanatına emeği geçmiş, ebediyete intikal
              etmiş olan ve yaşayan tüm sanatçılarımızı bir kez daha saygıyla
              anıyoruz.
            </p>
            <br />
            <p>Saygılarımızla,</p>
            <br />
            <p>Yapı Kredi Üstün Akmen Tiyatro Ödülleri</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SanataSozumuz;
