import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import MyButton from '../MyButton/MyButton'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Example/Button',
	component: MyButton,
} as ComponentMeta<typeof MyButton>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MyButton> = (args) => (
	<MyButton {...args} />
)

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	color: 'red',
	children: 'Click',
}

export const GreenBtn = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
GreenBtn.args = {
	color: 'green',
	children: 'Click',
}

// export const Secondary = Template.bind({})
// Secondary.args = {
// 	label: 'Button',
// }

// export const Large = Template.bind({})
// Large.args = {
// 	size: 'large',
// 	label: 'Button',
// }

// export const Small = Template.bind({})
// Small.args = {
// 	size: 'small',
// 	label: 'Button',
// }
