import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import CharacterCard from '../components/CharacterCard';
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <HeroBanner />
            <CharacterCard />
            <Contact />
            <Footer />
        </>
    )
}