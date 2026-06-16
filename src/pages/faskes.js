const FASKES_LIST = [
  {
    name: "RSUD Bhayangkara",
    place: "Rumah Sakit",
    services: ["Poli Umum", "IGD", "Dokter Gigi", "Spesialis"],
    status: "Buka",
    quota: "Tersedia",
    address: "Jl. Melati No. 12, Jakarta",
    phone: "(021) 1234-5678",
    distance: "1.2 km",
  },
  {
    name: "Puskesmas Melati",
    place: "Puskesmas",
    services: ["Poli Umum", "KB", "Laboratorium"],
    status: "Buka",
    quota: "Terbatas",
    address: "Jl. Kenanga No. 8, Jakarta",
    phone: "(021) 8765-4321",
    distance: "2.5 km",
  },
  {
    name: "Klinik Sehat Mandiri",
    place: "Klinik",
    services: ["Poli Umum", "Gizi", "Imunisasi"],
    status: "Tutup",
    quota: "Habis",
    address: "Jl. Anggrek No. 4, Jakarta",
    phone: "(021) 9876-5432",
    distance: "3.8 km",
  },
];

function getStatusClass(status) {
  if (status === "Buka") return "status-open";
  if (status === "Terbatas") return "status-limited";
  return "status-busy";
}

function getStatusIcon(status) {
  if (status === "Buka") return "check-circle";
  if (status === "Terbatas") return "alert-circle";
  return "x-circle";
}

