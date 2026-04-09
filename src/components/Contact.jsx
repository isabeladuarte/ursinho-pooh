import { useState } from 'react';
import honey from '/logo.png';

export default function Contact() {
    const [message, setMessage] = useState('');
    const [submit, setSubmit] = useState(false);

    const submitMessage = () => {
        if(message.trim() !== '') {
            setSubmit(true);
            setMessage(''); // Limpa o campo ao enviar mensagem
            setTimeout(() => setSubmit(false), 2000);
        }
    }

    return (
        <section id="contato" className="bg-yellow-50 py-20">
            <div className="flex flex-col md:flex-row items-center justify-center max-w-4xl mx-auto p-8 rounded-3xl shadow-xl gap-8">
                
                <div className="flex-1 flex flex-col items-start gap-4">
                    {submit && (
                        <div className="text-lg text-yellow-800 font-bold animate-bounce">
                        🐝 Mensagem no pote!
                        </div>
                    )}
                    <textarea
                        className="w-full h-28 p-4 rounded-xl border-2 border-yellow-200 bg-yellow-100 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-300 text-yellow-900 placeholder-yellow-500 font-sans"
                        placeholder="Escreva sua mensagem para o Pooh..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button 
                        className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold py-2 px-6 rounded-full shadow-md transform transition-transform duration-200 hover:scale-105 cursor-pointer"
                        onClick={submitMessage}>
                        Jogar no pote
                    </button>
                </div>

                <div className="flex-1 flex justify-center">
                    <img 
                        src={honey} 
                        alt="Pote de mel" 
                        className="w-48 h-48 object-contain"
                    />
                </div>
            </div>
        </section>

    )
}
