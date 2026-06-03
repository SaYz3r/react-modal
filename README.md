# @sayz3r/react-modal-wh

Composant fenêtre modale React créé pour l'application HRnet de WealthHealth. Il remplace le plugin jQuery `jquery.modal.js`.

## Prérequis

- Node.js >= 14
- React >= 17
- React DOM >= 17

## Installation

```bash
npm install @sayz3r/react-modal-wh
```

## Description

`@sayz3r/react-modal-wh` est un composant React qui affiche une fenêtre modale. Il gère son propre state en interne via `useImperativeHandle` et `forwardRef` — le composant parent n'a pas besoin de gérer l'ouverture ou la fermeture, il suffit d'appeler `modalRef.current.open()` et `modalRef.current.close()`.

## Utilisation

```jsx
import { useRef } from 'react'
import Modal from '@sayz3r/react-modal-wh'
import '@sayz3r/react-modal-wh/dist/react-modal-wh.css'

function App() {
    const modalRef = useRef()

    return (
        <>
            <button onClick={() => modalRef.current.open()}>Ouvrir


                Employee Created!

        </>
    )
}
```

## Props

| Prop       | Type        | Requis | Description                                                             |
| ---------- | ----------- | ------ | ----------------------------------------------------------------------- |
| `ref`      | `React.Ref` | ✅     | Ref pour contrôler la modale depuis le parent via `open()` et `close()` |
| `children` | `ReactNode` | ✅     | Contenu affiché à l'intérieur de la modale                              |

## Méthodes exposées via ref

| Méthode                    | Description     |
| -------------------------- | --------------- |
| `modalRef.current.open()`  | Ouvre la modale |
| `modalRef.current.close()` | Ferme la modale |

## Fonctionnement

- Le state `isOpen` est géré en interne dans le composant
- Un clic sur l'overlay ferme la modale
- Un clic à l'intérieur du panneau ne ferme pas la modale
- Le bouton **Close** ferme la modale

## Lien npm

https://www.npmjs.com/package/@sayz3r/react-modal-wh
