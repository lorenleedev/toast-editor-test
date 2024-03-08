import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

function App() {
    const editorRef = React.useRef<Editor>(null);
    const onChange = () => {
        const data = editorRef.current?.getInstance().getHTML();
        localStorage.setItem('content', data || '');
        console.log('content', data)
    };

    useEffect(() => {
        const data = localStorage.getItem('content');
        if (editorRef.current && data) {
            editorRef.current.getInstance().setHTML(data);
        }
    }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
            Toast Editor JS로 구현한 텍스트 에디터
        </h1>
          {
              editorRef && (
                  <div className="edit_wrap">
                      <Editor
                          initialValue="입력하면 string html로 localStorage에 저장됩니다. 새로고침하면, localStorage에 저장된 string html이 불러와집니다."
                          previewStyle="vertical"
                          height="600px"
                          initialEditType="wysiwyg"
                          useCommandShortcut={false}
                          language="ko-KR"
                          ref={editorRef}
                          onChange={onChange}
                      />
                  </div>
              )
          }
      </header>
    </div>
  );
}

export default App;
