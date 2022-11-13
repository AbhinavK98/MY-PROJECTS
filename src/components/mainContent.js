import React, {useCallback} from 'react'
import product_card from '../data/product_data'

const MainContent = () => {
  console.log(product_card)


  const raiseInvoiceClicked = useCallback(
    (prop) => () => {
      //const url = 'https://stackoverflow.com/questions/47406344/how-to-open-a-page-in-new-tab-on-click-of-a-button-in-react-i-want-to-send-some';
      window.open(prop, '_blank');
    },
    [],
  )

  

  

  const listItems = product_card.map((item) => (
    <div className="card" key={item.id}>
      <div className="card_img">
        <img src={item.thumb} />
      </div>
      <div className="card_header">
        <h2>{item.project_name}</h2>
        <p>{item.description}</p>
        <p className="price">{item.price}</p>
        <div className="btn" onClick={raiseInvoiceClicked(item.Link)}>Live Link </div>
      </div>
    </div>
  ))

  return (
    <div className="main_content">
      <h3></h3>
      {listItems}
    </div>
  )
}
export default MainContent
