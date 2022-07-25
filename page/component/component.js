"use strict";

import { downListComponent } from "./downList/downList.js";
import { switchComponent } from "./switch/switch.js";
import { cardComponent } from "./card/card.js";
import { helpComponent } from "./help/help.js";
import { buttonComponent } from "./button/button.js";
import { expandComponent } from "./expand/expand.js";
import { sliderComponent } from "./slider/slider.js";
import { radioComponent } from "./radio/radio.js";
import { powerHistogramComponent } from "./powerHistogram/powerHistogram.js";
export const component = angular.module("component", [
  "switchComponent",
  "downListComponent",
  "cardComponent",
  "helpComponent",
  "buttonComponent",
  "expandComponent",
  "sliderComponent",
  "radioComponent",
  "powerHistogramComponent",
]);
