export default {
  title: 'Aesthics/Colors',
};

export const Text = ({ color, shade }) => {
  return (
    `<i class="d-icon d-user-profile-circle is-medium is-${color}-${shade}"></i>`
  );
};

Text.argTypes = {
  shade: {
    defaultValue: '500',
    control: { 
      type: 'select',
      options: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    },
  },
  color: {
    defaultValue: 'orange',
    control: { 
      type: 'select',
      options: ['brand', 'grey', 'red', 'orange', 'yellow', 'lime', 'green', 'sky', 'blue', 'purple', 'violet', 'pink'],
    },
  },
};

export const Background = ({ color, shade }) => {
  return (
    `<div class="box has-bg-${color}-${shade}">
      <h4>This is a box with a modifed background color.</h4>
    </div>`
  );
};

Background.argTypes = {
  shade: {
    defaultValue: '300',
    control: { 
      type: 'select',
      options: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    },
  },
  color: {
    defaultValue: 'purple',
    control: { 
      type: 'select',
      options: ['brand', 'grey', 'red', 'orange', 'yellow', 'lime', 'green', 'sky', 'blue', 'purple', 'violet', 'pink'],
    },
  },
};