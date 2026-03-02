import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPublishedServices } from '@/lib/api/services';
import ServiceCardSimple from '@/components/services/ServiceCardSimple';
import Breadcrumb from '@/components/common/Breadcrumb';
import { Service } from '@/types/service';

export const metadata: Metadata = {
  title: 'บริการของเรา | SolarPro',
  description: 'โซลูชั่นโซล่าเซลล์ครบวงจรสำหรับทุกความต้องการ',
};

function transformServiceToCardProps(service: Service) {
  const imageUrl = typeof service.featuredImage === 'string' 
    ? service.featuredImage 
    : service.featuredImage.url || '';

  return {
    id: service.id,
    image: imageUrl,
    header: service.header,
    title: service.title,
    slug: service.slug,
  };
}

export const dynamic = 'force-dynamic';

export default async function ServicesPage() {
  let services: Service[] = [];
  let error: string | null = null;

  try {
    services = await getAllPublishedServices();
  } catch (err) {
    console.error('Error fetching services:', err);
    error = 'Unable to load services. Please try again later.';
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header with Background Image */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?q=80&w=2073&auto=format&fit=crop"
            alt="Solar installation service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/75 to-slate-900/85"></div>
        </div>
        <div className="relative container mx-auto px-6 py-8">
          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { label: 'หน้าแรก', href: '/' },
              { label: 'บริการของเรา' },
            ]}
          />
          
          {/* Header Content */}
          <div className="text-center space-y-4 mt-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              บริการของเรา
            </h1>
            <p className="text-lg text-gray-100 max-w-2xl mx-auto">
              โซลูชั่นโซล่าเซลล์ครบวงจรสำหรับทุกความต้องการ
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {!error && services.length === 0 && (
          <div className="bg-gray-50 rounded-lg p-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">ยังไม่มีบริการ</h2>
            <p className="text-gray-600">กรุณาตรวจสอบอีกครั้งในภายหลัง</p>
          </div>
        )}

        {!error && services.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCardSimple
                key={service.id}
                slug={service.slug}
                image={typeof service.featuredImage === 'string' ? service.featuredImage : service.featuredImage?.url || 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop'}
                title={service.title}
                header={service.header}
              />
            ))}
          </div>
        )}
      </main>

      {/* CTA Section */}
      {!error && services.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              สนใจบริการของเรา?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              ติดต่อเราวันนี้เพื่อรับคำปรึกษาและใบเสนอราคาฟรี
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-lg hover:from-orange-500 hover:via-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg"
            >
              ติดต่อเรา
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
