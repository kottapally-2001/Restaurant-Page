const content = document.getElementById("content");

function loadHome() {
  content.innerHTML = `
    <div class="home-bg">
      <h1>Welcome to Qtranz Restaurant!</h1>
      <h2>We serve the best food in town with love and passion.</h2>
      <p>Gather your friends, bring your family, or just bring your appetite! At Qtranz,
       we serve happiness on every plate.</p>
        <p>Join us for a culinary adventure that will tantalize your taste buds and leave you craving for more.</p>
        <p>Whether you're in the mood for a quick bite or a leisurely meal, we've got you covered.</p>
        <p>Come hungry, leave happy!</p>
    </div>
  `;
}


function loadMenu() {
  content.innerHTML = `
    <section class="menu-bg">
      <h2> Menu</h2>
      <div class="menu-grid">
        <div class="menu-item">🍕 <h3>Pizza</h3><p>@150</p></div>
        <div class="menu-item">🍔 <h3>Burger</h3><p>@120</p></div>
        <div class="menu-item">🥗 <h3>Salad</h3><p>@80</p></div>
        <div class="menu-item">🍝 <h3>Pasta</h3><p>@60</p></div>
        <div class="menu-item">🥪 <h3>Sandwich</h3><p>@90</p></div>
        <div class="menu-item">🍜 <h3>Noodles</h3><p>@100</p></div>
        <div class="menu-item">🥘 <h3>Biryani</h3><p>@200</p></div>
        <div class="menu-item">🥘 <h3>Curry</h3><p>@180</p></div>
        <div class="menu-item">🍵 <h3>Tea</h3><p>@40</p></div>
        <div class="menu-item">☕ <h3>Coffee</h3><p>@60</p></div>
        <div class="menu-item">🍹 <h3>Juice</h3><p>@50</p></div>
        <div class="menu-item">🍰 <h3>Cake</h3><p>@100</p></div>
        <div class="menu-item">🍦 <h3>Ice Cream</h3><p>@70</p></div>
        <div class="menu-item">🥤 <h3>Soft Drink</h3><p>@30</p></div>
      </div>
    </section>
  `;
}


function loadAbout() {
  content.innerHTML = `
    <div class="about-bg">
    <h1>About Us</h1>
    <h2>Welcome to Qtranz, where food meets madness and flavor never sleeps!</h2>
    <p>We believe every bite should be bold, fun, and unforgettable.</p>
    <p>At Qtranz, we blend crazy creativity with mad passion to bring you a menu that's as unique as our name.</p>
    <p>We're here to take your taste buds on a wild ride.</p>
    <P>Come hungry, leave happy, and remember… at Qtrams, flavor is the only rule.</p>
    <p><strong>Contact Us:</strong> info@Qtranz.com | 📞 +91 9001001000</p>
    </div>
    `;
}

// Home
loadHome();

// Events
document.getElementById("home").addEventListener("click", loadHome);
document.getElementById("menu").addEventListener("click", loadMenu);
document.getElementById("about").addEventListener("click", loadAbout);
