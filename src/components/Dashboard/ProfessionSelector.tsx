import React, { useState } from 'react';
import { ProfessionOption } from '../../types';
import { professionOptions } from '../../constants/themes';
import { ChevronDown, Check, Briefcase } from 'lucide-react';

interface ProfessionSelectorProps {
  currentProfession?: string;
  onProfessionChange: (professionId: string) => void;
}

export const ProfessionSelector: React.FC<ProfessionSelectorProps> = ({
  currentProfession,
  onProfessionChange
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProfession, setSelectedProfession] = useState(currentProfession);
  
  const handleSelect = (professionId: string) => {
    setSelectedProfession(professionId);
    onProfessionChange(professionId);
    setIsOpen(false);
  };
  
  const getCurrentProfessionData = () => {
    return professionOptions.find(p => p.id === selectedProfession);
  };
  
  const currentData = getCurrentProfessionData();
  
  return (
    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg">
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-2 bg-purple-500 bg-opacity-20 rounded-lg">
          <Briefcase className="w-6 h-6 text-purple-400" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">Profession Selection</h2>
          <p className="text-gray-400 text-sm">Choose your primary professional focus</p>
        </div>
      </div>
      
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-left flex items-center justify-between hover:bg-gray-650 transition-colors"
        >
          <div className="flex items-center space-x-3">
            {currentData ? (
              <>
                <span className="text-2xl">{currentData.icon}</span>
                <div>
                  <div className="text-white font-medium">{currentData.name}</div>
                  <div className="text-gray-400 text-sm">{currentData.description}</div>
                </div>
              </>
            ) : (
              <div className="text-gray-400">Select a profession...</div>
            )}
          </div>
          <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-gray-700 border border-gray-600 rounded-lg shadow-xl z-10 max-h-80 overflow-y-auto">
            {professionOptions.map((profession) => (
              <button
                key={profession.id}
                onClick={() => handleSelect(profession.id)}
                className="w-full p-4 text-left hover:bg-gray-600 transition-colors border-b border-gray-600 last:border-b-0 flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{profession.icon}</span>
                  <div>
                    <div className="text-white font-medium">{profession.name}</div>
                    <div className="text-gray-400 text-sm">{profession.description}</div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {profession.traits.map((trait, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-purple-500 bg-opacity-20 text-purple-300 text-xs rounded-full"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {selectedProfession === profession.id && (
                  <Check className="w-5 h-5 text-green-400" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>
      
      {currentData && (
        <div className="mt-4 p-4 bg-purple-500 bg-opacity-10 border border-purple-500 border-opacity-30 rounded-lg">
          <h3 className="text-purple-300 font-medium mb-2">Key Traits for {currentData.name}:</h3>
          <div className="grid grid-cols-2 gap-2">
            {currentData.traits.map((trait, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-gray-300 text-sm">{trait}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
