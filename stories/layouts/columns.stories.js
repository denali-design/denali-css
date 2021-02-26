export default {
  title: 'Layouts/Columns',
};

export const Basic = () => {
  return (
    `<div class="container">
    This is a container
    <div class="row">
      <div class="col has-bg-violet-500 p-10 br-4">Flex:auto column</div>
    </div>
  </div>
  
  <br>
  
  <div class="container-full">
    This is a full container
    <div class="row">
      <div class="col has-bg-violet-500 p-10 br-4">Flex:auto column</div>
    </div>
  </div>`
  );
};

export const Size = () => {
  return (
    `<div class="container">
    This is a container
    <div class="row has-bg-sky-500 p-10 br-4">
      <div class="col-2-6 has-bg-violet-500 p-10 br-4">2/6 width column</div>
    </div>
  </div>
  <br>
  <div class="container-full">
    This is a full container
    <div class="row has-bg-sky-500 p-10 br-4">
      <div class="col-4-5 has-bg-violet-500 p-10 br-4">4/5 width column</div>
    </div>
  </div>`
  );
};

export const MediaQueriesWithSize = () => {
  return (
    `<div class="container">
    <div class="row has-bg-sky-500 p-10 br-4">
      <div class="xs-col-12-12 sm-col-9-12 md-col-6-12 has-bg-violet-500 p-10 br-4">
        <p class="sm-hide md-hide lg-hide xl-hide has-bg-violet-500">1/12 width column at xs breakpoint</p>
        <p class="xs-hide md-hide lg-hide xl-hide has-bg-violet-500">3/12 width column at sm breakpoint</p>
        <p class="xs-hide sm-hide lg-hide xl-hide has-bg-violet-500">6/12 width column at md breakpoint</p>
      </div>
    </div>
  </div>`
  );
};

export const Offset = () => {
  return (
    `<div class="container">
    This is a container
    <div class="row has-bg-sky-500 p-10 br-4">
      <div class="col-6-12 col-off-3-12 has-bg-violet-500 p-10 br-4">2/6 width column with 3/12 offset</div>
    </div>
  </div>
  
  <br>
  
  <div class="container-full">
    This is a full container
    <div class="row has-bg-sky-500 p-10 br-4">
      <div class="col-4-5 col-off-1-5 has-bg-violet-500 p-10 br-4">4/5 width column with 1/5 offset</div>
    </div>
  </div>`
  );
};

export const MediaQueriesWithOffset = () => {
  return (
    `<div class="container">
    <div class="row has-bg-sky-500 p-10 br-4">
      <div class="xs-col-5-11 xs-col-off-6-11 has-bg-violet-500 p-10 br-4">
        <p class="sm-hide md-hide lg-hide xl-hide has-bg-violet-500">5/11 width column with 6/11 offset at xs breakpoint</p>
        <p class="xs-hide has-bg-violet-500">5/11 width column with no offset</p>
      </div>
    </div>
  </div>`
  );
};

export const Gutters = () => {
  return (
    `<div class="container">
    This is a normal container
    <div class="row">
      <div class="col has-bg-violet-500 p-10 br-4">col</div>
      <div class="col has-bg-violet-500 p-10 br-4">col</div>
      <div class="col has-bg-violet-500 p-10 br-4">col</div>
    </div>
  </div>
  <br>
  <div class="container is-gutterless">
    This is a gutterless container
    <div class="row">
      <div class="col has-bg-violet-500 p-10 br-4">col</div>
      <div class="col has-bg-violet-500 p-10 br-4">col</div>
      <div class="col has-bg-violet-500 p-10 br-4">col</div>
    </div>
  </div>`
  );
};
