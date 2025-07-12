import React, { useState } from "react";

export default function Index() {
  const imageData = [
    {
      originalSrc: "https://picsum.photos/300/400?random=1",
      alternateSrc: "https://picsum.photos/300/400?random=11",
    },
    {
      originalSrc: "https://picsum.photos/300/400?random=2",
      alternateSrc: "https://picsum.photos/300/400?random=12",
    },
    {
      originalSrc: "https://picsum.photos/300/400?random=3",
      alternateSrc: "https://picsum.photos/300/400?random=13",
    },
    {
      originalSrc: "https://picsum.photos/300/400?random=4",
      alternateSrc: "https://picsum.photos/300/400?random=14",
    },
    {
      originalSrc: "https://picsum.photos/300/400?random=5",
      alternateSrc: "https://picsum.photos/300/400?random=15",
    },
    {
      originalSrc: "https://picsum.photos/300/400?random=6",
      alternateSrc: "https://picsum.photos/300/400?random=16",
    },
    {
      originalSrc: "https://picsum.photos/300/400?random=7",
      alternateSrc: "https://picsum.photos/300/400?random=17",
    },
    {
      originalSrc: "https://picsum.photos/300/400?random=8",
      alternateSrc: "https://picsum.photos/300/400?random=18",
    },
    {
      originalSrc: "https://picsum.photos/300/400?random=9",
      alternateSrc: "https://picsum.photos/300/400?random=19",
    },
  ];

  const [gridItems, setGridItems] = useState(
    imageData.map((pair, index) => ({
      id: index,
      originalSrc: pair.originalSrc,
      alternateSrc: pair.alternateSrc,
      displaySrc: pair.originalSrc,
      isAlternate: false,
      currentScaleFactor: 1,
      hasError: false,
      clickCount: 0,
    }))
  );

  const onGridItemPress = (itemIndex) => {
    setGridItems((currentGridItems) => {
      return currentGridItems.map((item, index) => {
        if (index === itemIndex) {
          const newClickCount = item.clickCount + 1;
          let newScaleFactor = item.currentScaleFactor;
          let newIsAlternate = item.isAlternate;
          let newDisplaySrc = item.displaySrc;

          if (newClickCount === 1) {
            // Klik pertama: ganti ke gambar alternatif DAN scale ke 1.2x
            newScaleFactor = 1.2;
            newIsAlternate = true;
            newDisplaySrc = item.alternateSrc;
          } else {
            // Klik selanjutnya: tingkatkan skala secara bertahap hingga maksimal 2x
            // Ini mengasumsikan peningkatan 0.2x per klik setelah klik pertama
            const nextScale = newScaleFactor + 0.2;
            newScaleFactor = Math.min(nextScale, 2); // Pastikan tidak melebihi 2x
          }

          return {
            ...item,
            isAlternate: newIsAlternate,
            displaySrc: newDisplaySrc,
            currentScaleFactor: newScaleFactor,
            clickCount: newClickCount,
          };
        }
        return item; // Item lain tidak berubah
      });
    });
  };

  const onImageError = (index) => {
    setGridItems((currentGridItems) => {
      return currentGridItems.map((item, i) => {
        if (i === index) {
          return { ...item, hasError: true };
        }
        return item;
      });
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Grid Gambar 3x3 - Implementasi Lengkap
        </h1>

        {/* Grid Container 3x3 dengan ukuran yang sama */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
          {gridItems.map((item, index) => (
            <div
              key={item.id}
              className="w-full h-48 bg-white border-2 border-gray-200 rounded-lg overflow-hidden cursor-pointer hover:border-blue-400 transition-colors duration-200 shadow-md hover:shadow-lg"
              onClick={() => onGridItemPress(index)}
            >
              {item.hasError ? (
                <div className="flex items-center justify-center h-full bg-red-50">
                  <div className="text-center p-4">
                    <div className="text-red-500 text-sm font-medium mb-2">
                      ❌ Error
                    </div>
                    <div className="text-red-400 text-xs">
                      Gagal memuat gambar
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center overflow-hidden bg-gray-50">
                  <img
                    src={item.displaySrc}
                    alt={`Gambar ${index + 1} ${
                      item.isAlternate ? "(Alternatif)" : "(Asli)"
                    }`}
                    className="w-full h-full object-cover transition-all duration-300 ease-in-out"
                    style={{
                      transform: `scale(${item.currentScaleFactor})`,
                      transformOrigin: "center center",
                    }}
                    onError={() => onImageError(index)}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Status Panel - Debugging */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            🔍 Status Detail Setiap Gambar
          </h2>
          <div className="grid grid-cols-3 gap-4 text-sm">
            {gridItems.map((item, index) => (
              <div
                key={item.id}
                className={`p-3 rounded-lg border-2 ${
                  item.currentScaleFactor === 2
                    ? "border-red-200 bg-red-50"
                    : item.currentScaleFactor > 1
                    ? "border-blue-200 bg-blue-50" // Untuk skala > 1 tapi < 2
                    : "border-gray-200 bg-gray-50"
                }`}
              >
                <div className="font-bold text-gray-800 mb-2">
                  Gambar {index + 1}
                </div>
                <div className="space-y-1 text-xs">
                  <div>
                    <span className="font-medium">Jenis:</span>{" "}
                    {item.isAlternate ? "🔄 Alternatif" : "📷 Asli"}
                  </div>
                  <div>
                    <span className="font-medium">Scale:</span>{" "}
                    {item.currentScaleFactor.toFixed(1)}x{" "}
                    {/* Menggunakan toFixed(1) untuk pembulatan */}
                  </div>
                  <div>
                    <span className="font-medium">Klik:</span> {item.clickCount}x
                  </div>
                  <div
                    className={`font-medium ${
                      item.currentScaleFactor === 2
                        ? "text-red-600"
                        : item.currentScaleFactor > 1
                        ? "text-blue-600"
                        : "text-gray-600"
                    }`}
                  >
                    Status:{" "}
                    {item.currentScaleFactor === 2
                      ? "🔴 Maksimal (2x)"
                      : item.currentScaleFactor > 1
                      ? "🔵 Diperbesar" // Tidak spesifik 1.2x lagi, bisa 1.4x, 1.6x, dst.
                      : "⚫ Normal (1x)"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Instruksi Penggunaan */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            🎯 Logika Implementasi (Diperbarui)
          </h2>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-start space-x-3">
              <span className="text-blue-500 font-bold">1.</span>
              <div>
                <strong>Klik Pertama:</strong> Gambar berubah ke versi alternatif DAN diperbesar menjadi 1.2x.
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-blue-500 font-bold">2.</span>
              <div>
                <strong>Klik Kedua & Selanjutnya (hingga 2x):</strong> Gambar akan terus diperbesar sebesar 0.2x per klik hingga mencapai skala maksimal 2x.
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-blue-500 font-bold">3.</span>
              <div>
                <strong>Setelah Mencapai 2x:</strong> Gambar akan tetap pada skala maksimal 2x (tidak ada perubahan lebih lanjut).
              </div>
            </div>
          </div>
        </div>

        {/* Fitur yang Tercapai */}
        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-green-800">
            ✅ Fitur yang Sudah Diimplementasikan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-green-700">
            <div className="space-y-2">
              <div>✅ Grid 3x3 dengan gambar berbeda di setiap sel</div>
              <div>✅ Ukuran sel yang sama secara eksplisit (h-48)</div>
              <div>✅ Penggantian gambar ke versi alternatif pada klik pertama</div>
              <div>✅ Penskalaan bertahap (0.2x) hingga 2x pada setiap klik setelah klik pertama</div>
            </div>
            <div className="space-y-2">
              <div>✅ Penskalaan individual per gambar</div>
              <div>✅ Error handling untuk gambar gagal dimuat</div>
              <div>✅ State management yang proper</div>
              <div>✅ Penggunaan 9 gambar primer dan 9 gambar alternatif</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
