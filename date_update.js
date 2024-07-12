function updateCopyright() {
  const curentYear = new date().getFullyear();
  const copyrigthElement = document.querySelector(".footer_copyright");
  copyrigthElement.textContent = `© ${curentYear}, Todos los Derechos Reservados`;
}
export default updateCopyright;
