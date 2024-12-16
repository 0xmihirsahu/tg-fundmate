export default function NavItem({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <button className="flex flex-col items-center space-y-1">
      <span className={active ? "text-[#2481cc]" : "text-gray-400"}>{icon}</span>
      <span className={`text-sm ${active ? "text-[#2481cc]" : "text-gray-400"}`}>{label}</span>
    </button>
  )
}