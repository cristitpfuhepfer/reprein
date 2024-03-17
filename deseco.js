import { eById } from "./utils.js";

setOnClick(eById("logout"), async (e) => {
  e.preventDefault();
  const res = await fetch("/api/logout", { method: "POST" });
  if (res.ok) {
    window.location.href = "/";
  } else {
    alert("Error logging out");
  }
});
