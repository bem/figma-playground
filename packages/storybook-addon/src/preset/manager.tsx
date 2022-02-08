import { addons, types } from "@storybook/addons";

import { ADDON_ID, COMBINATIONS_ACTIVE_ID, DRAG_ACTIVE_ID, PANEL_ID } from "../constants";
import { Combinations, Combinations as CombinationsButton } from "../components/ToolbarItems/Combinations";
import { DragEnable as DragEnableButton } from "../components/ToolbarItems/DragEnable";
import { CombinePanel } from "../components/CombinePanel/CombinePanel";
import React from "react";
import { AddonPanel } from "@storybook/components";

addons.register(ADDON_ID, () => {
  addons.add(COMBINATIONS_ACTIVE_ID, {
    type: types.TOOL,
    title: "Enable Combinations",
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: Combinations,
  });

  addons.add(DRAG_ACTIVE_ID, {
    type: types.TOOL,
    title: "Enable Drag'n'Drop to Figma",
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: DragEnableButton,
  });

  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: "Combinations",
    render: ({ active, key }) => (
      <AddonPanel active = {active} key = {key} >
        <CombinePanel/>
      </AddonPanel>
    )
  });
});
