import SchemaBuilder from "./components/schema-builder/SchemaBuilder"
import { Button } from "./components/ui/button"


function App() {
  return (
    <div className="min-h-screen bg-white">
      <SchemaBuilder />
      <Button className="ml-10 bg-gray-200 text-black">Submit</Button>
    </div>
  )
}

export default App
