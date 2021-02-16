import React from 'react';
import styled from 'styled-components';

const doordashURL = 'https://www.doordash.com/store/1519755/fr-CA?utm_campaign=1519755&utm_content&utm_medium=website&utm_source=partner-link';

const deliveryLinks = () => (
  <DoordashLink
    href={doordashURL}
    target="_blank"
    alt="Order Food Delivery with DoorDash"
    title="Order Food Delivery with DoorDash"
  >
    <svg width="240" height="240" viewBox="0 0 289 118" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="289" height="118" rx="24" fill="#EB1700" />
      <path fillRule="evenodd" clipRule="evenodd" d="M217.586 72.0257C217.586 69.3188 219.949 66.9557 223.644 66.9557C225.621 66.9127 227.554 67.6431 229.015 69.018C229.187 69.1899 229.187 69.4907 229.015 69.6625L227.339 71.3382C227.168 71.5101 226.91 71.5101 226.738 71.3812C225.965 70.6507 224.933 70.264 223.859 70.264C222.355 70.264 221.281 71.1234 221.281 72.1116C221.281 73.4651 222.828 73.9242 224.621 74.4566C227.098 75.1919 230.046 76.0672 230.046 79.6307C230.046 82.7242 227.683 85.0874 223.515 85.0874C221.195 85.1303 218.918 84.228 217.285 82.5953C217.114 82.4235 217.114 82.1657 217.285 81.9938L218.875 80.4041C219.047 80.2322 219.305 80.2322 219.477 80.4041C220.508 81.3923 221.84 81.9508 223.258 81.9508C225.105 81.9508 226.351 80.9626 226.351 79.7166C226.333 78.3236 224.776 77.8447 222.98 77.292C220.51 76.532 217.586 75.6326 217.586 72.0257ZM128.561 76.0215C128.561 79.1581 126.026 81.6931 122.889 81.6931C119.753 81.6931 117.218 79.1581 117.218 76.0215C117.218 72.885 119.753 70.35 122.889 70.35C126.026 70.35 128.561 72.885 128.561 76.0215ZM132.256 76.0215C132.256 71.0804 128.217 66.9986 122.889 66.9986C117.561 66.9986 113.522 71.0804 113.522 76.0215C113.522 80.9626 117.604 85.0444 122.889 85.0444C128.174 85.0444 132.256 80.9626 132.256 76.0215ZM98.1834 81.3062V70.6936H100.933H101.105C103.941 70.7795 106.175 73.1856 106.089 76.0214C106.089 78.9001 103.769 81.2633 100.89 81.3062H98.1834ZM109.827 76.0214C109.827 71.2092 106.003 67.3852 100.933 67.3852H94.9609C94.7031 67.3852 94.5312 67.5571 94.5312 67.8149V84.2279C94.5312 84.4857 94.7031 84.6576 94.9609 84.6576H100.933C106.003 84.6576 109.827 80.8336 109.827 76.0214ZM145.188 81.6931C148.325 81.6931 150.86 79.1581 150.86 76.0215C150.86 72.885 148.325 70.35 145.188 70.35C142.052 70.35 139.517 72.885 139.517 76.0215C139.517 79.1581 142.052 81.6931 145.188 81.6931ZM145.188 66.9986C150.516 66.9986 154.555 71.0804 154.555 76.0215C154.555 80.9626 150.473 85.0444 145.188 85.0444C139.903 85.0444 135.821 80.9626 135.821 76.0215C135.821 71.0804 139.86 66.9986 145.188 66.9986ZM163.191 70.6936H167.015C167.058 70.6936 167.101 70.6936 167.187 70.6506C168.433 70.6936 169.421 71.7677 169.378 73.0138V73.0997C169.292 74.3457 168.261 75.291 167.015 75.248H163.191V70.6936ZM159.926 67.3852C159.668 67.3852 159.496 67.5571 159.496 67.8149L159.539 84.2279C159.539 84.4857 159.711 84.6576 159.969 84.6576H162.761C163.019 84.6576 163.191 84.4857 163.191 84.2279V78.6423H166.414L169.636 84.4427C169.722 84.5716 169.851 84.6576 170.023 84.6576H172.944C173.03 84.6576 173.116 84.6146 173.202 84.5716C173.417 84.4427 173.46 84.1849 173.331 83.9701L169.98 78.1267C171.913 77.1815 173.116 75.205 173.073 73.0567C173.073 69.9202 170.581 67.3852 167.144 67.3852H159.926ZM182.698 70.7797V81.3923H185.405C188.284 81.3494 190.604 78.9862 190.604 76.1075C190.69 73.2717 188.455 70.8656 185.62 70.7797H185.448H182.698ZM185.405 67.4283C190.475 67.4283 194.299 71.2523 194.299 76.0645C194.299 80.8767 190.475 84.7007 185.405 84.7007H179.433C179.175 84.7007 179.003 84.5288 179.003 84.271V67.901C179.003 67.6432 179.175 67.4713 179.433 67.4713L185.405 67.4283ZM203.494 77.3533L205.599 71.6818L207.704 77.3533H203.494ZM200.873 84.3568L202.247 80.5758H208.95L210.325 84.3568C210.368 84.5287 210.54 84.6576 210.755 84.6576H213.719C213.762 84.6576 213.848 84.6576 213.934 84.6146C214.149 84.5287 214.235 84.2709 214.149 84.0561L207.704 67.686C207.661 67.4711 207.446 67.3852 207.275 67.3852H203.923C203.751 67.3852 203.536 67.5141 203.494 67.686L197.049 84.0561C197.006 84.099 197.006 84.1849 197.006 84.2709C197.049 84.5287 197.263 84.7005 197.478 84.6576H200.443C200.658 84.6576 200.83 84.5287 200.873 84.3568ZM245.944 74.3027V67.8149V67.7719C245.944 67.5571 246.116 67.3852 246.374 67.3852H249.167H249.21C249.424 67.3852 249.596 67.5571 249.596 67.8149V84.1849V84.2279C249.596 84.4427 249.424 84.6146 249.167 84.6146H246.374H246.331C246.116 84.6146 245.944 84.4427 245.944 84.1849V77.6111H238.554V84.2279V84.2709C238.554 84.5287 238.382 84.7005 238.124 84.7005H235.331H235.288C235.074 84.7005 234.902 84.5287 234.902 84.2709V67.9008V67.8578C234.902 67.6 235.074 67.4282 235.331 67.4282H238.124H238.167C238.382 67.4282 238.554 67.6 238.554 67.8578V74.3027H245.944Z" fill="white" />
      <path d="M79.8803 69.6195C77.9898 66.0533 74.2947 63.8621 70.2989 63.8621H39.8359C39.2773 63.8621 38.8047 64.3347 38.8047 64.9362C38.8047 65.194 38.9336 65.4518 39.1055 65.6666L45.7222 72.3264C46.3238 72.9279 47.0972 73.2716 47.9135 73.2287H69.3536C70.9004 73.2287 72.1464 74.4317 72.1464 75.9785C72.1464 77.5253 70.9434 78.7713 69.3966 78.7713H54.6592C54.1006 78.7713 53.628 79.2439 53.628 79.8455C53.628 80.1033 53.7569 80.3611 53.9288 80.5759L60.5455 87.2356C61.1471 87.8372 61.9205 88.1379 62.7798 88.1379H69.4825C78.1617 88.1379 84.7355 78.8572 79.8803 69.6195Z" fill="white" />
      <path d="M54.0909 30C50.6509 30 48.0109 32.64 48.0109 35.84C48.0109 39.04 50.6509 41.68 54.0909 41.68C57.2109 41.68 58.8109 39.44 58.8109 39.44L57.3709 37.92C57.3709 37.92 56.2509 39.52 54.0909 39.52C52.0109 39.52 50.4109 37.92 50.4109 35.84C50.4109 33.76 52.0109 32.16 54.0909 32.16C56.1709 32.16 57.2109 33.76 57.2109 33.76L58.7309 32.24C58.7309 32.24 57.2109 30 54.0909 30Z" fill="white" />
      <path d="M62.0091 37.52C62.0091 36.32 62.889 35.44 63.929 35.44C64.969 35.44 65.8491 36.32 65.8491 37.52C65.8491 38.72 64.969 39.6 63.929 39.6C62.889 39.6 62.0091 38.72 62.0091 37.52ZM68.0891 37.52C68.0891 35.36 66.169 33.44 63.929 33.44C61.689 33.44 59.769 35.36 59.769 37.52C59.769 39.68 61.689 41.6 63.929 41.6C66.169 41.6 68.0891 39.68 68.0891 37.52Z" fill="white" />
      <path d="M79.4466 41.44H81.6066V36.88C81.6066 34.56 80.4866 33.44 78.8066 33.44C77.0466 33.44 76.1666 34.8 76.1666 34.8C76.1666 34.8 75.6066 33.44 73.9266 33.44C72.5666 33.44 71.8466 34.56 71.8466 34.56V33.6H69.6866V41.44H71.8466V37.36C71.8466 36.16 72.4866 35.52 73.2866 35.52C74.0066 35.52 74.5666 36.08 74.5666 37.12V41.44H76.7266V37.36C76.7266 36.16 77.3666 35.52 78.1666 35.52C78.8866 35.52 79.4466 36.08 79.4466 37.12V41.44Z" fill="white" />
      <path d="M93.4466 41.44H95.6066V36.88C95.6066 34.56 94.4866 33.44 92.8066 33.44C91.0466 33.44 90.1666 34.8 90.1666 34.8C90.1666 34.8 89.6066 33.44 87.9266 33.44C86.5666 33.44 85.8465 34.56 85.8465 34.56V33.6H83.6866V41.44H85.8465V37.36C85.8465 36.16 86.4866 35.52 87.2866 35.52C88.0066 35.52 88.5666 36.08 88.5666 37.12V41.44H90.7266V37.36C90.7266 36.16 91.3666 35.52 92.1666 35.52C92.8866 35.52 93.4466 36.08 93.4466 37.12V41.44Z" fill="white" />
      <path d="M102.007 41.44C102.487 41.44 104.167 41.44 104.167 41.44V36.56C104.167 34.8 102.807 33.44 100.807 33.44C98.7266 33.44 97.6866 34.96 97.6866 34.96L98.8866 36.16C98.8866 36.16 99.4465 35.36 100.647 35.36C101.527 35.36 102.007 35.84 102.007 36.48L99.5266 36.928C98.0866 37.184 97.2066 38.08 97.2066 39.36C97.2066 40.56 98.2465 41.6 99.8465 41.6C101.207 41.6 102.007 40.64 102.007 40.64V41.44ZM100.407 39.84C99.6866 39.84 99.3666 39.52 99.3666 39.04C99.3666 38.56 99.6866 38.256 100.247 38.16L102.007 37.84V38.08C102.007 39.2 101.367 39.84 100.407 39.84Z" fill="white" />
      <path d="M108.409 33.6H106.249V41.44H108.409V37.36C108.409 36.16 109.049 35.52 110.009 35.52C110.889 35.52 111.529 36.16 111.529 37.12V41.44H113.689V36.88C113.689 34.72 112.409 33.44 110.649 33.44C109.209 33.44 108.409 34.56 108.409 34.56V33.6Z" fill="white" />
      <path d="M119.045 33.44C117.045 33.44 115.285 35.2 115.285 37.52C115.285 39.84 117.045 41.6 119.045 41.6C120.565 41.6 121.365 40.48 121.365 40.48V41.44H123.525V30.24H121.365V34.56C121.365 34.56 120.565 33.44 119.045 33.44ZM119.445 39.68C118.405 39.68 117.525 38.8 117.525 37.52C117.525 36.24 118.405 35.36 119.445 35.36C120.485 35.36 121.365 36.24 121.365 37.52C121.365 38.8 120.485 39.68 119.445 39.68Z" fill="white" />
      <path d="M133.127 38.24C133.127 38.24 133.207 37.92 133.207 37.36C133.207 35.12 131.527 33.44 129.287 33.44C127.047 33.44 125.207 35.28 125.207 37.52C125.207 39.76 127.047 41.6 129.367 41.6C131.527 41.6 132.727 40.24 132.727 40.24L131.607 38.8C131.607 38.8 130.887 39.76 129.527 39.76C128.327 39.76 127.607 39.04 127.447 38.24H133.127ZM129.287 35.28C130.247 35.28 130.887 35.92 131.047 36.72H127.447C127.687 35.92 128.327 35.28 129.287 35.28Z" fill="white" />
      <path d="M140.972 33.6H134.572V35.52H138.252L134.412 39.52V41.44H141.132V39.52H137.132L140.972 35.52V33.6Z" fill="white" />
      <path d="M153.533 38.24C153.533 38.24 153.613 37.92 153.613 37.36C153.613 35.12 151.933 33.44 149.693 33.44C147.453 33.44 145.613 35.28 145.613 37.52C145.613 39.76 147.453 41.6 149.773 41.6C151.933 41.6 153.133 40.24 153.133 40.24L152.013 38.8C152.013 38.8 151.293 39.76 149.933 39.76C148.733 39.76 148.013 39.04 147.853 38.24H153.533ZM149.693 35.28C150.653 35.28 151.293 35.92 151.453 36.72H147.853C148.093 35.92 148.733 35.28 149.693 35.28Z" fill="white" />
      <path d="M157.378 33.6H155.218V41.44H157.378V37.36C157.378 36.16 158.018 35.52 158.978 35.52C159.858 35.52 160.498 36.16 160.498 37.12V41.44H162.658V36.88C162.658 34.72 161.378 33.44 159.618 33.44C158.178 33.44 157.378 34.56 157.378 34.56V33.6Z" fill="white" />
      <path d="M170.255 30.24H168.095V41.44H170.255V30.24Z" fill="white" />
      <path d="M174.661 33.6H172.501V41.44H174.661V33.6ZM174.821 31.36C174.821 30.64 174.341 30.16 173.541 30.16C172.821 30.16 172.341 30.64 172.341 31.36C172.341 32.08 172.821 32.56 173.541 32.56C174.341 32.56 174.821 32.08 174.821 31.36Z" fill="white" />
      <path d="M182.187 40.8C182.187 42.08 181.387 42.88 180.107 42.88C178.667 42.88 177.947 41.84 177.947 41.84L176.587 43.12C176.587 43.12 177.787 44.8 180.187 44.8C182.587 44.8 184.347 43.04 184.347 40.8V33.6H182.187V34.56C182.187 34.56 181.387 33.44 179.867 33.44C178.107 33.44 176.347 35.2 176.347 37.36C176.347 39.52 178.107 41.28 179.867 41.28C181.387 41.28 182.187 40.16 182.187 40.16V40.8ZM178.587 37.36C178.587 36.24 179.387 35.44 180.347 35.44C181.307 35.44 182.187 36.272 182.187 37.36C182.187 38.448 181.307 39.28 180.347 39.28C179.387 39.28 178.587 38.48 178.587 37.36Z" fill="white" />
      <path d="M188.581 33.6H186.421V41.44H188.581V37.36C188.581 36.16 189.221 35.52 190.181 35.52C191.061 35.52 191.701 36.16 191.701 37.12V41.44H193.861V36.88C193.861 34.72 192.581 33.44 190.821 33.44C189.381 33.44 188.581 34.56 188.581 34.56V33.6Z" fill="white" />
      <path d="M203.377 38.24C203.377 38.24 203.457 37.92 203.457 37.36C203.457 35.12 201.777 33.44 199.537 33.44C197.297 33.44 195.457 35.28 195.457 37.52C195.457 39.76 197.297 41.6 199.617 41.6C201.777 41.6 202.977 40.24 202.977 40.24L201.857 38.8C201.857 38.8 201.137 39.76 199.777 39.76C198.577 39.76 197.857 39.04 197.697 38.24H203.377ZM199.537 35.28C200.497 35.28 201.137 35.92 201.297 36.72H197.697C197.937 35.92 198.577 35.28 199.537 35.28Z" fill="white" />
      <path d="M212.663 41.44C213.143 41.44 214.823 41.44 214.823 41.44V36.56C214.823 34.8 213.463 33.44 211.463 33.44C209.383 33.44 208.343 34.96 208.343 34.96L209.543 36.16C209.543 36.16 210.103 35.36 211.303 35.36C212.183 35.36 212.663 35.84 212.663 36.48L210.183 36.928C208.743 37.184 207.863 38.08 207.863 39.36C207.863 40.56 208.903 41.6 210.503 41.6C211.863 41.6 212.663 40.64 212.663 40.64V41.44ZM211.063 39.84C210.343 39.84 210.023 39.52 210.023 39.04C210.023 38.56 210.343 38.256 210.903 38.16L212.663 37.84V38.08C212.663 39.2 212.023 39.84 211.063 39.84Z" fill="white" />
      <path d="M221.145 41.44L224.105 33.6H221.865L220.025 38.8L218.185 33.6H215.945L218.905 41.44H221.145Z" fill="white" />
      <path d="M232.658 38.24C232.658 38.24 232.738 37.92 232.738 37.36C232.738 35.12 231.058 33.44 228.818 33.44C226.578 33.44 224.738 35.28 224.738 37.52C224.738 39.76 226.578 41.6 228.898 41.6C231.058 41.6 232.258 40.24 232.258 40.24L231.138 38.8C231.138 38.8 230.418 39.76 229.058 39.76C227.858 39.76 227.138 39.04 226.978 38.24H232.658ZM228.818 35.28C229.778 35.28 230.418 35.92 230.578 36.72H226.978C227.218 35.92 227.858 35.28 228.818 35.28Z" fill="white" />
      <path d="M233.863 37.52C233.863 39.68 235.783 41.6 238.103 41.6C240.263 41.6 241.303 40 241.303 40L240.023 38.64C240.023 38.64 239.303 39.68 238.103 39.68C236.983 39.68 236.023 38.72 236.023 37.52C236.023 36.32 236.983 35.36 238.103 35.36C239.303 35.36 239.943 36.4 239.943 36.4L241.303 35.04C241.303 35.04 240.263 33.44 238.103 33.44C235.783 33.44 233.863 35.36 233.863 37.52Z" fill="white" />
    </svg>
  </DoordashLink>
);

const DoordashLink = styled.a`
  text-decoration: none;
  background-color:#EB1700;

  transition: 0.2s all ease-out;
  &:hover{
    transform: scale(1.03);
    transition: 0.2s all ease-out;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.5);
  }
`;

export default deliveryLinks;
