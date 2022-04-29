import { ComponentStoryObj, Meta } from "@storybook/react";
import { ComponentProps } from "react";
import { Close } from "./index";
declare type CloseType = typeof Close;
declare type CloseStory = ComponentStoryObj<CloseType>;
declare const meta: Meta<ComponentProps<CloseType>>;
export default meta;
export declare const Default: CloseStory;
export declare const Coloring: CloseStory;
