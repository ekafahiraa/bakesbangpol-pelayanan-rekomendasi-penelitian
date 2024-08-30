import React, { useState, useEffect } from "react";
import {
  IoDocumentAttachSharp,
  IoTime,
  IoWarningOutline,
  IoCall,
  IoDocumentText,
} from "react-icons/io5";
import {
  FaArrowsDownToPeople,
  FaPersonCircleQuestion,
  FaRegCommentDots,
} from "react-icons/fa6";
import { ImSearch } from "react-icons/im";
import { GoArrowRight } from "react-icons/go";
import { TbLocationQuestion } from "react-icons/tb";
import FAQ from "../assets/components/FAQ";
import Footer from "../assets/components/Footer";
import ScrollUp from "../assets/components/ScrollUp";
import Header from "../assets/images/Header.png";
import Bakesbangpol from "../assets/images/Logo Bakesbangpol.png";
import FAQBackground from "../assets/images/FAQ Background.png";

export default function Beranda() {
  // State untuk melacak apakah data sedang dimuat
  const [isLoading, setIsLoading] = useState(true);
  // State untuk menyimpan teks pencarian
  const [searchTerm, setSearchTerm] = useState("");

  // Simulasi delay untuk loading
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  // Komponen loading skeleton untuk Grid Section
  const Skeleton = () => (
    <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-center md:items-start text-center md:text-left h-full">
      <div className="w-20 h-20 mb-4 bg-gray-300 rounded-full animate-pulse"></div>
      <div className="w-full md:w-3/4 h-6 mb-2 bg-gray-300 rounded animate-pulse"></div>
      <div className="w-full h-4 mb-4 bg-gray-300 rounded animate-pulse"></div>
      <div className="w-1/2 h-4 bg-gray-300 rounded animate-pulse"></div>
    </div>
  );

  // Komponen loading skeleton untuk FAQ Section
  const FaqSkeleton = () => (
    <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-start text-left h-full">
      <div className="w-12 h-12 mb-4 bg-gray-300 rounded-full animate-pulse"></div>
      <div className="w-full">
        <div className="w-3/4 h-6 bg-gray-300 rounded mb-2 animate-pulse"></div>
        <div className="w-full h-4 bg-gray-300 rounded mb-2 animate-pulse"></div>
        <div className="w-5/6 h-4 bg-gray-300 rounded animate-pulse"></div>
      </div>
    </div>
  );

  // Function untuk melakukan scroll ke section grid
  const scrollToGridSection = () => {
    document
      .getElementById("grid-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  // Daftar FAQ yang akan ditampilkan
  const faqs = [
    {
      icon: <IoDocumentAttachSharp className="w-12 h-12 mb-4 text-[#003285]" />,
      question:
        "Dokumen apa saja yang diperlukan untuk mengajukan permohonan layanan?",
      answer:
        "Dokumen yang diperlukan yaitu foto copy KTP, surat pengantar resmi dari lembaga atau instansi, proposal penelitian atau magang.",
    },
    {
      icon: <IoWarningOutline className="w-12 h-12 mb-4 text-[#003285]" />,
      question:
        "Apa yang harus Saya lakukan jika ada masalah dengan permohonan Saya?",
      answer:
        "Anda dapat menghubungi layanan BAKESBANGPOL Provinsi Jawa Timur melalui kontak yang tersedia di website resmi atau datang langsung ke kantor BAKESBANGPOL untuk mendapatkan bantuan lebih lanjut.",
    },
    {
      icon: <IoTime className="w-12 h-12 mb-4 text-[#003285]" />,
      question:
        "Berapa lama waktu yang dibutuhkan untuk memproses permohonan layanan?",
      answer:
        "Untuk permohonan layanan secara offline, biasanya akan langsung diproses di tempat. Sedangkan untuk permohonan layanan secara online, Anda akan menerima pemberitahuan mengenai status permohonan melalui Email dalam waktu beberapa hari kerja.",
    },
    {
      icon: (
        <FaPersonCircleQuestion className="w-12 h-12 mb-4 text-[#003285]" />
      ),
      question:
        "Apa saja layanan yang disediakan oleh BAKESBANGPOL Provinsi Jawa Timur?",
      answer:
        "BAKESBANGPOL Provinsi Jawa Timur menyediakan berbagai layanan, seperti penerbitan izin organisasi masyarakat, koordinasi pemilu, sosialisasi kebijakan pemerintah, dan layanan pengaduan masyarakat.",
    },
    {
      icon: <TbLocationQuestion className="w-12 h-12 mb-4 text-[#003285]" />,
      question:
        "Di mana saya bisa menemukan informasi lebih lanjut mengenai program BAKESBANGPOL Provinsi Jawa Timur?",
      answer:
        "Dapat ditemukan di website resmi BAKESBANGPOL, media sosial, dan publikasi resmi lainnya. Anda juga dapat mengunjungi kantor BAKESBANGPOL untuk mendapatkan informasi lebih lengkap.",
    },
    {
      icon: <IoCall className="w-12 h-12 mb-4 text-[#003285]" />,
      question: "Bagaimana cara menghubungi BAKESBANGPOL Provinsi Jawa Timur?",
      answer: (
        <>
          Anda dapat menghubungi BAKESBANGPOL Provinsi Jawa Timur melalui
          telepon, Email, atau datang langsung ke kantor BAKESBANGPOL. Informasi
          kontak lengkap dapat ditemukan di{" "}
          <a
            href="https://bakesbangpol.jatimprov.go.id/"
            className="text-[#86B6F6] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            website resmi{" "}
          </a>
          BAKESBANGPOL Provinsi Jawa Timur.
        </>
      ),
    },
    {
      icon: (
        <FaPersonCircleQuestion className="w-12 h-12 mb-4 text-[#003285]" />
      ),
      question: "Apakah ada biaya yang dikenakan untuk setiap layanan?",
      answer:
        "Tidak, semua layanan yang diberikan oleh BAKESBANGPOL Provinsi Jawa Timur tidak dikenakan biaya. Anda dapat mengajukan permohonan layanan tanpa biaya apapun. Informasi lebih lanjut dapat ditemukan di website ini.",
    },
    {
      icon: <IoDocumentAttachSharp className="w-12 h-12 mb-4 text-[#003285]" />,
      question: "Bagaimana cara mengajukan permohonan izin penelitian?",
      answer: (
        <>
          Untuk mengajukan permohonan izin penelitian, Anda perlu membaca
          ketentuan pada{" "}
          <a
            href="/persyaratan-perizinan-rekomendasi-penelitian"
            className="text-[#86B6F6] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            halaman berikut
          </a>{" "}
          dan melampirkan dokumen yang diperlukan seperti fotocopy
          KTP/Identitas, proposal penelitian atau magang, dan surat pengantar
          dari institusi terkait.
        </>
      ),
    },
    {
      icon: <TbLocationQuestion className="w-12 h-12 mb-4 text-[#003285]" />,
      question:
        "Bagaimana cara mengetahui status permohonan Saya yang sedang diproses?",
      answer:
        "Jika dokumen Anda sudah dikirim pada formulir, maka dokumen Anda sedang diproses. Jika dalam beberapa hari ke depan masih belum mendapat Email, dapat menghubungi layanan secara langsung untuk mengetahui pemrosesan permohonan Anda.",
    },

    {
      icon: <IoTime className="w-12 h-12 mb-4 text-[#003285]" />,
      question:
        "Kapan waktu operasional pelayanan rekomendasi penelitian di BAKESBANGPOL Provinsi Jawa Timur?",
      answer:
        "Pelayanan BAKESBANGPOL Provinsi Jawa Timur beroperasi pada hari kerja, yaitu Senin hingga Jumat. Pada hari Senin hingga Kamis mulai pukul 08.00 hingga 15.30 WIB. Sedangkan hari Jumat mulai pukul 07.30 hingga 15.30 WIB",
    },
    {
      icon: <FaArrowsDownToPeople className="w-12 h-12 mb-4 text-[#003285]" />,
      question:
        "Apakah BAKESBANGPOL Provinsi Jawa Timur menyediakan layanan online untuk permohonan?",
      answer:
        "Ya, BAKESBANGPOL menyediakan layanan online untuk berbagai permohonan melalui website ini. Anda dapat mengajukan permohonan tanpa perlu datang langsung ke kantor.",
    },
    {
      icon: <IoDocumentText className="w-12 h-12 mb-4 text-[#003285]" />,
      question:
        "Apakah Saya perlu membuat janji temu sebelum mengunjungi kantor pelayanan BAKESBANGPOL?",
      answer:
        "Tidak perlu membuat janji temu sebelum mengunjungi kantor BAKESBANGPOL. Anda dapat datang langsung selama jam operasional untuk mendapatkan layanan yang Anda butuhkan.",
    },
  ];

  // Memfilter FAQ berdasarkan teks pencarian
  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Hero Section */}
      <div className="relative flex items-center justify-center min-h-screen bg-[#EEF5FF]">
        <img
          src={Header}
          className="absolute inset-0 object-cover w-full h-full opacity-15"
          alt="Header Image"
        />
        <div className="relative max-w-6xl mx-auto px-8 py-16 md:py-28 flex flex-col md:flex-row items-center justify-between z-10">
          <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0 order-2 md:order-1">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6">
              Pelayanan
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold mb-7 md:mb-9">
              BAKESBANGPOL
            </h2>
            <p className="text-gray-500 text-base md:text-xl font-medium mb-6">
              Akses mudah dan cepat ke berbagai layanan yang disediakan oleh
              Badan Kesatuan Bangsa dan Politik Provinsi Jawa Timur
            </p>
            <button
              onClick={scrollToGridSection}
              className="bg-[#2A629A] text-white font-medium px-4 py-2 rounded-full hover:bg-[#003285] transition duration-300 inline-block"
            >
              Kunjungi Laman
            </button>
          </div>
          <div className="md:w-1/3 order-1 md:order-2 mb-4 md:mb-0">
            <img
              src={Bakesbangpol}
              alt="Logo Bakesbangpol"
              className="w-full md:w-auto h-auto"
              // className="w-96 md:w-96 h-auto"
            />
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <div id="grid-section" className="bg-[#EEF5FF] py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              <>
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </>
            ) : (
              <>
                <a href="/panduan-perizinan-rekomendasi-penelitian">
                  <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-center md:items-start text-center md:text-left transition-transform duration-300 ease-in-out transform hover:scale-105">
                    <IoDocumentAttachSharp className="w-16 h-16 mb-4 text-[#003285]" />

                    <h3 className="text-xl md:text-2xl font-semibold mb-2">
                      Panduan Ajuan
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm md:text-base">
                      Informasi mengenai panduan layanan dan proses pengajuan
                      permohonan.
                    </p>
                    <a
                      href="/panduan-perizinan-rekomendasi-penelitian"
                      className="text-[#86B6F6] hover:underline flex items-center text-sm md:text-base"
                    >
                      Baca Selengkapnya{" "}
                      <span className="ml-2">
                        <GoArrowRight />
                      </span>
                    </a>
                  </div>
                </a>
                <a href="/persyaratan-perizinan-rekomendasi-penelitian">
                  <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-center md:items-start text-center md:text-left transition-transform duration-300 ease-in-out transform hover:scale-105">
                    <ImSearch className="w-16 h-16 mb-4 text-[#003285]" />
                    <h3 className="text-xl md:text-2xl font-semibold mb-2">
                      Syarat Ajuan
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm md:text-base">
                      Perizinan rekomendasi penelitian observasi, skripsi,
                      tesis, disertasi, magang, PKL, PKN, dan KKN.
                    </p>
                    <a
                      href="/persyaratan-perizinan-rekomendasi-penelitian"
                      className="text-[#86B6F6] hover:underline flex items-center text-sm md:text-base"
                    >
                      Baca Selengkapnya{" "}
                      <span className="ml-2">
                        <GoArrowRight />
                      </span>
                    </a>
                  </div>
                </a>
                <a href="/layanan-konsultasi-penelitian">
                  <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-center md:items-start text-center md:text-left transition-transform duration-300 ease-in-out transform hover:scale-105">
                    <FaRegCommentDots className="w-16 h-16 mb-4 text-[#003285]" />
                    <h3 className="text-xl md:text-2xl font-semibold mb-2">
                      Layanan Ajuan
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm md:text-base">
                      Layanan mengenai ajuan permohonan rekomendasi penelitian
                      dan prosesnya.
                    </p>
                    <a
                      href="/layanan-konsultasi-penelitian"
                      className="text-[#86B6F6] hover:underline flex items-center text-sm md:text-base"
                    >
                      Baca Selengkapnya{" "}
                      <span className="ml-2">
                        <GoArrowRight />
                      </span>
                    </a>
                  </div>
                </a>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Search Questions Section */}
      <div className="bg-[#EEF5FF] pb-16">
        <div
          className="text-center mb-20 px-5 py-10 md:py-16 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${FAQBackground})`,
          }}
        >
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-gray-500 text-sm md:text-base font-medium">
            Temukan jawaban dari pertanyaan yang sering diajukan mengenai
            layanan kami.
          </p>
          <input
            type="text"
            placeholder="Cari pertanyaan..."
            className="mt-4 py-2 w-[250px] md:w-full max-w-lg border-2 border-[#86B6F6] focus:border-[#2A629A] rounded-full focus:outline-none pl-4 text-xs md:text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* FAQ Section */}
        <div className="max-w-6xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              <>
                <FaqSkeleton />
                <FaqSkeleton />
                <FaqSkeleton />
                <FaqSkeleton />
                <FaqSkeleton />
                <FaqSkeleton />
                <FaqSkeleton />
                <FaqSkeleton />
                <FaqSkeleton />
                <FaqSkeleton />
                <FaqSkeleton />
                <FaqSkeleton />
              </>
            ) : filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <FAQ
                  key={index}
                  icon={faq.icon}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))
            ) : (
              <div className="flex flex-col items-center justify-center col-span-1 md:col-span-2 lg:col-span-3">
                <iframe
                  src="https://lottie.host/embed/4a3394e0-e810-4308-a6ed-8e6b8e27c074/u5FXJGkSUr.json"
                  width="400"
                  height="350"
                  title="Search Not Found Animation"
                ></iframe>
                <p className="text-sm md:text-base font-medium text-gray-700 text-center">
                  Pencarian pertanyaan tidak ditemukan.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ScrollUp Button */}
      <ScrollUp />

      {/* Footer Section */}
      <Footer />
    </>
  );
}
