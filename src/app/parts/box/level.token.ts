import { Inject, InjectionToken, Optional, Provider, SkipSelf } from '@angular/core';

/**
 * DI token used by <sp-box> to track the hierarchy level.
 * It is auto incrementing.
 *
 * Each <sp-box> provides BOX_LEVEL token for its children.
 *
 * DI is resolved when component is created. When a child
 * <sp-box> is created - even dynamically (later) - nearest
 * parent's BOX_LEVEL is resolved for use.
 */
export const BOX_LEVEL = new InjectionToken<number>('BOX_LEVEL');

/**
 * This factory method is called angular to resolve BOX_LEVEL.
 * Based on decorations, this injects parent's BOX_LEVEL.
 */
export function boxLevelFactory(parentLevel: number | null): number {
  return (parentLevel ?? -1) + 1;
}

/**
 * Defines provider to be injected in the component.
 */
export const BOX_LEVEL_PROVIDER: Provider = {
  provide: BOX_LEVEL,
  useFactory: boxLevelFactory,
  deps: [
    [
      new Optional(),           // If token not found, return null
      new SkipSelf(),           // Skip current injector, look for value in parent <sp-box>
      new Inject(BOX_LEVEL)     // Token being injected
    ]
  ]
};
