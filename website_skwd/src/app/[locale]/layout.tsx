import I18nProvider from '@/components/I18nProvider';
import { languages } from '@/i18n/settings';
import Navbar from '@/components/Navbar';
import { Barlow } from "next/font/google";
import OrientationWarning from '@/components/OrientationWarning';
import "@/app/globals.css";
import LayoutClient from '@/components/LayoutClient';

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "500", "600", "800"],
  variable: "--font-barlow",
});

export async function generateStaticParams() {
  return languages.map((lng: (typeof languages)[number]) => ({ locale: lng }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const siteUrl = 'https://skwd.be';

  // --- Localized metadata content ---
  const content = {
    fr: {
      title: 'Accueil - SKWD',
      seoTitle: 'Bienvenue chez SKWD – votre agence intérim',
      ogTitle: 'Bienvenue chez SKWD – votre agence intérim pour étudiants et flexi-jobs',
      description:
        "Tu cherches un job étudiant à Bruxelles, Anvers ou Malines ? Chez SKWD, tu trouves des jobs étudiants flexibles dans l'horeca, l'événementiel et la logistique. Tu cherches du personnel pour ton entreprise ? SKWD t'aide avec des étudiants et des flexis motivés pour ton événement, ton établissement horeca ou ta mission.",
      ogDescription:
        "Tu cherches un job étudiant à Bruxelles, Anvers ou Malines ? Chez SKWD, tu trouves des jobs étudiants flexibles dans l'horeca, l'événementiel et la logistique. Tu cherches du personnel pour ton entreprise ? SKWD t'aide avec des étudiants et des flexis motivés pour ton événement, ton établissement horeca ou ta mission.",
      url: `${siteUrl}/fr`,
    },
    nl: {
      title: 'Startpagina - SKWD',
      seoTitle: 'Welkom bij SKWD – jouw uitzendkantoor',
      ogTitle: 'Welkom bij SKWD – jouw uitzendkantoor voor studenten en flexis',
      description:
        "Op zoek naar een studentenjob in Brussel, Antwerpen of Mechelen? Bij SKWD vind je flexibele studentenjobs in horeca, events en logistiek. Zoek je als bedrijf personeel? SKWD helpt je met gemotiveerde studenten en flexi's voor jouw event, horecazaak of opdracht.",
      ogDescription:
        "Op zoek naar een studentenjob in Brussel, Antwerpen of Mechelen? Bij SKWD vind je flexibele studentenjobs in horeca, events en logistiek. Zoek je als bedrijf personeel? SKWD helpt je met gemotiveerde studenten en flexi's voor jouw event, horecazaak of opdracht.",
      url: `${siteUrl}/nl`,
    },
    en: {
      title: 'Home - SKWD',
      seoTitle: 'Welcome to SKWD – your temp agency',
      ogTitle: 'Welcome to SKWD – your temp agency for students and flexi workers',
      description:
        "Looking for a student job in Brussels, Antwerp or Mechelen? At SKWD you'll find flexible student jobs in hospitality, events and logistics. Looking for staff for your business? SKWD helps you with motivated students and flexi workers for your event, hospitality venue or assignment.",
      ogDescription:
        "Looking for a student job in Brussels, Antwerp or Mechelen? At SKWD you'll find flexible student jobs in hospitality, events and logistics. Looking for staff for your business? SKWD helps you with motivated students and flexi workers for your event, hospitality venue or assignment.",
      url: `${siteUrl}/en`,
    },
  };

  const t = content[locale as 'en' | 'fr' | 'nl'] || content.en;

  const ogImage = {
    url: `${siteUrl}/images/og-image.png`,
    width: 1200,
    height: 630,
    alt: 'SKWD OpenGraph image',
  };

  const ogLocale =
    locale === 'fr' ? 'fr_BE'
    : locale === 'nl' ? 'nl_BE'
    : 'en';

  const keywords =
    locale === 'fr'
      ? 'staffing étudiant, événementiel, logistique, hospitalité, jobs étudiants, agence d\'intérim, Belgique'
      : locale === 'nl'
      ? 'studentenwerk, logistiek, hospitality, evenementen, studentenjobs, uitzendbureau, België'
      : 'student staffing, event staffing, logistics, hospitality, student jobs, Belgium';

  return {
    title: t.title,
    description: t.description,

    openGraph: {
      title: t.ogTitle,
      description: t.ogDescription,
      url: t.url,
      siteName: 'SKWD',
      images: [ogImage],
      locale: ogLocale,
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
      title: t.ogTitle,
      description: t.ogDescription,
      images: [ogImage.url],
    },

    robots: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: 'large',
      maxVideoPreview: -1,
    },
    keywords,

    alternates: {
      canonical: t.url,
      languages: {
        'fr-BE': `${siteUrl}/fr`,
        'nl-BE': `${siteUrl}/nl`,
        en: `${siteUrl}/en`,
        'x-default': `${siteUrl}`,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body className={`${barlow.variable} antialiased`}>
        <Navbar />
        <OrientationWarning />

        <I18nProvider>
          <LayoutClient>{children}</LayoutClient>
        </I18nProvider>
      </body>
    </html>
  );
}