import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { IoIosArrowBack, IoMdArrowRoundBack } from "react-icons/io";
import Footer from "../assets/components/Footer";
import ScrollUp from "../assets/components/ScrollUp";
import Header from "../assets/images/Header.png";
import Image1 from "../assets/images/Image 1.png";
import Image2 from "../assets/images/Image 2.png";
import Image3 from "../assets/images/Image 3.png";
import Image4 from "../assets/images/Image 4.png";
import Image5 from "../assets/images/Image 5.png";

export default function SyaratAjuan() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      {/* Header Section */}
      <div className="relative flex items-center justify-center min-h-screen bg-[#EEF5FF]">
        <img
          src={Header}
          className="absolute inset-0 object-cover w-full h-full opacity-15"
          alt="Header Image"
        />
        <div className="relative flex flex-col items-center justify-center text-center z-10 p-8 m-4 bg-white bg-opacity-75 rounded-lg shadow-lg max-w-4xl">
          <h1 className="text-xl md:text-3xl font-bold">
            PERSYARATAN PERIZINAN REKOMENDASI PENELITIAN
          </h1>
          <h1 className="text-xl md:text-3xl font-bold mb-10">
            DI PROVINSI JAWA TIMUR
          </h1>

          <div className="text-left text-lg space-y-4">
            <div>
              <h2 className="text-base md:text-lg font-semibold mb-1">
                Dasar Hukum:
              </h2>
              <ol className="list-decimal list-inside text-base">
                <li className="text-sm md:text-base">
                  Undang-undang Nomor 18 Tahun 2002 tentang Sistem Nasional
                  Penelitian, Pengembangan, dan Penerapan Ilmu Pengetahuan dan
                  Teknologi;
                </li>
                <li className="text-sm md:text-base">
                  Peraturan Menteri Dalam Negeri Nomor 20 Tahun 2011 tentang
                  Pedoman Penelitian dan Pengembangan di Lingkungan Kementerian
                  Dalam Negeri dan Pemerintah Daerah;
                </li>
                <li className="text-sm md:text-base">
                  Peraturan Kementerian Dalam Negeri (Permendagri) Nomor 3 Tahun
                  2018 tentang Penerbitan Surat Keterangan Penelitian.
                </li>
              </ol>
            </div>
            <div>
              <h2 className="text-base md:text-lg font-semibold mb-1">
                Tujuan:
              </h2>
              <ol className="list-decimal list-inside text-base">
                <li className="text-sm md:text-base">
                  Bahan Pertimbangan Pemberian Izin Penelitian oleh Pemerintah
                  Daerah;
                </li>
                <li className="text-sm md:text-base">
                  Acuan Bagi Peneliti dalam Memperoleh Izin Penelitian.
                </li>
              </ol>
            </div>
            <div>
              <h2 className="text-base md:text-lg font-semibold mb-1">
                Ketentuan:
              </h2>
              <ol className="list-decimal list-inside text-base">
                <li className="text-sm md:text-base">
                  Masa Berlaku 3 (tiga) bulan untuk S1 dan 6 (enam) bulan untuk
                  S2 atau Lembaga;
                </li>
                <li className="text-sm md:text-base">
                  Waktu Pelayanan 1 (satu) Jam Kerja.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#EEF5FF]">
        {/* Back Button */}
        <div className={`ml-4 pt-5 ${isMobile ? "mb-1" : "mb-10 lg:w-1/12"}`}>
          <Link to="/">
            <div className="flex font-medium items-center text-[#003285] hover:text-[#40A2E3] cursor-pointer">
              {isMobile ? (
                <IoMdArrowRoundBack className="text-2xl" />
              ) : (
                <>
                  <IoIosArrowBack className="text-2xl" />
                  <h6 className="text-base ml-1">Kembali</h6>
                </>
              )}
            </div>
          </Link>
        </div>

        {/* Mobile padding top */}
        {isMobile && <div className="pt-5"></div>}

        {/* Requirements Section */}
        <div className="text-center">
          <h2 className="text-xl md:text-2xl font-bold text-[#003285] px-4">
            Persyaratan untuk Pembuatan Izin Penelitian di BAKESBANGPOL Provinsi
            Jawa Timur:
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 p-4 md:px-10 max-w-6xl mx-auto">
          <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg shadow-[#86B6F6] flex flex-col md:flex-row items-start mt-3">
            <img
              src={Image1}
              alt="Mahasiswa Provinsi"
              className="w-full h-64 md:w-56 md:h-56 object-cover mb-4 md:mb-0 md:mr-8"
            />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                Mahasiswa yang Melaksanakan Pendidikan/Perkuliahan di Provinsi
                Jawa Timur Melakukan Penelitian di Jawa Timur
              </h3>
              <div className="h-0.5 bg-gradient-to-r from-blue-500 to-green-500 mb-4"></div>
              <ol className="list-decimal list-inside">
                <li className="text-sm md:text-base">
                  Pengantar dari Universitas/Lembaga (Asli)
                </li>
                <li className="text-sm md:text-base">
                  Proposal (Permohonan Rekomendasi) - (Foto Copy)
                </li>
                <li className="text-sm md:text-base">
                  Foto Copy Identitas/ KTP
                </li>
                <li className="text-sm md:text-base">
                  Formulir Izin Penelitian yang telah diisi
                </li>
              </ol>
            </div>
          </div>
          <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg shadow-[#86B6F6] flex flex-col md:flex-row items-start">
            <img
              src={Image2}
              alt="Mahasiswa Luar Provinsi"
              className="w-full h-64 md:w-56 md:h-56 object-cover mb-4 md:mb-0 md:mr-8"
            />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                Mahasiswa yang Melaksanakan Pendidikan/Perkuliahan di Luar
                Provinsi Jawa Timur Melakukan Penelitian di Jawa Timur
              </h3>
              <div className="h-0.5 bg-gradient-to-r from-blue-500 to-green-500 mb-4"></div>
              <ol className="list-decimal list-inside">
                <li className="text-sm md:text-base">
                  Pengantar dari Universitas/Lembaga (Asli)
                </li>
                <li className="text-sm md:text-base">
                  Proposal (Permohonan Rekomendasi) - (Foto Copy)
                </li>
                <li className="text-sm md:text-base">
                  Foto Copy Identitas/ KTP
                </li>
                <li className="text-sm md:text-base">
                  Pengantar dari Bakesbang & Linmas (Provinsi). (Asli)
                </li>
                <li className="text-sm md:text-base">
                  Formulir Izin Penelitian yang telah diisi
                </li>
              </ol>
            </div>
          </div>
          <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg shadow-[#86B6F6] flex flex-col md:flex-row items-start">
            <img
              src={Image3}
              alt="Mahasiswa Luar Negeri"
              className="w-full h-64 md:w-60 md:h-60 object-cover mb-4 md:mb-0 md:mr-8"
            />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                Mahasiswa yang Melaksanakan Pendidikan/Perkuliahan di Luar
                Negeri Melakukan Penelitian di Jawa Timur
              </h3>
              <div className="h-0.5 bg-gradient-to-r from-blue-500 to-green-500 mb-4"></div>
              <ol className="list-decimal list-inside">
                <li className="text-sm md:text-base">
                  Surat dari Dirjen Kesbang Pol Kemendagri di Jakarta (Asli)
                </li>
                <li className="text-sm md:text-base">
                  Pengantar dari Universitas/Lembaga (Asli)
                </li>
                <li className="text-sm md:text-base">
                  Paspor / Visa (Foto Copy)
                </li>
                <li className="text-sm md:text-base">
                  Identitas / KTP (Foto Copy)
                </li>
                <li className="text-sm md:text-base">
                  Surat Keterangan Jalan dari Kepolisian (Foto Copy)
                </li>
                <li className="text-sm md:text-base">
                  Proposal (Permohonan Rekomendasi)
                </li>
              </ol>
            </div>
          </div>
          <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg shadow-[#86B6F6] flex flex-col md:flex-row items-start">
            <img
              src={Image4}
              alt="Lembaga/PT"
              className="w-full h-64 md:w-56 md:h-56 object-cover mb-4 md:mb-0 md:mr-8"
            />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                Lembaga/PT Melakukan Penelitian di Jawa Timur
              </h3>
              <div className="h-0.5 bg-gradient-to-r from-blue-500 to-green-500 mb-4"></div>
              <ol className="text-sm md:text-base list-decimal list-inside">
                <li>
                  Rekomendasi dari Dirjen Kesbang & Pol Kemendagri Jakarta
                  (ASLI)
                </li>
                <li className="text-sm md:text-base">
                  Pengantar dari Universitas/Lembaga (Asli)
                </li>
                <li className="text-sm md:text-base">
                  Proposal (Permohonan Rekomendasi) - (Foto Copy)
                </li>
                <li className="text-sm md:text-base">
                  Foto Copy Identitas/ KTP
                </li>
                <li className="text-sm md:text-base">
                  Formulir Izin Penelitian yang telah diisi
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Proposal Requirements Section */}
        <div className="bg-[#EEF5FF] pt-5">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#003285] px-4">
              Ketentuan Proposal Penelitian
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 p-4 md:px-10 m-4 max-w-6xl mx-auto">
            <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg shadow-[#86B6F6] flex flex-col md:flex-row items-start">
              <img
                src={Image5}
                alt="Proposal Requirements"
                className="w-full h-64 md:w-56 md:h-56 object-cover mb-4 md:mb-0 md:mr-8"
              />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4">
                  Sesuai pada Peraturan Menteri Dalam Negeri Nomor 3 Tahun 2018
                  tentang Penerbitan Surat Keterangan Penelitian, Proposal
                  penelitian yang diajukan berbahasa Indonesia yang memuat:
                </h3>
                <div className="h-0.5 bg-gradient-to-r from-blue-500 to-green-500 mb-4"></div>
                <ol className="list-decimal list-inside">
                  <li className="text-sm md:text-base">Latar Belakang</li>
                  <li className="text-sm md:text-base">Maksud dan Tujuan</li>
                  <li className="text-sm md:text-base">Ruang Lingkup</li>
                  <li className="text-sm md:text-base">
                    Jangka Waktu Penelitian
                  </li>
                  <li className="text-sm md:text-base">Nama Peneliti</li>
                  <li className="text-sm md:text-base">
                    Sasaran/Target Penelitian
                  </li>
                  <li className="text-sm md:text-base">Metode Penelitian</li>
                  <li className="text-sm md:text-base">Lokasi Penelitian</li>
                  <li className="text-sm md:text-base">
                    Hasil yang Diharapkan dari Penelitian
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* Forms and Requirements Buttons */}
        <div className="bg-[#EEF5FF]">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#003285] px-4">
              Pilih Formulir dan Persyaratan yang Anda Butuhkan
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 p-4 m-4 md:px-10 max-w-6xl mx-auto">
            <Link to="/formulir-penelitian/survei/observasi/skripsi/tesis/desertasi">
              <button className="bg-[#86B6F6] text-white px-6 py-7 rounded-lg shadow-lg hover:bg-blue-400 transition duration-300 w-full text-center font-medium text-sm md:text-base">
                Formulir Permohonan Rekomendasi Penelitian/Observasi/
                <span className="block md:inline">
                  {" "}
                  Skripsi/Tesis/Desertasi
                </span>
              </button>
            </Link>
            <Link to="/formulir-magang/pkl/pkn/kkn">
              <button className="bg-[#86B6F6] text-white px-6 py-7 rounded-lg shadow-lg hover:bg-blue-400 transition duration-300 w-full text-center font-medium text-sm md:text-base">
                Formulir Permohonan Rekomendasi Magang/Praktek Kerja Lapang/
                <span className="block md:inline">
                  {" "}
                  Praktek Kerja Nyata/Kuliah Kerja Nyata
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* Notes Section */}
        <div className="bg-[#EEF5FF] pb-5">
          <div className="max-w-6xl mx-auto p-4 md:px-10">
            <h2 className="text-base md:text-xl font-bold mb-4">Catatan:</h2>
            <ul className="list-disc list-inside space-y-2">
              <li className="text-sm md:text-base">
                <span className="font-bold">Pelayanan ini bersifat gratis</span>{" "}
                sehingga tidak ada dikenakan biaya apapun dalam setiap proses
                pengurusan surat keterangan penelitian.
              </li>
              <li className="text-sm md:text-base">
                Untuk pengambilan surat rekomendasi penelitian,{" "}
                <span className="font-bold">harap membawa dokumen </span>
                <span className="font-bold italic">(hardcopy) </span>
                <span>
                  asli yang telah dikirim ke Email kami sebagai kelengkapan
                  persyaratan pengajuan rekomendasi penelitian.
                </span>
              </li>
              <li className="text-sm md:text-base">
                Untuk pengisian{" "}
                <span className="font-bold">
                  formulir permohonan rekomendasi penelitian/survey/magang
                </span>
                , harap menggunakan huruf balok untuk menghindari kesalahan
                dalam entry data.
              </li>
              <li className="text-sm md:text-base">
                Adapun untuk{" "}
                <span className="font-bold">
                  Universitas PTN/PTS yang berlokasi di area Kota Surabaya
                </span>{" "}
                yang ingin melakukan kegiatan penelitian, survey, magang, KKN,
                PKL di Wilayah Kota Surabaya, penerbitan/kepengurusan surat
                rekomendasinya langsung kepada{" "}
                <span className="font-bold">
                  Dinas Penanaman Modal dan PTSP Kota Surabaya
                </span>
                <span>.</span>
              </li>
              <li className="text-sm md:text-base">
                Dan untuk{" "}
                <span className="font-bold">
                  SMA/SMK Negeri/Swasta di Kota Surabaya
                </span>{" "}
                yang ingin mengurus surat izin magang melalui
                rekomendasi/diajukan kepada{" "}
                <span className="font-bold">
                  BAKESBANGPOL Provinsi Jawa Timur
                </span>{" "}
                dan
                <span> </span>
                <span className="font-bold">
                  melampirkan kartu identitas dari guru pembimbing/wali kelas
                </span>
                <span>.</span>
              </li>
              {/* <li>
                Pada masa pandemi saat ini pengurusan surat rekomendasi
                penelitian bisa dilakukan secara{" "}
                <span className="italic">offline </span>
                <span>maupun </span>
                <span className="italic">online</span>. Untuk pengurusan secara{" "}
                <span className="italic">online </span> berkas permohonan surat
                rekomendasi bisa dikirim melalui formulir yang ada di situs
                kami:{" "}
                <a
                  href="mailto:pelayanan.bakesbangpoljatim@gmail.com"
                  className="text-blue-600 underline"
                >
                  pelayanan.bakesbangpoljatim@gmail.com
                </a>{" "}
                dalam bentuk .rar/zip dengan format
                nama_pemohonan_instansi/kampus asal.rar |{" "}
                <span className="italic">
                  Contoh: Syahrul Septa_Rekomendasi Penelitian_ITS.rar
                </span>
              </li> */}
            </ul>
          </div>
        </div>

        {/* ScrollUp Button */}
        <ScrollUp />

        {/* Footer Section */}
        <Footer />
      </div>
    </>
  );
}
