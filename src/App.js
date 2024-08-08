import React, { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import ExampleDocument from './utils/ExampleDocument';
import Editor from './components/Editor';

const App = () => {
  const [document, setDocument] = useState(ExampleDocument);

  const handleChange = newDoc => {
    setDocument(newDoc);
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">WYSIWYG Editor</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
      </Navbar>
      <Container>
        <Editor document={document} onChange={handleChange} />
      </Container>
      hello world
    </div>
  );
}

export default App;
