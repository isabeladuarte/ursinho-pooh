export default function Header() {
    return (
        <header className="bg-yellow-200 p-4 shadow-md">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold text-red-600">Ursinho Pooh</h1>
                <nav className="flex gap-4">
                    <a href="#" className="hover:text-red-600">Home</a>
                    <a href="#" className="hover:text-red-600">Personagens</a>
                    <a href="#" className="hover:text-red-600">Galeria</a>
                    <a href="#" className="hover:text-red-600">Contato</a>
                </nav>
            </div>
        </header>
    )
}
