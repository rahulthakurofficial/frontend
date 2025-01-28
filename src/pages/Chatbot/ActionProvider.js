class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    handleAdmissions() {
      const message = this.createChatBotMessage("Admissions open! Visit our Admissions page for details.");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }
  
    handlePhoneNumberRequest() {
      const message = this.createChatBotMessage("Could you please share your phone number?");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }
  
    handleUserResponse(userInput) {
    
      if (userInput && userInput.trim().length > 0) {
        this.handlePhoneNumberRequest();
      } else {
       
        const message = this.createChatBotMessage("I'm still here to help. Can you provide more details?");
        this.setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message],
        }));
      }
    }
  
    handleDefault() {
      const message = this.createChatBotMessage("I'm here to help. Can you be more specific?");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
  
    
    }
  }
  
  export default ActionProvider;
  