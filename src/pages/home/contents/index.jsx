import './style.css'
import Hero from './hero'
import Services from './servic'
import About from './about'

function Contents(){
    return(
        <main className="main">
            <Hero />
            <Services />
            <About />
        </main>
    )
}

export default Contents;