export function renderFaskes() {
  const div = document.createElement("div");
  div.innerHTML = `
    <!-- ============================================
         HERO FASKES
         ============================================ -->
    <section style="
      background: linear-gradient(135deg, #1d4580 0%, #316fcb 100%);
      color: white;
      padding: 2.5rem 1rem 3rem;
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
            <i data-lucide="hospital" style="width: 14px; height: 14px;"></i>
            Fasilitas Kesehatan
          </span>
        </div>
        <h1 style="font-size: clamp(1.8rem, 3vw, 2.5rem); margin: 0 0 0.3rem;">
          Cari Faskes Terdekat
        </h1>
        <p style="font-size: 1rem; opacity: 0.85; max-width: 500px; margin: 0;">
          Temukan rumah sakit, puskesmas, dan klinik di sekitar Anda
        </p>
      </div>
    </section>

    <!-- ============================================
         KONTEN UTAMA
         ============================================ -->
    <section class="section" style="background: var(--bg);">
      <div class="container">
        
        <!-- ============================================
             SEARCH & FILTER
             ============================================ -->
        <div style="
          background: var(--surface);
          border-radius: 24px;
          padding: 1.5rem;
          margin-bottom: 2rem;
          border: 1px solid rgba(13,110,253,0.06);
          box-shadow: 0 4px 20px rgba(13,110,253,0.04);
        ">
          <div class="row g-3 align-items-center">
            <div class="col-12 col-md-6">
              <div style="position: relative;">
                <i data-lucide="search" style="
                  position: absolute;
                  left: 14px;
                  top: 50%;
                  transform: translateY(-50%);
                  width: 18px;
                  height: 18px;
                  color: var(--muted);
                "></i>
                <input id="faskes-search" type="search" class="form-control" placeholder="Cari nama, layanan, atau alamat..." style="
                  padding-left: 42px;
                  border-radius: 12px;
                  border: 1px solid rgba(13,110,253,0.12);
                  background: var(--surface-soft);
                ">
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div style="display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
                <span style="font-size: 0.8rem; font-weight: 600; color: var(--muted);">Filter:</span>
                <button type="button" class="filter-pill active" data-filter="all" style="
                  padding: 0.4rem 1rem;
                  border-radius: 50px;
                  border: 1px solid rgba(13,110,253,0.12);
                  background: var(--primary);
                  color: white;
                  font-size: 0.8rem;
                  font-weight: 600;
                  cursor: pointer;
                  transition: all 0.3s ease;
                ">Semua</button>
                <button type="button" class="filter-pill" data-filter="Buka" style="
                  padding: 0.4rem 1rem;
                  border-radius: 50px;
                  border: 1px solid rgba(13,110,253,0.12);
                  background: transparent;
                  color: var(--text);
                  font-size: 0.8rem;
                  font-weight: 600;
                  cursor: pointer;
                  transition: all 0.3s ease;
                ">
                  <i data-lucide="check-circle" style="width: 14px; height: 14px; display: inline-block; color: #198754;"></i>
                  Buka
                </button>
                <button type="button" class="filter-pill" data-filter="Terbatas" style="
                  padding: 0.4rem 1rem;
                  border-radius: 50px;
                  border: 1px solid rgba(13,110,253,0.12);
                  background: transparent;
                  color: var(--text);
                  font-size: 0.8rem;
                  font-weight: 600;
                  cursor: pointer;
                  transition: all 0.3s ease;
                ">
                  <i data-lucide="alert-circle" style="width: 14px; height: 14px; display: inline-block; color: #ffc107;"></i>
                  Terbatas
                </button>
                <button type="button" class="filter-pill" data-filter="Habis" style="
                  padding: 0.4rem 1rem;
                  border-radius: 50px;
                  border: 1px solid rgba(13,110,253,0.12);
                  background: transparent;
                  color: var(--text);
                  font-size: 0.8rem;
                  font-weight: 600;
                  cursor: pointer;
                  transition: all 0.3s ease;
                ">
                  <i data-lucide="x-circle" style="width: 14px; height: 14px; display: inline-block; color: #dc3545;"></i>
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- ============================================
             LIST & MAP
             ============================================ -->
        <div class="row g-4">
          <!-- LIST FASKES -->
          <div class="col-12 col-xl-5">
            <div id="faskes-list" style="display: flex; flex-direction: column; gap: 1rem;"></div>
          </div>
          
          <!-- MAP - Gunakan gambar dari internet -->
          <div class="col-12 col-xl-7">
            <div class="facility-map" style="
              position: relative;
              min-height: 500px;
              border-radius: 24px;
              overflow: hidden;
              background-image: url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=500&fit=crop');
              background-size: cover;
              background-position: center;
              background-repeat: no-repeat;
            ">
              <!-- Overlay -->
              <div style="
                position: absolute;
                inset: 0;
                background: rgba(0,0,0,0.15);
                z-index: 0;
              "></div>

              <!-- User Location -->
              <div style="
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 2;
                display: flex;
                flex-direction: column;
                align-items: center;
              ">
                <div style="
                  width: 48px;
                  height: 48px;
                  background: #0d6efd;
                  border-radius: 50%;
                  border: 3px solid white;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  box-shadow: 0 4px 20px rgba(13,110,253,0.4);
                  animation: pulse-user 2s ease-in-out infinite;
                ">
                  <i data-lucide="user" style="width: 24px; height: 24px; color: white;"></i>
                </div>
                <div style="
                  margin-top: 6px;
                  background: rgba(0,0,0,0.7);
                  backdrop-filter: blur(8px);
                  padding: 4px 14px;
                  border-radius: 20px;
                  font-size: 11px;
                  color: white;
                  font-weight: 600;
                  border: 1px solid rgba(255,255,255,0.15);
                ">
                  Posisi Anda
                </div>
              </div>

              <!-- Marker 1 - RSUD Bhayangkara -->
              <div style="
                position: absolute;
                top: 25%;
                left: 18%;
                z-index: 2;
                display: flex;
                flex-direction: column;
                align-items: center;
                cursor: pointer;
                animation: pulse-marker 2s ease-in-out infinite;
                transform: translate(-50%, -50%);
              " onmouseover="this.style.transform='translate(-50%, -50%) scale(1.15)'" onmouseout="this.style.transform='translate(-50%, -50%) scale(1)'">
                <div style="
                  position: relative;
                ">
                  <div style="
                    width: 36px;
                    height: 36px;
                    background: #dc3545;
                    border-radius: 50% 50% 50% 0;
                    transform: rotate(-45deg);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 2px solid white;
                    box-shadow: 0 4px 16px rgba(220,53,69,0.4);
                  ">
                    <span style="transform: rotate(45deg); font-weight: 700; font-size: 12px; color: white;">1</span>
                  </div>
                  <div style="
                    position: absolute;
                    bottom: -2px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 16px;
                    height: 6px;
                    background: rgba(0,0,0,0.2);
                    border-radius: 50%;
                    filter: blur(3px);
                  "></div>
                </div>
                <div style="
                  margin-top: 4px;
                  background: white;
                  padding: 2px 10px;
                  border-radius: 12px;
                  font-size: 9px;
                  font-weight: 600;
                  color: #1a1a2e;
                  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
                  white-space: nowrap;
                  border: 1px solid rgba(255,255,255,0.8);
                ">
                  RSUD Bhayangkara
                </div>
                <div style="
                  margin-top: 2px;
                  background: rgba(25,135,84,0.9);
                  padding: 1px 8px;
                  border-radius: 10px;
                  font-size: 8px;
                  font-weight: 600;
                  color: white;
                  border: 1px solid rgba(255,255,255,0.3);
                  backdrop-filter: blur(4px);
                ">
                  ● Buka
                </div>
              </div>

              <!-- Marker 2 - Puskesmas Melati -->
              <div style="
                position: absolute;
                top: 50%;
                right: 15%;
                z-index: 2;
                display: flex;
                flex-direction: column;
                align-items: center;
                cursor: pointer;
                animation: pulse-marker 2s ease-in-out infinite 0.5s;
                transform: translate(50%, -50%);
              " onmouseover="this.style.transform='translate(50%, -50%) scale(1.15)'" onmouseout="this.style.transform='translate(50%, -50%) scale(1)'">
                <div style="
                  position: relative;
                ">
                  <div style="
                    width: 36px;
                    height: 36px;
                    background: #ffc107;
                    border-radius: 50% 50% 50% 0;
                    transform: rotate(-45deg);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 2px solid white;
                    box-shadow: 0 4px 16px rgba(255,193,7,0.4);
                  ">
                    <span style="transform: rotate(45deg); font-weight: 700; font-size: 12px; color: #000;">2</span>
                  </div>
                  <div style="
                    position: absolute;
                    bottom: -2px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 16px;
                    height: 6px;
                    background: rgba(0,0,0,0.2);
                    border-radius: 50%;
                    filter: blur(3px);
                  "></div>
                </div>
                <div style="
                  margin-top: 4px;
                  background: white;
                  padding: 2px 10px;
                  border-radius: 12px;
                  font-size: 9px;
                  font-weight: 600;
                  color: #1a1a2e;
                  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
                  white-space: nowrap;
                  border: 1px solid rgba(255,255,255,0.8);
                ">
                  Puskesmas Melati
                </div>
                <div style="
                  margin-top: 2px;
                  background: rgba(255,193,7,0.9);
                  padding: 1px 8px;
                  border-radius: 10px;
                  font-size: 8px;
                  font-weight: 600;
                  color: #000;
                  border: 1px solid rgba(255,255,255,0.3);
                  backdrop-filter: blur(4px);
                ">
                  ⚠️ Terbatas
                </div>
              </div>

              <!-- Marker 3 - Klinik Sehat Mandiri -->
              <div style="
                position: absolute;
                bottom: 20%;
                left: 42%;
                z-index: 2;
                display: flex;
                flex-direction: column;
                align-items: center;
                cursor: pointer;
                animation: pulse-marker 2s ease-in-out infinite 1s;
                transform: translate(-50%, 50%);
              " onmouseover="this.style.transform='translate(-50%, 50%) scale(1.15)'" onmouseout="this.style.transform='translate(-50%, 50%) scale(1)'">
                <div style="
                  position: relative;
                ">
                  <div style="
                    width: 36px;
                    height: 36px;
                    background: #6c757d;
                    border-radius: 50% 50% 50% 0;
                    transform: rotate(-45deg);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 2px solid white;
                    box-shadow: 0 4px 16px rgba(108,117,125,0.4);
                  ">
                    <span style="transform: rotate(45deg); font-weight: 700; font-size: 12px; color: white;">3</span>
                  </div>
                  <div style="
                    position: absolute;
                    bottom: -2px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 16px;
                    height: 6px;
                    background: rgba(0,0,0,0.2);
                    border-radius: 50%;
                    filter: blur(3px);
                  "></div>
                </div>
                <div style="
                  margin-top: 4px;
                  background: white;
                  padding: 2px 10px;
                  border-radius: 12px;
                  font-size: 9px;
                  font-weight: 600;
                  color: #1a1a2e;
                  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
                  white-space: nowrap;
                  border: 1px solid rgba(255,255,255,0.8);
                ">
                  Klinik Sehat
                </div>
                <div style="
                  margin-top: 2px;
                  background: rgba(220,53,69,0.9);
                  padding: 1px 8px;
                  border-radius: 10px;
                  font-size: 8px;
                  font-weight: 600;
                  color: white;
                  border: 1px solid rgba(255,255,255,0.3);
                  backdrop-filter: blur(4px);
                ">
                  ✕ Tutup
                </div>
              </div>

              <!-- Legend -->
              <div style="
                position: absolute;
                bottom: 16px;
                left: 50%;
                transform: translateX(-50%);
                z-index: 3;
                background: rgba(0,0,0,0.6);
                backdrop-filter: blur(12px);
                padding: 10px 18px;
                border-radius: 14px;
                border: 1px solid rgba(255,255,255,0.1);
                display: flex;
                gap: 14px;
                flex-wrap: wrap;
                justify-content: center;
              ">
                <span style="color: rgba(255,255,255,0.8); font-size: 0.65rem; display: flex; align-items: center; gap: 4px;">
                  <span style="display: inline-block; width: 8px; height: 8px; background: #dc3545; border-radius: 50%;"></span>
                  RS Pusat
                </span>
                <span style="color: rgba(255,255,255,0.8); font-size: 0.65rem; display: flex; align-items: center; gap: 4px;">
                  <span style="display: inline-block; width: 8px; height: 8px; background: #ffc107; border-radius: 50%;"></span>
                  Puskesmas
                </span>
                <span style="color: rgba(255,255,255,0.8); font-size: 0.65rem; display: flex; align-items: center; gap: 4px;">
                  <span style="display: inline-block; width: 8px; height: 8px; background: #6c757d; border-radius: 50%;"></span>
                  Klinik
                </span>
                <span style="color: rgba(255,255,255,0.8); font-size: 0.65rem; display: flex; align-items: center; gap: 4px;">
                  <span style="display: inline-block; width: 8px; height: 8px; background: #0d6efd; border-radius: 50%; border: 1px solid white;"></span>
                  Anda
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <style>
      @keyframes pulse-user {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.08); }
      }
      
      @keyframes pulse-marker {
        0%, 100% { transform: translate(-50%, -50%) translateY(0); }
        50% { transform: translate(-50%, -50%) translateY(-4px); }
      }
      
      .filter-pill.active {
        background: var(--primary) !important;
        color: white !important;
        border-color: var(--primary) !important;
      }
      
      .filter-pill:hover:not(.active) {
        background: var(--surface-soft);
        border-color: var(--primary);
      }
    </style>
  `;

  // ============================================
  // LOGIKA FILTER & SEARCH
  // ============================================
  const listRoot = div.querySelector("#faskes-list");
  const searchInput = div.querySelector("#faskes-search");
  const filterButtons = Array.from(div.querySelectorAll(".filter-pill"));

  function renderFaskesItems(items) {
    listRoot.innerHTML = items
      .map(
        (item) => `
          <div style="
            background: var(--surface);
            border-radius: 20px;
            padding: 1.25rem;
            border: 1px solid rgba(13,110,253,0.06);
            transition: all 0.3s ease;
            box-shadow: 0 2px 12px rgba(13,110,253,0.02);
          " onmouseover="this.style.transform='translateX(4px)'; this.style.boxShadow='0 8px 30px rgba(13,110,253,0.08)'" 
             onmouseout="this.style.transform='translateX(0)'; this.style.boxShadow='0 2px 12px rgba(13,110,253,0.02)'">
            
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.75rem;">
              <div style="display: flex; align-items: center; gap: 0.75rem;">
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
                  <i data-lucide="hospital" style="width: 20px; height: 20px;"></i>
                </div>
                <div>
                  <div style="font-weight: 700; font-size: 0.95rem;">${item.name}</div>
                  <div style="font-size: 0.75rem; color: var(--muted);">${item.place} • ${item.distance}</div>
                </div>
              </div>
              <span class="status-pill ${getStatusClass(item.status)}" style="
                padding: 0.2rem 0.7rem;
                border-radius: 50px;
                font-size: 0.7rem;
                font-weight: 700;
                display: inline-flex;
                align-items: center;
                gap: 0.3rem;
              ">
                <i data-lucide="${getStatusIcon(item.status)}" style="width: 12px; height: 12px;"></i>
                ${item.status}
              </span>
            </div>
            
            <div style="margin-bottom: 0.75rem;">
              <div style="font-size: 0.8rem; color: var(--muted); display: flex; align-items: center; gap: 0.5rem;">
                <i data-lucide="map-pin" style="width: 14px; height: 14px;"></i>
                ${item.address}
              </div>
              <div style="font-size: 0.8rem; color: var(--muted); display: flex; align-items: center; gap: 0.5rem; margin-top: 2px;">
                <i data-lucide="phone" style="width: 14px; height: 14px;"></i>
                ${item.phone}
              </div>
            </div>
            
            <div style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 0.5rem;">
              ${item.services.map((service) => `
                <span style="
                  background: var(--primary-soft);
                  color: var(--primary);
                  padding: 0.15rem 0.6rem;
                  border-radius: 50px;
                  font-size: 0.65rem;
                  font-weight: 600;
                ">${service}</span>
              `).join("")}
            </div>
            
            <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 0.5rem; border-top: 1px solid rgba(13,110,253,0.06);">
              <span style="font-size: 0.75rem; color: var(--muted);">
                <i data-lucide="users" style="width: 14px; height: 14px; display: inline-block;"></i>
                Kuota: ${item.quota}
              </span>
              <a href="#" style="
                font-size: 0.75rem;
                color: var(--primary);
                font-weight: 600;
                text-decoration: none;
                display: inline-flex;
                align-items: center;
                gap: 0.3rem;
              " onmouseover="this.style.textDecoration='underline'">
                Detail
                <i data-lucide="arrow-right" style="width: 14px; height: 14px;"></i>
              </a>
            </div>
          </div>
        `
      )
      .join("");
  }

  function updateList() {
    const query = searchInput.value.trim().toLowerCase();
    const activeFilter = filterButtons.find((button) => button.classList.contains("active"))?.dataset.filter || "all";

    const filtered = FASKES_LIST.filter((item) => {
      const matchesQuery = [item.name, item.place, item.address, ...item.services].some((value) => value.toLowerCase().includes(query));
      const matchesFilter = activeFilter === "all" || item.status === activeFilter;
      return matchesQuery && matchesFilter;
    });

    if (filtered.length === 0) {
      listRoot.innerHTML = `
        <div style="
          background: var(--surface);
          border-radius: 20px;
          padding: 3rem 2rem;
          text-align: center;
          border: 1px solid rgba(13,110,253,0.06);
        ">
          <i data-lucide="search" style="width: 48px; height: 48px; color: var(--muted); margin-bottom: 1rem;"></i>
          <h5 style="margin: 0 0 0.5rem;">Tidak ada faskes yang sesuai</h5>
          <p style="font-size: 0.9rem; color: var(--muted); margin: 0;">Coba kata kunci lain atau ubah filter</p>
        </div>
      `;
      return;
    }

    renderFaskesItems(filtered);
  }

  searchInput.addEventListener("input", updateList);
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => {
        btn.classList.toggle("active", btn === button);
        // Update style aktif
        if (btn === button) {
          btn.style.background = "var(--primary)";
          btn.style.color = "white";
          btn.style.borderColor = "var(--primary)";
        } else {
          btn.style.background = "transparent";
          btn.style.color = "var(--text)";
          btn.style.borderColor = "rgba(13,110,253,0.12)";
        }
      });
      updateList();
    });
  });

  updateList();
  return div;
}