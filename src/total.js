import React from 'react'
import "./total.css";

function total({totalprice}) {
  return (
    <div className='checkout'>
        <h1>Ödenecek Tutar </h1>
        <div className='money'>
            <h4>{totalprice}</h4>
            <p>TL</p>
        </div>
        <button>Alışverişi tamamla</button>
        <p className='description'>
          Mağzamızdan ürün siparişi verdiğiniz için teşekkür ederiz. Daha güzel günlerde tekrardan görüşmek üzere.
        </p>
        <div className='cargo'>
          <div className='cargoamount'>
            <p>Kargo</p>
            <p className='freeshipping'>Bedava</p>
            <p className='cargoamountTL'>12 TL</p>
          </div>
          <div className='ordertotal'>
            <p>Ürünler</p>
            <p className='orderamount'>{totalprice}</p>
          </div>

        </div>


    </div>
  )
}

export default total