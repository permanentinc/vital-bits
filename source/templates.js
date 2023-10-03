export const sidecart_item = (item, index) => {
    return  /*html*/`
        <div class="sidecart-draw-items__item" data-line="${index + 1}">
            <div class="sidecart-draw-items__item__image">
                <img src="${item.image}" loading="lazy" alt="${item.product_title}">
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

                <p class="sidecart-draw-items__item__details__price">$${item.price / 100}</p>
            </div>
        </div>
    `;
};