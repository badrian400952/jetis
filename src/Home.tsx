import Carousel from "./componen/carousel";

const Home = () => {
    //Data tiap slide
    const slides = [
        {
            id: 1,
            text: "Jatis Mobile (JATI) Bekerjasama dengan Tencent Cloud Menghadirkan Layanan Cloud untuk Semua Sektor Industri di Indonesia",
            des: "Jatis Mobile (JATI) mengumumkan kemitraan strategisnya dengan Tencent Cloud, bisnis cloud dari perusahaan teknologi global Tencent untuk menyediakan layanan cloud yang stabil dan aman untuk berbagai industri dan membantu bisnis dalam mengatasi tantangan digital di Indonesia.",
        },
        {
            id: 2,
            text: "Kolaborasi Jatis Mobile(JATI) dan Tangkas Untuk Mendorong Akselerasi Energi Bersih dengan Pendistribusian Melalui Beranda Toko",
            des: "PT Informasi Teknologi Indonesia Tbk, (Jatis Mobile, dengan kode emiten JATI) menggandeng PT The Agung Pamungkas(Tangkas) untuk memasuki bisnis Electric Vehicle(“EV”) atau kendaraan listrik yang berfokus pada distribusi penjualan motor listrik dan sepeda listrik.",
        },
        {
            id: 3,
            text: "EmpowerTransformInnovate Your Business with Jatis Mobile's Next Generation Technology Solutions",
            des: "PT Informasi Teknologi Indonesia Tbk, (Jatis Mobile, dengan kode emiten JATI) menggandeng PT The Agung Pamungkas(Tangkas) untuk memasuki bisnis Electric Vehicle(“EV”) atau kendaraan listrik yang berfokus pada distribusi penjualan motor listrik dan sepeda listrik.",
        },
    ];
    // jika untuk default slide menggunakan background color secara random dan jika ingin menambahkan gambar bisa menggunakan array
    const background = [
        { imageUrl: 'https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?crop=entropy&cs=srgb&fm=jpg&q=85' },
        { imageUrl: 'https://images.unsplash.com/photo-1617434108848-6a1e827124ef?crop=entropy&cs=srgb&fm=jpg&q=85' },
        { imageUrl: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?crop=entropy&cs=srgb&fm=jpg&q=85' },
    ];

    return (
        <div>
            <Carousel
                // props Slide
                slides={slides}
                // props background Carousel
                background={background}
                // props kontent tiap slide
                card={[
                    {
                        content: (
                            <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg border border-gray-200">
                                <div className="p-4">
                                    <h2 className="text-lg font-semibold text-gray-800">Nama Barang</h2>
                                    <p className="text-gray-600 text-sm">Deskripsi singkat tentang barang</p>
                                    <div className="mt-4">
                                        <span className="text-gray-500 text-sm">Harga:</span>
                                        <p className="text-2xl font-bold text-green-600">Rp 2.500.000</p>
                                    </div>
                                    <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">
                                        Beli Sekarang
                                    </button>
                                </div>
                            </div>
                        ),
                    },
                    {
                        content: (
                            <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg border border-gray-200">
                                <div className="p-4">
                                    <h2 className="text-lg font-semibold text-gray-800">Nama Barang</h2>
                                    <p className="text-gray-600 text-sm">Deskripsi singkat tentang barang</p>
                                    <div className="mt-4">
                                        <span className="text-gray-500 text-sm">Harga:</span>
                                        <p className="text-2xl font-bold text-green-600">Rp 6.500.000</p>
                                    </div>
                                    <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">
                                        Beli Sekarang
                                    </button>
                                </div>
                            </div>
                        ),
                    },
                    {
                        content: (
                            <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg border border-gray-200">
                                <div className="p-4">
                                    <h2 className="text-lg font-semibold text-gray-800">Nama Barang</h2>
                                    <p className="text-gray-600 text-sm">Deskripsi singkat tentang barang</p>
                                    <div className="mt-4">
                                        <span className="text-gray-500 text-sm">Harga:</span>
                                        <p className="text-2xl font-bold text-green-600">Rp 1.500.000</p>
                                    </div>
                                    <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">
                                        Beli Sekarang
                                    </button>
                                </div>
                            </div>
                        ),
                    },
                ]}
                // className
                className="relative  carousel bg-gray-500 container mx-auto" />
        </div>
    );
};

export default Home;
