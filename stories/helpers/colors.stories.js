export default {
  title: 'Helpers/Colors',
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

export const Fill = ({ color, shade }) => {
  return (
    `<svg class="fill-${color}-${shade}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="128" height="128" viewBox="0 0 32 32">
    <path d="M30.148 5.588c-2.934-3.42-7.288-5.588-12.148-5.588-8.837 0-16 7.163-16 16s7.163 16 16 16c4.86 0 9.213-2.167 12.148-5.588l-10.148-10.412 10.148-10.412zM22 3.769c1.232 0 2.231 0.999 2.231 2.231s-0.999 2.231-2.231 2.231-2.231-0.999-2.231-2.231c0-1.232 0.999-2.231 2.231-2.231z"></path>
</svg>`
  );
};

Fill.argTypes = {
  shade: {
    defaultValue: '400',
    control: { 
      type: 'select',
      options: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    },
  },
  color: {
    defaultValue: 'yellow',
    control: { 
      type: 'select',
      options: ['brand', 'grey', 'red', 'orange', 'yellow', 'lime', 'green', 'sky', 'blue', 'purple', 'violet', 'pink'],
    },
  },
};