import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { RxCrossCircled } from "react-icons/rx";
import { IoIosArrowBack, IoMdArrowRoundBack } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import Footer from "../assets/components/Footer";
import ScrollUp from "../assets/components/ScrollUp";
import Loader from "../assets/components/Loader";
import FAQBackground from "../assets/images/FAQ Background.png";

export default function FormulirPenelitian() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 767 }); // Menggunakan media query untuk memeriksa jika perangkat adalah mobile
  const [isLoading, setIsLoading] = useState(false); // State untuk mengelola status loading

  // State untuk field Nomor Surat
  const [letterNumber, setLetterNumber] = useState("");
  const [isLetterNumberTouched, setIsLetterNumberTouched] = useState(false);
  const [isLetterNumberValid, setIsLetterNumberValid] = useState(true);

  // State untuk field Nama
  const [name, setName] = useState("");
  const [isNameTouched, setIsNameTouched] = useState(false);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isNameLengthValid, setIsNameLengthValid] = useState(true);

  // State untuk field Nama Peneliti
  const [researcherName, setResearcherName] = useState("");
  const [isResearcherNameTouched, setIsResearcherNameTouched] = useState(false);
  const [isResearcherNameValid, setIsResearcherNameValid] = useState(true);
  const [isResearcherNameLengthValid, setIsResearcherNameLengthValid] =
    useState(true);

  // State untuk field Alamat Rumah
  const [address, setAddress] = useState("");
  const [isAddressTouched, setIsAddressTouched] = useState(false);
  const [isAddressValid, setIsAddressValid] = useState(true);
  const [isAddressLengthValid, setIsAddressLengthValid] = useState(true);

  // State untuk field No. Telepon/Alamat Email
  const [inputValue, setInputValue] = useState("");
  const [isInputTouched, setIsInputTouched] = useState(false);
  const [isInputValid, setIsInputValid] = useState(true);

  // State untuk field Perguruan Tinggi/Instansi/Lembaga
  const [institution, setInstitution] = useState("");
  const [isInstitutionTouched, setIsInstitutionTouched] = useState(false);
  const [isInstitutionValid, setIsInstitutionValid] = useState(true);
  const [isInstitutionLengthValid, setIsInstitutionLengthValid] =
    useState(true);

  // State untuk field Pekerjaan
  const [occupation, setOccupation] = useState("");
  const [isOccupationTouched, setIsOccupationTouched] = useState(false);
  const [isOccupationValid, setIsOccupationValid] = useState(true);

  // State untuk field Judul Penelitian
  const [judulPenelitian, setJudulPenelitian] = useState("");
  const [isJudulPenelitianTouched, setIsJudulPenelitianTouched] =
    useState(false);
  const [isJudulPenelitianValid, setIsJudulPenelitianValid] = useState(true);

  // State untuk field Bidang Penelitian/Jurusan
  const [researchField, setResearchField] = useState("");
  const [isResearchFieldTouched, setIsResearchFieldTouched] = useState(false);
  const [isResearchFieldValid, setIsResearchFieldValid] = useState(true);

  // State untuk Tujuan Penelitian
  const [tujuanPenelitian, setTujuanPenelitian] = useState("");

  // State untuk field Dosen Pembimbing/Penanggung Jawab
  const [supervisorName, setSupervisorName] = useState("");
  const [isSupervisorTouched, setIsSupervisorTouched] = useState(false);
  const [isSupervisorValid, setIsSupervisorValid] = useState(true);

  // State untuk field Anggota Tim Peneliti
  const [teamMembers, setTeamMembers] = useState("");
  const [isTeamMembersTouched, setIsTeamMembersTouched] = useState(false);
  const [isTeamMembersValid, setIsTeamMembersValid] = useState(true);

  // State untuk field Waktu Penelitian
  const [researchPeriod, setResearchPeriod] = useState("");
  const [isResearchPeriodTouched, setIsResearchPeriodTouched] = useState(false);
  const [isResearchPeriodValid, setIsResearchPeriodValid] = useState(true);

  // State untuk Status Penelitian
  const [statusPenelitian, setStatusPenelitian] = useState("");

  // State untuk field Lokasi Penelitian
  const [researchLocation, setResearchLocation] = useState("");
  const [isResearchLocationTouched, setIsResearchLocationTouched] =
    useState(false);
  const [isResearchLocationValid, setIsResearchLocationValid] = useState(true);

  // State untuk checklist state Melampirkan
  const [isSuratPengantarChecked, setIsSuratPengantarChecked] = useState(false);
  const [isProposalChecked, setIsProposalChecked] = useState(false);
  const [isKTPChecked, setIsKTPChecked] = useState(false);

  // State untuk menyimpan file dalam format Binary
  const [suratPengantarFile, setSuratPengantarFile] = useState("");
  const [proposalFile, setProposalFile] = useState("");
  const [ktpFile, setKtpFile] = useState("");

  // State untuk mempratinjau file dan URL-nya
  const [suratPengantarPreview, setSuratPengantarPreview] = useState(null);
  const [proposalPreview, setProposalPreview] = useState(null);
  const [ktpPreview, setKtpPreview] = useState(null);

  // Refs untuk menyimpan URL yang dihasilkan
  const previewRefs = useRef({
    suratPengantarPreview: null,
    proposalPreview: null,
    ktpPreview: null,
  });

  // Fungsi untuk menangani perubahan input Nomor Surat
  const handleLetterNumberChange = (e) => {
    const value = e.target.value;
    setLetterNumber(value);

    // Validasi "tidak boleh kosong" hanya jika field sudah pernah disentuh atau input kosong
    if (isLetterNumberTouched || value.trim() === "") {
      setIsLetterNumberValid(value.trim().length > 0);
    }
  };

  const handleLetterNumberFocus = () => {
    setIsLetterNumberTouched(true);
  };

  const handleLetterNumberBlur = () => {
    // Validasi ulang saat blur jika input kosong
    if (letterNumber.trim() === "") {
      setIsLetterNumberValid(false);
    }
  };

  // Fungsi untuk menangani perubahan field Nama
  const handleNameChange = (e) => {
    const value = e.target.value;
    const sanitizedValue = value.replace(/\d/g, ""); // Menghapus angka
    setName(sanitizedValue);
    setIsNameLengthValid(sanitizedValue.length >= 3);
    setIsNameValid(sanitizedValue.length > 0);
  };

  const handleNameFocus = () => {
    setIsNameTouched(true);
  };

  const handleNameBlur = () => {
    if (name.trim() === "") {
      setIsNameValid(false);
      setIsNameLengthValid(true); // Reset validasi panjang
    }
  };

  // Fungsi untuk menangani perubahan filed Nama Peneliti
  const handleResearcherNameChange = (e) => {
    const value = e.target.value;
    const sanitizedValue = value.replace(/\d/g, ""); // Menghapus angka
    setResearcherName(sanitizedValue);
    setIsResearcherNameLengthValid(sanitizedValue.length >= 3);
    setIsResearcherNameValid(sanitizedValue.length > 0);
  };

  const handleResearcherNameFocus = () => {
    setIsResearcherNameTouched(true);
  };

  const handleResearcherNameBlur = () => {
    if (researcherName.trim() === "") {
      setIsResearcherNameValid(false);
      setIsResearcherNameLengthValid(true); // Reset validasi panjang
    }
  };

  // Fungsi untuk menangani perubahan field Alamat
  const handleAddressChange = (e) => {
    const value = e.target.value;
    setAddress(value);
    setIsAddressLengthValid(value.trim().length >= 10);
    setIsAddressValid(value.trim().length > 0);
  };

  const handleAddressFocus = () => {
    setIsAddressTouched(true);
  };

  // Fungsi untuk menangani blur pada input
  const handleAddressBlur = () => {
    if (address.trim() === "") {
      setIsAddressValid(false);
      setIsAddressLengthValid(true); // Reset validasi panjang
    } else {
      setIsAddressValid(true);
      setIsAddressLengthValid(address.trim().length >= 10);
    }
  };

  const handleInputFocus = () => {
    setIsInputTouched(true);
  };

  const handleInputBlur = () => {
    if (inputValue.trim() === "") {
      setIsInputValid(false);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    // Validasi input hanya jika field sudah pernah disentuh
    if (isInputTouched) {
      setIsInputValid(value.trim().length > 0);
    }
  };

  // Fungsi untuk menangani perubahan field Perguruan Tinggi/Instansi/Lembaga
  const handleInstitutionChange = (e) => {
    const value = e.target.value;
    setInstitution(value);
    setIsInstitutionLengthValid(value.trim().length >= 10);

    // Validasi input berdasarkan nilai saat ini dan status diklik
    if (isInstitutionTouched || value.trim() === "") {
      setIsInstitutionValid(value.trim().length > 0);
    }
  };

  const handleInstitutionFocus = () => {
    setIsInstitutionTouched(true);
  };

  const handleInstitutionBlur = () => {
    setIsInstitutionTouched(false);
    // Validasi ulang pada blur jika field-nya kosong
    if (institution.trim() === "") {
      setIsInstitutionValid(false);
    }
  };

  // Fungsi untuk menangani perubahan field Pekerjaan
  const handleOccupationChange = (e) => {
    const value = e.target.value;
    setOccupation(value);

    // Validasi input berdasarkan nilai saat ini dan status yang disentuh
    if (isOccupationTouched || value.trim() === "") {
      setIsOccupationValid(value.trim().length > 0);
    }
  };

  const handleOccupationFocus = () => {
    setIsOccupationTouched(true);
  };

  const handleOccupationBlur = () => {
    // Validasi ulang pada blur jika field-nya kosong
    if (occupation.trim() === "") {
      setIsOccupationValid(false);
    }
  };

  // Fungsi untuk menangani perubahan field Judul Penelitian
  const handleJudulPenelitianChange = (e) => {
    const value = e.target.value;
    setJudulPenelitian(value);

    // Validasi input berdasarkan nilai saat ini dan status yang disentuh
    if (isJudulPenelitianTouched || value.trim() === "") {
      setIsJudulPenelitianValid(value.trim().length > 0);
    }
  };

  const handleJudulPenelitianFocus = () => {
    setIsJudulPenelitianTouched(true);
  };

  const handleJudulPenelitianBlur = () => {
    // Validasi ulang pada blur jika field-nya kosong
    if (judulPenelitian.trim() === "") {
      setIsJudulPenelitianValid(false);
    }
  };

  // Fungsi untuk menangani perubahan field Bidang Penelitian
  const handleResearchFieldChange = (e) => {
    const value = e.target.value;
    setResearchField(value);

    // Validasi "tidak boleh kosong" hanya jika field sudah pernah disentuh atau input kosong
    if (isResearchFieldTouched || value.trim() === "") {
      setIsResearchFieldValid(value.trim().length > 0);
    }
  };

  const handleResearchFieldFocus = () => {
    setIsResearchFieldTouched(true);
  };

  const handleResearchFieldBlur = () => {
    // Validasi ulang saat blur jika input kosong
    if (researchField.trim() === "") {
      setIsResearchFieldValid(false);
    }
  };

  // Fungsi untuk menangani perubahan pilihan Tujuan Penelitian
  const handleTujuanPenelitianChange = (e) => {
    setTujuanPenelitian(e.target.value);
  };

  // Fungsi untuk menangani perubahan field Dosen Pembimbing/Penanggung Jawab
  const handleSupervisorChange = (e) => {
    const value = e.target.value;
    setSupervisorName(value);

    // Validasi "tidak boleh kosong" hanya jika field sudah pernah disentuh atau input kosong
    if (isSupervisorTouched || value.trim() === "") {
      setIsSupervisorValid(value.trim().length > 0);
    }
  };

  const handleSupervisorFocus = () => {
    setIsSupervisorTouched(true);
  };

  const handleSupervisorBlur = () => {
    // Validasi ulang saat blur jika input kosong
    if (supervisorName.trim() === "") {
      setIsSupervisorValid(false);
    }
  };

  // Fungsi untuk menangani perubahan field Anggota Tim Peneliti
  const handleTeamMembersChange = (e) => {
    const value = e.target.value;
    setTeamMembers(value);

    // Validasi input
    const isValid = value.trim() !== "" || value.trim() === "-";
    setIsTeamMembersValid(isValid);
  };

  // Fungsi untuk menangani fokus input
  const handleTeamMembersFocus = () => {
    setIsTeamMembersTouched(true);
  };

  // Fungsi untuk menangani blur input
  const handleTeamMembersBlur = () => {
    setIsTeamMembersTouched(false);
  };

  // Fungsi untuk menangani perubahan field Waktu Penelitian
  const handleResearchPeriodChange = (e) => {
    const value = e.target.value;
    setResearchPeriod(value);

    // Validasi "tidak boleh kosong" hanya jika field sudah pernah disentuh atau input kosong
    if (isResearchPeriodTouched || value.trim() === "") {
      setIsResearchPeriodValid(value.trim().length > 0);
    }
  };

  const handleResearchPeriodFocus = () => {
    setIsResearchPeriodTouched(true);
  };

  const handleResearchPeriodBlur = () => {
    // Validasi ulang saat blur jika input kosong
    if (researchPeriod.trim() === "") {
      setIsResearchPeriodValid(false);
    }
  };

  // Fungsi untuk menangani perubahan pilihan Status Penelitian
  const handleStatusPenelitianChange = (e) => {
    setStatusPenelitian(e.target.value);
  };

  // Fungsi untuk menangani perubahan input Lokasi Penelitian
  const handleResearchLocationChange = (e) => {
    const value = e.target.value;
    setResearchLocation(value);

    // Validasi "tidak boleh kosong" hanya jika field sudah pernah disentuh atau input kosong
    if (isResearchLocationTouched || value.trim() === "") {
      setIsResearchLocationValid(value.trim().length > 0);
    }
  };

  const handleResearchLocationFocus = () => {
    setIsResearchLocationTouched(true);
  };

  const handleResearchLocationBlur = () => {
    // Validasi ulang saat blur jika input kosong
    if (researchLocation.trim() === "") {
      setIsResearchLocationValid(false);
    }
  };

  // Fungsi untuk menangani perubahan file
  const handleFileChange = (e) => {
    const { name, files } = e.target; // Mengambil nama dan file dari event target
    const file = files[0]; // Mengambil file pertama dari array files
    // console.log("Cek file: ", file);

    if (!file) {
      // Jika file dibatalkan (tidak ada file yang dipilih)
      if (name === "suratPengantar") {
        setSuratPengantarFile(null);
        setSuratPengantarPreview(null);
        setIsSuratPengantarChecked(false);
      }
      if (name === "proposal") {
        setProposalFile(null);
        setProposalPreview(null);
        setIsProposalChecked(false);
      }
      if (name === "ktp") {
        setKtpFile(null);
        setKtpPreview(null);
        setIsKTPChecked(false);
      }
      return;
    }

    // Validasi ukuran file
    if (file && file.size > 10 * 1024 * 1024) {
      // Jika ukuran file lebih dari 10 MB, tampilkan pesan toast
      toast("Ukuran file tidak boleh lebih dari 10 MB!", {
        style: {
          background: "#FF0000",
          color: "#FFFFFF",
          borderRadius: "12px",
          fontSize: "14px",
          textAlign: "center",
          maxWidth: "900px",
        },
        position: "top-center",
        duration: 3000,
      });
      return;
    }

    // Membuat URL pratinjau file
    const previewUrl = URL.createObjectURL(file);

    // Menyimpan URL di refs untuk referensi di kemudian hari
    previewRefs.current[name] = previewUrl;

    // Memeriksa nama file dan menyimpan URL preview ke state yang sesuai
    if (name === "suratPengantar") {
      setSuratPengantarFile(file);
      setSuratPengantarPreview(previewUrl);
      setIsSuratPengantarChecked(true);
    } else if (name === "proposal") {
      setProposalFile(file);
      setProposalPreview(previewUrl);
      setIsProposalChecked(true);
    } else if (name === "ktp") {
      setKtpFile(file);
      setKtpPreview(previewUrl);
      setIsKTPChecked(true);
    }
  };

  // Fungsi untuk membersihkan URL pratinjau saat komponen di-unmount
  useEffect(() => {
    return () => {
      Object.values(previewRefs.current).forEach((url) => {
        if (url) URL.revokeObjectURL(url);
      });
    };
  }, []);

  // Fungsi untuk menangani tombol Kirim Data
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Menggunakan objek validasi untuk memudahkan pengecekan
    const validationErrors = {
      letterNumber: !letterNumber,
      name: !name,
      researcherName: !researcherName,
      address: !address,
      inputValue: !inputValue,
      institution: !institution,
      occupation: !occupation,
      judulPenelitian: !judulPenelitian,
      researchField: !researchField,
      tujuanPenelitian: !tujuanPenelitian,
      supervisorName: !supervisorName,
      teamMembers: !teamMembers,
      researchPeriod: !researchPeriod,
      statusPenelitian: !statusPenelitian,
      researchLocation: !researchLocation,
      attachments:
        !isSuratPengantarChecked || !isProposalChecked || !isKTPChecked,
    };

    // Menemukan kesalahan pertama dan menampilkan pesan yang sesuai
    const firstError = Object.keys(validationErrors).find(
      (key) => validationErrors[key]
    );

    if (firstError) {
      const errorMessages = {
        letterNumber: "Mohon isi kolom Nomor Surat!",
        name: "Mohon isi kolom Nama!",
        researcherName: "Mohon isi kolom Nama Peneliti!",
        address: "Mohon isi kolom Alamat Rumah!",
        inputValue: "Mohon isi kolom No. Telepon/Alamat Email!",
        institution: "Mohon isi kolom Perguruan Tinggi/Instansi/Lembaga!",
        occupation: "Mohon isi kolom Pekerjaan!",
        judulPenelitian: "Mohon isi kolom Judul Penelitian!",
        researchField: "Mohon isi kolom Bidang Penelitian/Jurusan!",
        tujuanPenelitian: "Mohon pilih Tujuan Penelitian!",
        supervisorName: "Mohon isi kolom Dosen Pembimbing/Penanggung Jawab!",
        teamMembers: "Mohon isi kolom Anggota Tim Peneliti!",
        researchPeriod: "Mohon isi kolom Waktu Penelitian!",
        statusPenelitian: "Mohon pilih Status Penelitian!",
        researchLocation: "Mohon isi kolom Lokasi Penelitian!",
        attachments: "Mohon lengkapi semua lampiran yang diperlukan!",
      };

      toast(errorMessages[firstError], {
        style: {
          background: "#FF0000",
          color: "#FFFFFF",
          borderRadius: "10px",
          fontSize: "14px",
          textAlign: "center",
          width: "full",
          maxWidth: "900px",
        },
        position: "top-center",
        duration: 3000,
      });
      return;
    }

    try {
      setIsLoading(true); // Tampilkan loader

      // Membuat FormData
      const formData = new FormData();
      formData.append("letterNumber", letterNumber);
      formData.append("name", name);
      formData.append("researcherName", researcherName);
      formData.append("address", address);
      formData.append("inputValue", inputValue);
      formData.append("institution", institution);
      formData.append("occupation", occupation);
      formData.append("judulPenelitian", judulPenelitian);
      formData.append("researchField", researchField);
      formData.append("tujuanPenelitian", tujuanPenelitian);
      formData.append("supervisorName", supervisorName);
      formData.append("teamMembers", teamMembers);
      formData.append("researchPeriod", researchPeriod);
      formData.append("statusPenelitian", statusPenelitian);
      formData.append("researchLocation", researchLocation);

      // Hanya menambahkan file jika file ada
      if (isSuratPengantarChecked && suratPengantarFile) {
        formData.append("suratPengantarFile", suratPengantarFile);
      }
      if (isProposalChecked && proposalFile) {
        formData.append("proposalFile", proposalFile);
      }
      if (isKTPChecked && ktpFile) {
        formData.append("ktpFile", ktpFile);
      }

      // // Mengecek data yang dikirim
      // console.log("Data ajuan penelitian:", {
      //   letterNumber,
      //   name,
      //   researcherName,
      //   address,
      //   inputValue,
      //   institution,
      //   occupation,
      //   judulPenelitian,
      //   researchField,
      //   tujuanPenelitian,
      //   supervisorName,
      //   teamMembers,
      //   researchPeriod,
      //   statusPenelitian,
      //   researchLocation,
      //   suratPengantarFile,
      //   proposalFile,
      //   ktpFile,
      // });

      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_SERVER}/api/penelitian`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // Setelah proses pengiriman data selesai, hilangkan Loader
      setIsLoading(false);

      if (response?.status === 200) {
        toast.success("Terima kasih, data ajuan Anda berhasil disimpan!", {
          icon: null,
          style: {
            background: "#28A745",
            color: "#FFFFFF",
            borderRadius: "12px",
            fontSize: "14px",
            textAlign: "center",
            maxWidth: "900px",
          },
          position: "top-center",
          duration: 3000,
        });
        setTimeout(() => {
          navigate("/proses-ajuan");
        }, 3000);
      }
    } catch (error) {
      toast.error(
        "Maaf, terjadi kesalahan saat menyimpan data. Silakan coba lagi.",
        {
          icon: null,
          style: {
            background: "#FF0000",
            color: "#FFFFFF",
            borderRadius: "12px",
            fontSize: "14px",
            textAlign: "center",
            maxWidth: "900px",
          },
          position: "top-center",
          duration: 3000,
        }
      );
      setIsLoading(false); // Hilangkan Loader jika terjadi error
      console.log(
        "Cek error: ",
        error.response?.data,
        error.response?.status,
        error.message
      );
    }
  };

  // Menggulir ke atas saat komponen dimuat
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#EEF5FF]">
      {/* Header Section */}
      <div
        className="text-center mb-5 p-5 md:p-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${FAQBackground})`,
        }}
      >
        <h2 className="text-xl md:text-2xl font-bold">
          Ajuan Permohonan Rekomendasi Penelitian, Observasi, Skripsi, Tesis,
          atau Desertasi
        </h2>
      </div>

      {/* Back Button */}
      <div className={`ml-5 pt-1 ${isMobile ? "mb-5" : "mb-10 lg:w-1/12"}`}>
        <Link to="/persyaratan-perizinan-rekomendasi-penelitian">
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

      {/* Form Section */}
      <div
        className={`max-w-4xl mx-auto bg-white ${
          isMobile ? "p-6 mb-10" : "p-8 mb-20"
        } rounded-lg shadow-lg`}
      >
        <h3 className="text-base md:text-lg font-bold mb-10">
          Formulir Permohonan Rekomendasi Penelitian/Survei Badan Kesatuan
          Bangsa dan Politik Provinsi Jawa timur
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1 text-sm md:text-base">
              Nomor Surat <span className="text-[#FF0000]">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                className={`w-full bg-transparent border-b-2 text-sm md:text-base text-gray-900 py-2 px-0 focus:outline-none focus:ring-0 ${
                  !isLetterNumberValid &&
                  (isLetterNumberTouched || letterNumber.trim() === "")
                    ? "border-[#FF0000]"
                    : "border-gray-300 focus:border-[#2A629A]"
                }`}
                placeholder="Nomor Surat (Sesuai dengan Surat Pengantar dari Instansi)"
                value={letterNumber}
                onFocus={handleLetterNumberFocus}
                onBlur={handleLetterNumberBlur}
                onChange={handleLetterNumberChange}
              />
              {!isLetterNumberValid &&
                (isLetterNumberTouched || letterNumber.trim() === "") && (
                  <RxCrossCircled className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[#FF0000] w-[20px] h-[20px] mr-2" />
                )}
            </div>
            {!isLetterNumberValid &&
              (isLetterNumberTouched || letterNumber.trim() === "") && (
                <div className="flex items-center text-[#FF0000] text-xs mt-1 text-left">
                  <p>Nomor surat tidak boleh kosong</p>
                </div>
              )}
          </div>

          <div>
            <label className="block font-medium mb-1 text-sm md:text-base">
              Nama (Nama yang Mewakili/Mengajukan){" "}
              <span className="text-[#FF0000]">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                className={`w-full bg-transparent border-b-2 text-sm md:text-base text-gray-900 py-2 px-0 focus:outline-none focus:ring-0 ${
                  !isNameValid || !isNameLengthValid
                    ? "border-[#FF0000]"
                    : "border-gray-300 focus:border-[#2A629A]"
                }`}
                placeholder="Nama Lengkap"
                value={name}
                onFocus={handleNameFocus}
                onBlur={handleNameBlur}
                onChange={handleNameChange}
              />
              {(!isNameValid || !isNameLengthValid) && (
                <RxCrossCircled className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[#FF0000] w-[20px] h-[20px] mr-2" />
              )}
            </div>
            {!isNameValid && isNameTouched && (
              <div className="flex items-center text-[#FF0000] text-xs mt-1 text-left">
                <p>Nama tidak boleh kosong</p>
              </div>
            )}
            {isNameTouched && name.trim() !== "" && !isNameLengthValid && (
              <div className="flex items-center text-[#FF0000] text-xs mt-1 text-left">
                <p>Nama berisi minimal 3 huruf</p>
              </div>
            )}
          </div>

          <div>
            <label className="block font-medium mb-1 text-sm md:text-base">
              Nama Peneliti (Sesuai dengan Surat Pengantar){" "}
              <span className="text-[#FF0000]">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                className={`w-full bg-transparent border-b-2 text-sm md:text-base text-gray-900 py-2 px-0 focus:outline-none focus:ring-0 ${
                  !isResearcherNameValid || !isResearcherNameLengthValid
                    ? "border-[#FF0000]"
                    : "border-gray-300 focus:border-[#2A629A]"
                }`}
                placeholder="Nama Peneliti"
                value={researcherName}
                onFocus={handleResearcherNameFocus}
                onBlur={handleResearcherNameBlur}
                onChange={handleResearcherNameChange}
              />
              {(!isResearcherNameValid || !isResearcherNameLengthValid) && (
                <RxCrossCircled className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[#FF0000] w-[20px] h-[20px] mr-2" />
              )}
            </div>
            {!isResearcherNameValid && isResearcherNameTouched && (
              <div className="flex items-center text-[#FF0000] text-xs mt-1 text-left">
                <p>Nama Peneliti tidak boleh kosong</p>
              </div>
            )}
            {isResearcherNameTouched &&
              researcherName.trim() !== "" &&
              !isResearcherNameLengthValid && (
                <div className="flex items-center text-[#FF0000] text-xs mt-1 text-left">
                  <p>Nama Peneliti harus berisi minimal 3 huruf</p>
                </div>
              )}
          </div>

          <div>
            <label className="block font-medium mb-1 text-sm md:text-base">
              Alamat Rumah (Sesuai dengan KTP, sertakan RT, RW, Kelurahan,
              Kecamatan, dan Kota)
              <span className="text-[#FF0000]">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                className={`w-full bg-transparent border-b-2 text-sm md:text-base text-gray-900 py-2 px-0 focus:outline-none focus:ring-0 ${
                  (!isAddressValid || !isAddressLengthValid) && isAddressTouched
                    ? "border-[#FF0000]"
                    : "border-gray-300 focus:border-[#2A629A]"
                }`}
                placeholder="Contoh: JL. Melati V/20 RT. 005 RW. 010 Kel. Bunga Kec. Gading Kota Kembang"
                value={address}
                onFocus={handleAddressFocus}
                onBlur={handleAddressBlur}
                onChange={handleAddressChange}
              />
              {(!isAddressValid || !isAddressLengthValid) &&
                isAddressTouched && (
                  <RxCrossCircled className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[#FF0000] w-[20px] h-[20px] mr-2" />
                )}
            </div>
            {!isAddressValid && isAddressTouched && (
              <div className="flex items-center text-[#FF0000] text-xs mt-1 text-left">
                <p>Alamat tidak boleh kosong</p>
              </div>
            )}
            {isAddressTouched &&
              address.trim() !== "" &&
              !isAddressLengthValid && (
                <div className="flex items-center text-[#FF0000] text-xs mt-1 text-left">
                  <p>Alamat berisi minimal 10 karakter</p>
                </div>
              )}
          </div>

          <div>
            <label className="block font-medium mb-1 text-sm md:text-base">
              No. Telepon/Alamat Email <span className="text-[#FF0000]">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                className={`w-full bg-transparent border-b-2 text-sm md:text-base text-gray-900 py-2 px-0 focus:outline-none focus:ring-0 ${
                  !isInputValid && isInputTouched
                    ? "border-[#FF0000]"
                    : "border-gray-300 focus:border-[#2A629A]"
                }`}
                placeholder="No. Telepon/Alamat Email"
                value={inputValue}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onChange={handleInputChange}
              />
              {!isInputValid && isInputTouched && (
                <RxCrossCircled className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[#FF0000] w-[20px] h-[20px] mr-2" />
              )}
            </div>
            {!isInputValid && isInputTouched && (
              <div className="flex items-center text-[#FF0000] text-xs mt-1 text-left">
                <p>No. Telepon/Alamat Email tidak boleh kosong</p>
              </div>
            )}
          </div>

          <div>
            <label className="block font-medium mb-1 text-sm md:text-base">
              Perguruan Tinggi/Instansi/Lembaga{" "}
              <span className="text-[#FF0000]">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                className={`w-full bg-transparent border-b-2 text-sm md:text-base text-gray-900 py-2 px-0 focus:outline-none focus:ring-0 ${
                  (!isInstitutionValid || !isInstitutionLengthValid) &&
                  (isInstitutionTouched || institution.trim() === "")
                    ? "border-[#FF0000]"
                    : "border-gray-300 focus:border-[#2A629A]"
                }`}
                placeholder="Perguruan Tinggi/Instansi/Lembaga"
                value={institution}
                onFocus={handleInstitutionFocus}
                onBlur={handleInstitutionBlur}
                onChange={handleInstitutionChange}
              />
              {(!isInstitutionValid || !isInstitutionLengthValid) && (
                <RxCrossCircled className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[#FF0000] w-[20px] h-[20px] mr-2" />
              )}
            </div>
            {!isInstitutionValid &&
              (isInstitutionTouched || institution.trim() === "") && (
                <div className="flex items-center text-[#FF0000] text-xs mt-1 text-left">
                  <p>Perguruan Tinggi/Instansi/Lembaga tidak boleh kosong</p>
                </div>
              )}
            {isInstitutionTouched &&
              institution.trim() !== "" &&
              !isInstitutionLengthValid && (
                <div className="flex items-center text-[#FF0000] text-xs mt-1 text-left">
                  <p>
                    Perguruan Tinggi/Instansi/Lembaga harus berisi minimal 10
                    huruf
                  </p>
                </div>
              )}
          </div>

          <div>
            <label className="block font-medium mb-1 text-sm md:text-base">
              Pekerjaan (Diisi sesuai dengan KTP){" "}
              <span className="text-[#FF0000]">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                className={`w-full bg-transparent border-b-2 text-sm md:text-base text-gray-900 py-2 px-0 focus:outline-none focus:ring-0 ${
                  !isOccupationValid &&
                  (isOccupationTouched || occupation.trim() === "")
                    ? "border-[#FF0000]"
                    : "border-gray-300 focus:border-[#2A629A]"
                }`}
                placeholder="Contoh: Pelajar/Mahasiswa"
                value={occupation}
                onFocus={handleOccupationFocus}
                onBlur={handleOccupationBlur}
                onChange={handleOccupationChange}
              />
              {!isOccupationValid &&
                (isOccupationTouched || occupation.trim() === "") && (
                  <RxCrossCircled className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[#FF0000] w-[20px] h-[20px] mr-2" />
                )}
            </div>
            {!isOccupationValid &&
              (isOccupationTouched || occupation.trim() === "") && (
                <div className="flex items-center text-[#FF0000] text-xs mt-1 text-left">
                  <p>Pekerjaan tidak boleh kosong</p>
                </div>
              )}
          </div>

          <div>
            <label className="block font-medium mb-1 text-sm md:text-base">
              Judul Penelitian <span className="text-[#FF0000]">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                className={`w-full bg-transparent border-b-2 text-sm md:text-base text-gray-900 py-2 px-0 focus:outline-none focus:ring-0 ${
                  !setIsJudulPenelitianValid &&
                  (isJudulPenelitianTouched || judulPenelitian.trim() === "")
                    ? "border-[#FF0000]"
                    : "border-gray-300 focus:border-[#2A629A]"
                }`}
                placeholder="Judul Penelitian"
                value={judulPenelitian}
                onFocus={handleJudulPenelitianFocus}
                onBlur={handleJudulPenelitianBlur}
                onChange={handleJudulPenelitianChange}
              />
              {!isJudulPenelitianValid &&
                (isJudulPenelitianTouched || judulPenelitian.trim() === "") && (
                  <RxCrossCircled className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[#FF0000] w-[20px] h-[20px] mr-2" />
                )}
            </div>
            {!isJudulPenelitianValid &&
              (isJudulPenelitianTouched || judulPenelitian.trim() === "") && (
                <div className="flex items-center text-[#FF0000] text-xs mt-1 text-left">
                  <p>Judul Penelitian tidak boleh kosong</p>
                </div>
              )}
          </div>

          <div>
            <label className="block font-medium mb-1 text-sm md:text-base">
              Bidang Penelitian (Jurusan){" "}
              <span className="text-[#FF0000]">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                className={`w-full bg-transparent border-b-2 text-sm md:text-base text-gray-900 py-2 px-0 focus:outline-none focus:ring-0 ${
                  !isResearchFieldValid &&
                  (isResearchFieldTouched || researchField.trim() === "")
                    ? "border-[#FF0000]"
                    : "border-gray-300 focus:border-[#2A629A]"
                }`}
                placeholder="Bidang Penelitian (Jurusan)"
                value={researchField}
                onFocus={handleResearchFieldFocus}
                onBlur={handleResearchFieldBlur}
                onChange={handleResearchFieldChange}
              />
              {!isResearchFieldValid &&
                (isResearchFieldTouched || researchField.trim() === "") && (
                  <RxCrossCircled className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[#FF0000] w-[20px] h-[20px] mr-2" />
                )}
            </div>
            {!isResearchFieldValid &&
              (isResearchFieldTouched || researchField.trim() === "") && (
                <div className="flex items-center text-[#FF0000] text-xs mt-1 text-left">
                  <p>Bidang Penelitian (Jurusan) tidak boleh kosong</p>
                </div>
              )}
          </div>

          <div>
            <label className="block font-medium mb-1 text-sm md:text-base">
              Tujuan Penelitian <span className="text-[#FF0000]">*</span>
            </label>
            {/* <div className="flex space-x-4 mt-2"> */}
            <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-12 mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-[#2A629A] border-gray-300"
                  name="tujuanPenelitian"
                  value="Skripsi"
                  onChange={handleTujuanPenelitianChange}
                />
                <span className="ml-2 text-sm md:text-base text-gray-900">
                  Skripsi
                </span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-[#2A629A] border-gray-300"
                  name="tujuanPenelitian"
                  value="Tesis"
                  onChange={handleTujuanPenelitianChange}
                />
                <span className="ml-2 text-sm md:text-base text-gray-900">
                  Tesis
                </span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-[#2A629A] border-gray-300"
                  name="tujuanPenelitian"
                  value="Penelitian"
                  onChange={handleTujuanPenelitianChange}
                />
                <span className="ml-2 text-sm md:text-base text-gray-900">
                  Penelitian
                </span>
              </label>
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1 text-sm md:text-base">
              Dosen Pembimbing/Penanggung Jawab{" "}
              <span className="text-[#FF0000]">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                className={`w-full bg-transparent border-b-2 text-sm md:text-base text-gray-900 py-2 px-0 focus:outline-none focus:ring-0 ${
                  !isSupervisorValid &&
                  (isSupervisorTouched || supervisorName.trim() === "")
                    ? "border-[#FF0000]"
                    : "border-gray-300 focus:border-[#2A629A]"
                }`}
                placeholder="Nama Lengkap beserta Gelar"
                value={supervisorName}
                onFocus={handleSupervisorFocus}
                onBlur={handleSupervisorBlur}
                onChange={handleSupervisorChange}
              />
              {!isSupervisorValid &&
                (isSupervisorTouched || supervisorName.trim() === "") && (
                  <RxCrossCircled className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[#FF0000] w-[20px] h-[20px] mr-2" />
                )}
            </div>
            {!isSupervisorValid &&
              (isSupervisorTouched || supervisorName.trim() === "") && (
                <div className="flex items-center text-[#FF0000] text-xs mt-1 text-left">
                  <p>Dosen Pembimbing/Penanggung Jawab tidak boleh kosong</p>
                </div>
              )}
          </div>

          <div>
            <label className="block font-medium mb-1 text-sm md:text-base">
              Anggota Tim Peneliti (Bila Tidak Ada, Isi dengan "-"){" "}
              <span className="text-[#FF0000]">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                className={`w-full bg-transparent border-b-2 text-sm md:text-base text-gray-900 py-2 px-0 focus:outline-none focus:ring-0 ${
                  !isTeamMembersValid && isTeamMembersTouched
                    ? "border-[#FF0000]"
                    : "border-gray-300 focus:border-[#2A629A]"
                }`}
                placeholder="Nama Lengkap Anggota Tim Peneliti"
                value={teamMembers}
                onFocus={handleTeamMembersFocus}
                onBlur={handleTeamMembersBlur}
                onChange={handleTeamMembersChange}
              />
              {!isTeamMembersValid && isTeamMembersTouched && (
                <RxCrossCircled className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[#FF0000] w-[20px] h-[20px] mr-2" />
              )}
            </div>
            {!isTeamMembersValid && isTeamMembersTouched && (
              <div className="flex items-center text-[#FF0000] text-xs mt-1 text-left">
                <p>
                  Anggota Tim Peneliti tidak boleh kosong atau hanya berisi
                  tanda '-'
                </p>
              </div>
            )}
          </div>

          <div>
            <label className="block font-medium mb-1 text-sm md:text-base">
              Waktu Penelitian (Sertakan Tanggal, Bulan, dan Tahun){" "}
              <span className="text-[#FF0000]">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                className={`w-full bg-transparent border-b-2 text-sm md:text-base text-gray-900 py-2 px-0 focus:outline-none focus:ring-0 ${
                  !isResearchPeriodValid &&
                  (isResearchPeriodTouched || researchPeriod.trim() === "")
                    ? "border-[#FF0000]"
                    : "border-gray-300 focus:border-[#2A629A]"
                }`}
                placeholder="Contoh: 20 Agustus 2024 - 20 Desember 2024"
                value={researchPeriod}
                onFocus={handleResearchPeriodFocus}
                onBlur={handleResearchPeriodBlur}
                onChange={handleResearchPeriodChange}
              />
              {!isResearchPeriodValid &&
                (isResearchPeriodTouched || researchPeriod.trim() === "") && (
                  <RxCrossCircled className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[#FF0000] w-[20px] h-[20px] mr-2" />
                )}
            </div>
            {!isResearchPeriodValid &&
              (isResearchPeriodTouched || researchPeriod.trim() === "") && (
                <div className="flex items-center text-[#FF0000] text-xs mt-1 text-left">
                  <p>Waktu Penelitian tidak boleh kosong</p>
                </div>
              )}
          </div>

          <div>
            <label className="block font-medium mb-1 text-sm md:text-base">
              Status Penelitian <span className="text-[#FF0000]">*</span>
            </label>
            {/* <div className="flex space-x-4 mt-2"> */}
            <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-12 mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-[#2A629A] border-gray-300"
                  name="statusPenelitian"
                  value="Baru"
                  onChange={handleStatusPenelitianChange}
                />
                <span className="ml-2 text-sm md:text-base text-gray-900">
                  Baru
                </span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-[#2A629A] border-gray-300"
                  name="statusPenelitian"
                  value="Perpanjangan"
                  onChange={handleStatusPenelitianChange}
                />
                <span className="ml-2 text-sm md:text-base text-gray-900">
                  Perpanjangan
                </span>
              </label>
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1 text-sm md:text-base">
              Lokasi Penelitian (Instansi/Mitra/Lembaga/Sekolah){" "}
              <span className="text-[#FF0000]">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                className={`w-full bg-transparent border-b-2 text-sm md:text-base text-gray-900 py-2 px-0 focus:outline-none focus:ring-0 ${
                  !isResearchLocationValid &&
                  (isResearchLocationTouched || researchLocation.trim() === "")
                    ? "border-[#FF0000]"
                    : "border-gray-300 focus:border-[#2A629A]"
                }`}
                placeholder="Lokasi Penelitian"
                value={researchLocation}
                onFocus={handleResearchLocationFocus}
                onBlur={handleResearchLocationBlur}
                onChange={handleResearchLocationChange}
              />
              {!isResearchLocationValid &&
                (isResearchLocationTouched ||
                  researchLocation.trim() === "") && (
                  <RxCrossCircled className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[#FF0000] w-[20px] h-[20px] mr-2" />
                )}
            </div>
            {!isResearchLocationValid &&
              (isResearchLocationTouched || researchLocation.trim() === "") && (
                <div className="flex items-center text-[#FF0000] text-xs mt-1 text-left">
                  <p>Lokasi Penelitian tidak boleh kosong</p>
                </div>
              )}
          </div>

          <div>
            <label className="block font-medium mb-1 text-sm md:text-base">
              Melampirkan: <span className="text-[#FF0000]">*</span>
            </label>
            <div className="space-y-2">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-center mb-2 md:mb-0">
                  <input
                    type="checkbox"
                    name="suratPengantar"
                    className="form-checkbox mr-2"
                    checked={isSuratPengantarChecked}
                    readOnly
                  />
                  <span className="text-sm md:text-base">
                    Surat Pengantar Instansi/Lembaga
                  </span>
                </div>
                <div className="flex items-center w-full md:w-2/5">
                  <input
                    type="file"
                    name="suratPengantar"
                    className="form-file-input w-full text-sm"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  />
                  {isSuratPengantarChecked && suratPengantarFile && (
                    <a
                      href={suratPengantarPreview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center ml-2 text-[#003285] hover:text-[#86B6F6] hover:underline text-sm md:text-base"
                    >
                      <FaEye size={20} className="mr-1" />
                      Pratinjau
                    </a>
                  )}
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-center mb-2 md:mb-0">
                  <input
                    type="checkbox"
                    name="proposal"
                    className="form-checkbox mr-2"
                    checked={isProposalChecked}
                    readOnly
                  />
                  <span className="text-sm md:text-base">Proposal</span>
                </div>
                <div className="flex items-center w-full md:w-2/5">
                  <input
                    type="file"
                    name="proposal"
                    className="form-file-input w-full text-sm"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                  />
                  {isProposalChecked && proposalFile && (
                    <a
                      href={proposalPreview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center ml-2 text-[#003285] hover:text-[#86B6F6] hover:underline text-sm md:text-base"
                    >
                      <FaEye size={20} className="mr-1" />
                      Pratinjau
                    </a>
                  )}
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-center mb-2 md:mb-0">
                  <input
                    type="checkbox"
                    name="ktp"
                    className="form-checkbox mr-2"
                    checked={isKTPChecked}
                    readOnly
                  />
                  <span className="text-sm md:text-base">
                    <span className="text-sm md:text-base italic">
                      Foto copy
                    </span>{" "}
                    KTP/Identitas (Seluruh Anggota)
                  </span>
                </div>
                <div className="flex items-center w-full md:w-2/5">
                  <input
                    type="file"
                    name="ktp"
                    className="form-file-input w-full text-sm"
                    onChange={handleFileChange}
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                  {isKTPChecked && ktpFile && (
                    <a
                      href={ktpPreview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center ml-2 text-[#003285] hover:text-[#86B6F6] hover:underline text-sm md:text-base"
                    >
                      <FaEye size={20} className="mr-1" />
                      Pratinjau
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="text-end">
            <button
              type="submit"
              className="mt-4 bg-[#2A629A] text-white text-sm md:text-base font-medium px-5 py-2 rounded-full hover:bg-[#003285] transition duration-300"
            >
              Kirim Data
            </button>
          </div>
        </form>
      </div>

      {/* Loader Section */}
      <div>
        {isLoading && (
          <div
            className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-y-scroll transition-opacity duration-300  ${
              isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div
              className={`relative p-4 w-full max-w-3xl max-h-full transform transition-transform duration-300 ease-in-out ${
                isLoading ? "translate-y-0" : "-translate-y-full"
              }`}
            >
              <Loader />
            </div>
          </div>
        )}
      </div>

      {/* ScrollUp Button */}
      <ScrollUp />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
