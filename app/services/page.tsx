
import ServicesGrid from '@/components/ServicesGrid'
import Certifications from '@/components/Certifications'

export default function ServicesPage() {
  return (
    <>
      <div className="pt-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 pt-12 text-center">
            <h1 className="text-5xl font-extrabold text-slate-900">Our Services & Certifications</h1>
            <p className="mt-4 text-xl text-slate-600">Enterprise development, IT consultation, and industry-leading certifications.</p>
        </div>
        <ServicesGrid />
      </div>
      <Certifications />
    </>
  )
}
