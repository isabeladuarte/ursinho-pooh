export default function Header() {
  return (
    <header className="bg-yellow-100 p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-amber-800 font-baloo">🍯 Ursinho Pooh</h1>

        {/* Menu Desktop */}
        <nav className="hidden sm:flex gap-4">
          <a href="#home" className="hover:text-amber-800">Home</a>
          <a href="#personagens" className="hover:text-amber-800">Personagens</a>
          <a href="#contato" className="hover:text-amber-800">Contato</a>
        </nav>

        {/* Hamburger com Checkbox */}
        <div className="sm:hidden relative">
          <input type="checkbox" id="menu-toggle" className="peer hidden" />
          <label htmlFor="menu-toggle" className="flex flex-col gap-1.5 p-2 cursor-pointer">
            <span className="block w-6 h-0.5 bg-amber-800 transition-transform peer-checked:rotate-45 peer-checked:translate-y-2"></span>
            <span className="block w-6 h-0.5 bg-amber-800 transition-opacity peer-checked:opacity-0"></span>
            <span className="block w-6 h-0.5 bg-amber-800 transition-transform peer-checked:-rotate-45 peer-checked:-translate-y-2"></span>
          </label>

          <nav className="absolute top-full right-0 w-48 hidden flex-col items-center gap-2 mt-2 px-4 pb-4 bg-yellow-100 peer-checked:flex">
            <a href="#home" className="hover:text-amber-800">Home</a>
            <a href="#personagens" className="hover:text-amber-800">Personagens</a>
            <a href="#contato" className="hover:text-amber-800">Contato</a>
          </nav>
        </div>
      </div>
    </header>
  )
}
