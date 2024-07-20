import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const KazananlarTabs = ({ onTabChange }: { onTabChange: (tab: string) => void }) => {
  return (
    <Tabs defaultValue="afife">
      <TabsList
        className="flex gap-4 mb-4"
        style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}
      >
        <TabsTrigger value="afife" className="tab-trigger" style={{ flex: 1 }}>
          Afife Tiyatro Ödülleri
        </TabsTrigger>
        <TabsTrigger value="ozel" className="tab-trigger" style={{ flex: 1 }}>
          Özel Ödüller
        </TabsTrigger>
      </TabsList>
      <div
        className="tabs-content-container"
        style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}
      >
        <TabsContent value="afife" className="tabs-content">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <h3>Yılın En Başarılı Oyunu</h3>
              <p>Yaşamak mı Yoksa Ölmek mi – Kocaeli Şehir Tiyatroları</p>
            </div>
            <div>
              <h3>Yılın En Başarılı Yönetmeni</h3>
              <p>Oğuz Utku Güneş – 39 Buçuk Basamak</p>
            </div>
            <div>
              <h3>Yılın En Başarılı Kadın Oyuncusu</h3>
              <p>Zuhal Olcay – Kel Diva</p>
            </div>
            <div>
              <h3>Yılın En Başarılı Erkek Oyuncusu</h3>
              <p>Onur Berk Arslanoğlu - Çirkin</p>
            </div>
            <div>
              <h3>Yardımcı Rolde Yılın En Başarılı Kadın Oyuncusu</h3>
              <p>Çağdaş Ekin Şişman - Büyük Zarifi Apartmanı</p>
            </div>
            <div>
              <h3>Yardımcı Rolde Yılın En Başarılı Erkek Oyuncusu</h3>
              <p>Erkan Baylav - Şakşakçılar</p>
            </div>
            <div>
              <h3>Yılın En Başarılı Sahne Tasarımı</h3>
              <p>Murat Gülmez – Yaşamak mı Yoksa Ölmek mi</p>
            </div>
            <div>
              <h3>Yılın En Başarılı Giysi Tasarımı</h3>
              <p>Çevren Sarayoğlu – Yaşamak mı Yoksa Ölmek mi</p>
            </div>
            <div>
              <h3>Yılın En Başarılı Sahne Müziği</h3>
              <p>Burak Kaya & Utar Dündar Artun & Sarp Palaur – Otomatik Portakal</p>
            </div>
            <div>
              <h3>Yılın En Başarılı Işık Tasarımı</h3>
              <p>Yakup Çartık – Otomatik Portakal</p>
            </div>
            <div>
              <h3>Yılın En Başarılı Hareket Düzeni (Koreografisi)</h3>
              <p>Şahika Tekand – On Adımda Unutmak</p>
            </div>
            <div>
              <h3>Yılın En Başarılı Genç Kuşak Sanatçısı</h3>
              <p>Emrecan Karakurum – Bu Taraftan Daha Güzelim</p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="ozel" className="tabs-content">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <h3>Muhsin Ertuğrul Özel Ödülü</h3>
              <p>Prof. Dr. Ayşegül Yüksel</p>
            </div>
            <div>
              <h3>Cevat Fehmi Başkut Özel Ödülü</h3>
              <p>Müge Oskay - Çarpışma</p>
            </div>
            <div>
              <h3>Haldun Dormen Özel Ödülü</h3>
              <p>Mutlu Aile Tablosu - Duru Tiyatro</p>
            </div>
            <div>
              <h3>Yapı Kredi Özel Ödülü</h3>
              <p>Murat Ovalı</p>
            </div>
          </div>
        </TabsContent>
      </div>
    </Tabs>
  );
};

export default KazananlarTabs;
