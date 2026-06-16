import { renderHome } from "./pages/home";
import { renderCekBpjs } from "./pages/cekBpjs";
import { renderFaskes } from "./pages/faskes";
import { renderPanduan } from "./pages/panduan";
import { renderBantuan } from "./pages/bantuan";
import { renderPusatRegulasi } from "./pages/pusat-regulasi";
import { renderSkriningKesehatan } from "./pages/skrining-kesehatan";
import { renderBeritaDetail } from "./pages/berita-detail";
import { createIcons, icons } from "lucide";
import logo from "./assets/logo.png";

// ============================================
// ROUTES
// ============================================
const routes = {
  "": renderHome,
  "#": renderHome,
  "#cek-bpjs": renderCekBpjs,
  "#faskes": renderFaskes,
  "#panduan": renderPanduan,
  "#bantuan": renderBantuan,
  "#pusat-regulasi": renderPusatRegulasi,
  "#skrining-kesehatan": renderSkriningKesehatan,
  "#berita": renderBeritaDetail,
  "#mengapa-jkn": renderHome,
  "#statistik-nasional": renderHome,
  "#berita-info": renderHome,
  "#faq": renderHome,
  "#cara-daftar": renderPanduan,
  "#cara-bayar": renderPanduan,
};

// ============================================
// NAVIGATION ITEMS
// ============================================
const navItems = [
  { href: "#", label: "Beranda" },
  { href: "#cek-bpjs", label: "Cek BPJS" },
  { href: "#faskes", label: "Faskes" },
  { href: "#panduan", label: "Panduan" },
  { href: "#pusat-regulasi", label: "Pusat Regulasi" },
  { href: "#skrining-kesehatan", label: "Skrining" },
  { href: "#bantuan", label: "Bantuan" },
];

// ============================================
// SEARCH INDEX
// ============================================
const searchIndex = [
  { page: "#", title: "Beranda", keywords: ["jkn", "kesehatan", "kepesertaan", "cek status", "layanan", "dashboard", "statistik"] },
  { page: "#cek-bpjs", title: "Cek BPJS", keywords: ["cek", "bpjs", "status", "kepesertaan", "iuran", "verifikasi", "no jkn", "nik"] },
  { page: "#faskes", title: "Cari Faskes", keywords: ["faskes", "fasilitas kesehatan", "rumah sakit", "klinik", "puskesmas", "dokter", "layanan kesehatan"] },
  { page: "#panduan", title: "Panduan", keywords: ["panduan", "bayar", "iuran", "pembayaran", "daftar", "pendaftaran", "peserta", "kelas", "metode"] },
  { page: "#bantuan", title: "Bantuan", keywords: ["bantuan", "faq", "pertanyaan", "dukungan", "kontak", "customer service"] },
  { page: "#pusat-regulasi", title: "Pusat Regulasi", keywords: ["regulasi", "peraturan", "undang-undang", "pp", "kebijakan", "standar operasional"] },
  { page: "#skrining-kesehatan", title: "Skrining Kesehatan Mental", keywords: ["skrining", "kesehatan mental", "depresi", "kecemasan", "stres", "psikologi", "psikolog"] },
];

// ============================================
// SEARCH FUNCTION
// ============================================
function performSearch(query) {
  if (!query || query.length < 2) return [];
  const q = query.toLowerCase();
  return searchIndex
    .filter(item => item.keywords.some(kw => kw.includes(q)))
    .map(item => ({ ...item, relevance: item.keywords.filter(kw => kw.includes(q)).length }))
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, 8);
}

