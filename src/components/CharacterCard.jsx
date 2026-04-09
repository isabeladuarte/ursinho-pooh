const characters = ['pooh', 'leitao', 'tigrao', 'coelho', 'bisonho', 'corujao', 'kanga-e-ru', 'turma'];

export default function Cards() {
    return (
        <section id="personagens" className="bg-white py-16">
            <div className="max-w-6xl mx-auto text-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center">
                    {characters.map((name, index) => (
                        <div 
                            key={index} 
                            className="relative group w-full h-60 rounded-xl overflow-hidden shadow-lg cursor-pointer"
                        >
                            <img 
                                src={`./characters/${name}.png`} 
                                alt={name} 
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            
                            {/* Transição ao passar o mouse */}
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                            
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-yellow-400 text-yellow-900 font-bold px-3 py-1 rounded-full shadow-md capitalize">
                                    {name.replace(/-/g, ' ')}
                                </span>
                            </div>
                        </div>
                    ))}   
                </div> 
            </div>
        </section>
    )
}
