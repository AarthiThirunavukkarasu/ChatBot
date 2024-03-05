# import React, { useState } from 'react';

const SmsCalculator = () => {
  const [smsText, setSmsText] = useState('');
  const [smsLength, setSmsLength] = useState(0);
  const [smsParts, setSmsParts] = useState(1);

  const handleInputChange = (e) => {
    const text = e.target.value;
    setSmsText(text);
    const length = calculateSmsLength(text);
    setSmsLength(length);
    const parts = calculateSmsParts(length);
    setSmsParts(parts);
  };

  const calculateSmsLength = (text) => {
    // Implement GSM 7-bit encoding to calculate SMS length
    return text.length;
  };

  const calculateSmsParts = (length) => {
    // Calculate the number of parts required based on SMS length
    return Math.ceil(length / 160);
  };

  return (
    <div>
      <h1>SMS Length and Part Calculator</h1>
      <textarea value={smsText} onChange={handleInputChange} />
      <p>SMS Length: {smsLength}</p>
      <p>SMS Parts: {smsParts}</p>
      <Preview smsText={smsText} smsParts={smsParts} />
    </div>
  );
};

const Preview = ({ smsText, smsParts }) => {
  // Split SMS into multiple parts if necessary
  const smsArray = [];
  for (let i = 0; i < smsParts; i++) {
    smsArray.push(smsText.substring(i * 160, (i + 1) * 160));
  }

  return (
    <div>
      <h2>Preview</h2>
      {smsArray.map((part, index) => (
        <p key={index}>{part}</p>
      ))}
    </div>
  );
};

export default SmsCalculator;
for (let i = 0; i < smsParts; i++) {
    const startIndex = i * maxLength;
    const endIndex = Math.min((i + 1) * maxLength, smsText.length);
    const part = smsText.substring(startIndex, endIndex);
    smsArray.push(part);
  }
