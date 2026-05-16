import {
  ABILITIES,
  ABILITY_DROP_CHANCE,
  MAX_ABILITIES_IN_INVENTORY,
} from "../config/gameConfig";
import type { AbilityType, ActiveEffect } from "../models/Ability";
import { generateId } from "../utils/idGenerator";
import { weightedRandom } from "../utils/weightedRandom";

export class AbilityService {
  rollAbility(): AbilityType | null {
    if (Math.random() > ABILITY_DROP_CHANCE) {
      return null;
    }

    return this.getRandomAbilityByWeight();
  }

  getRandomAbilityByWeight(): AbilityType {
    return weightedRandom(
      ABILITIES.map((ability) => ({
        item: ability.type,
        weight: ability.weight,
      })),
    );
  }

  isBlockTargetAbility(abilityType: AbilityType): boolean {
    return abilityType === "peek-block" || abilityType === "erase-notes";
  }

  createEffect(
    abilityType: AbilityType,
    fromPlayerId: string,
    targetPlayerId: string,
    selectedBlockIndex?: number,
  ): ActiveEffect {
    const config = ABILITIES.find((ability) => ability.type === abilityType);

    if (!config) {
      throw new Error(`Unknown ability: ${abilityType}`);
    }

    if (this.isBlockTargetAbility(abilityType)) {
      if (selectedBlockIndex === undefined || selectedBlockIndex < 0 || selectedBlockIndex > 8) {
        throw new Error("Selected block index must be between 0 and 8.");
      }
    }

    const createdAt = Date.now();

    // Instant abilities still need to live in Firebase for a short time,
    // otherwise the opponent can miss the effect before their client receives it.
    const effectDurationMs = Math.max(config.durationSeconds, 3) * 1000;

    const effect: ActiveEffect = {
      id: generateId("effect"),
      type: abilityType,
      fromPlayerId,
      targetPlayerId,
      createdAt,
      expiresAt: createdAt + effectDurationMs,
    };

    if (selectedBlockIndex !== undefined) {
      effect.payload = { blockIndex: selectedBlockIndex };
    }

    return effect;
  }

  removeAbilityFromInventory(abilities: AbilityType[], abilityType: AbilityType): AbilityType[] {
    const index = abilities.indexOf(abilityType);

    if (index === -1) {
      return abilities;
    }

    return [...abilities.slice(0, index), ...abilities.slice(index + 1)];
  }

  addAbilityToInventory(abilities: AbilityType[], abilityType: AbilityType): AbilityType[] {
    if (abilities.length >= MAX_ABILITIES_IN_INVENTORY) {
      return abilities;
    }

    return [...abilities, abilityType];
  }
}
