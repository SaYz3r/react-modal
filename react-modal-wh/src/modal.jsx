import './modal.css'

/**
 * Modal — Composant fenêtre modale React.
 * Remplace le plugin jQuery jquery.modal.js dans l'application HRnet.
 *
 * @param {boolean}         props.isOpen   - Contrôle l'affichage de la modale. true = visible, false = cachée.
 * @param {function}        props.onClose  - Callback appelé pour fermer la modale (clic overlay ou bouton Close).
 * @param {React.ReactNode} props.children - Contenu affiché à l'intérieur de la modale.
 */
function Modal({ isOpen, onClose, children }) {
    // Ne rend rien si la modale est fermée
    if (!isOpen) return null

    return (
        // Overlay sombre — un clic dessus ferme la modale
        <div className='modal-overlay' onClick={onClose}>
            {/* Panneau — stopPropagation empêche la fermeture au clic intérieur */}
            <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                {children}
                {/* Bouton de fermeture */}
                <button className='modal-close' onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    )
}

export default Modal