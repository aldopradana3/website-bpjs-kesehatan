import { createForm } from "../components/form";

export function renderCekBpjs() {
  const div = document.createElement("div");
  div.innerHTML = `
    <!-- ============================================
         HERO CEK BPJS
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
        right: 20%;
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
            <i data-lucide="clipboard-check" style="width: 14px; height: 14px;"></i>
            Cek Kepesertaan
          </span>
        </div>
        <h1 style="font-size: clamp(1.8rem, 3vw, 2.5rem); margin: 0 0 0.3rem;">
          Cek Status BPJS
        </h1>
        <p style="font-size: 1rem; opacity: 0.85; max-width: 500px; margin: 0;">
          Cek status kepesertaan dan tagihan iuran dengan mudah
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
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
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
              <i data-lucide="users" style="width: 22px; height: 22px;"></i>
            </div>
            <div style="font-size: 1.2rem; font-weight: 700; color: var(--primary);">234M+</div>
            <div style="font-size: 0.75rem; color: var(--muted);">Peserta Aktif</div>
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
              <i data-lucide="hospital" style="width: 22px; height: 22px;"></i>
            </div>
            <div style="font-size: 1.2rem; font-weight: 700; color: #198754;">29K+</div>
            <div style="font-size: 0.75rem; color: var(--muted);">Faskes Terdaftar</div>
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
            <div style="font-size: 1.2rem; font-weight: 700; color: #ffc107;">24/7</div>
            <div style="font-size: 0.75rem; color: var(--muted);">Layanan Aktif</div>
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
              <i data-lucide="shield-check" style="width: 22px; height: 22px;"></i>
            </div>
            <div style="font-size: 1.2rem; font-weight: 700; color: #dc3545;">98%</div>
            <div style="font-size: 0.75rem; color: var(--muted);">Kepuasan Peserta</div>
          </div>
        </div>

        <!-- ============================================
             FORM CEK BPJS
             ============================================ -->
        <div style="
          background: var(--surface);
          border-radius: 24px;
          padding: 2rem;
          border: 1px solid rgba(13,110,253,0.06);
          box-shadow: 0 4px 24px rgba(13,110,253,0.04);
        ">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
            <div>
              <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.25rem;">
                <div style="
                  width: 36px;
                  height: 36px;
                  background: var(--primary-soft);
                  border-radius: 10px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: var(--primary);
                ">
                  <i data-lucide="clipboard-check" style="width: 18px; height: 18px;"></i>
                </div>
                <span style="
                  font-weight: 700;
                  font-size: 1.1rem;
                ">Cek Status Peserta</span>
              </div>
              <p style="color: var(--muted); margin: 0; font-size: 0.9rem;">
                Masukkan No JKN / NIK dan tanggal lahir
              </p>
            </div>
            <span style="
              background: var(--primary-soft);
              color: var(--primary);
              padding: 0.3rem 0.9rem;
              border-radius: 50px;
              font-size: 0.7rem;
              font-weight: 700;
              display: inline-flex;
              align-items: center;
              gap: 0.3rem;
            ">
              <i data-lucide="unlock" style="width: 14px; height: 14px;"></i>
              Tanpa Login
            </span>
          </div>

          <!-- Form -->
          <div id="cek-form-root"></div>

          <!-- Info Tambahan -->
          <div style="
            margin-top: 1.5rem;
            padding: 1rem;
            background: var(--surface-soft);
            border-radius: 12px;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            border: 1px solid rgba(13,110,253,0.06);
          ">
            <i data-lucide="info" style="width: 18px; height: 18px; color: var(--primary); flex-shrink: 0;"></i>
            <span style="font-size: 0.8rem; color: var(--muted);">
              Data yang Anda masukkan aman dan hanya digunakan untuk pengecekan status kepesertaan.
            </span>
          </div>
        </div>

        <!-- ============================================
             PANDUAN CEPAT
             ============================================ -->
        <div style="
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-top: 2.5rem;
        ">
          <a href="#panduan?tab=daftar" style="
            background: var(--surface);
            padding: 1.25rem;
            border-radius: 16px;
            text-decoration: none;
            color: inherit;
            text-align: center;
            border: 1px solid rgba(13,110,253,0.06);
            transition: all 0.3s ease;
            display: block;
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
              <i data-lucide="user-plus" style="width: 22px; height: 22px;"></i>
            </div>
            <div style="font-weight: 600; font-size: 0.9rem;">Cara Daftar</div>
            <div style="font-size: 0.75rem; color: var(--muted);">Panduan pendaftaran</div>
          </a>
          
          <a href="#panduan?tab=bayar" style="
            background: var(--surface);
            padding: 1.25rem;
            border-radius: 16px;
            text-decoration: none;
            color: inherit;
            text-align: center;
            border: 1px solid rgba(13,110,253,0.06);
            transition: all 0.3s ease;
            display: block;
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
              <i data-lucide="credit-card" style="width: 22px; height: 22px;"></i>
            </div>
            <div style="font-weight: 600; font-size: 0.9rem;">Cara Bayar</div>
            <div style="font-size: 0.75rem; color: var(--muted);">Panduan pembayaran</div>
          </a>
          
          <a href="#faskes" style="
            background: var(--surface);
            padding: 1.25rem;
            border-radius: 16px;
            text-decoration: none;
            color: inherit;
            text-align: center;
            border: 1px solid rgba(13,110,253,0.06);
            transition: all 0.3s ease;
            display: block;
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
              <i data-lucide="map-pin" style="width: 22px; height: 22px;"></i>
            </div>
            <div style="font-weight: 600; font-size: 0.9rem;">Cari Faskes</div>
            <div style="font-size: 0.75rem; color: var(--muted);">Temukan faskes terdekat</div>
          </a>
          
          <a href="#bantuan" style="
            background: var(--surface);
            padding: 1.25rem;
            border-radius: 16px;
            text-decoration: none;
            color: inherit;
            text-align: center;
            border: 1px solid rgba(13,110,253,0.06);
            transition: all 0.3s ease;
            display: block;
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
              <i data-lucide="life-buoy" style="width: 22px; height: 22px;"></i>
            </div>
            <div style="font-weight: 600; font-size: 0.9rem;">Bantuan</div>
            <div style="font-size: 0.75rem; color: var(--muted);">Kontak & FAQ</div>
          </a>
        </div>
      </div>
    </section>
  `;

  // Render form ke dalam container
  div.querySelector("#cek-form-root").appendChild(createForm());
  
  return div;
}