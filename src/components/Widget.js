import { useState, useEffect } from "react";
import { ChatWidget } from "@papercups-io/chat-widget";
import "../App.css";
// import env from "react-dotenv";

const Widget = () => {
  //For defining the state of the application
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 485); // State to track if the viewport is mobile
  const [isOpen, setIsOpen] = useState(false); // State to track if the chat widget is open

  //For defining the window resize function invocation
  useEffect(() => {
     // Function to update isMobile state based on window width
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 485);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Define custom styles for the chat widget based on the viewport size
  const customStyles = isMobile
    ? {
        chatContainer: {
          top: 0,
          left: 0,
          right: 0,
          width: "100%",
          height: "100%",
          maxHeight: "100vh",
          maxWidth: "100vw",
        },
      }
    : {};

  return (
    <>
      <ChatWidget
        token="84b78bfc-c829-49c2-829c-e86db2d01140"
        inbox="1aaeeb74-d859-4ad4-90cb-def15663e771"
        title="Meet the hospitality AI experts!"
        subtitle="Product support assistant. Ask me anything about inhotel.io in your own language."
        primaryColor="#6B67F0"
        greeting="How can I help you today?"
        awayMessage="We are away. Please drop us a message. We will get back to you soon."
        newMessagePlaceholder="Start typing..."
        showAgentAvailability={true}
        agentAvailableText="We're online right now!"
        agentUnavailableText="We're away at the moment."
        requireEmailUpfront={true}
        iconVariant="filled"
        baseUrl="https://inhotel.io"
        styles={customStyles} // Custom styles for the chat widget
        onChatOpened={() => {
          setIsOpen(true); // Callback function invoked when chat widget is opened
        }}
        onChatClosed={() => {
          setIsOpen(false); // Callback function invoked when chat widget is closed
        }}
        hideToggleButton={isOpen && isMobile} // Flag to hide the toggle button when widget is open on mobile
      />
    </>
  );
};

export default Widget;
