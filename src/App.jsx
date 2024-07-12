import { Background } from './components/Index';
import { Presentation, Projects, Experience, Contact } from './components/Index';

export default function App() {
  return (
    <Background>
      <Presentation />
      <Projects />
      <Experience />
      <Contact />
    </Background>
  )
}