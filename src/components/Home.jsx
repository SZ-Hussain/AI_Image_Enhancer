
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'
import { useState } from 'react'
import { use } from 'react';

const Home = () => {

    const [uploadedImage, setUploadedImage] = useState(null);
    const [enhancedImage, setEnhancedImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const UploadImageHandler = (file) => {
        setUploadedImage(URL.createObjectURL(file))
        setLoading(true);
    }

  return (
    <>

        <ImageUpload UploadImageHandler={UploadImageHandler}/>
        <ImagePreview loading={loading} uploaded={uploadedImage} enhanced={enhancedImage}/>

    </>
  )
}

export default Home