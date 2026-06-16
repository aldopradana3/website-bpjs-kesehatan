export function renderSkriningKesehatan() {
  const div = document.createElement("div");
  div.innerHTML = `
    <!-- ============================================
         HERO SKRINING KESEHATAN
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
            <i data-lucide="heart-pulse" style="width: 14px; height: 14px;"></i>
            Kesehatan Mental
          </span>
        </div>
        <h1 style="font-size: clamp(1.8rem, 3vw, 2.5rem); margin: 0 0 0.3rem;">
          Skrining Kesehatan Mental
        </h1>
        <p style="font-size: 1rem; opacity: 0.85; max-width: 500px; margin: 0;">
          Pantau kesehatan mental Anda dengan skrining mandiri yang singkat, mudah, dan terpercaya
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
              <i data-lucide="clipboard-check" style="width: 22px; height: 22px;"></i>
            </div>
            <div style="font-size: 1.2rem; font-weight: 700; color: var(--primary);">4</div>
            <div style="font-size: 0.75rem; color: var(--muted);">Jenis Skrining</div>
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
              <i data-lucide="clock" style="width: 22px; height: 22px;"></i>
            </div>
            <div style="font-size: 1.2rem; font-weight: 700; color: #198754;">3-5 menit</div>
            <div style="font-size: 0.75rem; color: var(--muted);">Durasi Skrining</div>
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
              <i data-lucide="shield" style="width: 22px; height: 22px;"></i>
            </div>
            <div style="font-size: 1.2rem; font-weight: 700; color: #ffc107;">100%</div>
            <div style="font-size: 0.75rem; color: var(--muted);">Rahasia & Aman</div>
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
              <i data-lucide="users" style="width: 22px; height: 22px;"></i>
            </div>
            <div style="font-size: 1.2rem; font-weight: 700; color: #dc3545;">24/7</div>
            <div style="font-size: 0.75rem; color: var(--muted);">Akses Gratis</div>
          </div>
        </div>

        <!-- ============================================
             MENGAPA SKRINING PENTING
             ============================================ -->
        <div style="margin-bottom: 2.5rem;">
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
              <i data-lucide="heart" style="width: 20px; height: 20px;"></i>
            </div>
            <div>
              <span class="section-label" style="margin: 0;">Tentang Skrining</span>
              <h2 style="margin: 0; font-size: 1.3rem;">Mengapa skrining kesehatan mental penting?</h2>
            </div>
          </div>
          
          <div style="
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
          ">
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
                <i data-lucide="eye" style="width: 24px; height: 24px;"></i>
              </div>
              <div style="font-weight: 700; font-size: 0.95rem; margin-bottom: 0.25rem;">Deteksi Dini</div>
              <p style="font-size: 0.8rem; color: var(--muted); margin: 0; line-height: 1.5;">
                Mengenali tanda-tanda gangguan kesehatan mental lebih awal untuk intervensi yang lebih efektif.
              </p>
            </div>

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
                <i data-lucide="shield-check" style="width: 24px; height: 24px;"></i>
              </div>
              <div style="font-weight: 700; font-size: 0.95rem; margin-bottom: 0.25rem;">Pencegahan</div>
              <p style="font-size: 0.8rem; color: var(--muted); margin: 0; line-height: 1.5;">
                Membantu mencegah berkembangnya kondisi kesehatan mental menjadi lebih parah.
              </p>
            </div>

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
                <i data-lucide="book-open" style="width: 24px; height: 24px;"></i>
              </div>
              <div style="font-weight: 700; font-size: 0.95rem; margin-bottom: 0.25rem;">Edukasi Diri</div>
              <p style="font-size: 0.8rem; color: var(--muted); margin: 0; line-height: 1.5;">
                Meningkatkan kesadaran dan pemahaman tentang kondisi kesehatan mental Anda.
              </p>
            </div>
          </div>
        </div>

        <!-- ============================================
             JENIS SKRINING
             ============================================ -->
        <div style="margin-bottom: 2.5rem;">
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
              <span class="section-label" style="margin: 0;">Metode Skrining</span>
              <h2 style="margin: 0; font-size: 1.3rem;">Pilih jenis skrining yang sesuai</h2>
            </div>
          </div>
          
          <div style="
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1rem;
          ">
            <!-- Skrining Depresi -->
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
              <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                <div style="
                  width: 44px;
                  height: 44px;
                  background: var(--primary-soft);
                  border-radius: 10px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: var(--primary);
                ">
                  <i data-lucide="brain" style="width: 22px; height: 22px;"></i>
                </div>
                <div>
                  <div style="font-weight: 700; font-size: 0.95rem;">Skrining Depresi</div>
                  <div style="font-size: 0.7rem; color: var(--muted);">PHQ-9</div>
                </div>
              </div>
              <p style="font-size: 0.85rem; color: var(--muted); margin-bottom: 1rem; line-height: 1.6;">
                Alat skrining berbasis PHQ-9 untuk mendeteksi gejala depresi dalam 2 minggu terakhir. Terdiri dari 9 pertanyaan sederhana.
              </p>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 0.7rem; color: var(--muted);">
                  <i data-lucide="clock" style="width: 12px; height: 12px; display: inline-block;"></i>
                  3 menit
                </span>
                <button class="btn btn-primary btn-sm" data-assessment="depresi" style="
                  padding: 0.3rem 1.2rem;
                  border-radius: 50px;
                  font-size: 0.75rem;
                  font-weight: 600;
                  border: none;
                  background: var(--primary);
                  color: white;
                  cursor: pointer;
                  transition: all 0.3s ease;
                  display: inline-flex;
                  align-items: center;
                  gap: 0.3rem;
                " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                  <i data-lucide="play" style="width: 14px; height: 14px;"></i>
                  Mulai
                </button>
              </div>
            </div>

            <!-- Skrining Kecemasan -->
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
              <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                <div style="
                  width: 44px;
                  height: 44px;
                  background: #f8d7da;
                  border-radius: 10px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: #721c24;
                ">
                  <i data-lucide="zap" style="width: 22px; height: 22px;"></i>
                </div>
                <div>
                  <div style="font-weight: 700; font-size: 0.95rem;">Skrining Kecemasan</div>
                  <div style="font-size: 0.7rem; color: var(--muted);">GAD-7</div>
                </div>
              </div>
              <p style="font-size: 0.85rem; color: var(--muted); margin-bottom: 1rem; line-height: 1.6;">
                Alat skrining berbasis GAD-7 untuk mendeteksi gejala gangguan cemas umum. Terdiri dari 7 pertanyaan yang mudah dipahami.
              </p>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 0.7rem; color: var(--muted);">
                  <i data-lucide="clock" style="width: 12px; height: 12px; display: inline-block;"></i>
                  2 menit
                </span>
                <button class="btn btn-primary btn-sm" data-assessment="kecemasan" style="
                  padding: 0.3rem 1.2rem;
                  border-radius: 50px;
                  font-size: 0.75rem;
                  font-weight: 600;
                  border: none;
                  background: var(--primary);
                  color: white;
                  cursor: pointer;
                  transition: all 0.3s ease;
                  display: inline-flex;
                  align-items: center;
                  gap: 0.3rem;
                " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                  <i data-lucide="play" style="width: 14px; height: 14px;"></i>
                  Mulai
                </button>
              </div>
            </div>

            <!-- Skrining Gangguan Tidur -->
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
              <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                <div style="
                  width: 44px;
                  height: 44px;
                  background: #d4edda;
                  border-radius: 10px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: #155724;
                ">
                  <i data-lucide="moon" style="width: 22px; height: 22px;"></i>
                </div>
                <div>
                  <div style="font-weight: 700; font-size: 0.95rem;">Skrining Gangguan Tidur</div>
                  <div style="font-size: 0.7rem; color: var(--muted);">Sleep Assessment</div>
                </div>
              </div>
              <p style="font-size: 0.85rem; color: var(--muted); margin-bottom: 1rem; line-height: 1.6;">
                Penilaian kualitas tidur dan kemungkinan sleep apnea. Membantu Anda memahami pola tidur Anda lebih baik.
              </p>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 0.7rem; color: var(--muted);">
                  <i data-lucide="clock" style="width: 12px; height: 12px; display: inline-block;"></i>
                  4 menit
                </span>
                <button class="btn btn-primary btn-sm" data-assessment="tidur" style="
                  padding: 0.3rem 1.2rem;
                  border-radius: 50px;
                  font-size: 0.75rem;
                  font-weight: 600;
                  border: none;
                  background: var(--primary);
                  color: white;
                  cursor: pointer;
                  transition: all 0.3s ease;
                  display: inline-flex;
                  align-items: center;
                  gap: 0.3rem;
                " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                  <i data-lucide="play" style="width: 14px; height: 14px;"></i>
                  Mulai
                </button>
              </div>
            </div>

            <!-- Skrining Stres -->
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
              <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                <div style="
                  width: 44px;
                  height: 44px;
                  background: #fff3cd;
                  border-radius: 10px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: #856404;
                ">
                  <i data-lucide="heart" style="width: 22px; height: 22px;"></i>
                </div>
                <div>
                  <div style="font-weight: 700; font-size: 0.95rem;">Skrining Stres</div>
                  <div style="font-size: 0.7rem; color: var(--muted);">PSS-10</div>
                </div>
              </div>
              <p style="font-size: 0.85rem; color: var(--muted); margin-bottom: 1rem; line-height: 1.6;">
                Mengukur tingkat stres Anda dalam kehidupan sehari-hari dengan skala PSS-10 yang teruji validitas.
              </p>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 0.7rem; color: var(--muted);">
                  <i data-lucide="clock" style="width: 12px; height: 12px; display: inline-block;"></i>
                  3 menit
                </span>
                <button class="btn btn-primary btn-sm" data-assessment="stres" style="
                  padding: 0.3rem 1.2rem;
                  border-radius: 50px;
                  font-size: 0.75rem;
                  font-weight: 600;
                  border: none;
                  background: var(--primary);
                  color: white;
                  cursor: pointer;
                  transition: all 0.3s ease;
                  display: inline-flex;
                  align-items: center;
                  gap: 0.3rem;
                " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                  <i data-lucide="play" style="width: 14px; height: 14px;"></i>
                  Mulai
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- ============================================
             INFORMASI PENTING
             ============================================ -->
        <div style="margin-bottom: 2.5rem;">
          <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem;">
            <div style="
              width: 40px;
              height: 40px;
              background: #fff3cd;
              border-radius: 10px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #856404;
            ">
              <i data-lucide="info" style="width: 20px; height: 20px;"></i>
            </div>
            <div>
              <span class="section-label" style="margin: 0;">Informasi Penting</span>
              <h2 style="margin: 0; font-size: 1.3rem;">Hal yang perlu Anda ketahui</h2>
            </div>
          </div>
          
          <div style="
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1rem;
          ">
            <div style="
              background: var(--surface);
              border-radius: 16px;
              padding: 1.5rem;
              border: 1px solid rgba(13,110,253,0.06);
              transition: all 0.3s ease;
            " onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 12px 30px rgba(13,110,253,0.08)'" 
               onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
              <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
                <i data-lucide="lock" style="width: 20px; height: 20px; color: var(--primary);"></i>
                <div style="font-weight: 700; font-size: 0.95rem;">Kerahasiaan Data</div>
              </div>
              <p style="font-size: 0.85rem; color: var(--muted); margin: 0; line-height: 1.6;">
                Semua hasil skrining Anda bersifat pribadi dan tidak akan dibagikan tanpa persetujuan Anda. Data tersimpan aman di sistem kami yang terenkripsi.
              </p>
            </div>

            <div style="
              background: var(--surface);
              border-radius: 16px;
              padding: 1.5rem;
              border: 1px solid rgba(13,110,253,0.06);
              transition: all 0.3s ease;
            " onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 12px 30px rgba(13,110,253,0.08)'" 
               onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
              <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
                <i data-lucide="alert-circle" style="width: 20px; height: 20px; color: #ffc107;"></i>
                <div style="font-weight: 700; font-size: 0.95rem;">Bukan Diagnosis Medis</div>
              </div>
              <p style="font-size: 0.85rem; color: var(--muted); margin: 0; line-height: 1.6;">
                Skrining ini adalah alat penyaring awal dan bukan pengganti konsultasi dengan profesional kesehatan mental atau dokter. Konsultasi lebih lanjut sangat disarankan untuk hasil yang signifikan.
              </p>
            </div>

            <div style="
              background: var(--surface);
              border-radius: 16px;
              padding: 1.5rem;
              border: 1px solid rgba(13,110,253,0.06);
              transition: all 0.3s ease;
            " onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 12px 30px rgba(13,110,253,0.08)'" 
               onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
              <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
                <i data-lucide="phone" style="width: 20px; height: 20px; color: #dc3545;"></i>
                <div style="font-weight: 700; font-size: 0.95rem;">Kapan Mencari Bantuan?</div>
              </div>
              <p style="font-size: 0.85rem; color: var(--muted); margin: 0; line-height: 1.6;">
                Segera hubungi profesional kesehatan mental atau dokter jika Anda mengalami: pikiran untuk menyakiti diri, ketidakmampuan menjalani aktivitas harian, atau gejala yang semakin memburuk.
              </p>
            </div>
          </div>
        </div>

        <!-- ============================================
             DUKUNGAN & LAYANAN
             ============================================ -->
        <div style="margin-bottom: 1rem;">
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
              <i data-lucide="hand-helping" style="width: 20px; height: 20px;"></i>
            </div>
            <div>
              <span class="section-label" style="margin: 0;">Dukungan & Layanan</span>
              <h2 style="margin: 0; font-size: 1.3rem;">Akses bantuan kesehatan mental</h2>
            </div>
          </div>
          
          <div style="
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 1rem;
          ">
            <div style="
              background: var(--surface);
              border-radius: 16px;
              padding: 1.5rem;
              text-align: center;
              border: 1px solid rgba(13,110,253,0.06);
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
                <i data-lucide="phone" style="width: 24px; height: 24px;"></i>
              </div>
              <div style="font-weight: 700; font-size: 0.95rem; margin-bottom: 0.25rem;">Telepon Hotline</div>
              <p style="font-size: 0.8rem; color: var(--muted); margin: 0; line-height: 1.5;">
                Hubungi layanan konseling gratis kami di nomor yang tersedia 24/7 untuk berbicara dengan profesional.
              </p>
            </div>

            <div style="
              background: var(--surface);
              border-radius: 16px;
              padding: 1.5rem;
              text-align: center;
              border: 1px solid rgba(13,110,253,0.06);
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
                <i data-lucide="users" style="width: 24px; height: 24px;"></i>
              </div>
              <div style="font-weight: 700; font-size: 0.95rem; margin-bottom: 0.25rem;">Konsultasi Profesional</div>
              <p style="font-size: 0.8rem; color: var(--muted); margin: 0; line-height: 1.5;">
                Temukan psikolog atau psikiater terakreditasi yang tersedia di jaringan fasilitas kesehatan JKN.
              </p>
            </div>

            <div style="
              background: var(--surface);
              border-radius: 16px;
              padding: 1.5rem;
              text-align: center;
              border: 1px solid rgba(13,110,253,0.06);
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
                <i data-lucide="book" style="width: 24px; height: 24px;"></i>
              </div>
              <div style="font-weight: 700; font-size: 0.95rem; margin-bottom: 0.25rem;">Materi Edukasi</div>
              <p style="font-size: 0.8rem; color: var(--muted); margin: 0; line-height: 1.5;">
                Akses artikel, video, dan panduan tentang kesehatan mental dari sumber terpercaya.
              </p>
            </div>
          </div>
        </div>

        <!-- ============================================
             CTA
             ============================================ -->
        <div style="
          margin-top: 2rem;
          padding: 2rem;
          background: linear-gradient(135deg, #1d4580 0%, #316fcb 100%);
          color: white;
          border-radius: 20px;
          text-align: center;
        ">
          <h3 style="margin: 0 0 0.5rem;">Jaga Kesehatan Mental Anda</h3>
          <p style="opacity: 0.9; margin-bottom: 1.5rem;">
            Mulai skrining sekarang dan ambil langkah pertama menuju kesehatan mental yang lebih baik
          </p>
          <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <a href="#skrining-kesehatan" style="
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
              <i data-lucide="play" style="width: 18px; height: 18px;"></i>
              Mulai Skrining
            </a>
            <a href="#bantuan" style="
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
              <i data-lucide="life-buoy" style="width: 18px; height: 18px;"></i>
              Butuh Bantuan?
            </a>
          </div>
        </div>

      </div>
    </section>
  `;

  return div;
}