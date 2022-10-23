import React from 'react'
function Button({ onClick, children }) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}
function Toolbar({ onPlayMovie, onUploadImage }) {
    return (
        <div>
            <Button onClick={onPlayMovie}>
                Play Movie
            </Button>

            <Button onClick={onUploadImage}>
                Upload Image
            </Button>
        </div>
    )
}
function App() {
  return (
    <div>
        <Toolbar 
            onPlayMovie={() => alert('Playing!')}
            onUploadImage={() => alert('Uploading!')}
        />
    </div>
  )
}

export default App 