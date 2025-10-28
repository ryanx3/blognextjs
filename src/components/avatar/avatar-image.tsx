import Image, { ImageProps } from "next/image"

type AvatarImageProps = ImageProps

export const AvatarImage = ({ src, alt, width, height, ...rest }: AvatarImageProps) => {
  return (
    <Image src={src} alt={alt} width={width} height={height} {...rest} />
  )
}