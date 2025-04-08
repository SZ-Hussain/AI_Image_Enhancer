
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'
import { useState } from 'react'
import { use } from 'react';
import enhancedImageAPI from '../../utils/enhancedImageApi';

const Home = () => {

    const [uploadedImage, setUploadedImage] = useState(null);
    const [enhancedImage, setEnhancedImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const UploadImageHandler = async (file) => {
        setUploadedImage(URL.createObjectURL(file))
        setLoading(true);
        try {
            // code which may produce error
            const enhancedURL = await enhancedImageAPI(file);
            setEnhancedImage(enhancedURL);
            setLoading(false);
        } catch (error) {
            // code to handle the error and show message
            console.log(error);
            alert('Error while enhancing the image. Please try again later.')
        }
    }

  return (
    <>

        <ImageUpload UploadImageHandler={UploadImageHandler}/>
        <ImagePreview loading={loading} uploaded={uploadedImage} enhanced={enhancedImage? enhancedImage : ''}/>

    </>
  )
}

export default Home