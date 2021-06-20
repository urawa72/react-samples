import React from 'react';
import ReactMarkdown from 'react-markdown';
import {
  CodeComponent,
  ReactMarkdownNames,
} from 'react-markdown/src/ast-to-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const App: React.VFC = () => {
  const components = {
    code: CodeBlock,
  };

  // Did you know you can use tildes instead of backticks for code in markdown? ✨
  const markdown = `Here is some JavaScript code:

~~~js
console.log('It works!')
~~~
`;

  return <ReactMarkdown components={components}>{markdown}</ReactMarkdown>;
};

const CodeBlock: CodeComponent | ReactMarkdownNames = ({
  inline,
  className,
  children,
  ...props
}) => {
  const match = /language-(\w+)/.exec(className || '');
  return !inline && match ? (
    <SyntaxHighlighter style={dark} language={match[1]} PreTag="div" {...props}>
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

export default App;
