// import { createContext, useState } from "react";

// const ModalContext = createContext();

//  const ModalProvider = ({children}) => {
//     const [showModal, setShowModal] = useState(false);
//     const handleToggle = () => {
//         // setShowModal((prev) => !prev)
//         setShowModal(!showModal)
//     }
//     const handleClose = () => {
//         setShowModal(false)
//     }

//     return 
//     (
//         <ModalContext.Provider value={{showModal, handleToggle, handleClose}}>
//             {children}
//         </ModalContext.Provider>
//     )
// }

// export {ModalContext, ModalProvider}