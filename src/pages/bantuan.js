export function renderBantuan() {
  const div = document.createElement("div");
  div.innerHTML = `
    <!-- ============================================
         HERO BANTUAN
         ============================================ -->
    <section class="bantuan-hero" style="
      background: linear-gradient(135deg, #1d4580 0%, #316fcb 100%);
      color: white;
      padding: 3rem 1rem;
      position: relative;
      overflow: hidden;
    ">
      <!-- Background Pattern -->
      <div style="
        position: absolute;
        right: -100px;
        top: -100px;
        width: 400px;
        height: 400px;
        background: rgba(255,255,255,0.05);
        border-radius: 50%;
      "></div>
      <div style="
        position: absolute;
        left: -50px;
        bottom: -80px;
        width: 300px;
        height: 300px;
        background: rgba(255,255,255,0.03);
        border-radius: 50%;
      "></div>
      
      <div class="container" style="position: relative; z-index: 1;">
        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
          <span style="
            background: rgba(255,255,255,0.15);
            padding: 0.5rem 1rem;
            border-radius: 999px;
            font-size: 0.8rem;
            font-weight: 600;
            letter-spacing: 0.5px;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
          ">
            <i data-lucide="life-buoy" style="width: 16px; height: 16px;"></i>
            Pusat Bantuan
          </span>
        </div>
        <h1 style="font-size: clamp(2rem, 4vw, 3rem); margin: 0 0 0.5rem;">
          Ada yang bisa kami bantu?
        </h1>
        <p style="font-size: 1.1rem; opacity: 0.9; max-width: 500px; margin: 0;">
          Temukan jawaban cepat atau hubungi tim support kami
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
        <div class="row g-3 mb-5">
          <div class="col-6 col-md-3">
            <div style="
              background: var(--surface);
              padding: 1.5rem 1rem;
              border-radius: 20px;
              text-align: center;
              border: 1px solid rgba(13,110,253,0.06);
              transition: all 0.3s ease;
            " onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 12px 40px rgba(13,110,253,0.1)'" 
               onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
              <div style="font-size: 2rem; margin-bottom: 0.25rem;">
                <i data-lucide="clock" style="width: 32px; height: 32px; color: var(--primary);"></i>
              </div>
              <div style="font-size: 1.5rem; font-weight: 700; color: var(--primary);">24/7</div>
              <div style="font-size: 0.85rem; color: var(--muted);">Layanan</div>
            </div>
          </div>
          <div class="col-6 col-md-3">
            <div style="
              background: var(--surface);
              padding: 1.5rem 1rem;
              border-radius: 20px;
              text-align: center;
              border: 1px solid rgba(13,110,253,0.06);
              transition: all 0.3s ease;
            " onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 12px 40px rgba(13,110,253,0.1)'" 
               onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
              <div style="font-size: 2rem; margin-bottom: 0.25rem;">
                <i data-lucide="zap" style="width: 32px; height: 32px; color: var(--primary);"></i>
              </div>
              <div style="font-size: 1.5rem; font-weight: 700; color: var(--primary);">15 menit</div>
              <div style="font-size: 0.85rem; color: var(--muted);">Respon rata-rata</div>
            </div>
          </div>
          <div class="col-6 col-md-3">
            <div style="
              background: var(--surface);
              padding: 1.5rem 1rem;
              border-radius: 20px;
              text-align: center;
              border: 1px solid rgba(13,110,253,0.06);
              transition: all 0.3s ease;
            " onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 12px 40px rgba(13,110,253,0.1)'" 
               onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
              <div style="font-size: 2rem; margin-bottom: 0.25rem;">
                <i data-lucide="thumbs-up" style="width: 32px; height: 32px; color: var(--primary);"></i>
              </div>
              <div style="font-size: 1.5rem; font-weight: 700; color: var(--primary);">98%</div>
              <div style="font-size: 0.85rem; color: var(--muted);">Kepuasan</div>
            </div>
          </div>
          <div class="col-6 col-md-3">
            <div style="
              background: var(--surface);
              padding: 1.5rem 1rem;
              border-radius: 20px;
              text-align: center;
              border: 1px solid rgba(13,110,253,0.06);
              transition: all 0.3s ease;
            " onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 12px 40px rgba(13,110,253,0.1)'" 
               onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
              <div style="font-size: 2rem; margin-bottom: 0.25rem;">
                <i data-lucide="hospital" style="width: 32px; height: 32px; color: var(--primary);"></i>
              </div>
              <div style="font-size: 1.5rem; font-weight: 700; color: var(--primary);">29K+</div>
              <div style="font-size: 0.85rem; color: var(--muted);">Faskes terdaftar</div>
            </div>
          </div>
        </div>

        <!-- ============================================
             KATEGORI BANTUAN
             ============================================ -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 3rem;">
          
          <!-- Kartu 1: PANDAWA -->
          <div style="
            background: var(--surface);
            border-radius: 24px;
            padding: 2rem 1.5rem;
            border: 1px solid rgba(13,110,253,0.08);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          " onmouseover="this.style.transform='translateY(-6px)'; this.style.boxShadow='0 20px 60px rgba(13,110,253,0.1)'" 
             onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
            
            <div style="position: absolute; top: -30px; right: -30px; width: 80px; height: 80px; background: rgba(13,110,253,0.05); border-radius: 50%;"></div>
            
            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
              <div style="
                width: 56px;
                height: 56px;
                background: var(--primary-soft);
                border-radius: 16px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--primary);
              ">
                <i data-lucide="phone" style="width: 28px; height: 28px;"></i>
              </div>
              <div>
                <h5 style="margin: 0; font-size: 1.1rem;">PANDAWA</h5>
                <p style="margin: 0; font-size: 0.85rem; color: var(--muted);">Chat WA resmi BPJS</p>
              </div>
            </div>
            
            <p style="color: var(--muted); margin-bottom: 1rem; line-height: 1.7;">
              Layanan chat WhatsApp resmi untuk bantuan operasional dan informasi kepesertaan.
            </p>
            
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
              <div style="display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem 0.75rem; background: var(--surface-soft); border-radius: 12px;">
                <i data-lucide="message-circle" style="width: 18px; height: 18px; color: var(--primary);"></i>
                <span style="font-size: 0.9rem;">WA: <strong>0811 8165 165</strong></span>
              </div>
              <div style="display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem 0.75rem; background: var(--surface-soft); border-radius: 12px;">
                <i data-lucide="phone-call" style="width: 18px; height: 18px; color: var(--primary);"></i>
                <span style="font-size: 0.9rem;">Care Center: <strong>165</strong></span>
              </div>
            </div>
            
            <a href="https://wa.me/628118165165?text=Halo%20BPJS%20Kesehatan" target="_blank" style="
              display: inline-block;
              margin-top: 1.25rem;
              padding: 0.6rem 1.5rem;
              background: #25D366;
              color: white;
              border-radius: 50px;
              text-decoration: none;
              font-weight: 600;
              font-size: 0.9rem;
              transition: all 0.3s ease;
            " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
              <i data-lucide="message-square" style="width: 18px; height: 18px; display: inline-block;"></i>
              Chat Sekarang
            </a>
          </div>

          <!-- Kartu 2: FAQ -->
          <div style="
            background: var(--surface);
            border-radius: 24px;
            padding: 2rem 1.5rem;
            border: 1px solid rgba(13,110,253,0.08);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          " onmouseover="this.style.transform='translateY(-6px)'; this.style.boxShadow='0 20px 60px rgba(13,110,253,0.1)'" 
             onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
            
            <div style="position: absolute; top: -30px; right: -30px; width: 80px; height: 80px; background: rgba(13,110,253,0.05); border-radius: 50%;"></div>
            
            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
              <div style="
                width: 56px;
                height: 56px;
                background: var(--primary-soft);
                border-radius: 16px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--primary);
              ">
                <i data-lucide="help-circle" style="width: 28px; height: 28px;"></i>
              </div>
              <div>
                <h5 style="margin: 0; font-size: 1.1rem;">FAQ</h5>
                <p style="margin: 0; font-size: 0.85rem; color: var(--muted);">Pertanyaan umum</p>
              </div>
            </div>
            
            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
              <div style="padding: 0.75rem; background: var(--surface-soft); border-radius: 12px; border-left: 3px solid var(--primary);">
                <div style="font-weight: 600; font-size: 0.9rem;">Apakah saya perlu login?</div>
                <div style="font-size: 0.85rem; color: var(--muted); margin-top: 0.25rem;">Tidak, akses utama tanpa login.</div>
              </div>
              <div style="padding: 0.75rem; background: var(--surface-soft); border-radius: 12px; border-left: 3px solid var(--primary);">
                <div style="font-weight: 600; font-size: 0.9rem;">Bagaimana cara bayar?</div>
                <div style="font-size: 0.85rem; color: var(--muted); margin-top: 0.25rem;">Lewat bank, e-wallet, atau retail mitra.</div>
              </div>
              <div style="padding: 0.75rem; background: var(--surface-soft); border-radius: 12px; border-left: 3px solid var(--primary);">
                <div style="font-weight: 600; font-size: 0.9rem;">Bagaimana cara daftar?</div>
                <div style="font-size: 0.85rem; color: var(--muted); margin-top: 0.25rem;">Mobile JKN, PANDAWA, atau kantor BPJS.</div>
              </div>
            </div>
            
            <a href="#panduan" style="
              display: inline-block;
              margin-top: 1.25rem;
              padding: 0.6rem 1.5rem;
              background: var(--primary);
              color: white;
              border-radius: 50px;
              text-decoration: none;
              font-weight: 600;
              font-size: 0.9rem;
              transition: all 0.3s ease;
            " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
              <i data-lucide="book-open" style="width: 18px; height: 18px; display: inline-block;"></i>
              Lihat Panduan
            </a>
          </div>

          <!-- Kartu 3: Layanan Darurat -->
          <div style="
            background: linear-gradient(135deg, #dc3545, #b02a37);
            border-radius: 24px;
            padding: 2rem 1.5rem;
            color: white;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          " onmouseover="this.style.transform='translateY(-6px)'; this.style.boxShadow='0 20px 60px rgba(220,53,69,0.3)'" 
             onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
            
            <div style="position: absolute; top: -30px; right: -30px; width: 80px; height: 80px; background: rgba(255,255,255,0.08); border-radius: 50%;"></div>
            <div style="position: absolute; bottom: -50px; left: -30px; width: 120px; height: 120px; background: rgba(255,255,255,0.05); border-radius: 50%;"></div>
            
            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; position: relative; z-index: 1;">
              <div style="
                width: 56px;
                height: 56px;
                background: rgba(255,255,255,0.15);
                border-radius: 16px;
                display: flex;
                align-items: center;
                justify-content: center;
              ">
                <i data-lucide="alert-triangle" style="width: 28px; height: 28px;"></i>
              </div>
              <div>
                <h5 style="margin: 0; font-size: 1.1rem;">Layanan Darurat</h5>
                <p style="margin: 0; font-size: 0.85rem; opacity: 0.8;">Bantuan mendesak</p>
              </div>
            </div>
            
            <p style="opacity: 0.9; margin-bottom: 1.5rem; line-height: 1.7; position: relative; z-index: 1;">
              Temukan faskes terdekat yang buka dan tersedia untuk situasi darurat.
            </p>
            
            <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; position: relative; z-index: 1;">
              <a href="#faskes" style="
                flex: 1;
                padding: 0.6rem 1rem;
                background: rgba(255,255,255,0.15);
                color: white;
                border-radius: 50px;
                text-decoration: none;
                font-weight: 600;
                font-size: 0.9rem;
                text-align: center;
                backdrop-filter: blur(8px);
                transition: all 0.3s ease;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
              " onmouseover="this.style.background='rgba(255,255,255,0.25)'" onmouseout="this.style.background='rgba(255,255,255,0.15)'">
                <i data-lucide="map-pin" style="width: 16px; height: 16px;"></i>
                Cari Faskes
              </a>
              <a href="https://wa.me/628118165165?text=Halo%20BPJS%20Kesehatan" target="_blank" style="
                flex: 1;
                padding: 0.6rem 1rem;
                background: white;
                color: #dc3545;
                border-radius: 50px;
                text-decoration: none;
                font-weight: 600;
                font-size: 0.9rem;
                text-align: center;
                transition: all 0.3s ease;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
              " onmouseover="this.style.transform='scale(1.03)'" onmouseout="this.style.transform='scale(1)'">
                <i data-lucide="phone" style="width: 16px; height: 16px;"></i>
                Hubungi
              </a>
            </div>
          </div>
        </div>

        <!-- ============================================
             DOKUMEN PENTING
             ============================================ -->
        <div style="
          background: var(--surface);
          border-radius: 24px;
          padding: 2rem;
          border: 1px solid rgba(13,110,253,0.08);
        ">
          <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
            <div style="
              width: 48px;
              height: 48px;
              background: var(--primary-soft);
              border-radius: 12px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: var(--primary);
            ">
              <i data-lucide="file-text" style="width: 24px; height: 24px;"></i>
            </div>
            <div>
              <h5 style="margin: 0; font-size: 1.1rem;">Dokumen Penting</h5>
              <p style="margin: 0; font-size: 0.85rem; color: var(--muted);">Unduh dan akses dokumen resmi</p>
            </div>
          </div>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
            <div style="
              padding: 1rem;
              background: var(--surface-soft);
              border-radius: 12px;
              display: flex;
              align-items: center;
              gap: 0.75rem;
              transition: all 0.3s ease;
              cursor: pointer;
            " onmouseover="this.style.background='var(--primary-soft)'" onmouseout="this.style.background='var(--surface-soft)'">
              <i data-lucide="file" style="width: 20px; height: 20px; color: var(--primary);"></i>
              <span style="font-size: 0.9rem;">Formulir Pendaftaran</span>
            </div>
            <div style="
              padding: 1rem;
              background: var(--surface-soft);
              border-radius: 12px;
              display: flex;
              align-items: center;
              gap: 0.75rem;
              transition: all 0.3s ease;
              cursor: pointer;
            " onmouseover="this.style.background='var(--primary-soft)'" onmouseout="this.style.background='var(--surface-soft)'">
              <i data-lucide="file" style="width: 20px; height: 20px; color: var(--primary);"></i>
              <span style="font-size: 0.9rem;">Persyaratan Pendaftaran</span>
            </div>
            <div style="
              padding: 1rem;
              background: var(--surface-soft);
              border-radius: 12px;
              display: flex;
              align-items: center;
              gap: 0.75rem;
              transition: all 0.3s ease;
              cursor: pointer;
            " onmouseover="this.style.background='var(--primary-soft)'" onmouseout="this.style.background='var(--surface-soft)'">
              <i data-lucide="file" style="width: 20px; height: 20px; color: var(--primary);"></i>
              <span style="font-size: 0.9rem;">Panduan Mobile JKN</span>
            </div>
            <div style="
              padding: 1rem;
              background: var(--surface-soft);
              border-radius: 12px;
              display: flex;
              align-items: center;
              gap: 0.75rem;
              transition: all 0.3s ease;
              cursor: pointer;
            " onmouseover="this.style.background='var(--primary-soft)'" onmouseout="this.style.background='var(--surface-soft)'">
              <i data-lucide="file" style="width: 20px; height: 20px; color: var(--primary);"></i>
              <span style="font-size: 0.9rem;">Jalur Resmi BPJS</span>
            </div>
          </div>
        </div>

        <!-- ============================================
             HUBUNGI KAMI
             ============================================ -->
        <div style="
          margin-top: 3rem;
          padding: 2rem;
          background: var(--primary);
          color: white;
          border-radius: 24px;
          text-align: center;
        ">
          <h3 style="margin: 0 0 0.5rem;">Masih butuh bantuan?</h3>
          <p style="opacity: 0.9; margin-bottom: 1.5rem;">
            Tim support kami siap membantu 24/7
          </p>
          <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <a href="https://wa.me/628118165165?text=Halo%20BPJS%20Kesehatan" target="_blank" style="
              padding: 0.75rem 2rem;
              background: #25D366;
              color: white;
              border-radius: 50px;
              text-decoration: none;
              font-weight: 600;
              transition: all 0.3s ease;
              display: inline-flex;
              align-items: center;
              gap: 0.5rem;
            " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
              <i data-lucide="message-square" style="width: 18px; height: 18px;"></i>
              WhatsApp
            </a>
            <a href="tel:165" style="
              padding: 0.75rem 2rem;
              background: rgba(255,255,255,0.15);
              color: white;
              border-radius: 50px;
              text-decoration: none;
              font-weight: 600;
              transition: all 0.3s ease;
              backdrop-filter: blur(8px);
              display: inline-flex;
              align-items: center;
              gap: 0.5rem;
            " onmouseover="this.style.background='rgba(255,255,255,0.25)'" onmouseout="this.style.background='rgba(255,255,255,0.15)'">
              <i data-lucide="phone" style="width: 18px; height: 18px;"></i>
              Telepon 165
            </a>
            <a href="mailto:info@bpjskesehatan.go.id" style="
              padding: 0.75rem 2rem;
              background: rgba(255,255,255,0.15);
              color: white;
              border-radius: 50px;
              text-decoration: none;
              font-weight: 600;
              transition: all 0.3s ease;
              backdrop-filter: blur(8px);
              display: inline-flex;
              align-items: center;
              gap: 0.5rem;
            " onmouseover="this.style.background='rgba(255,255,255,0.25)'" onmouseout="this.style.background='rgba(255,255,255,0.15)'">
              <i data-lucide="mail" style="width: 18px; height: 18px;"></i>
              Email
            </a>
          </div>
        </div>

      </div>
    </section>
  `;

  return div;
}