import ImageFilter from "./components/ImageFilter"


const App = () => {
  return (
    <div className="w-full min-h-screen body-bg">
      <h1 className="text-black text-6xl uppercase leading-tight title text-center p-16">Filterable Image Gallery Using <span className="bg-teal-600 p-2 font-mono">React JS & TypeScript</span></h1>
      <ImageFilter />
    </div>
  )
}

export default App
