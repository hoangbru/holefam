import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Portfolio of holefam',
    short_name: 'holefam',
    description: 'holefam',
    start_url: '/',
    display: 'standalone',
  }
}
