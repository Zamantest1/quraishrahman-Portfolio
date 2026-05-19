import { env, isCloudinaryConfigured } from '@/lib/env'

export function buildCloudinaryUrl(publicId: string | null | undefined, opts?: { width?: number; height?: number }) {
  if (!publicId) return null
  if (!isCloudinaryConfigured) return null
  const transforms: string[] = ['f_auto', 'q_auto']
  if (opts?.width) transforms.push(`w_${opts.width}`)
  if (opts?.height) transforms.push(`h_${opts.height}`)
  const t = transforms.join(',')
  return `https://res.cloudinary.com/${env.cloudinaryCloudName}/image/upload/${t}/${publicId}`
}

export const cloudinaryConfig = {
  cloudName: env.cloudinaryCloudName,
  uploadPreset: env.cloudinaryUploadPreset,
  isConfigured: isCloudinaryConfigured,
}
