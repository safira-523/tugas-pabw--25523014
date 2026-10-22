const ALAMAT = 'https://raw.githubusercontent.com/safira-523/tugas-pabw--25523014/aa3e9ad688687e1d77590dc0fdfc999980e7e300/worksheet%20-p10/data/proyek.json';

export async function ambilProyek() {
  try {
    const respons = await fetch(ALAMAT);
    if (!respons.ok) {
      throw new Error('status ' + respons.status);
    }
    const data = await respons.json();
    return data;
  } catch (galat) {
    console.error('gagal memuat', galat.message);
    throw galat;
  }
}
