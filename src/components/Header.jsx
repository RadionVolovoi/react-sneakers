import React from "react";

const Header = () => {
  return (
    <div>
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.svg" alt="img" />
          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Best Sneakers Shop</p>
          </div>
        </div>

        <div>
          <ul className="d-flex">
            <li className="mr-30">
              <svg
                fill="none"
                height="20"
                viewBox="0 0 30 27"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.39999 1.70001H6.60001"
                  stroke="#4F4F4F"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <path
                  d="M6.60001 1.70001L11 18.9"
                  stroke="#4F4F4F"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <path
                  d="M11.8 18.9H28.3"
                  stroke="#4F4F4F"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <path
                  d="M13.8 25.7C15.4569 25.7 16.8 24.3569 16.8 22.7C16.8 21.0432 15.4569 19.7 13.8 19.7C12.1431 19.7 10.8 21.0432 10.8 22.7C10.8 24.3569 12.1431 25.7 13.8 25.7Z"
                  stroke="#4F4F4F"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <path
                  d="M25.3 25.7C26.9568 25.7 28.3 24.3569 28.3 22.7C28.3 21.0432 26.9568 19.7 25.3 19.7C23.6431 19.7 22.3 21.0432 22.3 22.7C22.3 24.3569 23.6431 25.7 25.3 25.7Z"
                  stroke="#4F4F4F"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
                <path
                  d="M25.7 14.6H11.3C10.7 14.6 10.1 14.2 10 13.6L8.1 6.90001C7.9 6.00001 8.49999 5.20001 9.39999 5.20001H27.5C28.4 5.20001 29.1 6.10001 28.8 6.90001L26.9 13.6C26.9 14.2 26.4 14.6 25.7 14.6Z"
                  stroke="#4F4F4F"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                />
              </svg>
              <span>100$</span>
            </li>
            <li>
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 6C9.79088 6 8.00002 7.79086 8.00002 10C8.00002 12.2091 9.79088 14 12 14C14.2092 14 16 12.2091 16 10C16 7.79086 14.2092 6 12 6ZM10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10C14 11.1046 13.1046 12 12 12C10.8954 12 10 11.1046 10 10Z"
                  fill="#000000"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.3281 18.8044C17.502 20.7701 14.8946 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.5636 21.0353 16.9019 19.4492 18.6717C19.4574 18.7043 19.4654 18.7371 19.4732 18.7701L19.3281 18.8044ZM4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 13.7512 19.4373 15.3709 18.483 16.6883C18.4787 16.6833 18.4745 16.6783 18.4702 16.6733C17.9897 16.1093 17.3996 15.7355 16.7537 15.4902C15.5207 15.0218 13.9981 15 12.5 15H11.5C10.0157 15 8.58663 15.0178 7.4546 15.5071C6.72237 15.8235 6.15855 16.3097 5.73753 16.9786C4.6499 15.6123 4 13.8821 4 12ZM7.23094 18.4237C8.56265 19.414 10.2129 20 12 20C13.9364 20 15.7121 19.312 17.096 18.1672C17.048 18.0951 16.9985 18.0298 16.9479 17.9704C16.7202 17.7032 16.4289 17.5062 16.0436 17.3598C15.2144 17.0449 14.0755 17 12.5 17H11.5C9.91075 17 8.9284 17.0489 8.2481 17.3429C7.85089 17.5146 7.50217 17.7968 7.23094 18.4237Z"
                  fill="#000000"
                />
              </svg>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
