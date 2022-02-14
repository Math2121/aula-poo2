import { useState } from 'react'
import Modal from 'react-modal'
import logoImg from '../../assets/logo.svg'

import { Container, Content } from './styles'

interface IHeaderProps {
  onOpenNewTransacionalModal: () => void;
  onIsNewTransactionModalOpen: boolean;
  curso: string;
  valor: number;
}

export function Header({ onOpenNewTransacionalModal, onIsNewTransactionModalOpen, curso, valor }: IHeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        {/* <button type="button" onClick={handleOpenNewTransactionModal}> */}
        <button type="button" onClick={onOpenNewTransacionalModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}