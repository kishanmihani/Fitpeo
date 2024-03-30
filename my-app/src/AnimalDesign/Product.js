import React from 'react'

function Product() {
    const products=['orange','apple','watermelon'];
    const list=[];
    for(const [i,product] of products.entries()){
        list.push(<li>{product}</li>)
    }
    const productes = ['oranges','appless','watermelones'];
    const lists = [];

    productes.forEach((productnew)=>{
        lists.push(<li>{productnew}</li>)
    })
    // renderComponent()
  return (
    <div>

        <div>
        {list}
        </div>
      
        <div>
        {lists}      
        </div>
    </div>
  )
}

function renderComponent(){
    const productes = ['oranges','appless','watermelones'];
    const lists = [];

    productes.forEach((productnew)=>{
        lists.push(<li>{productnew}</li>)
    })

    return (
        <div>
            <p>{lists}</p>
        </div>
        )
}

export default Product