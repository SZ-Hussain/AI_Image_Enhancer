

const ImageUpload = (props) => {

    const ShowImageHandler = (e) => {
        const file = e.target.files[0]
        props.UploadImageHandler(file)
        
    }

  return (
    <div className='bt-white shadow-lg rounded-2xl p-6 w-full max-w-2xl'>
        <label htmlFor="fileInput" className='block w-full cursor-pointer p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 transition-all'>
            <input type="file" id="fileInput" className='hidden' onChange={ShowImageHandler} />
            <span className='text-lg font-medium text-gray-500'>Click & Drag to Upload your Image</span>
        </label>
    </div>
  )
}

export default ImageUpload