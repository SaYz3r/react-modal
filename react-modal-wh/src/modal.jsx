import { useState, forwardRef, useImperativeHandle } from 'react'
import './modal.css'

/**
 * Modal — Composant fenêtre modale React auto-géré.
 * Expose les méthodes open() et close() via une ref.
 *
 * @param {React.ReactNode} props.children - Contenu affiché à l'intérieur de la modale.
 * @param {React.Ref}       ref            - Ref pour contrôler la modale depuis le parent.
 */
const Modal = forwardRef(({ children }, ref) => {
    // State interne — le parent n'a plus besoin de gérer isOpen
    const [isOpen, setIsOpen] = useState(false)

    // Expose open() et close() au composant parent via la ref
    useImperativeHandle(ref, () => ({
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
    }))

    if (!isOpen) return null

    return (
        <div className='modal-overlay' onClick={() => setIsOpen(false)}>
            <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                {children}
                <button className='modal-close' onClick={() => setIsOpen(false)}>
                    Close
                </button>
            </div>
        </div>
    )
})

export default Modal