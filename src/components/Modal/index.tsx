import React, { FC } from 'react'
import { ModalWrapper, ModalContent } from './styled'
import { useSelector, useDispatch } from 'react-redux'
import { TypePropsModal } from './TypePropsModal'
import { TypeRootState } from '../../store'
import setModalStatusAction from '../../store/action/setModalStatusAction'

const Modal: FC<TypePropsModal> = ({ children }) => {
  const dispatch = useDispatch()
  const status = useSelector(
    (state: TypeRootState) => state.setModalStatusReducer.status
  )

  const closeModalDarkPlace = () => {
    dispatch(setModalStatusAction({ status: !status }))
  }

  return (
    <>
      {status && (
        <ModalWrapper>
          <ModalContent onClick={closeModalDarkPlace}>{children}</ModalContent>
        </ModalWrapper>
      )}
    </>
  )
}

export default Modal
