document.addEventListener("DOMContentLoaded", () => {
  const categoryData = {
    "adult-bedrooms-full-rooms": {
      title: "Adult Bedrooms - Full Rooms",
      description: "Explore our elegant full room setups for adult bedrooms.",
      heroImage: "../content/images_icons/hero-adult rooms.jpg",
      products: [
        { name: "JULIA Adult Room", price: "$4200", modelUrl: "../content/products/room_julia.glb", cameraOrbit: "30deg 85deg 9.5m", description: "The Julia bedroom set is the epitome of modern elegance and sophistication. Crafted from high-quality beige and travertine MDF, this stunning collection seamlessly blends timeless style with contemporary functionality." },
        { name: "LORINE Adult Room", price: "$4800", modelUrl: "../content/products/room_lorine_adult.glb", cameraOrbit: "30deg 85deg 9.7m", description:"The Lorine adult room exudes refined luxury and modern charm. Designed with a harmonious blend of greige tones and natural wood, this exquisite collection brings warmth and sophistication to your space. At the centerpiece is a massive, beautifully crafted headboard that makes a bold statement while providing unmatched comfort. Complementing the bed is an elegant wardrobe, offering ample storage with a sleek design that enhances the room's aesthetic. A sophisticated vanity and a meticulously designed chest of drawers complete the set, combining practicality with timeless elegance. The Lorine room transforms your space into a serene sanctuary of style and functionality." },
      ],
    },
    "adult-bedrooms-nightstands": {
      title: "Adult Bedrooms - Nightstands",
      description: "Explore our elegant Nightstands for adult bedrooms.",
      heroImage: "../content/images_icons/hero-adult rooms.jpg",
      products: [
        { name: "JULIA Nightstand", price: "$320.00", modelUrl: "../content/products/nightstand_julia.glb", cameraOrbit: "30deg 85deg 2m", description: "The Julia nightstand is a perfect blend of elegance and practicality, designed to complement the Julia bedroom set. Made from beige and travertine MDF, it features clean, modern lines and a sturdy build. The standout detail is its champagne-colored handle and the touch of stained glass, adding a luxurious feel to its minimalist design. With a spacious drawer for storage, the Julia nightstand is as functional as it is stylish, making it a must-have addition to your bedroom.", qrCode: "../content/qrcodes/qr-julia-nighstand.png" },
        { name: "LORINE Nightstand", price: "$240.00", modelUrl: "../content/products/nightstand_lorine_adult.glb", cameraOrbit: "30deg 85deg 2m", description: "The Lorine nightstand combines timeless charm with modern functionality, designed to seamlessly complement the Lorine adult room. Crafted with a stunning blend of greige tones and natural wood, it exudes understated elegance. Its spacious drawers provide practical storage, while its sleek design and refined details elevate the aesthetic of your bedroom. Whether paired with the full Lorine collection or used as a standalone piece, the Lorine nightstand is a perfect addition for a sophisticated and organized space." },
      ],
    },
    "adult-bedrooms-vanities": {
      title: "Adult Bedrooms - Vanities",
      description: "Explore our elegant Vanities for adult bedrooms.",
      heroImage: "../content/images_icons/hero-adult rooms.jpg",
      products: [
        { name: "JULIA Vanity", price: "$750.00", modelUrl: "../content/products/vanity_julia2.glb", cameraOrbit: "30deg 85deg 4m", description: "The Julia vanity is a statement of elegance and refined craftsmanship, designed to bring luxury and functionality to your bedroom. Crafted from beige travertine MDF, it showcases a sleek design accentuated by champagne-colored aluminum details and stained glass elements for a sophisticated touch.", qrCode: "../content/qrcodes/qr-julia-vanity.png" },
        { name: "LORINE Vanity", price: "$699.99", modelUrl: "../content/products/vanity_lorine_adult.glb", cameraOrbit: "30deg 85deg 3.5m", description: "The Lorine vanity is a masterpiece of modern sophistication and functionality. Its spacious tabletop and thoughtfully designed drawers provide ample room for organizing your beauty essentials, while its sleek silhouette and refined craftsmanship add a touch of luxury to your bedroom. Perfectly complementing the Lorine adult room collection, the Lorine vanity transforms your daily routine into a stylish and serene experience." },
        { name: "LORINE Chest", price: "$450.00", modelUrl: "../content/products/commode_lorine_adult.glb", cameraOrbit: "30deg 85deg 4m", description: "The Lorine chest of drawers combines contemporary elegance with exceptional practicality. It features multiple spacious drawers, offering ample storage to keep your essentials organized while maintaining a sleek and uncluttered look. Its minimalist design and refined craftsmanship make it not just a storage solution but a stylish statement piece, adding a touch of modern luxury to your bedroom." },
      ],
    },
    "adult-bedrooms-closets": {
      title: "Adult Bedrooms - Closets",
      description: "Explore our sophisticated closets and wardrobes for adult bedrooms.",
      heroImage: "../content/images_icons/hero-adult rooms.jpg",
      products: [
        { name: "JULIA Closet", price: "$2400", modelUrl: "../content/products/closet_julia.glb", cameraOrbit: "30deg 85deg 5m", description: "The Julia wardrobe is a luxurious and practical storage solution designed to elevate your bedroom's aesthetic. The addition of stained glass accents enhances its sophisticated design, creating a unique and timeless look. With a spacious interior, the Julia wardrobe offers ample room for organizing your clothing, accessories, and essentials. Whether paired with the full Julia bedroom set or used as a standout piece, this wardrobe seamlessly blends style and functionality." },
        { name: "LORINE Wardrobe", price: "$2850", modelUrl: "../content/products/wardrobe_lorine_adult.glb", cameraOrbit: "30deg 85deg 6m", description: "The Lorine wardrobe is a stunning blend of style and utility, designed to complete the sophisticated look of the Lorine adult room. Crafted with a mix of greige tones and natural wood, it exudes a modern yet timeless charm." },
      ],
    },
    "adult-bedrooms-beds": {
      title: "Adult Bedrooms - Beds",
      description: "Explore our elegant Beds for adult bedrooms.",
      heroImage: "../content/images_icons/hero-adult rooms.jpg",
      products: [
        { name: "JULIA Bed", price: "$1900", modelUrl: "../content/products/julia_bed.glb", cameraOrbit: "30deg 85deg 4m", description: "The Julia bed is the centerpiece of sophistication and comfort, designed to transform your bedroom into a luxurious retreat. Built for durability and style, the Julia bed ensures a restful night's sleep while elevating the overall ambiance of your space. Pair it with the full Julia bedroom collection for a cohesive and refined look." },
        { name: "LORINE Bed", price: "$2275", modelUrl: "../content/products/bed_lorine_adult.glb", cameraOrbit: "30deg 85deg 5m", description: "The Lorine bed is a bold and stylish centerpiece, designed to bring sophistication and comfort to your bedroom. Its standout feature is the massive headboard, beautifully crafted with a blend of beige and brown tones, creating an elegant and inviting focal point." },
      ],
    },
    "kids-bedrooms-full-rooms": {
      title: "Kids Bedrooms - Full Rooms",
      description: "Explore our colorful kids' bedrooms.",
      heroImage: "../content/images_icons/hero-kids rooms.jpg",
      products: [
        { name: "LARA Pink Room", price: "$2200", modelUrl: "../content/products/room_lara_pink.glb", cameraOrbit: "30deg 85deg 8m", description: "The Lara Pink room is a dreamy sanctuary designed for your little one, combining soft white and delicate pink hues to create a playful yet soothing environment. Crafted with attention to detail, the room features light, airy furniture pieces that complement the gentle color palette." },
        { name: "LARA Blue Room", price: "$2200", modelUrl: "../content/products/room_lara_blue.glb", cameraOrbit: "30deg 85deg 8m", description: "The Lara Blue room is a tranquil and stylish retreat designed for your little one, featuring a soothing combination of soft white and calming blue tones. The room's serene color palette creates an atmosphere of peace and comfort, perfect for both play and rest." },
        { name: "DOMINO Room", price: "$2850", modelUrl: "../content/products/room_domino.glb", cameraOrbit: "30deg 85deg 8m", description: "The Domino room is a playful yet elegant space designed for young children, combining soft green, beige, and natural wood tones to create a warm and inviting atmosphere. The room's color palette is balanced and soothing, perfect for fostering creativity and relaxation." },
      ],
    },
    "kids-bedrooms-nightstands": {
      title: "Kids Bedrooms - Nightstands",
      description: "Functional and colorful nightstands for kids' bedrooms.",
      heroImage: "../content/images_icons/hero-kids rooms.jpg",
      products: [
        { name: "LARA Pink Nightstand", price: "$250", modelUrl: "../content/products/nightstand_lara_pink.glb", cameraOrbit: "30deg 85deg 2m", description: "The Lara Pink nightstand is the perfect complement to the playful and serene atmosphere of the Lara Pink children's room. Designed with a soft white base and gentle pink accents, it offers a charming and functional addition to any child's bedroom.", qrCode: "../content/qrcodes/qr-lara-pink-nighstand.png" },
        { name: "LARA Blue Nightstand", price: "$250", modelUrl: "../content/products/nightstand_lara_blue.glb", cameraOrbit: "30deg 85deg 2m", description: "The Lara Blue nightstand is a perfect blend of functionality and charm, designed to complement the peaceful and stylish atmosphere of the Lara Blue children's room. Featuring a soft white base with subtle blue accents, it adds a serene touch to the bedroom while offering essential storage." },
        { name: "DOMINO Nightstand", price: "$350", modelUrl: "../content/products/nightstand_domino.glb", cameraOrbit: "30deg 85deg 2m", description: "The Domino nightstand is a playful yet sophisticated addition to the Domino kids' room. Crafted with a mix of green, beige, and natural wood tones, it brings a balanced and inviting aesthetic to the space. The standout feature of this nightstand is its drawer handles, designed to resemble small black circles, echoing the classic look of domino game pieces and adding a fun, whimsical touch.", qrCode: "../content/qrcodes/qr-domino-nighstand.png" },
        { name: "LORINE Nightstand", price: "$270", modelUrl: "../content/products/nightstand_lorine_adult.glb", cameraOrbit: "30deg 85deg 2m", description: "The Lorine nightstand combines timeless charm with modern functionality, designed to seamlessly complement the Lorine adult room. Crafted with a stunning blend of greige tones and natural wood, it exudes understated elegance. Its spacious drawers provide practical storage, while its sleek design and refined details elevate the aesthetic of your bedroom. Whether paired with the full Lorine collection or used as a standalone piece, the Lorine nightstand is a perfect addition for a sophisticated and organized space." },
      ],
    },
    "kids-bedrooms-desks": {
      title: "Kids Bedrooms - Desks",
      description: "Functional and colorful desks for kids' bedrooms.",
      heroImage: "../content/images_icons/hero-kids rooms.jpg",
      products: [
        { name: "LARA Pink Desk", price: "$549.99", modelUrl: "../content/products/desk_lara_pink.glb", cameraOrbit: "30deg 85deg 4m", description: "The Lara Pink desk is a delightful and functional addition to the Lara Pink children's room, designed to inspire creativity and focus. Featuring a soft white base with gentle pink accents, this desk creates a calming and inviting space for your little one to study, create, or play." },
        { name: "LARA Blue Desk", price: "$549.99", modelUrl: "../content/products/desk_lara_blue.glb", cameraOrbit: "30deg 85deg 4m", description: "The Lara Blue desk is a serene and functional piece, designed to perfectly complement the peaceful atmosphere of the Lara Blue children's room. Featuring a soft white base with subtle blue accents, this desk creates an inspiring space for your little one to study, create, or play.", qrCode: "../content/qrcodes/qr-lara-blue-desk.png" },
        { name: "DOMINO Desk", price: "$650.00", modelUrl: "../content/products/desk_domino.glb", cameraOrbit: "30deg 85deg 4m", description: "The Domino desk is a unique and functional addition to the Domino kids' room, blending playful design with practicality. Crafted in a harmonious mix of green, beige, and natural wood tones, it creates a warm and inviting space for your child to study, create, or organize.", qrCode: "../content/qrcodes/qr-domino-desk.png" },
      ],
    },
    "kids-bedrooms-vanities": {
      title: "Kids Bedrooms - Vanities",
      description: "Functional and colorful vanities for kids' bedrooms.",
      heroImage: "../content/images_icons/hero-kids rooms.jpg",
      products: [
        { name: "DOMINO Vanity", price: "$580.00", modelUrl: "../content/products/vanity_domino.glb", cameraOrbit: "30deg 85deg 4m", description: "The Domino vanity is a charming and functional piece designed to complement the playful yet stylish atmosphere of the Domino kids' room. Featuring a blend of green, beige, and natural wood tones, it brings warmth and personality to the space, while maintaining a soothing and balanced aesthetic." },
      ],
    },
    "kids-bedrooms-closets": {
      title: "Kids Bedrooms - Closets",
      description: "Functional and colorful closets and wardrobes for kids' bedrooms.",
      heroImage: "../content/images_icons/hero-kids rooms.jpg",
      products: [
        { name: "LARA Pink Wardrobe", price: "$1299.99", modelUrl: "../content/products/wardrobe_lara_pink.glb", cameraOrbit: "30deg 85deg 5m", description: "The Lara Pink closet is a perfect blend of functionality and charm, designed to complement the soft, playful atmosphere of the Lara Pink children's room. Crafted in soft white with gentle pink accents, it adds a soothing touch to your child's space while providing ample storage. Equipped with a full-length mirror, this closet not only offers space for clothes and accessories but also helps to create an interactive and fun space for getting dressed." },
        { name: "LARA Blue Wardrobe", price: "$1299.99", modelUrl: "../content/products/wardrobe_lara_blue.glb", cameraOrbit: "30deg 85deg 5m", description: "The Lara Blue closet is a perfect blend of functionality and charm, designed to complement the soft, playful atmosphere of the Lara Blue children's room. Crafted in soft white with gentle blue accents, it adds a soothing touch to your child's space while providing ample storage. Equipped with a full-length mirror, this closet not only offers space for clothes and accessories but also helps to create an interactive and fun space for getting dressed." },
        { name: "DOMINO Closet", price: "$1450", modelUrl: "../content/products/closet_domino.glb", cameraOrbit: "30deg 85deg 5m", description: "The Domino closet is a stylish and practical addition to the Domino kids' room, featuring a delightful blend of green, beige, and natural wood tones that create a warm and inviting atmosphere. With a unique design that reflects the playful spirit of the room, the closet stands out with its sleek, modern lines and thoughtful details." },
      ],
    },
    "kids-bedrooms-beds": {
      title: "Kids Bedrooms - Beds",
      description: "Functional and colorful beds for kids' bedrooms.",
      heroImage: "../content/images_icons/hero-kids rooms.jpg",
      products: [
        { name: "LARA Pink Bed", price: "$1050", modelUrl: "../content/products/bed_lara_pink.glb", cameraOrbit: "30deg 85deg 4m", description: "The Lara Pink bed is a beautiful and playful centerpiece designed to create a dreamy sleep environment for your little one. Made with a combination of light and dark pink panels, this bed offers a charming contrast that adds depth and character to the room." },
        { name: "LARA Blue Bed", price: "$1050", modelUrl: "../content/products/bed_lara_blue.glb", cameraOrbit: "30deg 85deg 4m", description: "The Lara Blue bed is a charming and peaceful centerpiece, designed with a combination of light and dark blue panels that create a soothing yet dynamic look. The soft blue tones evoke calmness, while the contrast of the darker shades adds depth and visual interest to the room." },
        { name: "DOMINO Bed", price: "$1200", modelUrl: "../content/products/bed_domino.glb", cameraOrbit: "30deg 85deg 4m", description: "The Domino bed is a whimsical and charming addition to any child's room, designed to spark creativity and provide a cozy sleep space. The headboard features a playful cloud shape, painted in a soft light green hue that adds a calming and dreamy touch to the room." },
      ],
    },
  };

  const urlParams = new URLSearchParams(window.location.search);
  const categoryKey = urlParams.get("category");
  const category = categoryData[categoryKey];

  if (category) {
    // Update Hero Section
    document.getElementById("hero-image").src = category.heroImage;
    document.getElementById("category-title").textContent = category.title;
    document.getElementById("category-description").textContent = category.description;

    // Update Product Gallery
    const productGallery = document.getElementById("product-gallery");
    document.getElementById("product-count").textContent = `${category.products.length} Products Available`;

    category.products.forEach((product, index) => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";
      productCard.innerHTML = `
        <model-viewer
          src="${product.modelUrl}"
          alt="${product.name}"
          camera-orbit="${product.cameraOrbit}"
          camera-controls
          shadow-intensity="1"
        ></model-viewer>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">${product.price}</p>
        <button class="action-button">Add to Cart</button>
      `;

      // Add click event to open product page
      productCard.addEventListener("click", () => {
        localStorage.setItem("selectedProduct", JSON.stringify(product));
        window.location.href = `product.html`;
      });

      // Hover effects for model rotation
      const modelViewer = productCard.querySelector("model-viewer");
      modelViewer.addEventListener("mouseenter", () => modelViewer.setAttribute("auto-rotate", ""));
      modelViewer.addEventListener("mouseleave", () => {
        modelViewer.removeAttribute("auto-rotate");
        modelViewer.setAttribute("camera-orbit", product.cameraOrbit);
      });

      productGallery.appendChild(productCard);
    });
  } else {
    console.error("Invalid category. Please check the URL.");
  }
});