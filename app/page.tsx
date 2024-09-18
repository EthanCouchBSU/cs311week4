
import { useState } from 'react'
import GalleryComponent from "./gallery"
import { url } from 'inspector';
const urlList = ["myb1.jpg", "AIforest.jpg","image (1).png"]

export default function Home() {
  return (
    <main>
      <GalleryComponent urlList = {urlList}/>
    </main>
    
  );
        
}
