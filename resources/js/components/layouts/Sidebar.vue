<template>
    <!-- Vertical navbar -->
<div class="vertical-nav bg-white" id="sidebar">
    <div class="py-4 px-3 mb-4 bg-light">
      <div class="media d-flex align-items-center"><img src="/images/avatar.png" alt="..." width="65" class="mr-3 rounded-circle img-thumbnail shadow-sm">
        <div class="media-body">
          <h4 class="m-0">Njeri Ndungu</h4>
          <p class="font-weight-light text-muted mb-0">Business owner</p>
        </div>
      </div>
    </div>
  
    <p class="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">Main</p>
  
    <ul class="nav flex-column bg-white mb-0">
      <li class="nav-item">
        <a href="#" class="nav-link text-dark bg-light">
                  <i class="fa fa-th-large mr-3 text-primary fa-fw"></i>
                  Home
              </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link text-dark ">
                  <i class="fa fa-address-card mr-3 text-primary fa-fw"></i>
                  About
              </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link text-dark ">
                  <i class="fa fa-cubes mr-3 text-primary fa-fw"></i>
                  Services
              </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link text-dark ">
                  <i class="fa fa-picture-o mr-3 text-primary fa-fw"></i>
                  Gallery
              </a>
      </li>
    </ul>
  
    <p class="text-gray font-weight-bold text-uppercase px-3 small py-4 mb-0">Charts</p>
  
    <ul class="nav flex-column bg-white mb-0">
      <li class="nav-item">
        <a href="#" class="nav-link text-dark ">
                  <i class="fa fa-area-chart mr-3 text-primary fa-fw"></i>
                  Area charts
              </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link text-dark ">
                  <i class="fa fa-bar-chart mr-3 text-primary fa-fw"></i>
                  Bar charts
              </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link text-dark ">
                  <i class="fa fa-pie-chart mr-3 text-primary fa-fw"></i>
                  Pie charts
              </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link text-dark ">
                  <i class="fa fa-line-chart mr-3 text-primary fa-fw"></i>
                  Line charts
              </a>
      </li>
    </ul>
  </div>
  <!-- End vertical navbar -->

</template>
<script>
export default{
    name: 'Sidebar'
}


</script>

  <style scoped>
.vertical-nav {
  min-width: 17rem;
  width: 17rem;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.4s;
}

  </style>