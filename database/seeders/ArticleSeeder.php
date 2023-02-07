<?php

namespace Database\Seeders;

<<<<<<< Updated upstream
use App\Models\Article;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
=======
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
>>>>>>> Stashed changes

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
<<<<<<< Updated upstream
        Article::create([
            'title' => 'Mengenal Lebih Jauh tentang Humor dan Relasinya dengan Ketersinggungan',
            'user_id' => 1,
            'category_id' => 2,
            'status' => 'show',
            'thumbnail' => 'storage/images/article/hiburan.jpg',
            'slug' => 'Mengenal-Lebih-Jauh-tentang-Humor-dan-Relasinya-dengan-Ketersinggungan',
            'summary' => '<p>Tahukah kalian? Bahwa saat ini kebanyakan orang memahami humor tidak jauh berbeda dengan komedi, padahal dua hal tersebut bukanlah hal yang sama...',
            'body' => '<p>
Tahukah kalian? Bahwa saat ini kebanyakan orang memahami humor tidak jauh berbeda dengan komedi, padahal dua hal tersebut bukanlah hal yang sama. Humor berasal dari bahasa latin yaitu “umor” yang artinya cairan. Di dunia medis kuno, cairan dalam tubuh seseorang yang tidak seimbang dapat menimbulkan suatu penyakit yang disebut gangguan kejiwaan.
Pada abad ke-16, ada seorang sastrawan bernama Ben Johnson yang membuat sebuah pertunjukan teater berjudul Every Man Out of His Humor, di sana dia menampilkan sebuah karakter aneh, bodoh, dan jadi objek tertawaan. Dari sinilah kata humor mulai dikaitkan dengan konsep tertawa.
Lantas bagaimana karakter tersebut dapat membuat orang tertawa?
Pada dasarnya manusia memiliki dua pemicu tawa yang sederhana, yaitu intelektual dan emosi. Dari segi Intelektual, kita bisa tertawa karena menemukan sebuah paradoks dari suatu fenomena, atau bermain-main dengan makna bahasa. Selain itu bisa juga karena otak kita berhasil memetakan suatu pola yang rumit, seperti saat kita bisa menebak suatu tebak-tebakan, dan sebab-sebab dari proses berpikir lainnya. Biasanya lelucon yang membutuhkan intelektual yang tinggi untuk bisa memahaminya dan tertawa disebut lelucon cerdas.
Sementara dalam kasus pertunjukan Ben Johnson, para penonton dapat tertawa karena pemicu emosi. Manusia pada dasarnya akan tertawa saat merasa superior atas orang lain yang sedang menderita, seperti melihat orang bodoh, aneh, dan sejenisnya. Charlie Chaplin dan Mr Bean adalah contoh karakter yang dibuat agar penonton tertawa melalui pemicu emosi.
Dalam bukunya, The Act of Creation, Arthur Koestler membagi kreativitas manusia ke dalam tiga wilayah (three domain of creativity), yaitu : humor, ilmu pengetahuan (discovery), dan seni (arts). Ketiganya sederajat karena semua dapat diberlakukan pada peristiwa yang sama dan batasannya sering tumpang tindih. Kegiatan kreatif ketiganya berjalan di atas proses yang sama, yaitu mencari analogi tersembunyi. Yang membedakannya adalah iklim emosi yang terlibat, baik yang mendasarinya maupun yang diakibatkannya. Humor sendiri sudah jelas bahwa emosi yang diakibatkan adalah tawa, sedangkan sebagian besar emosi yang mendasarinya adalah emosi negatif, seperti takut, marah, iri, bodoh, kesal, dll. Emosi- emosi Itulah yang membuat humor yang seharusnya menghibur justru memiliki potensi untuk membuat orang tersinggung.
Dalam Kamus Besar Bahasa Indonesia (KBBI), definisi tersinggung adalah merasa disakiti, dilukai, dan sebagainya. Dari pengertian tersebut, terdapat diksi "merasa", yang kalau dimaknai secara utuh berarti kita memiliki hak mutlak untuk menerima atau menolak untuk merasakan tersinggung. Jadi sebenarnya kita sebagai manusia bisa memilih untuk menolak tersinggung sebagaimana mudahnya kita  memilih untuk tersinggung.
Bagaimana seseorang bisa tersinggung dengan sebuah humor?
Jawabannya adalah karena setiap manusia memiliki referensi berbeda-beda. Beberapa hal mungkin akan sangat tabu dan tidak etis apabila dijadikan sebuah candaan atau lelucon. Contohnya seperti agama, suku, ras, dll. Sedangkan di sisi lain, para pelaku komedi meyakini bahwa setiap hal dalam kehidupan ini dapat dikomedikan.
Hingga saat ini, tidak sedikit pelaku komedi tanah air yang mendapat teguran dari masyarakat karena leluconnya yang dinilai menyerang atau bahkan menjelekkan seseorang dan suatu golongan. Padahal jika diperhatikan setiap humor itu pasti membutuhkan sasaran atau objek untuk ditertawakan. Sehingga dari situlah bisa muncul ketersinggungan akibat perbedaan pemahaman dasar atas humor itu sendiri.
Filsuf humor Indonesia, Arwah Setiawan, dalam pidatonya di Taman Ismail Marzuki Tahun 1977 mengatakan, “Bangsa kita ini sangat kaya akan humor, tetapi kemampuan mengapresiasi humornya rendah sekali.” Oleh karena itu, memperhatikan siapa pendengar atau penikmat humornya adalah hal yang penting bagi seorang pelaku komedi untuk menghindari konflik dengan audiens.
Humor adalah unsur penting dalam kehidupan manusia karena humor bertujuan untuk menghibur dan menciptakan tawa. Sebagai penikmat humor, kita haruslah tahu bahwa humor dibuat bukan untuk menyerang, sehingga kita tidak mudah tersinggung pada hal semacam itu. Sedangkan apabila kita adalah pelaku atau pencipta humor, tidak ada salahnya untuk membuat lelucon kita seaman mungkin untuk menghindari adanya ketersinggungan, namun perlu diingat bahwa tidak ada lelucon yang benar-benar aman, semua berpotensi dianggap menyerang karena adanya objek tertawaan. Untuk itu, selain pembuatan humor yang seaman mungkin, memperhatikan siapa penikmat humor kita juga sama pentingnya.
Bagaimana menurut kalian? Semoga penjelasan diatas dapat bermanfaat untuk kita agar lebih memahami cara menyikapi suatu humor dengan baik.</p>
'
        ]);
        Article::create([
            'title' => 'Simak Di Sini! 4 Tips Konsumsi Mi Instan Tanpa Naik Berat Badan',
            'user_id' => 1,
            'category_id' => 1,
            'status' => 'show',
            'thumbnail' => 'storage/images/article/lifestyle.jpg',
            'slug' => 'Simak-Di-Sini!-4-Tips-Konsumsi-Mi-Instan-Tanpa-Naik-Berat-Badan',
            'summary' => 'Mi instan merupakan salah satu makanan favorit masyarakat Indonesia. Penyajiannya yang praktis...',
            'body' => '<p>
            Mi instan merupakan salah satu makanan favorit masyarakat Indonesia. Penyajiannya yang praktis, rasanya yang lezat, dan harganya yang terjangkau menjadi alasan mi instan digemari banyak orang. Makanan instan yang tinggi karbohidrat ini memang kerap dikaitkan dengan berbagai macam resiko kesehatan karena mengandung pengawet yang dapat membahayakan kesehatan tubuh apabila terlalu sering dikonsumsi. Selain itu, tingginya kalori dan minimnya nutrisi yang terkandung didalamnya membuat mi instan kerap dijadikan pantangan bagi sebagian orang yang sedang menurunkan berat badan.
            Akan tetapi, apakah kalian tahu ternyata mi instan dapat disulap menjadi makanan yang lebih bergizi? Bahkan dengan cara ini, mi instan dapat dikonsumsi bagi yang sedang diet, loh. Ini dia tips konsumsi mi instan tanpa naik berat badan.
            1. Pilih mi instan rendah kalori
            Berbagai macam merek mi instan biasanya memproduksi banyak varian rasa dengan kalori yang berbeda-beda. Kalori mi instan rata-rata adalah 300-500 kkal yang mana dapat memenuhi sekitar 15-20 persen dari total kalori harian tubuh, yakni 2000 kkal. Nah, kita dapat memilih varian mi instan yang memiliki kalori lebih rendah dengan memperhatikan nutrition facts pada kemasan. Dengan demikian, sisa kebutuhan kalori tubuh dapat kita penuhi dengan mengkonsumsi makanan lain yang lebih sehat dan bernutrisi.
            2. Konsumsi setengah porsi saja
            Dengan mengkonsumsi setengah porsi mi instan, secara langsung akan memotong kalori mi yang masuk ke dalam tubuh. Tak hanya mengurangi porsi mi, kita juga dapat memasak mi instan dengan hanya menggunakan setengah bagian dari bumbu dan minyaknya. Jika kita memilih mi kuah, maka dapat dikurangi pula air yang digunakan. Dengan cara ini, mi instan yang dikonsumsi akan terasa lezat meskipun dalam porsi yang lebih sedikit.
            3. Ganti mi instan dengan mi shirataki
            Mi shirataki adalah mi yang berbahan dasar glukomanan sehingga memiliki kalori dan kandungan karbohidrat yang lebih rendah. Mi ini juga lebih banyak mengandung air dan serat jika dibandingkan dengan mi instan biasa. Kita dapat memasaknya bersama dengan bumbu
            mi instan maupun dengan bumbu racikan sendiri. Maka dari itu, mi shirataki dapat menjadi alternatif pengganti mi instan yang lebih sehat dan rendah kalori.
            4. Tambahkan makanan kaya serat dan protein
            Untuk nutrisi dan porsi yang lebih banyak, kita juga dapat memasak mi instan bersama dengan bahan makanan lain yang kaya akan serat dan protein. Telur dan sayur seperti sawi putih dapat menjadi pilihan. Sebagai protein hewani, telur dapat menambahkan kandungan nutrisi pada mi instan yang kita konsumsi. Menambahkan sawi putih yang mengandung banyak serat juga akan memberikan nutrisi dan rasa kenyang yang lebih lama. Memasak mi bersama sawi putih yang dipotong memanjang juga akan menambahkan sugesti psikologi kepada tubuh, loh. Tubuh akan merasa bahwa mi yang dikonsumsi adalah dalam porsi penuh. Sehingga dapat menggantikan setengah porsi mi instan yang telah kita sisihkan.
            Nah, itu dia tips menarik untuk mengkonsumsi mi instan dengan lebih bergizi dan rendah kalori. Dengan tips tersebut kita dapat menikmati mi instan tanpa takut akan banyak menambah berat badan. (ina)</p>
'
        ]);
        Article::create([
            'title' => 'Cek Lokasi Rumah Kamu saat Zaman Dinosaurus di Peta Ini',
            'user_id' => 1,
            'category_id' => 3,
            'status' => 'show',
            'thumbnail' => 'storage/images/article/teknologi.jpg',
            'slug' => 'Cek-Lokasi-Rumah-Kamu-saat-Zaman-Dinosaurus-di-Peta-Ini',
            'summary' => '<p>Pernahkah kita membayangkan di mana letak rumah kita saat zaman dinosaurus?...',
            'body' => '<p>Pernahkah kita membayangkan di mana letak rumah kita saat zaman dinosaurus? Tentu menjadi sebuah pertanyaan besar karena dinosaurus pertama kali muncul pada periode Trias zaman Mesozoikum, tepatnya sekitar 201 hingga 252 juta tahun yang lalu. Kita semua tahu bahwa keadaan bumi jutaan tahun yang lalu jauh berbeda dengan keadaan bumi saat ini dikarenakan evolusi yang terjadi pada bumi.
            Lalu bagaimana caranya melihat rumah kita saat zaman dinosaurus?
             Seiring perkembangan zaman yang semkain canggih, teknologi hadir menjadi bagian dari hidup manusia saat ini. Manusia seolah tidak bisa berfungsi tanpa smartphone, tablet, komputer yang merupakan alat-alat teknologi modern. Berbagai aspek keseharian mulai dari bekerja, belanja, belajar, hingga mencari informasi semuanya dilakukan dengan teknologi.
            Berkat perkembangan teknologi yang semakin canggih, kini kita bisa melihat letak lokasi rumah kita saat zaman dinosaurus, yakni dengan menggunakan globe atau peta Bumi kuno interaktif Ancient Earth Maps. Peta interaktif Ancient Earth Maps ini digagas oleh Ian Webster dengan bantuan data tektonik dan data paleogeografi oleh C.R. Scotese dari proyek PALEOMAP.
            Peta Bumi kuno ini bisa diakses di situs web https://dinosaurpictures.org/ancient-earth. Website tersebut memperlihatkan globe 3D yang penampilannya bisa berubah tergantung zaman yang ingin dilihat misal, Jurassic (Jura), Triassic (Trias), hingga Cretaceous Period (Zaman Kapur). Kita dapat dengan mudah mengklik melalui perubahan kolosal ini  dan melihat bagaimana bumi muncul selama ribuan tahun.
            Untuk mengecek dan melihat rumah tempat tinggal kita di zaman dinosaurus bisa ikuti caranya di bawah ini:
            Buka situs web dinosaurpictures.org/ancient-earth di web browser
            Tentukan zaman yang ingin kamu lihat dengan klik kotak putih bertuliskan “240 million” yang ada di bagian bar paling atas.
            Kemudian masukan nama kota kamu di kotak pencarian: “Enter a city name to view it on the globe”
            Dalam hitungan detik, peta akan menunjukkan di mana lokasi kamu berada dengan tanda titik merah
                Penampakan Bumi seperti yang kita ketahui relatif baru. Daratan dan laut yang kita lihat sekarang  di Eurasia, Amerika, Afrika, Antartika, dan Oseania adalah produk dari lempeng tektonik besar yang menyatu seperti teka-teki gambar. Namun, sangat lambat potongan jigsaw ini bergerak. Tidaklah cukup untuk menyadarinya dalam masa hidup manusia, tetapi dalam skala jutaan tahun, daratan Bumi dapat membuatnya tampak seperti planet yang sama sekali tidak dapat dikenali.


                Ini membuka pemandangan planet kita dari 240 juta tahun yang lalu di era super benua Pangea, tetapi Anda dapat memilih pemandangan dari 750 juta tahun yang lalu hingga saat ini. Untuk pengguna dekstop, jika Anda menahan tombol kiri dan kanan pada keyboard, Anda bahkan dapat melihat benua pecah dan akhirnya membentuk yang kita kenal sekarang. Peta ini juga menampilkan opsi yang memungkinkan Anda melihat momen penting dalam sejarah kehidupan di bumi, seperti vertebrata pertama, hominin pertama, dan kepunahan dinosaurus.
                Teknologi lahir dari sebuah tujuan. Misalnya, Peta Bumi kuno  Interaktif Ancient Earth Maps diciptakan oleh Ian Webster untuk memberikan experience kepada kita tentang kondisi dan kehidupan bumi saat zaman dinosaurus. Perkembangan teknologi yang semakin canggih, tidak ada yang tidak mungkin untuk dilakukan oleh manusia saat ini, hal-hal yang mungkin tidak pernah kita pikirkan terjadi namun bisa terjadi saat ini.
                Bagaimana menurut kalian? Sangat tertarik bukan untuk mengecek lokasi rumah kita pada zaman dinosaurus.Semoga informasi diatas dapat bermanfaat dan memberikan pengetahuan terbaru tentang perkembangan teknologi saat ini.</p>
'
        ]);
=======
        //
>>>>>>> Stashed changes
    }
}
