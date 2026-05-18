import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  CloudUpload,
  Gauge,
  Globe2,
  LayoutDashboard,
  LineChart,
  Lock,
  Mail,
  Menu,
  Search,
  Settings2,
  Sparkles,
  Target,
  Upload,
  X,
} from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { uploadToCloudinary } from './lib/cloudinary'
import { defaultContent } from './lib/content'
import {
  fetchSiteContent,
  isSupabaseConfigured,
  saveLead,
  saveSiteContent,
} from './lib/supabase'
import type { Lead, SiteContent } from './lib/types'

const navItems = ['Services', 'Work', 'Process', 'Admin']

const processSteps = [
  {
    title: 'Diagnose',
    description:
      'Audit technical health, search demand, content gaps, and conversion intent.',
  },
  {
    title: 'Prioritize',
    description:
      'Score SEO opportunities by impact, difficulty, revenue fit, and timeline.',
  },
  {
    title: 'Execute',
    description:
      'Ship focused improvements across site architecture, content, and reporting.',
  },
  {
    title: 'Compound',
    description:
      'Measure gains, expand winning clusters, and continuously defend rankings.',
  },
]

const adminPanels = [
  {
    icon: LayoutDashboard,
    title: 'Content CMS',
    description:
      'Edit hero messaging, service offers, case studies, testimonials, and CTA copy.',
  },
  {
    icon: CloudUpload,
    title: 'Cloudinary media',
    description:
      'Upload portfolio visuals with unsigned Cloudinary presets or paste hosted URLs.',
  },
  {
    icon: Settings2,
    title: 'Supabase data',
    description:
      'Persist site content, collect leads, and keep admin updates synced from one source.',
  },
]

const emptyLead: Lead = {
  name: '',
  email: '',
  company: '',
  goal: '',
}

