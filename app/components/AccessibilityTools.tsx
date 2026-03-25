"use client";

import { useState, useEffect } from "react";
import { 
  Accessibility, 
  X, 
  Type, 
  SunMoon, 
  Paintbrush, 
  EyeOff, 
  RotateCcw,
  BookOpen
} from "lucide-react";

export default function AccessibilityTools() {
  const [isOpen, setIsOpen] = useState(false);
  
  // States for different accessibility modes
  const [textSize, setTextSize] = useState<"normal" | "large" | "x-large">("normal");
  const [highContrast, setHighContrast] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [dyslexiaFont, setDyslexiaFont] = useState(false);

  // Load preferences from local storage
  useEffect(() => {
    const saved = localStorage.getItem("a11y-preferences");
    if (saved) {
      try {
        const prefs = JSON.parse(saved);
        if (prefs.textSize) setTextSize(prefs.textSize);
        if (prefs.highContrast) setHighContrast(prefs.highContrast);
        if (prefs.grayscale) setGrayscale(prefs.grayscale);
        if (prefs.reduceMotion) setReduceMotion(prefs.reduceMotion);
        if (prefs.dyslexiaFont) setDyslexiaFont(prefs.dyslexiaFont);
      } catch (e) {
        console.error("Failed to parse accessibility preferences", e);
      }
    }
  }, []);

  // Apply classes and save preferences whenever they change
  useEffect(() => {
    const html = document.documentElement;
    
    // Clear existing a11y classes
    html.classList.remove("text-large", "text-extra-large", "high-contrast", "grayscale-mode", "reduce-motion", "dyslexia-font");
    
    // Apply new classes
    if (textSize === "large") html.classList.add("text-large");
    if (textSize === "x-large") html.classList.add("text-extra-large");
    if (highContrast) html.classList.add("high-contrast");
    if (grayscale) html.classList.add("grayscale-mode");
    if (reduceMotion) html.classList.add("reduce-motion");
    if (dyslexiaFont) html.classList.add("dyslexia-font");

    // Save to local storage
    localStorage.setItem("a11y-preferences", JSON.stringify({
      textSize,
      highContrast,
      grayscale,
      reduceMotion,
      dyslexiaFont
    }));
  }, [textSize, highContrast, grayscale, reduceMotion, dyslexiaFont]);

  const toggleTextSize = () => {
    if (textSize === "normal") setTextSize("large");
    else if (textSize === "large") setTextSize("x-large");
    else setTextSize("normal");
  };

  const resetAll = () => {
    setTextSize("normal");
    setHighContrast(false);
    setGrayscale(false);
    setReduceMotion(false);
    setDyslexiaFont(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#1A3A5C] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#FF6B35] transition-colors focus:outline-none focus:ring-4 focus:ring-[#FF6B35]/50 print:hidden"
        aria-label="Toggle Accessibility Tools"
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={28} /> : <Accessibility size={28} />}
      </button>

      {/* Tools Panel */}
      {isOpen && (
        <div className="absolute bottom-16 left-0 bg-white shadow-2xl rounded-2xl p-5 w-80 border border-gray-100 text-[#1A3A5C]">
          <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-100">
            <h2 className="font-bold text-lg flex items-center gap-2">
              <Accessibility size={20} className="text-[#FF6B35]" />
              Accessibility Tools
            </h2>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-700"
              aria-label="Close Accessibility Tools"
            >
              <X size={20} />
            </button>
          </div>

          <div className="space-y-3">
            {/* Text Size */}
            <button
              onClick={toggleTextSize}
              className={`w-full flex items-center justify-between p-3 rounded-xl transition-colors ${textSize !== "normal" ? 'bg-[#FF6B35]/10 text-[#FF6B35] font-semibold' : 'hover:bg-gray-50'}`}
              aria-pressed={textSize !== "normal"}
            >
              <div className="flex items-center gap-3">
                <Type size={18} />
                <span>Text Size</span>
              </div>
              <span className="text-xs uppercase tracking-wider bg-white px-2 py-1 rounded shadow-sm border border-gray-100">
                {textSize}
              </span>
            </button>

            {/* High Contrast */}
            <button
              onClick={() => setHighContrast(!highContrast)}
              className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors ${highContrast ? 'bg-[#FF6B35]/10 text-[#FF6B35] font-semibold' : 'hover:bg-gray-50'}`}
              aria-pressed={highContrast}
            >
              <SunMoon size={18} />
              <span>High Contrast</span>
            </button>

            {/* Grayscale */}
            <button
              onClick={() => setGrayscale(!grayscale)}
              className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors ${grayscale ? 'bg-[#FF6B35]/10 text-[#FF6B35] font-semibold' : 'hover:bg-gray-50'}`}
              aria-pressed={grayscale}
            >
              <Paintbrush size={18} />
              <span>Grayscale Mode</span>
            </button>

            {/* Reduce Motion */}
            <button
              onClick={() => setReduceMotion(!reduceMotion)}
              className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors ${reduceMotion ? 'bg-[#FF6B35]/10 text-[#FF6B35] font-semibold' : 'hover:bg-gray-50'}`}
              aria-pressed={reduceMotion}
            >
              <EyeOff size={18} />
              <span>Reduce Motion</span>
            </button>

            {/* Dyslexia Friendly Font */}
            <button
              onClick={() => setDyslexiaFont(!dyslexiaFont)}
              className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors ${dyslexiaFont ? 'bg-[#FF6B35]/10 text-[#FF6B35] font-semibold' : 'hover:bg-gray-50'}`}
              aria-pressed={dyslexiaFont}
            >
              <BookOpen size={18} />
              <span>Dyslexia Friendly</span>
            </button>
          </div>

          {/* Reset Button */}
          <button
            onClick={resetAll}
            className="w-full mt-5 flex items-center justify-center gap-2 p-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors font-medium border border-red-100"
          >
            <RotateCcw size={18} />
            <span>Reset All Settings</span>
          </button>
        </div>
      )}
    </div>
  );
}
