export function createForm() {
  const div = document.createElement("div");

  div.innerHTML = `
    <div class="card shadow-sm rounded-4 form-card">
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-start mb-3 flex-column flex-sm-row gap-3">
          <div>
            <span class="section-label">Cek BPJS</span>
            <h3 class="mb-1">Cek status peserta tanpa login</h3>
            <p class="text-muted mb-0">Masukkan No JKN / NIK dan tanggal lahir untuk melihat status kepesertaan dan iuran.</p>
          </div>
          <span class="badge bg-primary bg-opacity-10 text-primary py-2 px-3">Tanpa login</span>
        </div>

        <form id="checkForm" class="row g-2 align-items-end">
          <div class="col-12 col-sm-5">
            <label for="jkn" class="form-label visually-hidden">No JKN / NIK</label>
            <input type="text" id="jkn" class="form-control" placeholder="No JKN / NIK" required />
          </div>
          <div class="col-12 col-sm-4">
            <label for="dob" class="form-label visually-hidden">Tanggal lahir</label>
            <input type="date" id="dob" class="form-control" required />
          </div>
          <div class="col-12 col-sm-3">
            <button class="btn btn-primary w-100">Cek Sekarang</button>
          </div>
        </form>

        <div id="result-panel" class="result-panel mt-4 d-none"></div>
      </div>
    </div>
  `;

  const form = div.querySelector("form");
  const resultPanel = div.querySelector("#result-panel");

  function formatCurrency(amount) {
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(amount);
  }

  function createMonthlyRows(isLunas) {
    const months = [
      { label: "Apr 2026", amount: 80000, status: isLunas ? "Lunas" : "Belum bayar" },
      { label: "Mei 2026", amount: 80000, status: isLunas ? "Lunas" : "Belum bayar" },
      { label: "Jun 2026", amount: 80000, status: isLunas ? "Lunas" : "Belum bayar" },
    ];

    return months
      .map(
        (month) => `
          <tr>
            <td>${month.label}</td>
            <td>${formatCurrency(month.amount)}</td>
            <td><span class="badge ${month.status === 'Lunas' ? 'bg-success' : 'bg-warning text-dark'}">${month.status}</span></td>
          </tr>
        `
      )
      .join("");
  }

  function renderResult(status, paymentStatus) {
    const isActive = status === "active";
    const isLunas = paymentStatus === "lunas";
    
    // Tentukan status berdasarkan kombinasi
    let statusText = "Tidak Aktif";
    let statusClass = "pill-danger";
    let totalIuran = "-";
    let description = "Data peserta tidak aktif. Pastikan No JKN / NIK dan tanggal lahir benar, atau daftar ulang.";
    let ringkasan = "Peserta belum aktif. Gunakan panduan Cara Daftar untuk mendaftarkan ulang peserta.";
    
    if (isActive && isLunas) {
      statusText = "Aktif - Lunas ✓";
      statusClass = "pill-success";
      totalIuran = formatCurrency(0);
      description = "Peserta terdaftar dan semua iuran telah lunas. Status kepesertaan Anda aktif.";
      ringkasan = "Semua iuran telah lunas. Terima kasih telah membayar tepat waktu.";
    } else if (isActive && !isLunas) {
      statusText = "Aktif - Belum Lunas";
      statusClass = "pill-warning";
      totalIuran = formatCurrency(160000);
      description = "Peserta terdaftar namun masih ada iuran yang belum dibayar. Segera bayar untuk menjaga layanan tetap aktif.";
      ringkasan = "Status peserta aktif, silakan lihat detail tagihan dan pilih cara bayar yang sesuai.";
    } else {
      statusText = "Tidak Aktif";
      statusClass = "pill-danger";
      description = "Data peserta tidak aktif. Pastikan No JKN / NIK dan tanggal lahir benar, atau daftar ulang.";
      ringkasan = "Peserta belum aktif. Gunakan panduan Cara Daftar untuk mendaftarkan ulang peserta.";
    }

    resultPanel.innerHTML = `
      <div class="card result-card shadow-sm rounded-4">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-start flex-column flex-md-row gap-3 mb-3">
            <div>
              <span class="section-label">Hasil cek</span>
              <h5 class="mb-1">Status kepesertaan</h5>
              <p class="text-muted mb-0">${description}</p>
            </div>
            <span class="pill ${statusClass}">${statusText}</span>
          </div>

          <div class="row g-3 align-items-center">
            <div class="col-12 col-sm-6 col-lg-4">
              <div class="info-box p-3 rounded-4">
                <p class="text-muted mb-1">Total iuran</p>
                <strong>${totalIuran}</strong>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-8">
              <div class="info-box p-3 rounded-4">
                <p class="text-muted mb-1">Ringkasan</p>
                <p class="mb-0">${ringkasan}</p>
              </div>
            </div>
          </div>

          ${isActive ? `
            <div class="mt-4">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <h6 class="mb-0">Detail per bulan</h6>
              </div>
              <div class="table-responsive">
                <table class="table table-sm table-borderless mb-0">
                  <thead>
                    <tr>
                      <th>Bulan</th>
                      <th>Jumlah</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${createMonthlyRows(isLunas)}
                  </tbody>
                </table>
              </div>
            </div>
          ` : ""}

          <div class="d-grid gap-2 gap-md-3 d-md-flex justify-content-md-start mt-4">
            ${isActive && !isLunas ? `<a href="#panduan?tab=bayar" class="btn btn-primary">Cara Bayar</a>` : ''}
            ${!isActive ? `<a href="#panduan?tab=daftar" class="btn btn-outline-secondary">Cara Daftar</a>` : ''}
            ${isActive && isLunas ? `<a href="#cek-bpjs" class="btn btn-success">Status Lunas ✓</a>` : ''}
            <a href="#faskes" class="btn btn-outline-primary">Cari Faskes</a>
          </div>
        </div>
      </div>
    `;

    resultPanel.classList.remove("d-none");
  }

  /**
   * ============================================================
   * DATA TESTING UNTUK STATUS BPJS
   * ============================================================
   * 
   * Berdasarkan digit terakhir dari nomor JKN/NIK:
   * 
   * | Nomor JKN     | Status        | Payment Status     |
   * |---------------|---------------|--------------------|
   * | 1234567890    | Aktif         | Lunas (digit 0)    |
   * | 1234567892    | Aktif         | Lunas (digit 2)    |
   * | 1234567894    | Aktif         | Lunas (digit 4)    |
   * | 1234567896    | Aktif         | Belum Bayar (digit 6) |
   * | 1234567898    | Aktif         | Belum Bayar (digit 8) |
   * | 1234567891    | Tidak Aktif   | -                  |
   * | 1234567893    | Tidak Aktif   | -                  |
   * 
   * ============================================================
   * LOGIKA:
   * - Digit genap (0,2,4,6,8) → Status Aktif
   *   - Digit 0,2,4 → Lunas
   *   - Digit 6,8 → Belum Bayar
   * - Digit ganjil (1,3,5,7,9) → Tidak Aktif
   * ============================================================
   */
  function getStatus(inputJkn) {
    const cleaned = inputJkn.trim();
    
    // Validasi: minimal 9 digit, maksimal 20 digit
    if (!/^[0-9]{9,20}$/.test(cleaned)) {
      return { status: "inactive", paymentStatus: "belum_bayar" };
    }
    
    // Ambil digit terakhir untuk menentukan status
    const lastDigit = Number(cleaned.slice(-1));
    
    // Cek apakah digit terakhir genap (aktif) atau ganjil (tidak aktif)
    const isActive = lastDigit % 2 === 0;
    
    // Logika untuk menentukan status pembayaran
    let paymentStatus = "belum_bayar";
    if (isActive) {
      // Digit 0,2,4 = Lunas
      // Digit 6,8 = Belum bayar
      if ([0, 2, 4].includes(lastDigit)) {
        paymentStatus = "lunas";
      } else {
        paymentStatus = "belum_bayar";
      }
    }
    
    return { 
      status: isActive ? "active" : "inactive",
      paymentStatus: paymentStatus
    };
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const jkn = div.querySelector("#jkn").value;
    const dob = div.querySelector("#dob").value;
    
    localStorage.setItem("jkn", jkn);
    localStorage.setItem("dob", dob);
    
    const result = getStatus(jkn);
    renderResult(result.status, result.paymentStatus);
  });

  return div;
}