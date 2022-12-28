import {
    Community,
    Feature,
    Footer,
    Header,
    Hero,
    Partners,
    Roadmap,
    Whitepaper,
} from '@/components/landing'
import React from 'react'

function App() {
    return (
        <div className="relative min-h-screen overflow-x-hidden">
            <Header className="absolute top-0" />
            <Hero />
            <Feature />
            <Roadmap />
            <Whitepaper />
            <Partners />
            <Community />
            <Footer />
        </div>
    )
}

export default App
