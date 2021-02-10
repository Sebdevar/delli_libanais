import React from 'react';
import styled from 'styled-components';

const doordashURL = 'https://www.doordash.com/business/382786/?utm_source=partner-link&utm_medium=website&utm_campaign=382786&utm_content=red-xl';

const deliveryLinks = () => (
  <DoordashLink
    href={doordashURL}
    target="_blank"
    alt="Order Food Delivery with DoorDash"
    title="Order Food Delivery with DoorDash"
  >
    <svg width="240" height="240" viewBox="0 0 268 118" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <rect width="268" height="118" rx="24" fill="#EB1700" />
        <g clipPath="url(#clip1)">
          <path fillRule="evenodd" clipRule="evenodd" d="M206.586 75.0255C206.586 72.3187 208.949 69.9555 212.644 69.9555C214.621 69.9126 216.554 70.643 218.015 72.0179C218.187 72.1898 218.187 72.4905 218.015 72.6624L216.339 74.3381C216.168 74.5099 215.91 74.5099 215.738 74.381C214.965 73.6506 213.933 73.2639 212.859 73.2639C211.355 73.2639 210.281 74.1232 210.281 75.1115C210.281 76.465 211.828 76.924 213.621 77.4565C216.098 78.1918 219.046 79.0671 219.046 82.6305C219.046 85.7241 216.683 88.0872 212.515 88.0872C210.195 88.1302 207.918 87.2279 206.285 85.5952C206.114 85.4233 206.114 85.1655 206.285 84.9937L207.875 83.4039C208.047 83.2321 208.305 83.2321 208.477 83.4039C209.508 84.3921 210.84 84.9507 212.258 84.9507C214.105 84.9507 215.351 83.9625 215.351 82.7165C215.333 81.3235 213.776 80.8445 211.98 80.2918C209.51 79.5319 206.586 78.6324 206.586 75.0255ZM117.561 79.0214C117.561 82.1579 115.026 84.6929 111.889 84.6929C108.753 84.6929 106.218 82.1579 106.218 79.0214C106.218 75.8849 108.753 73.3499 111.889 73.3499C115.026 73.3499 117.561 75.8849 117.561 79.0214ZM121.256 79.0214C121.256 74.0803 117.217 69.9985 111.889 69.9985C106.561 69.9985 102.522 74.0803 102.522 79.0214C102.522 83.9625 106.604 88.0443 111.889 88.0443C117.174 88.0443 121.256 83.9625 121.256 79.0214ZM87.1834 84.3063V73.6936H89.9332H90.1051C92.9408 73.7796 95.1751 76.1857 95.0892 79.0214C95.0892 81.9002 92.769 84.2633 89.8902 84.3063H87.1834ZM98.8272 79.0214C98.8272 74.2092 95.0032 70.3852 89.9332 70.3852H83.9609C83.7031 70.3852 83.5312 70.5571 83.5312 70.8149V87.228C83.5312 87.4858 83.7031 87.6576 83.9609 87.6576H89.9332C95.0032 87.6576 98.8272 83.8336 98.8272 79.0214ZM134.188 84.6929C137.325 84.6929 139.86 82.1579 139.86 79.0214C139.86 75.8849 137.325 73.3499 134.188 73.3499C131.052 73.3499 128.517 75.8849 128.517 79.0214C128.517 82.1579 131.052 84.6929 134.188 84.6929ZM134.188 69.9985C139.516 69.9985 143.555 74.0803 143.555 79.0214C143.555 83.9625 139.473 88.0443 134.188 88.0443C128.903 88.0443 124.821 83.9625 124.821 79.0214C124.821 74.0803 128.86 69.9985 134.188 69.9985ZM152.191 73.6936H156.015C156.058 73.6936 156.101 73.6936 156.187 73.6507C157.433 73.6936 158.421 74.7678 158.378 76.0138V76.0997C158.292 77.3457 157.261 78.291 156.015 78.248H152.191V73.6936ZM148.926 70.3852C148.668 70.3852 148.496 70.5571 148.496 70.8149L148.539 87.228C148.539 87.4858 148.711 87.6576 148.969 87.6576H151.761C152.019 87.6576 152.191 87.4858 152.191 87.228V81.6424H155.414L158.636 87.4428C158.722 87.5717 158.851 87.6576 159.023 87.6576H161.944C162.03 87.6576 162.116 87.6147 162.202 87.5717C162.417 87.4428 162.46 87.185 162.331 86.9702L158.98 81.1268C160.913 80.1815 162.116 78.2051 162.073 76.0568C162.073 72.9202 159.581 70.3852 156.144 70.3852H148.926ZM171.698 73.7796V84.3922H174.405C177.284 84.3492 179.604 81.9861 179.604 79.1074C179.69 76.2716 177.455 73.8655 174.62 73.7796H174.448H171.698ZM174.405 70.4282C179.475 70.4282 183.299 74.2522 183.299 79.0644C183.299 83.8766 179.475 87.7006 174.405 87.7006H168.433C168.175 87.7006 168.003 87.5287 168.003 87.2709V70.9008C168.003 70.643 168.175 70.4712 168.433 70.4712L174.405 70.4282ZM192.494 80.3534L194.599 74.6818L196.704 80.3534H192.494ZM189.873 87.3569L191.247 83.5758H197.95L199.325 87.3569C199.368 87.5287 199.54 87.6576 199.755 87.6576H202.719C202.762 87.6576 202.848 87.6576 202.934 87.6147C203.149 87.5287 203.235 87.2709 203.149 87.0561L196.704 70.686C196.661 70.4712 196.446 70.3852 196.275 70.3852H192.923C192.751 70.3852 192.536 70.5141 192.494 70.686L186.049 87.0561C186.006 87.0991 186.006 87.185 186.006 87.2709C186.049 87.5287 186.263 87.7006 186.478 87.6576H189.443C189.658 87.6576 189.83 87.5287 189.873 87.3569ZM234.944 77.3028V70.8149V70.7719C234.944 70.5571 235.116 70.3852 235.374 70.3852H238.167H238.21C238.424 70.3852 238.596 70.5571 238.596 70.8149V87.185V87.228C238.596 87.4428 238.424 87.6147 238.167 87.6147H235.374H235.331C235.116 87.6147 234.944 87.4428 234.944 87.185V80.6112H227.554V87.228V87.2709C227.554 87.5287 227.382 87.7006 227.124 87.7006H224.331H224.288C224.074 87.7006 223.902 87.5287 223.902 87.2709V70.9008V70.8579C223.902 70.6001 224.074 70.4282 224.331 70.4282H227.124H227.167C227.382 70.4282 227.554 70.6001 227.554 70.8579V77.3028H234.944Z" fill="white" />
          <path d="M68.8803 72.6195C66.9898 69.0533 63.2947 66.8621 59.2989 66.8621H28.8359C28.2773 66.8621 27.8047 67.3347 27.8047 67.9362C27.8047 68.194 27.9336 68.4518 28.1055 68.6666L34.7222 75.3264C35.3238 75.9279 36.0972 76.2716 36.9135 76.2287H58.3536C59.9004 76.2287 61.1464 77.4317 61.1464 78.9785C61.1464 80.5253 59.9434 81.7713 58.3966 81.7713H43.6592C43.1006 81.7713 42.628 82.2439 42.628 82.8455C42.628 83.1033 42.7569 83.3611 42.9288 83.5759L49.5455 90.2356C50.1471 90.8372 50.9205 91.1379 51.7798 91.1379H58.4825C67.1617 91.1379 73.7355 81.8572 68.8803 72.6195Z" fill="white" />
        </g>
        <path d="M64.563 38.7C64.563 36.36 66.363 34.56 68.613 34.56C70.863 34.56 72.663 36.36 72.663 38.7C72.663 41.04 70.863 42.84 68.613 42.84C66.363 42.84 64.563 41.04 64.563 38.7ZM61.773 38.7C61.773 42.3 64.743 45.27 68.613 45.27C72.483 45.27 75.453 42.3 75.453 38.7C75.453 35.1 72.483 32.13 68.613 32.13C64.743 32.13 61.773 35.1 61.773 38.7ZM82.7493 36.09H82.3893C80.7693 36.09 79.8693 37.26 79.8693 37.26V36.18H77.4393V45H79.8693V40.77C79.8693 39.24 80.6793 38.43 81.9393 38.43C82.4793 38.43 82.7493 38.52 82.7493 38.52V36.09ZM87.7914 36C85.5414 36 83.5614 37.98 83.5614 40.59C83.5614 43.2 85.5414 45.18 87.7914 45.18C89.5014 45.18 90.4014 43.92 90.4014 43.92V45H92.8314V32.4H90.4014V37.26C90.4014 37.26 89.5014 36 87.7914 36ZM88.2414 43.02C87.0714 43.02 86.0814 42.03 86.0814 40.59C86.0814 39.15 87.0714 38.16 88.2414 38.16C89.4114 38.16 90.4014 39.15 90.4014 40.59C90.4014 42.03 89.4114 43.02 88.2414 43.02ZM103.634 41.4C103.634 41.4 103.724 41.04 103.724 40.41C103.724 37.89 101.834 36 99.3135 36C96.7935 36 94.7235 38.07 94.7235 40.59C94.7235 43.11 96.7935 45.18 99.4035 45.18C101.834 45.18 103.184 43.65 103.184 43.65L101.924 42.03C101.924 42.03 101.114 43.11 99.5835 43.11C98.2335 43.11 97.4235 42.3 97.2435 41.4H103.634ZM99.3135 38.07C100.394 38.07 101.114 38.79 101.294 39.69H97.2435C97.5135 38.79 98.2335 38.07 99.3135 38.07ZM110.839 36.09H110.479C108.859 36.09 107.959 37.26 107.959 37.26V36.18H105.529V45H107.959V40.77C107.959 39.24 108.769 38.43 110.029 38.43C110.569 38.43 110.839 38.52 110.839 38.52V36.09ZM117.863 40.59C117.863 39.24 118.853 38.25 120.023 38.25C121.193 38.25 122.183 39.24 122.183 40.59C122.183 41.94 121.193 42.93 120.023 42.93C118.853 42.93 117.863 41.94 117.863 40.59ZM124.703 40.59C124.703 38.16 122.543 36 120.023 36C117.503 36 115.343 38.16 115.343 40.59C115.343 43.02 117.503 45.18 120.023 45.18C122.543 45.18 124.703 43.02 124.703 40.59ZM128.93 36.18H126.5V45H128.93V40.41C128.93 39.06 129.65 38.34 130.73 38.34C131.72 38.34 132.44 39.06 132.44 40.14V45H134.87V39.87C134.87 37.44 133.43 36 131.45 36C129.83 36 128.93 37.26 128.93 37.26V36.18ZM139.725 32.4H137.295V45H139.725V32.4ZM144.682 36.18H142.252V45H144.682V36.18ZM144.862 33.66C144.862 32.85 144.322 32.31 143.422 32.31C142.612 32.31 142.072 32.85 142.072 33.66C142.072 34.47 142.612 35.01 143.422 35.01C144.322 35.01 144.862 34.47 144.862 33.66ZM149.549 36.18H147.119V45H149.549V40.41C149.549 39.06 150.269 38.34 151.349 38.34C152.339 38.34 153.059 39.06 153.059 40.14V45H155.489V39.87C155.489 37.44 154.049 36 152.069 36C150.449 36 149.549 37.26 149.549 37.26V36.18ZM166.194 41.4C166.194 41.4 166.284 41.04 166.284 40.41C166.284 37.89 164.394 36 161.874 36C159.354 36 157.284 38.07 157.284 40.59C157.284 43.11 159.354 45.18 161.964 45.18C164.394 45.18 165.744 43.65 165.744 43.65L164.484 42.03C164.484 42.03 163.674 43.11 162.144 43.11C160.794 43.11 159.984 42.3 159.804 41.4H166.194ZM161.874 38.07C162.954 38.07 163.674 38.79 163.854 39.69H159.804C160.074 38.79 160.794 38.07 161.874 38.07ZM176.641 36.18L174.931 41.49L173.221 36.18H170.701L173.707 45H175.831L177.541 39.96L179.251 45H181.375L184.381 36.18H181.861L180.151 41.49L178.441 36.18H176.641ZM188.153 36.18H185.723V45H188.153V36.18ZM188.333 33.66C188.333 32.85 187.793 32.31 186.893 32.31C186.083 32.31 185.543 32.85 185.543 33.66C185.543 34.47 186.083 35.01 186.893 35.01C187.793 35.01 188.333 34.47 188.333 33.66ZM191.67 35.19C191.67 35.91 191.22 36.36 190.68 36.36H189.87V38.52H191.4V42.12C191.4 44.19 192.39 45.18 194.19 45.18C195.09 45.18 195.81 44.91 195.81 44.91V42.84C195.81 42.84 195.45 43.02 194.91 43.02C194.28 43.02 193.83 42.57 193.83 42.03V38.52H195.63V36.36H193.83V33.57H191.67V35.19ZM200.405 32.4H197.975V45H200.405V40.41C200.405 39.06 201.125 38.34 202.205 38.34C203.195 38.34 203.915 39.06 203.915 40.14V45H206.345V39.87C206.345 37.44 204.905 36 202.925 36C201.305 36 200.405 37.26 200.405 37.26V32.4Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="268" height="118" fill="white" />
        </clipPath>
        <clipPath id="clip1">
          <rect width="211.547" height="24.2759" fill="white" transform="translate(27.8047 66.8621)" />
        </clipPath>
      </defs>
    </svg>
    <DoordashLogo>Order Food Delivery with DoorDash</DoordashLogo>
  </DoordashLink>
);

const DoordashLogo = styled.div`
  position: relative;
  width:100%;
  height:100%;
  margin: 0px auto;
  color:transparent;
`;

const DoordashLink = styled.a`
  text-decoration: none;
  background-color:#EB1700;
`;

export default deliveryLinks;
