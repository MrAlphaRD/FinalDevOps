const fs = require('fs');
const path = require('path');

test('index.html contiene "Hola Mundo"', () => {
  const filePath = path.join(__dirname, 'index.html');
  const content = fs.readFileSync(filePath, 'utf8');
  expect(content).toContain('Hola Mundo');
});