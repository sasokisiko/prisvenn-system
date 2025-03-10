
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProgressBar from './ProgressBar';
import StepContainer from './StepContainer';
import Question from './Question';
import Option from './Option';
import FinalStep from './FinalStep';

const PriceCalculator = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [projectType, setProjectType] = useState(null);
  const [specialFeatures, setSpecialFeatures] = useState(null);
  const [pageCount, setPageCount] = useState(null);
  const [projectDescription, setProjectDescription] = useState('');
  
  const totalSteps = 6;
  
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };
  
  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const calculateBasePrice = () => {
    let basePrice = 15000; // Base starting price
    
    // Add price based on project type
    if (projectType === 'newWebsite') basePrice += 10000;
    if (projectType === 'newWebshop') basePrice += 25000;
    if (projectType === 'updateExisting') basePrice += 8000;
    
    // Add price based on features
    if (specialFeatures === 'yes') basePrice += 15000;
    
    // Add price based on page count
    if (pageCount === '5-10') basePrice += 10000;
    if (pageCount === '10+') basePrice += 20000;
    
    return basePrice;
  };

  const handleSubmitForm = (formData) => {
    const price = calculateBasePrice();
    
    // Navigate to result page with data
    navigate('/resultat', { 
      state: { 
        price,
        formData,
        projectType,
        specialFeatures,
        pageCount,
        projectDescription
      } 
    });
  };
  
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center py-8 px-4">
      <div className="w-full max-w-4xl glass-effect rounded-2xl overflow-hidden relative">
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
        
        {currentStep === 1 && (
          <StepContainer showBackButton={false}>
            <Question
              title="Få prisforslag på din nye nettside på null tid!"
              subtitle="Trenger du en ny nettside eller nettbutikk til bedriften din? Men usikker på kostnaden? Ikke bekymre deg! Svar på noen raske spørsmål og få et raskt prisoverslag på 1 minutt. Og helt uten forpliktelser!"
            >
              <div className="flex justify-center mt-12">
                <button
                  onClick={handleNext}
                  className="bg-pink-500 hover:bg-pink-600 text-white py-3 px-8 rounded-full font-medium transition-all duration-300 flex items-center"
                >
                  Start nå <ArrowRight size={18} className="ml-2" />
                </button>
              </div>
            </Question>
          </StepContainer>
        )}
        
        {currentStep === 2 && (
          <StepContainer onBack={handleBack}>
            <Question
              title="Hva trenger du hjelp med?"
              subtitle="Vi skreddersyr løsninger for å passe dine behov. Fortell oss hva du trenger!"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Option 
                  text="Ny nettside" 
                  selected={projectType === 'newWebsite'}
                  onClick={() => {
                    setProjectType('newWebsite');
                    setTimeout(handleNext, 300);
                  }}
                />
                <Option 
                  text="Ny nettbutikk" 
                  selected={projectType === 'newWebshop'}
                  onClick={() => {
                    setProjectType('newWebshop');
                    setTimeout(handleNext, 300);
                  }}
                />
                <Option 
                  text="Oppdatere eksisterende side" 
                  selected={projectType === 'updateExisting'}
                  onClick={() => {
                    setProjectType('updateExisting');
                    setTimeout(handleNext, 300);
                  }}
                />
              </div>
            </Question>
          </StepContainer>
        )}
        
        {currentStep === 3 && (
          <StepContainer onBack={handleBack}>
            <Question
              title="Trenger prosjektet ditt spesielle funksjoner?"
              subtitle="For eksempel bookingsystem, dynamiske sider, prisberegninger eller innloggingsbeskyttelse – vi kan hjelpe deg å finne ut hva som passer best for deg!"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Option 
                  text="Ja" 
                  selected={specialFeatures === 'yes'}
                  onClick={() => {
                    setSpecialFeatures('yes');
                    setTimeout(handleNext, 300);
                  }}
                />
                <Option 
                  text="Nei" 
                  selected={specialFeatures === 'no'}
                  onClick={() => {
                    setSpecialFeatures('no');
                    setTimeout(handleNext, 300);
                  }}
                />
                <Option 
                  text="Vet ikke" 
                  selected={specialFeatures === 'unknown'}
                  onClick={() => {
                    setSpecialFeatures('unknown');
                    setTimeout(handleNext, 300);
                  }}
                />
              </div>
            </Question>
          </StepContainer>
        )}
        
        {currentStep === 4 && (
          <StepContainer onBack={handleBack}>
            <Question
              title="Hvor mange sider tror du at din nettside kommer til å ha?"
              subtitle="Eksempler på sider kan være Hjem, Om oss, Tjenester, Kontakt – en beregning av alt vi trenger!"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Option 
                  text="1-5" 
                  selected={pageCount === '1-5'}
                  onClick={() => {
                    setPageCount('1-5');
                    setTimeout(handleNext, 300);
                  }}
                />
                <Option 
                  text="5-10" 
                  selected={pageCount === '5-10'}
                  onClick={() => {
                    setPageCount('5-10');
                    setTimeout(handleNext, 300);
                  }}
                />
                <Option 
                  text="10+" 
                  selected={pageCount === '10+'}
                  onClick={() => {
                    setPageCount('10+');
                    setTimeout(handleNext, 300);
                  }}
                />
                <Option 
                  text="Vet ikke" 
                  selected={pageCount === 'unknown'}
                  onClick={() => {
                    setPageCount('unknown');
                    setTimeout(handleNext, 300);
                  }}
                />
              </div>
            </Question>
          </StepContainer>
        )}
        
        {currentStep === 5 && (
          <StepContainer onBack={handleBack}>
            <Question
              title="Fortell gjerne kort om prosjektet ditt (valgfritt)"
              subtitle="Hva vil du ha hjelp med, og hva skal din nye nettside eller nettbutikk inneholde? Jo mer vi vet, desto bedre kan vi hjelpe deg!"
            >
              <div className="w-full max-w-md mx-auto">
                <textarea
                  className="w-full p-4 rounded-lg bg-secondary min-h-[150px] resize-none"
                  placeholder="Skriv noen linjer om hva du vil oppnå med ditt prosjekt."
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                ></textarea>
                
                <div className="flex justify-center mt-8">
                  <button
                    onClick={handleNext}
                    className="bg-pink-500 hover:bg-pink-600 text-white py-3 px-8 rounded-full font-medium transition-all duration-300 flex items-center"
                  >
                    Fortsett <ArrowRight size={18} className="ml-2" />
                  </button>
                </div>
              </div>
            </Question>
          </StepContainer>
        )}
        
        {currentStep === 6 && (
          <StepContainer onBack={handleBack}>
            <FinalStep onSubmit={handleSubmitForm} />
          </StepContainer>
        )}
      </div>
    </div>
  );
};

export default PriceCalculator;
