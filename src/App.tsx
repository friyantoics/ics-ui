import { Button } from './components/ui/Button'

export default function App() {
    return (
        <div>
            <h1 className="font-bold underline">App</h1>
            <Button variant="primary" isLoading={true}>Click me</Button>
        </div>
    )
}