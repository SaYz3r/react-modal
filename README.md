# @sayz3r/react-modal-wh

Composant fenêtre modale React créé pour l'application HRnet de WealthHealth. Il remplace le plugin jQuery `jquery.modal.js`.

## Installation

```bash
npm install @sayz3r/react-modal-wh
```

## Utilisation

```jsx
import { useState } from 'react'
import Modal from '@sayz3r/react-modal-wh'
import '@sayz3r/react-modal-wh/dist/react-modal-wh.css'

function App() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <button onClick={() => setIsOpen(true)}>Ouvrir

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                Employee Created!

        </>
    )
}
```

## Props

| Prop       | Type        | Requis | Description                                                                            |
| ---------- | ----------- | ------ | -------------------------------------------------------------------------------------- |
| `isOpen`   | `boolean`   | ✅     | Contrôle l'affichage de la modale. `true` = visible, `false` = cachée                  |
| `onClose`  | `function`  | ✅     | Callback appelé quand l'utilisateur ferme la modale (clic sur overlay ou bouton Close) |
| `children` | `ReactNode` | ✅     | Contenu affiché à l'intérieur de la modale                                             |

## Exemple dans HRnet

Dans l'application HRnet, la modale est utilisée pour confirmer la création d'un employé :

```jsx
const [isModalOpen, setIsModalOpen] = useState(false)

const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addEmployee(newEmployee))
    setIsModalOpen(true)
}

<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
    Employee Created!

```

## Fonctionnement

- Si `isOpen` est `false`, le composant ne rend rien (`return null`)
- Un clic sur l'overlay (fond sombre) ferme la modale via `onClose`
- Un clic à l'intérieur du panneau ne ferme pas la modale (`stopPropagation`)
- Le bouton **Close** appelle `onClose`

## Lien npm

https://www.npmjs.com/package/@sayz3r/react-modal-wh
