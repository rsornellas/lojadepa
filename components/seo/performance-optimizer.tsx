'use client'

import { useEffect } from 'react'

export function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical CSS
      const criticalCSS = document.createElement('link')
      criticalCSS.rel = 'preload'
      criticalCSS.href = '/critical.css'
      criticalCSS.as = 'style'
      criticalCSS.onload = () => {
        criticalCSS.rel = 'stylesheet'
      }
      document.head.appendChild(criticalCSS)

      // Preload critical fonts
      const fontPreload = document.createElement('link')
      fontPreload.rel = 'preload'
      fontPreload.href = '/fonts/geist-sans.woff2'
      fontPreload.as = 'font'
      fontPreload.type = 'font/woff2'
      fontPreload.crossOrigin = 'anonymous'
      document.head.appendChild(fontPreload)
    }

    // Optimize images loading
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]')
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            img.src = img.dataset.src || ''
            img.classList.remove('lazy')
            imageObserver.unobserve(img)
          }
        })
      })

      images.forEach((img) => imageObserver.observe(img))
    }

    // Add loading states
    const addLoadingStates = () => {
      // Add loading class to body
      document.body.classList.add('loading')
      
      // Remove loading class when page is fully loaded
      window.addEventListener('load', () => {
        document.body.classList.remove('loading')
        document.body.classList.add('loaded')
      })
    }

    // Initialize optimizations
    preloadCriticalResources()
    optimizeImages()
    addLoadingStates()

    // Cleanup
    return () => {
      // Cleanup if needed
    }
  }, [])

  return null
}

// CSS for loading states
export const PerformanceStyles = () => (
  <style jsx global>{`
    .loading {
      opacity: 0.8;
      transition: opacity 0.3s ease;
    }
    
    .loaded {
      opacity: 1;
    }
    
    .lazy {
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .lazy.loaded {
      opacity: 1;
    }
    
    /* Critical above-the-fold styles */
    .hero-section {
      contain: layout style paint;
    }
    
    .services-grid {
      contain: layout;
    }
    
    /* Reduce layout shift */
    .service-card {
      min-height: 400px;
    }
    
    /* Optimize animations */
    @media (prefers-reduced-motion: reduce) {
      * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    }
  `}</style>
)
