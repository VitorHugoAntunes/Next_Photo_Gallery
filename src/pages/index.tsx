import MainImage from "@/components/MainImage";
import { HomeContainer } from "@/styles/pages/home";
import { useState } from "react";
import { useRouter } from 'next/router';

import { couplePhotosData } from '../data/photos';
import Image from "next/image";

export default function Home() {
  const [activeImage, setActiveImage] = useState(1);
  const route = useRouter();

  return (
    <HomeContainer>
      <div className="slider">
        {couplePhotosData.map(photo => (
          <MainImage
            key={photo.id}
            className={activeImage === photo.id ? "image active" : "image"}
            onClick={() => setActiveImage(photo.id)}
            onMouseEnter={() => setActiveImage(photo.id)}
            photoSource={photo.source.src}
            description={photo.description}
          />
        ))}
      </div>

      <div className="imagesSelection">
        <MainImage
          className="main image active"
          photoSource={couplePhotosData[activeImage - 1].source.src}
          description={couplePhotosData[activeImage - 1].description}
        />

        <nav className="navigation">
          {couplePhotosData.map(photo => (
            <MainImage
              key={photo.id}
              className={activeImage === photo.id ? "imageOption active" : "imageOption"}
              onClick={() => setActiveImage(photo.id)}
              photoSource={photo.source.src}
            />
          ))}
        </nav>
      </div>

      <button onClick={() => route.push('/memories')}>Ver mais fotos</button>
    </HomeContainer>
  )
}
