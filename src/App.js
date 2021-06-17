import "./App.css";
import styled from "styled-components";
import "react-dropdown/style.css";
import { Dropdown } from "react-bootstrap";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

function App() {
  return (
    <Container>
      <Header >
        <LogoContainer>
          <img src="/images/hodlinfo-logo.png" alt="" />
          <p>
            Powered By <span>Finstreet</span>
          </p>
        </LogoContainer>

        <DropdownContainer>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              INR
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">INR</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              BTC
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">BTC</Dropdown.Item>
              <Dropdown.Item href="#/action-2">ETH</Dropdown.Item>
              <Dropdown.Item href="#/action-3">USDT</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              BUY BTC
            </Dropdown.Toggle>
          </Dropdown>
        </DropdownContainer>

        <RightContainer>
          <CountdownCircleTimer
            isPlaying
            size={30}
            duration={60}
            strokeWidth={3}
            colors={[["#5DC0BF", 1.33]]}
          >
            {({ remainingTime }) => remainingTime}
          </CountdownCircleTimer>

          <button>
            <img src="/images/telegram.png" alt="" />
            <span>Connect Telegram</span>
          </button>

          <label className="switch">
            <input type="checkbox" checked />
            <span className="slider round"></span>
          </label>
        </RightContainer>
      </Header>

      <Section>
        <h1>Best Price to Trade</h1>
        <Values>
          <p>
            0.45% <span>5mins</span>{" "}
          </p>
          <p>
            0.45% <span>5mins</span>
          </p>
          <h1>
            $29,10,534
            <span>Average BTC/INR net price including commission</span>{" "}
          </h1>
          <p>
            0.45% <span>5mins</span>
          </p>
          <p>
            0.45% <span>5mins</span>
          </p>
        </Values>
      </Section>

      <Img>
        <img
          src="https://hodlinfo.com/static/media/cryptonews.54869ee3.png"
          alt=""
        />
      </Img>

      <Table>
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Platform</th>
              <th>Last Traded Price</th>
              <th>Buy / Sell Price</th>
              <th>Difference</th>
              <th>Savings</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>WazirX</td>
              <td>₹ 29,74,162</td>
              <td>₹ 29,74,162 / ₹ 29,77,710</td>
              <td>2.01 %</td>
              <td>▲ ₹ 58,741</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Bitbns</td>
              <td>₹ 29,78,253</td>
              <td>₹ 29,78,288 / ₹ 29,88,238</td>
              <td>2.10 %</td>
              <td>▲ ₹ 61,360</td>
            </tr>
            <tr>
              <td>3</td>
              <td>WazirX</td>
              <td>₹ 29,74,162</td>
              <td>₹ 29,74,162 / ₹ 29,77,710</td>
              <td>2.01 %</td>
              <td>▲ ₹ 58,741</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Bitbns</td>
              <td>₹ 29,78,253</td>
              <td>₹ 29,78,288 / ₹ 29,88,238</td>
              <td>2.10 %</td>
              <td>▲ ₹ 61,360</td>
            </tr>
            <tr>
              <td>5</td>
              <td>WazirX</td>
              <td>₹ 29,74,162</td>
              <td>₹ 29,74,162 / ₹ 29,77,710</td>
              <td>2.01 %</td>
              <td>▲ ₹ 58,741</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Bitbns</td>
              <td>₹ 29,78,253</td>
              <td>₹ 29,78,288 / ₹ 29,88,238</td>
              <td>2.10 %</td>
              <td>▲ ₹ 61,360</td>
            </tr>
          </tbody>
        </table>
      </Table>

      <Ad>
        <img
          src="https://hodlinfo.com/static/media/BannerFTXNews.d0cd974b.png"
          alt=""
        />
      </Ad>

      <Footer>
        <p>Copyright © 2019</p>
        <p>HodlInfo.com</p>
        <p>Developed By QuadBTech</p>
      </Footer>
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: #13161e;
  
  font-family: "Oswald", sans-serif;
  color: white;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  @media (max-width: 940px) {
    flex-direction: column;
  }
`;
const LogoContainer = styled.div`
  margin-bottom: 10px;
  img {
    height: 50px;
    margin-bottom: -10px;
  }
  p {
    color: grey;
    span {
      color: #5dc0bf;
    }
  }
`;
const DropdownContainer = styled.div`
  * {
    margin: 0 5px;
  }
  margin-bottom: 10px;
  display: flex;
`;

const RightContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  button {
    margin-left: 14px;
    margin-right: 12px;
    background-color: #5dc0bf;
    border: none;
    display: flex;
    font-family: "Oswald", sans-serif;
    color: #fff;
    font-size: 17px;
    padding: 8px 5px;
    cursor: pointer;
    border-radius: 10px;
    img {
      height: 20px;
      margin-right: 6px;
    }
  }
`;

const Section = styled.div`
  h1 {
    text-align: center;
    font-weight: 300;
    color: grey;
    @media (max-width: 600px) {
      font-size: 18px;
    }
  }
`;
const Values = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;}
  p {
    font-size: 42px;
    font-weight: 300;
    color: #5dc0bf;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 900px) {
      font-size: 10px;
    }
    span {
      font-size: 20px;
      color: grey;
      @media (max-width: 900px) {
        font-size: 13px;
      }
    }
  }
  h1 {
    font-size: 70px;
    color: #fff;
    display: flex;
    flex-direction: column;
    @media (max-width: 900px) {
      font-size: 20px;
    }
    span {
      font-size: 20px;
      color: grey;
      @media (max-width: 900px) {
        font-size: 10px;
      }
    }
  }
`;
const Img = styled.div`
  padding: 20px;
  img {
    width: 100%;
  }
`;
const Table = styled.div`
  padding-left: 30px;
  thead {
    color: grey;
    font-size: 30px;
  }
  tbody {
    font-size: 30px;
  }
  @media (max-width: 1000px) {
    thead {
      font-size: 20px;
    }
    tbody {
      font-size: 20px;
    }
  }
  @media (max-width: 660px) {
    thead {
      font-size: 10px;
    }
    tbody {
      font-size: 10px;
    }
    padding-left: 10px;
  }
`;
const Ad = styled.div`
  padding: 40px 20px;
  img {
    width: 100%;
  }
`;
const Footer = styled.div`
  color: grey;
  display: flex;
  padding: 20px 0 40px 10px;
  border-top: 1px solid grey;
  p {
    font-size: 15px;
    margin-right: 10px;
  }
`;
