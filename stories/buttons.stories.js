export default {
    title: 'Components/Buttons',
};

//Button type : Text
export const Default = ({ style, active, disabled, inverse, full, size, buttonText }) => {
    return (
        `<button 
            class="button 
                ${style ? `is-${style}` : ''}
                ${size ? `is-${size}` : ''}
                ${full ? 'is-full' : ''}
                ${active ? 'is-active' : ''}
                ${inverse ? 'is-inverse' : ''} "
                ${disabled ? 'disabled = ""' : ''}> ${buttonText}
        </button>`
    );
};

Default.argTypes = {
    style: {
        defaultValue: 'solid',
        control: {
            type: 'select',
            options: ['solid', 'outline', 'ghost', 'text', 'danger'],
        }
    },
    size: {
        control: {
            type: 'select',
            options: ['default', 'large', 'medium', 'small'],
        }
    },
    full: {
        defaultValue: false,
        control: 'boolean',
    },
    active: {
        defaultValue: false,
        control: 'boolean',
    },
    disabled: {
        defaultValue: false,
        control: 'boolean'
    },
    inverse: {
        defaultValue: false,
        control: 'boolean'
    },
    buttonText: {
        defaultValue: 'Button',
        control: 'text',
    }
};

//Button type: Icons & Icons with text
export const Icon = ({ iconName, iconSize, style, active, disabled, full, iconOnly, buttonText, buttonSize, inverse }) => {
    return (
        `<button class="button
            ${style ? `is-${style}` : ''}
            ${buttonSize ? `is-${buttonSize}` : ''}
            ${active ? 'is-active' : ''}
            ${inverse ? 'is-inverse' : ''}
            ${full ? 'is-full' : ''} 
            ${iconOnly ? 'has-icon' : ''}" 
            ${disabled ? 'disabled = ""' : ''}>
            <i class="d-icon d-${iconName} is-${iconSize} "></i>
            ${iconOnly ? '' : buttonText}
        </button>`
    );
};

Icon.argTypes = {
    style: {
        defaultValue: 'solid',
        control: {
            type: 'select',
            options: ['solid', 'outline', 'ghost', 'text', 'danger'],
        }
    },
    buttonSize: {
        defaultValue: 'default',
        control: {
            type: 'select',
            options: ['default', 'large', 'medium', 'small'],
        }
    },
    active: {
        defaultValue: false,
        control: 'boolean',
    },
    disabled: {
        defaultValue: false,
        control: 'boolean'
    },
    full: {
        defaultValue: false,
        control: 'boolean',
    },
    inverse: {
        defaultValue: false,
        control: 'boolean'
    },
    iconName: {
        defaultValue: 'share',
        control: 'text'
    },
    iconSize: {
        defaultValue: 'small',
        control: {
            type: 'select',
            options: ['default', 'extrasmall', 'small', 'medium', 'large']
        }
    },
    buttonText: {
        defaultValue: 'Button with icon',
        control: 'text'
    },
    iconOnly: {
        defaultValue: false,
        control: 'boolean'
    }
}