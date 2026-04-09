export default function HeroBanner() {
    return (
        <section id="home" className="bg-yellow-50 py-20">
            <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-yellow-800 mb-4 font-baloo">
                Bem-vindo ao mundo do Ursinho Pooh!
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                Descubra os personagens e aventuras do Pooh e seus amigos.
                </p>
                <a href="#personagens" 
                    className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold py-2 px-6 rounded-full shadow-md transform transition-transform duration-200 hover:scale-105">
                    Conheça a turma!
                </a>
            </div>
        </section>
    )
}