import React from "react";
import qa from "./qa";
import List from "./list";
import TopBar from "./topBar";
import WelcomeHeader from "./welcomeHeader";
import ContactUs from "./contactUs";
import "./App.css";
import logo from "./Logo.PNG";
import Header from "./Header";
import Footer from "./footer";

class Accordion extends React.Component {
  state = {
    currentIndex: -1,
  };

  handleChange = (i) => {
    this.setState({
      currentIndex: i,
    });
  };

  render() {
    const { handleChange } = this;
    const { currentIndex, isActive } = this.state;

    return (
      <div className="accordion">
        <Header />
        <TopBar />

        <img src={logo} alt="Cover Image" />
        <WelcomeHeader />
        <div style={{ background: "whitesmoke" }}>
          <div
            style={{
              background: "White",
              marginLeft: 150,
              marginRight: 150,
              marginTop: 0,
              marginBottom: 0,
            }}
          >
            {qa.map(function (e, i) {
              return (
                <List
                  question={e.title}
                  answer={e.contents}
                  handleChange={handleChange}
                  key={i}
                  index={i}
                  currentIndex={currentIndex}
                />
              );
            })}
            <ContactUs />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Accordion;
