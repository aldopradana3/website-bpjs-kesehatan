const newsData = {
  1: {
    title: "Percepatan layanan digital JKN Mobile",
    tag: "Pengumuman",
    date: "15 Juni 2024",
    image: "📱",
    content: `
      <h3>Transformasi Digital Layanan JKN</h3>
      <p>BPJS Kesehatan terus berinovasi dalam memberikan pelayanan yang lebih baik kepada peserta. Kali ini, kami dengan bangga mengumumkan percepatan layanan digital melalui aplikasi JKN Mobile yang telah diperbarui dengan fitur-fitur canggih.</p>
      
      <h4>Fitur Baru di JKN Mobile:</h4>
      <ul>
        <li><strong>e-Claim Otomatis:</strong> Sistem klaim yang lebih cepat dan transparan tanpa perlu dokumen fisik</li>
        <li><strong>Notifikasi Real-time:</strong> Pemberitahuan langsung untuk setiap transaksi dan perubahan status iuran</li>
        <li><strong>Video Konsultasi:</strong> Fasilitas konsultasi dengan dokter mitra secara online</li>
        <li><strong>Riwayat Kesehatan Digital:</strong> Rekam medis elektronik yang terintegrasi dengan semua faskes</li>
      </ul>
      
      <h4>Manfaat bagi Peserta:</h4>
      <p>Dengan percepatan layanan digital ini, peserta JKN dapat menikmati pengalaman yang lebih mudah, cepat, dan aman. Semua proses yang sebelumnya memerlukan waktu lama kini bisa dilakukan dalam hitungan menit melalui smartphone.</p>
      
      <p>Update aplikasi JKN Mobile Anda sekarang melalui Play Store atau App Store untuk mendapatkan fitur-fitur terbaru.</p>
    `
  },
  2: {
    title: "Tips memilih faskes terdekat yang tepat",
    tag: "Edukasi",
    date: "14 Juni 2024",
    image: "🏥",
    content: `
      <h3>Panduan Memilih Fasilitas Kesehatan yang Tepat</h3>
      <p>Salah satu keunggulan program JKN adalah kebebasan memilih fasilitas kesehatan (faskes) yang sesuai dengan kebutuhan Anda. Namun, bagaimana cara memilih faskes yang tepat?</p>
      
      <h4>Faktor-Faktor yang Perlu Dipertimbangkan:</h4>
      <ul>
        <li><strong>Jarak dan Lokasi:</strong> Pilih faskes yang mudah diakses dari rumah atau tempat kerja Anda</li>
        <li><strong>Jam Operasional:</strong> Pastikan jam buka sesuai dengan jadwal Anda</li>
        <li><strong>Ketersediaan Layanan:</strong> Periksa apakah faskes menyediakan layanan yang Anda butuhkan</li>
        <li><strong>Reputasi dan Kualitas:</strong> Cari informasi tentang pengalaman peserta lain dengan faskes tersebut</li>
        <li><strong>Kuota Rujukan:</strong> Pastikan faskes masih memiliki kuota rujukan yang memadai</li>
      </ul>
      
      <h4>Cara Cek Informasi Faskes:</h4>
      <p>Gunakan aplikasi JKN Mobile atau portal Peta Faskes BPJS untuk melihat daftar lengkap faskes yang bekerja sama dengan JKN di area Anda. Informasi mencakup alamat, jam operasional, nomor kontak, dan status ketersediaan layanan.</p>
      
      <h4>Perubahan Faskes Utama:</h4>
      <p>Jika ingin mengganti faskes utama (Faskes 1), Anda dapat melakukannya kapan saja melalui aplikasi JKN Mobile atau dengan mengunjungi kantor BPJS terdekat. Perubahan biasanya efektif dalam 1-2 bulan kerja.</p>
    `
  },
  3: {
    title: "Update tata cara pembayaran iuran",
    tag: "Layanan",
    date: "13 Juni 2024",
    image: "💳",
    content: `
      <h3>Metode Pembayaran Iuran JKN yang Lebih Fleksibel</h3>
      <p>BPJS Kesehatan terus berupaya mempermudah peserta dalam melakukan pembayaran iuran. Kami telah menambah berbagai metode pembayaran untuk memberikan kemudahan bagi semua segmen peserta.</p>
      
      <h4>Saluran Pembayaran Resmi:</h4>
      <ul>
        <li><strong>Transfer Bank:</strong> BRI, BNI, Mandiri, BCA, dan bank-bank lainnya</li>
        <li><strong>E-wallet:</strong> OVO, GoPay, DANA, LinkAja</li>
        <li><strong>Retail:</strong> Indomaret, Alfamart, Minimart</li>
        <li><strong>Virtual Account:</strong> Nomor rekening unik per peserta untuk kemudahan pencatatan</li>
      </ul>
      
      <h4>Pembayaran Berlangsung:</h4>
      <p>Peserta PBPU (mandiri) dapat melakukan pembayaran kapan saja, baik bulanan, triwulanan, maupun tahunan. Untuk pembayaran tahunan, peserta akan mendapatkan diskon khusus sebagai apresiasi kami.</p>
      
      <h4>Penting untuk Diingat:</h4>
      <ul>
        <li>Bayar sebelum tanggal jatuh tempo untuk menjaga kepesertaan tetap aktif</li>
        <li>Simpan bukti pembayaran sebagai referensi</li>
        <li>Jangan percaya kepada oknum yang meminta biaya tambahan untuk pembayaran</li>
      </ul>
      
      <p>Untuk informasi lebih lanjut, hubungi Call Center BPJS di 1500 400 atau kunjungi kantor BPJS terdekat.</p>
    `
  }
};

