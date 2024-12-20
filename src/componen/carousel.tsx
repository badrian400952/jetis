import React, { ReactNode, useEffect, useState } from "react";

// Interface Slide mendefinisikan tipe data untuk setiap slide
interface Slide {
    id: number; // ID unik untuk setiap slide
    text: string; // Teks utama yang ditampilkan pada slide
    des: string; // Deskripsi tambahan pada slide
    imageUrl?: string; // URL gambar opsional untuk slide
}

// Interface CarouselProps mendefinisikan tipe data untuk props yang diterima oleh komponen Carousel
interface CarouselProps {
    slides: Slide[]; // Daftar slides yang akan ditampilkan
    background?: { imageUrl: string }[]; // Daftar latar belakang yang dapat digunakan untuk setiap slide
    className?: string; // Kelas tambahan untuk styling eksternal
    card?: { content: ReactNode }[]; // Konten kartu opsional yang akan ditampilkan dalam setiap slide
}

// Komponen Carousel menerima props yang telah didefinisikan sebelumnya
const Carousel: React.FC<CarouselProps> = ({ slides, background, className, card }) => {
    const [currentIndex, setCurrentIndex] = useState(0); // State untuk menyimpan slide yang sedang aktif

    // Fungsi untuk mendapatkan warna acak sebagai latar belakang jika tidak ada gambar latar belakang
    const getRandomColor = () => {
        const colors = ['#FF5733', '#33FF57', '#3357FF', '#F5F533', '#FF33F5'];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    // Fungsi untuk berpindah ke slide tertentu, baik maju atau mundur
    const goToSlide = (index: number) => {
        if (index < 0) {
            setCurrentIndex(slides.length - 1); // Jika index lebih kecil dari 0, pindah ke slide terakhir
        } else if (index >= slides.length) {
            setCurrentIndex(0); // Jika index lebih besar atau sama dengan jumlah slide, pindah ke slide pertama
        } else {
            setCurrentIndex(index); // Jika index valid, pindah ke slide tersebut
        }
    };

    // useEffect untuk menambahkan event listener pada keyboard untuk navigasi slide menggunakan tombol panah kiri dan kanan
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "ArrowLeft") {
                goToSlide(currentIndex - 1); // Pindah ke slide sebelumnya saat tombol panah kiri ditekan
            } else if (event.key === "ArrowRight") {
                goToSlide(currentIndex + 1); // Pindah ke slide berikutnya saat tombol panah kanan ditekan
            }
        };

        window.addEventListener("keydown", handleKeyDown); // Menambahkan event listener
        return () => {
            window.removeEventListener("keydown", handleKeyDown); // Menghapus event listener saat komponen di-unmount
        };
    }, [currentIndex, slides.length]);

    return (
        <div className={className} style={{ maxWidth: "1600px" }}>
            <div className="carousel-inner relative overflow-hidden w-full">
                {/* Mapping slides untuk menampilkan setiap slide */}
                {slides.map((slide, index) => (
                    <React.Fragment key={slide.id}>
                        {/* Input radio untuk menentukan slide mana yang aktif */}
                        <input
                            className="carousel-open"
                            type="radio"
                            id={`carousel-${index + 1}`}
                            name="carousel"
                            aria-hidden="true"
                            hidden
                            checked={currentIndex === index} // Menandai slide yang aktif
                            readOnly
                        />

                        {/* Bagian konten slide */}
                        <div
                            className={`carousel-item absolute ${currentIndex === index ? "opacity-100" : "opacity-0"}`}
                            style={{
                                height: "80vh", // Tinggi slide
                                backgroundImage: `url('${background?.[index]?.imageUrl || slide.imageUrl || ""}')`, // Gambar latar belakang
                                backgroundSize: "cover", // Menutup seluruh area dengan gambar
                                backgroundPosition: "center", // Menempatkan gambar di tengah
                                ...(!background && { backgroundColor: getRandomColor(), }), // Menentukan warna acak jika tidak ada gambar latar belakang
                                transition: "opacity 0.5s ease", // Animasi transisi
                            }}
                        >
                            {/* Konten teks pada slide */}
                            <div className="absolute top-0 left-0 w-full h-full text-center text-white p-16 bg-black bg-opacity-50 flex items-center justify-center">
                                <div className="max-w-3xl">
                                    {card && card[index].content} {/* Jika ada konten kartu, tampilkan */}
                                </div>
                            </div>

                            {/* Jika tidak ada konten kartu, tampilkan teks default */}
                            {
                                !card && (
                                    <div className="absolute top-0 left-0 w-full h-full text-center text-white p-16 bg-black bg-opacity-50 flex items-center justify-center">
                                        <div className="max-w-3xl">
                                            <h2 className="text-3xl font-bold">{slide.text}</h2>
                                            <p className="text-lg">{slide.des}</p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>

                        {/* Kontrol untuk berpindah antar slide (prev dan next) */}
                        <label
                            onClick={() => goToSlide(currentIndex - 1)} // Pindah ke slide sebelumnya
                            htmlFor={`carousel-${index === 0 ? slides.length : index}`}
                            className={`prev control-${index + 1} w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-opacity-20 bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto`}
                        >
                            ‹
                        </label>
                        <label
                            onClick={() => goToSlide(currentIndex + 1)} // Pindah ke slide berikutnya
                            htmlFor={`carousel-${(index + 1) % slides.length === 0 ? 1 : index + 2}`}
                            className={`next control-${index + 1} w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-opacity-20 bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto`}
                        >
                            ›
                        </label>
                    </React.Fragment>
                ))}

                {/* Indikator slide (titik untuk memilih slide) */}
                <ol className="carousel-indicators">
                    {slides.map((_, index) => (
                        <li key={index} className="inline-block mr-3">
                            <label
                                onClick={() => goToSlide(index)} // Pindah ke slide saat indikator diklik
                                htmlFor={`carousel-${index + 1}`}
                                className="carousel-bullet cursor-pointer block text-4xl text-gray-400 hover:text-gray-900"
                            >
                                •
                            </label>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default Carousel;
