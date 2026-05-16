import { ABILITIES } from "../config/gameConfig";
import type { AbilityType } from "../models/Ability";

export class AbilityPanelView {
  render(abilities: AbilityType[]): string {
    if (abilities.length === 0) {
      return `
        <div class="ability-panel ability-panel--empty">
          <p>No abilities yet.</p>
          <span>Complete a 3x3 block to get one.</span>
        </div>
      `;
    }

    const counts = abilities.reduce<Record<AbilityType, number>>((result, ability) => {
      result[ability] = (result[ability] ?? 0) + 1;
      return result;
    }, {} as Record<AbilityType, number>);

    return `
      <div class="ability-panel">
        ${Object.entries(counts).map(([ability, count]) => {
          const abilityType = ability as AbilityType;
          const config = ABILITIES.find((item) => item.type === abilityType);

          return `
            <button
              type="button"
              class="ability-button ability-button--${abilityType}"
              data-ability-type="${abilityType}"
              title="${config?.description ?? abilityType}"
            >
              <span class="ability-button__name">${config?.label ?? abilityType}</span>
              <span class="ability-button__count">×${count}</span>
            </button>
          `;
        }).join("")}
      </div>
    `;
  }
}
