const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  const { path: requestedPath } = req.query;
  let filePath;

  // If the requested path is empty (root path), serve the main index.html
  if (!requestedPath) {
    filePath = path.join(process.cwd(), 'index.html');
  if (fs.existsSync(filePath)) {
    return res.status(200).sendFile(filePath);
  }
  } else {
    // Check if the requested path exists as a file in 'pages' directory
    filePath = path.join(process.cwd(), 'pages', `${requestedPath}.html`);
   if (fs.existsSync(filePath)) {
     return res.status(200).sendFile(filePath);
   }

    // Check if the requested path exists as a file in 'fragments' directory
    filePath = path.join(process.cwd(), 'fragments', requestedPath, 'index.html');
    if (fs.existsSync(filePath)) {
      return res.status(200).sendFile(filePath);
  }
  }

  // If no file is found, return the custom 404 page
  const notFoundPath = path.join(process.cwd(), 'pages', '404.html');
  if (fs.existsSync(notFoundPath)) {
    return res.status(404).sendFile(notFoundPath);
  }

  // If the custom 404 page is not found, return a basic 404 error
  return res.status(404).send('<h1>404: Página Não Encontrada</h1>');
};