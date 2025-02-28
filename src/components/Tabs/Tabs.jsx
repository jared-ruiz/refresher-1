//wrapper componenet
//default prop = after destructured term
export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
  // const ButtonContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
