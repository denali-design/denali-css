export default {
  title: "Components/Table",
};

export const Default = ({ striped, cards }) => {
  return `<table class="table 
            ${striped ? "is-striped" : ""} 
            ${cards ? "is-cards" : ""}">
      <thead>
    <tr>
      <th class="is-sorted is-sorted__descend">Name</th>
      <th>Domain</th>
      <th>User</th>
      <th>Date</th>
      <th class="is-center">Delete All</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th><a href="#">AC::CGQ1::BULLETMAIL_CLIENTS</a></th>
      <td><a href="#">pes.acl.greylist</a></td>
      <td>Chas Turansky</td>
      <td class="is-mono">09/27/2020</td>
      <td class="is-center"><a href="#"><span class="d-icon d-trash is-small"></span></a></td>
    </tr>
    <tr>
      <th><a href="#">BULLETMAIL_CLIENTS</a></th>
      <td><a href="#">pes.acl.greylist</a></td>
      <td>Chas Turansky</td>
      <td class="is-mono">09/27/2020</td>
      <td class="is-center"><a href="#"><span class="d-icon d-trash is-small"></span></a></td>
    </tr>
    <tr>
      <th><a href="#">AC::CGQ1::BULLETMAIL_CLIENTS</a></th>
      <td><a href="#">pes.acl.greylist</a></td>
      <td>Chas Turansky</td>
      <td class="is-mono">09/27/2020</td>
      <td class="is-center"><a href="#"><span class="d-icon d-trash is-small"></span></a></td>
    </tr>
    <tr>
      <th><a href="#">AC::CGQ1::BULLETMAIL_CLIENTS</a></th>
      <td><a href="#">pes.acl.greylist</a></td>
      <td>Chas Turansky</td>
      <td class="is-mono">09/27/2020</td>
      <td class="is-center"><a href="#"><span class="d-icon d-trash is-small"></span></a></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th><a href="#">Footer</a></th>
      <td><a href="#">pes.acl.greylist</a></td>
      <td>Chas Turansky</td>
      <td class="is-mono">09/27/2020</td>
      <td class="is-center"><a href="#"><i class="d-icon d-trash is-small"></i></a></td>
    </tr>
  </tfoot>
</table>`;
};

Default.argTypes = {
  striped: {
    defaultValue: false,
    control: "boolean",
  },
  cards: {
    defaultValue: false,
    control: "boolean",
  },
};

export const Alignment = () => {
  return `<table class="table">
      <tbody>
          <tr>
              <th>Default</th>
              <th class="is-center">Center</th>
              <th class="is-right">Right</th>
          </tr>
          <tr>
              <td><span class="d-icon d-text-left"></span></td>
              <td class="is-center"><span class="d-icon d-text-center"></span></td>
              <td class="is-right"><span class="d-icon d-text-right"></span></td>
          </tr>
      </tbody>
  </table>`;
};

export const Freeze = () => {
  return `<div class="table-container table-container__freeze">
  <table class="table">
    <thead>
      <tr>
        <th class="is-sorted is-sorted__descend">
          <div class="checkbox">
            <input id="denali-checkbox-0" type="checkbox" value="value1" data-partial />
            <label for="denali-checkbox-0"></label>
          </div>
          Name
        </th>
        <th>Domain</th>
        <th>User</th>
        <th>Date</th>
        <th class="is-center">Delete All</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>
          <div class="checkbox">
            <input id="denali-checkbox-1" type="checkbox" value="value1" checked />
            <label for="denali-checkbox-1"></label>
          </div>
          BULLETMAIL_CLIENTS
        </th>
        <td><a href="#">pes.acl.greylist</a></td>
        <td>Chas Turansky</td>
        <td class="is-mono">09/27/2020</td>
        <td class="is-center"><a href="#"><span class="d-icon d-trash is-small"></span></a></td>
      </tr>
      <tr>
        <th>
          <div class="checkbox">
            <input id="denali-checkbox-2" type="checkbox" value="value1" />
            <label for="denali-checkbox-2"></label>
          </div>
          CLIENTS
        </th>
        <td><a href="#">pes.acl.greylist</a></td>
        <td>Chas Turansky</td>
        <td class="is-mono">09/27/2020</td>
        <td class="is-center"><a href="#"><span class="d-icon d-trash is-small"></span></a></td>
      </tr>
      <tr>
        <th>
          <div class="checkbox">
            <input id="denali-checkbox-3" type="checkbox" value="value1" />
            <label for="denali-checkbox-3"></label>
          </div>
          MAIL_USER
        </th>
        <td><a href="#">pes.acl.greylist</a></td>
        <td>Chas Turansky</td>
        <td class="is-mono">09/27/2020</td>
        <td class="is-center"><a href="#"><span class="d-icon d-trash is-small"></span></a></td>
      </tr>
      <tr>
        <th>
          <div class="checkbox">
            <input id="denali-checkbox-4" type="checkbox" value="value1" checked />
            <label for="denali-checkbox-4"></label>
          </div>
          TEST_CLIENTS
        </th>
        <td><a href="#">pes.acl.greylist</a></td>
        <td>Chas Turansky</td>
        <td class="is-mono">09/27/2020</td>
        <td class="is-center"><a href="#"><span class="d-icon d-trash is-small"></span></a></td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th><a href="#">Footer</a></th>
        <th><a href="#">pes.acl.greylist</a></th>
        <td>Chas Turansky</td>
        <td class="is-mono">09/27/2020</td>
        <th class="is-center"><a href="#"><i class="d-icon d-trash is-small"></i></a></th>
      </tr>
    </tfoot>
  </table>
</div>`;
};
