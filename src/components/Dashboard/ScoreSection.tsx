import React from 'react';
import { TwinMatrixScore, HumanityTrustScore, ProfessionTraits } from '../../types';
import { CircularProgress, TraitProgressBar, UpdateButton } from '../UI';
import { Brain, Heart, Briefcase, TrendingUp } from 'lucide-react';

interface ScoreSectionProps {
  twinMatrixScore: TwinMatrixScore;
  humanityTrustScore: HumanityTrustScore;
  professionTraits: ProfessionTraits;
  isUpdating: boolean;
  onUpdate: () => void;
}

export const ScoreSection: React.FC<ScoreSectionProps> = ({
  twinMatrixScore,
  humanityTrustScore,
  professionTraits,
  isUpdating,
  onUpdate
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Twin Matrix Score */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 p-6 rounded-xl border-2 border-blue-500 border-opacity-30 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-500 bg-opacity-20 rounded-lg">
              <Brain className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Twin Matrix Score</h2>
              <p className="text-blue-300 text-sm">AI-Human Intelligence Fusion</p>
            </div>
          </div>
          <TrendingUp className="w-5 h-5 text-blue-400" />
        </div>
        
        <div className="flex justify-center mb-6">
          <CircularProgress
            value={twinMatrixScore.overall}
            size="lg"
            color="blue"
            label="Overall Score"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{twinMatrixScore.creativity}</div>
            <div className="text-xs text-blue-300">Creativity</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{twinMatrixScore.logic}</div>
            <div className="text-xs text-blue-300">Logic</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{twinMatrixScore.empathy}</div>
            <div className="text-xs text-blue-300">Empathy</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{twinMatrixScore.resilience}</div>
            <div className="text-xs text-blue-300">Resilience</div>
          </div>
        </div>
      </div>
      
      {/* Humanity Trust Score */}
      <div className="bg-gradient-to-br from-orange-900 via-orange-800 to-orange-900 p-6 rounded-xl border-2 border-orange-500 border-opacity-30 shadow-[0_0_30px_rgba(249,115,22,0.2)]">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-orange-500 bg-opacity-20 rounded-lg">
              <Heart className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Humanity Trust Score</h2>
              <p className="text-orange-300 text-sm">Human Values & Ethics</p>
            </div>
          </div>
          <TrendingUp className="w-5 h-5 text-orange-400" />
        </div>
        
        <div className="flex justify-center mb-6">
          <CircularProgress
            value={humanityTrustScore.overall}
            size="lg"
            color="orange"
            label="Overall Score"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400">{humanityTrustScore.authenticity}</div>
            <div className="text-xs text-orange-300">Authenticity</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400">{humanityTrustScore.reliability}</div>
            <div className="text-xs text-orange-300">Reliability</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400">{humanityTrustScore.transparency}</div>
            <div className="text-xs text-orange-300">Transparency</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400">{humanityTrustScore.ethics}</div>
            <div className="text-xs text-orange-300">Ethics</div>
          </div>
        </div>
      </div>
      
      {/* Profession Traits */}
      <div className="bg-gradient-to-br from-green-900 via-green-800 to-green-900 p-6 rounded-xl border-2 border-green-500 border-opacity-30 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-500 bg-opacity-20 rounded-lg">
              <Briefcase className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Profession Traits</h2>
              <p className="text-green-300 text-sm">{professionTraits.profession}</p>
            </div>
          </div>
          <TrendingUp className="w-5 h-5 text-green-400" />
        </div>
        
        <div className="flex justify-center mb-6">
          <CircularProgress
            value={professionTraits.overallProgress}
            size="lg"
            color="green"
            label="Overall Progress"
          />
        </div>
        
        <div className="space-y-3">
          {professionTraits.traits.slice(0, 2).map((trait, index) => (
            <TraitProgressBar
              key={index}
              trait={trait}
              showLabel={false}
            />
          ))}
        </div>
        
        {professionTraits.traits.length > 2 && (
          <div className="mt-3 text-center">
            <span className="text-xs text-green-400">
              +{professionTraits.traits.length - 2} more traits
            </span>
          </div>
        )}
      </div>
      
      {/* Update Button */}
      <div className="lg:col-span-3 flex justify-center">
        <UpdateButton
          isUpdating={isUpdating}
          lastUpdated={twinMatrixScore.lastUpdated}
          onUpdate={onUpdate}
        />
      </div>
    </div>
  );
};