export function renderBeritaDetail() {
  const div = document.createElement("div");
  
  // Extract news ID from URL
  const hash = window.location.hash;
  const newsId = parseInt(hash.split("/")[1]) || 1;
  const news = newsData[newsId] || newsData[1];
  
  div.innerHTML = `
    <section class="news-detail-hero">
      <div class="container">
        <a href="#" class="back-link">← Kembali ke Beranda</a>
        <div class="news-detail-header">
          <span class="news-detail-tag">${news.tag}</span>
          <h1>${news.title}</h1>
          <p class="news-detail-meta">Dipublikasikan pada ${news.date}</p>
        </div>
      </div>
    </section>

    <section class="section container">
      <div class="row">
        <div class="col-12 col-lg-8">
          <div class="news-detail-content">
            ${news.content}
          </div>

          <div class="news-actions mt-4">
            <button class="btn btn-outline-primary btn-sm" onclick="alert('Fitur share untuk media sosial')">Bagikan ke Media Sosial</button>
            <button class="btn btn-outline-primary btn-sm" onclick="window.print()">Cetak Halaman</button>
          </div>
        </div>

        <div class="col-12 col-lg-4">
          <div class="news-sidebar">
            <div class="news-sidebar-card p-4 rounded-4">
              <h5>Berita Terkait</h5>
              ${Object.keys(newsData).map(id => {
                if (parseInt(id) !== newsId) {
                  const relatedNews = newsData[id];
                  return `
                    <a href="#berita/${id}" class="related-news-item">
                      <h6>${relatedNews.title}</h6>
                      <p class="text-muted">${relatedNews.date}</p>
                    </a>
                  `;
                }
                return '';
              }).join('')}
            </div>

            <div class="news-sidebar-card p-4 rounded-4 mt-3">
              <h5>Hubungi Kami</h5>
              <p class="text-muted mb-0">Punya pertanyaan? Hubungi Call Center BPJS di <strong>1500 400</strong> atau WhatsApp <strong>0811 8165 165</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  div.querySelector(".back-link").addEventListener("click", (e) => {
    e.preventDefault();
    window.location.hash = "";
  });

  return div;
}
