
import React, { useState } from 'react';
import { toast } from 'sonner';
import { ArrowRight } from 'lucide-react';

interface FinalStepProps {
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
}

const FinalStep: React.FC<FinalStepProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error('Vennligst fyll ut alle påkrevde felt');
      return;
    }
    
    onSubmit(formData);
  };

  return (
    <div className="animate-fade-in w-full">
      <h2 className="text-center text-3xl font-semibold mb-2">
        Du er ett <span className="text-brand-blue">klikk</span> 
        <br />ifra å få ditt pris!
      </h2>
      <p className="text-center text-muted-foreground mb-8">
        Se ditt prisforslag på neste side.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium">
            Navn <span className="text-brand-blue">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Ditt navn"
            className="w-full p-3 rounded-lg"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            E-postadresse <span className="text-brand-blue">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="E-postadresse"
            className="w-full p-3 rounded-lg"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium">
            Telefonnummer <span className="text-brand-blue">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Telefonnummer"
            className="w-full p-3 rounded-lg"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="company" className="block text-sm font-medium">
            Firmanavn
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Firmanavn"
            className="w-full p-3 rounded-lg"
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        <div className="text-xs text-muted-foreground pt-2">
          Du forbinder deg ikke til noe når du fyller i formularet. Gjennom å skicke inn godkjenner du vår integritetspolicy.
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-brand-blue hover:bg-brand-blue/90 text-white py-3 px-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center"
        >
          Se ditt pris direkt <ArrowRight size={18} className="ml-2" />
        </button>
      </form>
    </div>
  );
};

export default FinalStep;
