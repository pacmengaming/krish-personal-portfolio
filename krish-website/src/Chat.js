import React, { useState } from 'react';

function Chat() {
  const [response, setResponse] = useState(null);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') {
      setResponse(<span>Please enter a question.</span>);
      return;
    }

    const botMessage = generateResponse(input);
    setResponse(botMessage.content);
    setInput('');
  };

  const generateResponse = (question) => {
    question = question.toLowerCase();
    let responseContent = (
      <span>
        I'm sorry, I didn't quite catch that. Could you please rephrase?
      </span>
    );

    if (question.includes('name')) {
      responseContent = <span>My name is Krish Vazirani.</span>;
    } else if (question.includes('experience') || question.includes('work')) {
      responseContent = <span>I have predominant experience in AI & ML.</span>;
    } else if (question.includes('coding') || question.includes('languages')) {
      responseContent = <span>I am proficient in Python, Java, and C++.</span>;
    } else if (question.includes('contact') || question.includes('email')) {
      responseContent = <span>You can reach me at khv@unc.edu.</span>;
    } else if (
      question.includes('projects') ||
      question.includes('portfolio')
    ) {
      responseContent = (
        <span>
          I have worked on a SaaS media production platform, custom marketing
          pipeline software, and more!
        </span>
      );
    } else if (
      question.includes('education') ||
      question.includes('school') ||
      question.includes('university')
    ) {
      responseContent = (
        <span>
          I am pursuing my B.S in Computer Science & Minor in Entrepreneurship @
          UNC-Chapel Hill.
        </span>
      );
    } else if (question.includes('hobbies') || question.includes('interests')) {
      responseContent = (
        <span>I enjoy rock climbing, coffee, and hiking in my free time.</span>
      );
    } else if (question.includes('skills') || question.includes('expertise')) {
      responseContent = (
        <span>I specialize in Machine Learning Engineering.</span>
      );
    } else if (question.includes('linkedin')) {
      responseContent = (
        <span>
          You can connect with me on LinkedIn here:{' '}
          <a
            href="https://www.linkedin.com/in/krish-vazirani-814511236/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white-500 underline"
          >
            My LinkedIn Profile
          </a>
          .
        </span>
      );
    }

    return { content: responseContent };
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-center w-full max-w-md px-4">
        <input
          type="text"
          className="input input-bordered w-full mb-4 bg-gray-800 text-white placeholder-gray-400"
          placeholder="Ask me anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          className="btn btn-outline btn-custom-green w-full mb-4"
          onClick={handleSend}
        >
          Submit
        </button>
      </div>
      {response && (
        <div className="w-full max-w-md px-4">
          <div className="bg-gray-800 text-white p-4 rounded-lg">
            {response}
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
