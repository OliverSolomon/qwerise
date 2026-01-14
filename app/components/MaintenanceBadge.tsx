// Maintenance badge component
// Provides clear indication that the site is under development

export default function MaintenanceBadge() {
  return (
    <div 
      className="fixed bottom-4 right-4 bg-[#FF6B35] text-white px-4 py-2 rounded-full shadow-lg z-50"
      role="status"
      aria-live="polite"
    >
      <div className="flex items-center space-x-2 text-sm font-bold">
        <span className="w-2 h-2 bg-white rounded-full animate-pulse" aria-hidden="true"></span>
        <span>Site Under Development</span>
      </div>
    </div>
  );
}
