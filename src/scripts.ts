import axios from 'axios';

type Card = {
    
      id: number;
      title: string;
      text: string; 
  }

  const cardTitle = document.querySelector(".title1")
  const cardText = document.querySelector(".text1")
  const card1 = document.querySelector('.card1')

axios.get<Card[]>('http://localhost:3004/cards')
  .then((response) => {
    const currentTitle = response.data[0].title;
    const currentText = response.data[0].text;

    cardTitle.innerHTML = currentTitle;
    cardText.innerHTML = currentText;
  })

const editCardButton = document.querySelector('.editBtn')

  editCardButton.addEventListener('click', () => {

    // const inputs = document.querySelector(".input__group") as HTMLElement
    // inputs.style.display = "block";

    const currentTitle = cardTitle.textContent;
    const currentText = cardText.textContent;
  
    

    cardTitle.innerHTML = `<input type="text" id="newTitle" value=${currentTitle}>`;
    cardText.innerHTML = `<textarea id="newText">${currentText}</textarea>`;
  
    const updateButton = document.querySelector(".updateBtn");
    updateButton.addEventListener("click", () => {
      const newTitle = (document.getElementById("newTitle") as HTMLInputElement).value;
      const newText = (document.getElementById("newText") as HTMLInputElement).value;
      location.reload();
  
      axios.put<Card>('http://localhost:3004/cards/1', {
        id: 1, 
        title: newTitle,
        text: newText
      });
    });
    card1.appendChild(updateButton);
  });

  const deleteButton = document.querySelector('.deleteBtn');

  deleteButton.addEventListener('click', () => {
  
  axios.delete(`http://localhost:3004/cards/1`)
    .then(() => {
      const cardElement = document.querySelector('.card1');
      cardElement.remove();
      
    })
});




 






