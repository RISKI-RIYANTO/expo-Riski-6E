import React, { useState } from "react";

export default function Index() {
  const imageData = [
    {
      main: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=400&fit=crop",
      alt: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=300&h=400&fit=crop",
    },
    {
      main: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=400&fit=crop",
      alt: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=400&fit=crop",
    },
    {
      main: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=400&fit=crop",
      alt: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=400&fit=crop",
    },
    {
      main: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&h=400&fit=crop",
      alt: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=400&fit=crop",
    },
    {
      main: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=300&h=400&fit=crop",
      alt: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&h=400&fit=crop",
    },
    {
      main: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=400&fit=crop",
      alt: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=300&h=400&fit=crop",
    },
    {
      main: "https://images.unsplash.com/photo-1414016642750-7fdd78dc33d9?w=300&h=400&fit=crop",
      alt: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=400&fit=crop",
    },
    {
      main: "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=300&h=400&fit=crop",
      alt: "https://images.unsplash.com/photo-1414016642750-7fdd78dc33d9?w=300&h=400&fit=crop",
    },
    {
      main: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=300&h=400&fit=crop",
      alt: "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=300&h=400&fit=crop",
    },
  ];

  const [items, setItems] = useState(
    imageData.map((img, index) => ({
      id: index,
      src: img.main,
      altSrc: img.alt,
      scale: 1,
      isAlt: false,
    }))
  );

  const handleClick = (index) => {
    setItems((prev) =>
      prev.map((item, i) =>
        i === index
          ? {
              ...item,
              src: item.isAlt ? item.src : item.altSrc,
              isAlt: !item.isAlt,
              scale: item.scale < 2 ? item.scale + 0.2 : 2,
            }
          : item
      )
    );
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-8">Grid Gambar 3x3</h1>

      <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="w-full h-48 border-2 border-gray-300 rounded-lg overflow-hidden cursor-pointer"
            onClick={() => handleClick(index)}
          >
            <img
              src={item.src}
              alt={`Gambar ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300"
              style={{ transform: `scale(${item.scale})` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
