import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import defaultTheme from 'tailwindcss/defaultTheme';
import rehypeFormat from 'rehype-format'; 
import MDEditor from '@uiw/react-md-editor';



interface MarkdownViewerProps {
  markdownContent: string;
}

interface Components {
  h1: React.ComponentType<any>;
 
}

const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ markdownContent }) => {

  return (
    <MDEditor.Markdown source={markdownContent} className='p-5 text font-roboto text-custom-terciaryColor w-full rounded-lg bg-custom-secondaryButton bg-opacity-5' />
  );
};

export default MarkdownViewer;