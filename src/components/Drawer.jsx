import React from "react";

const Drawer = () => {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer">
        <h2 className="d-flex  justify-between mb-30">
          Shop <img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove" />
        </h2>

        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>199$</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>199$</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
          <div className="cartTotalBlock">
            <ul className="cartTotalBlock">
              <li>
                <span>Total:</span>
                <div></div>
                <b>398$</b>
              </li>
              <li>
                <span>Tax 5% :</span>
                <div></div>
                <b>19$</b>
              </li>
            </ul>
            <button className="greenButton">
              Сonfirm order <img src="/img/arrow.svg" alt="Arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
