import React from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

const mdParser = new MarkdownIt();

function Editor(props) {
  return (
    <MdEditor
      value={props.value}
      style={{ height: '400px', width: '100%' }}
      renderHTML={(text) => mdParser.render(text)}
      onChange={props.handleChange}
      onImageUpload={props.handleUploadImage}
    />
  );
}

export default Editor;
