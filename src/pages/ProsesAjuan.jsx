import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../assets/components/Footer";
import ScrollUp from "../assets/components/ScrollUp";

export default function ProsesAjuan() {
  const navigate = useNavigate();

  // Menggulir ke atas saat komponen dimuat
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#EEF5FF] flex flex-col">
      <div className="flex-grow flex items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-2xl bg-white mt-5 mb-5 rounded-lg shadow-lg p-6 sm:p-8">
          <iframe
            src="https://lottie.host/embed/f49a40f6-c418-4789-a416-73dfaa362a16/17gVh3wBoN.json"
            title="Success Animation"
            className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-5 sm:mb-6"
          ></iframe>
          <div className="text-center space-y-3 sm:space-y-4">
            <h1 className="text-[#2A629A] text-xl sm:text-2xl font-bold">
              Dokumen Ajuan Anda Sedang Diproses
            </h1>
            <p className="text-gray-700 text-sm md:text-base font-semibold">
              Mohon cek Email Anda secara berkala.
            </p>
            <p className="text-gray-700 text-sm md:text-base">
              Untuk kepentingan perbaikan mutu pelayanan di BAKESBANGPOL
              Provinsi Jawa Timur, pemohon diwajibkan mengisi Survei Kepuasan
              Masyarakat (SKM) di bawah ini.
            </p>
          </div>

          {/* Buttons Section */}
          <div className="mt-6 sm:mt-8 flex flex-col items-center space-y-2 sm:space-y-3">
            <button
              className="bg-[#2A629A] text-white font-medium rounded-full py-2 px-4 sm:px-6 w-full max-w-xs text-sm sm:text-base hover:bg-[#003285] transition duration-300"
              onClick={() =>
                window.open(
                  "https://sukma.jatimprov.go.id/fe/survey?idUser=280&idEvent=2695",
                  "_blank"
                )
              }
            >
              Survei Kepuasan Pelayanan
            </button>
            <button
              className="bg-gray-500 text-white font-medium rounded-full py-2 px-4 sm:px-6 w-full max-w-xs text-sm sm:text-base hover:bg-gray-600 transition duration-300"
              onClick={() => navigate("/")}
            >
              Kembali ke Beranda
            </button>
          </div>
        </div>
      </div>

      {/* ScrollUp Button */}
      <ScrollUp />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
