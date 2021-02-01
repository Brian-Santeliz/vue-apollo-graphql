<template>
  <mdb-navbar expand="large" dark color="indigo">
    <router-link to="/">
      <mdb-navbar-brand href="#"> Vuejs & Apollo </mdb-navbar-brand>
    </router-link>
    <mdb-navbar-toggler>
      <mdb-navbar-nav right>
        <router-link to="/add">
          <mdb-nav-item active> Form </mdb-nav-item>
        </router-link>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
import {
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbNavItem,
} from "mdbvue";

export default {
  name: "Navbar",
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
  },
};
</script>

<style>
</style>