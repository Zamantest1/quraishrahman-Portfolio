import Image from 'next/image'
import { buildCloudinaryUrl } from '@/lib/cloudinary'

type Props = {
  publicId?: string | null
  fallbackUrl?: string | null
  alt: string
  width: number
  height: number
  priority?: boolean
  className?: string
  sizes?: string
}

export function PageImage({ publicId, fallbackUrl, alt, width, height, priority, className, sizes }: Props) {
  const cloudinaryUrl = buildCloudinaryUrl(publicId, { width })
  const src = cloudinaryUrl ?? fallbackUrl ?? null
  if (!src) {
    return (
      <div
        className={`bg-[var(--color-surface)] rounded-2xl border border-[var(--color-line)] ${className ?? ''}`}
        style={{ aspectRatio: `${width} / ${height}` }}
        aria-hidden
      />
    )
  }
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      sizes={sizes}
      className={className}
    />
  )
}