// ============================================
// RENDER HEADER - Dengan Search Icon Kecil
// ============================================
function renderHeader() {
  return `
    <header class="site-header shadow-sm">
      <div class="container d-flex align-items-center justify-content-between py-3 gap-2">
        <div class="d-flex align-items-center gap-3">
          <a href="#" data-route="" class="logo-link" aria-label="Beranda">
            <img src="${logo}" height="38" alt="BPJS Kesehatan Logo" />
          </a>
        </div>

        <nav class="desktop-nav d-none d-xl-flex align-items-center gap-3">
          ${navItems
            .filter(item => item.label !== "Beranda")
            .map(
              (item) =>
                `<a href="${item.href}" class="nav-link" data-route="${item.href === "#" ? "" : item.href}">${item.label}</a>`
            )
            .join("")}
        </nav>

        <!-- Search Icon & Tombol Darurat - Di Sebelah Kanan -->
        <div class="d-none d-xl-flex align-items-center gap-2">
          <!-- Search Icon -->
          <div class="search-wrapper" style="position: relative;">
            <button id="search-toggle-desktop" class="btn btn-outline-primary btn-sm" style="
              border-radius: 50%;
              width: 34px;
              height: 34px;
              padding: 0;
              display: flex;
              align-items: center;
              justify-content: center;
              border: 1px solid rgba(13,110,253,0.15);
              background: transparent;
              color: var(--text);
              transition: all 0.3s ease;
              cursor: pointer;
              font-size: 0;
            " onmouseover="this.style.background='var(--primary)'; this.style.color='white'; this.style.borderColor='var(--primary)'" 
               onmouseout="this.style.background='transparent'; this.style.color='var(--text)'; this.style.borderColor='rgba(13,110,253,0.15)'">
              <i data-lucide="search" style="width: 16px; height: 16px;"></i>
            </button>
            
            <!-- Search Input -->
            <div id="search-desktop-container" style="
              display: none;
              position: absolute;
              top: 100%;
              right: 0;
              margin-top: 0.5rem;
              background: white;
              border-radius: 10px;
              box-shadow: 0 8px 32px rgba(0,0,0,0.12);
              padding: 0.5rem;
              min-width: 280px;
              max-width: 320px;
              z-index: 1000;
              animation: slideDown 0.25s ease;
            ">
              <input type="text" id="search-input" class="search-input" placeholder="Cari..." style="
                width: 100%;
                border: 1px solid rgba(13,110,253,0.15);
                border-radius: 8px;
                padding: 0.5rem 1rem;
                outline: none;
                font-size: 0.85rem;
                background: var(--surface-soft);
                transition: all 0.3s ease;
              " onfocus="this.style.borderColor='var(--primary)'; this.style.boxShadow='0 0 0 3px rgba(13,110,253,0.06)'" 
                 onblur="this.style.borderColor='rgba(13,110,253,0.15)'; this.style.boxShadow='none'">
              <div id="search-results" class="search-results" style="
                position: static;
                margin-top: 0.25rem;
                box-shadow: none;
                border: none;
                max-height: 280px;
                border-radius: 8px;
              "></div>
            </div>
          </div>

          <!-- Tombol Darurat -->
          <a href="https://wa.me/628118165165?text=Halo%20BPJS%20Kesehatan" target="_blank" rel="noopener" class="btn btn-outline-primary btn-sm d-none d-xl-inline-flex align-items-center" style="font-size: 0.8rem; padding: 0.3rem 0.8rem; gap: 4px;">
            <i data-lucide="phone" style="width: 14px; height: 14px;"></i>
            Darurat
          </a>
        </div>
      </div>
    </header>

    <style>
      @keyframes slideDown {
        from {
          opacity: 0;
          transform: translateY(-8px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    </style>
  `;
}

// ============================================
// INIT SEARCH - Desktop dengan Toggle
// ============================================
function initSearch() {
  const searchToggle = document.getElementById("search-toggle-desktop");
  const searchContainer = document.getElementById("search-desktop-container");
  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");
  
  if (!searchToggle || !searchContainer || !searchInput) return;

  let isSearchOpen = false;

  // Toggle search
  searchToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    isSearchOpen = !isSearchOpen;
    searchContainer.style.display = isSearchOpen ? "block" : "none";
    if (isSearchOpen) {
      setTimeout(() => searchInput.focus(), 100);
      searchToggle.style.background = "var(--primary)";
      searchToggle.style.color = "white";
      searchToggle.style.borderColor = "var(--primary)";
    } else {
      searchToggle.style.background = "transparent";
      searchToggle.style.color = "var(--text)";
      searchToggle.style.borderColor = "rgba(13,110,253,0.15)";
      searchResults.innerHTML = "";
    }
  });

  // Search input
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value;
    if (query.length < 2) {
      searchResults.innerHTML = "";
      return;
    }

    const results = performSearch(query);
    if (results.length === 0) {
      searchResults.innerHTML = '<div class="search-no-result" style="padding: 0.5rem; font-size: 0.8rem;">Tidak ada hasil</div>';
      return;
    }

    searchResults.innerHTML = results
      .map(
        (r) =>
          `<a href="${r.page}" class="search-result-item" data-route="${r.page === "#" ? "" : r.page}" style="padding: 0.5rem 0.75rem; font-size: 0.85rem;">
            <div class="search-result-title" style="font-size: 0.85rem;">${r.title}</div>
            <div class="search-result-keywords" style="font-size: 0.7rem;">${r.keywords.filter(kw => kw.includes(query.toLowerCase())).join(", ")}</div>
          </a>`
      )
      .join("");
  });

  // Tutup saat klik di luar
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-wrapper") && !e.target.closest("#search-desktop-container")) {
      if (isSearchOpen) {
        isSearchOpen = false;
        searchContainer.style.display = "none";
        searchResults.innerHTML = "";
        searchToggle.style.background = "transparent";
        searchToggle.style.color = "var(--text)";
        searchToggle.style.borderColor = "rgba(13,110,253,0.15)";
      }
    }
  });

  // Tutup dengan ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isSearchOpen) {
      searchToggle.click();
    }
  });
}

// ============================================
// INIT CAROUSEL
// ============================================
function initCarousel() {
  const carousel = document.getElementById("service-carousel");
  const prevBtn = document.getElementById("carousel-prev");
  const nextBtn = document.getElementById("carousel-next");

  if (!carousel || !prevBtn || !nextBtn) return;

  const cardWidth = 280 + 24;
  prevBtn.addEventListener("click", () => {
    carousel.scrollBy({
      left: -cardWidth,
      behavior: "smooth",
    });
  });

  nextBtn.addEventListener("click", () => {
    carousel.scrollBy({
      left: cardWidth,
      behavior: "smooth",
    });
  });
}

// ============================================
// INIT FAQ
// ============================================
function initFAQ() {
  const faqItems = document.querySelectorAll(".faq-item");
  if (faqItems.length === 0) return;

  faqItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const isActive = item.classList.contains("active");
      
      faqItems.forEach((otherItem) => {
        otherItem.classList.remove("active");
      });

      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
}

// ============================================
// INIT MOBILE SIDEBAR - Dengan Search & Auto Close
// ============================================
function initMobileSidebar() {
  const moreBtn = document.getElementById("mobile-more");
  const menuToggle = document.getElementById("mobile-menu-toggle");
  const sidebar = document.getElementById("mobile-sidebar");
  const overlay = document.getElementById("mobile-sidebar-overlay");
  const closeBtn = document.getElementById("mobile-sidebar-close");
  
  if (!sidebar) return;

  const openSidebar = () => {
    if (window.innerWidth < 1200) {
      sidebar.classList.add("open");
      sidebar.setAttribute("aria-hidden", "false");
      setTimeout(() => {
        const sidebarSearch = document.getElementById("sidebar-search");
        if (sidebarSearch) sidebarSearch.focus();
      }, 300);
    }
  };
  
  const closeSidebar = () => {
    sidebar.classList.remove("open");
    sidebar.setAttribute("aria-hidden", "true");
    // Reset search results saat close
    const sidebarResults = document.getElementById("sidebar-search-results");
    const sidebarSearch = document.getElementById("sidebar-search");
    if (sidebarResults) {
      sidebarResults.innerHTML = "";
      sidebarResults.style.display = "none";
    }
    if (sidebarSearch) {
      sidebarSearch.value = "";
    }
  };

  if (moreBtn) {
    moreBtn.addEventListener("click", (e) => {
      e.preventDefault();
      openSidebar();
    });
  }

  if (menuToggle) {
    menuToggle.addEventListener("click", (e) => {
      e.preventDefault();
      openSidebar();
    });
  }

  if (overlay) overlay.addEventListener("click", closeSidebar);
  if (closeBtn) closeBtn.addEventListener("click", closeSidebar);

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1200) {
      closeSidebar();
    }
  });

  // ============================================
  // SEARCH DI SIDEBAR - Auto Close Saat Diklik
  // ============================================
  const sidebarSearch = document.getElementById("sidebar-search");
  const sidebarResults = document.getElementById("sidebar-search-results");
  
  if (sidebarSearch && sidebarResults) {
    // Event untuk input search
    sidebarSearch.addEventListener("input", (e) => {
      const query = e.target.value;
      if (query.length < 2) {
        sidebarResults.innerHTML = "";
        sidebarResults.style.display = "none";
        return;
      }

      const results = performSearch(query);
      if (results.length === 0) {
        sidebarResults.innerHTML = '<div class="search-no-result" style="padding: 0.5rem; font-size: 0.8rem;">Tidak ada hasil</div>';
        sidebarResults.style.display = "block";
        return;
      }

      sidebarResults.innerHTML = results
        .map(
          (r) =>
            `<a href="${r.page}" class="search-result-item sidebar-search-result" data-route="${r.page === "#" ? "" : r.page}" style="
              padding: 0.5rem 0.75rem; 
              font-size: 0.85rem;
              display: block;
              text-decoration: none;
              color: inherit;
              border-bottom: 1px solid rgba(13,110,253,0.06);
              transition: background 0.15s ease;
              cursor: pointer;
            " onmouseover="this.style.background='rgba(13,110,253,0.04)'" 
               onmouseout="this.style.background='transparent'">
              <div class="search-result-title" style="font-size: 0.85rem;">${r.title}</div>
              <div class="search-result-keywords" style="font-size: 0.7rem;">${r.keywords.filter(kw => kw.includes(query.toLowerCase())).join(", ")}</div>
            </a>`
        )
        .join("");
      sidebarResults.style.display = "block";

      // ============================================
      // EVENT LISTENER UNTUK SETIAP HASIL SEARCH DI SIDEBAR
      // ============================================
      sidebarResults.querySelectorAll('.sidebar-search-result').forEach(link => {
        link.addEventListener('click', (ev) => {
          ev.preventDefault();
          const route = link.getAttribute('data-route') || '';
          // Tutup sidebar dulu
          closeSidebar();
          // Lalu pindah halaman
          setTimeout(() => {
            window.location.hash = route;
          }, 150);
        });
      });
    });

    // Tutup hasil search saat klik di luar
    document.addEventListener('click', (e) => {
      if (!e.target.closest('#sidebar-search') && !e.target.closest('#sidebar-search-results')) {
        sidebarResults.style.display = 'none';
      }
    });
  }

  sidebar.querySelectorAll('.mobile-sidebar-link').forEach(link => {
    link.addEventListener('click', (ev) => {
      ev.preventDefault();
      const route = link.getAttribute('data-route') || '';
      closeSidebar();
      setTimeout(() => {
        window.location.hash = route;
      }, 150);
    });
  });
}

// ============================================
// INIT COMPACT SIDEBAR
// ============================================
function initCompactSidebar() {
  if (window.innerWidth < 1200) return;
  const compact = document.getElementById('compact-sidebar');
  if (!compact) return;

  compact.querySelectorAll('.cs-icon').forEach(icon => {
    icon.addEventListener('click', () => {
      compact.querySelectorAll('.cs-icon').forEach(i => i.classList.remove('active'));
      compact.querySelectorAll('.cs-panel').forEach(p => p.style.display = 'none');
      icon.classList.add('active');
      const panel = icon.nextElementSibling;
      if (panel) panel.style.display = 'block';
    });
  });

  document.addEventListener('click', (e) => {
    if (!compact.contains(e.target)) {
      compact.querySelectorAll('.cs-icon').forEach(i => i.classList.remove('active'));
      compact.querySelectorAll('.cs-panel').forEach(p => p.style.display = 'none');
    }
  });
}

// ============================================
// RENDER BOTTOM NAV
// ============================================
function renderBottomNav() {
  return `
    <nav class="bottom-nav d-xl-none">
      <a href="#" class="nav-item" data-route=""><i data-lucide="home"></i><span>Beranda</span></a>
      <a href="#cek-bpjs" class="nav-item" data-route="#cek-bpjs"><i data-lucide="search"></i><span>Cek</span></a>
      <a href="#faskes" class="nav-item" data-route="#faskes"><i data-lucide="hospital"></i><span>Faskes</span></a>
      <a href="#pusat-regulasi" class="nav-item" data-route="#pusat-regulasi"><i data-lucide="file-text"></i><span>Regulasi</span></a>
      <button id="mobile-more" class="nav-item nav-more" aria-label="Lainnya"><i data-lucide="menu"></i><span>Lainnya</span></button>
    </nav>
  `;
}

// ============================================
// SET ACTIVE LINKS
// ============================================
function setActiveLinks(hash) {
  const normalizedRoute = hash === "" || hash === "#" ? "" : hash;
  
  document.querySelectorAll(".desktop-nav .nav-link").forEach((link) => {
    const route = link.getAttribute("data-route");
    link.classList.toggle("active", route === normalizedRoute);
  });
  
  document.querySelectorAll(".bottom-nav .nav-item:not(.nav-more)").forEach((link) => {
    const route = link.getAttribute("data-route");
    link.classList.toggle("active", route === normalizedRoute);
  });
}

// ============================================
// RENDER ROUTE
// ============================================
function renderRoute() {
  const fullHash = window.location.hash || "";
  const route = fullHash.split('?')[0] || "";
  let pageRenderer;
  
  if (route === "#cara-daftar") {
    window.location.hash = "#panduan?tab=daftar";
    return;
  }
  
  if (route === "#cara-bayar") {
    window.location.hash = "#panduan?tab=bayar";
    return;
  }
  
  if (route.startsWith("#berita/")) {
    pageRenderer = routes["#berita"];
  } else {
    pageRenderer = routes[route] || renderHome;
  }
  
  const pageRoot = document.getElementById("page-root");
  pageRoot.innerHTML = "";
  pageRoot.appendChild(pageRenderer());
  createIcons({ icons });
  setActiveLinks(route);
  initSearch();
  initCarousel();
  initFAQ();
  initMobileSidebar();
  initCompactSidebar();
  window.scrollTo(0, 0);
}

// ============================================
// RENDER APP
// ============================================
export function renderApp(root) {
  root.innerHTML = `
    <div class="app-shell">
      ${renderHeader()}
      <main id="page-root" class="page-root"></main>
      <footer class="site-footer">
        <div class="container footer-grid">
          <div class="footer-brand">
            <img src="${logo}" height="34" alt="BPJS Kesehatan" class="footer-logo" />
            <p class="footer-copy">Platform layanan mandiri resmi BPJS Kesehatan untuk cek peserta, pembayaran, dan bantuan informasi.</p>

            <div class="footer-social-icons">
              <a href="https://instagram.com/bpjskesehatan_ri" class="social-icon-link">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="https://twitter.com/BPJSKesehatanRI" class="social-icon-link">
                <i class="fa-brands fa-x-twitter"></i>
              </a>
              <a href="https://facebook.com/BPJSKesehatanRI" class="social-icon-link">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://www.youtube.com/@BPJSKesehatan_RI" class="social-icon-link">
                <i class="fa-brands fa-youtube"></i>
              </a>
              <a href="https://www.tiktok.com/@bpjskesehatan_ri?lang=id-ID" class="social-icon-link">
                <i class="fa-brands fa-tiktok"></i>
              </a>
            </div>
          </div>

          <div class="footer-links">
            <p class="footer-heading">Struktur Halaman</p>
            <ul>
              <li><a href="#">Beranda</a></li>
              <li><a href="#cek-bpjs">Cek BPJS</a></li>
              <li><a href="#faskes">Faskes</a></li>
              <li><a href="#panduan">Panduan</a></li>
              <li><a href="#pusat-regulasi">Pusat Regulasi</a></li>
              <li><a href="#skrining-kesehatan">Skrining Kesehatan</a></li>
              <li><a href="#bantuan">Bantuan</a></li>
            </ul>
          </div>

          <div class="footer-external">
            <p class="footer-heading">Portal BPJS Lainnya</p>
            <div class="external-links-grid">
              <a href="https://e-ppid.bpjs-kesehatan.go.id/eppid/" target="_blank" class="external-link-btn">e-PPID</a>
              <a href="https://elhkpn.kpk.go.id/" target="_blank" class="external-link-btn">e-LHKPN</a>
              <a href="https://edabu.bpjs-kesehatan.go.id/" target="_blank" class="external-link-btn">e-Dabu</a>
              <a href="https://faskes.bpjs-kesehatan.go.id/" target="_blank" class="external-link-btn">Peta Faskes</a>
              <a href="https://hfis.bpjs-kesehatan.go.id/" target="_blank" class="external-link-btn">HFIS</a>
              <a href="https://webskrining.bpjs-kesehatan.go.id/" target="_blank" class="external-link-btn">Skrining Web</a>
            </div>
          </div>

          <div class="footer-contact">
            <p class="footer-heading">Kontak & Alamat</p>
            <p><i data-lucide="map-pin" class="footer-inline-icon"></i> Jl. Letjen Suprapto No. 1, Jakarta Pusat</p>
            <p><i data-lucide="message-circle" class="footer-inline-icon"></i> WhatsApp Darurat: <a href="https://wa.me/628118165165?text=Halo%20BPJS%20Kesehatan" target="_blank">0811 8165 165</a></p>
            <p><i data-lucide="mail" class="footer-inline-icon"></i> <a href="mailto:info@bpjskesehatan.go.id">info@bpjskesehatan.go.id</a></p>
          </div>

          <div class="footer-cta">
            <p class="footer-heading">Unduh Aplikasi JKN Mobile</p>
            <div class="footer-actions">
              <a href="https://play.google.com/store/apps/details?id=app.bpjs.mobile&hl=id" target="_blank">
                <img src="https://bpjs-kesehatan.go.id/assets/img/button-google.png" alt="JKN Mobile Playstore" style="height:44px;" />
              </a>
              <a href="https://apps.apple.com/id/app/mobile-jkn/id1237601115" target="_blank">
                <img src="https://bpjs-kesehatan.go.id/assets/img/button-app.png" alt="JKN Mobile Appstore" style="height:44px;" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <!-- MOBILE SIDEBAR -->
      <div id="mobile-sidebar" class="mobile-sidebar" aria-hidden="true">
        <div class="mobile-sidebar-overlay" id="mobile-sidebar-overlay"></div>
        <div class="mobile-sidebar-panel" id="mobile-sidebar-panel">
          <button id="mobile-sidebar-close" class="mobile-sidebar-close" aria-label="Tutup"><i data-lucide="x"></i></button>
          
          <!-- Search di Sidebar -->
          <div style="margin-top: 2rem; padding: 0 0.5rem;">
            <div style="position: relative;">
              <i data-lucide="search" style="
                position: absolute;
                left: 12px;
                top: 50%;
                transform: translateY(-50%);
                width: 16px;
                height: 16px;
                color: var(--muted);
              "></i>
              <input id="sidebar-search" type="text" placeholder="Cari..." style="
                width: 100%;
                padding: 0.5rem 1rem 0.5rem 2.2rem;
                border: 1px solid rgba(13,110,253,0.12);
                border-radius: 10px;
                font-size: 0.85rem;
                outline: none;
                background: var(--surface-soft);
                transition: all 0.3s ease;
              " onfocus="this.style.borderColor='var(--primary)'; this.style.boxShadow='0 0 0 3px rgba(13,110,253,0.06)'" 
                 onblur="this.style.borderColor='rgba(13,110,253,0.12)'; this.style.boxShadow='none'">
            </div>
            <div id="sidebar-search-results" style="
              margin-top: 0.5rem;
              display: none;
              background: var(--surface);
              border-radius: 8px;
              border: 1px solid rgba(13,110,253,0.06);
              max-height: 200px;
              overflow-y: auto;
            "></div>
          </div>

          <nav class="mobile-sidebar-nav">
            <a href="#" data-route="" class="mobile-sidebar-link">Beranda</a>
            <a href="#cek-bpjs" data-route="#cek-bpjs" class="mobile-sidebar-link">Cek BPJS</a>
            <a href="#faskes" data-route="#faskes" class="mobile-sidebar-link">Faskes</a>
            <a href="#panduan" data-route="#panduan" class="mobile-sidebar-link">Panduan</a>
            <a href="#pusat-regulasi" data-route="#pusat-regulasi" class="mobile-sidebar-link">Pusat Regulasi</a>
            <a href="#skrining-kesehatan" data-route="#skrining-kesehatan" class="mobile-sidebar-link">Skrining</a>
            <a href="#bantuan" data-route="#bantuan" class="mobile-sidebar-link">Bantuan & Dukungan</a>
          </nav>
        </div>
      </div>

      ${renderBottomNav()}
    </div>
  `;

  window.addEventListener("hashchange", renderRoute);
  renderRoute();
}