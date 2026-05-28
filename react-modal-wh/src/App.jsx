import { useState } from 'react'
import Modal from './Modal'

function App() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <button onClick={() => setIsOpen(true)}>Open Modal</button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <p>Employee Created!</p>
            </Modal>
        </div>
    )
}

export default App