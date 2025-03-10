
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

interface ResultPageProps {}

const Result: React.FC<ResultPageProps> = () => {
  const location = useLocation();
  const { 
    price = 0, 
    formData = { name: '', email: '', phone: '', company: '' },
    projectType,
    specialFeatures,
    pageCount
  } = location.state || {};

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('nb-NO', {
      style: 'currency',
      currency: 'NOK',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const getProjectTypeText = () => {
    switch(projectType) {
      case 'newWebsite': return 'Ny nettside';
      case 'newWebshop': return 'Ny nettbutikk';
      case 'updateExisting': return 'Oppdatering av eksisterende side';
      default: return 'Nettside';
    }
  };

  const projectFeatures = [
    'Responsiv design for alle enheter',
    'SEO-optimalisering',
    'Brukervennlig CMS',
    'SSL-sertifikat',
    'Høyhastighetshostingløsning',
    specialFeatures === 'yes' ? 'Tilpassede spesialfunksjoner' : '',
  ].filter(Boolean);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center py-12 px-4 bg-background">
      <div className="w-full max-w-4xl glass-effect rounded-2xl overflow-hidden p-8 animate-fade-in">
        <Link 
          to="/" 
          className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={18} className="mr-1" />
          <span>Tilbake til kalkulatoren</span>
        </Link>

        <div className="text-center mb-12">
          <span className="text-brand-blue text-sm font-medium bg-brand-blue/10 rounded-full px-4 py-1.5 mb-4 inline-block">
            Ditt prisforslag
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-2">
            {formatPrice(price)}
          </h1>
          <p className="text-muted-foreground">
            Estimert pris for {getProjectTypeText().toLowerCase()} 
            {pageCount && pageCount !== 'unknown' ? ` med ${pageCount} sider` : ''}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Dette er inkludert:</h3>
            <ul className="space-y-3">
              {projectFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="text-brand-blue mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Din informasjon:</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Navn</p>
                <p className="font-medium">{formData.name}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">E-post</p>
                <p className="font-medium">{formData.email}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Telefon</p>
                <p className="font-medium">{formData.phone}</p>
              </div>
              {formData.company && (
                <div>
                  <p className="text-sm text-muted-foreground">Firma</p>
                  <p className="font-medium">{formData.company}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="text-center p-6 border border-brand-blue/20 rounded-xl bg-brand-blue/5">
          <h3 className="text-xl font-semibold mb-4">Hva skjer nå?</h3>
          <p className="text-muted-foreground mb-6">
            En av våre eksperter vil kontakte deg innen 24 timer for å diskutere detaljer og tilpasse løsningen etter dine behov. Dette er et estimat, og den endelige prisen kan variere basert på spesifikke krav.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/"
              className="bg-secondary hover:bg-secondary/80 text-foreground font-medium py-3 px-6 rounded-full transition-all"
            >
              Tilbake til kalkulatoren
            </Link>
            <a 
              href={`mailto:kontakt@nettside.no?subject=Oppfølging på prisforslag&body=Hei, jeg har fått et prisforslag på ${formatPrice(price)} for en ${getProjectTypeText().toLowerCase()} og ønsker mer informasjon.%0D%0A%0D%0ANavn: ${formData.name}%0D%0AE-post: ${formData.email}%0D%0ATelefon: ${formData.phone}${formData.company ? '%0D%0AFirma: ' + formData.company : ''}`}
              className="bg-brand-blue hover:bg-brand-blue/90 text-white font-medium py-3 px-6 rounded-full transition-all"
            >
              Kontakt oss nå
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
