import './01_app/styles/index.css'
import { tv } from "tailwind-variants";

const main = tv({
  base: "max-w-srenn min-h-screen bg-amber-200"
})

function App() {
  return (
    <main className={main()}>
      That's empty project
    </main>
  )
}

export default App
