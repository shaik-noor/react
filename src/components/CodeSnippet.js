import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaClipboard } from 'react-icons/fa';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './CodeSnippet.css';

const CodeSnippet = ({ language, code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div>
      <div className="copy-button">
        <CopyToClipboard text={code} onCopy={handleCopyClick}>
          <span className="copy-icon">
            <FaClipboard />
          </span>
        </CopyToClipboard>
        {copied && <span className="copy-success">Copied!</span>}
      </div>
      <SyntaxHighlighter language={language} style={solarizedlight}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippet;
