export const maincart_item = (item, index) => {
  return  /*html*/`
    <tr class="cart__wrap__form__table__body__row" data-line="${index + 1}">
    <td class="cart__wrap__form__table__body__row__cell">
      <a href="${item.link}" class="cart__wrap__form__table__body__row__cell__image">
        <img src="${item.image}" alt="${item.product_title}" width="400" height="400">
      </a>
    </td>
    <td class="cart__wrap__form__table__body__row__cell cart__wrap__form__table__body__row__cell--details">
      <a class="colour--green" href="${item.link}">
        <h5 class="no-margin"><b>${item.product_title}</b></h5>
      </a>
    </td>
    <td class="cart__wrap__form__table__body__row__cell">
      <div class="quantity quantity--cart">
        <div class="quantity-remove" onclick="changeMainCartQuantity(event,-1)">-</div>
        <div class="quantity-input">
          <input type="text" value="${item.quantity}">
        </div>
        <div class="quantity-add" onclick="changeMainCartQuantity(event,1)">+</div>
      </div>
    </td>
    <td class="cart__wrap__form__table__body__row__cell cart__wrap__form__table__body__row__cell--total">
        <h5 class="no-margin">$${parseFloat(item.quantity * item.price / 100).toFixed(2)}</h5>
    </td>
    <td class="cart__wrap__form__table__body__row__cell">
      <a href="/cart/change?line=${index + 1}&amp;quantity=0" data-cart-item-index="2" class="[ js-remove-from-cart ]">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 20 25">
          <path fill-rule="evenodd" d="M5.488 0v3.628H.045v1.814H1.86v19.955h16.327V5.442H20V3.628h-5.442V0h-9.07Zm1.814 1.814h5.442v1.814H7.302V1.814ZM3.673 5.442h12.699v18.14H3.673V5.443Zm2.722 2.721v12.699h1.814V8.163H6.395Zm5.442 0v12.699h1.814V8.163h-1.814Z"></path>
        </svg>
      </a>
    </td>
  </tr>`;
};

export const sidecart_item = (item, index) => {
  return  /*html*/`
        <div class="sidecart-draw-items__item" data-line="${index + 1}">
            <div class="sidecart-draw-items__item__image">
                <img src="${item.image || `//vital-bits.myshopify.com/cdn/shop/t/3/assets/placeholder.jpeg?v=49819949536947215331702494934`}" loading="lazy" alt="${item.product_title}">
            </div>
            <div class="sidecart-draw-items__item__details">
                
                <a href="#" class="sidecart-draw-items__item__details__remove" onclick="changeSideCartQuantity(event, 0)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><path fill="#000" fill-rule="nonzero" d="M12 10.169 7.831 6 12 1.83 10.169 0 6 4.17 1.831 0 .001 1.83 4.17 6 0 10.169 1.83 12 6 7.83 10.169 12z"/></svg>
                </a>

                <p><b>${item.product_title}</b></p>
                
                <p class="small">
                    ${item.product_title}
                    ${(item.variant_title) ? `<br>${item.variant_title}` : ``}
                </p>

                <div class="quantity">
                  <div class="quantity-remove" onclick="changeSideCartQuantity(event,-1)">-</div>
                  <div class="quantity-input">
                    <input type="text" value="${item.quantity}">
                  </div>
                  <div class="quantity-add" onclick="changeSideCartQuantity(event,1)">+</div>
                </div>

                <p class="sidecart-draw-items__item__details__price">$${parseFloat(item.quantity * item.price / 100).toFixed(2)}</p>
            </div>
        </div>
    `;
};

