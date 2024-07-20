import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const AdaylarTabs = ({ onTabChange }: { onTabChange: (tab: string) => void }) => {
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
              <p>1984 - Nilüfer Belediyesi Nilüfer Kent Tiyatrosu</p>
              <p>Cadı Kazanı - İstanbul Şehir Tiyatroları</p>
              <p>Fosforlu Cevriye - İstanbul Şehir Tiyatroları</p>
              <p>Kim Bu Ben - Tiyatro.iN</p>
              <p>Tartuffe - İstanbul Şehir Tiyatroları</p>
            </div>
            <div>
              <h3>Yılın En Başarılı Yönetmeni</h3>
              <p>Engin Hepileri - Kim Bu Ben</p>
              <p>Murat Daltaban - 1984</p>
              <p>Yelda Baskın - Fosforlu Cevriye</p>
              <p>Yiğit Sertdemir - Tartuffe</p>
              <p>Yiğit Sertdemir - Cadı Kazanı</p>
            </div>
            <div>
              <h3>Yılın En Başarılı Kadın Oyuncusu</h3>
              <p>İpek Türktan - Bir Terennüm</p>
              <p>Özlem Zeynep Dinsel - Kızlar ve Oğlanlar</p>
              <p>Özlem Zeynep Dinsel - Aşkın En Kısa Gecesi</p>
              <p>Selen Öztürk - Kırlangıç</p>
              <p>Yeşim Koçak - Tartuffe</p>
            </div>
            <div>
              <h3>Yılın En Başarılı Erkek Oyuncusu</h3>
              <p>Adem Mülazim - 1984</p>
              <p>Hakan Gerçek - III: Richard: Niçin Yaptım</p>
              <p>Meriç Rakalar - Tek Kullanımlık Hikaye</p>
              <p>Murat Garipağaoğlu - Tartuffe</p>
              <p>Onur Ünsal - Kim Bu Ben</p>
            </div>
            <div>
              <h3>Yardımcı Rolde Yılın En Başarılı Kadın Oyuncusu</h3>
              <p>Ayşegül Uraz - Çember'in Anası</p>
              <p>Binnur Şerbetçioğlu - Fosforlu Cevriye</p>
              <p>Gizem Güçlü - 1984</p>
              <p>Yağmur Damcıoğlu Namak - Fosforlu Cevriye</p>
              <p>Zeynep Göktay Dilbaz - Tartuffe</p>
            </div>
            <div>
              <h3>Yardımcı Rolde Yılın En Başarılı Erkek Oyuncusu</h3>
              <p>Barış Ayas - 1984</p>
              <p>Murat Kapu - Çember'in Anası</p>
              <p>Oğuzhan Ayaz - 1984</p>
              <p>Tolga İskit - Çember'in Anası</p>
              <p>Tolga Yeter - Tartuffe</p>
            </div>
            <div>
              <h3>Yılın En Başarılı Sahne Tasarımı</h3>
              <p>Barış Dinçel - Tartuffe</p>
              <p>Barış Dinçel - Fosforlu Cevriye</p>
              <p>Cem Yılmazer & Burak Etöz - 1984</p>
              <p>Gamze Kuş - Saatleri Ayarlama Enstitüsü</p>
              <p>Metin Deniz - Cadı Kazanı</p>
            </div>
            <div>
              <h3>Yılın En Başarılı Giysi Tasarımı</h3>
              <p>Ayşegül Alev - Jekyll & Hyde</p>
              <p>Eylül Gürcan - Tartuffe</p>
              <p>Nihal Kaplangı - Cadı Kazanı</p>
              <p>Tomris Kuzu - 1984</p>
              <p>Tomris Kuzu - Fosforlu Cevriye</p>
            </div>
            <div>
              <h3>Yılın En Başarılı Sahne Müziği</h3>
              <p>Emrah Can Yaylı - Tartuffe</p>
              <p>Emrah Can Yaylı - Cadı Kazanı</p>
              <p>Kenan Doğulu - Kim Bu Ben</p>
              <p>Oğuz Kaplangı - 1984</p>
              <p>Oğuzhan Balcı - Fosforlu Cevriye</p>
            </div>
            <div>
              <h3>Yılın En Başarılı Işık Tasarımı</h3>
              <p>Cem Yılmazer - 1984</p>
              <p>Cem Yılmazer - Kim Bu Ben</p>
              <p>Cem Yılmazer - Saatleri Ayarlama Enstitüsü</p>
              <p>Kemal Yiğitcan - Tartuffe</p>
              <p>Kemal Yiğitcan - Cadı Kazanı</p>
            </div>
            <div>
              <h3>Yılın En Başarılı Hareket Düzeni (Koreografisi)</h3>
              <p>İzmir Tenim - Sidikli Kasabası Müzikali</p>
              <p>Maral Ceranoğlu - Fosforlu Cevriye</p>
              <p>Özge Midilli - Tartuffe</p>
              <p>Seda Özgiş - Jekyll & Hyde</p>
              <p>Tan Temel - 1984</p>
            </div>
            <div>
              <h3>Yılın En Başarılı Genç Kuşak Sanatçısı</h3>
              <p>Adil İrfanoğlu - Ceviz Ağacı</p>
              <p>Dilara Vural - Sipariş Listesi / Wish List</p>
              <p>Hazal Arduç - Talihsiz Çocuk Parkı Yaralanmaları</p>
              <p>Kaan Kurtoğlu - LAV</p>
              <p>Yunus Eski - Talihsiz Çocuk Parkı Yaralanmaları</p>
            </div>
          </div>
          </TabsContent>
          <TabsContent value="ozel" className="tabs-content">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <h3>Muhsin Ertuğrul Özel Ödülü</h3>
              <p>Prof. Dr. Cevat Çapan</p>
            </div>
            <div>
              <h3>Cevat Fehmi Başkut Özel Ödülü</h3>
              <p>Hakan Tabakan - Güzel Son</p>
            </div>
            <div>
              <h3>Haldun Dormen Özel Ödülü</h3>
              <p>1923 Müzikali</p>
            </div>
            <div>
              <h3>Yapı Kredi Özel Ödülü</h3>
              <p>Merve Dizdar</p>
            </div>
          </div>
        </TabsContent>
      </div>
    </Tabs>
  );
};

export default AdaylarTabs;
