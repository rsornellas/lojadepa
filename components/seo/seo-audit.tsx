'use client'

import { useEffect, useState } from 'react'

interface SEOAuditResult {
  score: number
  issues: string[]
  recommendations: string[]
}

export function SEOAudit() {
  const [auditResult, setAuditResult] = useState<SEOAuditResult | null>(null)

  useEffect(() => {
    const runSEOAudit = () => {
      const issues: string[] = []
      const recommendations: string[] = []
      let score = 100

      // Check for essential meta tags
      const title = document.querySelector('title')?.textContent
      const description = document.querySelector('meta[name="description"]')?.getAttribute('content')
      const viewport = document.querySelector('meta[name="viewport"]')
      const canonical = document.querySelector('link[rel="canonical"]')

      if (!title) {
        issues.push('Missing title tag')
        score -= 20
      } else if (title.length > 60) {
        issues.push('Title too long (over 60 characters)')
        score -= 5
      }

      if (!description) {
        issues.push('Missing meta description')
        score -= 15
      } else if (description.length > 160) {
        issues.push('Meta description too long (over 160 characters)')
        score -= 5
      }

      if (!viewport) {
        issues.push('Missing viewport meta tag')
        score -= 10
      }

      if (!canonical) {
        issues.push('Missing canonical URL')
        score -= 10
      }

      // Check for heading structure
      const h1 = document.querySelector('h1')
      const h2s = document.querySelectorAll('h2')
      
      if (!h1) {
        issues.push('Missing H1 tag')
        score -= 15
      } else if (document.querySelectorAll('h1').length > 1) {
        issues.push('Multiple H1 tags found')
        score -= 10
      }

      if (h2s.length === 0) {
        issues.push('No H2 tags found - consider adding section headings')
        score -= 5
      }

      // Check for images without alt text
      const images = document.querySelectorAll('img')
      const imagesWithoutAlt = Array.from(images).filter(img => !img.alt)
      
      if (imagesWithoutAlt.length > 0) {
        issues.push(`${imagesWithoutAlt.length} images missing alt text`)
        score -= imagesWithoutAlt.length * 2
      }

      // Check for internal links
      const internalLinks = document.querySelectorAll('a[href^="/"], a[href*="lojadepa.com.br"]')
      if (internalLinks.length < 3) {
        recommendations.push('Consider adding more internal links')
      }

      // Check for external links
      const externalLinks = document.querySelectorAll('a[href^="http"]:not([href*="lojadepa.com.br"])')
      if (externalLinks.length === 0) {
        recommendations.push('Consider adding relevant external links for authority')
      }

      // Check for structured data
      const structuredData = document.querySelectorAll('script[type="application/ld+json"]')
      if (structuredData.length === 0) {
        issues.push('No structured data found')
        score -= 10
      }

      // Performance checks
      const perfEntries = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (perfEntries) {
        const loadTime = perfEntries.loadEventEnd - perfEntries.loadEventStart
        if (loadTime > 3000) {
          issues.push('Page load time is slow (>3s)')
          score -= 10
        }
      }

      // Mobile responsiveness
      const viewportWidth = window.innerWidth
      if (viewportWidth < 768) {
        const mobileIssues = document.querySelectorAll('*').length > 1000 ? ['Too many DOM elements for mobile'] : []
        if (mobileIssues.length > 0) {
          issues.push(...mobileIssues)
          score -= 5
        }
      }

      // Generate recommendations
      if (score < 80) {
        recommendations.push('Focus on fixing critical SEO issues first')
      }
      
      if (h2s.length < 3) {
        recommendations.push('Add more H2 headings to improve content structure')
      }

      if (images.length > 0 && imagesWithoutAlt.length === 0) {
        recommendations.push('Great! All images have alt text')
      }

      if (structuredData.length > 0) {
        recommendations.push('Excellent! Structured data is implemented')
      }

      setAuditResult({
        score: Math.max(0, score),
        issues,
        recommendations
      })
    }

    // Run audit after page load
    if (document.readyState === 'complete') {
      runSEOAudit()
    } else {
      window.addEventListener('load', runSEOAudit)
    }

    return () => {
      window.removeEventListener('load', runSEOAudit)
    }
  }, [])

  if (!auditResult) return null

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm z-50">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-sm">SEO Audit</h3>
        <div className={`px-2 py-1 rounded text-xs font-medium ${
          auditResult.score >= 90 ? 'bg-green-100 text-green-800' :
          auditResult.score >= 70 ? 'bg-yellow-100 text-yellow-800' :
          'bg-red-100 text-red-800'
        }`}>
          {auditResult.score}/100
        </div>
      </div>
      
      {auditResult.issues.length > 0 && (
        <div className="mb-2">
          <h4 className="text-xs font-medium text-red-600 mb-1">Issues:</h4>
          <ul className="text-xs text-gray-600 space-y-1">
            {auditResult.issues.slice(0, 3).map((issue, index) => (
              <li key={index} className="flex items-start">
                <span className="text-red-500 mr-1">•</span>
                {issue}
              </li>
            ))}
            {auditResult.issues.length > 3 && (
              <li className="text-gray-500">+{auditResult.issues.length - 3} more...</li>
            )}
          </ul>
        </div>
      )}
      
      {auditResult.recommendations.length > 0 && (
        <div>
          <h4 className="text-xs font-medium text-blue-600 mb-1">Recommendations:</h4>
          <ul className="text-xs text-gray-600 space-y-1">
            {auditResult.recommendations.slice(0, 2).map((rec, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-500 mr-1">•</span>
                {rec}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