function App() {
  const [content, setContent] = useState(defaultContent)
  const [lead, setLead] = useState(emptyLead)
  const [status, setStatus] = useState('')
  const [adminNotice, setAdminNotice] = useState('')
  const [imageUrl, setImageUrl] = useState(defaultContent.hero.portraitUrl)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const serviceHighlights = useMemo(
    () => [
      { icon: Search, label: 'Search architecture' },
      { icon: Gauge, label: 'Technical performance' },
      { icon: Target, label: 'Buyer intent mapping' },
    ],
    [],
  )

  useEffect(() => {
    async function loadContent() {
      try {
        const remoteContent = await fetchSiteContent()
        if (remoteContent) {
          setContent(remoteContent)
          setImageUrl(remoteContent.hero.portraitUrl)
        }
      } catch (error) {
        console.error(error)
        setAdminNotice('Using demo content because Supabase could not be reached.')
      }
    }

    loadContent()
  }, [])

  async function handleLeadSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('Sending your SEO brief...')

    try {
      await saveLead(lead)
      setLead(emptyLead)
      setStatus(
        isSupabaseConfigured
          ? 'Thanks — your brief has been saved.'
          : 'Thanks — demo mode captured the form locally.',
      )
    } catch (error) {
      console.error(error)
      setStatus('Could not save the brief. Please email Quraish directly.')
    }
  }

  async function handleContentSave() {
    setAdminNotice('Saving admin content...')

    try {
      const updatedContent: SiteContent = {
        ...content,
        hero: {
          ...content.hero,
          portraitUrl: imageUrl,
        },
      }
      await saveSiteContent(updatedContent)
      setContent(updatedContent)
      setAdminNotice(
        isSupabaseConfigured
          ? 'Content saved to Supabase.'
          : 'Demo mode: connect Supabase env vars to persist content.',
      )
    } catch (error) {
      console.error(error)
      setAdminNotice('Could not save content. Check Supabase settings.')
    }
  }

  async function handleImageUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (!file) {
      return
    }

    setAdminNotice('Uploading image to Cloudinary...')

    try {
      const nextImageUrl = await uploadToCloudinary(file)
      setImageUrl(nextImageUrl)
      setAdminNotice('Image uploaded. Save content to publish it.')
    } catch (error) {
      console.error(error)
      setAdminNotice(
        'Cloudinary upload is not configured yet. Paste a hosted image URL instead.',
      )
    }
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Quraish Rahman home">
          <span className="brand-mark">QR</span>
          <span>
            <strong>Quraish Rahman</strong>
            <small>SEO Growth Expert</small>
          </span>
        </a>

        <button
          className="mobile-menu"
          type="button"
          onClick={() => setMobileNavOpen((isOpen) => !isOpen)}
          aria-label="Toggle navigation"
        >
          {mobileNavOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={mobileNavOpen ? 'nav nav-open' : 'nav'}>
          {navItems.map((item) => (
            <a
              href={`#${item.toLowerCase()}`}
              key={item}
              onClick={() => setMobileNavOpen(false)}
            >
              {item}
            </a>
          ))}
          <a className="nav-cta" href="#contact">
            Get audit
          </a>
        </nav>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <Sparkles size={18} />
            {content.hero.badge}
          </p>
          <h1>{content.hero.headline}</h1>
          <p className="hero-intro">{content.hero.intro}</p>

          <div className="hero-actions">
            <a className="button primary" href="#contact">
              {content.hero.primaryCta}
              <ArrowRight size={18} />
            </a>
            <a className="button secondary" href="#work">
              {content.hero.secondaryCta}
            </a>
          </div>

          <div className="hero-highlights">
            {serviceHighlights.map((item) => (
              <span key={item.label}>
                <item.icon size={18} />
                {item.label}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-card" aria-label="Quraish Rahman SEO dashboard">
          <img src={content.hero.portraitUrl} alt="Quraish Rahman" />
          <div className="ranking-card">
            <LineChart size={24} />
            <div>
              <span>Organic growth</span>
              <strong>+214%</strong>
            </div>
          </div>
          <div className="audit-card">
            <CheckCircle2 size={20} />
            42 technical fixes prioritized
          </div>
        </div>
      </section>

      <section className="stats-grid" aria-label="SEO performance results">
        {content.stats.map((stat) => (
          <article key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </section>

      <section className="section" id="services">
        <div className="section-heading">
          <p className="eyebrow">SEO services</p>
          <h2>Search programs built for durable business growth.</h2>
          <p>
            Strategic SEO support that balances technical precision, content
            quality, and measurable commercial outcomes.
          </p>
        </div>

        <div className="service-grid">
          {content.services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <span className="card-number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <strong>{service.metrics}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected SEO wins</p>
          <h2>From technical fixes to ranking momentum.</h2>
        </div>

        <div className="case-grid">
          {content.caseStudies.map((study) => (
            <article className="case-card" key={study.title}>
              <img src={study.imageUrl} alt="" />
              <div>
                <span>{study.category}</span>
                <h3>{study.title}</h3>
                <p>{study.description}</p>
                <strong>{study.result}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-section" id="process">
        <div className="section-heading">
          <p className="eyebrow">Growth process</p>
          <h2>A clear operating system for organic acquisition.</h2>
        </div>

        <div className="process-grid">
          {processSteps.map((step, index) => (
            <article key={step.title}>
              <span>{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="testimonial-section">
        <BarChart3 className="testimonial-icon" size={42} />
        <div>
          {content.testimonials.map((testimonial) => (
            <blockquote key={testimonial.name}>
              “{testimonial.quote}”
              <footer>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="admin-section" id="admin">
        <div className="section-heading">
          <p className="eyebrow">Admin dashboard</p>
          <h2>Manage Quraish’s portfolio content without touching code.</h2>
          <p>
            This frontend is ready for Supabase persistence and Cloudinary image
            management. Add environment variables to activate live data.
          </p>
        </div>

        <div className="admin-layout">
          <aside className="admin-sidebar">
            <div>
              <span className="admin-avatar">QR</span>
              <strong>Portfolio Admin</strong>
              <small>Supabase + Cloudinary ready</small>
            </div>
            {adminPanels.map((panel) => (
              <article key={panel.title}>
                <panel.icon size={22} />
                <div>
                  <strong>{panel.title}</strong>
                  <p>{panel.description}</p>
                </div>
              </article>
            ))}
          </aside>

          <div className="admin-card">
            <div className="admin-card-header">
              <div>
                <p className="eyebrow">Hero editor</p>
                <h3>Update headline and image</h3>
              </div>
              <span className={isSupabaseConfigured ? 'status live' : 'status'}>
                {isSupabaseConfigured ? 'Supabase connected' : 'Demo mode'}
              </span>
            </div>

            <label>
              Hero headline
              <textarea
                value={content.hero.headline}
                onChange={(event) =>
                  setContent((current) => ({
                    ...current,
                    hero: {
                      ...current.hero,
                      headline: event.target.value,
                    },
                  }))
                }
              />
            </label>

            <label>
              Hero intro
              <textarea
                value={content.hero.intro}
                onChange={(event) =>
                  setContent((current) => ({
                    ...current,
                    hero: {
                      ...current.hero,
                      intro: event.target.value,
                    },
                  }))
                }
              />
            </label>

            <div className="upload-row">
              <img src={imageUrl} alt="Admin preview" />
              <div>
                <label>
                  Cloudinary image upload
                  <input type="file" accept="image/*" onChange={handleImageUpload} />
                </label>
                <label>
                  Image URL
                  <input
                    type="url"
                    value={imageUrl}
                    onChange={(event) => setImageUrl(event.target.value)}
                  />
                </label>
              </div>
            </div>

            <button className="button primary admin-save" onClick={handleContentSave}>
              <Upload size={18} />
              Save content
            </button>
            {adminNotice && <p className="form-status">{adminNotice}</p>}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">
            <Mail size={18} />
            Start a search growth plan
          </p>
          <h2>Tell Quraish what you want organic search to do next.</h2>
          <p>
            Share your website, market, and growth goal. The admin side can save
            each inquiry directly into Supabase once configured.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleLeadSubmit}>
          <label>
            Name
            <input
              required
              value={lead.name}
              onChange={(event) =>
                setLead((current) => ({ ...current, name: event.target.value }))
              }
              placeholder="Your name"
            />
          </label>
          <label>
            Email
            <input
              required
              type="email"
              value={lead.email}
              onChange={(event) =>
                setLead((current) => ({ ...current, email: event.target.value }))
              }
              placeholder="you@company.com"
            />
          </label>
          <label>
            Company / website
            <input
              value={lead.company}
              onChange={(event) =>
                setLead((current) => ({ ...current, company: event.target.value }))
              }
              placeholder="example.com"
            />
          </label>
          <label>
            SEO goal
            <textarea
              required
              value={lead.goal}
              onChange={(event) =>
                setLead((current) => ({ ...current, goal: event.target.value }))
              }
              placeholder="Tell us about ranking, traffic, or lead goals"
            />
          </label>
          <button className="button primary" type="submit">
            Send brief
            <ArrowRight size={18} />
          </button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </section>

      <footer className="site-footer">
        <div>
          <strong>Quraish Rahman</strong>
          <span>Professional SEO portfolio powered by Supabase + Cloudinary.</span>
        </div>
        <a href="#admin">
          <Lock size={16} />
          Admin preview
        </a>
        <a href="#top">
          <Globe2 size={16} />
          Back to top
        </a>
      </footer>
    </main>
  )
}

export default App
