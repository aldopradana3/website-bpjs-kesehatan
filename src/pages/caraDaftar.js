export function renderCaraDaftar() {
  const div = document.createElement("div");
  div.innerHTML = `
    <section class="section">
      <div class="container">
        <div class="section-header mb-4">
          <div>
            <span class="section-label">Cara Daftar</span>
            <h2>Langkah pendaftaran peserta baru</h2>
          </div>
        </div>

        <div class="row g-4">
          <div class="col-12 col-xl-7">
            <div class="row g-3">
              <div class="col-12 col-md-6">
                <div class="type-card p-4 rounded-4 shadow-sm">
                  <h5>PPU</h5>
                  <p>Milik pemberi kerja untuk peserta yang menerima gaji.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="type-card p-4 rounded-4 shadow-sm">
                  <h5>PBPU</h5>
                  <p>Peserta mandiri non-pegawai dengan iuran berdasarkan kelas.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="type-card p-4 rounded-4 shadow-sm">
                  <h5>BP</h5>
                  <p>Pengusaha atau pekerja lepas dengan iuran mandiri.</p>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="type-card p-4 rounded-4 shadow-sm">
                  <h5>PBI</h5>
                  <p>Peserta penerima bantuan iuran dari pemerintah.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-xl-5">
            <div class="registration-card p-4 rounded-4 shadow-sm">
              <h5>Langkah pendaftaran</h5>
              <ol class="steps">
                <li>Siapkan data KTP, KK, dan informasi keluarga.</li>
                <li>Pilih kelas sesuai kebutuhan: Kelas 1, 2, atau 3.</li>
                <li>Pilih faskes utama (Faskes 1).</li>
                <li>Daftar melalui Mobile JKN, PANDAWA, atau kantor BPJS.</li>
              </ol>

              <div class="simulation-panel mt-4 p-3 rounded-4 bg-white border">
                <h5 class="mb-3">Simulasi iuran</h5>
                <div class="mb-3">
                  <label for="class-select" class="form-label">Pilih kelas</label>
                  <select id="class-select" class="form-select">
                    <option value="1">Kelas 1</option>
                    <option value="2">Kelas 2</option>
                    <option value="3" selected>Kelas 3</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label for="type-select" class="form-label">Jenis peserta</label>
                  <select id="type-select" class="form-select">
                    <option value="PPU">PPU</option>
                    <option value="PBPU" selected>PBPU</option>
                    <option value="BP">BP</option>
                    <option value="PBI">PBI</option>
                  </select>
                </div>
                <div id="simulation-result" class="simulation-result text-muted">Pilih kelas dan jenis peserta untuk melihat estimasi iuran.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  const classSelect = div.querySelector("#class-select");
  const typeSelect = div.querySelector("#type-select");
  const resultBox = div.querySelector("#simulation-result");

  function updateSimulation() {
    const kelas = classSelect.value;
    const jenis = typeSelect.value;
    const baseRates = { 1: 200000, 2: 150000, 3: 90000 };
    const typeFactors = { PPU: 1.0, PBPU: 1.0, BP: 1.1, PBI: 0.0 };
    const rate = baseRates[kelas] * typeFactors[jenis];
    const label = jenis === "PBI" ? "Iuran dibantu pemerintah" : `Estimasi iuran: Rp ${rate.toLocaleString("id-ID")}/bulan`;
    resultBox.textContent = label;
  }

  classSelect.addEventListener("change", updateSimulation);
  typeSelect.addEventListener("change", updateSimulation);
  updateSimulation();

  return div;
}
