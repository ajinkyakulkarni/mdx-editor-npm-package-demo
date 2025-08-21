import { VEDAContentEditor } from 'dev-veda-content-editor'
import 'dev-veda-content-editor/style.css'

const initialContent = `# Hello from VEDA Editor

This is a test of the VEDA content editor.

## Features

- **Bold text**
- *Italic text*
- Code blocks
- Lists
- And more!

\`\`\`javascript
console.log('Hello, VEDA!')
\`\`\`
`

function App() {
  const vedaConfigData = {
    envMapboxToken: import.meta.env.VITE_MAPBOX_TOKEN || '',
    envApiStacEndpoint: import.meta.env.VITE_API_STAC_ENDPOINT || '',
    envApiRasterEndpoint: import.meta.env.VITE_API_RASTER_ENDPOINT || '',
  };
  
  return (
    <VEDAContentEditor
      value={initialContent}
      onChange={(newContent) => {
        console.log('Content changed:', newContent)
      }}
      placeholder="Start typing..."
      vedaConfig={vedaConfigData}
    />
  )
}

export default App