import { asset } from '../lib/asset.js';

export function missionImagePath(trilhaId, missaoId) {
  return asset(`/generated/missions/${trilhaId}-${missaoId}.svg`);
}
