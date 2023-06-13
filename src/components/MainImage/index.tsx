import Image from 'next/image';
import { ImageDiv } from './styles';

interface MainImageProps extends React.HTMLAttributes<HTMLDivElement> {
    photoSource: string;
    description?: string;
}

export default function MainImage({ photoSource, description, ...rest }: MainImageProps) {
    return (
        <ImageDiv
            {...rest} // Para pegar todas as propriedades de um elemento html
        >
            <Image
                src={photoSource}
                width={1000}
                height={1000}
                loading={"lazy"}
                alt="" />
            <div>
                <p>{description}</p>
            </div>
        </ImageDiv>
    )
}