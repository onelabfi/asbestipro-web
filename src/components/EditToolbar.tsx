'use client';

import { useContent } from './ContentProvider';

export function EditToolbar() {
  const { isEditMode } = useContent();

  if (!isEditMode) return null;

  const handleExit = () => {
    localStorage.removeItem('asbestipro-edit');
    window.location.href = window.location.pathname;
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3 text-sm font-medium">
      <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
      EDIT MODE
      <button
        onClick={handleExit}
        className="ml-2 bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full text-xs"
      >
        Poistu
      </button>
    </div>
  );
}
