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
const calculateSmsLength = (text) => {
  // GSM 7-bit encoding characters
  const gsmChars = {
    '@': 14, '£': 15, '$': 20, '¥': 20, 'è': 20, 'é': 20, 'ù': 20, 'ì': 20, 'ò': 20, 'Ç': 20, 'Ø': 20, 'ø': 20,
    'Å': 20, 'å': 20, 'Δ': 20, '_': 20, 'Φ': 20, 'Γ': 20, 'Λ': 20, 'Ω': 20, 'Π': 20, 'Ψ': 20, 'Σ': 20, 'Θ': 20,
    'Ä': 20, 'Ö': 20, 'Ñ': 20, 'Ü': 20, '§': 20, '¿': 20, '¡': 20, 'Æ': 20, 'æ': 20, 'ß': 20, 'É': 20, ' ': 1,
    '0': 7, '1': 7, '2': 7, '3': 7, '4': 7, '5': 7, '6': 7, '7': 7, '8': 7, '9': 7, 'A': 7, 'B': 7, 'C': 7, 'D': 7,
    'E': 7, 'F': 7, 'G': 7, 'H': 7, 'I': 7, 'J': 7, 'K': 7, 'L': 7, 'M': 7, 'N': 7, 'O': 7, 'P': 7, 'Q': 7, 'R': 7,
    'S': 7, 'T': 7, 'U': 7, 'V': 7, 'W': 7, 'X': 7, 'Y': 7, 'Z': 7, 'È': 20, 'é': 20, 'Ù': 20, 'ì': 20, 'ò': 20,
    'à': 20, 'â': 20, 'ä': 20, 'å': 20, 'ç': 20, 'ê': 20, 'ë': 20, 'î': 20, 'ï': 20, 'ô': 20, 'ö': 20, 'ù': 20,
    'û': 20, 'ü': 20, 'ÿ': 20, '^': 20, '{': 20, '}': 20, '\\': 20, '[': 20, '~': 20, ']': 20, '|': 20, '€': 20
  };

  let length = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    length += gsmChars[char] || 1; // Default to 1 if not found in GSM 7-bit encoding
  }
  return length;
};





const Preview = ({ smsText, smsParts }) => {
  const maxLength = 160; // Maximum characters per SMS part
  const smsArray = [];

  let startIndex = 0;
  let endIndex = 0;

  for (let i = 0; i < smsParts; i++) {
    endIndex = startIndex + maxLength;

    // Adjust endIndex to avoid splitting words
    while (endIndex < smsText.length && smsText[endIndex] !== ' ' && smsText[endIndex - 1] !== ' ') {
      endIndex--;
    }

    const part = smsText.substring(startIndex, endIndex).trim();
    smsArray.push(part);

    // Update startIndex for next iteration
    startIndex = endIndex + 1; // Update startIndex to start after the space
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
