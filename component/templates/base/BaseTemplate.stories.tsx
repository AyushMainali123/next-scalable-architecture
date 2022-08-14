import { ComponentMeta, ComponentStory } from '@storybook/react'
import BaseTemplate, { IBaseTemplate } from './BaseTemplate'
import { mockBaseTemplateProps } from './baseTemplate.mocks'

export default {
    title: "templates/Base Template",
    component: BaseTemplate,
    argTypes: {}
} as ComponentMeta<typeof BaseTemplate>

const Template: ComponentStory<typeof BaseTemplate> = (args) => {
    return (
        <BaseTemplate {...args} />
    )
}

export const Base = Template.bind({});

Base.args = {
    ...mockBaseTemplateProps.base
} as IBaseTemplate
