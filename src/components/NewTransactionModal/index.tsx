import Modal from "react-modal";
import {
  ButtonRadio,
  Container,
  ImgModal,
  TextButton,
  TransactionTypeContainer,
} from "./styles";
import CloseIcon from "../../assets/close.svg";
import IncomeIcon from "../../assets/income.svg";
import OutcomeIcon from "../../assets/outcome.svg";
import { useState } from "react";
interface INewTransactionModalProps {
  isOpenProp: boolean;
  onRequestCloseProp: () => void;
}

export function NewTransactionModal({
  isOpenProp,
  onRequestCloseProp,
}: INewTransactionModalProps) {
  const [type, setType] = useState('');
  return (
    <Modal
      // isOpen={isNewTransactionModalOpen}
      isOpen={isOpenProp}
      // onRequestClose={handleCloseNewTransactionModal}
      onRequestClose={onRequestCloseProp}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <button className="react-modal-close" onClick={onRequestCloseProp}>
          <img src={CloseIcon} alt="Iconde de fechar" />
        </button>

        <h2>Cadastrar transação</h2>
        <input placeholder="Titulo" />

        <input placeholder="Valor" />

        <input placeholder="Categoria" />
        <TransactionTypeContainer>
          <ButtonRadio type="button" onClick={()=>setType('deposit')}>
            <ImgModal src={IncomeIcon} alt="" />
            <TextButton>Entrada</TextButton>
          </ButtonRadio>

          <ButtonRadio  type="button" onClick={()=>setType('withdraw')}>
            <ImgModal src={OutcomeIcon} alt="" />
            <TextButton>Saída</TextButton>
          </ButtonRadio>
        </TransactionTypeContainer>
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
