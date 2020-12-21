import React from 'react';

const date = new Date();
const dateName = date.getDate(),
  monthName = date.getUTCMonth() + 1,
  yearName = date.getFullYear();



  //destructuring array
  const name = ["dog", "cat"];
  const [dog, cat] = name;




//creating component
function Card(props) {
  console.log(props);

  //destructuring object
  const {titleText, descText} = props;
  
  return (
      <div className="card">
        <h5 className="cardTitle">{titleText}</h5>
        <p className="cardDescrip">{descText}</p>
        <p className="cardFooter">{dateName + "/" + monthName + "/" + yearName}</p>
      </div>
  )
}

export default Card;