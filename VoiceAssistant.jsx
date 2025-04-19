import React, { useEffect, useState } from 'react';
import './VoiceAssistant.css'; // Ensure this file contains your CSS styles

const VoiceAssistant = () => {
  const [isListening, setIsListening] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
      setMessage('Listening...');
    };

    recognition.onresult = (event) => {
      const command = event.results[0][0].transcript.toLowerCase();
      setMessage(`You said: ${command}`);
      handleCommand(command);
    };

    recognition.onend = () => {
      setIsListening(false);
      setMessage('Stopped listening.');
    };

    if (isListening) {
      recognition.start();
    }

    return () => {
      recognition.stop();
    };
  }, [isListening]);

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  const handleCommand = (command) => {
    if (command.includes('open about')) {
      speak("Opening About page...");
      window.location.href = '/about';
    } 
    
    else if (command.includes('open portfolio')) {
      speak("Opening Portfolio...");
      window.location.href = '/portfolio';
    }



    // else if (command.includes('open home')) {
    //   speak("Opening Home page...");
    //   window.location.href = '/home';
    // }


     else if (command.includes('open contact')) {
      speak("Opening Contact page...");
      window.location.href = '/contact';
    } 
    
    
    else if (command.includes('open feedback')) {
      speak("Opening Feedback page...");
      window.location.href = '/feedback';
    }
    
    else if (command.includes("open google")) {
      speak("Opening Google...");
      window.open("https://www.google.com", "_blank");
    } 
    
    
    else if (command.includes("open facebook")) {
      speak("Opening Facebook...");
      window.open("https://www.facebook.com", "_blank");
    }
    
    else if (command.includes("open instagram")) {
      speak("Opening Instagram...");
      window.open("https://www.instagram.com", "_blank");
    } 
    
    else if (command.includes("What are seven wonders of the world")) {
      speak("Opening results for seven wonders of the world...");
      window.open("https://www.google.com/search?q=7+wonders+of+the+world", "_blank");
    } 
    
    else if (command.includes("open whatsapp")) {
      speak("Opening WhatsApp...");
      window.open("https://www.whatsapp.com", "_blank");
    }
    
    else {
      // Perform a Google search if command not recognized
      speak("Searching Google for " + command);
      window.open(
        `https://www.google.com/search?q=${encodeURIComponent(command)}`,
        "_blank"
      );
    }
  };

  return (
    <div className="voice-assistant">
      <div className="voice-assistant-header">
        <h1 className="caption">Enjoy a seamless, hands-free experience—just speak and go.!!</h1>
        <button onClick={() => setIsListening(!isListening)}>
          {isListening ? 'Stop Listening' : 'Start Listening'}
        </button>
      </div>
      <p>{message}</p>
    </div>
  );
};

export default VoiceAssistant;