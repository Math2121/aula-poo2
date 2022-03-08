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
  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState<number|string>();
  const [category, setCategory] = useState("");

  const handleCreateNewTransaction = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTitle("");
    setValue(0);
    setCategory("");
    setType('deposit')
  };
  return (
    <Modal
      // isOpen={isNewTransactionModalOpen}
      isOpen={isOpenProp}
      // onRequestClose={handleCloseNewTransactionModal}
      onRequestClose={onRequestCloseProp}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={handleCreateNewTransaction}>
        <button className="react-modal-close" onClick={onRequestCloseProp}>
          <img src={CloseIcon} alt="Icon de de fechar " />
        </button>

        <h2>Cadastrar transação</h2>
        <input
          placeholder="Título"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <input
          placeholder="Valor"
          onChange={(e) => setValue(+e.target.value)}
          value={value}

        />

        <input
          placeholder="Categoria"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        <TransactionTypeContainer>
          <ButtonRadio
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <ImgModal src={IncomeIcon} alt="" />
            <TextButton>Entrada</TextButton>
          </ButtonRadio>

          <ButtonRadio
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <ImgModal src={OutcomeIcon} alt="" />
            <TextButton>Saída</TextButton>
          </ButtonRadio>
        </TransactionTypeContainer>
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
