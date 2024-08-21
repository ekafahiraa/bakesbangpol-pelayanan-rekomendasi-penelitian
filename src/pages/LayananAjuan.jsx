import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { IoIosArrowBack, IoMdArrowRoundBack } from "react-icons/io";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaInstagram,
} from "react-icons/fa";
import Footer from "../assets/components/Footer";
import ScrollUp from "../assets/components/ScrollUp";
import FAQBackground from "../assets/images/FAQ Background.png";
import JadwalLayananKonsultasi from "../assets/images/Jadwal Layanan Konsultasi.png";

export default function LayananAjuan() {
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
            Layanan Permohonan Rekomendasi Magang/Penelitian <br />
            BAKESBANGPOL Provinsi Jawa Timur
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

        {/* Consultation Schedule Section */}
        <div className="bg-[#EEF5FF]">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#003285] px-4">
              Jadwal Layanan Ajuan
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 p-4 md:px-10 m-4 max-w-6xl mx-auto">
            <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg shadow-[#86B6F6] flex flex-col md:flex-row items-start">
              <img
                src={JadwalLayananKonsultasi}
                alt="Jadwal Layanan Konsultasi"
                className="w-full h-64 md:w-56 md:h-56 object-cover mb-4 md:mb-0 md:mr-8"
              />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4">
                  Jadwal Layanan Ajuan Permohonan Rekomendasi Penelitian/Magang
                </h3>
                <div className="h-0.5 bg-gradient-to-r from-blue-500 to-green-500 mb-4"></div>
                <p className="text-sm md:text-base">
                  Kami melayani ajuan permohonan pada hari:
                </p>
                <ul className="list-disc list-inside ml-5 mt-2">
                  <li className="text-sm md:text-base">
                    Senin: 07.15 - 14.30 WIB
                  </li>
                  <li className="text-sm md:text-base">
                    Selasa: 07.15 - 14.30 WIB
                  </li>
                  <li className="text-sm md:text-base">
                    Rabu: 07.15 - 14.30 WIB
                  </li>
                  <li className="text-sm md:text-base">
                    Kamis: 07.15 - 14.30 WIB
                  </li>
                  <li className="text-sm md:text-base">
                    Jumat: 07.15 - 14.30 WIB
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="bg-[#EEF5FF] py-5">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-bold text-[#003285] px-4">
              Kontak Pelayanan BAKESBANGPOL
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:px-10 m-4 max-w-6xl mx-auto">
            <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg shadow-[#86B6F6] flex flex-col items-start">
              <FaMapMarkerAlt className="w-10 h-10 mb-4 text-[#003285]" />
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Alamat</h3>
              <div className="h-0.5 w-full bg-gradient-to-r from-blue-500 to-green-500 mb-4"></div>
              <p className="text-sm">
                Jl. Putat Indah Kelurahan No. 1, Putat Gede, Kec. Sukomanunggal,
                Surabaya, Jawa Timur
              </p>
            </div>
            <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg shadow-[#86B6F6] flex flex-col items-start">
              <FaEnvelope className="w-10 h-10 mb-4 text-[#003285]" />
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Email</h3>
              <div className="h-0.5 w-full bg-gradient-to-r from-blue-500 to-green-500 mb-4"></div>
              <a
                href="mailto:pelayanan.bakesbangpoljatim@gmail.com"
                className="text-[#86B6F6] text-sm hover:underline"
              >
                pelayanan.bakesbangpoljatim@gmail.com
              </a>{" "}
            </div>
            <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg shadow-[#86B6F6] flex flex-col items-start">
              <FaPhone className="w-10 h-10 mb-4 text-[#003285]" />
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                Nomor Telepon
              </h3>
              <div className="h-0.5 w-full bg-gradient-to-r from-blue-500 to-green-500 mb-4"></div>
              <p className="text-sm">(031) 5677935</p>
            </div>
            <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg shadow-[#86B6F6] flex flex-col items-start">
              <FaInstagram className="w-10 h-10 mb-4 text-[#003285]" />
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                Media Sosial
              </h3>
              <div className="h-0.5 w-full bg-gradient-to-r from-blue-500 to-green-500 mb-4"></div>
              <p className="text-sm">
                Instagram:{" "}
                <a
                  href="https://www.instagram.com/bakesbangpol_jatim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#86B6F6] hover:underline"
                >
                  bakesbangpol_jatim
                </a>
              </p>
              <p className="text-sm">
                Facebook:{" "}
                <a
                  href="https://www.facebook.com/bakesbangpoljatim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#86B6F6] hover:underline"
                >
                  bakesbangpoljatim
                </a>
              </p>
              <p className="text-sm">
                Twitter:{" "}
                <a
                  href="https://twitter.com/kesbangpoljatim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#86B6F6] hover:underline"
                >
                  kesbangpoljatim
                </a>
              </p>
            </div>
          </div>

          {/* Google Maps Section */}
          <div className="max-w-6xl mx-auto flex justify-center py-8">
            <iframe
              src="https://maps.google.com/maps?q=Jl.%20Putat%20Indah%20Kelurahan%20No.%201,%20Putat%20Gede,%20Kec.%20Sukomanunggal,%20Surabaya,%20Jawa%20Timur&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="80%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
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
