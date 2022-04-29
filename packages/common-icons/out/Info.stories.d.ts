import { ComponentStoryObj, Meta } from "@storybook/react";
import { ComponentProps } from "react";
import { Info } from "./index";
declare type InfoType = typeof Info;
declare type InfoStory = ComponentStoryObj<InfoType>;
declare const meta: Meta<ComponentProps<InfoType>>;
export default meta;
export declare const Default: InfoStory;
export declare const Coloring: InfoStory;
