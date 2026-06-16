export function renderPanduan() {
  const div = document.createElement("div");
  
  // Fungsi untuk mendapatkan tab dari URL
  function getTabFromUrl() {
    const hash = window.location.hash;
    if (hash.includes('?tab=')) {
      const tab = hash.split('?tab=')[1];
      return tab === 'bayar' ? 'bayar' : 'daftar';
    }
    return 'daftar';
  }

  const activeTab = getTabFromUrl();

  div.innerHTML = `
    <!-- ============================================
         HERO PANDUAN
         ============================================ -->
    <section style="
      background: linear-gradient(135deg, #1d4580 0%, #316fcb 100%);
      color: white;
      padding: 2rem 1rem 3rem;
      position: relative;
      overflow: hidden;
    ">
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
            <i data-lucide="book-open" style="width: 14px; height: 14px;"></i>
            Panduan
          </span>
        </div>
        <h1 style="font-size: clamp(1.8rem, 3vw, 2.5rem); margin: 0 0 0.3rem;">
          Panduan Lengkap BPJS
        </h1>
        <p style="font-size: 1rem; opacity: 0.85; max-width: 500px; margin: 0;">
          Daftar dan bayar iuran dengan mudah
        </p>
      </div>

      <!-- Tabs di dalam hero -->
      <div class="container" style="position: relative; z-index: 1; margin-top: 1.5rem;">
        <div style="
          display: inline-flex;
          background: rgba(255,255,255,0.12);
          border-radius: 50px;
          padding: 4px;
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.1);
        ">
          <button class="panduan-tab-btn ${activeTab === 'daftar' ? 'active' : ''}" data-tab="daftar" style="
            padding: 0.6rem 1.8rem;
            border: none;
            border-radius: 50px;
            font-weight: 600;
            font-size: 0.9rem;
            cursor: pointer;
            transition: all 0.3s ease;
            background: ${activeTab === 'daftar' ? 'white' : 'transparent'};
            color: ${activeTab === 'daftar' ? '#1d4580' : 'rgba(255,255,255,0.7)'};
          ">
            <i data-lucide="user-plus" style="width: 16px; height: 16px; display: inline-block;"></i>
            Cara Daftar
          </button>
          <button class="panduan-tab-btn ${activeTab === 'bayar' ? 'active' : ''}" data-tab="bayar" style="
            padding: 0.6rem 1.8rem;
            border: none;
            border-radius: 50px;
            font-weight: 600;
            font-size: 0.9rem;
            cursor: pointer;
            transition: all 0.3s ease;
            background: ${activeTab === 'bayar' ? 'white' : 'transparent'};
            color: ${activeTab === 'bayar' ? '#1d4580' : 'rgba(255,255,255,0.7)'};
          ">
            <i data-lucide="credit-card" style="width: 16px; height: 16px; display: inline-block;"></i>
            Cara Bayar
          </button>
        </div>
      </div>
    </section>

    <!-- ============================================
         TAB DAFTAR
         ============================================ -->
    <div id="tab-daftar" class="tab-content ${activeTab === 'daftar' ? 'active' : ''}" style="background: var(--bg);">
      <section class="section">
        <div class="container">
          
          <!-- 4 Kartu Jenis Peserta -->
          <div style="
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 1rem;
            margin-bottom: 2.5rem;
          ">
            <div style="
              background: var(--surface);
              padding: 1.5rem;
              border-radius: 20px;
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
                <i data-lucide="briefcase" style="width: 24px; height: 24px;"></i>
              </div>
              <h5 style="margin: 0 0 0.25rem; font-size: 1rem;">PPU</h5>
              <p style="margin: 0; font-size: 0.85rem; color: var(--muted);">Pekerja Penerima Upah</p>
            </div>
            
            <div style="
              background: var(--surface);
              padding: 1.5rem;
              border-radius: 20px;
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
                <i data-lucide="user" style="width: 24px; height: 24px;"></i>
              </div>
              <h5 style="margin: 0 0 0.25rem; font-size: 1rem;">PBPU</h5>
              <p style="margin: 0; font-size: 0.85rem; color: var(--muted);">Peserta Mandiri</p>
            </div>
            
            <div style="
              background: var(--surface);
              padding: 1.5rem;
              border-radius: 20px;
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
                <i data-lucide="building" style="width: 24px; height: 24px;"></i>
              </div>
              <h5 style="margin: 0 0 0.25rem; font-size: 1rem;">BP</h5>
              <p style="margin: 0; font-size: 0.85rem; color: var(--muted);">Bukan Penerima Upah</p>
            </div>
            
            <div style="
              background: var(--surface);
              padding: 1.5rem;
              border-radius: 20px;
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
                <i data-lucide="shield" style="width: 24px; height: 24px;"></i>
              </div>
              <h5 style="margin: 0 0 0.25rem; font-size: 1rem;">PBI</h5>
              <p style="margin: 0; font-size: 0.85rem; color: var(--muted);">Bantuan Iuran</p>
            </div>
          </div>

          <!-- 2 Kolom: Langkah + Simulasi -->
          <div class="row g-4">
            <div class="col-12 col-lg-7">
              <div style="
                background: var(--surface);
                border-radius: 24px;
                padding: 2rem;
                border: 1px solid rgba(13,110,253,0.06);
              ">
                <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.25rem;">
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
                    <i data-lucide="list-checks" style="width: 20px; height: 20px;"></i>
                  </div>
                  <h5 style="margin: 0; font-size: 1.1rem;">Langkah Pendaftaran</h5>
                </div>
                
                <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                  <div style="
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                    padding: 0.75rem 1rem;
                    background: var(--surface-soft);
                    border-radius: 12px;
                    border-left: 3px solid var(--primary);
                  ">
                    <span style="
                      width: 28px;
                      height: 28px;
                      background: var(--primary);
                      color: white;
                      border-radius: 50%;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      font-size: 0.75rem;
                      font-weight: 700;
                      flex-shrink: 0;
                    ">1</span>
                    <div>
                      <div style="font-weight: 600; font-size: 0.9rem;">Siapkan Dokumen</div>
                      <div style="font-size: 0.85rem; color: var(--muted);">KTP, KK, dan informasi keluarga</div>
                    </div>
                  </div>
                  
                  <div style="
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                    padding: 0.75rem 1rem;
                    background: var(--surface-soft);
                    border-radius: 12px;
                    border-left: 3px solid var(--primary);
                  ">
                    <span style="
                      width: 28px;
                      height: 28px;
                      background: var(--primary);
                      color: white;
                      border-radius: 50%;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      font-size: 0.75rem;
                      font-weight: 700;
                      flex-shrink: 0;
                    ">2</span>
                    <div>
                      <div style="font-weight: 600; font-size: 0.9rem;">Pilih Kelas</div>
                      <div style="font-size: 0.85rem; color: var(--muted);">Kelas 1, 2, atau 3 sesuai kebutuhan</div>
                    </div>
                  </div>
                  
                  <div style="
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                    padding: 0.75rem 1rem;
                    background: var(--surface-soft);
                    border-radius: 12px;
                    border-left: 3px solid var(--primary);
                  ">
                    <span style="
                      width: 28px;
                      height: 28px;
                      background: var(--primary);
                      color: white;
                      border-radius: 50%;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      font-size: 0.75rem;
                      font-weight: 700;
                      flex-shrink: 0;
                    ">3</span>
                    <div>
                      <div style="font-weight: 600; font-size: 0.9rem;">Pilih Faskes</div>
                      <div style="font-size: 0.85rem; color: var(--muted);">Tentukan faskes utama (Faskes 1)</div>
                    </div>
                  </div>
                  
                  <div style="
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                    padding: 0.75rem 1rem;
                    background: var(--surface-soft);
                    border-radius: 12px;
                    border-left: 3px solid var(--primary);
                  ">
                    <span style="
                      width: 28px;
                      height: 28px;
                      background: var(--primary);
                      color: white;
                      border-radius: 50%;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      font-size: 0.75rem;
                      font-weight: 700;
                      flex-shrink: 0;
                    ">4</span>
                    <div>
                      <div style="font-weight: 600; font-size: 0.9rem;">Daftar Sekarang</div>
                      <div style="font-size: 0.85rem; color: var(--muted);">Via Mobile JKN, PANDAWA, atau kantor BPJS</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-lg-5">
              <div style="
                background: var(--surface);
                border-radius: 24px;
                padding: 2rem;
                border: 1px solid rgba(13,110,253,0.06);
              ">
                <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.25rem;">
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
                    <i data-lucide="calculator" style="width: 20px; height: 20px;"></i>
                  </div>
                  <h5 style="margin: 0; font-size: 1.1rem;">Simulasi Iuran</h5>
                </div>
                
                <div class="mb-3">
                  <label for="class-select" class="form-label" style="font-weight: 600; font-size: 0.9rem;">Pilih Kelas</label>
                  <select id="class-select" class="form-select" style="
                    border-radius: 12px;
                    padding: 0.6rem 1rem;
                    border: 1px solid rgba(13,110,253,0.15);
                  ">
                    <option value="1">Kelas 1</option>
                    <option value="2">Kelas 2</option>
                    <option value="3" selected>Kelas 3</option>
                  </select>
                </div>
                
                <div class="mb-3">
                  <label for="type-select" class="form-label" style="font-weight: 600; font-size: 0.9rem;">Jenis Peserta</label>
                  <select id="type-select" class="form-select" style="
                    border-radius: 12px;
                    padding: 0.6rem 1rem;
                    border: 1px solid rgba(13,110,253,0.15);
                  ">
                    <option value="PPU">PPU</option>
                    <option value="PBPU" selected>PBPU</option>
                    <option value="BP">BP</option>
                    <option value="PBI">PBI</option>
                  </select>
                </div>
                
                <div id="simulation-result" style="
                  padding: 1rem;
                  background: var(--primary-soft);
                  border-radius: 12px;
                  text-align: center;
                  min-height: 60px;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                ">
                  <span style="font-size: 0.85rem; color: var(--muted);">Pilih kelas dan jenis peserta</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- ============================================
         TAB BAYAR
         ============================================ -->
    <div id="tab-bayar" class="tab-content ${activeTab === 'bayar' ? 'active' : ''}" style="background: var(--bg);">
      <section class="section">
        <div class="container">
          
          <!-- 2 Kolom: Saluran + Langkah -->
          <div class="row g-4 mb-4">
            <div class="col-12 col-lg-6">
              <div style="
                background: var(--surface);
                border-radius: 24px;
                padding: 2rem;
                border: 1px solid rgba(13,110,253,0.06);
              ">
                <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.25rem;">
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
                    <i data-lucide="building-2" style="width: 20px; height: 20px;"></i>
                  </div>
                  <h5 style="margin: 0; font-size: 1.1rem;">Saluran Pembayaran Resmi</h5>
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
                  <div style="
                    padding: 1rem;
                    background: var(--surface-soft);
                    border-radius: 12px;
                    text-align: center;
                  ">
                    <i data-lucide="landmark" style="width: 24px; height: 24px; color: var(--primary);"></i>
                    <div style="font-size: 0.85rem; font-weight: 600; margin-top: 0.25rem;">Bank</div>
                    <div style="font-size: 0.75rem; color: var(--muted);">BRI, BNI, Mandiri</div>
                  </div>
                  <div style="
                    padding: 1rem;
                    background: var(--surface-soft);
                    border-radius: 12px;
                    text-align: center;
                  ">
                    <i data-lucide="smartphone" style="width: 24px; height: 24px; color: var(--primary);"></i>
                    <div style="font-size: 0.85rem; font-weight: 600; margin-top: 0.25rem;">E-Wallet</div>
                    <div style="font-size: 0.75rem; color: var(--muted);">OVO, GOPAY, Dana</div>
                  </div>
                  <div style="
                    padding: 1rem;
                    background: var(--surface-soft);
                    border-radius: 12px;
                    text-align: center;
                  ">
                    <i data-lucide="store" style="width: 24px; height: 24px; color: var(--primary);"></i>
                    <div style="font-size: 0.85rem; font-weight: 600; margin-top: 0.25rem;">Retail</div>
                    <div style="font-size: 0.75rem; color: var(--muted);">Indomaret, Alfamart</div>
                  </div>
                  <div style="
                    padding: 1rem;
                    background: var(--surface-soft);
                    border-radius: 12px;
                    text-align: center;
                  ">
                    <i data-lucide="mail" style="width: 24px; height: 24px; color: var(--primary);"></i>
                    <div style="font-size: 0.85rem; font-weight: 600; margin-top: 0.25rem;">Kantor Pos</div>
                    <div style="font-size: 0.75rem; color: var(--muted);">Seluruh Indonesia</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-lg-6">
              <div style="
                background: var(--surface);
                border-radius: 24px;
                padding: 2rem;
                border: 1px solid rgba(13,110,253,0.06);
              ">
                <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.25rem;">
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
                    <i data-lucide="clipboard-list" style="width: 20px; height: 20px;"></i>
                  </div>
                  <h5 style="margin: 0; font-size: 1.1rem;">Langkah Pembayaran</h5>
                </div>
                
                <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                  <div style="
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                    padding: 0.75rem 1rem;
                    background: var(--surface-soft);
                    border-radius: 12px;
                    border-left: 3px solid #198754;
                  ">
                    <span style="
                      width: 28px;
                      height: 28px;
                      background: #198754;
                      color: white;
                      border-radius: 50%;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      font-size: 0.75rem;
                      font-weight: 700;
                      flex-shrink: 0;
                    ">1</span>
                    <div>
                      <div style="font-weight: 600; font-size: 0.9rem;">Siapkan Data</div>
                      <div style="font-size: 0.85rem; color: var(--muted);">No JKN / NIK dan tanggal lahir</div>
                    </div>
                  </div>
                  
                  <div style="
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                    padding: 0.75rem 1rem;
                    background: var(--surface-soft);
                    border-radius: 12px;
                    border-left: 3px solid #198754;
                  ">
                    <span style="
                      width: 28px;
                      height: 28px;
                      background: #198754;
                      color: white;
                      border-radius: 50%;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      font-size: 0.75rem;
                      font-weight: 700;
                      flex-shrink: 0;
                    ">2</span>
                    <div>
                      <div style="font-weight: 600; font-size: 0.9rem;">Pilih Metode</div>
                      <div style="font-size: 0.85rem; color: var(--muted);">Pilih saluran pembayaran yang tersedia</div>
                    </div>
                  </div>
                  
                  <div style="
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                    padding: 0.75rem 1rem;
                    background: var(--surface-soft);
                    border-radius: 12px;
                    border-left: 3px solid #198754;
                  ">
                    <span style="
                      width: 28px;
                      height: 28px;
                      background: #198754;
                      color: white;
                      border-radius: 50%;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      font-size: 0.75rem;
                      font-weight: 700;
                      flex-shrink: 0;
                    ">3</span>
                    <div>
                      <div style="font-weight: 600; font-size: 0.9rem;">Selesaikan Pembayaran</div>
                      <div style="font-size: 0.85rem; color: var(--muted);">Lakukan pembayaran di kanal resmi</div>
                    </div>
                  </div>
                  
                  <div style="
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                    padding: 0.75rem 1rem;
                    background: var(--surface-soft);
                    border-radius: 12px;
                    border-left: 3px solid #198754;
                  ">
                    <span style="
                      width: 28px;
                      height: 28px;
                      background: #198754;
                      color: white;
                      border-radius: 50%;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      font-size: 0.75rem;
                      font-weight: 700;
                      flex-shrink: 0;
                    ">4</span>
                    <div>
                      <div style="font-weight: 600; font-size: 0.9rem;">Simpan Bukti</div>
                      <div style="font-size: 0.85rem; color: var(--muted);">Simpan bukti dan cek status iuran</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 3 Tips -->
          <div style="
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
          ">
            <div style="
              background: var(--surface);
              padding: 1.5rem;
              border-radius: 20px;
              text-align: center;
              border: 1px solid rgba(13,110,253,0.06);
            ">
              <div style="
                width: 48px;
                height: 48px;
                background: #f8d7da;
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 0.75rem;
                color: #721c24;
              ">
                <i data-lucide="shield-check" style="width: 24px; height: 24px;"></i>
              </div>
              <h5 style="margin: 0 0 0.25rem; font-size: 0.95rem;">Tips Keamanan</h5>
              <p style="margin: 0; font-size: 0.85rem; color: var(--muted);">Jangan berbagi OTP atau data sensitif selain di kanal resmi BPJS</p>
            </div>
            
            <div style="
              background: var(--surface);
              padding: 1.5rem;
              border-radius: 20px;
              text-align: center;
              border: 1px solid rgba(13,110,253,0.06);
            ">
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
                <i data-lucide="clock" style="width: 24px; height: 24px;"></i>
              </div>
              <h5 style="margin: 0 0 0.25rem; font-size: 0.95rem;">Rekomendasi</h5>
              <p style="margin: 0; font-size: 0.85rem; color: var(--muted);">Bayar sebelum jatuh tempo untuk menjaga layanan tetap aktif</p>
            </div>
            
            <div style="
              background: var(--surface);
              padding: 1.5rem;
              border-radius: 20px;
              text-align: center;
              border: 1px solid rgba(13,110,253,0.06);
            ">
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
                <i data-lucide="file-check" style="width: 24px; height: 24px;"></i>
              </div>
              <h5 style="margin: 0 0 0.25rem; font-size: 0.95rem;">Dokumentasi</h5>
              <p style="margin: 0; font-size: 0.85rem; color: var(--muted);">Simpan bukti pembayaran untuk referensi jika diperlukan</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;

  // ============================================
  // FUNGSI UNTUK MENGAKTIFKAN TAB
  // ============================================
  function activateTab(tabName) {
    const tabButtons = div.querySelectorAll(".panduan-tab-btn");
    tabButtons.forEach((btn) => {
      const isActive = btn.dataset.tab === tabName;
      btn.classList.toggle("active", isActive);
      btn.style.background = isActive ? 'white' : 'transparent';
      btn.style.color = isActive ? '#1d4580' : 'rgba(255,255,255,0.7)';
    });

    const tabContents = div.querySelectorAll(".tab-content");
    tabContents.forEach((content) => {
      content.classList.toggle("active", content.id === `tab-${tabName}`);
    });

    const currentHash = window.location.hash.split('?')[0];
    const newHash = `${currentHash}?tab=${tabName}`;
    if (window.history && window.history.pushState) {
      window.history.pushState(null, '', newHash);
    }
  }

  // ============================================
  // EVENT LISTENER UNTUK TOMBOL TAB
  // ============================================
  const tabButtons = div.querySelectorAll(".panduan-tab-btn");
  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tabName = btn.dataset.tab;
      activateTab(tabName);
    });
  });

  // ============================================
  // EVENT LISTENER UNTUK HASH CHANGE
  // ============================================
  function handleHashChange() {
    const hash = window.location.hash;
    if (hash.includes('?tab=')) {
      const tab = hash.split('?tab=')[1];
      if (tab === 'bayar' || tab === 'daftar') {
        activateTab(tab);
      }
    }
  }

  window.addEventListener('hashchange', handleHashChange);

  // ============================================
  // SIMULASI IURAN
  // ============================================
  const classSelect = div.querySelector("#class-select");
  const typeSelect = div.querySelector("#type-select");
  const resultDiv = div.querySelector("#simulation-result");

  const updateSimulation = () => {
    const kelas = classSelect.value;
    const tipe = typeSelect.value;
    const rates = {
      PPU: { 1: 180000, 2: 100000, 3: 40000 },
      PBPU: { 1: 250000, 2: 150000, 3: 50000 },
      BP: { 1: 250000, 2: 150000, 3: 50000 },
      PBI: { 1: 0, 2: 0, 3: 0 },
    };
    const amount = rates[tipe][kelas];
    
    if (amount === 0) {
      resultDiv.innerHTML = `
        <div style="color: #155724;">
          <i data-lucide="check-circle" style="width: 24px; height: 24px; display: block; margin: 0 auto 0.25rem;"></i>
          <strong style="font-size: 1rem;">Gratis</strong>
          <br>
          <span style="font-size: 0.8rem;">Iuran ditanggung pemerintah untuk PBI</span>
        </div>
      `;
    } else {
      resultDiv.innerHTML = `
        <strong style="font-size: 1.3rem; color: var(--primary);">Rp ${amount.toLocaleString("id-ID")}</strong>
        <span style="font-size: 0.8rem; color: var(--muted);">/ bulan</span>
        <span style="font-size: 0.8rem; color: var(--muted);">Estimasi untuk ${tipe} Kelas ${kelas}</span>
      `;
    }
    
    // Re-init icons setelah update
    if (window.createIcons) {
      window.createIcons({ icons });
    }
  };

  classSelect.addEventListener("change", updateSimulation);
  typeSelect.addEventListener("change", updateSimulation);
  updateSimulation();

  return div;
}