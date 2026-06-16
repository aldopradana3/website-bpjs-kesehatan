export function renderHome() {
  const div = document.createElement("div");
  div.innerHTML = `
    <!-- ============================================
         HERO SECTION
         ============================================ -->
    <section class="hero-section">
      <div class="container hero-grid">
        <div class="hero-copy">
          <span class="hero-badge">
            <i data-lucide="sparkles" style="width: 16px; height: 16px;"></i>
            Praktis • Mobile-first • Resmi
          </span>
          <h1>Melayani Negeri dengan Jaminan Kesehatan Nasional</h1>
          <p>Platform layanan mandiri BPJS yang menampilkan informasi terbaru, misi nasional, dan indikator JKN untuk seluruh peserta.</p>
          <div class="hero-actions">
            <a href="#cek-bpjs" class="btn btn-hero-primary btn-lg" style="display: inline-flex; align-items: center; gap: 0.5rem;">
              <i data-lucide="search" style="width: 20px; height: 20px;"></i>
              Cek Kepesertaan
            </a>
            <a href="#statistik-nasional" class="btn btn-outline-light btn-lg" style="display: inline-flex; align-items: center; gap: 0.5rem;">
              <i data-lucide="bar-chart" style="width: 20px; height: 20px;"></i>
              Lihat Statistik
            </a>
          </div>
        </div>

        <div class="hero-media">
          <div class="mini-dashboard hero-dashboard">
            <div class="dashboard-header">
              <div>
                <span class="dashboard-label">Data nasional</span>
                <h3>Ikhtisar JKN hari ini</h3>
              </div>
              <span class="dashboard-pill">Proto</span>
            </div>

            <div class="dashboard-summary">
              <div>
                <p class="dashboard-metric">Kepesertaan aktif</p>
                <strong>234.500.000</strong>
              </div>
            </div>

            <div class="dashboard-row">
              <div>
                <p class="dashboard-metric">Faskes terdaftar</p>
                <strong>29.800</strong>
              </div>
              <span class="dashboard-status active">Tersebar</span>
            </div>
            <div class="dashboard-row">
              <div>
                <p class="dashboard-metric">Layanan online</p>
                <strong>97%</strong>
              </div>
              <span class="dashboard-status available">Stabil</span>
            </div>
            <div class="dashboard-row">
              <div>
                <p class="dashboard-metric">Rata-rata proses</p>
                <strong>14 menit</strong>
              </div>
              <span class="dashboard-status low">Responsif</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================
         LAYANAN UTAMA
         ============================================ -->
    <section class="section bg-surface home-service-section" id="home-services">
      <div class="container">
        <div class="section-header mb-4">
          <div>
            <span class="section-label">Layanan Utama</span>
            <h2>Akses semua layanan di platform kami</h2>
          </div>
        </div>
        <div class="service-carousel-wrapper">
          <div id="service-carousel" class="service-carousel">
            <a href="#cek-bpjs" class="service-card">
              <span class="service-card-icon"><i data-lucide="search"></i></span>
              <div>
                <h3>Cek BPJS</h3>
                <p>Periksa status kepesertaan, iuran, dan riwayat klaim tanpa login.</p>
              </div>
            </a>
            <a href="#faskes" class="service-card">
              <span class="service-card-icon"><i data-lucide="hospital"></i></span>
              <div>
                <h3>Cari Faskes</h3>
                <p>Temukan fasilitas kesehatan terdekat dengan jadwal dan status layanan.</p>
              </div>
            </a>
            <a href="#panduan" class="service-card">
              <span class="service-card-icon"><i data-lucide="book-open"></i></span>
              <div>
                <h3>Panduan</h3>
                <p>Panduan lengkap cara daftar peserta baru dan metode pembayaran iuran JKN.</p>
              </div>
            </a>
            <a href="#pusat-regulasi" class="service-card">
              <span class="service-card-icon"><i data-lucide="file-text"></i></span>
              <div>
                <h3>Pusat Regulasi</h3>
                <p>Akses semua peraturan, undang-undang, dan standar operasional BPJS.</p>
              </div>
            </a>
            <a href="#skrining-kesehatan" class="service-card">
              <span class="service-card-icon"><i data-lucide="brain"></i></span>
              <div>
                <h3>Skrining Kesehatan</h3>
                <p>Pantau kesehatan mental Anda dengan skrining mandiri yang singkat dan terpercaya.</p>
              </div>
            </a>
            <a href="#bantuan" class="service-card">
              <span class="service-card-icon"><i data-lucide="life-buoy"></i></span>
              <div>
                <h3>Bantuan & Dukungan</h3>
                <p>Temukan jawaban, FAQ, dan hubungi layanan pelanggan untuk bantuan lebih lanjut.</p>
              </div>
            </a>
          </div>
          <button class="carousel-control carousel-prev" id="carousel-prev"><i data-lucide="chevron-left"></i></button>
          <button class="carousel-control carousel-next" id="carousel-next"><i data-lucide="chevron-right"></i></button>
        </div>
      </div>
    </section>

    <!-- ============================================
         VISI & MISI
         ============================================ -->
    <section class="section container" id="mengapa-jkn">
      <div class="container" style="padding: 0;">
        <div class="section-header mb-4">
          <div>
            <span class="section-label">Tentang JKN</span>
            <h2>Visi dan misi BPJS Kesehatan</h2>
          </div>
        </div>
        <div class="row g-4">
          <div class="col-12 col-lg-6">
            <div class="feature-card p-4 rounded-4 shadow-sm" style="
              border-left: 4px solid var(--primary);
              transition: all 0.3s ease;
            " onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 12px 30px rgba(13,110,253,0.08)'" 
               onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
              <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                <div style="
                  width: 40px;
                  height: 40px;
                  background: var(--primary-soft);
                  border-radius: 10px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: var(--primary);
                ">
                  <i data-lucide="eye" style="width: 20px; height: 20px;"></i>
                </div>
                <h5 style="margin: 0;">Visi</h5>
              </div>
              <p style="margin: 0; line-height: 1.7;">
                Menjadi badan penyelenggara yang <strong>dinamis, akuntabel, dan tepercaya</strong> untuk mewujudkan jaminan kesehatan yang <strong>berkualitas, berkelanjutan, berkeadilan, dan inklusif.</strong>
              </p>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="feature-card p-4 rounded-4 shadow-sm" style="
              border-left: 4px solid #198754;
              transition: all 0.3s ease;
            " onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 12px 30px rgba(13,110,253,0.08)'" 
               onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
              <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                <div style="
                  width: 40px;
                  height: 40px;
                  background: #d4edda;
                  border-radius: 10px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: #155724;
                ">
                  <i data-lucide="target" style="width: 20px; height: 20px;"></i>
                </div>
                <h5 style="margin: 0;">Misi</h5>
              </div>
              <ul class="mission-list" style="margin: 0;">
                <li>Meningkatkan kualitas layanan kepada peserta melalui layanan terintegrasi berbasis teknologi informasi.</li>
                <li>Menjaga keberlanjutan Program JKN-KIS dengan menyeimbangkan antara dana jaminan sosial dan biaya manfaat yang terkendali.</li>
                <li>Memberikan jaminan kesehatan yang berkeadilan dan inklusif mencakup seluruh penduduk Indonesia.</li>
                <li>Memperkuat <em>engagement</em> dengan meningkatkan sinergi dan kolaborasi pemangku kepentingan.</li>
                <li>Meningkatkan kapabiltas Badan dalam menyelenggarakan Program JKN-KIS secara efisien dengan transformasi digital dan inovasi berkelanjutan.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================
         STATISTIK NASIONAL
         ============================================ -->
    <section class="section bg-surface" id="statistik-nasional">
      <div class="container">
        <div class="section-header mb-4">
          <div>
            <span class="section-label">Statistik Nasional</span>
            <h2>Angka utama JKN dalam sekejap</h2>
          </div>
        </div>
        <div class="row g-3">
          <div class="col-12 col-md-4">
            <div class="stat-card p-4 rounded-4 shadow-sm" style="
              transition: all 0.3s ease;
            " onmouseover="this.style.transform='translateY(-6px)'; this.style.boxShadow='0 16px 40px rgba(13,110,253,0.1)'" 
               onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
              <div class="stat-icon"><i data-lucide="users"></i></div>
              <h5>234 juta peserta</h5>
              <p>Jumlah kepesertaan aktif JKN dalam program jaminan kesehatan nasional.</p>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="stat-card p-4 rounded-4 shadow-sm" style="
              transition: all 0.3s ease;
            " onmouseover="this.style.transform='translateY(-6px)'; this.style.boxShadow='0 16px 40px rgba(13,110,253,0.1)'" 
               onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
              <div class="stat-icon"><i data-lucide="hospital"></i></div>
              <h5>29.800 faskes</h5>
              <p>Fasilitas kesehatan yang terdaftar untuk melayani rujukan dan rawat jalan.</p>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="stat-card p-4 rounded-4 shadow-sm" style="
              transition: all 0.3s ease;
            " onmouseover="this.style.transform='translateY(-6px)'; this.style.boxShadow='0 16px 40px rgba(13,110,253,0.1)'" 
               onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
              <div class="stat-icon"><i data-lucide="wifi"></i></div>
              <h5>97% layanan digital</h5>
              <p>Persentase layanan JKN yang sudah tersedia secara online untuk kemudahan peserta.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================
         BERITA & INFO
         ============================================ -->
    <section class="section" id="berita-info" style="background: var(--bg);">
      <div class="container">
        <div class="section-header mb-4">
          <div>
            <span class="section-label">Berita & Info</span>
            <h2>Update terbaru untuk peserta JKN</h2>
          </div>
        </div>
        <div class="row g-3">
          <div class="col-12 col-md-4">
            <a href="#berita/1" class="news-card p-4 rounded-4 shadow-sm news-link" style="
              transition: all 0.3s ease;
              text-decoration: none;
              display: block;
            " onmouseover="this.style.transform='translateY(-6px)'; this.style.boxShadow='0 16px 40px rgba(13,110,253,0.1)'" 
               onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
              <p class="news-tag" style="display: inline-flex; align-items: center; gap: 0.3rem;">
                <i data-lucide="megaphone" style="width: 14px; height: 14px; display: inline-block;"></i>
                Pengumuman
              </p>
              <h5>Percepatan layanan digital JKN Mobile</h5>
              <p>Platform kini siap mendukung penggunaan e-claim dan notifikasi otomatis untuk peserta.</p>
            </a>
          </div>
          <div class="col-12 col-md-4">
            <a href="#berita/2" class="news-card p-4 rounded-4 shadow-sm news-link" style="
              transition: all 0.3s ease;
              text-decoration: none;
              display: block;
            " onmouseover="this.style.transform='translateY(-6px)'; this.style.boxShadow='0 16px 40px rgba(13,110,253,0.1)'" 
               onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
              <p class="news-tag" style="display: inline-flex; align-items: center; gap: 0.3rem;">
                <i data-lucide="book" style="width: 14px; height: 14px;"></i>
                Edukasi
              </p>
              <h5>Tips memilih faskes terdekat yang tepat</h5>
              <p>Pelajari cara memeriksa jam operasional, ketersediaan layanan, dan kuota rujukan.</p>
            </a>
          </div>
          <div class="col-12 col-md-4">
            <a href="#berita/3" class="news-card p-4 rounded-4 shadow-sm news-link" style="
              transition: all 0.3s ease;
              text-decoration: none;
              display: block;
            " onmouseover="this.style.transform='translateY(-6px)'; this.style.boxShadow='0 16px 40px rgba(13,110,253,0.1)'" 
               onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
              <p class="news-tag" style="display: inline-flex; align-items: center; gap: 0.3rem;">
                <i data-lucide="credit-card" style="width: 14px; height: 14px; display: inline-block;"></i>
                Layanan
              </p>
              <h5>Update tata cara pembayaran iuran</h5>
              <p>Informasi terbaru tentang metode bayar resmi dan tenggat untuk menjaga kepesertaan aktif.</p>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================
         FAQ
         ============================================ -->
    <section class="section bg-surface" id="faq">
      <div class="container">
        <div class="section-header mb-4">
          <div>
            <span class="section-label">FAQ</span>
            <h2>Pertanyaan umum peserta</h2>
          </div>
        </div>
        <div class="faq-container">
          <button class="faq-item">
            <h5>Bagaimana cara cek status kepesertaan?</h5>
            <i data-lucide="chevron-down" class="faq-icon"></i>
          </button>
          <div class="faq-content">
            <p>Gunakan No JKN atau NIK di halaman Cek BPJS untuk melihat status aktif dan ringkasan iuran.</p>
          </div>
          <button class="faq-item">
            <h5>Apa saja sumber pembayaran resmi?</h5>
            <i data-lucide="chevron-down" class="faq-icon"></i>
          </button>
          <div class="faq-content">
            <p>Lihat halaman Cara Bayar untuk daftar metode resmi, termasuk transfer bank dan gerai retail mitra.</p>
          </div>
          <button class="faq-item">
            <h5>Bagaimana jika data saya tidak ditemukan?</h5>
            <i data-lucide="chevron-down" class="faq-icon"></i>
          </button>
          <div class="faq-content">
            <p>Hubungi layanan pelanggan JKN melalui nomor Layanan Darurat atau halaman Bantuan & Dukungan untuk verifikasi data Anda.</p>
          </div>
          <button class="faq-item">
            <h5>Apakah JKN mencakup seluruh penduduk Indonesia?</h5>
            <i data-lucide="chevron-down" class="faq-icon"></i>
          </button>
          <div class="faq-content">
            <p>Ya, program JKN dirancang untuk menjangkau seluruh penduduk Indonesia dengan berbagai kategori kepesertaan sesuai kemampuan ekonomi.</p>
          </div>
        </div>
      </div>
    </section>
  `;

  return div;
}