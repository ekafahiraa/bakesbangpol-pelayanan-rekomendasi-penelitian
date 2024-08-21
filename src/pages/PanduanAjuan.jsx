import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { IoIosArrowBack, IoMdArrowRoundBack } from "react-icons/io";
import Footer from "../assets/components/Footer";
import ScrollUp from "../assets/components/ScrollUp";
import FAQBackground from "../assets/images/FAQ Background.png";
import Image6 from "../assets/images/Image 6.png";
import Image7 from "../assets/images/Image 7.png";
import Image8 from "../assets/images/Image 8.png";
import Image9 from "../assets/images/Image 9.png";

export default function PanduanAjuan() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      <div className="min-h-screen bg-[#EEF5FF]">
        {/* Header Section */}
        <div
          className="text-center mb-5 p-5 md:p-10 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${FAQBackground})`,
          }}
        >
          <h2 className="text-xl md:text-2xl font-bold">
            Panduan Layanan Permohonan Rekomendasi Penelitian/Magang
          </h2>
        </div>

        {/* Back Button */}
        <div className={`ml-5 pt-1 ${isMobile ? "mb-5" : "mb-10 lg:w-1/12"}`}>
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
        {isMobile && <div className="pt-1"></div>}

        {/* Requirements Section */}
        <div className="text-center">
          <h2 className="text-lg md:text-xl font-bold text-[#003285] px-5 md:px-10">
            Sebelum mengajukan permohonan, pastikan Anda telah menyiapkan
            berkas-berkas berikut:
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 md:px-10 max-w-6xl mx-auto mt-3">
          <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg shadow-[#86B6F6] flex flex-col items-start">
            <img
              src={Image6}
              alt="Surat Pengantar Instansi/Lembaga"
              className="w-full h-56 object-cover mb-4 md:mb-0"
            />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                Surat Pengantar Instansi atau Lembaga
              </h3>
              <div className="h-0.5 bg-gradient-to-r from-blue-500 to-green-500 mb-4"></div>
              <p className="text-sm md:text-base">
                Surat pengantar dari instansi atau lembaga tempat Anda
                berafiliasi yang menyatakan bahwa Anda diizinkan untuk melakukan
                penelitian atau magang.
              </p>
            </div>
          </div>
          <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg shadow-[#86B6F6] flex flex-col items-start">
            <img
              src={Image7}
              alt="Fotokopi KTP/Identitas"
              className="w-full h-56 object-cover mb-4 md:mb-0"
            />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                Fotokopi KTP atau Identitas
              </h3>
              <div className="h-0.5 bg-gradient-to-r from-blue-500 to-green-500 mb-4"></div>
              <p className="text-sm md:text-base">
                Lampirkan salinan KTP atau identitas resmi lainnya yang masih
                berlaku. Jika Anda memiliki anggota tim, pastikan juga untuk
                melampirkan fotokopi identitas dari setiap anggota tim tersebut
                agar data yang kami terima lengkap dan akurat.
              </p>
            </div>
          </div>
          <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg shadow-[#86B6F6] flex flex-col items-start">
            <img
              src={Image8}
              alt="Proposal Penelitian/Magang"
              className="w-full h-56 object-cover mb-4 md:mb-0"
            />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                Proposal Penelitian atau Magang
              </h3>
              <div className="h-0.5 bg-gradient-to-r from-blue-500 to-green-500 mb-4"></div>
              <p className="text-sm md:text-base">
                Lampirkan dokumen proposal yang menjelaskan tujuan, metode, dan
                ruang lingkup penelitian atau magang yang akan dilakukan.
                Pastikan juga untuk mencantumkan informasi lengkap mengenai
                lokasi penelitian atau magang tersebut, sehingga data yang kami
                terima dapat diproses dengan tepat.
              </p>
            </div>
          </div>
        </div>

        {/* Proses Pengajuan Section */}
        <div className="bg-[#EEF5FF] py-5">
          <div className="text-center">
            <h2 className="text-lg md:text-xl font-bold text-[#003285] px-4">
              Proses Pengajuan Rekomendasi Penelitian
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 p-4 md:px-10 m-4 max-w-6xl mx-auto">
            <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg shadow-[#86B6F6] flex flex-col md:flex-row items-start">
              <img
                src={Image9}
                alt="Proses Pengajuan"
                className="w-full h-64 md:w-56 md:h-56 object-cover mb-4 md:mb-0 md:mr-8"
              />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4">
                  Langkah-Langkah Proses Pengajuan Rekomendasi Penelitian
                </h3>
                <div className="h-0.5 bg-gradient-to-r from-blue-500 to-green-500 mb-4"></div>
                <ol className="list-decimal list-inside">
                  <li className="text-sm md:text-base">
                    Mengumpulkan semua berkas yang diperlukan.
                  </li>
                  <li className="text-sm md:text-base">
                    Mengisi formulir permohonan rekomendasi penelitian yang
                    tersedia di situs kami.
                  </li>
                  <li className="text-sm md:text-base">
                    Mengirimkan berkas dan formulir yang telah diisi melalui
                    Email atau langsung ke kantor kami.
                  </li>
                  <li className="text-sm md:text-base">
                    Menunggu konfirmasi dari pihak kami mengenai status
                    permohonan Anda.
                  </li>
                </ol>
              </div>
            </div>
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
