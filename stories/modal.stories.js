export default {
    title: 'Components/Modal',
};

//Default
export const Default = ({ full }) => {
    return (
        `<div id="open-modal" class="modal is-active">
          <div class="modal-container ${full ? 'is-full' : ''}">
              <a href="#close" class="close"><i class="d-icon d-close"></i></a>
              <div class="modal-content">
                  <h3>This is a modal</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
          </div>
      </div>`
    );
};

Default.argTypes = {
    full: {
        defaultValue: false,
        control: 'boolean',
    }
};

// Modal with Header and footer
export const ModalHeaderAndFooter = ({ full }) => {
    return (
        `<div class="modal is-active">
            <div class="modal-container ${full ? 'is-full' : ''}" style="width:600px;">
            <a href="#close" class="close"><i class="d-icon d-close"></i></a>
                <div class="modal-header">
                    <h3>This is a header</h3>
                </div>
                <div class="modal-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
                <div class="modal-footer">
                <p style="margin:0px;">This is a footer</p>
                </div>
            </div>
        </div>`
    );
};

ModalHeaderAndFooter.argTypes = {
    full: {
        defaultValue: false,
        control: 'boolean',
    }
};

