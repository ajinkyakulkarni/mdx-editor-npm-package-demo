# MDX Editor NPM Package Demo

A React application demonstrating the usage of the `veda-content-editor` npm package.

## Overview

This is a demo application that shows how to integrate the VEDA Content Editor into your React project. The editor provides MDX editing capabilities with custom components for maps, charts, and other VEDA-specific features.

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- A Mapbox token (for map functionality)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/ajinkyakulkarni/mdx-editor-npm-package-demo.git
cd mdx-editor-npm-package-demo
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Copy the sample environment file
cp sample.env .env

# Edit .env and add your Mapbox token
# You can get a free token from https://account.mapbox.com/
```

## Environment Variables

The application requires the following environment variables:

- `VITE_MAPBOX_TOKEN`: Your Mapbox access token for map functionality
- `VITE_API_RASTER_ENDPOINT`: API endpoint for raster data (default provided)
- `VITE_API_STAC_ENDPOINT`: API endpoint for STAC data (default provided)

## Usage

### Development

Start the development server:
```bash
npm run dev
```

The application will open at http://localhost:5173 (or another port if 5173 is in use).

### Building for Production

Build the application:
```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Using the VEDA Content Editor

The application demonstrates a basic integration of the `veda-content-editor` package:

```jsx
import { VEDAContentEditor } from 'veda-content-editor'
import 'veda-content-editor/style.css'

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
```

## Features

The VEDA Content Editor includes:

- **MDX Editing**: Full MDX support with live preview
- **Custom Components**: 
  - Map component with Mapbox integration
  - Chart components
  - Block components
- **Rich Text Editing**: Bold, italic, headings, lists, code blocks
- **Source Mode**: View and edit raw MDX (read-only to preserve custom components)
- **Responsive Design**: Works on desktop and mobile devices

## NPM Package

This demo uses the `veda-content-editor` npm package:
- NPM: https://www.npmjs.com/package/veda-content-editor
- Version: 0.1.0

To use in your own project:
```bash
npm install veda-content-editor
```

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you encounter any issues or have questions, please open an issue on GitHub. 