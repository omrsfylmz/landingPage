import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const AfifeJaleKimdir = () => {
  return (
    <div className="flex justify-center items-center container mx-auto">
      <div className="w-full h-full mt-[200px]">
        <div className="container mx-auto px-4 flex flex-col justify-center items-center h-full">
          <div>
            <h1 className="text-5xl">Afife Jale Kimdir?</h1>
            <Breadcrumb className="mt-3">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Ana Sayfa</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Afife Jale Kimdir?</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <br />
            <p>
              Afife, 1902 yılında İstanbul&apos;un Kadıköy semtinde dünyaya
              geldi. 10 Kasım 1918 günü Darülbedayi&rsquo;ye talebe olarak kabul
              olunan Beyza, Refika, Behire ve Memduha adlı beş kızdan biriydi.
              Afife ve Refika hariç öteki kızlar daha fazla dayanamamış ve
              &quot;nasılsa sahneye çıkamayacakları&quot; gerekçesiyle tiyatroyu
              bırakmışlardı. Aynı yılın 18 Aralık günü Refika tiyatronun suflör,
              Afife de &quot;mülazım artistlik&quot; (stajyer oyuncu)
              kadrolarına alınmışlardı.
            </p>
            <br />
            <p>
              Afife bir yıl süreyle bütün provalara devam etti, ama bir türlü
              sahneye çıkamadı. Öte yandan Refika, sahne gerisinde görev alan
              ilk Türk kadını oldu. 1920 yılının 13 Nisan gecesi prömiyeri
              yapılacak olan, Hüseyin Suat&rsquo;ın &quot;Yamalar&quot; adlı
              oyununda, Emel rolü, Eliza Binemeciyan’ın tiyatrodan ayrılması
              sebebiyle ortada kaldı. Darülbedayi yöneticileri rolü Afife’ye
              oynatma kararı verdiler.
            </p>
            <br />
            <p>
              Böylelikle Afife, 22 Nisan gecesi, Kadıköy&rsquo;deki Apollon
              Tiyatrosu&rsquo;nda (sonrasında Hale Sineması, geçen yıla kadar
              ise Reks Sineması) Emel rolünü oynayarak sahneye çıkan ilk
              Müslüman Türk kadını oldu.
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfifeJaleKimdir;
