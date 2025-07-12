import React, { useState } from "react";

export default function Index() {
  const imageData = [
    {
      originalSrc:
        "https://simak.unismuh.ac.id/upload/mahasiswa/105841115822.jpg?1751871436",
      alternateSrc:
        "https://simak.unismuh.ac.id/upload/mahasiswa/105841115322.jpg?1751871436",
    },
    {
      originalSrc:
        "https://simak.unismuh.ac.id/upload/mahasiswa/105841115622.jpg?1751871436",
      alternateSrc:
        "https://simak.unismuh.ac.id/upload/mahasiswa/105841115022.jpg?1751871436",
    },
    {
      originalSrc:
        "https://simak.unismuh.ac.id/upload/mahasiswa/105841115422.jpg?1751871436",
      alternateSrc:
        "https://simak.unismuh.ac.id/upload/mahasiswa/105841115122.jpg?1751871436",
    },
    {
      originalSrc:
        "https://simak.unismuh.ac.id/upload/mahasiswa/105841115922.jpg?1751871436",
      alternateSrc:
        "https://simak.unismuh.ac.id/upload/mahasiswa/105841115222.jpg?17518714364",
    },
    {
      originalSrc:
        "https://simak.unismuh.ac.id/upload/mahasiswa/105841116022.jpg?1751871436",
      alternateSrc:
        "https://simak.unismuh.ac.id/upload/mahasiswa/105841116922.jpg?1751871436",
    },
    {
      originalSrc:
        "https://simak.unismuh.ac.id/upload/mahasiswa/105841116122.jpg?1751871436",
      alternateSrc:
        "https://simak.unismuh.ac.id/upload/mahasiswa/105841116822.jpg?1751871436",
    },
    {
      originalSrc:
        "https://simak.unismuh.ac.id/upload/mahasiswa/105841116222.jpg?1751871436",
      alternateSrc:
        "https://simak.unismuh.ac.id/upload/mahasiswa/105841116722.jpg?1751871436",
    },
    {
      originalSrc:
        "https://simak.unismuh.ac.id/upload/mahasiswa/105841116322.jpg?17518714368",
      alternateSrc:
        "https://simak.unismuh.ac.id/upload/mahasiswa/105841116622.jpg?1751871436",
    },
    {
      originalSrc:
        "https://simak.unismuh.ac.id/upload/mahasiswa/105841116422.jpg?1751871436",
      alternateSrc:
        "https://simak.unismuh.ac.id/upload/mahasiswa/105841116522.jpg?1751871436",
    },
  ];

  const [gridItems, setGridItems] = useState(
    imageData.map((pair) => ({
      originalSrc: pair.originalSrc,
      alternateSrc: pair.alternateSrc,
      displaySrc: pair.originalSrc,
      isAlternate: false,
      currentScaleFactor: 1,
      hasError: false,
    }))
  );

  const onGridItemPress = (itemIndex) => {
    setGridItems((currentGridItems) => {
      const updatedGridItems = [...currentGridItems];
      const selectedItem = { ...updatedGridItems[itemIndex] };

      // Logika untuk mengubah gambar dan scaling
      if (!selectedItem.isAlternate) {
        // Klik pertama: ganti ke gambar alternatif dan scale ke 1.2x
        selectedItem.isAlternate = true;
        selectedItem.displaySrc = selectedItem.alternateSrc;
        selectedItem.currentScaleFactor = 1.2;
      } else {
        // Klik kedua dan seterusnya: tingkatkan scale hingga maksimal 2x
        if (selectedItem.currentScaleFactor < 2) {
          selectedItem.currentScaleFactor = 2;
        }
        // Jika sudah 2x, tetap 2x (tidak ada perubahan)
      }

      updatedGridItems[itemIndex] = selectedItem;
      return updatedGridItems;
    });
  };

  const onImageError = (index) => {
    setGridItems((currentGridItems) => {
      const updatedGridItems = [...currentGridItems];
      updatedGridItems[index] = { ...updatedGridItems[index], hasError: true };
      return updatedGridItems;
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Grid Gambar 3x3</h1>

      {/* Grid Container */}
      <div className="grid grid-cols-3 gap-3 w-full max-w-lg">
        {gridItems.map((item, index) => (
          <div
            key={index}
            className="aspect-[3/4] bg-white border border-gray-300 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-200"
            onClick={() => onGridItemPress(index)}
          >
            {item.hasError ? (
              <div className="flex items-center justify-center h-full">
                <span className="text-red-500 text-xs text-center p-2">
                  Gagal memuat gambar
                </span>
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center overflow-hidden">
                <img
                  src={item.displaySrc}
                  alt={`Gambar ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
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

      {/* Info Panel */}
      <div className="mt-6 p-4 bg-white rounded-lg shadow-sm max-w-lg w-full">
        <h3 className="text-lg font-semibold mb-2">Cara Penggunaan:</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Klik gambar untuk mengubah ke versi alternatif (scale 1.2x)</li>
          <li>• Klik lagi untuk memperbesar hingga 2x</li>
          <li>• Setiap gambar dapat diperbesar secara individual</li>
          <li>• Scale maksimal: 2x dari ukuran asli</li>
        </ul>
      </div>

      {/* Debug Info */}
      <div className="mt-4 p-3 bg-gray-50 rounded-lg max-w-lg w-full">
        <h4 className="text-sm font-medium mb-2">Status Gambar:</h4>
        <div className="text-xs text-gray-600">
          {gridItems.map((item, index) => (
            <div key={index} className="flex justify-between py-1">
              <span>Gambar {index + 1}:</span>
              <span>
                {item.isAlternate ? "Alternatif" : "Asli"} - Scale:{" "}
                {item.currentScaleFactor}x
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
