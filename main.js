const form = document.querySelector("#access-form");
const confirmation = document.querySelector("#confirmation");
const draft = document.querySelector("#draft");

if (form && confirmation && draft) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const host = String(data.get("host") || "").trim();
    const note = String(data.get("note") || "").trim();

    const body = [
      `Name: ${name}`,
      `Work email: ${email}`,
      `Repository host: ${host}`,
      "",
      "What the first brief should cover:",
      note || "(not specified)",
    ].join("\n");

    draft.value = body;
    confirmation.hidden = false;
    confirmation.scrollIntoView({ behavior: "smooth", block: "nearest" });

    const href = `mailto:contact@devxsolution.online?subject=${encodeURIComponent(
      `DevX early access — ${name}`
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
  });
}
