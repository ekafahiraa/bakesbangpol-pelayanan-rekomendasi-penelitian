import React from "react";
import { useMediaQuery } from "react-responsive";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Bakesbangpol from "../images/Logo Bakesbangpol.png";

export default function Footer() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <footer className="bg-[#003285] text-white py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-base md:text-xl font-bold mb-5">
              Badan Kesatuan Bangsa dan Politik <br />
              Provinsi Jawa Timur
            </h2>
            <img
              src={Bakesbangpol}
              alt="Bakesbangpol Logo"
              className="mb-0 md:mb-4 w-40 mx-auto md:mx-0"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-base md:text-xl font-bold mb-5">
              Hubungi Kami
            </h2>
            <p className="mb-2 text-xs md:text-sm">
              Jl. Putat Indah Kelurahan No. 1, Putat Gede, Kec. Sukomanunggal,
              Surabaya, Jawa Timur
            </p>
            <p className="mb-2 text-xs md:text-sm">
              <a
                href="mailto:pelayanan.bakesbangpoljatim@gmail.com"
                className="hover:text-[#86B6F6] hover:underline text-xs md:text-sm"
              >
                pelayanan.bakesbangpoljatim@gmail.com
              </a>
            </p>
            <p className="text-xs md:text-sm">(031) 5677935</p>
          </div>
          <div className="text-center md:text-right mb-5">
            <h2 className="text-base md:text-xl font-bold mb-5">Ikuti Kami</h2>
            <div
              className={`flex ${
                isMobile ? "flex-row justify-center" : "flex-col items-end"
              } text-sm space-${isMobile ? "x" : "y"}-4`}
            >
              <div className="flex items-center space-x-2">
                <a
                  href="https://www.instagram.com/bakesbangpol_jatim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-white hover:text-[#86B6F6]"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.instagram.com/bakesbangpol_jatim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#86B6F6] hover:underline text-xs md:text-sm"
                >
                  Instagram
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <a
                  href="https://www.facebook.com/bakesbangpoljatim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-white hover:text-[#86B6F6]"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.facebook.com/bakesbangpoljatim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#86B6F6] hover:underline text-xs md:text-sm"
                >
                  Facebook
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <a
                  href="https://twitter.com/kesbangpoljatim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-white hover:text-[#86B6F6]"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="https://twitter.com/kesbangpoljatim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#86B6F6] hover:underline text-xs md:text-sm"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white pt-5 text-center text-xs md:text-sm">
          <p>
            &copy; 2024 BAKESBANGPOL Provinsi Jawa Timur | {isMobile && <br />}
            Seluruh Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
