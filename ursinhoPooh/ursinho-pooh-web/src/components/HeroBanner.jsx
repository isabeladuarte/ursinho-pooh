import beePath from '../assets/caminho-de-abelha.png';

export default function HeroBanner() {
    return (
        <section className="bg-yellow-50 py-20">
            <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-yellow-800 mb-4">
                Bem-vindo ao mundo do Ursinho Pooh!
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                Descubra os personagens e aventuras do Pooh e seus amigos.
                </p>
                <img 
                    src={beePath}
                    alt="Ursinho Pooh" 
                    className="mx-auto w-32"
                />
            </div>
        </section>
    )
}