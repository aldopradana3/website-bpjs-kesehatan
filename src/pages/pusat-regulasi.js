export function renderPusatRegulasi() {
  const div = document.createElement("div");
  div.innerHTML = `
    <!-- ============================================
         HERO PUSAT REGULASI
         ============================================ -->
    <section style="
      background: linear-gradient(135deg, #1d4580 0%, #316fcb 100%);
      color: white;
      padding: 2.5rem 1rem 3rem;
      position: relative;
      overflow: hidden;
    ">
      <!-- Background Pattern -->
      <div style="
        position: absolute;
        right: -50px;
        top: -50px;
        width: 300px;
        height: 300px;
        background: rgba(255,255,255,0.05);
        border-radius: 50%;
      "></div>
      <div style="
        position: absolute;
        left: -30px;
        bottom: -60px;
        width: 200px;
        height: 200px;
        background: rgba(255,255,255,0.03);
        border-radius: 50%;
      "></div>
      <div style="
        position: absolute;
        right: 25%;
        bottom: -40px;
        width: 150px;
        height: 150px;
        background: rgba(255,255,255,0.04);
        border-radius: 50%;
      "></div>
      
      <div class="container" style="position: relative; z-index: 1;">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
          <span style="
            background: rgba(255,255,255,0.15);
            padding: 0.3rem 0.9rem;
            border-radius: 999px;
            font-size: 0.75rem;
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
          ">
            <i data-lucide="scale" style="width: 14px; height: 14px;"></i>
            Pusat Regulasi
          </span>
        </div>
        <h1 style="font-size: clamp(1.8rem, 3vw, 2.5rem); margin: 0 0 0.3rem;">
          Pusat Regulasi & Peraturan
        </h1>
        <p style="font-size: 1rem; opacity: 0.85; max-width: 500px; margin: 0;">
          Unduh dan pelajari peraturan, kebijakan, serta standar operasional JKN-KIS
        </p>
      </div>
    </section>

    <!-- ============================================
         KONTEN UTAMA
         ============================================ -->
    <section class="section" style="background: var(--bg);">
      <div class="container">
        
        <!-- ============================================
             STATISTIK CEPAT
             ============================================ -->
        <div style="
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 1rem;
          margin-bottom: 2.5rem;
        ">
          <div style="
            background: var(--surface);
            padding: 1.25rem;
            border-radius: 16px;
            text-align: center;
            border: 1px solid rgba(13,110,253,0.06);
            transition: all 0.3s ease;
          " onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 12px 30px rgba(13,110,253,0.08)'" 
             onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
            <div style="
              width: 44px;
              height: 44px;
              background: var(--primary-soft);
              border-radius: 12px;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto 0.5rem;
              color: var(--primary);
            ">
              <i data-lucide="file-text" style="width: 22px; height: 22px;"></i>
            </div>
            <div style="font-size: 1.2rem; font-weight: 700; color: var(--primary);">8+</div>
            <div style="font-size: 0.75rem; color: var(--muted);">Peraturan</div>
          </div>
          
          <div style="
            background: var(--surface);
            padding: 1.25rem;
            border-radius: 16px;
            text-align: center;
            border: 1px solid rgba(13,110,253,0.06);
            transition: all 0.3s ease;
          " onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 12px 30px rgba(13,110,253,0.08)'" 
             onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
            <div style="
              width: 44px;
              height: 44px;
              background: #d4edda;
              border-radius: 12px;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto 0.5rem;
              color: #155724;
            ">
              <i data-lucide="book-open" style="width: 22px; height: 22px;"></i>
            </div>
            <div style="font-size: 1.2rem; font-weight: 700; color: #198754;">12+</div>
            <div style="font-size: 0.75rem; color: var(--muted);">Standar Operasional</div>
          </div>
          
          <div style="
            background: var(--surface);
            padding: 1.25rem;
            border-radius: 16px;
            text-align: center;
            border: 1px solid rgba(13,110,253,0.06);
            transition: all 0.3s ease;
          " onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 12px 30px rgba(13,110,253,0.08)'" 
             onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
            <div style="
              width: 44px;
              height: 44px;
              background: #fff3cd;
              border-radius: 12px;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto 0.5rem;
              color: #856404;
            ">
              <i data-lucide="clock" style="width: 22px; height: 22px;"></i>
            </div>
            <div style="font-size: 1.2rem; font-weight: 700; color: #ffc107;">2024</div>
            <div style="font-size: 0.75rem; color: var(--muted);">Update Terbaru</div>
          </div>
          
          <div style="
            background: var(--surface);
            padding: 1.25rem;
            border-radius: 16px;
            text-align: center;
            border: 1px solid rgba(13,110,253,0.06);
            transition: all 0.3s ease;
          " onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 12px 30px rgba(13,110,253,0.08)'" 
             onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
            <div style="
              width: 44px;
              height: 44px;
              background: #f8d7da;
              border-radius: 12px;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto 0.5rem;
              color: #721c24;
            ">
              <i data-lucide="download" style="width: 22px; height: 22px;"></i>
            </div>
            <div style="font-size: 1.2rem; font-weight: 700; color: #dc3545;">PDF</div>
            <div style="font-size: 0.75rem; color: var(--muted);">Dapat Diunduh</div>
          </div>
        </div>

        <!-- ============================================
             PERATURAN PEMERINTAH
             ============================================ -->
        <div style="margin-bottom: 3rem;">
          <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem;">
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
              <i data-lucide="gavel" style="width: 20px; height: 20px;"></i>
            </div>
            <div>
              <span class="section-label" style="margin: 0;">Peraturan Pemerintah</span>
              <h2 style="margin: 0; font-size: 1.3rem;">Undang-Undang & Peraturan Presiden</h2>
            </div>
          </div>
          
          <div style="
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1rem;
          ">
            <!-- Card 1 -->
            <div style="
              background: var(--surface);
              border-radius: 16px;
              padding: 1.5rem;
              border: 1px solid rgba(13,110,253,0.06);
              transition: all 0.3s ease;
              position: relative;
              overflow: hidden;
            " onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 12px 30px rgba(13,110,253,0.08)'" 
               onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
              <div style="
                position: absolute;
                top: -20px;
                right: -20px;
                width: 60px;
                height: 60px;
                background: rgba(13,110,253,0.04);
                border-radius: 50%;
              "></div>
              <div style="display: flex; align-items: flex-start; gap: 0.75rem; margin-bottom: 0.75rem;">
                <div style="
                  width: 40px;
                  height: 40px;
                  background: var(--primary-soft);
                  border-radius: 10px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: var(--primary);
                  flex-shrink: 0;
                ">
                  <i data-lucide="file-text" style="width: 20px; height: 20px;"></i>
                </div>
                <div>
                  <div style="font-weight: 700; font-size: 0.95rem;">UU No. 40 Tahun 2004</div>
                  <div style="font-size: 0.75rem; color: var(--muted);">Sistem Jaminan Sosial Nasional</div>
                </div>
              </div>
              <p style="font-size: 0.85rem; color: var(--muted); margin-bottom: 1rem; line-height: 1.6;">
                Undang-undang dasar penyelenggaraan sistem jaminan sosial nasional untuk kesejahteraan masyarakat.
              </p>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 0.7rem; color: var(--muted);">
                  <i data-lucide="calendar" style="width: 12px; height: 12px; display: inline-block;"></i>
                  Berlaku: 2004
                </span>
                <a href="#" download style="
                  padding: 0.3rem 1rem;
                  background: var(--primary);
                  color: white;
                  border-radius: 50px;
                  text-decoration: none;
                  font-size: 0.75rem;
                  font-weight: 600;
                  display: inline-flex;
                  align-items: center;
                  gap: 0.3rem;
                  transition: all 0.3s ease;
                " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                  <i data-lucide="download" style="width: 14px; height: 14px;"></i>
                  PDF
                </a>
              </div>
            </div>

            <!-- Card 2 -->
            <div style="
              background: var(--surface);
              border-radius: 16px;
              padding: 1.5rem;
              border: 1px solid rgba(13,110,253,0.06);
              transition: all 0.3s ease;
              position: relative;
              overflow: hidden;
            " onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 12px 30px rgba(13,110,253,0.08)'" 
               onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
              <div style="
                position: absolute;
                top: -20px;
                right: -20px;
                width: 60px;
                height: 60px;
                background: rgba(13,110,253,0.04);
                border-radius: 50%;
              "></div>
              <div style="display: flex; align-items: flex-start; gap: 0.75rem; margin-bottom: 0.75rem;">
                <div style="
                  width: 40px;
                  height: 40px;
                  background: var(--primary-soft);
                  border-radius: 10px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: var(--primary);
                  flex-shrink: 0;
                ">
                  <i data-lucide="file-text" style="width: 20px; height: 20px;"></i>
                </div>
                <div>
                  <div style="font-weight: 700; font-size: 0.95rem;">PP No. 21 Tahun 2014</div>
                  <div style="font-size: 0.75rem; color: var(--muted);">Penyelenggaraan Program JKN-KIS</div>
                </div>
              </div>
              <p style="font-size: 0.85rem; color: var(--muted); margin-bottom: 1rem; line-height: 1.6;">
                Peraturan pelaksanaan mengenai penyelenggaraan Program Jaminan Kesehatan Nasional-Kesehatan untuk Seluruh Indonesia.
              </p>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 0.7rem; color: var(--muted);">
                  <i data-lucide="calendar" style="width: 12px; height: 12px; display: inline-block;"></i>
                  Berlaku: 2014
                </span>
                <a href="#" download style="
                  padding: 0.3rem 1rem;
                  background: var(--primary);
                  color: white;
                  border-radius: 50px;
                  text-decoration: none;
                  font-size: 0.75rem;
                  font-weight: 600;
                  display: inline-flex;
                  align-items: center;
                  gap: 0.3rem;
                  transition: all 0.3s ease;
                " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                  <i data-lucide="download" style="width: 14px; height: 14px;"></i>
                  PDF
                </a>
              </div>
            </div>

            <!-- Card 3 -->
            <div style="
              background: var(--surface);
              border-radius: 16px;
              padding: 1.5rem;
              border: 1px solid rgba(13,110,253,0.06);
              transition: all 0.3s ease;
              position: relative;
              overflow: hidden;
            " onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 12px 30px rgba(13,110,253,0.08)'" 
               onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
              <div style="
                position: absolute;
                top: -20px;
                right: -20px;
                width: 60px;
                height: 60px;
                background: rgba(13,110,253,0.04);
                border-radius: 50%;
              "></div>
              <div style="display: flex; align-items: flex-start; gap: 0.75rem; margin-bottom: 0.75rem;">
                <div style="
                  width: 40px;
                  height: 40px;
                  background: var(--primary-soft);
                  border-radius: 10px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: var(--primary);
                  flex-shrink: 0;
                ">
                  <i data-lucide="file-text" style="width: 20px; height: 20px;"></i>
                </div>
                <div>
                  <div style="font-weight: 700; font-size: 0.95rem;">PP No. 82 Tahun 2018</div>
                  <div style="font-size: 0.75rem; color: var(--muted);">Jaminan Kesehatan</div>
                </div>
              </div>
              <p style="font-size: 0.85rem; color: var(--muted); margin-bottom: 1rem; line-height: 1.6;">
                Peraturan terbaru mengenai jaminan kesehatan untuk masyarakat yang berkelanjutan dan terpercaya.
              </p>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 0.7rem; color: var(--muted);">
                  <i data-lucide="calendar" style="width: 12px; height: 12px; display: inline-block;"></i>
                  Berlaku: 2018
                </span>
                <a href="#" download style="
                  padding: 0.3rem 1rem;
                  background: var(--primary);
                  color: white;
                  border-radius: 50px;
                  text-decoration: none;
                  font-size: 0.75rem;
                  font-weight: 600;
                  display: inline-flex;
                  align-items: center;
                  gap: 0.3rem;
                  transition: all 0.3s ease;
                " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                  <i data-lucide="download" style="width: 14px; height: 14px;"></i>
                  PDF
                </a>
              </div>
            </div>

            <!-- Card 4 -->
            <div style="
              background: var(--surface);
              border-radius: 16px;
              padding: 1.5rem;
              border: 1px solid rgba(13,110,253,0.06);
              transition: all 0.3s ease;
              position: relative;
              overflow: hidden;
            " onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 12px 30px rgba(13,110,253,0.08)'" 
               onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
              <div style="
                position: absolute;
                top: -20px;
                right: -20px;
                width: 60px;
                height: 60px;
                background: rgba(13,110,253,0.04);
                border-radius: 50%;
              "></div>
              <div style="display: flex; align-items: flex-start; gap: 0.75rem; margin-bottom: 0.75rem;">
                <div style="
                  width: 40px;
                  height: 40px;
                  background: var(--primary-soft);
                  border-radius: 10px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: var(--primary);
                  flex-shrink: 0;
                ">
                  <i data-lucide="file-text" style="width: 20px; height: 20px;"></i>
                </div>
                <div>
                  <div style="font-weight: 700; font-size: 0.95rem;">PP No. 75 Tahun 2019</div>
                  <div style="font-size: 0.75rem; color: var(--muted);">Penyelenggaraan JKN</div>
                </div>
              </div>
              <p style="font-size: 0.85rem; color: var(--muted); margin-bottom: 1rem; line-height: 1.6;">
                Peraturan perubahan atas Peraturan Pemerintah tentang penyelenggaraan Program Jaminan Kesehatan Nasional.
              </p>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 0.7rem; color: var(--muted);">
                  <i data-lucide="calendar" style="width: 12px; height: 12px; display: inline-block;"></i>
                  Berlaku: 2019
                </span>
                <a href="#" download style="
                  padding: 0.3rem 1rem;
                  background: var(--primary);
                  color: white;
                  border-radius: 50px;
                  text-decoration: none;
                  font-size: 0.75rem;
                  font-weight: 600;
                  display: inline-flex;
                  align-items: center;
                  gap: 0.3rem;
                  transition: all 0.3s ease;
                " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                  <i data-lucide="download" style="width: 14px; height: 14px;"></i>
                  PDF
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- ============================================
             STANDAR OPERASIONAL
             ============================================ -->
        <div style="margin-bottom: 2rem;">
          <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem;">
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
              <i data-lucide="clipboard-list" style="width: 20px; height: 20px;"></i>
            </div>
            <div>
              <span class="section-label" style="margin: 0;">Standar Operasional</span>
              <h2 style="margin: 0; font-size: 1.3rem;">Prosedur & Panduan Pelaksanaan</h2>
            </div>
          </div>
          
          <div style="
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
          ">
            <!-- SOP 1 -->
            <div style="
              background: var(--surface);
              border-radius: 16px;
              padding: 1.5rem;
              border: 1px solid rgba(13,110,253,0.06);
              text-align: center;
              transition: all 0.3s ease;
            " onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 12px 30px rgba(13,110,253,0.08)'" 
               onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
              <div style="
                width: 48px;
                height: 48px;
                background: var(--primary-soft);
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 0.75rem;
                color: var(--primary);
              ">
                <i data-lucide="user-plus" style="width: 24px; height: 24px;"></i>
              </div>
              <div style="font-weight: 700; font-size: 0.95rem; margin-bottom: 0.25rem;">SOP Pendaftaran Peserta</div>
              <p style="font-size: 0.8rem; color: var(--muted); margin-bottom: 1rem; line-height: 1.5;">
                Prosedur standar pendaftaran peserta baru dan perubahan data kepesertaan.
              </p>
              <a href="#" download style="
                padding: 0.3rem 1.2rem;
                border: 1px solid var(--primary);
                color: var(--primary);
                border-radius: 50px;
                text-decoration: none;
                font-size: 0.75rem;
                font-weight: 600;
                display: inline-flex;
                align-items: center;
                gap: 0.3rem;
                transition: all 0.3s ease;
              " onmouseover="this.style.background='var(--primary)'; this.style.color='white'" onmouseout="this.style.background='transparent'; this.style.color='var(--primary)'">
                <i data-lucide="download" style="width: 14px; height: 14px;"></i>
                Download
              </a>
            </div>

            <!-- SOP 2 -->
            <div style="
              background: var(--surface);
              border-radius: 16px;
              padding: 1.5rem;
              border: 1px solid rgba(13,110,253,0.06);
              text-align: center;
              transition: all 0.3s ease;
            " onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 12px 30px rgba(13,110,253,0.08)'" 
               onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
              <div style="
                width: 48px;
                height: 48px;
                background: #d4edda;
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 0.75rem;
                color: #155724;
              ">
                <i data-lucide="file-check" style="width: 24px; height: 24px;"></i>
              </div>
              <div style="font-weight: 700; font-size: 0.95rem; margin-bottom: 0.25rem;">SOP Klaim Kesehatan</div>
              <p style="font-size: 0.8rem; color: var(--muted); margin-bottom: 1rem; line-height: 1.5;">
                Panduan proses pengajuan klaim kesehatan untuk fasilitas kesehatan dan peserta.
              </p>
              <a href="#" download style="
                padding: 0.3rem 1.2rem;
                border: 1px solid var(--primary);
                color: var(--primary);
                border-radius: 50px;
                text-decoration: none;
                font-size: 0.75rem;
                font-weight: 600;
                display: inline-flex;
                align-items: center;
                gap: 0.3rem;
                transition: all 0.3s ease;
              " onmouseover="this.style.background='var(--primary)'; this.style.color='white'" onmouseout="this.style.background='transparent'; this.style.color='var(--primary)'">
                <i data-lucide="download" style="width: 14px; height: 14px;"></i>
                Download
              </a>
            </div>

            <!-- SOP 3 -->
            <div style="
              background: var(--surface);
              border-radius: 16px;
              padding: 1.5rem;
              border: 1px solid rgba(13,110,253,0.06);
              text-align: center;
              transition: all 0.3s ease;
            " onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 12px 30px rgba(13,110,253,0.08)'" 
               onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
              <div style="
                width: 48px;
                height: 48px;
                background: #fff3cd;
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 0.75rem;
                color: #856404;
              ">
                <i data-lucide="credit-card" style="width: 24px; height: 24px;"></i>
              </div>
              <div style="font-weight: 700; font-size: 0.95rem; margin-bottom: 0.25rem;">SOP Pembayaran Iuran</div>
              <p style="font-size: 0.8rem; color: var(--muted); margin-bottom: 1rem; line-height: 1.5;">
                Prosedur pembayaran iuran dan pengelolaan tunggakan kepesertaan JKN.
              </p>
              <a href="#" download style="
                padding: 0.3rem 1.2rem;
                border: 1px solid var(--primary);
                color: var(--primary);
                border-radius: 50px;
                text-decoration: none;
                font-size: 0.75rem;
                font-weight: 600;
                display: inline-flex;
                align-items: center;
                gap: 0.3rem;
                transition: all 0.3s ease;
              " onmouseover="this.style.background='var(--primary)'; this.style.color='white'" onmouseout="this.style.background='transparent'; this.style.color='var(--primary)'">
                <i data-lucide="download" style="width: 14px; height: 14px;"></i>
                Download
              </a>
            </div>
          </div>
        </div>

        <!-- ============================================
             CTA BANTUAN
             ============================================ -->
        <div style="
          margin-top: 2rem;
          padding: 2rem;
          background: var(--primary);
          color: white;
          border-radius: 20px;
          text-align: center;
        ">
          <h3 style="margin: 0 0 0.5rem;">Butuh bantuan terkait regulasi?</h3>
          <p style="opacity: 0.9; margin-bottom: 1.5rem;">
            Tim kami siap membantu menjelaskan peraturan dan prosedur
          </p>
          <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <a href="#bantuan" style="
              padding: 0.6rem 2rem;
              background: white;
              color: var(--primary);
              border-radius: 50px;
              text-decoration: none;
              font-weight: 600;
              transition: all 0.3s ease;
              display: inline-flex;
              align-items: center;
              gap: 0.5rem;
            " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
              <i data-lucide="life-buoy" style="width: 18px; height: 18px;"></i>
              Hubungi Kami
            </a>
            <a href="#panduan" style="
              padding: 0.6rem 2rem;
              background: rgba(255,255,255,0.15);
              color: white;
              border-radius: 50px;
              text-decoration: none;
              font-weight: 600;
              transition: all 0.3s ease;
              display: inline-flex;
              align-items: center;
              gap: 0.5rem;
              backdrop-filter: blur(8px);
            " onmouseover="this.style.background='rgba(255,255,255,0.25)'" onmouseout="this.style.background='rgba(255,255,255,0.15)'">
              <i data-lucide="book-open" style="width: 18px; height: 18px;"></i>
              Lihat Panduan
            </a>
          </div>
        </div>

      </div>
    </section>
  `;

  return div;
}