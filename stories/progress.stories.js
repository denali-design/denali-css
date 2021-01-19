export default {
    title: 'Components/Progress',
};

//Default
export const Default = ({ size, loader, width }) => {
    return (
        `<div class="d-progress ${size ? `d-progress__${size}` : ''} ${loader ? `d-progress__loading` : ''} ">
            <div class="d-progress--bar" role="progressbar" style="width: ${width}%" aria-valuenow="${width}" aria-valuemin="0" aria-valuemax="100"></div>
        </div>`
    );
};

Default.argTypes = {
    size: {
        control: {
            type: 'select',
            options: ['default', 'sm', 'md', 'lg'],
        }
    },
    loader: {
        defaultValue: false,
        control: 'boolean',
    },
    width: {
        defaultValue: 10,
        control: 'number',
      }
};

//Mulitibar
export const MultiBar = () => {
    return (
        `<div class="d-progress" >
        <div class="d-progress--bar has-bg-status-danger" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
        <div class="d-progress--bar has-bg-status-warning" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
        <div class="d-progress--bar has-bg-status-success" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
      </div>`
    );
};

//Loader
export const Loader = () => {
    return (
        `<div class="d-progress d-progress__loading"></div>`
    );
};






