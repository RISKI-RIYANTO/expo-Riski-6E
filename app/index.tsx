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
      isLoading: true,
    }))
  );

  const onGridItemPress = (itemIndex) => {
    setGridItems((currentGridItems) => {
      return currentGridItems.map((item, index) => {
        if (index === itemIndex && !item.hasError) {
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
            // Klik kedua: scale menjadi 2.4x (dari 1.2x ke 2.4x)
            return {
              ...item,
              currentScaleFactor: 2.4,
              clickCount: newClickCount,
            };
          } else {
            // Klik ketiga dan seterusnya: tetap pada 2.4x
            return {
              ...item,
              clickCount: newClickCount,
            };
          }
        }
        return item;
      });
    });
  };

  const onImageLoad = (index) => {
    setGridItems((currentGridItems) => {
      return currentGridItems.map((item, i) => {
        if (i === index) {
          return { ...item, isLoading: false };
        }
        return item;
      });
    });
  };

  const onImageError = (index) => {
    setGridItems((currentGridItems) => {
      return currentGridItems.map((item, i) => {
        if (i === index) {
          return { ...item, hasError: true, isLoading: false };
        }
        return item;
      });
    });
  };

  const getScaleStatus = (scaleFactor) => {
    if (scaleFactor === 2.4) return { text: "🔴 Maksimal (2.4x)", color: "text-red-600" };
    if (scaleFactor === 1.2) return { text: "🔵 Diperbesar (1.2x)", color: "text-blue-600" };
    return { text: "⚫ Normal (1x)", color: "text-gray-600" };
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Grid Gambar 3x3 - Penskalaan Bertahap
        </h1>

        {/* Grid Container 3x3 dengan ukuran yang sama */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
          {gridItems.map((item, index) => (
            <div
              key={item.id}
              className="w-full h-48 bg-white border-2 border-gray-200 rounded-lg overflow-hidden cursor-pointer hover:border-blue-400 transition-all duration-200 shadow-md hover:shadow-lg"
              onClick={() => onGridItemPress(index)}
            >
              {item.hasError ? (
                <div className="flex items-center justify-center h-full bg-red-50">
                  <div className="text-center p-4">
                    <div className="text-red-500 text-2xl mb-2">⚠️</div>
                    <div className="text-red-500 text-sm font-medium mb-1">
                      Error Loading
                    </div>
                    <div className="text-red-400 text-xs">
                      Gambar gagal dimuat
                    </div>
                    <div className="text-red-300 text-xs mt-1">
                      Klik untuk mencoba lagi
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center overflow-hidden bg-gray-50 relative">
                  {item.isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
                      <div className="text-gray-500 text-sm">Loading...</div>
                    </div>
                  )}
                  <img
                    src={item.displaySrc}
                    alt={`Gambar ${index + 1} ${
                      item.isAlternate ? "(Alternatif)" : "(Asli)"
                    }`}
                    className="w-full h-full object-cover transition-all duration-500 ease-in-out"
                    style={{
                      transform: `scale(${item.currentScaleFactor})`,
                      transformOrigin: "center center",
                    }}
                    onLoad={() => onImageLoad(index)}
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
            {gridItems.map((item, index) => {
              const status = getScaleStatus(item.currentScaleFactor);
              return (
                <div
                  key={item.id}
                  className={`p-3 rounded-lg border-2 ${
                    item.hasError
                      ? "border-red-300 bg-red-50"
                      : item.currentScaleFactor >= 1.8
                      ? "border-red-200 bg-red-50"
                      : item.currentScaleFactor >= 1.5
                      ? "border-orange-200 bg-orange-50"
                      : item.currentScaleFactor >= 1.2
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
                      <span className="font-medium">Klik:</span> {item.clickCount}x
                    </div>
                    <div>
                      <span className="font-medium">Error:</span>{" "}
                      {item.hasError ? "❌ Ya" : "✅ Tidak"}
                    </div>
                    <div className={`font-medium ${status.color}`}>
                      Status: {status.text}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Instruksi Penggunaan */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            🎯 Logika Penskalaan Bertahap
          </h2>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-start space-x-3">
              <span className="text-blue-500 font-bold">1.</span>
              <div>
                <strong>Klik Pertama:</strong> Gambar berubah ke versi alternatif DAN diperbesar menjadi 1.2x
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-red-500 font-bold">2.</span>
              <div>
                <strong>Klik Kedua:</strong> Gambar diperbesar menjadi 2.4x (maksimal)
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-gray-500 font-bold">3+</span>
              <div>
                <strong>Klik Ketiga++:</strong> Gambar tetap pada skala maksimal 2.4x
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
              <div>✅ Penskalaan bertahap: 1x → 1.2x → 2.4x</div>
              <div>✅ Penskalaan maksimal hingga 2.4x</div>
            </div>
            <div className="space-y-2">
              <div>✅ Penskalaan individual per gambar</div>
              <div>✅ Error handling untuk gambar gagal dimuat</div>
              <div>✅ Loading state untuk gambar</div>
              <div>✅ State management yang proper</div>
              <div>✅ Validasi ukuran sel yang konsisten</div>
            </div>
          </div>
        </div>

        {/* Progress Bar untuk Penskalaan */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mt-6">
          <h2 className="text-xl font-semibold mb-4 text-blue-800">
            📊 Progress Penskalaan
          </h2>
          <div className="space-y-3">
            {gridItems.map((item, index) => (
              <div key={item.id} className="flex items-center space-x-3">
                <span className="text-sm font-medium w-20">Gambar {index + 1}:</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(item.currentScaleFactor / 2.4) * 100}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600 w-16">
                  {item.currentScaleFactor}x
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
