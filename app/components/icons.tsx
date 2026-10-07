import { Sparkles, Palette, Handshake, Layers, Shield, Unlock, Stethoscope, Megaphone, Coins, BookOpen, Heart, type LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = { Sparkles, Palette, Handshake, Layers, Shield, Unlock, Stethoscope, Megaphone, Coins, BookOpen, Heart };
export const getIcon = (name?: string): LucideIcon => ICONS[name ?? ""] ?? Sparkles;

export const BRAND: Record<string, string> = {
  purple: "#7B2CBF", orange: "#FF6B35", teal: "#00B4A6", lilac: "#E0AAFF", amber: "#FF9F1C", mint: "#2EC4B6",
};
export const brand = (c?: string) => BRAND[c ?? ""] ?? BRAND.purple;
