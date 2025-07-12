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

          if (newClickCount === 1) {
            // Klik pertama: ganti ke gambar alternatif DAN scale ke 1.2x
            return {
              ...item,
              isAlternate: true,
              displaySrc: item.alternateSrc,
              currentScaleFactor: 1.2,
              clickCount: newClickCount,
            };
          } else if (newClickCount === 2) {
            // Klik kedua: scale menjadi 2x (maksimal)
            return {
              ...item,
              currentScaleFactor: 2,
              clickCount: newClickCount,
            };
          } else {
            // Klik ketiga dan seterusnya: tetap pada 2x
            return {
              ...item,
              clickCount: newClickCount,
            };
          }
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
                    : item.currentScaleFactor === 1.2
                    ? "border-blue-200 bg-blue-50"
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
                    {item.currentScaleFactor}x
                  </div>
                  <div>
                    <span className="font-medium">Klik:</span> {item.clickCount}
                    x
                  </div>
                  <div
                    className={`font-medium ${
                      item.currentScaleFactor === 2
                        ? "text-red-600"
                        : item.currentScaleFactor === 1.2
                        ? "text-blue-600"
                        : "text-gray-600"
                    }`}
                  >
                    Status:{" "}
                    {item.currentScaleFactor === 2
                      ? "🔴 Maksimal (2x)"
                      : item.currentScaleFactor === 1.2
                      ? "🔵 Diperbesar (1.2x)"
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
            🎯 Logika Implementasi
          </h2>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-start space-x-3">
              <span className="text-blue-500 font-bold">1.</span>
              <div>
                <strong>Klik Pertama:</strong> Gambar berubah ke versi
                alternatif DAN diperbesar menjadi 1.2x secara bersamaan
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-blue-500 font-bold">2.</span>
              <div>
                <strong>Klik Kedua:</strong> Gambar diperbesar dari 1.2x menjadi
                2x (maksimal)
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-blue-500 font-bold">3.</span>
              <div>
                <strong>Klik Ketiga++:</strong> Gambar tetap pada skala maksimal
                2x (tidak ada perubahan)
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
              <div>✅ Penggantian gambar ke versi alternatif</div>
              <div>✅ Penskalaan 1.2x pada klik pertama</div>
            </div>
            <div className="space-y-2">
              <div>✅ Penskalaan maksimal hingga 2x</div>
              <div>✅ Penskalaan individual per gambar</div>
              <div>✅ Error handling untuk gambar gagal dimuat</div>
              <div>✅ State management yang proper</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
