import { MemoriesContainer, MemoriesHeader, PhotosSection } from "@/styles/pages/memories";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { FiArrowLeft, FiArrowRight, FiEye, FiEyeOff } from 'react-icons/fi'

import { photosData } from '../data/photos';

export default function Memories() {
    const [currentImage, setCurrentImage] = useState(0);
    const [visibilityOn, setSetVisibilityOn] = useState(false);

    function goToPrevious() {
        const currentIndex = photosData.indexOf({
            id: currentImage,
            title: photosData[currentImage].title,
            description: photosData[currentImage].description,
            source: photosData[currentImage].source
        })
        const prevIndex = (currentIndex - 1);
        if (photosData[currentImage].id !== 1) {
            setCurrentImage(currentImage - 1);
        }
    }

    function goToNext() {
        const currentIndex = photosData.indexOf({
            id: currentImage,
            title: photosData[currentImage].title,
            description: photosData[currentImage].description,
            source: photosData[currentImage].source
        })
        const nextIndex = (currentIndex + 1);
        if (currentImage !== photosData.length - 1) {
            setCurrentImage(currentImage + 1);
        }
    }

    function changeVisibility() {
        visibilityOn === true ? setSetVisibilityOn(false) : setSetVisibilityOn(true);
    }

    return (
        <MemoriesContainer>
            <MemoriesHeader>
                <h1>Memórias</h1>

                <p>Este lugar é reservado para guardar coisas que você quer se lembrar.</p>
            </MemoriesHeader>

            <PhotosSection>
                <div
                    className={photosData[currentImage - 1] ? "image previous" : "image previous invisible"}
                    onClick={() => photosData[currentImage - 1] && setCurrentImage(currentImage - 1)}
                >
                    {photosData[currentImage - 1] && (
                        <>
                            <Image
                                src={photosData[currentImage - 1].source}
                                alt={photosData[currentImage - 1].title}
                                height={1000}
                                width={1000}
                                loading={"lazy"}
                            />

                            <div className="photoInfo">
                                <p>
                                    {photosData[currentImage - 1].description}
                                </p>
                            </div>
                        </>
                    )}
                </div>
                <div className={visibilityOn === true ? "image current active" : "image current"}>
                    <Image
                        src={photosData[currentImage].source}
                        alt={photosData[currentImage].title}
                        height={1000}
                        width={1000}
                        loading={"lazy"}
                    />

                    <div className="photoInfo">
                        <h3>{photosData[currentImage].title}</h3>
                        <p>
                            {photosData[currentImage].description}
                        </p>
                    </div>

                    <button className="visibility" onClick={changeVisibility}>{visibilityOn === true ? (
                        <FiEyeOff size={24} color="#fff" />
                    ) : (
                        <FiEye size={24} color="#fff" />
                    )}</button>
                </div>
                <div
                    className={photosData[currentImage + 1] ? "image next" : "image next invisible"}
                    onClick={() => photosData[currentImage + 1] && setCurrentImage(currentImage + 1)}
                >
                    {photosData[currentImage + 1] && (
                        <>
                            <Image
                                src={photosData[currentImage + 1].source}
                                alt={photosData[currentImage + 1].title}
                                height={1000}
                                width={1000}
                                loading={"lazy"}
                            />

                            <div className="photoInfo">
                                <p>
                                    {photosData[currentImage + 1].description}
                                </p>
                            </div>
                        </>
                    )}
                </div>

                <nav>
                    <button className={photosData[currentImage - 1] ? "" : "disabled"} onClick={goToPrevious}><FiArrowLeft size={14} /></button>
                    <button className={photosData[currentImage + 1] ? "" : "disabled"} onClick={goToNext}><FiArrowRight size={14} /></button>
                </nav>

                <div className="photosCount">
                    <span>{photosData[currentImage].id}/{photosData.length}</span>
                </div>
            </PhotosSection>

            <Link href="/">
                <FiArrowLeft size={18} />
                <span>Voltar ao início</span>
            </Link>
        </MemoriesContainer>
    )
}