// src/utils/utils.js
import Swal from "sweetalert2";

export const showUnderDevelopment = () => {
  Swal.fire({
    icon: "info",
    title: "Page Under Development",
    text: "This page is currently under development. Please check back later for more information.",
    confirmButtonText: "Got it!",
  });
};