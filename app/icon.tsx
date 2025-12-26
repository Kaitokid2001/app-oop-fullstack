import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
  width: 64,
  height: 64,
}
export const contentType = 'image/png'
 
// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* tam giác play to, nền trong suốt */}
        <polygon
          points="20,12 52,32 20,52"
          fill="#f97316"
        />
      </svg>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  )
}