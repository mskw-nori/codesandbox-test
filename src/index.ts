import "./styles.css";

const div = document.getElementById("imcomplete-area");
const imcompleteUl = document.createElement("ul");
div?.appendChild(imcompleteUl);

const completeDiv = document.getElementById("complete-area");
const completeUl = document.createElement("ul");
completeDiv?.appendChild(completeUl);

const onClickAdd = () => {
  const inputText: HTMLInputElement = <HTMLInputElement>(
    document.getElementById("add-text")
  );
  const value: string = inputText.value;

  const li = document.createElement("li");
  li.innerText = value;
  li.className = "list-row";

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode as HTMLUListElement;
    imcompleteUl.removeChild(deleteTarget);
  });

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const addTarget = completeButton.parentElement;
    const text = addTarget?.firstChild?.textContent as string;

    const completeLi = document.createElement("li");
    completeLi.innerText = text;
    completeLi.className = "list-row";
    console.log(completeLi);

    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    returnButton.addEventListener("click", () => {
      const addTarget = returnButton.parentElement;
      const text = addTarget?.firstChild?.textContent as string;

      const returnedLi = document.createElement("li");
      returnedLi.innerText = text;
      returnedLi.className = "list-row";
      imcompleteUl.appendChild(returnedLi);
      returnedLi.appendChild(completeButton);
      returnedLi.appendChild(deleteButton);

      const deleteTarget = returnButton.parentNode as HTMLUListElement;
      completeUl.removeChild(deleteTarget);
    });

    completeUl.appendChild(completeLi);
    completeLi.appendChild(returnButton);

    const deleteTarget = completeButton.parentNode as HTMLUListElement;
    imcompleteUl.removeChild(deleteTarget);
  });

  imcompleteUl.appendChild(li);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  inputText.value = "";
};

document
  .getElementById("add-button")
  ?.addEventListener("click", () => onClickAdd());
