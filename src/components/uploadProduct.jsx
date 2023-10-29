import React, { useState } from 'react'
import { storage } from '../firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid'
import { database } from '../firebase'
import { ref as refdb, set } from 'firebase/database'


export const UploadProduct = () => {
    const [productOwner, setProductOwner] = useState('')
    const [productName, setProductName] = useState('')
    const [dimensions, setDimensions] = useState('')
    const [price, setPrice] = useState('')

    // const starCountRef = refdb(database, '/')
    // onValue(starCountRef, (snapshot) => {
    //     const data = snapshot.val()
    //     console.log(data)
    // })



    const pushToDB = (imageURL) => {
        if (productName == null) return;
        set(refdb(database, `${productName + v4()}`), {
            id: v4(),
            productOwner: productOwner,
            productName: productName,
            dimensions: dimensions,
            price: price,
            productImageURL: imageURL
        })
        alert("Product Uploaded!")
        setProductOwner('')
        setProductName('')
        setDimensions('')
        setPrice('')
    }


    const [imageUpload, setImageUpload] = useState('')
    const uploadImage = (() => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                pushToDB(url)
            })
            
        })
    })
    return (
        <div>
            <label className="fileUpload">
            <input
                type="file"
                onChange={(event) => {
                    setImageUpload(event.target.files[0])
                }}
            />
            </label>

            <input placeholder='Product Owner' value={productOwner}
            onChange={(e) => setProductOwner(e.target.value)} />

            <input placeholder='Product Name' value={productName}
            onChange={(e) => setProductName(e.target.value)} />

            <input placeholder='Dimensions' value={dimensions}
            onChange={(e) => setDimensions(e.target.value)} />

            <input placeholder='price' value={price}
            onChange={(e) => setPrice(e.target.value)} />

            <button onClick={uploadImage} >
                Upload Product
            </button>
        </div>
    )
}
