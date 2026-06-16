export function renderCaraBayar() {
  const div = document.createElement("div");
  div.innerHTML = `
    <section class="section bg-surface">
      <div class="container">
        <div class="section-header mb-4">
          <div>
            <span class="section-label">Cara Bayar</span>
            <h2>Panduan pembayaran iuran BPJS</h2>
          </div>
        </div>

        <div class="row g-4">
          <div class="col-12 col-lg-6">
            <div class="payment-card p-4 rounded-4 shadow-sm">
              <h5>Saluran pembayaran resmi</h5>
              <ul class="payment-list list-unstyled mb-0">
                <li>Bank BRI, BNI, Mandiri</li>
                <li>E-wallet: OVO, GOPAY, Dana</li>
                <li>Retail: Indomaret, Alfamart</li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="payment-steps p-4 rounded-4 shadow-sm">
              <h5>Langkah pembayaran</h5>
              <ol class="steps mb-0">
                <li>Siapkan No JKN / NIK dan tanggal lahir.</li>
                <li>Pilih metode pembayaran yang tersedia.</li>
                <li>Selesaikan pembayaran pada kanal resmi.</li>
                <li>Simpan bukti dan cek status iuran.</li>
              </ol>
            </div>
          </div>
        </div>

        <div class="row g-4 mt-2">
          <div class="col-12 col-lg-4">
            <div class="info-card p-4 rounded-4 shadow-sm">
              <h5>Tips keamanan</h5>
              <p class="text-muted mb-0">Jangan berbagi OTP atau data sensitif selain pada kanal resmi BPJS.</p>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="info-card p-4 rounded-4 shadow-sm">
              <h5>Rekomendasi</h5>
              <p class="text-muted mb-0">Bayar sebelum tanggal jatuh tempo untuk menjaga layanan tetap aktif.</p>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="info-card p-4 rounded-4 shadow-sm">
              <h5>Dokumentasi</h5>
              <p class="text-muted mb-0">Simpan bukti pembayaran untuk referensi jika diperlukan.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  return div;
}
