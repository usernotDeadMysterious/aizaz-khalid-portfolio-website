import { AlertTriangle } from "lucide-react";

export default function DevBanner() {
  return (
    <div className="w-full bg-yellow-100 border-b border-yellow-300 text-yellow-800 px-4 py-2 flex items-center gap-2 text-sm font-medium">
      <AlertTriangle className="w-4 h-4" />
      This website is a prototype and currently under development.
    </div>
  );
}