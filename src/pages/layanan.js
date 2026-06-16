export function renderLayanan() {
  const div = document.createElement("div");
  div.innerHTML = `
    <section class="section bg-surface">
      <div class="container">
        <div class="section-header mb-4">
          <div>
            <span class="section-label">Layanan</span>
            <h2>Fitur layanan mandiri</h2>
          </div>
        </div>

        <div class="row g-4">
          <div class="col-12 col-lg-4">
            <div class="wizard-card p-4 rounded-4 shadow-sm">
              <h5>Daftar peserta</h5>
              <p>Periksa status dan data peserta keluarga dalam satu tampilan.</p>
              <ul class="steps mb-0">
                <li>Cek kepesertaan</li>
                <li>Ambil nomor peserta</li>
                <li>Siapkan dokumen</li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="wizard-card p-4 rounded-4 shadow-sm">
              <h5>Ubah data</h5>
              <p>Informasi identitas atau faskes utama dapat disiapkan untuk diajukan.</p>
              <ul class="steps mb-0">
                <li>Pastikan data tepat</li>
                <li>Kumpulkan bukti pendukung</li>
                <li>Ajukan ke kantor BPJS</li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="wizard-card p-4 rounded-4 shadow-sm">
              <h5>Pindah faskes</h5>
              <p>Persiapkan alasan pindah dan pilih faskes tujuan yang paling cocok.</p>
              <ul class="steps mb-0">
                <li>Bandingkan faskes</li>
                <li>Cek ketersediaan layanan</li>
                <li>Ajukan permohonan</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="service-notes mt-4 p-4 rounded-4 shadow-sm">
          <h5>Catatan layanan</h5>
          <p class="text-muted mb-0">Semua alur saat ini disajikan sebagai panduan. Untuk perubahan data atau pindah faskes, gunakan kanal resmi BPJS seperti Mobile JKN, PANDAWA, atau kantor cabang.</p>
        </div>
      </div>
    </section>
  `;

  return div;
}
