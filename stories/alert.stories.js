export default {
  title: 'Components/Alert',
};

export const Block = ({ title, description, icon, status }) => {
  return (
    `<div class="alert is-block is-${status}">
      <span class="d-icon d-${icon}"></span>
      <div>
        <h5>${title}</h5>
        <p>${description}</p>
      </div>
      <span class="link close is-secondary"><span class="d-icon d-close is-sub"></span></span>
    </div>`
  );
};

Block.argTypes = {
  title: { 
    defaultValue: 'This is a title',
    control: 'text',
  },
  description: { 
    defaultValue: 'This is a description for the alert context.',
    control: 'text',
  },
  icon: { 
    defaultValue: 'domain',
    control: 'text',
  },
  status: {
    defaultValue: 'default',
    control: { 
      type: 'select',
      options: ['default', 'info', 'success', 'warning', 'danger'],
    },
  },
};

export const inline = () => {
  return (
    `<div class="alert is-inline">
      <p><span class="is-bold">Title</span> Do not use for Production or CI/CD (Screwdriver)</p>
    </div>`
  );
};

export const Notification = ({ title, description, icon, status }) => {
  return (
    `<div class="alert is-${status}">
      <span class="d-icon d-${icon}"></span>
      <div>
        <h5>${title}</h5>
        <p>${description}</p>
      </div>
      <span class="link close is-secondary"><span class="d-icon d-close is-sub"></span></span>
    </div>`
  );
};

Notification.argTypes = {
  title: { 
    defaultValue: 'This is a title',
    control: 'text',
  },
  description: { 
    defaultValue: 'This is a description for the alert context.',
    control: 'text',
  },
  icon: { 
    defaultValue: 'domain',
    control: 'text',
  },
  status: {
    defaultValue: 'default',
    control: { 
      type: 'select',
      options: ['default', 'info', 'success', 'warning', 'danger'],
    },
  },
};