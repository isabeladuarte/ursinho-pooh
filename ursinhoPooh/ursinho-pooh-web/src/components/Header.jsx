export default function Header() {
    return (
        <header className="bg-yellow-100 p-4 shadow-md">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold text-amber-800 font-baloo">🍯 Ursinho Pooh</h1>
                <nav className="flex gap-4">
                    <a href="#home" className="hover:text-amber-800">Home</a>
                    <a href="#personagens" className="hover:text-amber-800">Personagens</a>
                    <a href="#contato" className="hover:text-amber-800">Contato</a>
                </nav>
            </div>
        </header>
    )
}
